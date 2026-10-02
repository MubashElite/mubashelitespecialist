import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/site/sections";
import { EditorialServicePage } from "@/components/site/EditorialServicePage";
import serviceImage from "@/assets/port7.jpg";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      path: "/services",
      title: "Shopify & E-commerce Growth Services | Mubash Elite",
      description:
        "Specialist Shopify optimization, CRO, social media strategy and Klaviyo email services designed around stronger customer journeys and sustainable growth.",
      keywords:
        "Shopify services, ecommerce optimization services, conversion rate optimization, social media marketing services, email marketing services, Klaviyo consultant",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <EditorialServicePage
        eyebrow="Services"
        title="One growth system."
        italicTitle="Four disciplines."
        description="Store experience, customer acquisition, social presence and retention shaped as one connected commercial journey."
        image={serviceImage}
        imageAlt="Shopify commerce performance dashboard"
        trustLine="You work directly with the specialist shaping the strategy and the execution."
        statement="Everything should move the buyer forward."
        focus={[
          { title: "Shopify & E-commerce", description: "Store audits, redesign, CRO, product pages, SEO and performance optimization." },
          { title: "Digital Growth", description: "Clear acquisition priorities, better traffic quality and reliable measurement." },
          { title: "Social Media", description: "Channel strategy and content direction connected to buying intent." },
          { title: "Email & Automation", description: "Klaviyo flows that recover demand and strengthen retention." },
        ]}
        capabilities={[
          { title: "Store", items: ["Shopify design and redesign", "Conversion rate optimization", "Store audits and performance", "Product page and SEO refinement"] },
          { title: "Demand", items: ["Digital growth strategy", "Social channel direction", "Content and offer positioning", "Traffic journey planning"] },
          { title: "Retention", items: ["Klaviyo setup", "Lifecycle automations", "Abandoned cart recovery", "Segmentation and reporting"] },
        ]}
        process={["Diagnose the constraint", "Set the commercial priority", "Build with precision", "Review and refine"]}
        related={[
          { label: "Shopify & E-commerce", to: "/shopify-ecommerce" },
          { label: "Social Media", to: "/social-media-marketing" },
          { label: "Email Marketing", to: "/email-marketing" },
        ]}
        ctaTitle="Start with the clearest opportunity."
        ctaText="Share your store and current priority. I will recommend the work that deserves attention first."
      />
    </SiteShell>
  );
}
