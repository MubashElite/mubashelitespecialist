import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, About, Authority, TrustStrip, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      path: "/about",
      title: "About Mubash Elite | Shopify Conversion & SEO Specialist",
      description:
        "Meet Mubash, an eCommerce growth, conversion and optimization specialist helping Shopify, Wix and dropshipping brands turn traffic into revenue.",
      keywords: "about Mubash, Shopify specialist, eCommerce conversion consultant",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title={<>The Specialist Behind <span className="gradient-text">The Results</span></>}
        subtitle="Audit first, prioritize by revenue impact, implement, then measure and refine."
      />
      <About heading={false} />
      <Authority />
      <TrustStrip />
      <FinalCTA />
    </SiteShell>
  );
}
