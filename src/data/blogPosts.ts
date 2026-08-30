export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  label: string;
  image: string;
  imageAlt: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  category: string;
  keywords: string[];
  author: {
    name: string;
    title: string;
  };
  intro: string[];
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
    image?: string;
    imageAlt?: string;
  }[];
  seoHubLink?: {
    copy: string;
    anchor: string;
    href: string;
  };
  recommendedGuide?: {
    copy: string;
    anchor: string;
    href: string;
  };
  relatedSlugs?: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const journeyPosts = [
  {
    title: "Day 1: Markethink maps your business.",
    label: "DAY 1",
    image: "/images/blog-markethink-day-1-business-map.avif",
    href: "/#how-it-works",
  },
  {
    title: "Week 2: your first campaigns are moving.",
    label: "WEEK 2",
    image: "/images/blog-markethink-week-2-campaigns-moving.avif",
    href: "/#how-it-works",
  },
];

export const insightPosts: BlogPost[] = [
  {
    slug: "what-is-an-ai-marketing-agency",
    title: "What Is an AI Marketing Agency? What It Actually Manages",
    seoTitle: "What Is an AI Marketing Agency? A Buyer’s Guide | Markethink",
    description:
      "Learn what an AI marketing agency does, what expert marketers should still own, and how website, content, campaigns, leads, CRM, and follow-up connect.",
    excerpt:
      "A practical buyer’s guide to what an AI marketing agency should manage, where expert judgment belongs, and how the work should connect to your pipeline.",
    label: "BUYER’S GUIDE",
    image: "/images/ai-marketing-agency-guide/ai-marketing-agency-operating-room.svg",
    imageAlt:
      "An expert marketer directing an organized AI-supported marketing operation across website, content, campaigns, leads, and follow-up",
    publishedDate: "2026-08-30",
    updatedDate: "2026-08-30",
    readingTime: "12 min read",
    category: "AI Marketing",
    keywords: [
      "what is an AI marketing agency",
      "what does an AI marketing agency do",
      "AI marketing agency services",
      "AI marketing agency responsibilities",
      "AI marketing agency vs traditional agency",
      "managed AI marketing",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "AI marketing systems managed by expert marketers",
    },
    intro: [
      "An AI marketing agency uses AI to make research, production, organization, and repetitive execution faster. But speed is only useful when someone still owns the strategy, reviews the work, protects the brand, and stays accountable for what reaches the market.",
      "The best model is not a collection of generators working in isolation. It is a managed marketing operation. Website updates, social content, campaigns, advertising, lead capture, CRM context, follow-up, and results should move through one connected rhythm instead of restarting in separate tools and conversations.",
      "That distinction matters because every campaign launched without shared context creates more review work and another disconnected trail of decisions for the next campaign to reconstruct.",
      "This guide explains what an AI marketing agency should actually manage, which decisions belong to expert marketers and the business, and what to ask before choosing a provider.",
    ],
    seoHubLink: {
      copy: "If you are evaluating a provider rather than only learning the category, see how Markethink operates as an",
      anchor: "AI marketing agency managed by expert marketers",
      href: "/",
    },
    recommendedGuide: {
      copy: "For a step-by-step operating workflow, continue with",
      anchor: "How to Use AI for Marketing: A Practical Guide for Small Businesses",
      href: "/blog/how-to-use-ai-for-marketing-small-business/",
    },
    relatedSlugs: [
      "how-to-use-ai-for-marketing-small-business",
      "consistent-marketing-beats-chasing-ai-tools",
      "brand-memory-feedback-approved-campaigns",
    ],
    sections: [
      {
        heading: "An AI marketing agency should manage an operation, not just generate assets",
        body: [
          "Many businesses first encounter AI marketing through a narrow task: write a post, create an image, summarize research, or produce several ad variations. Those uses can save time, but they do not automatically create better marketing.",
          "Marketing becomes useful when the work is tied to a business goal, reaches the right audience, gives the buyer a clear next step, and creates information the team can use afterward. That requires coordination across more than one asset.",
          "A capable AI marketing agency should therefore manage the path from priority to result. The job starts with the business objective and continues through the brief, production, expert review, approval, launch, lead handling, measurement, and the next decision. AI supports the pace and continuity. Expert marketers own the judgment and accountability.",
        ],
        bullets: [
          "One business goal and buyer action for each campaign",
          "A connected asset plan instead of unrelated drafts",
          "Expert review before important work ships",
          "A defined approval path for the business",
          "Lead capture, follow-up, and learning after launch",
        ],
      },
      {
        heading: "The work begins with business context and a clear campaign brief",
        body: [
          "Before content is produced, the agency should understand the business well enough to make useful choices. That includes the offer, audience, positioning, brand voice, approved proof, current priorities, sales process, and the action a buyer should take next.",
          "AI can organize this context and make it easier to reuse. An expert marketer still has to decide which customer problem matters, what promise is supportable, which channel deserves attention, and what should not be said. The business remains responsible for pricing, risk, customer commitments, and final approval.",
          "A good campaign brief makes those responsibilities visible. It defines the objective, audience, offer, message, proof, assets, channels, CTA, approval owner, lead destination, and success signal. Without that brief, faster production usually creates more review work rather than more progress.",
        ],
      },
      {
        heading: "Website, content, social, campaigns, and advertising should work together",
        body: [
          "An AI marketing agency should be able to turn one approved priority into the right combination of web and channel work. A campaign may need a landing-page update, a useful article, social content, email support, paid-media creative, and a clear conversion destination. It may not need every channel at once.",
          "The important distinction is coordination. The website should explain the same offer the campaign promotes. The article should answer the questions that block a decision. Social content should create a reason to visit. Advertising should use approved claims and lead to a relevant page. Each asset should have a job inside the same buyer path.",
          "AI helps create and adapt the work efficiently. Expert marketers choose the angle, review the claims, protect the creative standard, and decide whether the asset is ready. The result should feel like one campaign, not several unrelated outputs produced by different systems.",
        ],
        image: "/images/ai-marketing-agency-guide/ai-marketing-agency-connected-work.svg",
        imageAlt:
          "A connected marketing work map showing website, content, social, campaigns, and advertising flowing into leads, CRM, and follow-up",
      },
      {
        heading: "Marketing should connect to leads, CRM, and follow-up",
        body: [
          "Publishing is not the end of the marketing job. When a visitor submits a form, replies to a campaign, books a call, or signals interest, the next step should be clear. The inquiry needs source context, an owner, a status, and a follow-up action.",
          "An AI-supported operation can organize lead details, summarize the campaign context, prepare response drafts, flag missing information, and remind the team about the next step. It should not pretend to own sensitive relationship decisions or send high-risk messages without approval.",
          "This connection matters because marketing quality cannot be judged only by the volume of posts or drafts. The business needs to see whether the work creates qualified visits, useful conversations, completed next steps, and better information for the next campaign. Keeping CRM and follow-up connected makes that learning possible.",
        ],
        bullets: [
          "Capture the source, campaign, offer, and requested next step",
          "Keep each opportunity’s owner, status, and follow-up date current",
          "Prepare responses with the relevant business and campaign context",
          "Return recurring objections and questions to the content plan",
        ],
      },
      {
        heading: "Expert marketers should own strategy, review, and accountability",
        body: [
          "A credible AI marketing agency should be precise about what AI does and what people still own. AI is strong at organizing information, producing first drafts, adapting approved material, maintaining continuity, and completing repetitive work. It can surface patterns and prepare options. It does not remove the need for judgment.",
          "Expert marketers should own positioning, campaign strategy, channel priorities, creative direction, claim review, major budget recommendations, and quality control. They should be able to explain why the work exists, how it supports the business, and what should change when the result is weak.",
          "The business should retain final authority over the offer, pricing posture, legal or reputation risk, important relationship decisions, and publishing approval. The exact review depth can vary by asset, but responsibility should never become vague simply because AI helped produce the work.",
        ],
      },
      {
        heading: "Approvals and results should improve the next round of work",
        body: [
          "Most marketing teams lose useful context between campaigns. A headline is rejected, a visual direction is approved, a buyer objection appears repeatedly, or a follow-up message earns better replies, but the learning stays in a thread or someone’s memory.",
          "A managed AI marketing operation should record the useful part of those decisions. The next brief can begin with approved references, known corrections, performance history, and the current business priority. This does not mean blindly repeating previous work. It means starting with better context and making a more informed next decision.",
          "The learning loop is straightforward: the agency prepares the work, experts review it, the business approves it, the campaign ships, real responses are collected, and the next priority is adjusted. Over time, this reduces repeated explanations and makes the operation more consistent without removing human control.",
        ],
        image: "/images/ai-marketing-agency-guide/ai-marketing-agency-approval-results-loop.svg",
        imageAlt:
          "A continuous marketing loop connecting expert review, business approval, shipped work, real results, and the next decision",
      },
      {
        heading: "What an AI marketing agency should not promise",
        body: [
          "The presence of AI does not guarantee rankings, leads, revenue, conversion lifts, or viral reach. Results depend on the offer, market, audience, proof, budget, execution, sales process, and many conditions outside a marketing provider’s control.",
          "A responsible provider should also avoid implying that every integration, internal application, or unusual data workflow is included in a standard engagement. Heavy custom integrations, complex data movement, and specialist implementation work should be assessed and scoped separately.",
          "The safest sign is operational clarity. You should know what is being managed, who reviews it, what requires approval, where leads go, how results are interpreted, and what happens when the work misses the mark.",
        ],
      },
      {
        heading: "Questions to ask before choosing an AI marketing agency",
        body: [
          "The right questions reveal whether you are buying connected marketing management or only faster asset production. Ask the provider to walk through one campaign from business objective to follow-up and show where people make the important decisions.",
        ],
        bullets: [
          "How will you learn our offer, audience, voice, proof, and approval rules?",
          "Who owns strategy, creative direction, claim review, and final quality?",
          "How do website, content, social, advertising, and campaigns stay connected?",
          "What happens after a lead or inquiry arrives?",
          "How are corrections and approved preferences used in future work?",
          "Which publishing, budget, and customer-facing actions require our approval?",
          "What work is included, and what custom implementation is scoped separately?",
          "How will we review results and choose the next priority?",
        ],
      },
      {
        heading: "Choose the operating model that matches the problem",
        body: [
          "A self-serve AI tool can be enough when your team already owns strategy, production, review, publishing, lead handling, and measurement. A traditional agency can be a strong fit when you need specialist thinking or outsourced execution. An AI marketing agency is most useful when you want the speed and continuity of AI combined with expert direction and a connected day-to-day operation.",
          "The key is not the label. It is whether the provider can keep the work moving from priority to campaign, from campaign to inquiry, and from real results to the next approved decision. That is the standard buyers should use to evaluate the category.",
        ],
      },
    ],
    faq: [
      {
        question: "What is an AI marketing agency?",
        answer:
          "An AI marketing agency uses AI to support research, production, organization, adaptation, and repetitive execution while expert marketers direct strategy, review the work, exercise judgment, and remain accountable. A strong agency connects campaigns to website work, content, advertising, leads, CRM, follow-up, and measurement.",
      },
      {
        question: "What does an AI marketing agency do?",
        answer:
          "It can manage business and brand context, campaign briefs, website updates, content, social media, advertising coordination, lead capture, CRM organization, follow-up support, approvals, reporting, and the next campaign decision. The exact scope should be stated clearly before engagement.",
      },
      {
        question: "Is an AI marketing agency the same as an AI marketing tool?",
        answer:
          "No. A tool helps with a specific task and usually depends on your team to provide strategy, context, review, publishing, and follow-up. An AI marketing agency should manage a broader operating path and provide expert direction and accountability around the AI-supported work.",
      },
      {
        question: "Does an AI marketing agency remove the need for human marketers?",
        answer:
          "No. The strongest model supports the existing business or marketing team with faster production, better organization, and more continuity while people remain responsible for strategy, judgment, approval, and important customer relationships.",
      },
      {
        question: "How do I evaluate an AI marketing agency?",
        answer:
          "Ask how the agency learns your business, who owns strategy and quality, how campaigns connect across channels, what requires approval, where leads and follow-up are managed, how results inform the next decision, and which custom work is scoped separately.",
      },
    ],
  },
  {
    slug: "seo-content-feedback-loop",
    title: "The SEO Content Feedback Loop: Improve Existing Pages Before Publishing More",
    seoTitle: "SEO Content Feedback Loop: A Practical System | Markethink",
    description:
      "Build an SEO and AI-search content feedback loop that prioritizes page opportunities, routes changes through expert review, and measures business impact.",
    excerpt:
      "A practical, source-backed system for finding content opportunities, making focused improvements, approving changes, and learning from search and conversion results.",
    label: "OPERATING GUIDE",
    image: "/images/blog-brand-memory-approval-loop.avif",
    imageAlt:
      "A Markethink approval workflow connecting feedback, business memory, and an approved marketing asset",
    publishedDate: "2026-08-24",
    updatedDate: "2026-08-24",
    readingTime: "11 min read",
    category: "Search Strategy",
    keywords: [
      "SEO content feedback loop",
      "content optimization workflow",
      "AI SEO workflow",
      "content refresh strategy",
      "SEO content audit",
      "AI search optimization",
      "AEO content strategy",
      "Search Console content optimization",
      "content performance measurement",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "AI marketing systems managed by expert marketers",
    },
    intro: [
      "Most content programs treat publication as the finish line. A topic is selected, a page is written, and the team moves on. The result is a growing library with very little operating memory.",
      "A stronger model treats every existing page as a source of evidence. Search performance shows where attention is being lost. Page and conversion data show whether the visit creates value. Expert review turns that evidence into a focused change, and the result informs what happens next.",
      "This guide explains how to build that loop without handing strategy or publishing decisions to automation, overreacting to short-term data, or treating answer engine optimization as a separate collection of tricks.",
    ],
    seoHubLink: {
      copy: "For the broader system behind this approach, see our",
      anchor: "AI marketing for small business",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "For a deeper guide to search and answer visibility, read",
      anchor: "How to Get Your Business to Show Up in AI Search",
      href: "/blog/how-to-show-up-in-ai-search/",
    },
    relatedSlugs: [
      "how-to-show-up-in-ai-search",
      "how-to-use-ai-for-marketing-small-business",
      "brand-memory-feedback-approved-campaigns",
    ],
    sections: [
      { heading: "Publishing is not the finish line", body: [] },
      { heading: "Start with the page", body: [] },
      { heading: "Prioritize by opportunity", body: [] },
      { heading: "Make focused improvements", body: [] },
      { heading: "Keep an expert review gate", body: [] },
      { heading: "Measure page, site, and pipeline", body: [] },
      { heading: "Divide the work clearly", body: [] },
      { heading: "Run a monthly rhythm", body: [] },
    ],
    faq: [
      {
        question: "What is an SEO content feedback loop?",
        answer:
          "An SEO content feedback loop is a repeatable process that uses page, search, and conversion evidence to identify an opportunity, recommend a focused change, route it through expert review, publish it, measure the result, and use that learning to choose the next action.",
      },
      {
        question: "Should a business update old content or publish new content?",
        answer:
          "Do both, but prioritize by business and search opportunity rather than age alone. Update a page when evidence shows a specific visibility, click, relevance, conversion, or technical problem. Publish a new page when the audience has an important question that the current site does not answer well.",
      },
      {
        question: "How should content refresh opportunities be prioritized?",
        answer:
          "Useful categories include pages losing visibility, pages earning impressions but weak click-through, pages close to stronger search positions, pages with missing evidence or intent gaps, and pages with technical or internal-linking problems. Exact thresholds should reflect the site and market.",
      },
      {
        question: "How long should you wait before measuring an SEO content update?",
        answer:
          "A 28-day before-and-after comparison is a practical starting point for many sites, but low-volume pages, seasonal markets, and slow recrawls may need a longer window. Compare like periods and check the edited page against the sitewide organic trend.",
      },
      {
        question: "Does AEO require different content from SEO?",
        answer:
          "Not as a separate content system. Google says its foundational SEO practices continue to apply to AI Overviews and AI Mode. Clear, useful, original, crawlable content with accurate evidence remains the foundation. Special AI files, forced chunking, and answer-engine-only rewrites are not required for Google Search.",
      },
      {
        question: "Can AI publish SEO changes automatically?",
        answer:
          "It can technically automate parts of the workflow, but recommendations and publishing should remain separate. An expert should review the diagnosis, business claims, brand voice, technical risk, and measurement plan before a meaningful change goes live.",
      },
      {
        question: "Which metrics matter after a content update?",
        answer:
          "Use Search Console for impressions, clicks, CTR, queries, and average position. Use analytics and CRM data for engagement, qualified actions, leads, and conversions. Do not judge success from rankings alone.",
      },
    ],
  },
  {
    slug: "how-to-use-ai-for-marketing-small-business",
    title: "How to Use AI for Marketing: A Practical Guide for Small Businesses",
    seoTitle: "How to Use AI for Marketing: Small Business Guide | Markethink",
    description:
      "Learn how to use AI for marketing with a practical workflow, responsibility matrix, copy-and-send campaign brief, and complete 30-day plan.",
    excerpt:
      "A step-by-step guide to using AI across research, campaigns, content, approvals, lead capture, follow-up, measurement, and continuous improvement.",
    label: "INTERACTIVE GUIDE",
    image: "/images/ai-marketing-guide/ai-marketing-guide-hero.svg",
    imageAlt:
      "A small-business owner and expert marketer reviewing an AI-supported marketing campaign workflow",
    publishedDate: "2026-08-10",
    updatedDate: "2026-08-12",
    readingTime: "18 min read",
    category: "AI Marketing",
    keywords: [
      "how to use AI for marketing",
      "how to use AI for small business marketing",
      "AI marketing for small business",
      "AI marketing workflow",
      "AI marketing automation",
      "marketing automation workflow",
      "marketing campaign workflow",
      "AI marketing plan",
      "AI lead follow up",
      "AI lead nurturing",
      "CRM workflow examples",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "AI marketing systems managed by expert marketers",
    },
    intro: [
      "AI can help a small business research customers, plan campaigns, draft content, improve its website, organize leads, prepare follow-up, and learn from results. The advantage does not come from generating more material. It comes from connecting those tasks to one clear business outcome.",
      "This guide shows how to use AI for marketing without handing strategy, brand judgment, or customer relationships to a machine. AI handles speed, organization, and repetitive execution. Expert marketers direct and review the work. The business approves the offer, claims, risk, and final publishing decisions.",
      "Use the workflow, complete tables, responsibility matrix, and copy-and-send campaign brief below to build one complete campaign loop: goal, brief, production, expert review, approval, launch, lead capture, follow-up, results, and the next improved campaign.",
    ],
    seoHubLink: {
      copy: "For the system and service behind this operating approach, see our",
      anchor: "AI marketing for small business",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "If you are comparing operating models, read",
      anchor: "What Is an AI Marketing Agency? What It Actually Manages",
      href: "/blog/what-is-an-ai-marketing-agency/",
    },
    relatedSlugs: [
      "how-to-show-up-in-ai-search",
      "consistent-marketing-beats-chasing-ai-tools",
      "brand-memory-feedback-approved-campaigns",
    ],
    sections: [
      { heading: "Start with one outcome", body: [] },
      { heading: "Build context AI can use", body: [] },
      { heading: "Follow the nine-step workflow", body: [] },
      { heading: "Choose useful AI marketing tasks", body: [] },
      { heading: "Build your first campaign", body: [] },
      { heading: "Connect leads and follow-up", body: [] },
      { heading: "Decide who owns what", body: [] },
      { heading: "Measure what matters", body: [] },
      { heading: "Use the 30-day plan", body: [] },
      { heading: "Avoid common mistakes", body: [] },
    ],
    faq: [
      {
        question: "How can a small business use AI for marketing?",
        answer:
          "A small business can use AI to organize customer research, prepare campaign briefs, create first drafts, adapt content across channels, support website updates, summarize inquiries, prepare follow-up, and organize results. Strategy, claims, creative direction, approvals, and important customer conversations should stay under human ownership.",
      },
      {
        question: "What is the best first AI marketing use case?",
        answer:
          "Start with one campaign brief tied to a measurable business outcome. Use it to create a minimum connected asset set, define the approval path, route leads, and record results. This is more useful than starting with a large collection of disconnected tools.",
      },
      {
        question: "Can AI create a complete marketing strategy?",
        answer:
          "AI can support research, organize inputs, identify options, and draft a plan. An expert marketer should still choose the audience, positioning, offer, channel mix, budget, creative direction, and measurement approach. The business must approve claims, risk, and final priorities.",
      },
      {
        question: "What marketing tasks should not be fully automated?",
        answer:
          "Do not fully automate pricing decisions, customer promises, sensitive replies, major budget changes, regulated or reputation-sensitive claims, final creative approval, or high-value relationship conversations. Increase human review as the risk increases.",
      },
      {
        question: "How does AI marketing automation differ from a marketing workflow?",
        answer:
          "Automation moves a task when a rule is met. A marketing workflow defines the full responsibility path: goal, input, production, review, approval, launch, lead handling, measurement, and learning. A good workflow can include automation without giving up human judgment.",
      },
      {
        question: "How should a small business measure AI marketing?",
        answer:
          "Measure qualified buyer actions, conversion into the next step, lead response time, workflow health, and what the business learned. The number of prompts, drafts, or posts is not proof of marketing impact.",
      },
      {
        question: "How long does it take to start using AI for marketing?",
        answer:
          "A small business can build and test one focused workflow in about 30 days: define the goal and context, create one connected campaign, review and launch it, then evaluate follow-up and results. Expanding to more channels should happen only after the first loop works.",
      },
      {
        question: "Does using AI mean replacing a marketing team?",
        answer:
          "No. The strongest model pairs AI speed and consistency with expert strategy, review, judgment, and accountability. AI supports the marketing operation; it does not remove the need for experienced people or final business approval.",
      },
    ],
  },
  {
    slug: "how-to-show-up-in-ai-search",
    title: "How to Get Your Business to Show Up in AI Search",
    seoTitle: "AI Search Optimization: How to Show Up in AI Search | Markethink",
    description:
      "Learn AI search optimization with a practical guide to answer-ready content, credible evidence, measurement, and a focused 30-day plan.",
    excerpt:
      "A practical, source-backed guide to improving AI-search visibility, auditing readiness, strengthening evidence, and connecting visibility to pipeline outcomes.",
    label: "INTERACTIVE GUIDE",
    image: "/images/blog-how-to-show-up-in-ai-search.svg",
    imageAlt:
      "A small-business owner and expert marketer organizing answer-ready content for AI search",
    publishedDate: "2026-07-17",
    updatedDate: "2026-08-12",
    readingTime: "16 min read",
    category: "AI Search",
    keywords: [
      "how to get your business to show up in AI search",
      "how to show up in AI search",
      "AEO for small business",
      "answer engine optimization",
      "generative engine optimization",
      "AI search optimization",
      "Google AI Overviews",
      "ChatGPT search visibility",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "AI marketing systems and search strategy",
    },
    intro: [
      "To improve your chance of showing up in AI search, make your website easy to crawl, answer specific customer questions clearly, keep business facts consistent, publish verifiable evidence, earn trusted mentions, and measure citations and referral visits.",
      "No platform guarantees that a business will be cited, mentioned, or ranked first. The practical goal is to make your company easier to find, understand, verify, and choose across search and answer surfaces.",
      "This interactive guide shows what to control, what to influence, how to find the weakest signal, and what to improve during the next 30 days.",
    ],
    seoHubLink: {
      copy: "AI-search visibility works best when it connects to the rest of the marketing operation. Our",
      anchor: "AI marketing for small business",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "For the complete operating workflow, use",
      anchor: "How to Use AI for Marketing: A Practical Guide for Small Businesses",
      href: "/blog/how-to-use-ai-for-marketing-small-business/",
    },
    relatedSlugs: [
      "how-to-use-ai-for-marketing-small-business",
      "brand-memory-feedback-approved-campaigns",
      "hidden-cost-disconnected-marketing-apps-prompts-docs",
    ],
    sections: [
      {
        heading: "What it means to appear in AI search",
        body: [
          "Understand the path from a customer question to sources, an answer, and a potential business visit.",
        ],
      },
      {
        heading: "SEO, AEO, and GEO: what actually changes",
        body: [
          "Keep SEO as the foundation and improve answer and evidence quality.",
        ],
      },
      {
        heading: "Check your AI-search readiness",
        body: ["Score eight practical signals and find the first constraint."],
      },
      {
        heading: "Build pages that are easy to answer from",
        body: [
          "Structure direct answers with context, evidence, and a useful next step.",
        ],
      },
      {
        heading: "Strengthen the evidence beyond your website",
        body: ["Connect first-party facts to credible external corroboration."],
      },
      {
        heading: "Measure citations, visits, and business outcomes",
        body: [
          "Track discoverability, citations, referrals, inquiries, and pipeline outcomes.",
        ],
      },
      {
        heading: "A practical 30-day AI-search plan",
        body: [
          "Build one complete operating loop from foundation through measurement.",
        ],
      },
    ],
    faq: [
      {
        question: "What is AEO in marketing?",
        answer:
          "Answer engine optimization is the practice of making content easier for search and AI answer systems to find, understand, and use. It builds on SEO fundamentals such as crawlability, clear answers, reliable evidence, and connected topic coverage.",
      },
      {
        question: "Do I need special markup to appear in Google AI Overviews?",
        answer:
          "Google says there are no additional technical requirements or special schema types required for its AI features. Standard SEO practices still apply. Structured data should accurately match visible content, but it does not guarantee inclusion.",
      },
      {
        question: "Can a small business show up in AI search?",
        answer:
          "Yes. A small business can improve its chances with accurate business information, useful service pages, clear answers, original evidence, consistent profiles, and credible external signals. No business can guarantee that an AI system will cite or mention it.",
      },
      {
        question: "How long does AI-search optimization take?",
        answer:
          "There is no universal timeline. Search systems must discover and reassess updated sources, while visibility also depends on relevance, competition, evidence, and the question being asked. Track measurable improvements instead of promising a fixed result date.",
      },
      {
        question: "How can I track whether my business appears in AI search?",
        answer:
          "Use Search Console for overall Google Web performance, Bing Webmaster Tools AI Performance for Bing citations and grounding queries, analytics for referral visits, CRM source notes for inquiries, and a stable sample of real customer questions for directional citation checks.",
      },
      {
        question: "Do I need a special AI file such as llms.txt?",
        answer:
          "Google says no new machine-readable file is required for its AI features. Use standard crawl and preview controls, accurate sitemaps, useful visible content, and the crawler guidance published by each platform. A special file alone does not create visibility or authority.",
      },
    ],
  },
  {
    slug: "consistent-marketing-beats-chasing-ai-tools",
    title: "Why consistent marketing beats chasing every new AI tool",
    seoTitle:
      "Marketing Consistency vs. More AI Tools | Markethink",
    description:
      "Learn how marketing consistency, clear offers, and a repeatable campaign rhythm create a stronger system than collecting more disconnected AI tools.",
    excerpt:
      "More AI tools do not automatically create more demand. A consistent marketing rhythm helps your business show up, learn, and improve every week.",
    label: "INSIGHT",
    image: "/images/blog-consistent-marketing-rhythm.avif",
    imageAlt:
      "A Markethink marketing rhythm workspace showing campaign planning, approvals, and weekly output",
    publishedDate: "2026-05-15",
    updatedDate: "2026-08-12",
    readingTime: "6 min read",
    category: "Marketing Systems",
    keywords: [
      "consistent marketing",
      "AI marketing tools",
      "marketing operating system",
      "marketing rhythm",
      "campaign workflow",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "Marketing systems and AI workflow strategy",
    },
    intro: [
      "Every week there is a new AI tool promising faster content, better ads, smarter automation, or instant strategy. Some of those tools are useful. But for most growing businesses, the real bottleneck is not tool access. It is consistency.",
      "Consistent marketing means your offer is clear, your content has a rhythm, your campaigns connect to real business goals, and your team learns from what gets approved, published, and acted on.",
      "That is why a marketing operating system often creates more value than another disconnected app. The system gives your business a repeatable way to turn ideas into useful marketing output.",
    ],
    seoHubLink: {
      copy: "If you are still deciding how AI should fit into your marketing, our",
      anchor: "AI marketing for small business",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "Put that rhythm into practice with",
      anchor: "our step-by-step AI marketing guide for small businesses",
      href: "/blog/how-to-use-ai-for-marketing-small-business/",
    },
    relatedSlugs: [
      "hidden-cost-disconnected-marketing-apps-prompts-docs",
      "scattered-ideas-to-client-opportunities",
      "brand-memory-feedback-approved-campaigns",
    ],
    sections: [
      {
        heading: "More tools do not automatically create more demand",
        body: [
          "A new AI tool can help with a specific task, but it cannot replace a marketing rhythm. If your brand direction, audience, offers, approvals, and campaign priorities are scattered, every tool starts from partial context.",
          "That creates the familiar cycle: someone writes a prompt, edits the output, re-explains the brand, moves the copy to another document, asks for feedback, loses the feedback, and starts over next time.",
          "The work may feel faster in the moment, but the business is not actually getting smarter. A consistent system keeps the knowledge attached to the work.",
        ],
      },
      {
        heading: "What consistent marketing really means",
        body: [
          "Consistency does not mean posting generic content every day. It means the business can reliably communicate what it does, who it helps, why it matters, and what a buyer should do next.",
          "For a service business, agency, real estate brand, wellness brand, or B2B company, consistent marketing usually includes a few simple pieces working together.",
        ],
        bullets: [
          "A clear offer that shows the buyer what outcome they can expect.",
          "A practical content rhythm across web, blog, social, email, and campaigns.",
          "A repeatable review process so approvals do not slow everything down.",
          "A way to capture feedback so future work starts closer to the brand.",
          "A connection between published content and actual client opportunities.",
        ],
      },
      {
        heading: "AI makes consistency more important, not less",
        body: [
          "AI can generate more drafts than a team could ever review manually. That is powerful, but it also creates a new risk: more content that is almost right, but not quite aligned.",
          "Without brand memory and campaign direction, AI output can drift. It can sound generic, miss the offer, repeat the same ideas, or create assets that do not support the same business goal.",
          "The best use of AI is not random output. It is guided output. A strong marketing system gives AI the business context it needs: audience, positioning, voice, proof, offers, approvals, and next actions.",
        ],
      },
      {
        heading: "A practical rhythm for growing businesses",
        body: [
          "A good marketing rhythm is simple enough to repeat and structured enough to improve. It should help the team decide what to create, why it matters, where it will be used, and how feedback will be captured.",
          "For many businesses, the monthly rhythm can be organized into four moves.",
        ],
        bullets: [
          "Plan the campaign focus: audience, offer, message, and goal.",
          "Create the assets: website updates, landing sections, blog posts, social content, and follow-up copy.",
          "Review and approve: capture what changed and why.",
          "Improve the next round: reuse the feedback instead of starting from zero.",
        ],
      },
      {
        heading: "How Markethink helps",
        body: [
          "Markethink is built around the idea that marketing should compound. It learns the business, organizes the workflow, helps create useful assets, and keeps improving as the team gives feedback.",
          "Instead of treating every prompt, post, or landing page as a one-off task, Markethink gives the business a place where brand intelligence, campaign workflow, content production, and learning can work together.",
          "That is the difference between having more tools and having a marketing system.",
        ],
      },
    ],
    faq: [
      {
        question:
          "Is consistent marketing more important than trying new AI tools?",
        answer:
          "For most growing businesses, yes. AI tools can help with speed, but consistency creates trust, clarity, and repeatable output. The strongest setup is a consistent marketing system that can use AI tools with the right brand and campaign context.",
      },
      {
        question: "How often should a business publish marketing content?",
        answer:
          "The right cadence depends on the team and market, but a useful starting point is a monthly campaign focus supported by weekly content. The goal is not volume alone. The goal is consistent, connected marketing that moves buyers closer to action.",
      },
      {
        question:
          "What makes Markethink different from a standalone AI content tool?",
        answer:
          "Markethink is designed to learn the brand and organize the workflow around campaigns, approvals, web updates, blog content, social content, and feedback. A standalone tool may create a draft, but Markethink helps the marketing operation improve over time.",
      },
    ],
  },
  {
    slug: "brand-memory-feedback-approved-campaigns",
    title: "How a content approval workflow builds stronger brand memory",
    seoTitle: "Content Approval Workflow and Brand Intelligence | Markethink",
    description:
      "Learn how a content approval workflow turns feedback, brand intelligence, voice, and campaign direction into more aligned marketing output.",
    excerpt:
      "Brand memory helps your business stop repeating the same edits and start using feedback as a compounding advantage.",
    label: "INSIGHT",
    image: "/images/blog-brand-memory-approval-loop.avif",
    imageAlt:
      "A Markethink brand memory workspace showing feedback, approvals, and campaign learning",
    publishedDate: "2026-05-15",
    updatedDate: "2026-08-12",
    readingTime: "7 min read",
    category: "Brand Intelligence",
    keywords: [
      "content approval workflow",
      "brand memory",
      "brand intelligence",
      "marketing approval process",
      "campaign feedback",
      "AI brand voice",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "Marketing systems and AI workflow strategy",
    },
    intro: [
      "Most marketing teams do not struggle because they lack opinions. They struggle because the opinions do not become memory.",
      "A founder edits a headline. A marketing lead changes the tone. A client rejects a visual direction. A campaign performs better when it leads with a specific pain point. Those are not just comments. They are signals.",
      "Brand memory is the system that turns those signals into reusable guidance so the next campaign starts closer to approval.",
    ],
    seoHubLink: {
      copy: "Brand memory is one reason AI marketing works better inside a system. Our",
      anchor: "AI marketing for small business",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "See where approvals fit inside",
      anchor: "the complete AI marketing workflow",
      href: "/blog/how-to-use-ai-for-marketing-small-business/",
    },
    relatedSlugs: [
      "consistent-marketing-beats-chasing-ai-tools",
      "hidden-cost-disconnected-marketing-apps-prompts-docs",
      "scattered-ideas-to-client-opportunities",
    ],
    sections: [
      {
        heading: "Why approvals slow down",
        body: [
          "Approval delays usually happen because the work does not carry enough context. The copy may be close, but the offer is not sharp. The visual may look polished, but it does not feel like the brand. The campaign may have good pieces, but the message does not match the audience.",
          "When that feedback lives only in comments, chats, or someone's memory, the team has to relearn the same lesson again. That is expensive because it creates repeated edits instead of repeated improvement.",
        ],
      },
      {
        heading: "What brand memory should remember",
        body: [
          "Brand memory is not a generic brand guideline PDF. It should be practical enough to guide real work. The best memory captures the information that changes whether a campaign gets approved and whether a buyer understands the offer.",
        ],
        bullets: [
          "Audience: who the business needs to reach and what they care about.",
          "Offers: what the business sells, how it is packaged, and why it matters.",
          "Voice: how the brand should sound in plain language.",
          "Proof: examples, outcomes, testimonials, or reasons to believe.",
          "Approvals: what the team accepted, rejected, edited, or repeated.",
          "Campaign context: what the business is trying to move this month.",
        ],
      },
      {
        heading: "Feedback is a data source",
        body: [
          "A good feedback loop does more than fix the current draft. It captures why the draft changed. That turns feedback into a data source for future work.",
          "For example, if a business repeatedly changes broad claims into more specific buyer pains, the system should learn that. If a founder keeps rejecting stock-style visuals, the system should remember the preferred visual direction. If certain offers perform better when paired with a landing page, that should become part of the campaign playbook.",
          "This is one of the strongest uses of AI in marketing: not replacing judgment, but remembering the judgment that makes the work better.",
        ],
      },
      {
        heading: "Brand memory makes AI more useful",
        body: [
          "AI tools can write quickly, but without memory they often write from a generic version of your business. Brand memory gives AI the guardrails and context it needs to draft closer to the real brand.",
          "That means better first drafts, fewer repeated corrections, faster approval cycles, and more consistent campaigns across website content, blog posts, social media, landing pages, and outreach.",
        ],
      },
      {
        heading: "How Markethink applies brand memory",
        body: [
          "Markethink gives each brand its own intelligence layer. That layer can hold the business context, approved patterns, recurring feedback, content direction, and campaign learning.",
          "As the team reviews work, Markethink can use those approvals and edits to make the next round more accurate. The goal is not just to create content faster. The goal is to make the system better at the business every time it is used.",
        ],
      },
    ],
    faq: [
      {
        question: "What is brand memory in marketing?",
        answer:
          "Brand memory is a reusable record of how a business sells, speaks, approves work, and learns from campaigns. It helps teams create marketing that stays aligned without re-explaining the brand every time.",
      },
      {
        question: "Can AI learn a company's brand voice?",
        answer:
          "AI can get much closer when it is given structured brand context, examples, approvals, and feedback. The key is not a single prompt. The key is a system that keeps the brand context updated as the business learns.",
      },
      {
        question: "How does brand memory improve approval speed?",
        answer:
          "Brand memory reduces repeated corrections. When the system remembers preferred tone, offers, visuals, audience language, and approval patterns, new campaigns can start closer to what the team wants.",
      },
    ],
  },
  {
    slug: "hidden-cost-disconnected-marketing-apps-prompts-docs",
    title: "The hidden cost of disconnected apps, prompts, and marketing docs",
    seoTitle:
      "Marketing Technology Stack: Disconnected Tool Costs | Markethink",
    description:
      "Learn how a disconnected marketing technology stack creates repeated context, lost approvals, and weak learning, and how a connected workflow reduces the drag.",
    excerpt:
      "Disconnected marketing tools create invisible drag: context switching, repeated explanations, lost approvals, and campaigns that never fully connect.",
    label: "INSIGHT",
    image: "/images/blog-disconnected-marketing-cost.avif",
    imageAlt:
      "A Markethink workspace showing disconnected marketing apps being organized into one workflow",
    publishedDate: "2026-05-15",
    updatedDate: "2026-08-12",
    readingTime: "7 min read",
    category: "Marketing Operations",
    keywords: [
      "marketing operations",
      "marketing workflow",
      "AI prompts",
      "marketing apps",
      "campaign management",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "Marketing systems and AI workflow strategy",
    },
    intro: [
      "Most marketing stacks do not break dramatically. They slow the business down quietly.",
      "A prompt lives in one tool. Brand notes live in a document. Web updates are in a task board. Blog ideas are in a spreadsheet. Social drafts are in another app. Feedback is in a chat thread. The team can still work, but every campaign carries extra friction.",
      "That friction is the hidden cost of disconnected marketing.",
    ],
    seoHubLink: {
      copy: "The deeper issue is not the number of apps. It is whether the business has a system. Our",
      anchor: "AI marketing for small business",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "Replace the disconnected path with",
      anchor: "a practical AI marketing workflow for small businesses",
      href: "/blog/how-to-use-ai-for-marketing-small-business/",
    },
    relatedSlugs: [
      "consistent-marketing-beats-chasing-ai-tools",
      "brand-memory-feedback-approved-campaigns",
      "scattered-ideas-to-client-opportunities",
    ],
    sections: [
      {
        heading: "The real cost is repeated context",
        body: [
          "When marketing work is spread across disconnected apps, people spend a surprising amount of time reconstructing context. What are we trying to sell? Who is this for? What tone did we approve last time? Where is the latest offer? Which version of the landing page copy is final?",
          "Every repeated explanation is a cost. It may not show up as a software invoice, but it shows up in slower execution, weaker drafts, and campaigns that feel less connected.",
        ],
      },
      {
        heading: "Prompts are not a strategy",
        body: [
          "Prompt libraries can be helpful, but they are not enough. A prompt can ask AI to write in a certain style, but it usually does not carry the full business context: audience, offer, proof, campaign goal, current priorities, approvals, and feedback history.",
          "When a team depends on disconnected prompts, the quality of the output depends on whoever remembers the right context that day. That is fragile.",
        ],
      },
      {
        heading: "Disconnected tools create lost learning",
        body: [
          "The biggest loss is not just time. It is learning. Every campaign teaches the business something: which message got approved, which offer was clearer, which audience responded, which visual direction worked, which lead source mattered.",
          "If that learning stays inside comments, screenshots, or scattered tasks, the next campaign does not benefit from it. The system resets instead of improving.",
        ],
        bullets: [
          "Approved copy does not update the brand voice.",
          "Rejected visuals do not update the creative direction.",
          "Successful campaigns do not update the next campaign brief.",
          "Lead feedback does not shape future content or outreach.",
          "Website edits do not inform future landing pages.",
        ],
      },
      {
        heading: "A marketing operating system reduces the drag",
        body: [
          "A marketing operating system does not need to replace every tool. It needs to create one reliable place where the business context, campaign workflow, approvals, and learning can connect.",
          "The goal is to reduce the cost of starting over. When the system knows the brand and the current campaign, each new asset can begin with better context.",
        ],
      },
      {
        heading: "How Markethink helps organize the stack",
        body: [
          "Markethink is designed to sit above the tool chaos. It learns the business, organizes the marketing workflow, and helps turn ideas into campaign assets across web, blog, social, landing pages, and lead opportunities.",
          "The important part is not that everything happens in one screen. The important part is that the business keeps its memory in one system and applies that memory wherever marketing work happens.",
        ],
      },
    ],
    faq: [
      {
        question: "Why are disconnected marketing apps a problem?",
        answer:
          "Disconnected apps make teams repeat context, lose feedback, duplicate work, and struggle to connect campaigns across web, blog, social, and lead generation. The hidden cost is slower, less consistent execution.",
      },
      {
        question: "Should businesses use fewer marketing tools?",
        answer:
          "Not always. The goal is not fewer tools for its own sake. The goal is a clearer operating system that connects brand context, campaign direction, approvals, and learning across the tools the business already uses.",
      },
      {
        question: "How can AI prompts be managed better?",
        answer:
          "Prompts work better when they are supported by structured brand memory and campaign context. Instead of relying on isolated prompts, teams should connect prompts to audience, offer, voice, proof, approvals, and business goals.",
      },
    ],
  },
  {
    slug: "scattered-ideas-to-client-opportunities",
    title:
      "From scattered ideas to campaigns that create real client opportunities",
    seoTitle:
      "Marketing Workflow: Ideas to Client Opportunities | Markethink",
    description:
      "Build a marketing workflow that turns scattered ideas into connected campaigns, landing pages, content, leads, follow-up, and client opportunities.",
    excerpt:
      "Ideas only create growth when they become campaigns with a clear audience, offer, message, destination, and follow-up path.",
    label: "INSIGHT",
    image: "/images/blog-ideas-to-client-opportunities.avif",
    imageAlt:
      "A Markethink workflow turning ideas into campaign assets and client opportunities",
    publishedDate: "2026-05-15",
    updatedDate: "2026-08-12",
    readingTime: "8 min read",
    category: "Campaign Strategy",
    keywords: [
      "campaign strategy",
      "client opportunities",
      "lead generation",
      "marketing ideas",
      "content workflow",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "Marketing systems and AI workflow strategy",
    },
    intro: [
      "Most businesses have plenty of marketing ideas. The problem is that ideas are easy to collect and hard to turn into opportunities.",
      "A founder mentions a new offer. A salesperson hears the same objection three times. A client asks a great question. A market trend appears. A new partnership angle opens up. Each of those could become marketing, but only if the business has a way to organize it.",
      "The difference between scattered ideas and real opportunities is a campaign system.",
    ],
    seoHubLink: {
      copy: "For small businesses using AI to move faster, the missing piece is usually the campaign system around the draft. Our",
      anchor: "AI marketing for small business",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "Build that campaign system with",
      anchor: "our practical guide to using AI for marketing",
      href: "/blog/how-to-use-ai-for-marketing-small-business/",
    },
    relatedSlugs: [
      "hidden-cost-disconnected-marketing-apps-prompts-docs",
      "consistent-marketing-beats-chasing-ai-tools",
      "brand-memory-feedback-approved-campaigns",
    ],
    sections: [
      {
        heading: "An idea is not a campaign yet",
        body: [
          "An idea becomes useful when it is connected to a buyer, an offer, a message, a destination, and a next step. Without those pieces, the idea usually turns into a one-off post or an unfinished document.",
          "A campaign gives the idea a job. It decides who the message is for, what they should understand, where they should go, and what the business should do after they engage.",
        ],
      },
      {
        heading: "The campaign brief is the bridge",
        body: [
          "A simple campaign brief is one of the most valuable tools in marketing. It turns raw input into direction. It does not need to be long, but it does need to answer the right questions.",
        ],
        bullets: [
          "Who is the audience?",
          "What problem or desire are we speaking to?",
          "What offer or service should the campaign support?",
          "What proof makes the message believable?",
          "What assets are needed: page, blog, social, email, lead list, or outreach?",
          "What action should the buyer take next?",
        ],
      },
      {
        heading: "Campaigns should connect web, content, and leads",
        body: [
          "A campaign is stronger when the pieces work together. A blog post can explain the problem. A social post can create visibility. A landing page can clarify the offer. A lead list can identify who should see it. A follow-up message can move the conversation forward.",
          "That is where many businesses lose momentum. They create one asset, but the rest of the path is missing.",
        ],
      },
      {
        heading:
          "Lead and partnership opportunities should feed the content plan",
        body: [
          "A modern marketing system should not only publish content. It should also help the business notice new opportunities.",
          "If the system is watching for buyers, owners, referral partners, local opportunities, or partnership angles, that intelligence can shape the next campaign. Content gets more useful when it is connected to real market signals.",
          "For example, if a real estate brand sees more interest from property owners, the next campaign might focus on owner trust, management process, valuation, or a direct consultation path. If a service brand sees a partnership opportunity, the next campaign can support that relationship with a targeted landing page and outreach sequence.",
        ],
      },
      {
        heading: "How Markethink turns ideas into opportunities",
        body: [
          "Markethink helps organize the path from idea to campaign. It can hold the brand memory, structure the campaign brief, help create the assets, support website and blog updates, and keep track of lead or partnership opportunities.",
          "The goal is practical: fewer ideas sitting in limbo, more campaigns that move people closer to becoming clients, partners, or qualified conversations.",
        ],
      },
    ],
    faq: [
      {
        question: "How do you turn a marketing idea into a campaign?",
        answer:
          "Start by defining the audience, offer, message, proof, assets, and next step. Then create connected assets such as a landing page, blog post, social content, and follow-up path so the idea can create a real business opportunity.",
      },
      {
        question: "What makes a campaign create client opportunities?",
        answer:
          "A campaign creates opportunities when it speaks to a clear buyer need, connects to a relevant offer, gives people a destination, and includes a follow-up path such as a lead list, consultation, referral, or partnership action.",
      },
      {
        question: "Can Markethink help with leads and partnerships?",
        answer:
          "Yes. Markethink can support a smart lead area where the agent looks for potential leads, partners, referral sources, and opportunity angles, then organizes them with context and suggested next actions.",
      },
    ],
  },
];

export const allBlogCards = [
  ...journeyPosts,
  ...insightPosts.map((post) => ({
    title: post.title,
    label: post.label,
    image: post.image,
    href: `/blog/${post.slug}/`,
  })),
];

export function getPostBySlug(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}
