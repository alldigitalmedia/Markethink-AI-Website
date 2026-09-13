import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(here, "../..");
const distRoot = join(projectRoot, "dist");
const dataModule = await import("../data/seoAioStrategy.mjs");
const {
  STATUS_DEFINITIONS,
  PHASES,
  ROADMAP_META,
  roadmapEntries,
  changeLog,
  measurementNotes,
  statusCounts,
} = dataModule;

const expectedStatuses = ["Planned", "In progress", "Live", "Verified", "Blocked"];
assert.deepEqual(STATUS_DEFINITIONS.map((item) => item.label), expectedStatuses, "status enum changed");
assert.equal(roadmapEntries.length, 19, "all 19 established actions must remain present");
assert.equal(new Set(roadmapEntries.map((item) => item.id)).size, roadmapEntries.length, "entry IDs must be unique");
assert.equal(Object.values(statusCounts).reduce((sum, value) => sum + value, 0), roadmapEntries.length, "status counts do not match entries");
assert.deepEqual(statusCounts, { Planned: 13, "In progress": 2, Live: 0, Verified: 4, Blocked: 0 }, "status counts must include the independently verified palette and V2 image corrections without overstating outcomes");

assert(ROADMAP_META && /^https:\/\//.test(ROADMAP_META.sharingImageUrl), "absolute sharing image URL missing from structured source");
assert.equal(ROADMAP_META.sharingImageWidth, 1200, "sharing image width changed");
assert.equal(ROADMAP_META.sharingImageHeight, 630, "sharing image height changed");
assert.equal(ROADMAP_META.canonical, "https://markethink.ai/seo-aio-strategy/", "canonical changed");
assert(/^\d{4}-\d{2}-\d{2}$/.test(ROADMAP_META.lastSubstantiveUpdate), "last substantive update date missing");

const expectedPhases = new Set(["Days 1–5", "Days 6–12", "Days 10–18", "Days 19–24", "Days 25–30", "Days 60/90", "Pre-existing progress", "Concurrent corrections"]);
for (const entry of roadmapEntries) {
  for (const key of ["id", "phase", "window", "title", "why", "how", "doneCriteria", "targetPage", "targetUrl", "status", "verifiedDate", "evidenceUrl"]) {
    assert(Object.hasOwn(entry, key), `${entry.id ?? "unknown"} missing ${key}`);
  }
  assert(expectedPhases.has(entry.phase), `${entry.id} has an unexpected phase`);
  assert(expectedStatuses.includes(entry.status), `${entry.id} has an invalid status`);
  assert(Array.isArray(entry.how) && entry.how.length > 0, `${entry.id} needs repeatable how steps`);
  assert(Array.isArray(entry.doneCriteria) && entry.doneCriteria.length > 0, `${entry.id} needs done criteria`);
  for (const criterion of entry.doneCriteria) {
    assert.equal(typeof criterion.text, "string", `${entry.id} criterion needs text`);
    assert(["verified", "remaining"].includes(criterion.state), `${entry.id} criterion needs a truthful state`);
    if (entry.status === "Verified") assert.equal(criterion.state, "verified", `${entry.id} verified criteria must be checkmarked`);
    if (["Planned", "In progress", "Blocked"].includes(entry.status) && !entry.verifiedCriterionIndexes?.length) {
      assert.equal(criterion.state, "remaining", `${entry.id} cannot imply unsupported criterion completion`);
    }
  }
  if (entry.targetUrl) assert(/^https:\/\//.test(entry.targetUrl), `${entry.id} target URL must be absolute`);
  if (entry.status === "Verified") {
    assert(/^\d{4}-\d{2}-\d{2}$/.test(entry.verifiedDate), `${entry.id} needs a verified date`);
    assert(/^https:\/\//.test(entry.evidenceUrl), `${entry.id} needs public evidence`);
  }
  if (["Planned", "In progress", "Blocked"].includes(entry.status)) assert.equal(entry.verifiedDate, null, `${entry.id} cannot have a verified date`);
}

assert(roadmapEntries.some((item) => item.id === "buyer-query-serp-evidence" && item.status === "In progress" && /remain/i.test(item.progressNote)), "buyer-query research must be honestly in progress with remaining coverage named");
assert(roadmapEntries.some((item) => item.id === "baseline-record" && item.status === "In progress" && /remain/i.test(item.progressNote)), "baseline collection must be honestly in progress with remaining coverage named");
assert.equal(roadmapEntries.filter((item) => item.status === "Verified").length, 4, "only the two established actions and independently closed palette and V2 image corrections may be verified");
const editorialImagery = roadmapEntries.find((item) => item.id === "b2b-editorial-imagery");
assert(editorialImagery && editorialImagery.status === "Verified", "production-accepted V2 imagery must be verified");
assert.equal(editorialImagery.verifiedDate, "2026-09-13", "V2 image verification date changed");
assert.equal(editorialImagery.evidenceUrl, "https://markethink.ai/blog/", "V2 image evidence URL changed");
assert.equal(editorialImagery.doneCriteria.every((criterion) => criterion.state === "verified"), true, "all verified V2 image criteria must be checkmarked");
const paletteCorrection = roadmapEntries.find((item) => item.id === "website-palette-correction");
assert(paletteCorrection && paletteCorrection.status === "Verified", "independently closed palette cleanup must be verified");
assert.equal(paletteCorrection.verifiedDate, "2026-09-12", "palette verification date changed");
assert.equal(paletteCorrection.doneCriteria.every((criterion) => criterion.state === "verified"), true, "all verified palette criteria must be checkmarked");

const buyerGuide = roadmapEntries.find((item) => item.id === "agency-buyer-guide");
assert(buyerGuide, "buyer guide action missing");
assert.equal(buyerGuide.targetUrl, "https://markethink.ai/blog/what-is-an-ai-marketing-agency/", "buyer guide target URL changed");
const buyerGuideText = JSON.stringify(buyerGuide);
for (const phrase of ["provider evaluation matrix", "expert judgment", "client approval", "follow-up", "documented example", "homepage"]) {
  assert(buyerGuideText.toLowerCase().includes(phrase), `buyer guide acceptance missing: ${phrase}`);
}
assert(/businesses evaluating an AI marketing provider/i.test(buyerGuideText), "buyer guide audience semantics are wrong");
assert(!/agency|white-label/i.test(buyerGuide.title), "provider guide must not be relabeled as an agency or white-label partner guide");
assert(buyerGuide.optionalTrack && /agency-partner|white-label/i.test(JSON.stringify(buyerGuide.optionalTrack)), "agency-partner track must remain a separate optional item");
const commercialHub = roadmapEntries.find((item) => item.id === "commercial-hub-comparisons");
assert.equal(commercialHub?.targetUrl, "https://markethink.ai/ai-marketing-for-small-business/", "existing commercial hub URL must remain named");

assert.deepEqual(measurementNotes.map((item) => item.id), ["organic-discovery", "ai-search", "qualified-inquiries"], "measurement lanes changed");
for (const note of measurementNotes) {
  assert.equal(note.currentValue, "Not yet measured", `${note.id} must not use a fabricated zero baseline`);
  for (const field of ["source", "date", "scope", "denominator"]) assert(note.futureObservationRequirements.includes(field), `${note.id} must require ${field}`);
}

assert(changeLog.length >= 5, "contextual-link change-log entry or prior entries are missing");
assert(changeLog.some((item) => item.id === "initial-public-roadmap"), "earlier change-log entry was removed");
assert(changeLog.some((item) => item.id === "palette-publication-verification-2026-09-12"), "earlier palette publication log was removed");
assert(changeLog.some((item) => item.id === "palette-canonical-base-closure-2026-09-12"), "palette closure log was removed");
assert(changeLog.some((item) => item.id === "b2b-editorial-image-system-closure-2026-09-13"), "V2 image closure log was removed");
for (let index = 1; index < changeLog.length; index += 1) assert(changeLog[index - 1].date >= changeLog[index].date, "change log must be newest first");
assert.equal(changeLog[0].id, ROADMAP_META.latestUpdateId, "Latest update must target the newest log entry");
assert.equal(changeLog[0].id, "contextual-internal-links-2026-09-13", "contextual-link update must be the latest public log");
assert.equal(changeLog[0].date, "2026-09-13", "contextual-link log date changed");
const newestLog = JSON.stringify(changeLog[0]);
for (const marker of ["ten crawlable, contextual links", "page-improvement method", "source-led adoption context", "broader proof and internal-links task unchanged"]) {
  assert(newestLog.toLowerCase().includes(marker.toLowerCase()), `contextual-link change log is missing scope boundary: ${marker}`);
}
assert(!/rank|citation|traffic|lead|revenue|effectiveness|result/i.test(changeLog[0].title), "contextual-link log title must not claim an outcome");
const v2Log = JSON.stringify(changeLog.find((item) => item.id === "b2b-editorial-image-system-closure-2026-09-13"));
for (const marker of ["P01–P10", "1200×630", "Open Graph", "Twitter", "card order", "unchanged statistics ledgers"]) {
  assert(v2Log.includes(marker), `V2 image change log is missing verified evidence: ${marker}`);
}

const [html, checklist, sitemap, pageSource, checklistSource, blogHtml, blogSource] = await Promise.all([
  readFile(join(distRoot, "seo-aio-strategy/index.html"), "utf8"),
  readFile(join(distRoot, "downloads/seo-aio-strategy-checklist.md"), "utf8"),
  readFile(join(distRoot, "sitemap.xml"), "utf8"),
  readFile(join(projectRoot, "src/pages/seo-aio-strategy.astro"), "utf8"),
  readFile(join(projectRoot, "src/pages/downloads/seo-aio-strategy-checklist.md.ts"), "utf8"),
  readFile(join(distRoot, "blog/index.html"), "utf8"),
  readFile(join(projectRoot, "src/pages/blog/index.astro"), "utf8"),
]);

const requestedContextualLinks = [
  { id: 1, source: "/seo-aio-strategy/", destination: "/blog/seo-content-feedback-loop/", sourcePath: "src/pages/seo-aio-strategy.astro", marker: 'href="/blog/seo-content-feedback-loop/"' },
  { id: 2, source: "/blog/seo-content-feedback-loop/", destination: "/seo-aio-strategy/", sourcePath: "src/components/blog/SeoContentFeedbackLoopGuide.astro", marker: 'href="/seo-aio-strategy/"' },
  { id: 3, source: "/blog/how-to-show-up-in-ai-search/", destination: "/seo-aio-strategy/", sourcePath: "src/components/blog/AiSearchInteractiveGuide.astro", marker: 'href="/seo-aio-strategy/"' },
  { id: 4, source: "/blog/how-to-show-up-in-ai-search/", destination: "/blog/seo-content-feedback-loop/", sourcePath: "src/components/blog/AiSearchInteractiveGuide.astro", marker: 'href="/blog/seo-content-feedback-loop/"' },
  { id: 5, source: "/blog/what-is-an-ai-marketing-agency/", destination: "/seo-aio-strategy/", sourcePath: "src/pages/blog/[slug].astro", marker: 'href="/seo-aio-strategy/"' },
  { id: 6, source: "/blog/how-to-use-ai-for-marketing-small-business/", destination: "/seo-aio-strategy/", sourcePath: "src/components/blog/AiMarketingPracticalGuide.astro", marker: 'href="/seo-aio-strategy/"' },
  { id: 7, source: "/blog/how-to-use-ai-for-marketing-small-business/", destination: "/ai-marketing-statistics/", sourcePath: "src/components/blog/AiMarketingPracticalGuide.astro", marker: 'href="/ai-marketing-statistics/"' },
  { id: 8, source: "/ai-marketing-statistics/", destination: "/blog/what-is-an-ai-marketing-agency/", sourcePath: "src/pages/ai-marketing-statistics.astro", marker: 'href="/blog/what-is-an-ai-marketing-agency/"' },
  { id: 9, source: "/ai-marketing-statistics/", destination: "/blog/how-to-show-up-in-ai-search/", sourcePath: "src/pages/ai-marketing-statistics.astro", marker: 'href="/blog/how-to-show-up-in-ai-search/"' },
  { id: 10, source: "/ai-marketing-for-small-business/", destination: "/ai-marketing-statistics/", sourcePath: "src/pages/ai-marketing-for-small-business.astro", marker: 'href="/ai-marketing-statistics/"' },
];
assert.equal(requestedContextualLinks.length, 10, "focused contextual-link receipt must contain exactly ten directed links");
assert.equal(new Set(requestedContextualLinks.map(({ source, destination }) => `${source} -> ${destination}`)).size, 10, "directed contextual links must be unique");

const sourcePaths = [...new Set(requestedContextualLinks.map((item) => item.sourcePath))];
const sourceFiles = Object.fromEntries(await Promise.all(sourcePaths.map(async (path) => [path, await readFile(join(projectRoot, path), "utf8")])));
for (const link of requestedContextualLinks) {
  const sourceText = sourceFiles[link.sourcePath];
  assert.equal(sourceText.split(link.marker).length - 1, 1, `source mutation ${link.id} must contain exactly one ${link.source} -> ${link.destination} anchor`);
}

const builtPathFor = (route) => join(distRoot, route.replace(/^\//, ""), "index.html");
const builtRoutes = [...new Set(requestedContextualLinks.flatMap(({ source, destination }) => [source, destination.split("#")[0]]))];
const builtByRoute = Object.fromEntries(await Promise.all(builtRoutes.map(async (route) => [route, await readFile(builtPathFor(route), "utf8")])));
const extractAnchors = (document) => [...document.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((match) => ({
  href: match[1].match(/\bhref=["']([^"']+)["']/i)?.[1] ?? "",
  attributes: match[1],
  text: match[2].replace(/<[^>]+>/g, " ").replace(/&(?:amp|#38);/g, "&").replace(/\s+/g, " ").trim(),
}));
for (const link of requestedContextualLinks) {
  const anchors = extractAnchors(builtByRoute[link.source]).filter((anchor) => anchor.href === link.destination);
  assert.equal(anchors.length, 1, `built crawlable HTML must contain exactly one requested ${link.source} -> ${link.destination} anchor`);
  assert(anchors[0].text.length >= 8, `requested link ${link.id} needs descriptive visible anchor text`);
  assert(!/\bhidden\b/i.test(anchors[0].attributes), `requested link ${link.id} cannot be hidden`);
  const [destinationPath, fragment] = link.destination.split("#");
  const destinationHtml = builtByRoute[destinationPath];
  assert(destinationHtml, `requested destination ${destinationPath} did not resolve to built HTML`);
  if (fragment) assert(new RegExp(`\\bid=["']${fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`).test(destinationHtml), `requested fragment ${link.destination} is missing`);
}

for (const [path, citation] of [
  ["src/components/blog/SeoContentFeedbackLoopGuide.astro", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"],
  ["src/components/blog/SeoContentFeedbackLoopGuide.astro", "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"],
  ["src/components/blog/AiSearchInteractiveGuide.astro", "https://developers.google.com/search/docs/appearance/ai-features"],
  ["src/components/blog/AiSearchInteractiveGuide.astro", "https://developers.openai.com/api/docs/bots"],
  ["src/components/blog/AiSearchInteractiveGuide.astro", "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"],
]) assert(sourceFiles[path].includes(citation), `original source citation was lost: ${citation}`);

assert(pageSource.includes('from "../data/seoAioStrategy.mjs"'), "page must use the structured source");
assert(checklistSource.includes('from "../../data/seoAioStrategy.mjs"'), "checklist must use the structured source");
assert(html.includes("Steal our SEO &amp; AIO strategy."), "exact H1 missing");
assert(html.includes("Watch us implement it on Markethink.ai."), "exact supporting line missing");
assert(html.includes(`<link rel="canonical" href="${ROADMAP_META.canonical}">`), "canonical missing");
assert(sitemap.includes(ROADMAP_META.canonical), "existing sitemap entry missing");
assert(/Last substantive update/i.test(html), "visible last substantive update is missing");
assert(html.includes(`href="#${ROADMAP_META.latestUpdateId}"`), "Latest update link must target newest stable log ID");
assert(/target windows, not recorded sprint dates or a claimed sprint start/i.test(html), "target-window clarification missing");
assert(/target windows, not recorded sprint dates or a claimed sprint start/i.test(checklist), "checklist target-window clarification missing");
assert(!/\b\d+(?:\.\d+)?%\s+(?:complete|completed|done)\b/i.test(html), "completion percentage is forbidden");
assert(!/(?:we|this (?:plan|roadmap|strategy)) guarantees? (?:rankings|citations|uplift)/i.test(html), "guaranteed outcome claim found");
assert(!html.includes("—") && !checklist.includes("—"), "strategy page and checklist must not use em dashes");
assert(!/operator|permission|no outreach\/account creation under this roadmap item/i.test(`${html}\n${checklist}`), "internal public wording found");
assert(!/- \[ \]/.test(checklist), "public checklist must not expose editable checkboxes");

const visibleText = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/\s+/g, " ");

for (const entry of roadmapEntries) {
  for (const value of [entry.title, entry.why, entry.targetPage, ...entry.how, ...entry.doneCriteria.map((criterion) => criterion.text)]) {
    assert(visibleText.includes(value), `${entry.id} content is not server-rendered: ${value}`);
  }
  assert(html.includes(`id="${entry.id}"`), `${entry.id} stable HTML id missing`);
  assert(html.includes(`data-roadmap-entry="${entry.id}"`), `${entry.id} roadmap marker missing`);
  assert(html.includes(`data-copy-permalink="${entry.id}"`), `${entry.id} visible copy control missing`);
  assert(checklist.includes(`## ${entry.id}: ${entry.title}`), `${entry.id} missing from checklist`);
  assert(checklist.includes(`${ROADMAP_META.canonical}#${entry.id}`), `${entry.id} canonical deep link missing from checklist`);
  if (entry.targetUrl) {
    assert(html.includes(`href="${entry.targetUrl}"`), `${entry.id} known target is not clickable on page`);
    assert(checklist.includes(`[${entry.targetPage}](${entry.targetUrl})`), `${entry.id} known target is not clickable in checklist`);
  }
}

assert.equal((html.match(/data-roadmap-entry=/g) ?? []).length, 19, "rendered action count changed");
assert.equal((checklist.match(/^## [a-z0-9-]+:/gm) ?? []).length, 19, "checklist action count changed");
for (const [status, count] of Object.entries(statusCounts)) {
  assert(checklist.includes(`- ${status} (${count}):`), `checklist ${status} count does not match the structured roadmap`);
}
assert.equal((html.match(/data-criterion-state="verified"/g) ?? []).length, roadmapEntries.filter((entry) => entry.status === "Verified").reduce((sum, entry) => sum + entry.doneCriteria.length, 0), "verified criterion markers changed");
assert(html.includes('aria-label="Copy link to'), "copy controls need useful labels");
assert(pageSource.includes("navigator.clipboard.writeText"), "Clipboard API behavior missing");
assert(pageSource.includes("document.execCommand(\"copy\")"), "copy fallback missing");
assert(pageSource.includes("resolveHashTarget"), "hash target resolver missing");
assert(pageSource.includes('addEventListener("hashchange"'), "hashchange handling missing");
assert(pageSource.includes('addEventListener("popstate"'), "browser history handling missing");
assert(pageSource.includes("setActiveFilter(\"all\")"), "hash navigation must reset conflicting filters");

for (const status of expectedStatuses) {
  assert(html.includes(`data-status-count="${status}"`), `${status} count marker missing`);
  assert(html.includes(`>${status}<`), `${status} definition missing`);
}
assert.equal((html.match(/data-measurement-lane=/g) ?? []).length, 3, "all three measurement lanes must render");
assert(html.includes("https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"), "official Google citation missing");
assert(html.includes("/blog/how-to-show-up-in-ai-search/"), "contextual blog link missing");
assert(html.includes("/ai-marketing-statistics/"), "contextual research link missing");
assert(html.includes("/schedule-a-walkthrough/"), "walkthrough CTA missing");

for (const [property, value] of [
  ["og:image", ROADMAP_META.sharingImageUrl],
  ["og:image:width", "1200"],
  ["og:image:height", "630"],
  ["og:image:alt", ROADMAP_META.sharingImageAlt],
]) assert(html.includes(`property="${property}" content="${value}"`), `${property} metadata missing or inconsistent`);
for (const [name, value] of [["twitter:card", "summary_large_image"], ["twitter:image", ROADMAP_META.sharingImageUrl], ["twitter:image:alt", ROADMAP_META.sharingImageAlt]]) {
  assert(html.includes(`name="${name}" content="${value}"`), `${name} metadata missing or inconsistent`);
}

const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
assert(scripts.length > 0, "JSON-LD missing");
const nodes = [];
const visit = (value) => {
  if (Array.isArray(value)) return value.forEach(visit);
  if (!value || typeof value !== "object") return;
  nodes.push(value);
  for (const child of Object.values(value)) visit(child);
};
for (const match of scripts) visit(JSON.parse(match[1]));
const hasType = (type) => nodes.some((node) => (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]).includes(type));
assert(hasType("WebPage"), "WebPage schema missing");
assert(hasType("Article"), "Article schema missing");
assert(hasType("BreadcrumbList"), "Breadcrumb schema missing");
const imageObjects = nodes.filter((node) => (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]).includes("ImageObject"));
assert(imageObjects.some((node) => node.url === ROADMAP_META.sharingImageUrl && node.contentUrl === ROADMAP_META.sharingImageUrl && node.width === 1200 && node.height === 630 && node.caption === ROADMAP_META.sharingImageAlt), "sharing ImageObject schema is incomplete");

assert(blogSource.includes('href="/seo-aio-strategy/"'), "blog source needs the contextual public-roadmap link");
assert(blogHtml.includes('href="/seo-aio-strategy/"'), "blog initial HTML needs the contextual public-roadmap link");
assert(blogHtml.includes('href="/ai-marketing-statistics/"'), "existing blog statistics link must remain");

console.log(JSON.stringify({
  entries: roadmapEntries.length,
  statusCounts,
  checklistStatusCounts: statusCounts,
  requestedContextualLinks: requestedContextualLinks.length,
  latestUpdateId: ROADMAP_META.latestUpdateId,
  lastSubstantiveUpdate: ROADMAP_META.lastSubstantiveUpdate,
  changeLogEntries: changeLog.length,
  measurementLanes: measurementNotes.length,
  canonical: ROADMAP_META.canonical,
  checklist: "https://markethink.ai/downloads/seo-aio-strategy-checklist.md",
  sharingImage: ROADMAP_META.sharingImageUrl,
}, null, 2));
