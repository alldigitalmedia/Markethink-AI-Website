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
  roadmapEntries,
  changeLog,
  measurementNotes,
  statusCounts,
} = dataModule;

const expectedStatuses = ["Planned", "In progress", "Live", "Verified", "Blocked"];
assert.deepEqual(STATUS_DEFINITIONS.map((item) => item.label), expectedStatuses, "status enum changed");
assert(roadmapEntries.length >= 15, "roadmap is not detailed enough");
assert.equal(new Set(roadmapEntries.map((item) => item.id)).size, roadmapEntries.length, "entry IDs must be unique");

const expectedPhases = new Set(["Days 1–5", "Days 6–12", "Days 10–18", "Days 19–24", "Days 25–30", "Days 60/90", "Pre-existing progress", "Concurrent corrections"]);
for (const entry of roadmapEntries) {
  for (const key of ["id", "phase", "window", "title", "why", "how", "doneCriteria", "targetPage", "status", "verifiedDate", "evidenceUrl"]) {
    assert(Object.hasOwn(entry, key), `${entry.id ?? "unknown"} missing ${key}`);
  }
  assert(expectedPhases.has(entry.phase), `${entry.id} has an unexpected phase`);
  assert(expectedStatuses.includes(entry.status), `${entry.id} has an invalid status`);
  assert(Array.isArray(entry.how) && entry.how.length > 0, `${entry.id} needs repeatable how steps`);
  assert(Array.isArray(entry.doneCriteria) && entry.doneCriteria.length > 0, `${entry.id} needs done criteria`);
  if (entry.status === "Verified") {
    assert(/^\d{4}-\d{2}-\d{2}$/.test(entry.verifiedDate), `${entry.id} needs a verified date`);
    assert(/^https:\/\//.test(entry.evidenceUrl), `${entry.id} needs public evidence`);
  }
  if (["Planned", "In progress", "Blocked"].includes(entry.status)) {
    assert.equal(entry.verifiedDate, null, `${entry.id} cannot have a verified date`);
  }
}

assert(roadmapEntries.some((item) => item.id === "preexisting-statistics" && item.status === "Verified"), "statistics work must be verified pre-existing progress");
assert(roadmapEntries.some((item) => item.id === "preexisting-blog" && item.status === "Verified"), "blog work must be verified pre-existing progress");
assert(roadmapEntries.some((item) => item.id === "b2b-editorial-imagery" && item.status === "In progress" && item.evidenceUrl === null), "B2B imagery must remain unpublished");
assert(roadmapEntries.some((item) => item.id === "website-palette-correction" && item.status === "In progress" && item.evidenceUrl === null), "palette correction must remain unpublished");

assert.deepEqual(measurementNotes.map((item) => item.id), ["organic-discovery", "ai-search", "qualified-inquiries"], "measurement lanes changed");
for (const note of measurementNotes) {
  assert.equal(note.currentValue, "Not yet measured", `${note.id} must not use a fabricated zero baseline`);
  for (const field of ["source", "date", "scope", "denominator"]) {
    assert(note.futureObservationRequirements.includes(field), `${note.id} must require ${field}`);
  }
}

assert(changeLog.length > 0, "change log is empty");
for (let index = 1; index < changeLog.length; index += 1) {
  assert(changeLog[index - 1].date >= changeLog[index].date, "change log must be newest first");
}
assert.equal(Object.values(statusCounts).reduce((sum, value) => sum + value, 0), roadmapEntries.length, "status counts do not match entries");

const [html, checklist, sitemap, pageSource, checklistSource] = await Promise.all([
  readFile(join(distRoot, "seo-aio-strategy/index.html"), "utf8"),
  readFile(join(distRoot, "downloads/seo-aio-strategy-checklist.md"), "utf8"),
  readFile(join(distRoot, "sitemap.xml"), "utf8"),
  readFile(join(projectRoot, "src/pages/seo-aio-strategy.astro"), "utf8"),
  readFile(join(projectRoot, "src/pages/downloads/seo-aio-strategy-checklist.md.ts"), "utf8"),
]);

assert(pageSource.includes('from "../data/seoAioStrategy.mjs"'), "page must use the structured source");
assert(checklistSource.includes('from "../../data/seoAioStrategy.mjs"'), "checklist must use the structured source");
assert(html.includes("Steal our SEO &amp; AIO strategy."), "exact H1 missing");
assert(html.includes("Watch us implement it on Markethink.ai."), "exact supporting line missing");
assert(html.includes('<link rel="canonical" href="https://markethink.ai/seo-aio-strategy/">'), "canonical missing");
assert(sitemap.includes("https://markethink.ai/seo-aio-strategy/"), "sitemap entry missing");
assert(!/\b\d+(?:\.\d+)?%\s+(?:complete|completed|done)\b/i.test(html), "completion percentage is forbidden");
assert(!/(?:we|this (?:plan|roadmap|strategy)) guarantees? (?:rankings|citations|uplift)/i.test(html), "guaranteed outcome claim found");
assert(!html.includes("—") && !checklist.includes("—"), "public copy must not use em dashes");

const visibleText = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/\s+/g, " ");
for (const entry of roadmapEntries) {
  for (const value of [entry.title, entry.why, entry.targetPage, ...entry.how, ...entry.doneCriteria]) {
    assert(visibleText.includes(value), `${entry.id} content is not server-rendered: ${value}`);
  }
  assert(checklist.includes(`## ${entry.id}: ${entry.title}`), `${entry.id} missing from checklist`);
}
for (const status of expectedStatuses) {
  assert(html.includes(`data-status-count="${status}"`), `${status} count marker missing`);
  assert(html.includes(`>${status}<`), `${status} definition missing`);
}
assert.equal((html.match(/data-measurement-lane=/g) ?? []).length, 3, "all three measurement lanes must render");
for (const note of measurementNotes) {
  assert(html.includes(`data-measurement-lane="${note.id}"`), `${note.id} measurement lane missing`);
  assert(visibleText.includes(note.currentValue), `${note.id} missing baseline must be explicit`);
}
assert(html.includes("https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"), "official Google AI optimization citation missing");
assert(html.includes("https://developers.google.com/search/docs/appearance/ai-features"), "official Google AI features citation missing");
assert(html.includes("/blog/how-to-show-up-in-ai-search/"), "contextual blog link missing");
assert(html.includes("/ai-marketing-statistics/"), "contextual research link missing");
assert(html.includes("/schedule-a-walkthrough/"), "walkthrough CTA missing");

const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
assert(scripts.length > 0, "JSON-LD missing");
const nodes = [];
const visit = (value) => {
  if (Array.isArray(value)) return value.forEach(visit);
  if (!value || typeof value !== "object") return;
  nodes.push(value);
  if (value["@graph"]) visit(value["@graph"]);
};
for (const match of scripts) visit(JSON.parse(match[1]));
const hasType = (type) => nodes.some((node) => (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]).includes(type));
assert(hasType("WebPage"), "WebPage schema missing");
assert(hasType("Article"), "Article schema missing");
assert(hasType("BreadcrumbList"), "Breadcrumb schema missing");

console.log(JSON.stringify({
  entries: roadmapEntries.length,
  statusCounts,
  changeLogEntries: changeLog.length,
  measurementLanes: measurementNotes.length,
  canonical: "https://markethink.ai/seo-aio-strategy/",
  checklist: "https://markethink.ai/downloads/seo-aio-strategy-checklist.md",
}, null, 2));
