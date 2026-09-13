import { deflateRawSync } from "node:zlib";

export const LIBRARY_META = {
  name: "AI Marketing Strategy Library",
  title: "AI Marketing Strategies & Agent Skills | Markethink",
  h1: "AI Marketing Strategies & Agent Skills",
  supportingLine: "Steal the strategy. Put your AI to work.",
  description: "Use reviewed AI marketing strategies, practical playbooks, and portable agent instructions from Markethink, starting with a 30-day SEO and AI-search plan.",
  canonical: "https://markethink.ai/ai-marketing-strategies/",
  reviewedDate: "2026-09-13",
};

export const PLAYBOOK_META = {
  slug: "seo-aio-playbook",
  portableName: "markethink-seo-aio-playbook",
  title: "SEO & AI Search: A 30-Day Strategy Playbook",
  seoTitle: "SEO & AI Search: A 30-Day Strategy Playbook | Markethink",
  description: "Build an evidence-led 30-day SEO and AI-search plan for your business with required inputs, practical phases, deliverables, measurement limits, and a portable agent skill.",
  canonical: "https://markethink.ai/ai-marketing-strategies/seo-aio-playbook/",
  markdownUrl: "https://markethink.ai/downloads/markethink-seo-aio-playbook.md",
  skillUrl: "https://markethink.ai/downloads/markethink-seo-aio-playbook.zip",
  version: "1.0.0",
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
    description: "Turn your website, offer, evidence, and available search data into a scoped plan your team or agent can execute and verify.",
    use: "Choose the right existing pages, improve factual clarity, create sourced answer-ready support, connect contextual links, and measure delivery separately from outcomes.",
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
    name: "Prioritized 30-day plan",
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
    fields: ["date", "decision", "owner", "evidence reviewed", "work shipped", "measurement still pending", "next action"],
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
  "The 30-day window is an execution structure, not a claim that search engines will recrawl, index, rank, or cite a page on that schedule.",
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
  const outputLines = requiredOutputs.map((output) => `${output.name}: ${output.fields.join("; ")}`);
  const measurementLines = measurementLanes.map((lane) => `${lane.label}: ${lane.limit}`);
  const sourceLines = originalSources.map((source) => `${source.publisher}, ${source.title}: ${source.url}`);
  return `SEO & AI SEARCH: 30-DAY STRATEGY BRIEF\nVersion: ${PLAYBOOK_META.version}\nReviewed: ${PLAYBOOK_META.reviewedDate}\nSource: ${PLAYBOOK_META.canonical}\n\nROLE\nHelp me adapt an evidence-led SEO and AI-search method to my business and produce an executable 30-day plan. Support planning, review, and only the execution I separately authorize. This brief does not authorize publishing, spending, sending, outreach, account changes, or any action outside my permissions.\n\nOPERATING RULES\n${numbered(evidenceRules)}\n\nCONTEXT TO COLLECT\nReuse anything I already supplied. Ask only for material missing information, grouped into one concise request when possible.\n${list(inputLines)}\n\nTOOL AND DATA CHECK\n${list(toolAvailabilityChecks)}\n\nWORKFLOW\n${phaseLines.join("\n")}\n\nREQUIRED OUTPUTS\nReturn every section below. Use tables where they improve readability.\n${numbered(outputLines)}\n\nMEASUREMENT SEPARATION\nNever collapse these into one visibility score.\n${list(measurementLines)}\n\nACCEPTANCE RULES\n- Adapt the number of pages, queries, and actions to the stated capacity.\n- Every action must have an owner, reviewer where needed, dependency, effort, target URL or asset, and delivery acceptance evidence.\n- Mark unavailable data as Not available and state what would be needed to measure it.\n- Treat a completed deliverable as delivery evidence only. Keep rankings, traffic, leads, conversions, and citations pending until observed from a named source.\n- Preserve original source URLs and attribute any borrowed strategy.\n- Do not present Markethink's roadmap or any illustrative example as proof for this business.\n- End with a review log that records decisions, shipped work, measurements still pending, and the next evidence-led action.\n\nLIMITATIONS\n${list(limitations)}\n\nORIGINAL SOURCES\n${list(sourceLines)}\n\nSTART\nFirst summarize the context already available. Then show the tool and data-availability register. Ask only for material missing inputs that prevent a responsible plan. If enough context exists, proceed without repeating questions.`;
}

export function getOutputTemplatesMarkdown() {
  return `# Reusable output templates\n\n## Tool and data-availability register\n\n| Source | Status | Scope | Date range | Filters or denominator | Can support | Unavailable |\n| --- | --- | --- | --- | --- | --- | --- |\n\n## Query-to-existing-URL intent map\n\n| Query or question family | Intent | Audience or location | Existing primary URL | Page job | Evidence | Gap | Recommended action |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n\n## Prioritized 30-day plan\n\n| Window | Action | Owner | Reviewer | Dependency | Effort | Target | Delivery acceptance evidence | Outcome observation and timing |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n\n## Page-improvement brief\n\n- Target URL:\n- Current page job:\n- Observed issue and evidence:\n- Recommended change:\n- Facts or sources required:\n- Contextual links:\n- Approval required:\n- Delivery acceptance check:\n- Outcome observation and timing:\n\n## Measurement baseline\n\n| Measurement lane | Value or Not available | Source | Collection date | Scope | Denominator or filters | Limitation | Next comparable review |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n\n## Review log\n\n| Date | Decision | Owner | Evidence reviewed | Work shipped | Measurement still pending | Next action |\n| --- | --- | --- | --- | --- | --- | --- | --- |`;
}

export function getOriginalSourcesMarkdown() {
  return `# Original sources and evidence limits\n\nReviewed ${PLAYBOOK_META.reviewedDate}. Read the live source before relying on a detail that may have changed.\n\n${originalSources.map((source) => `## ${source.title}\n\n- Publisher: ${source.publisher}\n- URL: ${source.url}\n- Used for: ${source.use}`).join("\n\n")}\n\n## Working-example boundary\n\nMarkethink's public implementation log is available at https://markethink.ai/seo-aio-strategy/. It is a working example, not independent proof. Do not copy its statuses or observations into another business's plan.`;
}

export function getSkillMarkdown() {
  return `---\nname: ${PLAYBOOK_META.portableName}\ndescription: Build an evidence-led 30-day SEO and AI-search plan from a business's website, offer, audience, constraints, and available search data. Use when planning or reviewing SEO, AIO, answer-ready content, internal links, page improvements, and search measurement.\nmetadata:\n  author: "${PLAYBOOK_META.author}"\n  version: "${PLAYBOOK_META.version}"\n  reviewed: "${PLAYBOOK_META.reviewedDate}"\n  source: "${PLAYBOOK_META.canonical}"\n---\n\n# SEO and AI Search: 30-Day Strategy Playbook\n\n${getStandaloneBrief()}\n\n## Optional package resources\n\nUse [the original-source reference](references/ORIGINAL-SOURCES.md) when checking source scope or recency. Use [the reusable output templates](assets/OUTPUT-TEMPLATES.md) when the user wants tables or a review record. The instructions above remain complete without loading either file.`;
}

export function getStandaloneMarkdown() {
  return `# ${PLAYBOOK_META.title}\n\n> ${PLAYBOOK_META.description}\n\n- Version: ${PLAYBOOK_META.version}\n- Reviewed: ${PLAYBOOK_META.reviewedDate}\n- Author: ${PLAYBOOK_META.author}\n- Canonical page: ${PLAYBOOK_META.canonical}\n- Portable skill: ${PLAYBOOK_META.skillUrl}\n\n## Purpose\n\nAdapt a reviewed SEO and AI-search method to a real business, then produce a scoped plan that distinguishes available evidence from assumptions and delivery from outcomes.\n\n## Who it fits\n\nBusinesses with a live website, a defined offer, and enough internal knowledge to verify facts, review recommendations, and authorize any execution separately.\n\n## Complete standalone AI brief\n\n${getStandaloneBrief()}\n\n## Reusable output templates\n\n${getOutputTemplatesMarkdown()}\n\n## Source notes\n\n${getOriginalSourcesMarkdown()}\n`;
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
