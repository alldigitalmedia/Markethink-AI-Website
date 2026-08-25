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

function removeElement(html, pattern) {
  let previous;
  do {
    previous = html;
    html = html.replace(pattern, "");
  } while (html !== previous);
  return html;
}

function htmlToMarkdown(html, canonicalUrl) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]
    ?? html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1]
    ?? html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]
    ?? html;

  let content = main.replace(/<!--[\s\S]*?-->/g, "");
  content = removeElement(content, /<(script|style|svg|noscript|nav|footer|header|form|button)\b[^>]*>[\s\S]*?<\/\1>/gi);
  content = removeElement(content, /<([a-z][\w:-]*)\b(?=[^>]*(?:aria-hidden=["']true["']|\bhidden(?:\s|=|>)|class=["'][^"']*(?:honeypot|hidden-field|sr-only)[^"']*["']|style=["'][^"']*display\s*:\s*none))[^>]*>[\s\S]*?<\/\1>/gi);
  content = content.replace(/<(?:input|select|textarea)\b[^>]*>[\s\S]*?<\/(?:select|textarea)>/gi, "").replace(/<(?:input|select|textarea)\b[^>]*\/?\s*>/gi, "");
  content = content.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = absoluteUrl(attribute(tag, "src"), canonicalUrl);
    const alt = decodeEntities(attribute(tag, "alt")).trim();
    return src && alt ? `\n\n![${alt}](${src})\n\n` : "";
  });
  content = content.replace(/<a\b[^>]*href=["'][^"']+["'][^>]*>([\s\S]*?)<\/a>/gi, (tag, label) => {
    const href = absoluteUrl(attribute(tag, "href"), canonicalUrl);
    const text = stripTags(label) || href;
    return href && text ? `[${text}](${href})` : text;
  });
  for (let level = 6; level >= 1; level -= 1) {
    const heading = new RegExp(`<h${level}\\b[^>]*>([\\s\\S]*?)<\\/h${level}>`, "gi");
    content = content.replace(heading, (_, text) => `\n\n${"#".repeat(level)} ${stripTags(text)}\n\n`);
  }
  content = content
    .replace(/<summary\b[^>]*>([\s\S]*?)<\/summary>/gi, (_, text) => `\n\n### ${stripTags(text)}\n\n`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => `\n- ${stripTags(text)}`)
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => { const value = stripTags(text); return value ? `**${value}**` : ""; })
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => { const value = stripTags(text); return value ? `*${value}*` : ""; })
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_, text) => `\`${stripTags(text)}\``)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n\n---\n\n")
    .replace(/<\/(p|div|section|article|aside|details|ul|ol|blockquote|label)>/gi, "\n\n")
    .replace(/<(p|div|section|article|aside|details|ul|ol|blockquote|label)\b[^>]*>/gi, "\n\n")
    .replace(/<[^>]*>/g, " ");

  const lines = decodeEntities(content)
    .replace(/\\([*_`])/g, "$1")
    .replace(/\*\*([^*\n]+?)\s*\*\*\s*\*\*([^*\n]+?)\*\*/g, "**$1**: **$2**")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .split("\n");
  const deduped = [];
  const seenLinks = new Set();
  for (const line of lines) {
    const normalized = line.trim();
    if (normalized && normalized === deduped.at(-1)?.trim()) continue;
    if (/^\[[^\]]+\]\(https?:\/\/[^)]+\)$/.test(normalized)) {
      if (seenLinks.has(normalized)) continue;
      seenLinks.add(normalized);
    }
    deduped.push(line);
  }
  return deduped.join("\n").replace(/\n{3,}/g, "\n\n").trim();
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

function compactIndex(pages, language) {
  const isSpanish = language === "es";
  const corePages = pages.filter((page) => !new URL(page.canonicalUrl).pathname.startsWith("/blog/"));
  const articlePages = pages.filter((page) => new URL(page.canonicalUrl).pathname.startsWith("/blog/") && new URL(page.canonicalUrl).pathname !== "/blog/");
  const linkLine = (page) => `- [${page.title}](${page.markdownUrl})${page.description ? `: ${page.description}` : ""}`;
  const fullHref = isSpanish ? `${SITE_URL}/llms-full-es.txt` : `${SITE_URL}/llms-full.txt`;
  return [
    "# Markethink", "",
    isSpanish ? "> Tu operación de marketing, impulsada por IA y gestionada por expertos." : "> Your marketing operation, powered by AI and managed by experts.", "",
    isSpanish ? "Markethink es un sistema de marketing con IA gestionado por expertos. Aprende cada negocio, ejecuta el marketing día a día, lo conecta con el pipeline y mejora con cada aprobación, corrección y resultado." : "Markethink is an AI marketing system managed by expert marketers. It learns each business, runs marketing day to day, connects marketing to the pipeline, and improves with every approval, correction, and result.", "",
    isSpanish ? "## Páginas principales" : "## Core pages", "", ...corePages.map(linkLine),
    ...(articlePages.length ? ["", isSpanish ? "## Ideas" : "## Insights", "", ...articlePages.map(linkLine)] : []),
    "", isSpanish ? "## Contenido completo del sitio" : "## Complete site content", "",
    `- [${isSpanish ? "Colección completa en Markdown" : "Full Markdown collection"}](${fullHref}): ${isSpanish ? "Contenido combinado y legible por máquinas de cada página pública e indexable en español." : "Combined machine-readable content for every public, indexable Markethink page."}`, "",
  ].join("\n");
}

function fullCollection(pages, language) {
  const isSpanish = language === "es";
  return [
    isSpanish ? "# Markethink: contenido completo del sitio en español" : "# Markethink: Complete Site Content", "",
    isSpanish ? "> Páginas públicas e indexables de Markethink en español, presentadas como Markdown. Cada sección incluye su URL HTML canónica." : "> Public, indexable Markethink pages rendered as Markdown. Each section includes its canonical HTML URL.", "",
    ...pages.flatMap((page) => [page.markdown, "", "---", ""]),
  ].join("\n");
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
    if (body.length < 300) throw new Error(`Markdown mirror is unexpectedly thin for ${canonicalUrl} (${body.length} characters).`);
    const relativePath = mirrorPathFor(canonicalUrl);
    const markdownUrl = new URL(`/${relativePath}`, SITE_URL).toString();
    const markdown = [`# ${title}`, "", description ? `> ${description}` : "", description ? "" : "", `Canonical page: ${canonicalUrl}`, "", body, ""].filter((line, index, all) => line || all[index - 1]).join("\n");
    const targetPath = path.join(DIST_DIR, relativePath);
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, markdown, "utf8");
    pages.push({ title, description, canonicalUrl, markdownUrl, markdown });
  }
  pages.sort((a, b) => a.canonicalUrl.localeCompare(b.canonicalUrl));
  const englishPages = pages.filter((page) => !new URL(page.canonicalUrl).pathname.startsWith("/es/"));
  const spanishPages = pages.filter((page) => new URL(page.canonicalUrl).pathname.startsWith("/es/"));
  await fs.writeFile(path.join(DIST_DIR, "llms.txt"), compactIndex(englishPages, "en"), "utf8");
  await fs.writeFile(path.join(DIST_DIR, "llms-full.txt"), fullCollection(englishPages, "en"), "utf8");
  await fs.writeFile(path.join(DIST_DIR, "llms-es.txt"), compactIndex(spanishPages, "es"), "utf8");
  await fs.writeFile(path.join(DIST_DIR, "llms-full-es.txt"), fullCollection(spanishPages, "es"), "utf8");
  console.log(`Generated ${pages.length} Markdown mirrors (${spanishPages.length} Spanish) plus English and Spanish llms indexes.`);
}

await main();
