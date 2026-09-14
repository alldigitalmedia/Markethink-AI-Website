import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  SANTIAGO_LINKEDIN_URL,
  resolveBlogAuthor,
} from "../data/blogAuthors.ts";
import { PLAYBOOK_META } from "../data/strategyLibrary.mjs";
import { WEBSITE_LAUNCH_META } from "../data/websiteLaunchChecklist.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const dist = join(root, "dist");
const SANTIAGO_PROFILE_URL = "https://markethink.ai/authors/santiago-sosa/";
const SANTIAGO_PROFILE_ID = `${SANTIAGO_PROFILE_URL}#person`;
const readSource = (path) => readFile(join(root, path), "utf8");
const readBuilt = (path) => readFile(join(dist, path), "utf8");
const normalize = (value) => value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const sha256 = (value) => createHash("sha256").update(value).digest("hex");
const contrastRatio = (foreground, background) => {
  const luminance = (hex) => {
    const channels = hex.match(/[0-9a-f]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
    const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
};
const schemaNodes = (html) => {
  const nodes = [];
  const walk = (value) => {
    if (Array.isArray(value)) return value.forEach(walk);
    if (!value || typeof value !== "object") return;
    nodes.push(value);
    Object.values(value).forEach(walk);
  };
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    walk(JSON.parse(match[1]));
  }
  return nodes;
};

const blogPostsSource = await readSource("src/data/blogPosts.ts");
const currentSlugs = [...blogPostsSource.matchAll(/\n\s+slug:\s+"([^"]+)"/g)].map((match) => match[1]);
const currentCategories = [...blogPostsSource.matchAll(/\n\s+category:\s+"([^"]+)"/g)].map((match) => match[1]);
assert.equal(currentSlugs.length, 9, "the current shared blog inventory changed; review the nine-article acceptance boundary");
assert.equal(currentCategories.length, currentSlugs.length, "every current article needs a category");
const expectedArticleUrls = currentSlugs.map((slug) => `/blog/${slug}/`);
const expectedTopics = new Set(currentCategories);
assert(expectedTopics.size > 1, "the profile topics must come from the represented article categories");

let profileSource = "";
let profileHtml = "";
try {
  [profileSource, profileHtml] = await Promise.all([
    readSource("src/pages/authors/santiago-sosa.astro"),
    readBuilt("authors/santiago-sosa/index.html"),
  ]);
} catch {
  assert.fail("Santiago Sosa author profile source and built route must exist");
}

assert(profileSource.includes('import { insightPosts } from "../../data/blogPosts"'), "profile must import shared blog data");
assert(/insightPosts\s*\.filter|insightPosts\.filter/.test(profileSource), "profile article list must be selected from shared blog data");
assert(/\.map\(\(post\)/.test(profileSource), "profile article list must render from shared blog data");
assert(profileSource.includes("new Set") && profileSource.includes("post.category"), "profile topics must derive from article categories");
assert(!profileSource.includes("<img"), "profile must not invent or generate a portrait");
assert(profileSource.includes("overflow-wrap"), "profile needs narrow-screen wrapping");
assert(/\.article-list a:focus-visible,[\s\S]*\.linkedin-link:focus-visible[\s\S]*outline: 3px solid #315b28/.test(profileSource), "light-surface article and LinkedIn focus must use dark green");
assert(/\.method-list a:focus-visible[\s\S]*outline: 3px solid #69d254/.test(profileSource), "dark-surface method focus must use bright green");
assert(/\.method-list a:hover[\s\S]*color: #69d254/.test(profileSource), "dark-surface method hover must use bright green");
assert(contrastRatio("#315b28", "#f4f1e8") >= 3, "dark-green focus indicator contrast on the light profile surface is insufficient");
assert(contrastRatio("#69d254", "#0f1213") >= 3, "bright-green hover/focus contrast on the dark methods surface is insufficient");

assert(profileHtml.includes('<link rel="canonical" href="https://markethink.ai/authors/santiago-sosa/">'), "profile canonical missing");
assert.equal((profileHtml.match(/<h1\b/g) ?? []).length, 1, "profile must render one H1");
assert(profileHtml.includes("Santiago Sosa is the founder of Markethink.ai, with more than 20 years of experience in marketing, digital strategy and growth."), "approved bio changed or missing");
assert(profileHtml.includes(`href="${SANTIAGO_LINKEDIN_URL}"`), "prominent LinkedIn link missing");
for (const topic of expectedTopics) assert(profileHtml.includes(topic), `represented topic missing: ${topic}`);
for (const route of expectedArticleUrls) assert.equal((profileHtml.match(new RegExp(`href="${route}"`, "g")) ?? []).length, 1, `profile article link count changed: ${route}`);
assert.equal((profileHtml.match(/data-author-article/g) ?? []).length, currentSlugs.length, "profile must list every current Santiago article exactly once");
const methods = profileHtml.match(/<section[^>]+data-company-methods[\s\S]*?<\/section>/)?.[0] ?? "";
assert(methods, "separate company-methods section missing");
assert(methods.includes('href="/ai-marketing-strategies/seo-aio-playbook/"') && methods.includes("SEO/AIO Playbook"), "SEO/AIO Playbook method link missing");
assert(methods.includes('href="/ai-marketing-strategies/new-website-launch-checklist/"') && methods.includes("New Website Launch Checklist"), "website launch method link missing");

const profileSchemas = schemaNodes(profileHtml);
const profilePages = profileSchemas.filter((node) => node["@type"] === "ProfilePage");
assert.equal(profilePages.length, 1, "profile must expose exactly one ProfilePage schema");
assert.equal(profilePages[0].url, SANTIAGO_PROFILE_URL);
assert.equal(profilePages[0].mainEntity?.["@type"], "Person");
assert.equal(profilePages[0].mainEntity?.["@id"], SANTIAGO_PROFILE_ID);
assert.equal(profilePages[0].mainEntity?.name, "Santiago Sosa");
assert.deepEqual(profilePages[0].mainEntity?.sameAs, [SANTIAGO_LINKEDIN_URL]);
assert.equal(profilePages[0].mainEntity?.url, SANTIAGO_PROFILE_URL);
assert.equal(profilePages[0].mainEntity?.worksFor?.["@id"], "https://markethink.ai/#organization");
assert.equal(profilePages[0].mainEntity?.worksFor?.name, "Markethink");
assert.equal(profilePages[0].mainEntity?.worksFor?.["@type"], "Organization");
assert.equal(profilePages[0].mainEntity?.worksFor?.founder?.["@type"], "Person");
assert.equal(profilePages[0].mainEntity?.worksFor?.founder?.["@id"], SANTIAGO_PROFILE_ID);
assert.equal(profilePages[0].mainEntity?.founderOf, undefined, "Person schema must not use unsupported founderOf");
assert(!profileSource.includes("founderOf"), "profile source must reject unsupported Person.founderOf");

const genuine = resolveBlogAuthor({
  name: "A Different Author",
  title: "Contributing writer",
  url: "https://example.com/author",
  sameAs: ["https://www.linkedin.com/in/different-author"],
});
assert.equal(genuine.name, "A Different Author");
assert.equal(genuine.url, "https://example.com/author");
assert.deepEqual(genuine.sameAs, ["https://www.linkedin.com/in/different-author"]);

for (const slug of currentSlugs) {
  const route = `/blog/${slug}/`;
  const html = await readBuilt(`blog/${slug}/index.html`);
  assert.equal((html.match(/data-blog-author/g) ?? []).length, 1, `${route}: expected one author box`);
  const box = html.match(/<section[^>]+data-blog-author[\s\S]*?<\/section>/)?.[0] ?? "";
  assert(box.includes(`href="/authors/santiago-sosa/"`), `${route}: internal author profile link missing`);
  assert(box.includes(`href="${SANTIAGO_LINKEDIN_URL}"`), `${route}: direct LinkedIn author-box link missing`);
  assert(box.includes("View Santiago on LinkedIn"), `${route}: direct LinkedIn label missing`);
  assert(box.includes(">Santiago Sosa</a>"), `${route}: visible author name must link to internal profile`);

  const schemas = schemaNodes(html);
  const posting = schemas.find((node) => node["@type"] === "BlogPosting");
  assert(posting, `${route}: BlogPosting schema missing`);
  assert.equal(posting.author?.["@type"], "Person", `${route}: author must remain a Person`);
  assert.equal(posting.author?.name, "Santiago Sosa", `${route}: author name mismatch`);
  assert.equal(posting.author?.url, SANTIAGO_PROFILE_URL, `${route}: author URL must be internal profile`);
  assert.deepEqual(posting.author?.sameAs, [SANTIAGO_LINKEDIN_URL], `${route}: LinkedIn sameAs changed`);
  assert.equal(posting.publisher?.["@id"], "https://markethink.ai/#organization", `${route}: publisher reference changed`);
  assert(schemas.some((node) => node["@id"] === "https://markethink.ai/#organization" && node["@type"] === "Organization" && node.name === "Markethink"), `${route}: Markethink Organization publisher missing`);
}

const strategyCases = [
  {
    path: "ai-marketing-strategies/seo-aio-playbook/index.html",
    version: "1.2.0",
    date: PLAYBOOK_META.reviewedDate,
  },
  {
    path: "ai-marketing-strategies/new-website-launch-checklist/index.html",
    version: "1.0.0",
    date: WEBSITE_LAUNCH_META.reviewedDate,
  },
];
for (const item of strategyCases) {
  const html = await readBuilt(item.path);
  const blocks = html.match(/<aside[^>]+data-strategy-attribution[\s\S]*?<\/aside>/g) ?? [];
  assert.equal(blocks.length, 1, `${item.path}: expected one strategy attribution block`);
  const text = normalize(blocks[0]);
  assert(text.includes("Created and maintained by Markethink"), `${item.path}: company maintenance line missing`);
  assert(text.includes("Editorial lead: Santiago Sosa"), `${item.path}: editorial lead line missing`);
  assert(blocks[0].includes('href="/authors/santiago-sosa/"'), `${item.path}: editorial lead profile link missing`);
  assert(!/Reviewed by|reviewedBy|lastReviewed/i.test(blocks[0]), `${item.path}: attribution must not claim personal review`);
  assert(html.includes(item.version), `${item.path}: version changed`);
  assert(html.includes(item.date), `${item.path}: method review date changed`);
  assert(!/"reviewedBy"|"lastReviewed"/.test(html), `${item.path}: speculative personal-review schema present`);
  const techArticle = schemaNodes(html).find((node) => node["@type"] === "TechArticle");
  assert.equal(techArticle?.author?.["@type"], "Organization", `${item.path}: company authorship changed`);
  assert.equal(techArticle?.author?.name, "Markethink", `${item.path}: company author changed`);
  assert.equal(techArticle?.publisher?.["@type"], "Organization", `${item.path}: company publisher changed`);
  assert.equal(techArticle?.publisher?.name, "Markethink", `${item.path}: company publisher name changed`);
}

const downloadHashes = {
  "downloads/markethink-seo-aio-playbook.md": "d546cd3b144ccdcc37160d34e19082e3f90c5cff419375b222546252f4afd5ec",
  "downloads/markethink-seo-aio-playbook.zip": "9312787e283b17c4109575feb65879b1428f9d1463911e94e7e83223dc2f9d77",
  "downloads/markethink-new-website-launch-checklist.md": "1e33f4924eb7768917b7486d1d87ef339aec2b9b7991bd282563a042e5d6f57b",
  "downloads/markethink-new-website-launch-checklist.zip": "e9c84a31e15ebd65e41afb7b8504abb9514f1111f1d64a6b79d123f48efb07eb",
};
for (const [path, expected] of Object.entries(downloadHashes)) {
  assert.equal(sha256(await readFile(join(dist, path))), expected, `${path}: download bytes changed`);
}

const sitemap = await readBuilt("sitemap.xml");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(locs.length, 29, "sitemap must increase from 28 to exactly 29 URLs");
assert.equal(new Set(locs).size, locs.length, "sitemap URLs must remain unique");
assert.equal(locs.filter((url) => url === SANTIAGO_PROFILE_URL).length, 1, "author profile sitemap URL missing or duplicated");
assert(!locs.includes("https://markethink.ai/authors/"), "nonexistent authors index must not enter sitemap");
assert(!profileHtml.includes('href="/authors/"'), "profile must not link to a nonexistent authors index");

console.log(`Verified ${currentSlugs.length} current blog routes and one data-driven Santiago Sosa profile.`);
console.log(`Verified focus/hover contrast: dark green on light ${contrastRatio("#315b28", "#f4f1e8").toFixed(2)}:1; bright green on dark ${contrastRatio("#69d254", "#0f1213").toFixed(2)}:1.`);
console.log("Verified ProfilePage/Person worksFor + Organization founder schema, blog author links/schema, two strategy attribution blocks, download preservation, and 29 unique sitemap URLs.");
