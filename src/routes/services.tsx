import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, ServicesGrid, Process, PricingAnchor, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      path: "/services",
      title: "Shopify, Wix, SEO & CRO Services | Mubash Elite",
      description:
        "18 specialist services across Shopify development, speed and conversion optimization, Wix Studio, technical SEO, email marketing and AI automation.",
      keywords: "Shopify development services, Shopify CRO, technical SEO services, Wix Studio developer",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Services"
        title={<>Full-Service Shopify <span className="gradient-text">Optimization</span></>}
        subtitle="Everything needed to build, fix and scale a high-performing eCommerce store."
      />
      <ServicesGrid />
      <Process heading={false} />
      <PricingAnchor />
      <FinalCTA />
    </SiteShell>
  );
}
