import { deflateRawSync } from "node:zlib";

export const WEBSITE_LAUNCH_META = {
  slug: "new-website-launch-checklist",
  portableName: "markethink-new-website-launch-checklist",
  title: "The Complete New Website Launch Checklist",
  seoTitle: "Complete New Website Launch Checklist | Markethink",
  description: "Use a practical website launch checklist with verification methods and pass criteria for technical setup, conversion, accessibility, analytics, trust, performance, and post-launch ownership.",
  canonical: "https://markethink.ai/ai-marketing-strategies/new-website-launch-checklist/",
  markdownUrl: "https://markethink.ai/downloads/markethink-new-website-launch-checklist.md",
  skillUrl: "https://markethink.ai/downloads/markethink-new-website-launch-checklist.zip",
  version: "1.0.0",
  reviewedDate: "2026-09-13",
  author: "Markethink",
  evidenceStatus: "Checklist reviewed against current primary guidance. Each launch still needs project-specific verification.",
};

export const launchPrinciples = [
  "Treat launch as a verified release, not a file handoff or a successful build.",
  "Record evidence for each check. Use Not applicable only with a short reason and an owner who accepts it.",
  "Test the real production URL after release. A staging pass does not prove the public site is healthy.",
  "Keep business facts, claims, contact details, legal text, and consent choices owned by the business and approved reviewers.",
  "Do not imply that a privacy policy, terms page, cookie banner, structured-data type, or security header is universally sufficient for every jurisdiction or system.",
  "Separate launch readiness from post-launch outcomes. A passed checklist does not promise rankings, traffic, leads, or conversions.",
];

export const launchCategories = [
  {
    id: "page-level",
    label: "Page-level",
    title: "Give every page a clear job and a complete head section.",
    purpose: "Confirm that each indexable page explains itself to visitors, browsers, search systems, and sharing platforms.",
    items: [
      {
        id: "meta-title-every-page",
        title: "Meta title on every page",
        verify: "Crawl every public HTML page and extract the title element. Review titles beside the visible H1 and page purpose.",
        pass: "Every page has one non-empty, descriptive title that is distinct where the page intent is distinct.",
      },
      {
        id: "meta-description-every-page",
        title: "Meta description on every page",
        verify: "Crawl every public HTML page and extract meta[name=description]. Compare each description with the actual page content.",
        pass: "Every indexable page has one accurate, useful description. Important pages do not reuse boilerplate descriptions.",
      },
      {
        id: "canonical-url",
        title: "Canonical URL per indexable page",
        verify: "Inspect the rendered head and compare the absolute canonical with the preferred production URL, sitemap entry, and redirect behavior.",
        pass: "Each indexable page has one absolute canonical pointing to its preferred live URL, with no staging host or conflicting signal.",
      },
      {
        id: "heading-hierarchy",
        title: "Heading hierarchy",
        verify: "Generate a heading outline for each template and inspect the rendered page without relying on visual size alone.",
        pass: "The page has a clear H1 and meaningful section headings in a logical hierarchy without using headings only for styling.",
      },
      {
        id: "open-graph-image",
        title: "Open Graph image",
        verify: "Inspect og:image, request the absolute image URL, and preview a representative page in a sharing debugger where available.",
        pass: "The image URL is public, secure, decodes successfully, represents the page, and has useful og:image:alt text when an image is supplied.",
      },
      {
        id: "complete-social-metadata",
        title: "Complete social metadata",
        verify: "Extract og:title, og:description, og:url, og:type, and Twitter card metadata from representative page types.",
        pass: "Required Open Graph fields are present and accurate, the Twitter card is intentional, and URLs and copy match the canonical page.",
      },
      {
        id: "structured-data",
        title: "Structured data where applicable",
        verify: "Parse every JSON-LD block, validate the selected type, and compare marked-up facts with visible content and approved business data.",
        pass: "Only relevant supported types are used, markup parses, visible facts agree, and no reviews, ratings, locations, offers, or claims are invented.",
      },
      {
        id: "search-indexing-controls",
        title: "Search indexing controls",
        verify: "Compare meta robots, X-Robots-Tag, robots.txt access, canonicals, authentication, and sitemap inclusion for public, private, staging, and utility routes.",
        pass: "Indexable pages are crawlable and self-consistent. Private, staging, duplicate, and utility routes use the correct protection or noindex method for their purpose.",
      },
    ],
  },
  {
    id: "site-wide",
    label: "Site-wide technical",
    title: "Make the whole site predictable before traffic arrives.",
    purpose: "Check the shared files, routing, security baseline, and failure paths that affect more than one page.",
    items: [
      {
        id: "custom-404",
        title: "Custom 404 page",
        verify: "Request a clearly nonexistent URL in production and inspect the raw status, content, navigation, and recovery links.",
        pass: "The server returns HTTP 404, the page matches the site, and visitors can return to a useful destination without a broken loop.",
      },
      {
        id: "favicon-set",
        title: "Favicon set",
        verify: "Inspect favicon declarations and request the declared files plus the common /favicon.ico fallback.",
        pass: "Declared icons return successfully with correct image types and display in representative desktop and mobile browser tabs or shortcuts.",
      },
      {
        id: "robots-txt",
        title: "robots.txt",
        verify: "Request /robots.txt as plain text, review syntax, and test important allowed and disallowed paths against the intended crawl policy.",
        pass: "The file returns HTTP 200, does not block required rendered assets or indexable pages, and points to the preferred sitemap when that is the site policy.",
      },
      {
        id: "sitemap-xml",
        title: "sitemap.xml",
        verify: "Request and parse /sitemap.xml, deduplicate locations, and resolve every listed URL without fragments.",
        pass: "The sitemap is valid XML, contains only preferred indexable canonical URLs, and every location returns a successful final response.",
      },
      {
        id: "https-mixed-content",
        title: "HTTPS and mixed-content checks",
        verify: "Load representative production pages over HTTPS, review the certificate, inspect all requested resource URLs, and check browser security warnings.",
        pass: "The certificate is valid for the production host, every active resource and download uses a secure request, and no mixed content is blocked or upgraded unexpectedly.",
      },
      {
        id: "redirect-normalization",
        title: "Redirects and www/http normalization",
        verify: "Request http, https, www, non-www, trailing-slash, known legacy, and campaign URL variants at the raw HTTP layer.",
        pass: "Every variant reaches one preferred HTTPS URL through an intentional redirect chain with no loops, accidental 200 duplicates, or lost path and query values.",
      },
      {
        id: "broken-links-fragments",
        title: "Broken internal links and fragments",
        verify: "Crawl internal anchors, remove duplicate requests, resolve destination pages, and confirm every fragment ID exists in the rendered target.",
        pass: "All unique internal destinations return the intended successful response and every in-page fragment reaches an existing unique target.",
      },
      {
        id: "security-headers",
        title: "Security headers",
        verify: "Inspect production response headers on HTML and sensitive endpoints, then review the policy with the application owner before enforcement changes.",
        pass: "The approved baseline is present, such as HSTS on HTTPS, MIME sniffing protection, a suitable referrer policy, framing controls, and a tested Content Security Policy where appropriate.",
      },
    ],
  },
  {
    id: "conversion",
    label: "Conversion",
    title: "Test the next step, not just the page around it.",
    purpose: "Prove that a visitor can understand the offer, act, recover from errors, and reach the intended follow-up path.",
    items: [
      {
        id: "cta-above-fold",
        title: "CTA above the fold",
        verify: "Load priority landing pages at representative desktop and mobile sizes and inspect the initial viewport before scrolling.",
        pass: "The primary next step is visible, understandable, and usable without scrolling, while the offer and audience context remain clear.",
      },
      {
        id: "sticky-mobile-cta",
        title: "Sticky mobile CTA",
        verify: "Scroll the full page on a real or accurately emulated phone and interact with the sticky control near the top, middle, and bottom.",
        pass: "The CTA stays reachable without covering content, form controls, consent controls, or browser safe areas, and its destination works.",
      },
      {
        id: "loading-states",
        title: "Loading states",
        verify: "Throttle the network and exercise forms, search, booking, checkout, and other asynchronous actions.",
        pass: "The interface acknowledges the action, prevents accidental duplicate work, remains understandable, and recovers if the request fails or times out.",
      },
      {
        id: "form-error-states",
        title: "Form error states",
        verify: "Submit empty, malformed, rejected, offline, and server-error cases with keyboard and screen-reader-oriented inspection.",
        pass: "Errors are specific, associated with the relevant fields, announced accessibly, preserve entered data where safe, and explain how to recover.",
      },
      {
        id: "form-labels-validation-success",
        title: "Form labels, validation, and success behavior",
        verify: "Inspect label-control associations, required indicators, client and server validation, focus movement, and the successful submission response.",
        pass: "Every control has a persistent accessible label, validation works on both sides, success is clearly announced, and repeated submissions are controlled.",
      },
      {
        id: "thank-you-page",
        title: "Thank-you page",
        verify: "Complete a test submission with approved test data and follow the exact redirect or success state.",
        pass: "The confirmation loads, states what happens next without making an unsupported promise, preserves attribution where required, and is not treated as an acquisition landing page.",
      },
      {
        id: "lead-delivery-follow-up",
        title: "Lead delivery and follow-up ownership",
        verify: "Trace one approved test lead from the form through notification, CRM or inbox, source fields, owner assignment, and the next-step process.",
        pass: "The lead arrives once with useful source context, has an accountable owner and response path, and no sensitive test data is left in public systems.",
      },
    ],
  },
  {
    id: "accessibility",
    label: "Accessibility and responsive behavior",
    title: "Make the release usable without assuming one device or input method.",
    purpose: "Verify essential content and actions across assistive technology basics, keyboard use, touch, zoom, and narrow screens.",
    items: [
      {
        id: "alt-text-every-image",
        title: "Alt text on every image",
        verify: "Crawl every img element, then review each alternative in its visible context rather than checking attribute presence alone.",
        pass: "Every image has an alt attribute. Informative images have concise purpose-based alternatives, decorative images use empty alt text, and linked images communicate the destination or action.",
      },
      {
        id: "mobile-breakpoints",
        title: "Mobile breakpoints",
        verify: "Resize continuously and test narrow, representative, and wide phone widths plus tablet and desktop, including orientation changes.",
        pass: "Layouts reflow when content needs it, essential content is not removed, and no breakpoint creates overlap, clipping, or unusable controls.",
      },
      {
        id: "keyboard-focus",
        title: "Keyboard and focus accessibility",
        verify: "Use Tab, Shift+Tab, Enter, Space, and Escape through navigation, dialogs, forms, menus, and disclosures without using a mouse.",
        pass: "Every interactive element is reachable in a logical order, focus is clearly visible, controls operate from the keyboard, and focus is not trapped or lost.",
      },
      {
        id: "color-contrast",
        title: "Color contrast",
        verify: "Measure text, icons, control boundaries, and focus indicators in default, hover, focus, disabled, error, and success states.",
        pass: "The approved accessibility target is met across states, with at least 4.5:1 for normal text under the common WCAG AA check unless a valid exception applies.",
      },
      {
        id: "overflow-tap-targets",
        title: "Responsive overflow and tap targets",
        verify: "Compare document scroll width with viewport width and measure repeated controls at 320px and other supported phone sizes.",
        pass: "There is no unintended horizontal page scroll, content remains readable without two-dimensional scrolling, and pointer targets meet the chosen accessible size or spacing criterion.",
      },
      {
        id: "accessibility-semantics",
        title: "Accessibility semantics",
        verify: "Inspect landmarks, link and button roles, names, lists, tables, language, dialog semantics, status messages, and the accessibility tree.",
        pass: "Native elements express the correct purpose, every control has an accessible name, page language is set, and dynamic status changes are communicated without visual-only cues.",
      },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    title: "Protect speed and visual stability before the site becomes harder to change.",
    purpose: "Set practical release limits for images, page weight, responsiveness, and layout movement.",
    items: [
      {
        id: "compressed-images",
        title: "Compressed images",
        verify: "Inventory raster assets, compare delivered dimensions with rendered size, inspect formats, and review visual quality after compression.",
        pass: "Images use an appropriate modern format and quality, oversized originals are not shipped to small slots, and visible quality remains acceptable.",
      },
      {
        id: "image-dimensions-lazy-loading",
        title: "Image dimensions and lazy loading",
        verify: "Inspect width, height, aspect-ratio, loading, fetch priority, and decode behavior while progressively scrolling the full page.",
        pass: "Space is reserved before images load, above-the-fold priority images are not delayed, off-screen images defer where useful, and every requested image decodes with non-zero dimensions.",
      },
      {
        id: "core-web-vitals-budget",
        title: "Core Web Vitals and performance budget",
        verify: "Run repeatable lab tests on key templates under agreed conditions, record page-weight and request budgets, and establish field monitoring for supported traffic levels.",
        pass: "The release stays within the project budget and has no known blocker to the current good Core Web Vitals targets: LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1 at the 75th percentile in field data when available.",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Prove measurement with observed events, not tag presence.",
    purpose: "Make sure analytics can answer the launch questions without collecting or sending data outside the approved policy.",
    items: [
      {
        id: "analytics-installed",
        title: "Analytics installed",
        verify: "Inspect the production tag or first-party collector, confirm the expected environment and property, and observe a test page view in the receiving system.",
        pass: "The approved production analytics setup loads once, sends to the correct destination, excludes obvious development hosts, and receives a dated test event.",
      },
      {
        id: "analytics-event-consent",
        title: "Analytics event verification and consent-aware operation",
        verify: "Exercise primary CTA clicks, form starts, validation errors, successful submissions, downloads, and consent states while inspecting network payloads and the analytics debugger.",
        pass: "Named events fire once with approved parameters, sensitive form values are excluded, consent choices are respected where applicable, and the team can distinguish view, click, submit, qualified lead, and downstream outcome.",
      },
    ],
  },
  {
    id: "trust-legal",
    label: "Trust and legal",
    title: "Publish real business information and route legal text through the right owner.",
    purpose: "Give visitors credible contact and policy information without turning a checklist into legal advice or a compliance claim.",
    items: [
      {
        id: "privacy-policy",
        title: "Privacy policy page",
        verify: "Confirm the live URL, footer or form access, business identity, data practices, contact path, and approval record with the responsible reviewer.",
        pass: "The page uses current business-provided or counsel-approved text for the applicable operation and is reachable wherever the approved policy requires it.",
      },
      {
        id: "terms-conditions",
        title: "Terms and conditions",
        verify: "Confirm the live URL, business identity, applicable transaction or service context, and approval record with the responsible reviewer.",
        pass: "The page uses current business-provided or counsel-approved text where applicable. The checklist does not claim that generic terms are universally required or sufficient.",
      },
      {
        id: "real-contact-address",
        title: "Real contact address",
        verify: "Compare the published postal or service address and contact channels with the business-approved source of truth and applicable structured data.",
        pass: "The contact information is real, current, consistently formatted, appropriate for public use, and does not expose a private address by mistake.",
      },
      {
        id: "cookie-consent",
        title: "Cookie and consent behavior where legally applicable",
        verify: "Have the business or qualified counsel define the applicable requirement, then test default, accept, reject, granular choice, withdrawal, and return-visit behavior against that decision.",
        pass: "The implemented behavior matches the approved jurisdiction and data-use policy, preserves user choice, and does not load restricted tags before the approved condition is met.",
      },
    ],
  },
  {
    id: "launch-verification",
    label: "Launch verification",
    title: "Release with a way back and a named owner for what happens next.",
    purpose: "Confirm the public edge, preserve recovery options, and assign the first monitoring window.",
    items: [
      {
        id: "backup-rollback",
        title: "Backup and rollback",
        verify: "Create or confirm a dated pre-launch backup or immutable release, document the rollback trigger, and dry-run the recovery procedure in a safe environment where feasible.",
        pass: "The team can identify the last known good release, restore it without guessing, and knows who can authorize and execute rollback.",
      },
      {
        id: "device-browser-smoke",
        title: "Real-device and browser smoke tests",
        verify: "Test priority pages and one full conversion path on the agreed browser and device matrix, including at least one real phone when available.",
        pass: "Navigation, content, media, sticky elements, forms, downloads, and key interactions work with no critical layout or input defect across the supported matrix.",
      },
      {
        id: "production-errors",
        title: "Production console and network health",
        verify: "Open fresh production sessions, scroll and interact through key routes, then record console errors, failed requests, blocked resources, and HTTP error responses.",
        pass: "No release-related page error, uncaught exception, failed required request, mixed-content warning, or unexpected 4xx or 5xx response remains.",
      },
      {
        id: "post-launch-ownership",
        title: "Post-launch monitoring ownership",
        verify: "Record owners, alert channels, review times, and decision thresholds for uptime, forms, analytics, search indexing, performance, and business feedback.",
        pass: "Each critical signal has a named owner, first review time, escalation path, and rollback or correction trigger. Unavailable monitoring is recorded, not assumed.",
      },
    ],
  },
];

export const launchSources = [
  {
    publisher: "Google Search Central",
    title: "Influencing your title links in search results",
    url: "https://developers.google.com/search/docs/appearance/title-link",
    use: "Unique descriptive page titles and clear main-title signals.",
  },
  {
    publisher: "Google Search Central",
    title: "Control your snippets in search results",
    url: "https://developers.google.com/search/docs/appearance/snippet",
    use: "Accurate page-level meta descriptions and limits on how snippets are selected.",
  },
  {
    publisher: "Google Search Central",
    title: "How to specify a canonical URL",
    url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
    use: "Absolute canonical URLs, redirects, sitemap alignment, and duplicate URL handling.",
  },
  {
    publisher: "Google Search Central",
    title: "Introduction to robots.txt",
    url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
    use: "Crawler access controls and the distinction between crawl blocking and noindex.",
  },
  {
    publisher: "Google Search Central",
    title: "Build and submit a sitemap",
    url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
    use: "Valid sitemap structure, absolute canonical locations, and indexable URL selection.",
  },
  {
    publisher: "W3C Web Accessibility Initiative",
    title: "Easy Checks: A First Review of Web Accessibility",
    url: "https://www.w3.org/WAI/test-evaluate/preliminary/",
    use: "Page titles, image alternatives, headings, keyboard focus, contrast, and basic structure checks.",
  },
  {
    publisher: "W3C Web Accessibility Initiative",
    title: "Forms tutorials",
    url: "https://www.w3.org/WAI/tutorials/forms/",
    use: "Labels, validation, error notification, success notification, and form simplicity.",
  },
  {
    publisher: "web.dev",
    title: "Web Vitals",
    url: "https://web.dev/articles/vitals",
    use: "Current Core Web Vitals definitions, good thresholds, field measurement, and lab-test limits.",
  },
  {
    publisher: "web.dev",
    title: "Responsive web design basics",
    url: "https://web.dev/articles/responsive-web-design-basics",
    use: "Viewport configuration, content-led breakpoints, responsive overflow, and image dimensions.",
  },
  {
    publisher: "MDN Web Docs",
    title: "Mixed content",
    url: "https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content",
    use: "HTTPS resource delivery and mixed-content risk.",
  },
  {
    publisher: "MDN Web Docs",
    title: "Content Security Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP",
    use: "Tested security policy, resource restrictions, HTTPS upgrades, and defense in depth.",
  },
  {
    publisher: "Open Graph protocol",
    title: "Basic and structured metadata",
    url: "https://ogp.me/",
    use: "og:title, og:type, og:image, og:url, descriptions, and image alternatives.",
  },
  {
    publisher: "Schema.org",
    title: "Getting started with Schema.org",
    url: "https://schema.org/docs/gs.html",
    use: "Applicable structured-data types, visible fact alignment, and validation.",
  },
];

export function getLaunchChecklistRows() {
  return launchCategories.flatMap((category) => category.items.map((item) => ({ ...item, category: category.label })));
}

export function getCompactLaunchBrief() {
  const rows = getLaunchChecklistRows();
  return `NEW WEBSITE LAUNCH: VERIFICATION BRIEF
Version: ${WEBSITE_LAUNCH_META.version}
Reviewed: ${WEBSITE_LAUNCH_META.reviewedDate}
Source: ${WEBSITE_LAUNCH_META.canonical}

ROLE
Act as a website launch verifier. Inspect the real staging candidate and, only when separately authorized, the production release. Do not publish, spend, change accounts, or submit real personal data unless that action is explicitly authorized. Never report a pass from source presence alone.

CONTEXT TO COLLECT
- Business name, approved public contact details, and production domain
- Launch owner, technical owner, analytics owner, form or CRM owner, and legal or policy reviewer
- Priority pages, supported browsers and devices, primary conversion action, forms, downloads, integrations, and legacy URLs
- Indexable, noindex, private, staging, utility, and retired route classes
- Analytics property, approved event names, consent decision, performance budget, backup location, rollback trigger, and monitoring window
Reuse supplied context and ask once for material gaps. Do not invent business facts, legal requirements, compliance status, tracking permission, or performance evidence.

OUTPUT
Return one table with: Category | ID | Check | Owner | Verification method | Pass criterion | Status | Evidence | Blocker or next action.
Use only Pass, Fail, Blocked, or Not applicable. Explain every Not applicable result. Keep launch readiness separate from post-launch outcomes.

CHECKLIST
${rows.map((item, index) => `${index + 1}. [${item.category}] ${item.title}
   ID: ${item.id}
   Verify: ${item.verify}
   Pass: ${item.pass}`).join("\n")}

RELEASE SEQUENCE
1. Freeze the intended route and asset inventory. Confirm content, business facts, legal or policy approvals, and conversion ownership.
2. Run the checklist on the final staging candidate. Fix every Fail or record a real Blocked dependency before release.
3. Confirm the dated backup or last known good release and the rollback owner.
4. Release only through the authorized workflow.
5. Re-run production-critical checks on bare production URLs in fresh sessions at the agreed desktop and mobile widths.
6. Exercise links, downloads, forms, analytics events, consent states where applicable, redirects, 404 behavior, and the supported device and browser matrix.
7. Record console, network, response-header, metadata, sitemap, accessibility, performance, and conversion evidence.
8. Start the named post-launch monitoring window and log the first review time, decision thresholds, and correction or rollback trigger.

BOUNDARIES
- robots.txt manages crawler access. It is not a reliable way to keep a public URL out of search results.
- Lab performance tests help catch regressions but do not replace field data.
- Automated accessibility checks are useful but do not prove full accessibility.
- Privacy, terms, consent, contact-address publication, and regulated claims require business-approved or qualified-counsel input as applicable.
- A successful build or HTTP 200 response does not prove the intended release, interaction, or tracking behavior is live.

FINAL SUMMARY
Report totals by status, release identifier, tested production URLs, device and browser matrix, rollback readiness, monitoring owner, unresolved blockers, and the next review time. Do not claim rankings, traffic, leads, or conversion outcomes from launch completion.`;
}

export function getLaunchChecklistAssetMarkdown() {
  return `# New website launch checklist

Version ${WEBSITE_LAUNCH_META.version}. Reviewed ${WEBSITE_LAUNCH_META.reviewedDate}.

| Category | ID | Check | Verification method | Pass criterion | Status | Evidence or blocker |
| --- | --- | --- | --- | --- | --- | --- |
${getLaunchChecklistRows().map((item) => `| ${item.category} | ${item.id} | ${item.title} | ${item.verify.replaceAll("|", "\\|")} | ${item.pass.replaceAll("|", "\\|")} |  |  |`).join("\n")}

Use only Pass, Fail, Blocked, or Not applicable. Explain every Not applicable result and preserve dated evidence.`;
}

export function getLaunchSourcesMarkdown() {
  return `# Original guidance and scope notes

Reviewed ${WEBSITE_LAUNCH_META.reviewedDate}. Recheck live guidance when a standard, platform, law, or project constraint may have changed.

${launchSources.map((source) => `## ${source.title}\n\n- Publisher: ${source.publisher}\n- URL: ${source.url}\n- Used for: ${source.use}`).join("\n\n")}

## Limits

This checklist is a practical launch control, not legal advice, a security certification, an accessibility conformance claim, or a promise of search or conversion results. Project owners must define the supported browsers, devices, jurisdictions, analytics policy, security baseline, and performance budget.`;
}

export function getLaunchSkillMarkdown() {
  return `---\nname: ${WEBSITE_LAUNCH_META.portableName}\ndescription: Verify a new website launch across page metadata, site-wide technical setup, conversion paths, accessibility, performance, analytics, trust, release safety, and post-launch ownership. Use before and immediately after an authorized website release.\nmetadata:\n  author: "${WEBSITE_LAUNCH_META.author}"\n  version: "${WEBSITE_LAUNCH_META.version}"\n  reviewed: "${WEBSITE_LAUNCH_META.reviewedDate}"\n  source: "${WEBSITE_LAUNCH_META.canonical}"\n---\n\n# ${WEBSITE_LAUNCH_META.title}\n\n${getCompactLaunchBrief()}\n\n## Package resources\n\nUse [the checklist table](assets/LAUNCH-CHECKLIST.md) to record status and evidence. Use [the original guidance](references/ORIGINAL-SOURCES.md) to review source scope and limits. The verification brief above remains complete without loading either file.`;
}

export function getLaunchStandaloneMarkdown() {
  return `# ${WEBSITE_LAUNCH_META.title}\n\n> ${WEBSITE_LAUNCH_META.description}\n\n- Version: ${WEBSITE_LAUNCH_META.version}\n- Reviewed: ${WEBSITE_LAUNCH_META.reviewedDate}\n- Author: ${WEBSITE_LAUNCH_META.author}\n- Canonical page: ${WEBSITE_LAUNCH_META.canonical}\n- Portable skill: ${WEBSITE_LAUNCH_META.skillUrl}\n\n## Purpose\n\nUse one evidence-led control to decide whether a new website is ready to release and whether the production release actually works. Every check includes a verification method and pass criterion. Project owners still define the supported browsers, devices, jurisdictions, security baseline, analytics policy, and performance budget.\n\n## Operating principles\n\n${launchPrinciples.map((principle) => `- ${principle}`).join("\n")}\n\n## Complete checklist\n\n${getLaunchChecklistAssetMarkdown()}\n\n## Compact reusable launch brief\n\n${getCompactLaunchBrief()}\n\n## Source notes\n\n${getLaunchSourcesMarkdown()}\n`;
}

export const launchPackageFiles = {
  [`${WEBSITE_LAUNCH_META.portableName}/SKILL.md`]: getLaunchSkillMarkdown(),
  [`${WEBSITE_LAUNCH_META.portableName}/references/ORIGINAL-SOURCES.md`]: getLaunchSourcesMarkdown(),
  [`${WEBSITE_LAUNCH_META.portableName}/assets/LAUNCH-CHECKLIST.md`]: getLaunchChecklistAssetMarkdown(),
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

export function createDeterministicLaunchSkillZip() {
  const entries = Object.entries(launchPackageFiles).sort(([a], [b]) => a.localeCompare(b));
  const locals = [];
  const centrals = [];
  let offset = 0;
  const stamp = dosDateTime(WEBSITE_LAUNCH_META.reviewedDate);
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
