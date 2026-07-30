import { promises as fs } from "node:fs";
import path from "node:path";

const SITE_URL = "https://markethink.ai";
const DIST_DIR = path.resolve("dist");

function decodeEntities(value) {
  const named = { amp: "&", apos: "'", gt: ">", hellip: "…", laquo: "«", ldquo: "“", lsquo: "‘", lt: "<", mdash: "—", nbsp: " ", ndash: "–", quot: '"', raquo: "»", rdquo: "”", rsquo: "’" };
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal) => String.fromCodePoint(Number.parseInt(decimal, 10)))
    .replace(/&([a-z]+);/gi, (match, entity) => named[entity.toLowerCase()] ?? match);
}

function stripTags(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match?.[1] ?? "";
}

function absoluteUrl(value, canonicalUrl) {
  if (!value) return "";
  if (/^(?:https?:|mailto:|tel:)/i.test(value)) return value;
  return new URL(value, canonicalUrl).toString();
}

function htmlToMarkdown(html, canonicalUrl) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]
    ?? html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1]
    ?? html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]
    ?? html;
  let content = main
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|svg|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<img\b[^>]*>/gi, (tag) => {
      const src = absoluteUrl(attribute(tag, "src"), canonicalUrl);
      const alt = decodeEntities(attribute(tag, "alt"));
      return src ? `\n\n![${alt}](${src})\n\n` : "";
    })
    .replace(/<a\b[^>]*href=["'][^"']+["'][^>]*>([\s\S]*?)<\/a>/gi, (tag, label) => {
      const href = absoluteUrl(attribute(tag, "href"), canonicalUrl);
      const text = stripTags(label) || href;
      return href ? `[${text}](${href})` : text;
    });
  for (let level = 6; level >= 1; level -= 1) {
    const heading = new RegExp(`<h${level}\\b[^>]*>([\\s\\S]*?)<\\/h${level}>`, "gi");
    content = content.replace(heading, (_, text) => `\n\n${"#".repeat(level)} ${stripTags(text)}\n\n`);
  }
  content = content
    .replace(/<summary\b[^>]*>([\s\S]*?)<\/summary>/gi, (_, text) => `\n\n### ${stripTags(text)}\n\n`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => `\n- ${stripTags(text)}`)
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `**${stripTags(text)}**`)
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `*${stripTags(text)}*`)
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_, text) => `\`${stripTags(text)}\``)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n\n---\n\n")
    .replace(/<\/(p|div|section|article|aside|details|ul|ol|blockquote)>/gi, "\n\n")
    .replace(/<(p|div|section|article|aside|details|ul|ol|blockquote)\b[^>]*>/gi, "\n\n")
    .replace(/<[^>]*>/g, " ");
  return decodeEntities(content)
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function listHtmlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listHtmlFiles(fullPath));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

function metaContent(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const direct = html.match(new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]+content=["']([^"']*)["']`, "i"));
  const reverse = html.match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${escaped}["']`, "i"));
  return decodeEntities(direct?.[1] ?? reverse?.[1] ?? "");
}

function canonicalFrom(html) {
  const direct = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  const reverse = html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  return direct?.[1] ?? reverse?.[1] ?? "";
}

function titleFrom(html) {
  return decodeEntities(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "Markethink").replace(/\s+/g, " ").trim();
}

function mirrorPathFor(canonicalUrl) {
  const pathname = new URL(canonicalUrl).pathname.replace(/^\/+|\/+$/g, "");
  return pathname ? `${pathname}.md` : "index.md";
}

async function main() {
  const htmlFiles = await listHtmlFiles(DIST_DIR);
  const pages = [];
  for (const htmlPath of htmlFiles) {
    const html = await fs.readFile(htmlPath, "utf8");
    if (/name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)) continue;
    const canonicalUrl = canonicalFrom(html);
    if (!canonicalUrl || !canonicalUrl.startsWith(`${SITE_URL}/`)) continue;
    const title = titleFrom(html);
    const description = metaContent(html, "description");
    const body = htmlToMarkdown(html, canonicalUrl);
    if (!body) continue;
    const relativePath = mirrorPathFor(canonicalUrl);
    const markdownUrl = new URL(`/${relativePath}`, SITE_URL).toString();
    const markdown = [`# ${title}`, "", description ? `> ${description}` : "", description ? "" : "", `Canonical page: ${canonicalUrl}`, "", body, ""].filter((line, index, all) => line || all[index - 1]).join("\n");
    const targetPath = path.join(DIST_DIR, relativePath);
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, markdown, "utf8");
    pages.push({ title, description, canonicalUrl, markdownUrl, markdown });
  }
  pages.sort((a, b) => a.canonicalUrl.localeCompare(b.canonicalUrl));
  const corePages = pages.filter((page) => !new URL(page.canonicalUrl).pathname.startsWith("/blog/"));
  const articlePages = pages.filter((page) => new URL(page.canonicalUrl).pathname.startsWith("/blog/") && new URL(page.canonicalUrl).pathname !== "/blog/");
  const linkLine = (page) => `- [${page.title}](${page.markdownUrl})${page.description ? `: ${page.description}` : ""}`;
  const llms = ["# Markethink", "", "> Your marketing operation, powered by AI and managed by experts.", "", "Markethink is an AI marketing system managed by expert marketers. It learns each business, runs marketing day to day, connects marketing to the pipeline, and improves with every approval, correction, and result.", "", "## Core pages", "", ...corePages.map(linkLine), "", "## Insights", "", ...articlePages.map(linkLine), "", "## Complete site content", "", `- [Full Markdown collection](${SITE_URL}/llms-full.txt): Combined machine-readable content for every public, indexable Markethink page.`, ""].join("\n");
  const llmsFull = ["# Markethink — Complete Site Content", "", "> Public, indexable Markethink pages rendered as Markdown. Each section includes its canonical HTML URL.", "", ...pages.flatMap((page) => [page.markdown, "", "---", ""])].join("\n");
  await fs.writeFile(path.join(DIST_DIR, "llms.txt"), llms, "utf8");
  await fs.writeFile(path.join(DIST_DIR, "llms-full.txt"), llmsFull, "utf8");
  console.log(`Generated ${pages.length} Markdown mirrors plus llms.txt and llms-full.txt.`);
}

await main();
