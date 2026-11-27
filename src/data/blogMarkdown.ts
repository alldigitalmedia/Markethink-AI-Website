import { getCollection, type CollectionEntry } from "astro:content";
import { santiagoSosaAuthor, type BlogAuthorInput } from "./blogAuthors";
import { insightPosts, type BlogPost } from "./blogPosts";

// Markdown posts (src/content/blog/<slug>.md) mapped onto the BlogPost shape so
// the existing blog pages render them like the TypeScript posts in blogPosts.ts.

type Section = BlogPost["sections"][number];
type Faq = BlogPost["faq"][number];
type Block =
  | { kind: "heading"; level: number; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "bullet"; text: string }
  | { kind: "image"; alt: string; src: string };

const SITE_URL = "https://markethink.ai";
const WORDS_PER_MINUTE = 220;
const EXCERPT_MAX_LENGTH = 160;
const FAQ_HEADING = /^(faqs?|frequently asked questions)$/i;

// Generic fallback art: the blog index's own sharing collage, so a post without
// images never borrows another article's hero.
const DEFAULT_IMAGE =
  "https://dashboard.markethink.ai/generated/landing/markethink/markethink/markethink-blog-index-og-1200x630.jpg";
const DEFAULT_IMAGE_ALT =
  "Nine illustrative business-owner editorial scenes showing marketing decisions across retail, making, hospitality, and service businesses.";

// Bylines the TypeScript posts already use. Any other name gets "Markethink" as
// its title. "Markethink Editorial Team" (the default) resolves to Santiago Sosa
// through resolveBlogAuthor in blogAuthors.ts.
const KNOWN_AUTHORS: Record<string, BlogAuthorInput> = {
  [santiagoSosaAuthor.name.toLowerCase()]: santiagoSosaAuthor,
  markethink: {
    name: "Markethink",
    title: "Published by the Markethink team",
    schemaType: "Organization",
    url: `${SITE_URL}/`,
  },
};

const typeScriptSlugs = new Set(insightPosts.map((post) => post.slug));

// The article page prints paragraphs as plain text, so inline markdown is
// reduced to its visible words (a link keeps its anchor text).
function plainText(markdown: string): string {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__)(.+?)\1/g, "$2")
    .replace(/\*([^*\s][^*]*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(body: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  const endParagraph = () => {
    if (paragraph.length) blocks.push({ kind: "paragraph", text: paragraph.join(" ") });
    paragraph = [];
  };

  for (const rawLine of body.replace(/\r\n?/g, "\n").split("\n")) {
    const line = rawLine.trim();
    const heading = line.match(/^(#{1,6})\s+(.*?)\s*#*$/);
    const image = line.match(/^!\[([^\]]*)\]\(\s*(\S+?)(?:\s+"[^"]*")?\s*\)$/);
    const bullet = line.match(/^(?:[-*+]|\d+[.)])\s+(.*)$/);
    const last = blocks[blocks.length - 1];

    if (!line || /^([-*_])(\s*\1){2,}$/.test(line)) {
      endParagraph();
    } else if (heading) {
      endParagraph();
      blocks.push({ kind: "heading", level: heading[1].length, text: heading[2] });
    } else if (image) {
      endParagraph();
      blocks.push({ kind: "image", alt: image[1], src: image[2] });
    } else if (bullet) {
      endParagraph();
      blocks.push({ kind: "bullet", text: bullet[1] });
    } else if (!paragraph.length && last?.kind === "bullet" && /^\s/.test(rawLine)) {
      last.text += ` ${line}`;
    } else {
      paragraph.push(line.replace(/^>\s?/, ""));
    }
  }
  endParagraph();
  return blocks;
}

// intro = paragraphs before the first "##"; each "##" opens a section whose
// paragraphs become body and whose list items become bullets; a "## FAQ"
// section becomes faq from "**Question?**" lines and the paragraphs after them.
function parseBody(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  const faq: Faq[] = [];
  let section: Section | undefined;
  let inFaq = false;

  for (const block of tokenize(body)) {
    if (block.kind === "heading" && block.level === 1) continue; // title is front matter
    if (block.kind === "heading" && block.level === 2) {
      const heading = plainText(block.text);
      inFaq = FAQ_HEADING.test(heading);
      section = inFaq ? undefined : { heading, body: [] };
      if (section) sections.push(section);
      continue;
    }
    if (block.kind === "image") {
      if (section && !section.image) {
        section.image = block.src;
        section.imageAlt = block.alt;
      }
      continue;
    }
    if (inFaq) {
      const current = faq[faq.length - 1];
      const bold = block.kind === "paragraph"
        ? block.text.match(/^(?:\*\*|__)(.+?)(?:\*\*|__)\s*(.*)$/)
        : null;
      const startsQuestion =
        block.kind === "heading" || (bold && (bold[1].trim().endsWith("?") || !current));
      if (startsQuestion) {
        faq.push({
          question: plainText(bold ? bold[1] : block.text),
          answer: bold ? plainText(bold[2]) : "",
        });
      } else if (current) {
        const text = plainText(block.text);
        current.answer = current.answer ? `${current.answer} ${text}` : text;
      }
      continue;
    }
    const text = plainText(block.text);
    if (!text) continue;
    if (!section) intro.push(text);
    else if (block.kind === "bullet") (section.bullets ??= []).push(text);
    else section.body.push(text);
  }

  return {
    intro,
    sections,
    faq: faq.filter((item) => item.question && item.answer),
  };
}

function excerptFrom(description: string): string {
  if (description.length <= EXCERPT_MAX_LENGTH) return description;
  const cut = description.slice(0, EXCERPT_MAX_LENGTH - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const words = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return `${words.replace(/[\s,;:.!?-]+$/, "")}…`;
}

function readingTimeFrom(value: string | number | undefined, body: string): string {
  if (typeof value === "string" && value.trim()) return value.trim();
  const words = plainText(body)
    .split(" ")
    .filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
  const minutes =
    typeof value === "number" ? value : Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

function authorFrom(name: string): BlogAuthorInput {
  const trimmed = name.trim();
  return KNOWN_AUTHORS[trimmed.toLowerCase()] ?? { name: trimmed, title: "Markethink" };
}

// The sharing image as an absolute URL. A malformed value never breaks the build: the default image is used and the
// entry is named in the warning.
function absoluteImageUrl(value: string, entryId: string): string {
  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    console.warn(`[blog] "${entryId}": imageSharing "${value}" is not a URL; using the default sharing image.`);
    return new URL(DEFAULT_IMAGE, SITE_URL).toString();
  }
}

export function markdownEntryToBlogPost(entry: CollectionEntry<"blog">): BlogPost {
  const { data } = entry;
  const body = entry.body ?? "";
  const image = data.image ?? DEFAULT_IMAGE;

  return {
    slug: entry.id,
    title: data.title,
    seoTitle: data.seoTitle ?? `${data.title} | Markethink`,
    description: data.description,
    excerpt: data.excerpt ?? excerptFrom(data.description),
    label: data.label ?? "INSIGHT",
    image,
    imageMobile: data.imageMobile ?? image,
    imageThumbnail: data.imageThumbnail ?? image,
    imageSharing: absoluteImageUrl(data.imageSharing ?? image, entry.id),
    imageAlt: data.imageAlt ?? (data.image ? "" : DEFAULT_IMAGE_ALT),
    publishedDate: data.publishedDate,
    updatedDate: data.updatedDate ?? data.publishedDate,
    readingTime: readingTimeFrom(data.readingTime, body),
    category: data.category,
    keywords: data.keywords,
    author: authorFrom(data.author),
    ...parseBody(body),
  };
}

// Non-draft markdown posts, newest first. A TypeScript post always wins a slug.
export async function getMarkdownBlogPosts(): Promise<BlogPost[]> {
  const entries = await getCollection("blog", ({ data }) => !data.draft);
  return entries
    .filter((entry) => {
      if (!typeScriptSlugs.has(entry.id)) return true;
      console.warn(
        `[blog] Skipping src/content/blog post "${entry.id}": a TypeScript post in blogPosts.ts already uses that slug.`,
      );
      return false;
    })
    .map(markdownEntryToBlogPost)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

// Keeps the curated order of `curated` and places each markdown post (newest
// first) ahead of the first curated post published before it.
export function mergeNewestFirst(curated: BlogPost[], markdown: BlogPost[]): BlogPost[] {
  const merged: BlogPost[] = [];
  let next = 0;
  for (const post of curated) {
    while (next < markdown.length && markdown[next].publishedDate > post.publishedDate) {
      merged.push(markdown[next++]);
    }
    merged.push(post);
  }
  return [...merged, ...markdown.slice(next)];
}
