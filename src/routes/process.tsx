import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, Process, TrustStrip, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/process")({
  head: () =>
    pageHead({
      path: "/process",
      title: "Shopify Optimization Process | Audit to Growth | Mubash Elite",
      description:
        "A proven nine-phase delivery system: discovery, planning, research, design, development, optimization, testing, launch and growth.",
      keywords: "Shopify project process, store audit process, eCommerce optimization workflow",
    }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Process"
        title={<>From Audit to Launch, <span className="gradient-text">A Proven System</span></>}
        subtitle="Clear phases, clear timelines, and measurable outcomes at every step."
      />
      <Process heading={false} />
      <TrustStrip />
      <FinalCTA />
    </SiteShell>
  );
}
