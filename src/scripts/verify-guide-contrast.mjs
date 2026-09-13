import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const cream = "#f4f1e8";
const body = "#303536";
const link = "#2f7026";
const heading = "#0f1213";

const relativeLuminance = (hex) => {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => parseInt(value, 16) / 255);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
};
const contrast = (foreground, background) => {
  const values = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
};

assert(contrast(body, cream) >= 4.5, "guide body color must meet WCAG AA on the article cream");
assert(contrast(link, cream) >= 4.5, "guide link color must meet WCAG AA on the article cream");
assert(contrast(heading, cream) >= 4.5, "guide heading color must meet WCAG AA on the article cream");

const files = {
  search: await readFile(join(root, "src/components/blog/AiSearchInteractiveGuide.astro"), "utf8"),
  loop: await readFile(join(root, "src/components/blog/SeoContentFeedbackLoopGuide.astro"), "utf8"),
  practical: await readFile(join(root, "src/components/blog/AiMarketingPracticalGuide.astro"), "utf8"),
};

for (const [name, source] of Object.entries(files)) {
  assert(source.includes(body), `${name} guide must use the approved dark body color`);
  assert(source.includes(link), `${name} guide must use the approved dark-green link color`);
  assert(/text-decoration(?:-line)?:\s*underline/.test(source), `${name} guide links must retain a non-color cue`);
  assert(source.includes("#0f1213"), `${name} guide must retain charcoal headings and dark panels`);
  assert(source.includes("#f5f5f1"), `${name} guide must retain light text for dark panels`);
  assert(source.includes("#69d254"), `${name} guide must retain green controls and accents`);
}

assert(/\.ai-guide\s*\{[^}]*color:\s*#1d2223/.test(files.search), "AI-search light-surface inheritance must be dark");
assert(/h2\s*\{[^}]*color:\s*#0f1213/.test(files.search), "AI-search light-surface headings must be charcoal");
assert(/\.audit-result\s*\{[^}]*background:\s*#0f1213;[^}]*color:\s*#f5f5f1/.test(files.search), "AI-search dark audit card theme changed");
assert(/\.plan-toolbar\s*\{[^}]*background:\s*#0f1213/.test(files.search), "AI-search dark plan toolbar changed");

assert(/\.guide-section\s*>\s*p\s*\{[^}]*color:\s*#303536/.test(files.loop), "feedback-loop light-surface paragraphs must be dark");
assert(/\.visual\s*\{[^}]*background:\s*#0f1213;[^}]*color:\s*#f5f5f1/.test(files.loop), "feedback-loop dark visual theme changed");

assert(/\.guide-section\s*\{[^}]*color:#0f1213/.test(files.practical), "practical-guide light-surface inheritance must be charcoal");
assert(/\.subhead\s*\{[^}]*color:#0f1213!important/.test(files.practical), "practical-guide light-surface subheads must be charcoal");
assert(/\.guide-section>p\s*\{[^}]*color:#303536!important/.test(files.practical), "practical-guide light-surface paragraphs must be dark");
assert(/\.goal-grid article[^}]*background:#0f1213;color:#f5f5f1/.test(files.practical), "practical-guide dark cards changed");

console.log(JSON.stringify({
  background: cream,
  body: { color: body, contrast: Number(contrast(body, cream).toFixed(2)) },
  link: { color: link, contrast: Number(contrast(link, cream).toFixed(2)), nonColorCue: "underline" },
  heading: { color: heading, contrast: Number(contrast(heading, cream).toFixed(2)) },
  guides: Object.keys(files),
}, null, 2));
