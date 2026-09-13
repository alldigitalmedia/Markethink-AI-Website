import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { inflateRawSync } from "node:zlib";
import {
  LIBRARY_META,
  PLAYBOOK_META,
  createDeterministicSkillZip,
  getSkillMarkdown,
  getStandaloneBrief,
  getStandaloneMarkdown,
  packageFiles,
  requiredOutputs,
  strategyEntries,
} from "../data/strategyLibrary.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const dist = join(root, "dist");
const read = (path) => readFile(join(root, path), "utf8");
const readDist = (path) => readFile(join(dist, path));

const canonical = PLAYBOOK_META.canonical;
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

assert.equal(strategyEntries.length, 1, "library must launch with exactly one entry");
for (const [html, title, h1, pageCanonical] of [
  [hubHtml, LIBRARY_META.title, LIBRARY_META.h1, LIBRARY_META.canonical],
  [entryHtml, PLAYBOOK_META.seoTitle, PLAYBOOK_META.title, PLAYBOOK_META.canonical],
]) {
  const decoded = html.replaceAll("&amp;", "&").replaceAll("&#38;", "&");
  assert.ok(decoded.includes(`<title>${title}</title>`));
  assert.ok(html.includes(`rel="canonical" href="${pageCanonical}"`));
  assert.ok(html.includes(`<h1`));
  assert.ok(decoded.includes(h1));
  assert.ok(html.includes('class="mt-site-header"'));
  assert.ok(html.includes('href="/ai-marketing-strategies/"'));
  assert.ok(html.includes('type="application/ld+json"'));
  assert.ok(!html.includes('name="robots" content="noindex'));
}
assert.ok(hubHtml.includes(LIBRARY_META.supportingLine));
for (const marker of [
  "Explore practical marketing strategies, see our assessment, and take away a playbook you can use yourself or give to your AI agent.",
  "WHAT YOU GET",
  "A clear strategy, the steps to put it into practice, and a ready-to-use brief for your AI. Sources and review dates included.",
  "Choose a format and add your business context. Each playbook includes the steps, templates and checks to get started.",
  "More ways to grow, coming next.",
  "We plan to expand into sales, email and other marketing disciplines.",
]) assert.ok(hubHtml.includes(marker), `hub correction missing: ${marker}`);
assert.ok(hubHtml.includes("b2b-editorial-review-20260912-p01-statistics-resource-desktop.webp"));
assert.ok(hubHtml.includes("b2b-editorial-review-20260912-p01-statistics-resource-mobile.webp"));
assert.ok(hubHtml.includes("Conceptual editorial scene of a marketer comparing two campaign directions in an active production workspace."));
assert.ok(entryHtml.includes("Turn your website, offer and available search data into a focused 30-day plan, with page priorities, practical briefs and a clear way to review progress."));
assert.ok(entryHtml.includes("What you will create"));
assert.ok(hubHtml.includes(PLAYBOOK_META.canonical.replace("https://markethink.ai", "")));
assert.ok(entryHtml.includes(LIBRARY_META.canonical.replace("https://markethink.ai", "")));
assert.ok(entryHtml.includes("Copy for your AI"));
assert.ok(entryHtml.includes("Download the skill"));
assert.ok(entryHtml.includes("Download the plain Markdown fallback"));
assert.ok(entryHtml.includes("navigator.clipboard"));
assert.ok(entryHtml.includes("View or manually copy the complete standalone brief"));
assert.ok(entryHtml.includes("Select all text"));
assert.match(nav, /label:\s*"Strategies"[\s\S]*href:\s*"\/ai-marketing-strategies\/"/);
assert.match(footer, /Strategies[\s\S]*\/ai-marketing-strategies\//);

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(locs.length, 27);
assert.equal(new Set(locs).size, 27);
assert.ok(locs.includes(LIBRARY_META.canonical));
assert.ok(locs.includes(PLAYBOOK_META.canonical));
assert.ok(!locs.some((url) => url.includes("/downloads/markethink-seo-aio-playbook")));

const expectedLink = `<${canonical}>; rel=\\"canonical\\"`;
assert.ok(netlify.includes('for = "/downloads/markethink-seo-aio-playbook.md"'));
assert.ok(netlify.includes(`Link = "${expectedLink}"`));
assert.ok(netlify.includes('Content-Disposition = "attachment; filename=\\"markethink-seo-aio-playbook.md\\""'));
assert.ok(netlify.includes('for = "/downloads/markethink-seo-aio-playbook.zip"'));
assert.ok(netlify.includes('Content-Type = "application/zip"'));
assert.ok((await read("src/pages/downloads/markethink-seo-aio-playbook.md.ts")).includes(`"Link": \`<\${PLAYBOOK_META.canonical}>; rel="canonical"\``));

assert.equal(markdown, getStandaloneMarkdown());
assert.ok(markdown.includes(getStandaloneBrief()));
assert.ok(markdown.includes(`Version: ${PLAYBOOK_META.version}`));
assert.ok(markdown.includes(`Reviewed: ${PLAYBOOK_META.reviewedDate}`));
assert.ok(markdown.includes(`Canonical page: ${PLAYBOOK_META.canonical}`));
assert.ok(!markdown.includes("references/ORIGINAL-SOURCES.md"), "standalone Markdown must not require relative files");
assert.ok(!markdown.includes("assets/OUTPUT-TEMPLATES.md"), "standalone Markdown must not require relative files");

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

assert.deepEqual(zip, createDeterministicSkillZip());
const zipped = unzipEntries(zip);
const expectedRoot = `${PLAYBOOK_META.portableName}/`;
assert.equal(zipped.size, 3);
assert.deepEqual([...zipped.keys()].sort(), Object.keys(packageFiles).sort());
assert.ok([...zipped.keys()].every((path) => path.startsWith(expectedRoot)));
const skill = zipped.get(`${expectedRoot}SKILL.md`);
assert.equal(skill, getSkillMarkdown());
assert.ok(skill.startsWith("---\n"));
const frontmatterEnd = skill.indexOf("\n---\n", 4);
assert.ok(frontmatterEnd > 0);
const frontmatter = skill.slice(4, frontmatterEnd);
const name = frontmatter.match(/^name:\s*(.+)$/m)?.[1]?.trim();
const description = frontmatter.match(/^description:\s*(.+)$/m)?.[1]?.trim();
assert.equal(name, PLAYBOOK_META.portableName);
assert.match(name, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
assert.ok(name.length <= 64);
assert.ok(description && description.length <= 1024);
for (const marker of [PLAYBOOK_META.author, PLAYBOOK_META.version, PLAYBOOK_META.reviewedDate, PLAYBOOK_META.canonical]) {
  assert.ok(frontmatter.includes(`"${marker}"`));
}
for (const relative of ["references/ORIGINAL-SOURCES.md", "assets/OUTPUT-TEMPLATES.md"]) {
  assert.ok(skill.includes(`](${relative})`));
  assert.ok(zipped.has(`${expectedRoot}${relative}`));
}

const publicTexts = [markdown, ...zipped.values()];
const forbidden = [/HERMES_/i, /RAILWAY_/i, /\/app\/workspace/i, /\/opt\/data/i, /dashboard\.markethink\.ai\/api/i, /x-hermes-token/i, /clientId\s*:/i];
for (const text of publicTexts) for (const pattern of forbidden) assert.doesNotMatch(text, pattern);

assert.match(roadmap, /id:\s*"strategy-library-playbook-launch-2026-09-13"/);
for (const marker of ["Planned (13)", "In progress (2)", "Live (0)", "Verified (4)", "Blocked (0)"]) assert.ok(checklist.includes(marker));
const entryCount = (checklist.match(/^- Action link:/gm) || []).length;
assert.equal(entryCount, 19);

const illustrativeDryRun = {
  label: "Illustrative format-validation dry run. Not product compatibility or performance evidence.",
  context: {
    website: "https://example.com/",
    business: "Illustrative B2B workflow consultancy",
    audience: "US operations leaders",
    objective: "Support qualified consultation requests",
    currentPages: ["/", "/services/", "/contact/"],
    constraints: ["Two page improvements maximum", "No publishing authorization"],
  },
  toolRegister: ["Search Console: Not available", "Analytics: Not available", "Keyword provider: Not available", "User exports: Not available"],
  intentMap: [{ family: "workflow consulting", url: "/services/", evidence: "Illustrative supplied context only", action: "Review page fit before recommending changes" }],
  plan: [
    { window: "Days 1 to 5", action: "Confirm page jobs and technical access", owner: "Business owner", dependency: "Website access", effort: "Small", acceptance: "Dated URL and access register" },
    { window: "Days 6 to 12", action: "Prepare one service-page brief", owner: "Marketing lead", dependency: "Approved offer facts", effort: "Medium", acceptance: "Reviewable brief with sources and limits" },
    { window: "Days 13 to 22", action: "Draft one sourced supporting answer", owner: "Writer", dependency: "Expert input", effort: "Medium", acceptance: "Draft with source URLs; publishing still unauthorized" },
    { window: "Days 23 to 30", action: "Verify only separately authorized releases", owner: "Web owner", dependency: "Explicit release approval", effort: "Small", acceptance: "Production URL evidence or Not shipped" },
  ],
  baseline: ["Search volume: Not available", "Organic difficulty: Not available", "Ad competition: Not available", "Indexing: Not available", "Traffic: Not available", "Conversions: Not available", "Sampled AI citations: Not available"],
  reviewLog: [{ decision: "Keep scope to two page improvements", shipped: "Nothing", outcomes: "Not available", next: "Request only material missing inputs" }],
};
assert.ok(illustrativeDryRun.label.startsWith("Illustrative"));
assert.equal(illustrativeDryRun.plan.length, 4);
assert.ok(illustrativeDryRun.plan.every((item) => item.owner && item.dependency && item.effort && item.acceptance));
assert.ok(illustrativeDryRun.toolRegister.every((item) => item.endsWith("Not available")));
assert.ok(illustrativeDryRun.baseline.every((item) => item.endsWith("Not available")));
assert.ok(illustrativeDryRun.plan.some((item) => item.acceptance.includes("publishing still unauthorized")));
assert.equal(requiredOutputs.length, 7);

console.log(JSON.stringify({
  pages: 2,
  sitemapUrls: locs.length,
  libraryEntries: strategyEntries.length,
  markdownBytes: Buffer.byteLength(markdown),
  zipBytes: zip.length,
  zipFiles: [...zipped.keys()],
  version: PLAYBOOK_META.version,
  reviewed: PLAYBOOK_META.reviewedDate,
  dryRun: "illustrative format validation passed with all unavailable measurements preserved",
}, null, 2));
