import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, TrustStrip, FAQ } from "@/components/site/sections";
import { ValuePillars, JourneyStrip, DeliverablesList, PageCTA, EMAIL_PILLARS } from "@/components/site/service-pages";

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
      <PageHeader
        eyebrow="Email Marketing"
        title={<>Revenue That Runs <span className="gradient-text">While You Sleep</span></>}
        subtitle="Klaviyo flows and lifecycle automation that capture leads, recover carts and keep customers buying long after their first order."
      />
      <ValuePillars
        eyebrow="Capabilities"
        title={<>Email Built Around <span className="gradient-text">the Customer Lifecycle</span></>}
        subtitle="Each flow has one job, one trigger and one measurable outcome."
        items={EMAIL_PILLARS}
      />
      <JourneyStrip
        steps={["Visitor", "Lead", "Customer", "Returning Customer"]}
        caption="Popups capture the visitor, the welcome series converts the lead, cart and post-purchase flows keep them coming back."
      />
      <DeliverablesList
        eyebrow="What's Included"
        title={<>Flows, Forms and <span className="gradient-text">Reporting</span></>}
        groups={[
          { heading: "Setup", items: ["Klaviyo account configuration", "Shopify integration and data sync", "List and segment architecture", "Branded email templates"] },
          { heading: "Automations", items: ["Welcome series", "Abandoned cart and browse abandonment", "Post-purchase and review requests", "Win-back and retention flows"] },
          { heading: "Capture & Measure", items: ["Popup and signup form setup", "Segmentation rules", "Flow-level revenue reporting", "Ongoing testing and refinement"] },
        ]}
      />
      <FAQ />
      <TrustStrip />
      <PageCTA
        title="Turn your email list into a revenue channel"
        subtitle="Share your current setup and I'll show you which flows are missing and what they are likely leaving behind."
      />
    </SiteShell>
  );
}
