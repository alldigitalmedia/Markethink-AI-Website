// Which feature card gets which art. The slugs match the standalone feature
// pages in the design project; only the catalogue ships today, so this map
// carries the (group, index) -> slug lookup without their page copy.
export const featureCardSlugs: Record<string, Record<number, string>> = {
  create: { 0: 'websites-landing-pages', 1: 'design-creative', 2: 'social-content-calendar', 3: 'social-publishing', 4: 'email-campaigns', 5: 'campaign-management' },
  grow: { 0: 'lead-research', 1: 'contact-enrichment', 2: 'buying-signals', 3: 'crm', 4: 'outreach', 5: 'google-ads' },
  coordinate: { 0: 'team-agent-chat', 1: 'meeting-recording', 2: 'approvals-priorities', 3: 'connected-workspace', 4: 'customer-conversations', 5: 'booking-invoicing' },
  learn: { 0: 'business-memory', 1: 'brand-hub', 2: 'seo-research', 3: 'ai-search-visibility', 4: 'advertising-reports', 5: 'website-analytics' },
};

export const slugForFeature = (group: string, index: number) => featureCardSlugs[group]?.[index];
