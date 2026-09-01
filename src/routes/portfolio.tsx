import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, PortfolioGrid, TrustStrip, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageHead({
      path: "/portfolio",
      title: "Portfolio | Shopify & Wix Stores Built and Optimized",
      description:
        "A showcase of Shopify, Shopify Plus and Wix stores built, redesigned and optimized for speed, SEO and conversion.",
      keywords: "Shopify portfolio, Shopify Plus stores, eCommerce design portfolio",
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Portfolio"
        title={<>Stores Built &amp; Optimized <span className="gradient-text">to This Standard</span></>}
        subtitle="Live storefronts across fashion, beauty, wellness, electronics and food & beverage."
      />
      <PortfolioGrid />
      <TrustStrip />
      <FinalCTA />
    </SiteShell>
  );
}
