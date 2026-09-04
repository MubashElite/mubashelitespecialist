import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, PageHeader, TrustStrip, Testimonials } from "@/components/site/sections";
import { ValuePillars, JourneyStrip, DeliverablesList, PageCTA, SOCIAL_PILLARS } from "@/components/site/service-pages";

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
      <PageHeader
        eyebrow="Social Media Marketing"
        title={<>Social Media as an <span className="gradient-text">Acquisition Channel</span></>}
        subtitle="Facebook and Instagram treated as part of your sales system: attract the right audience, earn their attention, then send them somewhere built to convert."
      />
      <ValuePillars
        eyebrow="Approach"
        title={<>Strategy First, <span className="gradient-text">Content Second</span></>}
        subtitle="Posting is the output. The work that makes it profitable happens before anything is published."
        items={SOCIAL_PILLARS}
      />
      <JourneyStrip
        steps={["Audience & offer", "Channel strategy", "Content system", "Engagement", "Traffic to conversion"]}
        caption="Social activity is planned backwards from the sale, not forwards from the calendar."
      />
      <DeliverablesList
        eyebrow="What's Included"
        title={<>A Complete Social <span className="gradient-text">Growth System</span></>}
        groups={[
          { heading: "Strategy", items: ["Audience and positioning research", "Channel and platform strategy", "Offer and messaging direction", "Competitor review"] },
          { heading: "Content & Management", items: ["Content pillars and formats", "Publishing structure and cadence", "Profile and bio optimization", "Ongoing page management"] },
          { heading: "Growth & Conversion", items: ["Audience growth plan", "Engagement and community handling", "Traffic routing to key pages", "Performance review and iteration"] },
        ]}
      />
      <Testimonials />
      <TrustStrip />
      <PageCTA
        title="Make social media pay for itself"
        subtitle="Tell me about your brand and audience, and I'll outline the channel strategy I would run first."
      />
    </SiteShell>
  );
}
