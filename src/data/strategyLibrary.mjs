import { deflateRawSync } from "node:zlib";

export const LIBRARY_META = {
  name: "AI Marketing Strategy Library",
  title: "AI Marketing Strategies & Agent Skills | Markethink",
  h1: "AI Marketing Strategies & Agent Skills",
  supportingLine: "Steal the strategy. Put your AI to work.",
  description: "Use reviewed AI marketing strategies, practical ongoing playbooks, and portable agent instructions from Markethink, starting with an evidence-led SEO and AI-search method.",
  canonical: "https://markethink.ai/ai-marketing-strategies/",
  reviewedDate: "2026-09-13",
};

export const PLAYBOOK_META = {
  slug: "seo-aio-playbook",
  portableName: "markethink-seo-aio-playbook",
  title: "SEO & AI Search: An Ongoing Strategy Playbook",
  seoTitle: "SEO & AI Search: An Ongoing Strategy Playbook | Markethink",
  description: "Build and maintain an evidence-led SEO and AI-search strategy with an initial 30-day implementation cycle, repeat-cycle backlog, measurement limits, and a portable agent skill.",
  canonical: "https://markethink.ai/ai-marketing-strategies/seo-aio-playbook/",
  markdownUrl: "https://markethink.ai/downloads/markethink-seo-aio-playbook.md",
  skillUrl: "https://markethink.ai/downloads/markethink-seo-aio-playbook.zip",
  version: "1.1.0",
  reviewedDate: "2026-09-13",
  author: "Markethink",
  specificationUrl: "https://agentskills.io/specification",
  evidenceStatus: "Method reviewed. Business-specific findings not yet measured.",
};

export const strategyEntries = [
  {
    slug: PLAYBOOK_META.slug,
    href: "/ai-marketing-strategies/seo-aio-playbook/",
    title: PLAYBOOK_META.title,
    description: "Turn your website, offer, evidence, and available search data into a maintained strategy your team or agent can execute, verify, review, and repeat.",
    use: "Choose the right existing pages, improve factual clarity, create sourced answer-ready support, connect contextual links, review delivery separately from results, and build the next capacity-aware backlog.",
    fit: "Businesses with a live website, a defined offer, and enough internal knowledge to review facts and approve changes.",
    version: PLAYBOOK_META.version,
    reviewedDate: PLAYBOOK_META.reviewedDate,
  },
];

export const usageModes = [
  {
    label: "Copy and paste",
    detail: "Paste the complete standalone brief into any capable agent and keep your business context with it.",
  },
  {
    label: "Attach Markdown",
    detail: "Download one self-contained Markdown file when an agent handles attachments or long context more reliably.",
  },
  {
    label: "Import the skill",
    detail: "Use the ZIP only where the agent or product supports the Agent Skills specification and skill import.",
  },
];

export const requiredInputs = [
  { key: "website", label: "Website", detail: "Primary domain and any priority URLs or sitemap." },
  { key: "business", label: "Business and offer", detail: "What the business sells, its differentiators, pricing posture, and claims it can support." },
  { key: "audience", label: "Audience and geography", detail: "Ideal customer, buying situation, languages, locations, and service limits." },
  { key: "objective", label: "Objective", detail: "The business action the search program should support and the planning horizon." },
  { key: "pages", label: "Current pages", detail: "Known commercial, educational, comparison, proof, contact, and conversion pages." },
  { key: "constraints", label: "Constraints", detail: "Capacity, approvals, compliance, technical limits, publishing access, and protected claims." },
  { key: "evidence", label: "Available evidence", detail: "Search exports, analytics, CRM observations, customer questions, research, approved examples, and first-party expertise." },
];

export const toolAvailabilityChecks = [
  "Inspect connected tools and supplied exports before recommending research work.",
  "Use Search Console, analytics, DataForSEO, Semrush, Ahrefs, or another source only when it is actually connected or the user supplied an export.",
  "Record each source as available, supplied export, unavailable, or not needed for this scope.",
  "Do not treat a general language-model answer as live search-result, indexing, traffic, conversion, or citation evidence.",
];

export const evidenceRules = [
  "Reuse supplied context and ask only for material missing information.",
  "Keep observed facts, source estimates, business hypotheses, and recommendations visibly separate.",
  "Label unavailable measurements as Not available, not zero.",
  "Keep search-volume estimates, organic difficulty, ad competition, indexing, traffic, conversions, and sampled AI citations in separate fields.",
  "Keep delivery completion separate from rankings, traffic, leads, citations, and revenue outcomes.",
  "Preserve the receiving user's permissions. Planning or review does not authorize publishing, spending, sending, outreach, or account changes.",
  "Ongoing means the method can be repeated when a user starts a new authorized cycle. It does not authorize scheduled tasks, continuous monitoring, paid tool calls, publishing, or outreach.",
];

export const phases = [
  {
    id: "baseline-research",
    window: "Days 1 to 5",
    title: "Baseline, research, and technical access",
    purpose: "Establish what can be observed, what the site already owns, and which gaps are real before expanding scope.",
    actions: [
      "Inventory current indexable and priority URLs, then assign each a visible audience, intent, offer, and next-step job.",
      "Register available tools and exports. Record collection dates, filters, geography, device, and denominators where relevant.",
      "Build a query-to-existing-URL intent map from customer language, supplied evidence, and live search research when available.",
      "Check technical access, crawl controls, canonicals, status responses, sitemap inclusion, internal discoverability, and important rendered text.",
      "Create a dated baseline without filling unavailable fields with invented values.",
    ],
    deliverables: ["Business brief", "Tool and data-availability register", "Query-to-existing-URL intent map", "Measurement baseline"],
  },
  {
    id: "page-clarity",
    window: "Days 6 to 12",
    title: "Improve the right pages and factual entity or offer information",
    purpose: "Make the pages that already own buyer needs more accurate, useful, and explicit before creating new inventory.",
    actions: [
      "Prioritize existing pages by business value, evidence gap, technical risk, effort, and confidence in the diagnosis.",
      "Prepare page-improvement briefs covering intent, audience, direct answer, proof, factual entity or offer details, structure, internal links, and next step.",
      "Resolve inconsistent business names, categories, service areas, offer details, contact paths, and supported structured data where the evidence allows.",
      "Keep recommendations scoped to available capacity and approval paths.",
    ],
    deliverables: ["Prioritized page queue", "Page-improvement briefs", "Entity and offer consistency review"],
  },
  {
    id: "answer-ready-content",
    window: "Days 13 to 22",
    title: "Create useful sourced answer-ready content and contextual links",
    purpose: "Fill verified information gaps with original, useful material and connect it to the pages that need support.",
    actions: [
      "Create or improve only the content required by the intent map and page briefs.",
      "Lead with a direct answer where it helps the reader, then add context, original expertise, sources, limits, and a useful next step.",
      "Add crawlable contextual links with descriptive anchors where the destination genuinely helps the reader.",
      "Attribute borrowed methods and preserve readable original-source URLs.",
      "Do not manufacture mentions, citations, reviews, examples, or scaled pages to imitate authority.",
    ],
    deliverables: ["Sourced content briefs or approved drafts", "Contextual-link plan", "Source and claims register"],
  },
  {
    id: "verification-review",
    window: "Days 23 to 30",
    title: "Verify shipped changes and review comparable observations",
    purpose: "Confirm that authorized work actually shipped, then compare observations without turning correlation into a claimed outcome.",
    actions: [
      "Verify each authorized release on its canonical production URL, including response, crawlability, metadata, structured data, links, accessibility, and responsive rendering.",
      "Record delivery evidence for every planned item and list anything not shipped with its dependency.",
      "Repeat only comparable search or AI-answer samples with the same question, geography, language, device, source, and collection method where possible.",
      "Review indexing, organic discovery, sampled AI citations, referral activity, and conversions as separate observations.",
      "Choose the next cycle from the strongest verified gap, not from a promised ranking or an isolated favorable answer.",
    ],
    deliverables: ["30-day plan with acceptance evidence", "Production verification record", "Comparable observation review", "Review log and next-cycle decision"],
  },
];

export const repeatCycle = [
  {
    id: "refresh-evidence",
    title: "Update the evidence baseline",
    detail: "Review available first-party data, supplied exports, live technical checks, and dated search observations. Keep unavailable measures as Not available.",
  },
  {
    id: "separate-reviews",
    title: "Review delivery and results separately",
    detail: "Confirm what was delivered and verified before reviewing rankings, traffic, citations, inquiries, or revenue observations on their own timelines.",
  },
  {
    id: "carry-forward",
    title: "Carry unfinished work forward",
    detail: "Keep unfinished tasks, dependencies, owners, and acceptance checks visible. Never auto-complete an item because a target date passed.",
  },
  {
    id: "scope-opportunities",
    title: "Add newly justified opportunities",
    detail: "Add an opportunity to the maintained backlog only when current evidence and available capacity make it specific enough to scope.",
  },
  {
    id: "prioritize-capacity",
    title: "Prioritize the next capacity-aware cycle",
    detail: "Choose the smallest useful set of next actions, with owners, dependencies, effort, target URLs, and delivery acceptance evidence.",
  },
  {
    id: "log-decision",
    title: "Append a dated decision and change log",
    detail: "Record the evidence reviewed, delivery status, result status, lessons, carry-forward work, and the next review checkpoint.",
  },
];

export const requiredOutputs = [
  {
    name: "Concise business brief",
    fields: ["business and offer", "audience and geography", "objective", "priority conversion action", "constraints", "known evidence", "unresolved material inputs"],
  },
  {
    name: "Tool and data-availability register",
    fields: ["source", "status", "scope", "date range", "filters or denominator", "what it can support", "what remains unavailable"],
  },
  {
    name: "Query-to-existing-URL intent map",
    fields: ["query or question family", "intent", "audience or location", "existing primary URL", "page job", "evidence", "gap", "recommended action"],
  },
  {
    name: "Prioritized initial 30-day cycle",
    fields: ["window", "action", "owner", "reviewer", "dependency", "effort", "target URL", "delivery acceptance evidence", "outcome observation and timing"],
  },
  {
    name: "Page-improvement briefs",
    fields: ["target URL", "current job", "observed issue", "recommended change", "facts or sources required", "contextual links", "approval need", "acceptance check"],
  },
  {
    name: "Measurement baseline",
    fields: ["measurement lane", "value or Not available", "source", "collection date", "scope", "denominator or filters", "limitation", "next comparable review"],
  },
  {
    name: "Review log",
    fields: ["date", "decision", "owner", "evidence reviewed", "delivery review", "results review", "lesson", "next action"],
  },
  {
    name: "Next-cycle backlog and review checkpoint",
    fields: ["carried-forward task", "newly justified opportunity", "scope evidence", "priority", "capacity", "owner", "dependency", "acceptance check", "review date or trigger"],
  },
];

export const measurementLanes = [
  { label: "Search-volume estimate", limit: "An estimate from a named source and scope. It is not observed site traffic." },
  { label: "Organic difficulty", limit: "A vendor-specific estimate. It is not Google data or a guarantee of ranking effort." },
  { label: "Ad competition", limit: "Paid-search advertiser competition. It is not organic ranking difficulty." },
  { label: "Indexing", limit: "Observed or reported eligibility and index state. It is not ranking or traffic." },
  { label: "Organic traffic", limit: "Visits or clicks attributed by the named source and filters. It is not a conversion." },
  { label: "Conversions", limit: "Defined business actions with a named tracking source. They do not prove SEO caused the result." },
  { label: "Sampled AI citations", limit: "Dated observations from a fixed question and environment. They are directional, not a universal rank." },
];

export const limitations = [
  "Search and AI-answer systems change. A plan can improve clarity, crawlability, usefulness, and evidence without guaranteeing selection, ranking, citation, traffic, or leads.",
  "Low-volume businesses may need review windows longer than 30 days for comparable outcome observations.",
  "Tool estimates use different datasets and definitions. Record the provider and do not merge unlike metrics.",
  "The first 30 days are an initial implementation cycle, not the lifespan of the strategy or a claim that search engines will recrawl, index, rank, or cite a page on that schedule.",
  "A current baseline is evidence for prioritization, not a permanent cap on future actions. New work enters the maintained backlog only when it is justified and scoped.",
  "Markethink's public roadmap is an implementation example from Markethink.ai. It is not independent proof and its statuses must not be copied into another business's plan.",
];

export const originalSources = [
  {
    title: "Optimizing your website for generative AI features on Google Search",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    use: "Foundational SEO, valuable non-commodity content, technical clarity, supported measurement, and limits on AI-search shortcuts.",
  },
  {
    title: "AI features and your website",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
    use: "Eligibility, crawlability, indexability, internal links, visible text, structured-data consistency, and reporting limits.",
  },
  {
    title: "Creating helpful, reliable, people-first content",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    use: "Originality, completeness, sourcing, authorship, audience value, and avoiding search-engine-first production.",
  },
  {
    title: "Google Search's guidance on using generative AI content on your website",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
    use: "Accuracy, quality, relevance, transparency, and scaled-content limits when AI supports production.",
  },
  {
    title: "Link best practices for Google",
    publisher: "Google Search Central",
    url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable",
    use: "Crawlable anchors, descriptive link text, contextual internal links, and useful external citations.",
  },
];

const list = (items) => items.map((item) => `- ${item}`).join("\n");
const numbered = (items) => items.map((item, index) => `${index + 1}. ${item}`).join("\n");

export function getStandaloneBrief() {
  const inputLines = requiredInputs.map((item) => `${item.label}: ${item.detail}`);
  const phaseLines = phases.flatMap((phase) => [
    `${phase.window}: ${phase.title}`,
    ...phase.actions.map((action) => `  - ${action}`),
  ]);
  const repeatLines = repeatCycle.map((step, index) => `${index + 1}. ${step.title}: ${step.detail}`);
  const outputLines = requiredOutputs.map((output) => `${output.name}: ${output.fields.join("; ")}`);
  const measurementLines = measurementLanes.map((lane) => `${lane.label}: ${lane.limit}`);
  const sourceLines = originalSources.map((source) => `${source.publisher}, ${source.title}: ${source.url}`);
  return `SEO & AI SEARCH: ONGOING STRATEGY BRIEF
Version: ${PLAYBOOK_META.version}
Reviewed: ${PLAYBOOK_META.reviewedDate}
Source: ${PLAYBOOK_META.canonical}

ROLE
Help me adapt and maintain an evidence-led SEO and AI-search strategy for my business. Use the first 30 days as an initial implementation cycle, then produce a capacity-aware next-cycle backlog and review checkpoint so the strategy does not stop at day 30. Support planning, review, and only the execution I separately authorize. Ongoing does not authorize scheduled tasks, continuous monitoring, paid tool calls, publishing, or outreach. It also does not authorize spending, sending, account changes, or any action outside my permissions.

OPERATING RULES
${numbered(evidenceRules)}

CONTEXT TO COLLECT
Reuse anything I already supplied. Ask only for material missing information, grouped into one concise request when possible.
${list(inputLines)}

TOOL AND DATA CHECK
${list(toolAvailabilityChecks)}

INITIAL 30-DAY IMPLEMENTATION CYCLE
This is the foundation cycle, not the lifespan or completion deadline of the strategy.
${phaseLines.join("\n")}

REPEAT CYCLE BEYOND DAY 30
${repeatLines.join("\n")}

REQUIRED OUTPUTS
Return every section below. Use tables where they improve readability.
${numbered(outputLines)}

MEASUREMENT SEPARATION
Never collapse these into one visibility score.
${list(measurementLines)}

ACCEPTANCE RULES
- Adapt the number of pages, queries, and actions to the stated capacity.
- Every action must have an owner, reviewer where needed, dependency, effort, target URL or asset, and delivery acceptance evidence.
- Mark unavailable data as Not available and state what would be needed to measure it.
- Treat a completed deliverable as delivery evidence only. Keep rankings, traffic, leads, conversions, and citations pending until observed from a named source.
- Review delivered work and results in separate fields.
- Carry unfinished work forward with its dependency and acceptance check. Never auto-complete work because a date passed.
- Add a newly justified opportunity only after its evidence, scope, priority, capacity, owner, dependency, and acceptance check are explicit.
- End every cycle with a next-cycle backlog, a review date or trigger, and an appended dated decision/change log.
- Preserve original source URLs and attribute any borrowed strategy.
- Do not present Markethink's roadmap or any illustrative example as proof for this business.
- Do not schedule the next review, create a monitor, use a paid tool, publish, or begin outreach unless I separately authorize that action.

LIMITATIONS
${list(limitations)}

ORIGINAL SOURCES
${list(sourceLines)}

START
First summarize the context already available. Then show the tool and data-availability register. Ask only for material missing inputs. Produce the initial implementation cycle, review delivery and results separately, and finish with an honest next-cycle backlog and review checkpoint.`;
}

export function getOutputTemplatesMarkdown() {
  return `# Reusable output templates

## Tool and data-availability register

| Source | Status | Scope | Date range | Filters or denominator | Can support | Unavailable |
| --- | --- | --- | --- | --- | --- | --- |

## Query-to-existing-URL intent map

| Query or question family | Intent | Audience or location | Existing primary URL | Page job | Evidence | Gap | Recommended action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Prioritized initial 30-day cycle

| Window | Action | Owner | Reviewer | Dependency | Effort | Target | Delivery acceptance evidence | Outcome observation and timing |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Page-improvement brief

- Target URL:
- Current page job:
- Observed issue and evidence:
- Recommended change:
- Facts or sources required:
- Contextual links:
- Approval required:
- Delivery acceptance check:
- Outcome observation and timing:

## Measurement baseline

| Measurement lane | Value or Not available | Source | Collection date | Scope | Denominator or filters | Limitation | Next comparable review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Delivery review

| Planned item | Delivery state | Verification evidence | Unfinished dependency | Carry forward |
| --- | --- | --- | --- | --- |

## Results review

| Measurement lane | Observation or Not available | Source | Collection date | Scope | Limitation |
| --- | --- | --- | --- | --- | --- |

## Next-cycle backlog and review checkpoint

| Carried-forward task | Newly justified opportunity | Scope evidence | Priority | Capacity | Owner | Dependency | Acceptance check | Review date or trigger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Dated decision and change log

| Date | Decision | Owner | Evidence reviewed | Delivery review | Results review | Lesson | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |`;
}

export function getOriginalSourcesMarkdown() {
  return `# Original sources and evidence limits\n\nReviewed ${PLAYBOOK_META.reviewedDate}. Read the live source before relying on a detail that may have changed.\n\n${originalSources.map((source) => `## ${source.title}\n\n- Publisher: ${source.publisher}\n- URL: ${source.url}\n- Used for: ${source.use}`).join("\n\n")}\n\n## Working-example boundary\n\nMarkethink's public implementation log is available at https://markethink.ai/seo-aio-strategy/. It is a working example, not independent proof. Do not copy its statuses or observations into another business's plan.`;
}

export function getSkillMarkdown() {
  return `---\nname: ${PLAYBOOK_META.portableName}\ndescription: Build and maintain an evidence-led SEO and AI-search strategy from a business's website, offer, audience, constraints, and available search data. Use for an initial implementation cycle, ongoing review, next-cycle backlog planning, answer-ready content, internal links, page improvements, and search measurement.\nmetadata:\n  author: "${PLAYBOOK_META.author}"\n  version: "${PLAYBOOK_META.version}"\n  reviewed: "${PLAYBOOK_META.reviewedDate}"\n  source: "${PLAYBOOK_META.canonical}"\n---\n\n# SEO & AI Search: An Ongoing Strategy Playbook\n\n${getStandaloneBrief()}\n\n## Optional package resources\n\nUse [the original-source reference](references/ORIGINAL-SOURCES.md) when checking source scope or recency. Use [the reusable output templates](assets/OUTPUT-TEMPLATES.md) when the user wants tables or a review record. The instructions above remain complete without loading either file.`;
}

export function getStandaloneMarkdown() {
  return `# ${PLAYBOOK_META.title}\n\n> ${PLAYBOOK_META.description}\n\n- Version: ${PLAYBOOK_META.version}\n- Reviewed: ${PLAYBOOK_META.reviewedDate}\n- Author: ${PLAYBOOK_META.author}\n- Canonical page: ${PLAYBOOK_META.canonical}\n- Portable skill: ${PLAYBOOK_META.skillUrl}\n\n## Purpose\n\nAdapt a reviewed SEO and AI-search method to a real business, run the first 30 days as an initial implementation cycle, then maintain a capacity-aware next-cycle backlog that distinguishes available evidence from assumptions and delivery from results.\n\n## Who it fits\n\nBusinesses with a live website, a defined offer, and enough internal knowledge to verify facts, review recommendations, and authorize any execution separately.\n\n## Complete standalone AI brief\n\n${getStandaloneBrief()}\n\n## Reusable output templates\n\n${getOutputTemplatesMarkdown()}\n\n## Source notes\n\n${getOriginalSourcesMarkdown()}\n`;
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
