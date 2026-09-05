import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Check, ShoppingBag, Gauge, TrendingUp, Search, Palette, Users,
  Mailbox, Repeat, ShoppingCart, Sparkles, Instagram, Facebook, LineChart,
  Target, Wrench, MousePointerClick, MessageSquare,
} from "lucide-react";
import { SectionHeading } from "@/components/site/sections";
import { useReveal } from "@/components/site/useReveal";

/* ---------------- PLATFORM LOGO SHOWCASE ---------------- */
type Platform = { name: string; slug: string; color: string };

const PLATFORMS: Platform[] = [
  { name: "Shopify", slug: "shopify", color: "95BF47" },
  { name: "WordPress", slug: "wordpress", color: "21759B" },
  { name: "WooCommerce", slug: "woocommerce", color: "96588A" },
  { name: "Klaviyo", slug: "", color: "000000" },
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
  { name: "Google", slug: "google", color: "4285F4" },
  { name: "Meta", slug: "meta", color: "0467DF" },
  { name: "Facebook", slug: "facebook", color: "1877F2" },
  { name: "Instagram", slug: "instagram", color: "E4405F" },
  { name: "Wix", slug: "wix", color: "0C6EFC" },
  { name: "Mailchimp", slug: "mailchimp", color: "FFE01B" },
  { name: "TikTok", slug: "tiktok", color: "000000" },
];

function PlatformLogo({ p }: { p: Platform }) {
  const [failed, setFailed] = useState(!p.slug);
  return (
    <div className="glass rounded-2xl h-24 px-4 flex flex-col items-center justify-center gap-2 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
      {failed ? (
        <span className="font-display text-sm font-semibold">{p.name}</span>
      ) : (
        <>
          <img
            src={`https://cdn.simpleicons.org/${p.slug}/${p.color}`}
            alt={`${p.name} logo`}
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-8 w-8 object-contain"
          />
          <span className="text-[11px] text-muted-foreground text-center leading-tight">{p.name}</span>
        </>
      )}
    </div>
  );
}

export function Platforms({ heading = true }: { heading?: boolean }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="platforms" className={heading ? "py-20 sm:py-24" : "pb-16 pt-6"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {heading && (
          <SectionHeading
            eyebrow="Platforms"
            title={<>The Tools Your Store <span className="gradient-text">Already Runs On</span></>}
            subtitle="I work natively inside the platforms that power your storefront, your analytics and your marketing."
          />
        )}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">
          {PLATFORMS.map((p) => <PlatformLogo key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICE CATEGORIES ---------------- */
export type ServiceCategory = {
  slug: "shopify-ecommerce" | "social-media-marketing" | "email-marketing" | "digital-marketing";
  to: "/shopify-ecommerce" | "/social-media-marketing" | "/email-marketing" | "/services";
  icon: any;
  title: string;
  blurb: string;
  services: { name: string; benefit: string }[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "shopify-ecommerce",
    to: "/shopify-ecommerce",
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    blurb: "Design, rebuild and optimize storefronts so more of the traffic you already pay for becomes revenue.",
    services: [
      { name: "Shopify Store Design", benefit: "A storefront structured around buying decisions, not just visuals." },
      { name: "Shopify Store Redesign", benefit: "Modernize an existing store without losing rankings or history." },
      { name: "Conversion Rate Optimization", benefit: "Remove the friction between interest and checkout." },
      { name: "Product Page Optimization", benefit: "Clearer offers, stronger trust signals, fewer drop-offs." },
      { name: "Product SEO", benefit: "Product and collection pages that can be found in search." },
      { name: "Product Description Optimization", benefit: "Copy that answers objections and sells the outcome." },
      { name: "Customer Journey Optimization", benefit: "A logical path from first click to repeat purchase." },
      { name: "User Experience Optimization", benefit: "Navigation and layout that make buying effortless on mobile." },
      { name: "E-commerce Store Auditing", benefit: "A prioritized list of what is costing you sales right now." },
      { name: "Store Performance Optimization", benefit: "Faster load times and healthier Core Web Vitals." },
    ],
  },
  {
    slug: "social-media-marketing",
    to: "/social-media-marketing",
    icon: Instagram,
    title: "Social Media Marketing",
    blurb: "Facebook and Instagram positioned as acquisition channels: strategy, content direction and conversion, not just posting.",
    services: [
      { name: "Social Media Strategy", benefit: "A channel plan tied to sales, not vanity metrics." },
      { name: "Facebook Marketing", benefit: "Reach and retarget the buyers most likely to purchase." },
      { name: "Instagram Marketing", benefit: "Visual storytelling that turns followers into customers." },
      { name: "Content Strategy", benefit: "A repeatable content system built around buying intent." },
      { name: "Social Media Management", benefit: "Consistent publishing and a brand presence that looks credible." },
      { name: "Audience Growth", benefit: "Grow the right audience, not an inflated follower count." },
      { name: "Engagement Strategy", benefit: "Conversations that build trust and shorten the buying cycle." },
      { name: "Traffic Generation", benefit: "Qualified social traffic pointed at pages built to convert." },
      { name: "Social Conversion Strategy", benefit: "Profiles, links and offers designed to close the sale." },
    ],
  },
  {
    slug: "email-marketing",
    to: "/email-marketing",
    icon: Mailbox,
    title: "Email Marketing & Automation",
    blurb: "Klaviyo flows that capture leads, recover carts and turn one-time buyers into returning customers.",
    services: [
      { name: "Klaviyo Setup", benefit: "A properly configured account: lists, segments, templates, reporting." },
      { name: "Email Flow Creation", benefit: "Automated revenue that runs without daily attention." },
      { name: "Abandoned Cart Recovery", benefit: "Win back shoppers who were one step from buying." },
      { name: "Welcome Series", benefit: "Convert new subscribers while intent is highest." },
      { name: "Customer Retention", benefit: "More repeat purchases from customers you already paid to acquire." },
      { name: "Email Automation", benefit: "Lifecycle messaging triggered by real customer behaviour." },
      { name: "Popup & Form Setup", benefit: "Capture emails without wrecking the shopping experience." },
      { name: "Customer Journey Automation", benefit: "The right message at the right stage, every time." },
    ],
  },
  {
    slug: "digital-marketing",
    to: "/services",
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    blurb: "Strategy, traffic and acquisition work that feeds a store already built to convert.",
    services: [
      { name: "Digital Marketing Strategy", benefit: "A clear plan for where growth will actually come from." },
      { name: "Traffic Generation", benefit: "More qualified visitors from search and social." },
      { name: "Lead Generation", benefit: "Capture demand before it leaves your site." },
      { name: "Customer Acquisition", benefit: "Lower cost per customer through better conversion." },
      { name: "Technical & On-page SEO", benefit: "Crawlable, indexable pages that earn organic traffic." },
      { name: "Analytics & Tracking Setup", benefit: "Trustworthy data behind every decision you make." },
    ],
  },
];

export function ServiceCategoriesGrid() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Do"
          title={<>Four Areas That Decide <span className="gradient-text">How Much Your Store Earns</span></>}
          subtitle="Every engagement starts with the same question: where is revenue leaking, and what fixes it fastest?"
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6 reveal">
          {SERVICE_CATEGORIES.map((c) => (
            <article key={c.slug} className="glass rounded-3xl p-7 sm:p-8 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center text-white shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-2">
                {c.services.slice(0, 6).map((s) => (
                  <li key={s.name} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-cyan shrink-0 mt-0.5" /> {s.name}
                  </li>
                ))}
              </ul>
              <Link to={c.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:gap-3 transition-all">
                Explore {c.title} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCategoryDetail() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="pb-20 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16">
        {SERVICE_CATEGORIES.map((c) => (
          <div key={c.slug} className="reveal">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-cyan text-xs uppercase tracking-[0.18em]">
                  <c.icon className="h-4 w-4" /> {c.title}
                </div>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold max-w-2xl">{c.blurb}</h2>
              </div>
              <Link to={c.to} className="shrink-0 inline-flex items-center gap-2 rounded-xl glass hover:bg-foreground/10 px-5 py-3 text-sm font-semibold transition">
                See the full page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.services.map((s) => (
                <div key={s.name} className="glass rounded-2xl p-6 hover:shadow-glow transition hover:-translate-y-1">
                  <h3 className="font-display font-semibold text-base">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SHARED PAGE BLOCKS ---------------- */
export function ValuePillars({ eyebrow, title, subtitle, items }: {
  eyebrow: string; title: React.ReactNode; subtitle?: string;
  items: { icon: any; t: string; d: string }[];
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {items.map((x) => (
            <div key={x.t} className="glass rounded-2xl p-6 hover:shadow-glow transition hover:-translate-y-1">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white shadow-glow">
                <x.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{x.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneyStrip({ steps, caption }: { steps: string[]; caption?: string }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rounded-3xl p-8 reveal">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-3 sm:gap-4">
                <span className="rounded-xl border border-border bg-background/30 px-4 py-2.5 text-xs sm:text-sm font-medium">{s}</span>
                {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-cyan shrink-0" />}
              </div>
            ))}
          </div>
          {caption && <p className="mt-5 text-center text-xs sm:text-sm text-muted-foreground">{caption}</p>}
        </div>
      </div>
    </section>
  );
}

export function DeliverablesList({ eyebrow, title, groups }: {
  eyebrow: string; title: React.ReactNode;
  groups: { heading: string; items: string[] }[];
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-12 grid md:grid-cols-3 gap-5 reveal">
          {groups.map((g) => (
            <div key={g.heading} className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold">{g.heading}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-cyan shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE-SPECIFIC CONTENT ---------------- */
export const SHOPIFY_PILLARS = [
  { icon: Palette, t: "Store design & redesign", d: "Layouts built around how customers actually decide, with your brand identity intact." },
  { icon: TrendingUp, t: "Conversion rate optimization", d: "Identify the exact steps where shoppers drop off, then remove the friction." },
  { icon: ShoppingCart, t: "Product page optimization", d: "Offer clarity, trust signals, imagery and copy that answer objections before checkout." },
  { icon: Search, t: "Product & technical SEO", d: "Product, collection and content pages structured to be crawled, indexed and found." },
  { icon: MousePointerClick, t: "UX & customer journey", d: "Navigation, search, filtering and checkout flow refined for mobile-first buyers." },
  { icon: Gauge, t: "Performance & store audits", d: "Speed, Core Web Vitals and a prioritized audit of what is costing you revenue." },
];

export const SOCIAL_PILLARS = [
  { icon: Target, t: "Strategy before content", d: "Channel positioning, audience definition and offers mapped to buying intent." },
  { icon: Facebook, t: "Facebook marketing", d: "Page presence, community and retargeting structured around store conversion." },
  { icon: Instagram, t: "Instagram marketing", d: "Visual storytelling, profile architecture and content that leads to product pages." },
  { icon: Users, t: "Audience growth", d: "Grow an audience of likely buyers instead of an inflated follower count." },
  { icon: MessageSquare, t: "Engagement strategy", d: "Comments, DMs and social proof handled as part of the sales process." },
  { icon: LineChart, t: "Social conversion", d: "Traffic sent to pages built to convert, with tracking that proves what worked." },
];

export const EMAIL_PILLARS = [
  { icon: Mailbox, t: "Klaviyo setup", d: "Accounts, integrations, segments and templates configured correctly from day one." },
  { icon: Sparkles, t: "Welcome series", d: "Convert new subscribers while their interest is at its highest point." },
  { icon: ShoppingCart, t: "Abandoned cart recovery", d: "Sequenced reminders that bring back shoppers who nearly bought." },
  { icon: Repeat, t: "Retention & win-back", d: "Post-purchase and lapsed-customer flows that increase repeat orders." },
  { icon: Wrench, t: "Popups & lead capture", d: "Forms that grow your list without damaging the shopping experience." },
  { icon: LineChart, t: "Reporting & iteration", d: "Flow-level reporting so every email is measured against revenue." },
];

export function PageCTA({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative glass rounded-3xl p-10 sm:p-14 text-center overflow-hidden reveal">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-royal/25 via-transparent to-cyan/15" />
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gradient-primary text-white font-semibold shadow-glow hover:opacity-95 transition">
              Work With Me <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-foreground/10 font-semibold transition">
              Explore My Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
