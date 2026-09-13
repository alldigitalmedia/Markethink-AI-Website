import { readFileSync } from "node:fs";
import { deflateRawSync } from "node:zlib";
import { WEBSITE_LAUNCH_META } from "./websiteLaunchChecklist.mjs";

export const LIBRARY_META = {
  name: "AI Marketing Strategy Library",
  title: "AI Marketing Strategies & Agent Skills | Markethink",
  h1: "AI Marketing Strategies & Agent Skills",
  supportingLine: "Steal the strategy. Put your AI to work.",
  description: "Use reviewed AI marketing strategies, practical playbooks, launch checklists, and portable agent instructions from Markethink.",
  canonical: "https://markethink.ai/ai-marketing-strategies/",
  reviewedDate: "2026-09-13",
};

export const PLAYBOOK_META = {
  slug: "seo-aio-playbook",
  portableName: "markethink-seo-aio-playbook",
  title: "SEO & AI Search Growth Playbook",
  seoTitle: "SEO & AI Search Growth Playbook | Markethink",
  description: "Find buyer-relevant search opportunities, choose which pages to improve or create, and turn evidence into prioritized SEO and AI-search work with clear acceptance checks.",
  canonical: "https://markethink.ai/ai-marketing-strategies/seo-aio-playbook/",
  markdownUrl: "https://markethink.ai/downloads/markethink-seo-aio-playbook.md",
  skillUrl: "https://markethink.ai/downloads/markethink-seo-aio-playbook.zip",
  version: "1.2.0",
  reviewedDate: "2026-09-13",
  author: "Markethink",
  specificationUrl: "https://agentskills.io/specification",
  evidenceStatus: "Method reviewed. Business-specific findings require measured evidence.",
};

export const strategyEntries = [
  {
    slug: PLAYBOOK_META.slug,
    href: "/ai-marketing-strategies/seo-aio-playbook/",
    title: PLAYBOOK_META.title,
    description: "Find buyer-relevant search opportunities, decide which existing pages to improve, and turn the evidence into implementable work for your team or agent.",
    use: "Research current demand, map each buyer task to the right URL, make keep/improve/create/defer decisions, prepare page briefs, and review delivery separately from results.",
    fit: "Businesses with a live website, a defined offer, and enough internal knowledge to verify facts and approve changes.",
    version: PLAYBOOK_META.version,
    reviewedDate: PLAYBOOK_META.reviewedDate,
    topic: "SEO + AI search",
    format: "Growth playbook",
    imageIndex: 0,
  },
  {
    slug: WEBSITE_LAUNCH_META.slug,
    href: "/ai-marketing-strategies/new-website-launch-checklist/",
    title: WEBSITE_LAUNCH_META.title,
    description: "Verify a new website across technical setup, conversion paths, accessibility, analytics, trust, performance, release safety, and post-launch ownership.",
    use: "Give every launch check an owner, a verification method, a pass criterion, and dated evidence before and after the production release.",
    fit: "Teams preparing a new marketing website, redesign, migration, or major public release with access to test the final production URL.",
    version: WEBSITE_LAUNCH_META.version,
    reviewedDate: WEBSITE_LAUNCH_META.reviewedDate,
    topic: "Website launch",
    format: "Verification checklist",
    imageIndex: 7,
  },
];

export const usageModes = [
  {
    label: "Attach one Markdown file",
    detail: "Download the complete self-contained Markdown file and attach it to an AI conversation that accepts documents or long context.",
  },
  {
    label: "Copy and paste",
    detail: "Copy the complete playbook into a capable AI conversation and keep the relevant business context with it.",
  },
  {
    label: "Import the package",
    detail: "Use the ZIP only where the product supports compatible skill imports. It adds packaged source notes and reusable output templates.",
  },
];

export const processSteps = [
  { id: "baseline-research", label: "Research", detail: "Connect the offer to buyer questions and inspect a bounded current landscape." },
  { id: "page-clarity", label: "Prioritize", detail: "Choose the right URL action and explain the tradeoff against the next-best option." },
  { id: "answer-ready-content", label: "Implement", detail: "Produce a usable brief, draft, or work plan with owners, dependencies, and acceptance checks." },
  { id: "verification-review", label: "Verify", detail: "Confirm delivery on the intended surface and keep technical evidence separate from outcomes." },
  { id: "refresh-evidence", label: "Review", detail: "Compare like-for-like observations, preserve history, and select the next useful cycle." },
];

export const tocSections = [
  { href: "#purpose-title", label: "Start with the job" },
  { href: "#evidence-title", label: "Use data for decisions" },
  { href: "#method-title", label: "Diagnose first" },
  { href: "#outputs-title", label: "Make work implementable" },
  { href: "#measurement-title", label: "Measure AI search" },
  { href: "#repeat-title", label: "Maintain the program" },
  { href: "#sources-title", label: "Source guidance" },
  { href: "#copy-for-ai", label: "Use with your AI" },
];

export const originalSources = [
  {
    title: "AI features and your website",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
    use: "Search eligibility, access, content guidance, and measurement limits for Google AI features.",
  },
  {
    title: "Optimizing for generative AI features",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    use: "Current platform guidance for useful content and generative-search visibility.",
  },
  {
    title: "Creating helpful, reliable, people-first content",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    use: "Originality, sourcing, authorship, usefulness, and content-quality boundaries.",
  },
  {
    title: "Link best practices for Google",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable",
    use: "Crawlable links and descriptive, useful internal-link placement.",
  },
  {
    title: "Influencing your title links in search results",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/appearance/title-link",
    use: "Descriptive, concise titles without treating one fixed character count as a ranking rule.",
  },
];

const candidateMarkdown = readFileSync("src/data/markethink-seo-aio-playbook/SKILL.md", "utf8");

export function getCandidateMarkdown() {
  return candidateMarkdown;
}

export function getCandidateBodyMarkdown() {
  return candidateMarkdown.replace(/^---\n[\s\S]*?\n---\n+/, "");
}

export function getStandaloneBrief() {
  return candidateMarkdown;
}

export function getSkillMarkdown() {
  return candidateMarkdown;
}

export function getStandaloneMarkdown() {
  return candidateMarkdown;
}

export function getOutputTemplatesMarkdown() {
  return `# Reusable output templates

## Evidence register

| Source or reference | Observed or exported date | Scope and filters | Finding | Evidence type | Limitation |
| --- | --- | --- | --- | --- | --- |

## Opportunity-to-URL map

| Priority | Buyer need | Query family | Target URL | Action | Evidence | Differentiator | Conversion path | Tradeoff |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Work plan

| Work-item ID | Current status | Status history or evidence reference | Owner | Effort | Dependency | Target URL | Action | Delivery acceptance check | Outcome review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Page brief

- Decision and target URL:
- Buyer task and intended conversion:
- Observed diagnosis and source:
- What must be retained:
- Proposed title and H1:
- Opening answer or value proposition:
- Section outline and questions resolved:
- Distinctive value and missing inputs:
- Proof, claims, dates, and review needs:
- Inbound and outbound internal links:
- Owner, dependency, effort, and delivery acceptance:

## Review checkpoint

| Date or trigger | Work shipped | Comparable observations | Missing data | Decision | Existing items carried forward | Proposed new items |
| --- | --- | --- | --- | --- | --- | --- |`;
}

export function getOriginalSourcesMarkdown() {
  return `# Original sources and evidence limits

Reviewed ${PLAYBOOK_META.reviewedDate}. Read each live source before relying on a changing platform detail.

${originalSources.map((source) => `## ${source.title}\n\n- Publisher: ${source.publisher}\n- URL: ${source.url}\n- Used for: ${source.use}`).join("\n\n")}

## Working-example boundary

Markethink's public implementation log is available at https://markethink.ai/seo-aio-strategy/. It is an implementation record, not independent proof. Preserve its original work-item IDs, status history, evidence, and limitations when using it as context.`;
}

export const packageFiles = {
  [`${PLAYBOOK_META.portableName}/SKILL.md`]: getSkillMarkdown(),
  [`${PLAYBOOK_META.portableName}/references/ORIGINAL-SOURCES.md`]: getOriginalSourcesMarkdown(),
  [`${PLAYBOOK_META.portableName}/assets/OUTPUT-TEMPLATES.md`]: getOutputTemplatesMarkdown(),
};

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return {
    time: 0,
    date: ((Math.max(1980, year) - 1980) << 9) | (month << 5) | day,
  };
}

export function createDeterministicSkillZip() {
  const entries = Object.entries(packageFiles).sort(([a], [b]) => a.localeCompare(b));
  const locals = [];
  const centrals = [];
  let offset = 0;
  const stamp = dosDateTime(PLAYBOOK_META.reviewedDate);
  for (const [name, content] of entries) {
    const nameBuffer = Buffer.from(name, "utf8");
    const data = Buffer.from(content, "utf8");
    const compressed = deflateRawSync(data, { level: 9 });
    const checksum = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(8, 8);
    local.writeUInt16LE(stamp.time, 10);
    local.writeUInt16LE(stamp.date, 12);
    local.writeUInt32LE(checksum, 14);
    local.writeUInt32LE(compressed.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuffer.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, nameBuffer, compressed);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(0x0314, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(stamp.time, 12);
    central.writeUInt16LE(stamp.date, 14);
    central.writeUInt32LE(checksum, 16);
    central.writeUInt32LE(compressed.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuffer.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(0x81a40000, 38);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBuffer);
    offset += local.length + nameBuffer.length + compressed.length;
  }
  const centralDirectory = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);
  return Buffer.concat([...locals, centralDirectory, end]);
}
