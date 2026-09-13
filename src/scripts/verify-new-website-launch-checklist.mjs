import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { inflateRawSync } from "node:zlib";
import { LIBRARY_META, PLAYBOOK_META, strategyEntries } from "../data/strategyLibrary.mjs";
import {
  WEBSITE_LAUNCH_META,
  createDeterministicLaunchSkillZip,
  getCompactLaunchBrief,
  getLaunchChecklistRows,
  getLaunchSkillMarkdown,
  getLaunchStandaloneMarkdown,
  launchCategories,
  launchPackageFiles,
  launchPrinciples,
  launchSources,
} from "../data/websiteLaunchChecklist.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const dist = join(root, "dist");
const read = (path) => readFile(join(root, path), "utf8");
const readDist = (path) => readFile(join(dist, path));
const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&#38;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'");
const meta = (html, property, kind = "property") => decode(html.match(new RegExp(`<meta[^>]+${kind}=["']${property.replaceAll(":", "\\:")}["'][^>]+content=["']([^"']*)["']`, "i"))?.[1] ?? "");
const canonical = (html) => decode(html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? "");
const title = (html) => decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();

const launchHtml = (await readDist("ai-marketing-strategies/new-website-launch-checklist/index.html")).toString("utf8");
const hubHtml = (await readDist("ai-marketing-strategies/index.html")).toString("utf8");
const seoHtml = (await readDist("ai-marketing-strategies/seo-aio-playbook/index.html")).toString("utf8");
const markdownPath = "downloads/markethink-new-website-launch-checklist.md";
const zipPath = "downloads/markethink-new-website-launch-checklist.zip";
const markdown = (await readDist(markdownPath)).toString("utf8");
const zip = await readDist(zipPath);
const sitemap = (await readDist("sitemap.xml")).toString("utf8");
const mirror = (await readDist("ai-marketing-strategies/new-website-launch-checklist.md")).toString("utf8");
const llms = (await readDist("llms.txt")).toString("utf8");
const netlify = await read("netlify.toml");

assert.equal(WEBSITE_LAUNCH_META.version, "1.0.0");
assert.equal(WEBSITE_LAUNCH_META.reviewedDate, "2026-09-13");
assert.equal(PLAYBOOK_META.version, "1.2.0", "SEO and AI-search release version must remain synchronized without changing the website launch checklist");
assert.equal(strategyEntries.length, 2);
assert.equal(strategyEntries.filter((entry) => entry.slug === WEBSITE_LAUNCH_META.slug).length, 1);
assert.ok(hubHtml.includes('href="/ai-marketing-strategies/new-website-launch-checklist/"'));
assert.ok(hubHtml.includes(WEBSITE_LAUNCH_META.title));
assert.ok(hubHtml.includes("Verification checklist"));

const pageSet = [
  { name: "library", html: hubHtml, expectedTitle: LIBRARY_META.title, expectedCanonical: LIBRARY_META.canonical },
  { name: "seo-playbook", html: seoHtml, expectedTitle: PLAYBOOK_META.seoTitle, expectedCanonical: PLAYBOOK_META.canonical },
  { name: "launch-checklist", html: launchHtml, expectedTitle: WEBSITE_LAUNCH_META.seoTitle, expectedCanonical: WEBSITE_LAUNCH_META.canonical },
];
for (const page of pageSet) {
  assert.equal(title(page.html), page.expectedTitle, `${page.name} title mismatch`);
  assert.equal(canonical(page.html), page.expectedCanonical, `${page.name} canonical mismatch`);
  assert.equal(meta(page.html, "og:title"), page.expectedTitle, `${page.name} og:title mismatch`);
  assert.equal(meta(page.html, "og:url"), page.expectedCanonical, `${page.name} og:url mismatch`);
  assert.ok(meta(page.html, "og:description"), `${page.name} needs og:description`);
  assert.ok(meta(page.html, "og:image"), `${page.name} needs og:image`);
  assert.ok(meta(page.html, "twitter:card", "name"), `${page.name} needs Twitter card metadata`);
  assert.ok(meta(page.html, "description", "name"), `${page.name} needs meta description`);
}
for (const extractor of [title, canonical, (html) => meta(html, "og:title"), (html) => meta(html, "og:url"), (html) => meta(html, "og:description")]) {
  const values = pageSet.map((page) => extractor(page.html));
  assert.equal(new Set(values).size, values.length, `page metadata must be distinct: ${values.join(" | ")}`);
}
assert.notEqual(meta(launchHtml, "og:image"), meta(seoHtml, "og:image"));
assert.match(meta(launchHtml, "og:image"), /^https:\/\//);
assert.ok(meta(launchHtml, "og:image:alt"));
assert.ok(launchHtml.includes('type="application/ld+json"'));
assert.ok(launchHtml.includes('"TechArticle"'));
assert.ok(launchHtml.includes('"BreadcrumbList"'));
assert.ok(!launchHtml.includes('name="robots" content="noindex'));

const rows = getLaunchChecklistRows();
assert.equal(launchCategories.length, 8);
assert.equal(rows.length, 42);
assert.equal(new Set(rows.map((item) => item.id)).size, rows.length);
assert.ok(rows.every((item) => item.verify.length >= 60 && item.pass.length >= 60));
assert.ok(rows.every((item) => item.category && item.title));
assert.equal(launchHtml.match(/class="check-card"/g)?.length, rows.length);
assert.equal(launchHtml.match(/<h1/g)?.length, 1);
assert.match(launchHtml, new RegExp(`<h1[^>]*>${WEBSITE_LAUNCH_META.title}</h1>`));

const requiredOperatorItems = [
  "Custom 404 page",
  "Meta title on every page",
  "Meta description on every page",
  "CTA above the fold",
  "Favicon set",
  "robots.txt",
  "sitemap.xml",
  "Open Graph image",
  "Alt text on every image",
  "Mobile breakpoints",
  "Sticky mobile CTA",
  "Loading states",
  "Form error states",
  "Thank-you page",
  "Privacy policy page",
  "Terms and conditions",
  "Analytics installed",
  "Real contact address",
  "Compressed images",
];
const selectedAdditions = [
  "Canonical URL per indexable page",
  "Heading hierarchy",
  "Keyboard and focus accessibility",
  "Color contrast",
  "Form labels, validation, and success behavior",
  "HTTPS and mixed-content checks",
  "Redirects and www/http normalization",
  "Structured data where applicable",
  "Core Web Vitals and performance budget",
  "Complete social metadata",
  "Broken internal links and fragments",
  "Responsive overflow and tap targets",
  "Cookie and consent behavior where legally applicable",
  "Backup and rollback",
  "Security headers",
  "Analytics event verification and consent-aware operation",
  "Search indexing controls",
  "Real-device and browser smoke tests",
  "Image dimensions and lazy loading",
  "Accessibility semantics",
  "Post-launch monitoring ownership",
];
for (const marker of [...requiredOperatorItems, ...selectedAdditions]) {
  for (const artifact of [launchHtml, markdown, getCompactLaunchBrief(), getLaunchSkillMarkdown()]) {
    assert.ok(decode(artifact).includes(marker), `required checklist marker missing from a format: ${marker}`);
  }
}
for (const legalBoundary of [
  "business-provided or counsel-approved text",
  "where legally applicable",
  "does not claim that generic terms are universally required or sufficient",
  "not legal advice",
]) assert.ok(`${markdown}\n${launchHtml}`.toLowerCase().includes(legalBoundary.toLowerCase()), `legal boundary missing: ${legalBoundary}`);

assert.equal(markdown, getLaunchStandaloneMarkdown());
for (const artifact of [launchHtml, markdown, getCompactLaunchBrief(), getLaunchSkillMarkdown()]) {
  assert.ok(artifact.includes(WEBSITE_LAUNCH_META.version));
  assert.ok(artifact.includes(WEBSITE_LAUNCH_META.reviewedDate));
}
assert.ok(markdown.includes(`Canonical page: ${WEBSITE_LAUNCH_META.canonical}`));
assert.ok(markdown.includes(WEBSITE_LAUNCH_META.skillUrl));
assert.ok(markdown.includes("Verification method"));
assert.ok(markdown.includes("Pass criterion"));
assert.ok(markdown.includes("Pass, Fail, Blocked, or Not applicable"));
assert.ok(launchPrinciples.length >= 6);
assert.ok(launchSources.length >= 10);

function unzipEntries(buffer) {
  const result = new Map();
  let offset = 0;
  while (offset + 4 <= buffer.length && buffer.readUInt32LE(offset) === 0x04034b50) {
    const method = buffer.readUInt16LE(offset + 8);
    const compressedSize = buffer.readUInt32LE(offset + 18);
    const nameLength = buffer.readUInt16LE(offset + 26);
    const extraLength = buffer.readUInt16LE(offset + 28);
    const nameStart = offset + 30;
    const dataStart = nameStart + nameLength + extraLength;
    const name = buffer.subarray(nameStart, nameStart + nameLength).toString("utf8");
    const compressed = buffer.subarray(dataStart, dataStart + compressedSize);
    const content = method === 8 ? inflateRawSync(compressed) : compressed;
    result.set(name, content.toString("utf8"));
    offset = dataStart + compressedSize;
  }
  return result;
}

assert.deepEqual(zip, createDeterministicLaunchSkillZip());
const zipped = unzipEntries(zip);
const expectedRoot = `${WEBSITE_LAUNCH_META.portableName}/`;
assert.equal(zipped.size, 3);
assert.deepEqual([...zipped.keys()].sort(), Object.keys(launchPackageFiles).sort());
assert.ok([...zipped.keys()].every((path) => path.startsWith(expectedRoot)));
const skill = zipped.get(`${expectedRoot}SKILL.md`);
assert.equal(skill, getLaunchSkillMarkdown());
assert.ok(zipped.has(`${expectedRoot}references/ORIGINAL-SOURCES.md`));
assert.ok(zipped.has(`${expectedRoot}assets/LAUNCH-CHECKLIST.md`));
const frontmatter = skill.slice(4, skill.indexOf("\n---\n", 4));
assert.match(frontmatter, new RegExp(`^name: ${WEBSITE_LAUNCH_META.portableName}$`, "m"));
assert.match(frontmatter, /description: Verify a new website launch/);
assert.ok(frontmatter.includes(`version: "${WEBSITE_LAUNCH_META.version}"`));
assert.ok(frontmatter.includes(`source: "${WEBSITE_LAUNCH_META.canonical}"`));

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(locs.length, 28);
assert.equal(new Set(locs).size, locs.length);
assert.equal(locs.filter((url) => url === WEBSITE_LAUNCH_META.canonical).length, 1);
assert.ok(!locs.some((url) => url.includes(WEBSITE_LAUNCH_META.portableName)));
assert.ok(mirror.includes(WEBSITE_LAUNCH_META.canonical));
assert.ok(mirror.includes(WEBSITE_LAUNCH_META.seoTitle));
assert.ok(llms.includes(`https://markethink.ai/ai-marketing-strategies/new-website-launch-checklist.md`));

for (const [path, contentType, filename] of [
  [markdownPath, "text/markdown", `${WEBSITE_LAUNCH_META.portableName}.md`],
  [zipPath, "application/zip", `${WEBSITE_LAUNCH_META.portableName}.zip`],
]) {
  const built = await readDist(path);
  assert.ok(built.length > 1000, `${path} is unexpectedly small`);
  assert.ok(netlify.includes(`for = "/${path}"`));
  assert.ok(netlify.includes(`Content-Type = "${contentType}${contentType === "text/markdown" ? "; charset=utf-8" : ""}"`));
  assert.ok(netlify.includes(`filename=\\"${filename}\\"`));
}
assert.ok(netlify.includes(`Link = "<${WEBSITE_LAUNCH_META.canonical}>; rel=\\"canonical\\""`));

const hrefs = [...launchHtml.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => decode(match[1]));
const ids = new Set([...launchHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
for (const href of hrefs) {
  if (/^(?:https?:|mailto:|tel:)/i.test(href)) continue;
  const url = new URL(href, WEBSITE_LAUNCH_META.canonical);
  if (url.origin !== "https://markethink.ai") continue;
  if (url.hash && url.pathname === new URL(WEBSITE_LAUNCH_META.canonical).pathname) assert.ok(ids.has(url.hash.slice(1)), `missing local fragment: ${href}`);
  let local;
  if (url.pathname.endsWith("/")) local = join(dist, url.pathname, "index.html");
  else local = join(dist, url.pathname);
  await readFile(local);
}
for (const category of launchCategories) assert.ok(ids.has(category.id), `category fragment missing: ${category.id}`);

const publicTexts = [launchHtml, hubHtml, markdown, mirror, ...zipped.values()];
for (const text of publicTexts) assert.ok(!text.includes("\u2014"), "new library release must contain no em dashes");
const forbidden = [/HERMES_/i, /RAILWAY_/i, /\/app\/workspace/i, /\/opt\/data/i, /dashboard\.markethink\.ai\/api/i, /x-hermes-token/i, /clientId\s*:/i];
for (const text of [markdown, ...zipped.values()]) for (const pattern of forbidden) assert.doesNotMatch(text, pattern);

console.log(JSON.stringify({
  pages: 2,
  libraryEntries: strategyEntries.length,
  checklistCategories: launchCategories.length,
  checklistItems: rows.length,
  requiredOperatorItems: requiredOperatorItems.length,
  selectedAdditions: selectedAdditions.length,
  sitemapUrls: locs.length,
  markdownBytes: Buffer.byteLength(markdown),
  zipBytes: zip.length,
  zipFiles: [...zipped.keys()],
  metadataPagesCompared: pageSet.map((page) => page.name),
  version: WEBSITE_LAUNCH_META.version,
  reviewed: WEBSITE_LAUNCH_META.reviewedDate,
  internalLinksChecked: hrefs.filter((href) => !/^https?:/i.test(href)).length,
  emDashes: 0,
}, null, 2));
