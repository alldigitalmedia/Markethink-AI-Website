import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  SANTIAGO_LINKEDIN_URL,
  getBlogAuthorSchema,
  resolveBlogAuthor,
} from "../data/blogAuthors.ts";

const root = process.cwd();
const source = readFileSync(resolve(root, "src/data/blogPosts.ts"), "utf8");
const insightStart = source.indexOf("export const insightPosts: BlogPost[] = [");
const insightEnd = source.indexOf("export const editorialInsightPosts");
assert(insightStart >= 0 && insightEnd > insightStart, "Could not locate insightPosts");
const insightBlock = source.slice(insightStart, insightEnd);
const slugs = [...insightBlock.matchAll(/^    slug: "([^"]+)",/gm)].map(
  (match) => match[1],
);
assert(slugs.length > 0, "No blog routes found in insightPosts");
assert.equal(new Set(slugs).size, slugs.length, "Blog slugs must be unique");

const expectedName = "Santiago Sosa";
const expectedTitle = "Founder of Markethink.ai";
const expectedBio =
  "Santiago Sosa is the founder of Markethink.ai, with more than 20 years of experience in marketing, digital strategy and growth.";
const expectedByline = `By ${expectedName}, ${expectedTitle}`;

const placeholder = resolveBlogAuthor({
  name: "Markethink Editorial Team",
  title: "Legacy placeholder",
});
assert.equal(placeholder.name, expectedName);
assert.equal(placeholder.title, expectedTitle);
assert.equal(placeholder.url, SANTIAGO_LINKEDIN_URL);
assert.deepEqual(placeholder.sameAs, [SANTIAGO_LINKEDIN_URL]);

const genuineInput = {
  name: "A Genuine Contributor",
  title: "Guest strategist",
  bio: "Contributor biography.",
  url: "https://example.com/contributor",
  sameAs: ["https://example.com/contributor"],
  schemaType: "Person",
  linkLabel: "View contributor profile",
};
const genuine = resolveBlogAuthor(genuineInput);
assert.equal(genuine.name, genuineInput.name);
assert.equal(genuine.title, genuineInput.title);
assert.equal(genuine.bio, genuineInput.bio);
assert.equal(genuine.url, genuineInput.url);
assert.deepEqual(genuine.sameAs, genuineInput.sameAs);
assert.deepEqual(getBlogAuthorSchema(genuine), {
  "@type": "Person",
  name: genuineInput.name,
  url: genuineInput.url,
  sameAs: genuineInput.sameAs,
});

function count(haystack, needle) {
  return haystack.split(needle).length - 1;
}

function textContent(fragment) {
  return fragment
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function walk(value, visit) {
  if (Array.isArray(value)) {
    value.forEach((item) => walk(item, visit));
    return;
  }
  if (!value || typeof value !== "object") return;
  visit(value);
  Object.values(value).forEach((item) => walk(item, visit));
}

for (const slug of slugs) {
  const route = `/blog/${slug}/`;
  const htmlPath = resolve(root, "dist/blog", slug, "index.html");
  const html = readFileSync(htmlPath, "utf8");

  assert.equal(count(html, "data-blog-author"), 1, `${route}: author block count`);
  assert.equal(count(html, "data-blog-byline"), 1, `${route}: byline count`);

  const bylineMatch = html.match(/<span[^>]*data-blog-byline[^>]*>([\s\S]*?)<\/span>/);
  assert(bylineMatch, `${route}: missing visible byline`);
  assert.equal(textContent(bylineMatch[1]), expectedByline, `${route}: byline text`);

  const authorMatch = html.match(/<section[^>]*data-blog-author[^>]*>([\s\S]*?)<\/section>/);
  assert(authorMatch, `${route}: missing author block markup`);
  const authorMarkup = authorMatch[1];
  const authorText = textContent(authorMarkup);
  for (const expectedText of [
    "About the author",
    expectedName,
    expectedTitle,
    expectedBio,
    "View Santiago on LinkedIn",
  ]) {
    assert(authorText.includes(expectedText), `${route}: missing ${expectedText}`);
  }
  assert(
    new RegExp(`<a[^>]*href="${SANTIAGO_LINKEDIN_URL}"[^>]*>[\\s\\S]*View Santiago on LinkedIn[\\s\\S]*<\\/a>`).test(authorMarkup),
    `${route}: LinkedIn destination`,
  );

  const faqIndex = html.indexOf('class="article-faq"');
  const authorIndex = html.indexOf("data-blog-author");
  const relatedIndex = html.indexOf('class="related-section"');
  assert(faqIndex >= 0 && faqIndex < authorIndex, `${route}: author must follow FAQ`);
  assert(authorIndex < relatedIndex, `${route}: author must precede related reading`);

  const schemaScripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert(schemaScripts.length > 0, `${route}: missing JSON-LD`);
  const nodes = [];
  for (const script of schemaScripts) {
    walk(JSON.parse(script[1]), (node) => nodes.push(node));
  }
  const posting = nodes.find((node) => {
    const type = node["@type"];
    return type === "BlogPosting" || (Array.isArray(type) && type.includes("BlogPosting"));
  });
  assert(posting, `${route}: missing BlogPosting schema`);
  assert.equal(posting.author?.["@type"], "Person", `${route}: author schema type`);
  assert.equal(posting.author?.name, expectedName, `${route}: schema author name`);
  assert.equal(posting.author?.url, SANTIAGO_LINKEDIN_URL, `${route}: schema author URL`);
  assert.deepEqual(posting.author?.sameAs, [SANTIAGO_LINKEDIN_URL], `${route}: schema sameAs`);
  assert.equal(posting.publisher?.["@id"], "https://markethink.ai/#organization", `${route}: publisher reference`);

  const publisher = nodes.find(
    (node) =>
      node["@id"] === "https://markethink.ai/#organization" &&
      node["@type"] === "Organization",
  );
  assert(publisher, `${route}: missing Markethink Organization publisher entity`);
  assert.equal(publisher.name, "Markethink", `${route}: publisher name`);
}

console.log(`Verified ${slugs.length} blog routes: one author block, aligned byline, Person schema, and Markethink Organization publisher.`);
console.log("Verified placeholder fallback and genuine-author preservation.");
