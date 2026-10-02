import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/site/sections";
import { EditorialServicePage } from "@/components/site/EditorialServicePage";
import emailImage from "@/assets/blog6.jpg";

export const Route = createFileRoute("/email-marketing")({
  head: () =>
    pageHead({
      path: "/email-marketing",
      title: "Email Marketing & Klaviyo Automation for Shopify | Mubash Elite",
      description:
        "Klaviyo setup, email flows, abandoned cart recovery, welcome series and retention automation that turn subscribers into repeat customers.",
      keywords:
        "email marketing, Klaviyo setup, abandoned cart recovery, welcome series, email automation, Shopify email marketing, customer retention",
    }),
  component: EmailPage,
});

function EmailPage() {
  return (
    <SiteShell>
      <EditorialServicePage
        eyebrow="Klaviyo email marketing"
        title="Keep the value"
        italicTitle="after the visit."
        description="Lifecycle email systems that welcome, recover, retain and reconnect without losing the voice of your brand."
        image={emailImage}
        imageAlt="Email marketing and customer retention planning"
        trustLine="Every flow has a clear trigger, a clear purpose and a place in the customer journey."
        statement="Retention begins with relevance."
        focus={[
          { title: "Welcome & Capture", description: "Forms and welcome journeys that turn interest into a useful customer relationship." },
          { title: "Cart Recovery", description: "Timely, persuasive sequences for shoppers who showed intent but did not complete checkout." },
          { title: "Retention", description: "Post-purchase, replenishment and win-back flows designed for the next valuable action." },
        ]}
        capabilities={[
          { title: "Foundation", items: ["Klaviyo setup", "Shopify integration", "List and segment structure", "Branded templates"] },
          { title: "Automation", items: ["Welcome series", "Cart and browse recovery", "Post-purchase journeys", "Win-back flows"] },
          { title: "Refinement", items: ["Signup forms", "Message sequencing", "Flow reporting", "Testing priorities"] },
        ]}
        process={["Map the lifecycle", "Set the priority flows", "Write and build", "Review and improve"]}
        related={[
          { label: "Shopify & E-commerce", to: "/shopify-ecommerce" },
          { label: "Social Media", to: "/social-media-marketing" },
        ]}
        ctaTitle="Make more of the customers you already earned."
        ctaText="Share your current email setup. I will identify the lifecycle gaps worth fixing first."
      />
    </SiteShell>
  );
}
