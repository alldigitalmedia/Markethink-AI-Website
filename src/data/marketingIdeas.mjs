// Add new entries here. Keep each id stable so saved links continue to work.
export const marketingIdeasMeta = {
  title: "Marketing Ideas: AI Growth Experiments, Ranked S & A | Markethink",
  description: "Explore a growing library of AI marketing ideas for sales, video, ads, websites and AI search. Browse S- and A-tier experiments, first tests and ways to measure them.",
  canonical: "https://markethink.ai/marketing-ideas/",
};

export const marketingIdeas = [
  {
    id: "prospect-funnel-rebuild", title: "Prospect funnel rebuild", tier: "S", category: "Sales",
    summary: "Rebuild a prospect's funnel before the first call. Open with a working mockup of a better buying journey instead of another pitch.",
    firstTest: "Choose one prospect. Review its public offer, page and next step, then build a private, clearly labeled concept using original or authorized assets. Walk through the journey on the call.",
    measure: "Track qualified next meetings and progression to an agreed proposal. Compare with similar pitch-led conversations, not every deal in the pipeline.",
    watchOut: "A mockup is not the prospect's live website. Keep it private, label assumptions and leave its forms, customer data and systems untouched.",
  },
  {
    id: "trial-reel-tournament", title: "Trial-reel tournament", tier: "S", category: "Video & creative",
    summary: "Turn one raw recording into 30 reels with different hooks, structures and lengths. Test with non-followers through trial reels, then share the winners with followers.",
    firstTest: "Use footage you own or have permission to edit. Map the hook, pacing and structure of strong reference videos, then create original variations. Confirm trial-reel access on the account before planning the test.",
    measure: "Compare retention, qualified profile visits and relevant inquiries over a consistent observation window. Promote the strongest versions, not just the one with the most views.",
    watchOut: "Thirty is a proposed test scale. Start smaller if production capacity is limited. Borrow format principles, not another creator's footage, music or distinctive assets.",
  },
  {
    id: "competitor-ad-library-scan", title: "Competitor ad library scan", tier: "S", category: "Paid media",
    summary: "Review competitor ads daily where public libraries allow it. Record the hook, offer, format and first-seen date to spot patterns worth testing.",
    firstTest: "Pick a small competitor set and the relevant public ad libraries. Save links and a dated observation for each visible ad. Separate a new creative from a new offer.",
    measure: "Track which observations lead to a distinct test and what that test does to qualified lead cost or conversion quality in your own account.",
    watchOut: "Public libraries do not expose every ad or its performance. First seen is not necessarily launch date, and a long-running ad is not proof that it works.",
  },
  {
    id: "canary-offers", title: "Canary offers", tier: "S", category: "AI search",
    summary: "Place a distinct, trackable offer on pages AI tools already cite. Look for evidence that the offer reaches buyers through those answers.",
    firstTest: "Confirm a citation with a saved question, answer and date. Add a genuine offer with a dedicated destination on a page you control, then repeat the question and review visits and inquiries.",
    measure: "Record whether the offer appears in sampled answers, whether visitors use its destination, and whether leads mention it. Keep confirmed and unknown sources separate.",
    watchOut: "AI referrals can lose tracking information. An offer appearing in an answer does not establish that it caused a purchase.",
  },
  {
    id: "daily-buyer-question-panel", title: "Daily buyer-question panel", tier: "S", category: "AI search",
    summary: "Build a repeatable panel of 1,000 buyer questions and sample AI answers daily. Flag changes in brand mentions, recommendations and competitor citations.",
    firstTest: "Start with a smaller set of real buyer questions grouped by buying stage. Use permitted interfaces, record the tool and answer date, and review changed answers before expanding toward 1,000 questions.",
    measure: "Compare mention and citation share within the same documented question set. Investigate repeated changes before acting on a single answer.",
    watchOut: "This is a proposed research scale, not a claim of exhaustive monitoring. Answers vary by session, location and tool; access, cost and rate limits constrain coverage.",
  },
  {
    id: "citation-source-takeover", title: "Citation-source takeover", tier: "S", category: "AI search",
    summary: "Map the pages AI tools cite in your niche. Identify relevant owners and pitch a useful reason for your brand to be included.",
    firstTest: "Sample high-intent questions, collect the cited URLs and review each page. Shortlist owners whose readers would benefit from an original example, resource or expert contribution.",
    measure: "Track relevant placements, referral visits, qualified inquiries and changes in sampled citations. Keep outreach acceptance separate from AI visibility.",
    watchOut: "No sample finds every cited page. Owners retain editorial control. Avoid spam, misleading endorsements and paid links disguised as independent coverage.",
  },
  {
    id: "format-reverse-engineering", title: "Format reverse-engineering", tier: "A", category: "Video & creative",
    summary: "Turn standout reels in your niche into a weekly template library: hook type, cut pace, caption style and length.",
    firstTest: "Choose a few relevant reels and annotate how each earns attention. Translate the pattern into a reusable outline, then make a new video with your own message and authorized footage.",
    measure: "Compare production time, retention and qualified actions across your original videos using the templates. Keep the audience and topic differences visible.",
    watchOut: "Visible popularity is a clue, not evidence of sales. Study structure without copying assets, impersonating a creator or reproducing protected material.",
  },
  {
    id: "100-funnel-variants-pre-screened", title: "100 funnel variants, pre-screened", tier: "A", category: "Website & conversion",
    summary: "Build 100 page variations, use AI buyer personas to narrow the options, then give real traffic to the survivors.",
    firstTest: "Vary one clear hypothesis at a time, such as the offer, headline or proof order. Use AI personas to surface objections and obvious gaps, then have a marketer select a small set for a controlled live test.",
    measure: "Judge the live finalists on qualified conversion rate and downstream lead quality. Document traffic allocation and the observation window before starting.",
    watchOut: "AI-persona scores are simulated feedback, not buyer evidence. One hundred is an exploration scale, not a reason to split limited traffic across 100 live pages.",
  },
  {
    id: "segment-personalized-pages", title: "Segment-personalized pages", tier: "A", category: "Website & conversion",
    summary: "Adapt the headline, proof and next step to the visitor's industry, referrer or known deal stage.",
    firstTest: "Start with two explicit segments and approved proof for each. Use a reliable, privacy-appropriate signal or a visitor's own selection, with a complete default page for everyone else.",
    measure: "Compare qualified conversions and sales progression within each segment against its default experience. Check that personalization does not confuse or exclude visitors.",
    watchOut: "Do not infer sensitive traits or expose private deal details. Unknown referrers and missing consent should fall back to the default experience.",
  },
  {
    id: "agent-readable-twin", title: "Agent-readable twin", tier: "A", category: "AI search",
    summary: "Publish a clean Markdown version of key pages for AI tools to read. Check weekly whether sampled citations change.",
    firstTest: "Create a text-first twin of one important page, preserving its claims, links and canonical HTML reference. Keep both versions in sync and make the Markdown discoverable.",
    measure: "Check that the twin is accessible and accurate, then compare citations for a stable question set. Record page changes and other activity that could explain a difference.",
    watchOut: "A Markdown twin does not guarantee discovery, indexing or citations. It should clarify the same content, not serve different claims to people and AI tools.",
  },
  {
    id: "screenshot-scan-of-ai-answers", title: "Screenshot scan of AI answers", tier: "A", category: "AI search",
    summary: "Use a vision model to inspect what a buyer actually sees in an AI answer, including who gets the link and whose logo appears.",
    firstTest: "Capture a permitted screenshot for a documented buyer question, tool, date and viewport. Ask for visible brand, link and logo observations, then have a person check the image against the extracted record.",
    measure: "Track visible placement and prominence in a consistent screenshot sample. Separate what was shown from clicks, visits and inquiries.",
    watchOut: "Screenshots capture one interface state. Vision models can misread text or logos; verify destinations separately and remove personal information before analysis.",
  },
  {
    id: "bot-log-intelligence", title: "Bot log intelligence", tier: "A", category: "AI search",
    summary: "Read your server logs to understand which AI crawlers visit and what they request. Use the findings to improve access, structure and internal links.",
    firstTest: "Work with the site's owner to review authorized, privacy-filtered logs. Group claimed AI crawler requests by URL and status, and validate identity against the provider's guidance where possible.",
    measure: "Track crawl errors, access to priority pages and changes in verified crawler coverage after a scoped fix. Review citations separately.",
    watchOut: "User-agent strings can be spoofed. A crawler visit is not evidence of training use, indexing, a citation or buyer demand.",
  },
];

export const marketingIdeaCategories = [...new Set(marketingIdeas.map((idea) => idea.category))];
