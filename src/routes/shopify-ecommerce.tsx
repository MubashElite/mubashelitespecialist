import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/site/sections";
import { EditorialServicePage } from "@/components/site/EditorialServicePage";
import shopifyImage from "@/assets/port8.jpg";

export const Route = createFileRoute("/shopify-ecommerce")({
  head: () => {
    const base = pageHead({
      path: "/shopify-ecommerce",
      title: "Shopify Expert Near You, Worldwide | Store Optimization & CRO",
      description:
        "Remote Shopify expert for store owners in the US, UK, Canada, Australia, Europe and Africa. Shopify store audits, CRO, speed and product page optimization.",
      keywords:
        "Shopify expert near me, Shopify consultant near me, hire Shopify expert, remote Shopify developer, Shopify store optimization, Shopify conversion rate optimization, Shopify CRO, Shopify store audit, Shopify SEO audit, Shopify speed optimization, product page optimization",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Shopify Store Optimization, CRO & Audits",
            serviceType: "Shopify optimization",
            url: "https://mubashelite.com/shopify-ecommerce",
            provider: { "@id": "https://mubashelite.com/#business" },
            areaServed: ["Worldwide", "United States", "United Kingdom", "Canada", "Australia", "European Union", "Nigeria"],
            availableChannel: { "@type": "ServiceChannel", serviceUrl: "https://mubashelite.com/contact", availableLanguage: "English" },
          }),
        },
      ],
    };
  },
  component: ShopifyPage,
});

function ShopifyPage() {
  return (
    <SiteShell>
      <EditorialServicePage
        eyebrow="Shopify store optimization"
        title="Make the store"
        italicTitle="easier to choose."
        description="Shopify CRO, store audits, product page optimization and technical refinement built around buying confidence."
        image={shopifyImage}
        imageAlt="Shopify store analytics used during conversion optimization"
        trustLine="Every recommendation is tied to a visible store signal, not a generic checklist."
        statement="Find the friction. Fix what matters."
        focus={[
          { title: "Shopify Store Audits", description: "A focused review of conversion friction, mobile UX, speed, SEO and customer journey gaps." },
          { title: "Conversion Rate Optimization", description: "Sharper hierarchy, trust signals, offers and buying paths across the storefront." },
          { title: "Product Page Optimization", description: "Better merchandising, product copy and objection handling where purchase decisions happen." },
        ]}
        capabilities={[
          { title: "Store & UX", items: ["Shopify design and redesign", "Navigation and collection structure", "Mobile customer journey", "Cart and checkout review"] },
          { title: "CRO & Content", items: ["Product page optimization", "Product description refinement", "Trust and offer placement", "Conversion journey mapping"] },
          { title: "SEO & Performance", items: ["Shopify SEO audit", "Product and collection SEO", "Speed optimization", "Analytics validation"] },
        ]}
        process={["Audit the store", "Prioritize the leaks", "Implement the fixes", "Measure and refine"]}
        related={[
          { label: "Social Media", to: "/social-media-marketing" },
          { label: "Email Marketing", to: "/email-marketing" },
        ]}
        ctaTitle="Your store should earn more trust from every visit."
        ctaText="Send your store URL and the challenge you want solved. I will identify the right starting point."
      />
    </SiteShell>
  );
}
