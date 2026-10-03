export const SITE_URL = "https://mubashelitespecialist.lovable.app";
export const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/rb0zggpZa0hb5EOjUYl7sodNSUh2/social-images/social-1782785202870-WhatsApp_Image_2026-06-29_at_15.06.21.webp";

export function pageHead({
  path,
  title,
  description,
  keywords,
  image = OG_IMAGE,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
