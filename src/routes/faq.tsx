import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, FAQ, FAQ_ITEMS, FinalCTA } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () => {
    const head = pageHead({
      path: "/faq",
      title: "FAQ | Working With Mubash Elite Specialist",
      description:
        "Answers on turnaround times, Shopify Plus work, pricing models, taking over existing stores and the satisfaction guarantee.",
      keywords: "Shopify freelancer FAQ, Shopify pricing questions",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        },
      ],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="FAQ" title={<>Common <span className="gradient-text">Questions</span></>} />
      <FAQ heading={false} />
      <FinalCTA />
    </SiteShell>
  );
}
