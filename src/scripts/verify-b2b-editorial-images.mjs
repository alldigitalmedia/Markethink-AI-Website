import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { b2bEditorialImages } from "../data/b2bEditorialImages.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const assetBase = "https://dashboard.markethink.ai/generated/landing/markethink/markethink/";

const sharingFiles = [
  "markethink-v2-p01-statistics-resource-sharing-1200x630-20260913.jpg",
  "markethink-v2-p02-ai-marketing-agency-sharing-1200x630-20260913.jpg",
  "markethink-v2-p03-ai-logo-usable-brand-identity-sharing-1200x630-20260913.jpg",
  "markethink-v2-p04-seo-content-feedback-loop-sharing-1200x630-20260913.jpg",
  "markethink-v2-p05-practical-ai-marketing-guide-sharing-1200x630-20260913.jpg",
  "markethink-v2-p06-showing-up-in-ai-search-sharing-1200x630-20260913.jpg",
  "markethink-v2-p07-consistent-marketing-rhythm-sharing-1200x630-20260913.jpg",
  "markethink-v2-p08-brand-memory-approval-loop-sharing-1200x630-20260913.jpg",
  "markethink-v2-p09-cost-of-disconnected-marketing-sharing-1200x630-20260913.jpg",
  "markethink-v2-p10-ideas-to-client-opportunities-sharing-1200x630-20260913.jpg",
];

const expected = [
  [1, "AI marketing statistics resource", "/ai-marketing-statistics/", "b2b-editorial-review-20260912-p01-statistics-resource-desktop.webp", "b2b-editorial-review-20260912-p01-statistics-resource-mobile.webp", "b2b-editorial-review-20260912-p01-statistics-resource-thumbnail.webp", 1440, 960, 960, 640, 960, 720],
  [2, "What is an AI marketing agency", "/blog/what-is-an-ai-marketing-agency/", "b2b-editorial-review-20260912-p02-ai-marketing-agency-desktop.webp", "b2b-editorial-review-20260912-p02-ai-marketing-agency-mobile.webp", "b2b-editorial-review-20260912-p02-ai-marketing-agency-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [3, "AI logo / usable brand identity", "/blog/how-to-use-ai-to-create-an-impactful-logo-and-brand-identity-for-your-business/", "b2b-editorial-review-20260912-p03-ai-logo-usable-brand-identity-desktop.webp", "b2b-editorial-review-20260912-p03-ai-logo-usable-brand-identity-mobile.webp", "b2b-editorial-review-20260912-p03-ai-logo-usable-brand-identity-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [4, "SEO/content feedback loop", "/blog/seo-content-feedback-loop/", "b2b-editorial-review-20260912-p04-seo-content-feedback-loop-desktop.webp", "b2b-editorial-review-20260912-p04-seo-content-feedback-loop-mobile.webp", "b2b-editorial-review-20260912-p04-seo-content-feedback-loop-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [5, "Practical AI marketing guide", "/blog/how-to-use-ai-for-marketing-small-business/", "b2b-editorial-review-20260912-p05-practical-ai-marketing-guide-desktop.webp", "b2b-editorial-review-20260912-p05-practical-ai-marketing-guide-mobile.webp", "b2b-editorial-review-20260912-p05-practical-ai-marketing-guide-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [6, "Showing up in AI search", "/blog/how-to-show-up-in-ai-search/", "b2b-editorial-review-20260912-p06-showing-up-in-ai-search-desktop.webp", "b2b-editorial-review-20260912-p06-showing-up-in-ai-search-mobile.webp", "b2b-editorial-review-20260912-p06-showing-up-in-ai-search-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [7, "Consistent marketing rhythm", "/blog/consistent-marketing-beats-chasing-ai-tools/", "b2b-editorial-review-20260912-p07-consistent-marketing-rhythm-desktop.webp", "b2b-editorial-review-20260912-p07-consistent-marketing-rhythm-mobile.webp", "b2b-editorial-review-20260912-p07-consistent-marketing-rhythm-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [8, "Brand-memory approval loop", "/blog/brand-memory-feedback-approved-campaigns/", "b2b-editorial-review-20260912-v2-p08-brand-memory-approval-loop-desktop.webp", "b2b-editorial-review-20260912-v2-p08-brand-memory-approval-loop-mobile.webp", "b2b-editorial-review-20260912-v2-p08-brand-memory-approval-loop-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [9, "Cost of disconnected marketing", "/blog/hidden-cost-disconnected-marketing-apps-prompts-docs/", "b2b-editorial-review-20260912-p09-cost-of-disconnected-marketing-desktop.webp", "b2b-editorial-review-20260912-p09-cost-of-disconnected-marketing-mobile.webp", "b2b-editorial-review-20260912-p09-cost-of-disconnected-marketing-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
  [10, "Ideas to client opportunities", "/blog/scattered-ideas-to-client-opportunities/", "b2b-editorial-review-20260912-p10-ideas-to-client-opportunities-desktop.webp", "b2b-editorial-review-20260912-p10-ideas-to-client-opportunities-mobile.webp", "b2b-editorial-review-20260912-p10-ideas-to-client-opportunities-thumbnail.webp", 1440, 810, 960, 720, 960, 600],
].map(([placement, title, route, desktop, mobile, thumbnail, desktopWidth, desktopHeight, mobileWidth, mobileHeight, thumbnailWidth, thumbnailHeight], index) => ({
  placement,
  title,
  route,
  desktop: assetBase + desktop,
  mobile: assetBase + mobile,
  thumbnail: assetBase + thumbnail,
  sharing: assetBase + sharingFiles[index],
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
  thumbnailWidth,
  thumbnailHeight,
  sharingWidth: 1200,
  sharingHeight: 630,
}));

assert.deepEqual(b2bEditorialImages.map(({ alt: _alt, ...image }) => image), expected, "V2 route-to-asset mapping must match the approved review exactly");
assert.equal(b2bEditorialImages.length, 10, "The approved system contains exactly ten placements");
assert.equal(new Set(b2bEditorialImages.flatMap(({ desktop, mobile, thumbnail, sharing }) => [desktop, mobile, thumbnail, sharing])).size, 40, "Every responsive and sharing derivative URL must be unique");
for (const image of b2bEditorialImages) {
  assert.match(image.alt, /^Conceptual editorial scene of /, `Placement ${image.placement} needs useful non-claiming alt text`);
  assert.doesNotMatch(image.alt, /\b(client|customer|employee|testimonial|participant|case study|result)\b/i, `Placement ${image.placement} alt text must not imply customer proof`);
}

const sources = {
  data: await readFile(join(root, "src/data/blogPosts.ts"), "utf8"),
  article: await readFile(join(root, "src/pages/blog/[slug].astro"), "utf8"),
  index: await readFile(join(root, "src/pages/blog/index.astro"), "utf8"),
  homepageCards: await readFile(join(root, "src/components/Blog.astro"), "utf8"),
  statistics: await readFile(join(root, "src/pages/ai-marketing-statistics.astro"), "utf8"),
};

for (const token of ["imageThumbnail", "imageSharing", "b2bEditorialImages"]) assert.ok(sources.data.includes(token), `blogPosts.ts must expose ${token}`);
assert.match(sources.article, /source media="\(max-width: 680px\)"[^>]*srcset=\{post\.imageMobile\}[^>]*type="image\/webp"[^>]*width="960"[^>]*height="720"/s, "Article hero must expose the approved 4:3 mobile source and intrinsic size");
assert.match(sources.article, /src=\{post\.image\}[^>]*width="1440"[^>]*height="810"/s, "Article hero must expose the approved desktop source and intrinsic size");
assert.match(sources.article, /src=\{related\.imageThumbnail\}[^>]*width="960"[^>]*height="600"/s, "Related article cards must use approved thumbnails");
assert.match(sources.index, /\{editorialInsightPosts\.map\(\(post, index\) =>/, "Blog index cards must follow the approved placement order");
assert.match(sources.index, /src=\{post\.imageThumbnail\}[^>]*width="960"[^>]*height="600"/s, "Blog index cards must use approved thumbnails");
assert.match(sources.homepageCards, /const smallPosts = editorialInsightPosts\.map/, "Reusable insight cards must follow the approved placement order");
assert.match(sources.homepageCards, /image: post\.imageThumbnail/, "Homepage insight cards must use approved thumbnails");
assert.match(sources.statistics, /source media="\(max-width: 680px\)"[^>]*srcset=\{heroImage\.mobile\}[^>]*type="image\/webp"[^>]*width="960"[^>]*height="640"/s, "Statistics hero must expose the approved mobile source and intrinsic size");
assert.match(sources.statistics, /src=\{heroImage\.desktop\}[^>]*width="1440"[^>]*height="960"/s, "Statistics hero must expose the approved desktop source and intrinsic size");
assert.match(sources.index, /src=\{statisticsImage\.thumbnail\}[^>]*width="960"[^>]*height="720"/s, "Featured research card must use the approved P01 thumbnail");
assert.match(sources.article, /const socialImage = post\.imageSharing;/, "Every article must use its dedicated sharing derivative");
assert.match(sources.article, /const socialImageWidth = 1200;[\s\S]*?const socialImageHeight = 630;/, "Article sharing metadata must expose 1200x630 dimensions");
assert.match(sources.article, /image:\s*\{[\s\S]*?"@type": "ImageObject"[\s\S]*?url: socialImage[\s\S]*?contentUrl: socialImage[\s\S]*?width: socialImageWidth[\s\S]*?height: socialImageHeight[\s\S]*?caption: post\.imageAlt/s, "Article JSON-LD must expose a dimensioned ImageObject with useful alt text");
assert.match(sources.statistics, /const socialImage = heroImage\.sharing;[\s\S]*?const socialImageAlt = heroImage\.alt;/, "Statistics sharing metadata must use the approved P01 derivative and conceptual alt text");
for (const oldSharing of ["ai-marketing-statistics-business-owner-v6-og-1200x630.jpg", "ai-marketing-agency-guide-og-1200x630.jpg"]) assert.ok(!Object.values(sources).join("\n").includes(oldSharing), `Rejected legacy sharing image must remain absent: ${oldSharing}`);

const p04Mobile = expected[3].mobile;
assert.ok(sources.article.includes("article-hero-image--protected-mobile"), "P04 requires a protected mobile class");
assert.match(sources.article, /@media \(max-width: 767px\)[\s\S]*?\.article-hero-image--protected-mobile img\s*\{[\s\S]*?object-fit:\s*contain;[\s\S]*?object-position:\s*50% 50%;[\s\S]*?transform:\s*none;[\s\S]*?background:\s*#0f1213;/i, "P04 mobile CSS must preserve the full scene without recropping or repositioning");
assert.equal(b2bEditorialImages[3].mobile, p04Mobile, "P04 mobile must remain the exact approved full-scene asset");

const sourceText = Object.values(sources).join("\n");
for (const rejected of [
  "candidate-d.png",
  "b2b-editorial-review-20260912-p08-brand-memory-approval-loop-desktop.webp",
  "b2b-editorial-review-20260912-p08-brand-memory-approval-loop-mobile.webp",
  "b2b-editorial-review-20260912-p08-brand-memory-approval-loop-thumbnail.webp",
]) assert.ok(!sourceText.includes(rejected), `Rejected asset must remain absent: ${rejected}`);

for (const color of ["#0f1213", "#f5f5f1", "#edf4ea", "#69d254"]) assert.ok(sourceText.toLowerCase().includes(color), `Required palette color must remain present: ${color}`);
for (const value of ["17.4%", "52.0%", "89%", "53%", "41%", "38%", "36%", "82%", "45%", "37-point gap"]) assert.ok(sources.statistics.includes(value), `Statistics chart invariant must remain present: ${value}`);
for (const marker of ["ledger.statistics", "ledger.sources", "id={item.id.toLowerCase()}", "/seo-aio-strategy/"]) assert.ok(sources.statistics.includes(marker), `Statistics/source/strategy invariant must remain present: ${marker}`);

const distRoot = join(root, "dist");
async function htmlFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...await htmlFiles(path));
    else if (entry.name.endsWith(".html")) found.push(path);
  }
  return found;
}
try {
  const builtHtml = (await htmlFiles(distRoot)).map(async (path) => [relative(distRoot, path), await readFile(path, "utf8")]);
  const pages = await Promise.all(builtHtml);
  const html = pages.map(([, content]) => content).join("\n");
  for (const image of expected) {
    assert.ok(html.includes(image.desktop), `Built HTML must include placement ${image.placement} desktop URL`);
    assert.ok(html.includes(image.mobile), `Built HTML must include placement ${image.placement} mobile URL`);
    assert.ok(html.includes(image.thumbnail), `Built HTML must include placement ${image.placement} thumbnail URL`);
    assert.ok(html.includes(image.sharing), `Built HTML must include placement ${image.placement} sharing URL`);
  }
  for (const rejected of ["candidate-d.png", "b2b-editorial-review-20260912-p08-brand-memory-approval-loop-"]) assert.ok(!html.includes(rejected), `Built HTML must omit rejected asset token: ${rejected}`);
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

console.log("Verified exact V2 ten-placement editorial image mapping and preservation contracts.");
