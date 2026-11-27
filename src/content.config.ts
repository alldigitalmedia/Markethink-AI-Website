import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One markdown file per English blog post: src/content/blog/<slug>.md.
// The file name is the URL slug (/blog/<slug>/). src/data/blogMarkdown.ts turns
// each entry into the same BlogPost shape the TypeScript posts use.

// YAML reads an unquoted 2026-11-27 as a Date; keep every date as YYYY-MM-DD.
const isoDate = z
  .union([z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"), z.date()])
  .transform((value) =>
    typeof value === "string" ? value : value.toISOString().slice(0, 10),
  );

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    excerpt: z.string().optional(),
    seoTitle: z.string().optional(),
    publishedDate: isoDate,
    updatedDate: isoDate.optional(),
    category: z.string().default("Insights"),
    keywords: z.array(z.string()).default([]),
    author: z.string().default("Markethink Editorial Team"),
    label: z.string().optional(),
    image: z.string().optional(),
    imageMobile: z.string().optional(),
    imageThumbnail: z.string().optional(),
    imageSharing: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.union([z.string(), z.number().int().positive()]).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
