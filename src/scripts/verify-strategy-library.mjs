import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { inflateRawSync } from "node:zlib";
import {
  LIBRARY_META,
  PLAYBOOK_META,
  createDeterministicSkillZip,
  getCandidateMarkdown,
  getSkillMarkdown,
  getStandaloneBrief,
  getStandaloneMarkdown,
  packageFiles,
  strategyEntries,
  tocSections,
} from "../data/strategyLibrary.mjs";
import { WEBSITE_LAUNCH_META } from "../data/websiteLaunchChecklist.mjs";
import { b2bEditorialImages } from "../data/b2bEditorialImages.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const dist = join(root, "dist");
const read = (path) => readFile(join(root, path), "utf8");
const readDist = (path) => readFile(join(dist, path));
const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&#38;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'");
const title = (html) => decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();
const canonical = (html) => decode(html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? "");

const markdownPath = "downloads/markethink-seo-aio-playbook.md";
const zipPath = "downloads/markethink-seo-aio-playbook.zip";
const hubHtml = (await readDist("ai-marketing-strategies/index.html")).toString("utf8");
const entryHtml = (await readDist("ai-marketing-strategies/seo-aio-playbook/index.html")).toString("utf8");
const markdown = (await readDist(markdownPath)).toString("utf8");
const zip = await readDist(zipPath);
const sitemap = (await readDist("sitemap.xml")).toString("utf8");
const netlify = await read("netlify.toml");
const nav = await read("src/data/siteNavigation.ts");
const footer = await read("src/components/Footer.astro");
const roadmap = await read("src/data/seoAioStrategy.mjs");
const checklist = (await readDist("downloads/seo-aio-strategy-checklist.md")).toString("utf8");
const routeSource = await read("src/pages/ai-marketing-strategies/seo-aio-playbook.astro");

assert.equal(strategyEntries.length, 2, "library must preserve both established entries");
assert.equal(strategyEntries.filter((entry) => entry.slug === WEBSITE_LAUNCH_META.slug).length, 1);
assert.equal(WEBSITE_LAUNCH_META.version, "1.0.0");
assert.equal(PLAYBOOK_META.title, "SEO & AI Search Growth Playbook");
assert.equal(PLAYBOOK_META.seoTitle, "SEO & AI Search Growth Playbook | Markethink");
assert.equal(PLAYBOOK_META.version, "1.2.0");
assert.equal(PLAYBOOK_META.reviewedDate, "2026-09-13");
assert.equal(PLAYBOOK_META.canonical, "https://markethink.ai/ai-marketing-strategies/seo-aio-playbook/");

for (const [html, expectedTitle, expectedCanonical] of [
  [hubHtml, LIBRARY_META.title, LIBRARY_META.canonical],
  [entryHtml, PLAYBOOK_META.seoTitle, PLAYBOOK_META.canonical],
]) {
  assert.equal(title(html), expectedTitle);
  assert.equal(canonical(html), expectedCanonical);
  assert.ok(html.includes('<h1'));
  assert.ok(html.includes('class="mt-site-header"'));
  assert.ok(html.includes('type="application/ld+json"'));
  assert.ok(!html.includes('name="robots" content="noindex'));
}
assert.ok(entryHtml.includes('"TechArticle"'));
assert.ok(entryHtml.includes('"BreadcrumbList"'));
assert.ok(hubHtml.includes('href="/ai-marketing-strategies/new-website-launch-checklist/"'));
assert.ok(hubHtml.includes(WEBSITE_LAUNCH_META.title));
assert.ok(hubHtml.includes(PLAYBOOK_META.title));
assert.ok(hubHtml.includes(`Version ${PLAYBOOK_META.version}`));
assert.ok(entryHtml.includes(LIBRARY_META.canonical.replace("https://markethink.ai", "")));
assert.match(nav, /label:\s*"Strategies"[\s\S]*href:\s*"\/ai-marketing-strategies\/"/);
assert.match(footer, /Strategies[\s\S]*\/ai-marketing-strategies\//);

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(locs.length, 28);
assert.equal(new Set(locs).size, 28);
assert.ok(locs.includes(LIBRARY_META.canonical));
assert.ok(locs.includes(PLAYBOOK_META.canonical));
assert.ok(!locs.some((url) => url.includes("/downloads/markethink-seo-aio-playbook")));

const expectedLink = `<${PLAYBOOK_META.canonical}>; rel=\\"canonical\\"`;
assert.ok(netlify.includes('for = "/downloads/markethink-seo-aio-playbook.md"'));
assert.ok(netlify.includes(`Link = "${expectedLink}"`));
assert.ok(netlify.includes('Content-Disposition = "attachment; filename=\\"markethink-seo-aio-playbook.md\\""'));
assert.ok(netlify.includes('for = "/downloads/markethink-seo-aio-playbook.zip"'));
assert.ok(netlify.includes('Content-Type = "application/zip"'));

const candidate = getCandidateMarkdown();
assert.equal(markdown, candidate);
assert.equal(markdown, getStandaloneMarkdown());
assert.equal(markdown, getStandaloneBrief());
assert.equal(markdown, getSkillMarkdown());
assert.ok(markdown.startsWith("---\nname: markethink-seo-aio-playbook\n"));
for (const marker of [
  'version: "1.2.0"',
  "# SEO & AI Search Growth Playbook",
  "Act as my SEO and AI-search strategy lead.",
  "keep**, **improve**, **consolidate**, **create**, **investigate** or **defer",
  "Explain why the selected work comes before the next-best alternative",
  "For each requested page brief, provide:",
  "preserve each work item's original ID, current status, history or evidence-transition reference",
  "Planning alone does not authorize spending, publication, outreach, account changes or scheduled monitoring.",
  "Do not sell an AI text file, special schema, a proprietary score or an exact paragraph length as a requirement for inclusion.",
]) assert.ok(markdown.includes(marker), `candidate marker missing: ${marker}`);

const h2s = [...candidate.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1]);
for (const heading of h2s) assert.ok(decode(entryHtml).includes(heading), `server-rendered candidate section missing: ${heading}`);
for (const id of [
  "purpose-title", "inputs-title", "evidence-title", "playbook-method", "method-title",
  "baseline-research", "baseline-research-title", "page-clarity", "page-clarity-title",
  "answer-ready-content", "answer-ready-content-title", "verification-review", "verification-review-title",
  "repeat-title", "refresh-evidence", "separate-reviews", "carry-forward", "scope-opportunities",
  "prioritize-capacity", "log-decision", "outputs-title", "measurement-title", "example-title",
  "copy-for-ai", "copy-title", "limitations-title", "sources-title",
]) assert.ok(entryHtml.includes(`id="${id}"`), `preserved section ID missing: ${id}`);
for (const item of tocSections) assert.ok(entryHtml.includes(`href="${item.href}"`), `contents link missing: ${item.href}`);

for (const marker of [
  "Download for your AI (.md)",
  "One file. Attach it to your AI conversation.",
  "Copy for your AI",
  "Read the playbook",
  "Full skill package (.zip)",
  "Import support depends on the product.",
  "View or manually copy the complete playbook",
  "Select all text",
  "navigator.clipboard",
  "Automatic copy was unavailable.",
]) assert.ok(entryHtml.includes(marker), `download/copy marker missing: ${marker}`);
for (const forbidden of ["Markdown fallback", "plain Markdown fallback", "Download the skill"]) assert.ok(!entryHtml.includes(forbidden), `legacy action language remains: ${forbidden}`);

const cover = b2bEditorialImages[0];
for (const marker of [cover.desktop, cover.mobile, cover.sharing, cover.alt]) assert.ok(entryHtml.includes(marker), `approved P01 cover marker missing: ${marker}`);
for (const value of [cover.desktopWidth, cover.desktopHeight, cover.mobileWidth, cover.mobileHeight]) assert.ok(entryHtml.includes(String(value)));
assert.match(routeSource, /h1\s*\{[^}]*font-size:\s*clamp\(3\.35rem,4\.45vw,4rem\)/s);
assert.match(routeSource, /@media \(max-width: 760px\)[\s\S]*?h1\s*\{[^}]*font-size:\s*clamp\(2\.25rem,10vw,2\.5rem\)/s);
assert.match(routeSource, /\.guide-content\s*\{[^}]*font-size:\s*1\.08rem/s);
assert.ok(routeSource.includes("@media (prefers-reduced-motion: reduce)"));
assert.ok(routeSource.includes("outline: 3px solid #69d254"));

function unzipEntries(buffer) {
  const result = new Map();
  let offset = 0;
  while (offset + 4 <= buffer.length && buffer.readUInt32LE(offset) === 0x04034b50) {
    const method = buffer.readUInt16LE(offset + 8);
    const expectedCrc = buffer.readUInt32LE(offset + 14);
    const compressedSize = buffer.readUInt32LE(offset + 18);
    const nameLength = buffer.readUInt16LE(offset + 26);
    const extraLength = buffer.readUInt16LE(offset + 28);
    const nameStart = offset + 30;
    const dataStart = nameStart + nameLength + extraLength;
    const name = buffer.subarray(nameStart, nameStart + nameLength).toString("utf8");
    const compressed = buffer.subarray(dataStart, dataStart + compressedSize);
    const content = method === 8 ? inflateRawSync(compressed) : compressed;
    result.set(name, { content: content.toString("utf8"), expectedCrc });
    offset = dataStart + compressedSize;
  }
  return result;
}
function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}
assert.deepEqual(zip, createDeterministicSkillZip());
const zipped = unzipEntries(zip);
const expectedRoot = `${PLAYBOOK_META.portableName}/`;
assert.equal(zipped.size, 3);
assert.deepEqual([...zipped.keys()].sort(), Object.keys(packageFiles).sort());
for (const [path, entry] of zipped) {
  assert.ok(path.startsWith(expectedRoot));
  assert.equal(crc32(Buffer.from(entry.content)), entry.expectedCrc, `CRC mismatch: ${path}`);
  assert.equal(entry.content, packageFiles[path]);
}
assert.equal(zipped.get(`${expectedRoot}SKILL.md`).content, candidate);

const publicTexts = [markdown, ...[...zipped.values()].map((entry) => entry.content)];
for (const text of publicTexts) for (const pattern of [/HERMES_/i, /RAILWAY_/i, /\/app\/workspace/i, /\/opt\/data/i, /dashboard\.markethink\.ai\/api/i, /x-hermes-token/i, /clientId\s*:/i]) assert.doesNotMatch(text, pattern);

for (const marker of [
  'id: "ongoing-strategy-follow-up-2026-09-13"',
  'id: "strategy-library-playbook-launch-2026-09-13"',
  'id: "buyer-query-serp-evidence"',
  'id: "query-to-url-map"',
  'id: "baseline-record"',
  'id: "b2b-editorial-imagery"',
]) assert.ok(roadmap.includes(marker), `implementation history marker missing: ${marker}`);
for (const marker of ["Planned (13)", "In progress (2)", "Live (0)", "Verified (4)", "Blocked (0)"]) assert.ok(checklist.includes(marker));
assert.equal((checklist.match(/^- Action link:/gm) || []).length, 19);

console.log(JSON.stringify({
  pages: 2,
  sitemapUrls: locs.length,
  libraryEntries: strategyEntries.length,
  markdownBytes: Buffer.byteLength(markdown),
  zipBytes: zip.length,
  zipFiles: [...zipped.keys()],
  zipCrcChecks: zipped.size,
  version: PLAYBOOK_META.version,
  reviewed: PLAYBOOK_META.reviewedDate,
  serverRenderedCandidateSections: h2s.length,
  preservedSectionIds: 27,
  cover: { placement: cover.placement, desktop: cover.desktop, mobile: cover.mobile, alt: cover.alt },
}, null, 2));
