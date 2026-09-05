import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, Process, PricingAnchor, TrustStrip } from "@/components/site/sections";
import { ServiceCategoryDetail, Platforms, PageCTA } from "@/components/site/service-pages";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      path: "/services",
      title: "E-commerce, Shopify, Social & Email Services | Mubash Elite",
      description:
        "Shopify and e-commerce optimization, digital marketing, social media marketing and Klaviyo email automation, organized into clear service categories with defined outcomes.",
      keywords:
        "Shopify services, ecommerce optimization services, conversion rate optimization, social media marketing services, email marketing services, Klaviyo consultant",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Services"
        title={<>Services Built Around <span className="gradient-text">Revenue Outcomes</span></>}
        subtitle="Four connected areas: the store that converts, the traffic that reaches it, the social presence that earns attention, and the email that keeps customers returning."
      />
      <ServiceCategoryDetail />
      <Platforms heading={false} />
      <Process heading={false} />
      <PricingAnchor />
      <TrustStrip />
      <PageCTA
        title="Not sure which service you need?"
        subtitle="Send your store URL. I'll review it and recommend the work most likely to increase revenue first."
      />
    </SiteShell>
  );
}
