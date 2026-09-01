import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, Contact, Diagnosis, FAQ } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      path: "/contact",
      title: "Contact | Free Shopify Store Diagnosis | Mubash Elite",
      description:
        "Request a free Shopify or dropshipping store diagnosis. Reach Mubash by email, WhatsApp or Fiverr and get a clear fix plan.",
      keywords: "contact Shopify expert, free Shopify store audit, hire Shopify specialist",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        title={<>Ready to Fix Your Store? <span className="gradient-text">Let's Talk</span></>}
        subtitle="Send a message, or request a free diagnosis and I'll tell you exactly what's costing you sales."
      />
      <Contact heading={false} />
      <Diagnosis heading={false} />
      <FAQ />
    </SiteShell>
  );
}
