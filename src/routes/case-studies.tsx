import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, CaseStudies, Testimonials, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    pageHead({
      path: "/case-studies",
      title: "Shopify Case Studies & Optimization Results | Mubash",
      description:
        "Video walkthroughs of real Shopify and dropshipping store fixes: SEO recovery, conversion tracking repairs and performance optimization.",
      keywords: "Shopify case studies, store optimization results, Shopify SEO recovery",
    }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Case Studies"
        title={<>Real Store Optimization <span className="gradient-text">Case Studies</span></>}
        subtitle="Watch how hidden issues were found and fixed inside live stores."
      />
      <CaseStudies heading={false} />
      <Testimonials />
      <FinalCTA />
    </SiteShell>
  );
}
