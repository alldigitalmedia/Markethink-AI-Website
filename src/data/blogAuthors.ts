export type BlogAuthorInput = {
  name: string;
  title: string;
  bio?: string;
  url?: string;
  sameAs?: readonly string[];
  schemaType?: "Person" | "Organization";
  linkLabel?: string;
};

export type ResolvedBlogAuthor = {
  name: string;
  title: string;
  bio?: string;
  url?: string;
  sameAs: readonly string[];
  schemaType: "Person" | "Organization";
  linkLabel?: string;
};

export const SANTIAGO_LINKEDIN_URL =
  "https://www.linkedin.com/in/santiagososa";

export const santiagoSosaAuthor: ResolvedBlogAuthor = Object.freeze({
  name: "Santiago Sosa",
  title: "Founder of Markethink.ai",
  bio: "Santiago Sosa is the founder of Markethink.ai, with more than 20 years of experience in marketing, digital strategy and growth.",
  url: SANTIAGO_LINKEDIN_URL,
  sameAs: Object.freeze([SANTIAGO_LINKEDIN_URL]),
  schemaType: "Person",
  linkLabel: "View Santiago on LinkedIn",
});

const EDITORIAL_PLACEHOLDER_NAMES = new Set([
  "markethink editorial team",
]);

export function resolveBlogAuthor(
  author?: BlogAuthorInput,
): ResolvedBlogAuthor {
  const name = author?.name.trim() ?? "";

  if (!name || EDITORIAL_PLACEHOLDER_NAMES.has(name.toLowerCase())) {
    return santiagoSosaAuthor;
  }

  const title = author?.title.trim() ?? "";
  const bio = author?.bio?.trim();
  const url = author?.url?.trim();
  const sameAs = author?.sameAs
    ?.map((profileUrl) => profileUrl.trim())
    .filter(Boolean) ?? [];

  return {
    name,
    title,
    ...(bio ? { bio } : {}),
    ...(url ? { url } : {}),
    sameAs,
    schemaType: author?.schemaType ?? "Person",
    ...(author?.linkLabel ? { linkLabel: author.linkLabel } : {}),
  };
}

export function getBlogAuthorSchema(author: ResolvedBlogAuthor) {
  return {
    "@type": author.schemaType,
    name: author.name,
    ...(author.url ? { url: author.url } : {}),
    ...(author.sameAs.length ? { sameAs: [...author.sameAs] } : {}),
  };
}
