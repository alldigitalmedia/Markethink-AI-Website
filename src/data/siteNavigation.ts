export const primaryNavigation = [
  { label: "Features", href: "/features/", reviewHref: "/features/" },
  { label: "How it works", href: "/#how-it-works", reviewHref: "#how-it-works" },
  { label: "Real work", href: "/shipped/", reviewHref: "/shipped/" },
  { label: "Strategies", href: "/ai-marketing-strategies/", reviewHref: "/ai-marketing-strategies/" },
  { label: "Insights", href: "/blog/", reviewHref: "/blog/" },
] as const;

export const primaryNavigationActions = {
  loginLabel: "Log in",
  loginHref: "https://dashboard.markethink.ai/",
  ctaLabel: "Book A Demo",
  ctaHref: "/schedule-a-walkthrough/",
} as const;
