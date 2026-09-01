import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, BlogGrid, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      path: "/blog",
      title: "Shopify, SEO, CRO & Dropshipping Insights | Mubash Elite Blog",
      description:
        "Practical articles on Shopify speed, conversion rate optimization, technical SEO, dropshipping scaling and eCommerce growth.",
      keywords: "Shopify blog, dropshipping tips, conversion rate optimization, Shopify SEO articles",
    }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Blog"
        title={<>Insights From <span className="gradient-text">The Field</span></>}
        subtitle="Field notes from real store audits, fixes and growth work."
      />
      <BlogGrid />
      <FinalCTA />
    </SiteShell>
  );
}
