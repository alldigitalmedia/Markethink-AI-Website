import { insightPosts } from "../data/blogPosts";
import { spanishInsightPosts } from "../data/blogPostsEs";

export const prerender = true;

const siteUrl = "https://markethink.ai";
const releaseDate = "2026-08-25";

type AlternateSet = {
  en: string;
  es: string;
};

type SitemapPage = {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
  alternates?: AlternateSet;
};

const staticPages: SitemapPage[] = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: releaseDate,
    alternates: { en: "/", es: "/es/" },
  },
  {
    path: "/es/",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: releaseDate,
    alternates: { en: "/", es: "/es/" },
  },
  {
    path: "/blog/",
    priority: "0.8",
    changefreq: "weekly",
    alternates: { en: "/blog/", es: "/es/blog/" },
  },
  {
    path: "/es/blog/",
    priority: "0.8",
    changefreq: "weekly",
    alternates: { en: "/blog/", es: "/es/blog/" },
  },
  {
    path: "/authors/santiago-sosa/",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-09-14",
  },
  {
    path: "/features/",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-09-07",
    alternates: { en: "/features/", es: "/es/features/" },
  },
  {
    path: "/es/features/",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-09-07",
    alternates: { en: "/features/", es: "/es/features/" },
  },
  {
    path: "/shipped/",
    priority: "0.9",
    changefreq: "weekly",
    lastmod: releaseDate,
    alternates: { en: "/shipped/", es: "/es/trabajo-real/" },
  },
  {
    path: "/es/trabajo-real/",
    priority: "0.9",
    changefreq: "weekly",
    lastmod: releaseDate,
    alternates: { en: "/shipped/", es: "/es/trabajo-real/" },
  },
  {
    path: "/who-we-help/",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/schedule-a-walkthrough/",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: releaseDate,
    alternates: {
      en: "/schedule-a-walkthrough/",
      es: "/es/solicitar-demo/",
    },
  },
  {
    path: "/es/solicitar-demo/",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: releaseDate,
    alternates: {
      en: "/schedule-a-walkthrough/",
      es: "/es/solicitar-demo/",
    },
  },
  {
    path: "/ai-marketing-for-small-business/",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/ai-marketing-statistics/",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-09-12",
  },
  {
    path: "/seo-aio-strategy/",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: "2026-09-13",
  },
  {
    path: "/ai-marketing-strategies/",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-09-13",
  },
  {
    path: "/ai-marketing-strategies/seo-aio-playbook/",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-09-13",
  },
  {
    path: "/ai-marketing-strategies/new-website-launch-checklist/",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-09-13",
  },
  {
    path: "/ai-marketing-for-law-firms/",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/ai-marketing-for-interior-designers/",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/privacy/",
    priority: "0.3",
    changefreq: "yearly",
  },
];

const articlePages: SitemapPage[] = insightPosts.map((post) => {
  const spanishPost = spanishInsightPosts.find((item) => item.sourceSlug === post.slug);
  return {
    path: `/blog/${post.slug}/`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: post.updatedDate,
    ...(spanishPost ? { alternates: { en: `/blog/${post.slug}/`, es: `/es/blog/${spanishPost.slug}/` } } : {}),
  };
});

const spanishArticlePages: SitemapPage[] = spanishInsightPosts.map((post) => ({
  path: `/es/blog/${post.slug}/`,
  priority: "0.7",
  changefreq: "monthly",
  lastmod: post.updatedDate,
  alternates: { en: `/blog/${post.sourceSlug}/`, es: `/es/blog/${post.slug}/` },
}));

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const absolute = (path: string) => new URL(path, siteUrl).toString();

export function GET() {
  const urls = [...staticPages, ...articlePages, ...spanishArticlePages]
    .map((page) => {
      const lastmod = page.lastmod
        ? `\n    <lastmod>${escapeXml(page.lastmod)}</lastmod>`
        : "";
      const alternates = page.alternates
        ? `\n    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(absolute(page.alternates.en))}" />\n    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(absolute(page.alternates.es))}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absolute(page.alternates.en))}" />`
        : "";

      return `
  <url>
    <loc>${escapeXml(absolute(page.path))}</loc>${lastmod}${alternates}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}
</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
