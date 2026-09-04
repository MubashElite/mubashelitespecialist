import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, Portfolio, Process, TrustStrip, Diagnosis } from "@/components/site/sections";
import { ValuePillars, JourneyStrip, DeliverablesList, PageCTA, SHOPIFY_PILLARS, Platforms } from "@/components/site/service-pages";

export const Route = createFileRoute("/shopify-ecommerce")({
  head: () =>
    pageHead({
      path: "/shopify-ecommerce",
      title: "Shopify & E-commerce Optimization Expert | Mubash Elite",
      description:
        "Shopify store design, redesign, CRO, product page optimization, product SEO and store audits that turn existing traffic into paying customers.",
      keywords:
        "Shopify expert, Shopify consultant, Shopify store optimization, ecommerce optimization, conversion rate optimization, product page optimization",
    }),
  component: ShopifyPage,
});

function ShopifyPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Shopify & E-commerce"
        title={<>Turn the Traffic You Already Have <span className="gradient-text">Into Customers</span></>}
        subtitle="Design, structure, speed and merchandising work focused on one measurable outcome: a higher share of visitors completing a purchase."
      />
      <ValuePillars
        eyebrow="Capabilities"
        title={<>Where Shopify Stores <span className="gradient-text">Gain or Lose Revenue</span></>}
        subtitle="Each area below is assessed during the audit, then prioritized by the size of its likely impact on sales."
        items={SHOPIFY_PILLARS}
      />
      <JourneyStrip
        steps={["Store audit", "Priority roadmap", "Design & build", "CRO & SEO fixes", "Measure & refine"]}
        caption="Every engagement follows the same sequence, so you always know what is being worked on and why."
      />
      <DeliverablesList
        eyebrow="What's Included"
        title={<>Delivered as Clear, <span className="gradient-text">Reviewable Work</span></>}
        groups={[
          { heading: "Store & UX", items: ["Storefront design or redesign", "Navigation and collection structure", "Mobile-first layout refinements", "Checkout and cart flow review"] },
          { heading: "Conversion & Content", items: ["Product page optimization", "Product description rewrites", "Trust, review and offer placement", "Customer journey mapping"] },
          { heading: "Technical & SEO", items: ["Product and collection SEO", "Speed and Core Web Vitals work", "Tracking and analytics validation", "Full technical store audit"] },
        ]}
      />
      <Platforms heading={false} />
      <Portfolio heading={false} />
      <Process heading={false} />
      <TrustStrip />
      <Diagnosis />
      <PageCTA
        title="Find out what your store is losing"
        subtitle="Send your store URL and I'll review the pages that matter most, then tell you exactly what I would fix first."
      />
    </SiteShell>
  );
}
