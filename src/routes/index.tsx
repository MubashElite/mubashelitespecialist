import { createFileRoute } from "@tanstack/react-router";
import {
  SiteShell, Hero, Metrics, Portfolio, CaseStudies, About,
  Authority, TrustStrip, Testimonials, Blog, FinalCTA, FAQ_ITEMS,
} from "@/components/site/sections";
import { Platforms, ServiceCategoriesGrid } from "@/components/site/service-pages";
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
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mubash Elite, Shopify and e-commerce growth specialist" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Metrics />
      <ServiceCategoriesGrid />
      <Platforms />
      <Portfolio />
      <CaseStudies />
      <About />
      <Authority />
      <TrustStrip />
      <Testimonials />
      <Blog />
      <FinalCTA />
    </SiteShell>
  );
}
