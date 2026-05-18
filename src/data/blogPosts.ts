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
  }[];
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
    slug: "consistent-marketing-beats-chasing-ai-tools",
    title: "Why consistent marketing beats chasing every new AI tool",
    seoTitle: "Why Consistent Marketing Beats Chasing Every New AI Tool | Markethink",
    description:
      "A practical guide for growing businesses on why consistent marketing, clear offers, and a repeatable campaign rhythm matter more than collecting more AI tools.",
    excerpt:
      "More AI tools do not automatically create more demand. A consistent marketing rhythm helps your business show up, learn, and improve every week.",
    label: "INSIGHT",
    image: "/images/blog-consistent-marketing-rhythm.avif",
    imageAlt:
      "A Markethink marketing rhythm workspace showing campaign planning, approvals, and weekly output",
    publishedDate: "2026-05-15",
    updatedDate: "2026-05-15",
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
        question: "Is consistent marketing more important than trying new AI tools?",
        answer:
          "For most growing businesses, yes. AI tools can help with speed, but consistency creates trust, clarity, and repeatable output. The strongest setup is a consistent marketing system that can use AI tools with the right brand and campaign context.",
      },
      {
        question: "How often should a business publish marketing content?",
        answer:
          "The right cadence depends on the team and market, but a useful starting point is a monthly campaign focus supported by weekly content. The goal is not volume alone. The goal is consistent, connected marketing that moves buyers closer to action.",
      },
      {
        question: "What makes Markethink different from a standalone AI content tool?",
        answer:
          "Markethink is designed to learn the brand and organize the workflow around campaigns, approvals, web updates, blog content, social content, and feedback. A standalone tool may create a draft, but Markethink helps the marketing operation improve over time.",
      },
    ],
  },
  {
    slug: "brand-memory-feedback-approved-campaigns",
    title: "How brand memory turns feedback into faster approved campaigns",
    seoTitle: "How Brand Memory Creates Faster Approved Campaigns | Markethink",
    description:
      "Learn how brand memory helps teams turn feedback, approvals, voice, offers, and campaign direction into faster, more aligned marketing output.",
    excerpt:
      "Brand memory helps your business stop repeating the same edits and start using feedback as a compounding advantage.",
    label: "INSIGHT",
    image: "/images/blog-brand-memory-approval-loop.avif",
    imageAlt:
      "A Markethink brand memory workspace showing feedback, approvals, and campaign learning",
    publishedDate: "2026-05-15",
    updatedDate: "2026-05-15",
    readingTime: "7 min read",
    category: "Brand Intelligence",
    keywords: [
      "brand memory",
      "brand intelligence",
      "marketing approvals",
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
    seoTitle: "The Hidden Cost of Disconnected Marketing Apps and Prompts | Markethink",
    description:
      "Disconnected marketing tools, prompts, docs, and approval threads create hidden costs. Learn how a marketing operating system reduces context switching and lost learning.",
    excerpt:
      "Disconnected marketing tools create invisible drag: context switching, repeated explanations, lost approvals, and campaigns that never fully connect.",
    label: "INSIGHT",
    image: "/images/blog-disconnected-marketing-cost.avif",
    imageAlt:
      "A Markethink workspace showing disconnected marketing apps being organized into one workflow",
    publishedDate: "2026-05-15",
    updatedDate: "2026-05-15",
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
    title: "From scattered ideas to campaigns that create real client opportunities",
    seoTitle: "Turn Scattered Marketing Ideas Into Client Opportunities | Markethink",
    description:
      "Learn how to turn scattered marketing ideas into connected campaigns that support website updates, blog posts, social content, landing pages, leads, and partnerships.",
    excerpt:
      "Ideas only create growth when they become campaigns with a clear audience, offer, message, destination, and follow-up path.",
    label: "INSIGHT",
    image: "/images/blog-ideas-to-client-opportunities.avif",
    imageAlt:
      "A Markethink workflow turning ideas into campaign assets and client opportunities",
    publishedDate: "2026-05-15",
    updatedDate: "2026-05-15",
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
        heading: "Lead and partnership opportunities should feed the content plan",
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

export const allBlogCards = [...journeyPosts, ...insightPosts.map((post) => ({
  title: post.title,
  label: post.label,
  image: post.image,
  href: `/blog/${post.slug}/`,
}))];

export function getPostBySlug(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}
