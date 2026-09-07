// Customer-facing capabilities verified against the Dashboard repository.
// Account-specific activation and approval rules are explained once on the page.
export const featureGroups = [
  {
    id: 'create', label: 'Create & publish', headline: 'From the first idea to the work that ships.',
    description: 'A shared brief, a consistent brand, and expert review across the channels that matter to your business.',
    features: [
      { title: 'Websites & landing pages', icon: 'web', description: 'Create campaign landing pages, refine your website, and review changes before they move through your publishing workflow.', detail: 'Page creation · Website updates · Previews' },
      { title: 'Design & creative', icon: 'design', description: 'Branded graphics, carousels, campaign visuals, and copy made for your audience. Refine the direction with your marketing team.', detail: 'Custom imagery · Social design · Copywriting' },
      { title: 'Social content & calendar', icon: 'calendar', description: 'Plan your content, preview posts and carousels, review captions, and keep the publishing calendar organized.', detail: 'Content planning · Feed previews · Approvals' },
      { title: 'Social publishing', icon: 'publish', description: 'Schedule or publish approved content to your connected accounts. Track each post’s status and adjust the plan as needed.', detail: 'Scheduling · Publishing · Delivery status' },
      { title: 'Email campaigns', icon: 'email', description: 'Prepare branded email designs, newsletter copy, audience segments, and campaign drafts ready for review and send.', detail: 'Email creative · Audience planning · Drafts' },
      { title: 'Campaign management', icon: 'campaign', description: 'Keep the goal, web work, content, lead activity, and deliverables connected to the campaign they belong to.', detail: 'Campaign briefs · Deliverables · Progress' },
    ],
  },
  {
    id: 'grow', label: 'Find & grow', headline: 'Connect the marketing to the next opportunity.',
    description: 'Research the right companies, build better outreach, and give every promising conversation a clear next step.',
    features: [
      { title: 'Lead research', icon: 'search', description: 'Find prospects around your ideal customer profile, including role, seniority, company, market, and location.', detail: 'Prospect discovery · Research lists · CSV exports' },
      { title: 'Contact enrichment', icon: 'contacts', description: 'Turn research into useful contact records with business details and available contact information for your sales process.', detail: 'Company context · Contact details · Verification' },
      { title: 'Buying signals', icon: 'signal', description: 'Research public signs of change: hiring, expansion, funding, new leadership, and other timely reasons to start a conversation.', detail: 'Business signals · Source links · Research context' },
      { title: 'Leads & CRM', icon: 'pipeline', description: 'Track contacts from new inquiry to meeting, proposal, and outcome. Keep owners, notes, follow-up dates, and next actions visible.', detail: 'Pipeline stages · Ownership · Follow-up' },
      { title: 'Outbound & follow-up', icon: 'email', description: 'Prepare relevant outreach and follow-up sequences, launch approved campaigns, and organize replies through connected sending accounts.', detail: 'Sequences · Reply handling · Sending controls' },
      { title: 'Google Ads management', icon: 'campaign', description: 'Prepare and manage search campaigns, ad copy, keywords, bids, and budgets with your team’s direction and agreed approval rules.', detail: 'Campaigns · Keywords · Budget controls' },
    ],
  },
  {
    id: 'coordinate', label: 'Work together', headline: 'Keep conversations, decisions, and next steps together.',
    description: 'Your agent and marketing team work from the same business context, with you in control of important decisions.',
    features: [
      { title: 'Team & agent chat', icon: 'chat', description: 'Share priorities, ask your dedicated AI agent questions, and review work with your marketing team in one ongoing conversation.', detail: 'Briefs · Feedback · Shared conversation' },
      { title: 'Meeting recording & notes', icon: 'meeting', description: 'Request a notetaker for a specific call. Capture the transcript, recap decisions, and turn the conversation into useful follow-up work.', detail: 'Recording · Transcripts · Action items' },
      { title: 'Approvals & daily priorities', icon: 'check', description: 'See what needs your review, what is due, and what has shipped. Approve work or request changes with clear context.', detail: 'Review queue · Tasks · Recent activity' },
      { title: 'Connected workspace', icon: 'workspace', description: 'Bring permitted email, calendar, documents, spreadsheets, and project work into the same operating rhythm.', detail: 'Email · Calendars · Documents · Tasks' },
      { title: 'Customer conversations', icon: 'chat', description: 'For enabled WhatsApp accounts, manage active customer conversations with replies, approved response rules, and human handoff.', detail: 'WhatsApp inbox · Replies · Team handoff' },
      { title: 'Booking & invoicing workflows', icon: 'calendar', description: 'Where configured, connect booking, invoice preparation, payment links, and approved recurring billing to the next business action.', detail: 'Scoped setup · Booking · Invoices & subscriptions' },
    ],
  },
  {
    id: 'learn', label: 'Understand & improve', headline: 'Make the next decision with more context.',
    description: 'Bring business memory, research, and connected reporting back into the next brief.',
    features: [
      { title: 'Business memory', icon: 'memory', description: 'Your business facts, voice, creative decisions, approved patterns, and feedback remain available for the next assignment.', detail: 'Brand context · Decisions · Approved feedback' },
      { title: 'Brand hub & references', icon: 'design', description: 'Keep logos, guidelines, photography, approved examples, and creative references together so the work starts from the right foundation.', detail: 'Brand assets · Guidelines · Reference library' },
      { title: 'SEO & competitive research', icon: 'search', description: 'Research keywords and competitors, review rankings and backlinks, and identify content opportunities and technical page improvements.', detail: 'Keywords · Rankings · Competitors · Page checks' },
      { title: 'AI-search visibility', icon: 'signal', description: 'Investigate how your brand appears in supported AI answers and search overviews, then identify clearer ways to explain your business online.', detail: 'AI answers · Brand presence · Content opportunities' },
      { title: 'Advertising reports', icon: 'chart', description: 'See connected Google Ads spend, clicks, conversions, acquisition costs, and return on ad spend, with campaign breakdowns and daily trends.', detail: 'Campaign results · Spend · Conversions · Trends' },
      { title: 'Website analytics', icon: 'chart', description: 'Ask for reports on connected website traffic, activity, and conversion funnels. Give the next campaign a clearer starting point.', detail: 'Traffic · Funnels · Connected reporting' },
    ],
  },
] as const;

export const connectionGroups = [
  { title: 'Social & community', description: 'Publish approved content through the social accounts your business uses.',
    apps: ['instagram', 'facebook', 'linkedin', 'tiktok', 'youtube', 'x', 'threads', 'pinterest', 'reddit', 'bluesky', 'google-business-profile', 'telegram', 'snapchat', 'discord'],
    note: 'Available formats and publishing actions depend on the connected account.' },
  { title: 'Email & workspace', description: 'Work with connected calendars, documents, campaigns, and project tasks.',
    apps: ['mailchimp', 'gmail', 'google-calendar', 'google-drive', 'google-docs', 'google-sheets', 'google-contacts', 'outlook', 'microsoft-teams', 'monday'],
    note: 'Access to email, documents, and tasks follows the permissions you approve.' },
  { title: 'Meetings & conversations', description: 'Bring the decisions from a call into the work that follows.',
    apps: [{ id: 'zoom', context: 'Meeting recording' }, { id: 'google-meet', context: 'Meeting recording' }, { id: 'microsoft-teams', context: 'Meeting recording' }, { id: 'whatsapp', context: 'Customer inbox' }],
    note: 'Recording is requested per meeting. Customer inbox workflows require account activation.' },
  { title: 'Search & performance', description: 'Connect campaign management and reporting to your own accounts.',
    apps: [{ id: 'google-ads', context: 'Campaign management' }, { id: 'google-analytics', context: 'Website reporting' }],
    note: 'Keyword, competitor, and AI-answer research informs your marketing direction.' },
  { title: 'Website & content', description: 'Prepare, review, and publish changes through your existing website setup.',
    apps: ['wordpress', 'shopify', 'woocommerce', 'webflow', 'wix', 'squarespace', 'html5', 'css3', 'javascript', 'react', 'nextjs', 'php'],
    note: 'Connected source repositories, hosted websites, and supported file-based publishing workflows.' },
  { title: 'CRM & business operations', description: 'Connect sales context, next actions, and approved billing workflows.',
    apps: [{ id: 'kommo', context: 'Contacts, leads & tasks' }, { id: 'stripe', context: 'Invoices & payments' }],
    note: 'Prepare invoices, payment links, and approved recurring billing alongside your sales workflow.' },
] as const;

export const iconPaths: Record<string, string> = {
  web: 'M3 5h18v14H3z M3 9h18 M7 7h.01 M10 7h.01 M8 13l-2 2 2 2 M16 13l2 2-2 2 M13 12l-2 6',
  design: 'M4 4h16v16H4z M4 9h16 M9 9v11 M13 16l2-4 3 5 M7 6.5h.01',
  calendar: 'M4 5h16v16H4z M8 3v4 M16 3v4 M4 10h16 M8 14h2 M14 14h2 M8 17h2',
  publish: 'M12 16V3 M7 8l5-5 5 5 M4 13v8h16v-8',
  email: 'M3 5h18v14H3z M3 6l9 7 9-7',
  campaign: 'M4 10h5l10-5v14L9 14H4z M7 14l2 7h4l-3-7 M22 9v6',
  search: 'M20 20l-5-5 M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14 M7 10h6 M10 7v6',
  contacts: 'M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M2 21v-3a7 7 0 0 1 14 0v3 M17 5a4 4 0 0 1 0 7 M19 15a5 5 0 0 1 3 5',
  signal: 'M3 12h4l3-8 4 16 3-8h4',
  pipeline: 'M3 3h6v5H3z M15 16h6v5h-6z M6 8v10h9 M12 5h8 M17 2l3 3-3 3',
  chat: 'M3 4h18v13H9l-6 4z M7 8h10 M7 12h6',
  meeting: 'M3 6h12v13H3z M15 10l6-4v13l-6-4 M7 3h4',
  check: 'M4 4h16v16H4z M7 12l3 3 7-7',
  workspace: 'M3 3h8v8H3z M15 3h6v6h-6z M3 15h6v6H3z M13 13h8v8h-8z',
  memory: 'M7 4h10v16H7z M10 8h4 M10 12h4 M10 16h2 M4 7H2 M4 12H2 M4 17H2 M22 7h-2 M22 12h-2 M22 17h-2',
  chart: 'M3 3v18h18 M7 17v-4 M12 17V9 M17 17V5 M6 9l5-5',
};
