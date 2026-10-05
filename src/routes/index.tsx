import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/sections";
import { HomeEditorial } from "@/components/site/HomeEditorial";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

const HOME_TITLE =
  "Shopify Consultant & E-commerce Growth Specialist | Mubash Elite";
const HOME_DESCRIPTION =
  "Shopify optimization, conversion rate optimization, social media marketing and Klaviyo email automation for e-commerce brands that want more revenue from the traffic they already have.";
const HOME_KEYWORDS =
  "Shopify expert, Shopify consultant, Shopify store optimization, ecommerce optimization, conversion rate optimization, social media marketing, Facebook marketing, Instagram marketing, email marketing, Klaviyo, ecommerce consultant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { name: "keywords", content: HOME_KEYWORDS },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mubash Elite, Shopify and e-commerce growth specialist" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell showChat={false}>
      <HomeEditorial />
    </SiteShell>
  );
}
