import { createFileRoute } from "@tanstack/react-router";
import {
  SiteShell, Hero, Metrics, Portfolio, CaseStudies, About, Services, Process,
  Authority, Diagnosis, PricingAnchor, TrustStrip, Testimonials, Blog, FAQ,
  Contact, FinalCTA, FAQ_ITEMS,
} from "@/components/site/sections";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

const HOME_TITLE =
  "Shopify & Dropshipping Store Optimization Specialist | Mubash Elite Specialist";
const HOME_DESCRIPTION =
  "I help Shopify and dropshipping store owners increase sales by fixing hidden conversion, SEO, tracking and performance issues that silently kill revenue.";
const HOME_KEYWORDS =
  "Shopify optimization specialist, dropshipping store optimization, Shopify conversion rate optimization, Shopify SEO expert, Shopify tracking fix, Shopify speed optimization, eCommerce revenue optimization, Shopify store audit, Mubash Elite Specialist";

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
      { property: "og:image:alt", content: "Mubash Elite Specialist, Shopify, Wix, SEO & AI growth partner" },
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
      <Portfolio />
      <CaseStudies />
      <About />
      <Services />
      <Process />
      <Authority />
      <Diagnosis />
      <PricingAnchor />
      <TrustStrip />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <FinalCTA />
    </SiteShell>
  );
}
