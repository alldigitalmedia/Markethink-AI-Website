export type BlogAuthorImage = {
  path: string;
  url: string;
  width: number;
  height: number;
  mimeType: "image/png" | "image/webp";
};

export type BlogAuthorInput = {
  name: string;
  title: string;
  bio?: string;
  url?: string;
  sameAs?: readonly string[];
  schemaType?: "Person" | "Organization";
  linkLabel?: string;
  image?: BlogAuthorImage;
  profileImage?: BlogAuthorImage;
  avatarImage?: BlogAuthorImage;
};

export type ResolvedBlogAuthor = {
  name: string;
  title: string;
  bio?: string;
  url?: string;
  sameAs: readonly string[];
  schemaType: "Person" | "Organization";
  linkLabel?: string;
  image?: BlogAuthorImage;
  profileImage?: BlogAuthorImage;
  avatarImage?: BlogAuthorImage;
};

export const SANTIAGO_LINKEDIN_URL =
  "https://www.linkedin.com/in/santiagososa";
export const SANTIAGO_PROFILE_PATH = "/authors/santiago-sosa/";
export const SANTIAGO_PROFILE_URL =
  `https://markethink.ai${SANTIAGO_PROFILE_PATH}`;
export const SANTIAGO_PROFILE_PATH_ES = "/es/autores/santiago-sosa/";
export const SANTIAGO_PROFILE_URL_ES =
  `https://markethink.ai${SANTIAGO_PROFILE_PATH_ES}`;
export const SANTIAGO_PROFILE_ID = `${SANTIAGO_PROFILE_URL}#person`;
export const SANTIAGO_PORTRAIT_PATH =
  "/images/authors/santiago-sosa-linkedin-original-800x800.png";
export const SANTIAGO_PORTRAIT_URL =
  `https://markethink.ai${SANTIAGO_PORTRAIT_PATH}`;

const santiagoPortraitImage = Object.freeze({
  path: SANTIAGO_PORTRAIT_PATH,
  url: SANTIAGO_PORTRAIT_URL,
  width: 800,
  height: 800,
  mimeType: "image/png" as const,
});

const santiagoProfileImage = Object.freeze({
  path: "/images/authors/santiago-sosa-profile-400x400.webp",
  url: "https://markethink.ai/images/authors/santiago-sosa-profile-400x400.webp",
  width: 400,
  height: 400,
  mimeType: "image/webp" as const,
});

const santiagoAvatarImage = Object.freeze({
  path: "/images/authors/santiago-sosa-avatar-144x144.webp",
  url: "https://markethink.ai/images/authors/santiago-sosa-avatar-144x144.webp",
  width: 144,
  height: 144,
  mimeType: "image/webp" as const,
});

export const santiagoSosaAuthor = Object.freeze({
  name: "Santiago Sosa",
  title: "Founder of Markethink.ai",
  bio: "Santiago Sosa is the founder of Markethink.ai, with more than 20 years of experience in marketing, digital strategy and growth.",
  url: SANTIAGO_PROFILE_URL,
  sameAs: Object.freeze([SANTIAGO_LINKEDIN_URL]),
  schemaType: "Person",
  linkLabel: "View Santiago on LinkedIn",
  image: santiagoPortraitImage,
  profileImage: santiagoProfileImage,
  avatarImage: santiagoAvatarImage,
});

export const santiagoSosaAuthorEs = Object.freeze({
  name: "Santiago Sosa",
  title: "Fundador de Markethink.ai",
  bio: "Santiago Sosa es el fundador de Markethink.ai y cuenta con más de 20 años de experiencia en marketing, estrategia digital y crecimiento.",
  url: SANTIAGO_PROFILE_URL_ES,
  sameAs: Object.freeze([SANTIAGO_LINKEDIN_URL]),
  schemaType: "Person",
  linkLabel: "Ver a Santiago en LinkedIn",
  image: santiagoPortraitImage,
  profileImage: santiagoProfileImage,
  avatarImage: santiagoAvatarImage,
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
    ...(author?.image ? { image: author.image } : {}),
    ...(author?.profileImage ? { profileImage: author.profileImage } : {}),
    ...(author?.avatarImage ? { avatarImage: author.avatarImage } : {}),
  };
}

export function getBlogAuthorSchema(author: ResolvedBlogAuthor) {
  return {
    "@type": author.schemaType,
    ...(author.schemaType === "Person" && author.name === santiagoSosaAuthor.name
      ? { "@id": SANTIAGO_PROFILE_ID }
      : {}),
    name: author.name,
    ...(author.url ? { url: author.url } : {}),
    ...(author.sameAs.length ? { sameAs: [...author.sameAs] } : {}),
    ...(author.image ? { image: author.image.url } : {}),
  };
}
