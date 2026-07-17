import { insightPosts } from "../data/blogPosts";

const siteUrl = "https://markethink.ai";

const staticPages = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/blog/",
    priority: "0.8",
    changefreq: "weekly",
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
  },
  {
    path: "/ai-marketing-for-small-business/",
    priority: "0.9",
    changefreq: "monthly",
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

const articlePages = insightPosts.map((post) => ({
  path: `/blog/${post.slug}/`,
  priority: "0.7",
  changefreq: "monthly",
  lastmod: post.updatedDate,
}));

export function GET() {
  const urls = [...staticPages, ...articlePages]
    .map((page) => {
      const loc = `${siteUrl}${page.path}`;
      const lastmod = "lastmod" in page ? page.lastmod : new Date().toISOString().slice(0, 10);

      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
