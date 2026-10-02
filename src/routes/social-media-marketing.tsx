import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell } from "@/components/site/sections";
import { EditorialServicePage } from "@/components/site/EditorialServicePage";
import socialImage from "@/assets/blog2.jpg";

export const Route = createFileRoute("/social-media-marketing")({
  head: () =>
    pageHead({
      path: "/social-media-marketing",
      title: "Social Media Marketing for E-commerce Brands | Mubash Elite",
      description:
        "Facebook and Instagram marketing built for customer acquisition: social strategy, content direction, audience growth, engagement and conversion-focused traffic.",
      keywords:
        "social media marketing, Facebook marketing, Instagram marketing, social media strategy, ecommerce social media, audience growth",
    }),
  component: SocialPage,
});

function SocialPage() {
  return (
    <SiteShell>
      <EditorialServicePage
        eyebrow="Social Media Marketing"
        title="Attention with"
        italicTitle="commercial direction."
        description="Social strategy and content systems that move the right audience from discovery to product consideration."
        image={socialImage}
        imageAlt="Social media campaign planning for an e-commerce brand"
        trustLine="The channel plan starts with the customer and the offer, never the posting calendar."
        statement="Presence is useful. Intent is better."
        focus={[
          { title: "Channel Strategy", description: "Clear roles for Instagram and Facebook based on audience, offer and buying journey." },
          { title: "Content Direction", description: "Repeatable themes and formats that make the brand useful, credible and memorable." },
          { title: "Conversion Path", description: "Profiles, messages and landing journeys designed to move attention toward action." },
        ]}
        capabilities={[
          { title: "Positioning", items: ["Audience definition", "Channel priorities", "Offer and message direction", "Competitor review"] },
          { title: "Content", items: ["Content pillars", "Format and cadence planning", "Profile optimization", "Publishing direction"] },
          { title: "Growth", items: ["Audience quality", "Engagement strategy", "Traffic routing", "Performance review"] },
        ]}
        process={["Define the audience", "Shape the message", "Build the system", "Review the signal"]}
        related={[
          { label: "Shopify & E-commerce", to: "/shopify-ecommerce" },
          { label: "Email Marketing", to: "/email-marketing" },
        ]}
        ctaTitle="Give every post a reason to exist."
        ctaText="Share your brand, audience and current channels. I will shape the clearest route forward."
      />
    </SiteShell>
  );
}
