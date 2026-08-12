import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ExternalLink, Mail, MessageSquare, ShoppingBag, Code2, Gauge,
  TrendingUp, Globe, Search, Mailbox, Bot, Wrench, ArrowLeftRight, Palette,
  ChevronLeft, ChevronRight, Check, Star, ArrowUp, Quote, Sparkles,
  Play, X, ShieldCheck, Zap, Target, LineChart, DollarSign
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { ChatWidget } from "@/components/site/ChatWidget";
import { AuditTool } from "@/components/site/AuditTool";
import { Counter } from "@/components/site/Counter";
import { useReveal } from "@/components/site/useReveal";
import heroBg from "@/assets/hero-bg.jpg";
import portraitAsset from "@/assets/portrait.jpg.asset.json";

const HOME_URL = "https://mubashelitespecialist.lovable.app/";
const HOME_TITLE =
  "Shopify & Dropshipping Store Optimization Specialist | Mubash Elite Specialist";
const HOME_DESCRIPTION =
  "I help Shopify and dropshipping store owners increase sales by fixing hidden conversion, SEO, tracking and performance issues that silently kill revenue.";
const HOME_KEYWORDS =
  "Shopify optimization specialist, dropshipping store optimization, Shopify conversion rate optimization, Shopify SEO expert, Shopify tracking fix, Shopify speed optimization, eCommerce revenue optimization, Shopify store audit, Mubash Elite Specialist";
const HOME_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/rb0zggpZa0hb5EOjUYl7sodNSUh2/social-images/social-1782785202870-WhatsApp_Image_2026-06-29_at_15.06.21.webp";

const FAQ_ITEMS = [
  { q: "What's your typical turnaround?", a: "Most fixes ship in 48–72 hours. Full Shopify builds take 2–4 weeks depending on scope. I'll always give you a clear timeline upfront." },
  { q: "Do you work with Shopify Plus?", a: "Yes. I work across Shopify, Shopify Plus, Wix and Wix Studio. The same playbook applies — just at different scales." },
  { q: "How do you price ongoing work?", a: "Either fixed-scope projects or monthly retainers for performance, SEO and CRO partnerships. No hourly billing — outcomes only." },
  { q: "Can you take over an existing store?", a: "Always. I'll start with an audit, document everything, then ship improvements in clear sprints." },
  { q: "Will I work with you directly?", a: "Yes. You always work with me — no junior account managers, no agency middle layer." },
  { q: "What if I'm not happy with the work?", a: "Every project includes revision rounds and a satisfaction guarantee. If something's off, we fix it." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { name: "keywords", content: HOME_KEYWORDS },
      { name: "subject", content: "Shopify, Wix, SEO and AI automation consulting" },
      { name: "rating", content: "General" },
      { name: "geo.region", content: "US" },
      { name: "geo.placename", content: "Worldwide" },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:url", content: HOME_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HOME_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mubash Elite Specialist — Shopify, Wix, SEO & AI Growth Partner" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: HOME_OG_IMAGE },
      { name: "twitter:image:alt", content: "Mubash Elite Specialist portrait" },
    ],
    links: [
      { rel: "canonical", href: HOME_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" },
    ],
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: HOME_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${HOME_URL}#services` },
            { "@type": "ListItem", position: 3, name: "Portfolio", item: `${HOME_URL}#portfolio` },
            { "@type": "ListItem", position: 4, name: "Pricing", item: `${HOME_URL}#pricing` },
            { "@type": "ListItem", position: 5, name: "Contact", item: `${HOME_URL}#contact` },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/2347014449168";
const EMAIL = "mailto:mubashelitespecialist@gmail.com";
const FIVERR = "https://www.fiverr.com/shopifybash";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Home() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="min-h-screen hero-bg text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Metrics />
      <Platforms />
      <About />
      <Authority />
      <Services />
      <ServiceTiers />
      <Process />
      <Portfolio />
      <CaseStudies />
      <Diagnosis />
      <Skills />
      <Audit />
      <Pricing />
      <PricingAnchor />
      <TrustStrip />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-royal/30 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan/20 blur-[120px] animate-float-fast" />
      </div>

      {/* Floating glass cards */}
      <div className="absolute top-32 right-[8%] hidden lg:block animate-float-slow">
        <div className="glass rounded-2xl p-4 w-56 shadow-card">
          <div className="text-xs text-muted-foreground">Conversion Rate</div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-display font-bold">4.8%</span>
            <span className="text-xs text-success">+62%</span>
          </div>
          <div className="mt-3 h-10 flex items-end gap-1">
            {[30,40,35,55,48,72,65,82,78,90].map((v, i) => (
              <div key={i} className="flex-1 rounded-sm gradient-primary" style={{ height: `${v}%` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 left-[6%] hidden lg:block animate-float-fast">
        <div className="glass rounded-2xl p-4 w-52 shadow-card">
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-cyan" />
            <span className="text-xs text-muted-foreground">PageSpeed</span>
          </div>
          <div className="mt-2 text-3xl font-display font-bold gradient-text">98</div>
          <div className="text-xs text-success mt-1">Core Web Vitals · Pass</div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="mx-auto mb-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 gradient-primary animate-fade-up">
          <img
            src={portraitAsset.url}
            alt="Mubash Elite Specialist"
            width={128}
            height={128}
            className="w-full h-full rounded-full object-cover border-2 border-background"
          />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs sm:text-sm animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          <span className="text-muted-foreground">Shopify & Dropshipping Optimization Specialist · Now booking</span>
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.05s" }}>
          Unlock the{" "}
          <span className="gradient-text">Hidden Revenue</span>{" "}
          Trapped Inside Your Shopify Store
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.12s" }}>
          A specialist-led optimization system for Shopify and dropshipping brands — engineered to eliminate the conversion, SEO, tracking, and performance issues quietly costing you sales.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <button onClick={() => scrollToId("diagnosis")} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary text-white font-medium shadow-glow hover:opacity-95 transition">
            Get Free Store Diagnosis <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => scrollToId("case-studies")} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-foreground/10 transition font-medium">
            View Case Studies
          </button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.28s" }}>
          <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-cyan" /> Shopify & Dropshipping Optimization Specialist</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-cyan" /> Revenue-Focused Store Fixes</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-cyan" /> Real Case Studies Below</span>
        </div>
        <div className="mt-8 mx-auto max-w-3xl glass rounded-2xl px-5 py-4 animate-fade-up" style={{ animationDelay: "0.34s" }}>
          <div className="text-[10px] uppercase tracking-[0.2em] text-cyan text-center">Works For</div>
          <div className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-cyan" /> Shopify store owners</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-cyan" /> Dropshipping businesses</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-cyan" /> eCommerce brands</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-cyan" /> Growing online stores</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- METRICS ---------- */
function Metrics() {
  const stats = [
    { v: 180, s: "+", l: "Projects completed" },
    { v: 140, s: "+", l: "Happy clients" },
    { v: 32, s: "", l: "Countries served" },
    { v: 49, s: "/50", l: "Avg client rating" },
    { v: 7, s: "+", l: "Years experience" },
  ];
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass rounded-3xl p-8 sm:p-12 shadow-card grid grid-cols-2 md:grid-cols-5 gap-6 reveal">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                <Counter value={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PLATFORMS ---------- */
function Platforms() {
  const platforms = ["Shopify","Shopify Plus","Wix","Wix Studio","Google","Meta","Klaviyo","Mailchimp","Stripe","PayPal","OpenAI","Cloudflare"];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground reveal">Trusted tools & platforms I build with</p>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 reveal">
          {platforms.map((p) => (
            <div key={p} className="glass rounded-xl px-4 py-3 text-center text-sm font-medium text-muted-foreground hover:text-foreground transition">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title={<>The Specialist Behind <span className="gradient-text">The Results</span></>} />
        <div className="mt-10 grid md:grid-cols-5 gap-8 items-start reveal">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I started as a store owner struggling with the same conversion, speed, and SEO issues that plague most Shopify businesses. Seven years and hundreds of projects later, I fix those problems at scale — for Shopify and Wix brands, dropshipping stores, and scaling eCommerce businesses.
            </p>
            <p>
              My process is built around revenue impact, not vanity metrics. I audit first, identify the highest-leverage fixes, and execute with clear timelines and measurable outcomes. No templates, no inflated retainers, no vague reports — just execution that moves the numbers.
            </p>
            <p>
              Clients tend to stay because the results compound. A speed fix this month becomes higher organic rankings next quarter and lower ad costs the one after. That is the system I build with every partner.
            </p>
          </div>
          <div className="md:col-span-2 space-y-3">
            {[
              { t: "Direct access", d: "You work with me, not a junior account manager." },
              { t: "Honest scoping", d: "Realistic timelines and pricing no surprises." },
              { t: "Performance-first", d: "Every change is measured against revenue impact." },
              { t: "Long horizon", d: "I optimize for what your brand looks like in a year." },
            ].map((x) => (
              <div key={x.t} className="glass rounded-xl p-4">
                <div className="text-sm font-semibold">{x.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function ServiceRow({ items }: { items: { i: any; t: string; d: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };
  return (
    <div className="relative group/row">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scroll-smooth"
        style={{ scrollbarWidth: "thin" }}
      >
        {items.map(({ i: Icon, t, d }) => (
          <div key={t} className="snap-start shrink-0 w-[260px] sm:w-[300px] group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white shadow-glow group-hover:scale-110 transition">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display font-semibold">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <button onClick={() => scroll(-1)} aria-label="Previous" className="hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-10 w-10 place-items-center rounded-full glass hover:bg-foreground/10 opacity-0 group-hover/row:opacity-100 transition">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button onClick={() => scroll(1)} aria-label="Next" className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-10 w-10 place-items-center rounded-full glass hover:bg-foreground/10 opacity-0 group-hover/row:opacity-100 transition">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Services() {
  const items = [
    { i: ShoppingBag, t: "Shopify Store Design", d: "Conversion-first storefronts built to turn visitors into buyers." },
    { i: Code2, t: "Shopify Development", d: "Custom themes, sections, and apps — no workarounds, no hacks." },
    { i: Wrench, t: "Shopify Custom Coding", d: "Liquid, JavaScript, and API integrations that off-the-shelf apps cannot handle." },
    { i: Gauge, t: "Speed Optimization", d: "Core Web Vitals improvements that reduce bounce and lift rankings." },
    { i: TrendingUp, t: "Conversion Rate Optimization", d: "Data-led testing and UX changes that directly increase revenue." },
    { i: Palette, t: "Wix Website Design", d: "Professional Wix sites with strong visual identity and conversion structure." },
    { i: Code2, t: "Wix Studio Development", d: "Velo-powered builds with custom backend logic and dynamic content." },
    { i: Search, t: "SEO Strategy", d: "On-page, technical, and content SEO that drives qualified organic traffic." },
    { i: Search, t: "Technical SEO", d: "Crawlability, indexing, schema markup, and Core Web Vitals compliance." },
    { i: Globe, t: "Google Search Console Setup", d: "Proper configuration, error monitoring, and ongoing performance tracking." },
    { i: Mailbox, t: "Email Marketing", d: "Lifecycle flows, campaigns, and segmentation that recover lost revenue." },
    { i: Mailbox, t: "Klaviyo Setup", d: "Full account configuration: flows, segments, templates, and reporting." },
    { i: Bot, t: "AI Automation", d: "Intelligent workflows that reduce manual work and improve customer experience." },
    { i: Palette, t: "Landing Page Design", d: "High-intent landing pages engineered for paid traffic conversion." },
    { i: Palette, t: "Store Redesign", d: "Full UX and visual refresh without rebuilding from scratch." },
    { i: Wrench, t: "Website Maintenance", d: "Ongoing care, security updates, and continuous performance tuning." },
    { i: ArrowLeftRight, t: "Store Migration", d: "Platform moves to Shopify with full SEO preservation and zero downtime." },
    { i: Gauge, t: "Performance Optimization", d: "Theme, asset, and frontend tuning for faster load times and better UX." },
  ];
  const half = Math.ceil(items.length / 2);
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Services" title={<>Full-Service Shopify <span className="gradient-text">Optimization</span></>} />
        <div className="mt-12 space-y-5 reveal">
          <ServiceRow items={items.slice(0, half)} />
          <ServiceRow items={items.slice(half)} />
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = ["Discovery","Planning","Research","Design","Development","Optimization","Testing","Launch","Growth"];
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeading eyebrow="Process" title={<>From Audit to Launch — <span className="gradient-text">A Proven System</span></>} align="left" />
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-foreground/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-foreground/10">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-12 relative reveal">
          <div
            ref={ref}
            className="overflow-x-auto pb-6 -mx-4 px-4 scroll-smooth"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="relative min-w-max">
              <div className="absolute left-0 right-0 top-9 h-px bg-gradient-to-r from-transparent via-royal to-transparent" />
              <ol className="relative flex gap-4 sm:gap-6">
                {steps.map((s, i) => (
                  <li key={s} className="shrink-0 w-[190px] sm:w-[210px] flex flex-col items-center text-center">
                    <div className="h-[72px] flex items-center justify-center">
                      <div className="h-[72px] w-[72px] rounded-full gradient-primary p-[2px] shadow-glow">
                        <div className="h-full w-full rounded-full bg-background grid place-items-center">
                          <span className="font-display text-lg font-bold gradient-text">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 glass rounded-2xl px-4 py-4 w-full">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Phase {i + 1}</div>
                      <div className="mt-1 font-display font-semibold">{s}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
type Project = { name: string; industry: string; platform: string; desc: string; url: string };
const PROJECTS: Project[] = [
  { name: "MSV Shot Items", industry: "Lifestyle", platform: "Shopify", desc: "Trendy DTC store with curated lifestyle goods and clean PDPs.", url: "https://msvshotitems.store/" },
  { name: "Glow-ish", industry: "Beauty", platform: "Shopify", desc: "Premium skincare experience with polished art direction.", url: "https://www.glow-ish.com/en" },
  { name: "Elecmatis", industry: "Electronics", platform: "Shopify", desc: "Single-product lander engineered for paid traffic conversion.", url: "https://elecmatis.store/lander" },
  { name: "Bealphas", industry: "Apparel", platform: "Shopify", desc: "Canadian streetwear brand with strong mobile shopping flow.", url: "https://bealphas.ca/" },
  { name: "HK Vitals", industry: "Health & Wellness", platform: "Custom", desc: "Vitamins and supplements with category-led navigation.", url: "https://www.hkvitals.com/" },
  { name: "Myntra", industry: "Fashion Marketplace", platform: "Custom", desc: "Reference-grade fashion marketplace UX at massive scale.", url: "https://www.myntra.com/" },
  { name: "Allbirds", industry: "Footwear", platform: "Shopify Plus", desc: "Sustainable footwear with calm typographic storytelling.", url: "https://www.allbirds.com/" },
  { name: "Kith", industry: "Streetwear", platform: "Shopify Plus", desc: "Editorial-grade lookbook fused with eCommerce.", url: "https://kith.com/" },
  { name: "Bombas", industry: "Apparel", platform: "Shopify Plus", desc: "Mission-driven brand with airtight product education.", url: "https://bombas.com/" },
  { name: "Death Wish Coffee", industry: "Food & Beverage", platform: "Shopify Plus", desc: "Bold brand voice and a frictionless subscription flow.", url: "https://www.deathwishcoffee.com/" },
  { name: "Tessemae's", industry: "Food & Beverage", platform: "Shopify", desc: "Clean food brand built around a strong shop-by-category UX.", url: "https://tessemaes.com/" },
  { name: "Hiya Health", industry: "Kids Wellness", platform: "Shopify Plus", desc: "High-CRO landing pages and subscription onboarding.", url: "https://hiyahealth.com/" },
];

function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };
  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeading eyebrow="Portfolio" title={<>Stores Built &amp; Optimized to This Standard</>} align="left" />
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-foreground/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-foreground/10">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
        >
          {PROJECTS.map((p) => (
            <article key={p.url} className="snap-start shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition group">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block aspect-[16/10] overflow-hidden bg-background/40 relative">
                <iframe
                  src={`https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                  loading="lazy"
                  title={p.name}
                  className="w-full h-full border-0 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              </a>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-royal/20 text-cyan">{p.platform}</span>
                  <span className="text-muted-foreground">{p.industry}</span>
                </div>
                <h3 className="mt-2 font-display font-semibold text-lg">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:gap-2 transition-all">
                  View website <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CASE STUDIES (Video Proof) ---------- */
const HOME_CASE_STUDIES = [
  {
    featured: true,
    title: "Shopify SEO & Visibility Recovery",
    problem: "Store not properly indexed, losing organic traffic.",
    solution: "Fixed SEO structure, crawling, and indexing issues.",
    impact: "📈 Restored organic reach potential",
    icon: "📈",
    tag: "SEO & Visibility",
    src: "https://res.cloudinary.com/rkyfvlbv/video/upload/v1783128118/VID-20260103-WA0118_siiojd.mp4",
    poster: "https://res.cloudinary.com/rkyfvlbv/video/upload/so_2,w_1600,h_900,c_fill,q_auto,f_jpg/v1783128118/VID-20260103-WA0118_siiojd.jpg",
  },
  {
    featured: false,
    title: "Conversion Tracking & Sales Attribution Fix",
    problem: "Broken tracking affecting sales data.",
    solution: "Rebuilt analytics and tracking setup.",
    impact: "💰 Reliable revenue tracking",
    icon: "💰",
    tag: "Tracking & Attribution",
    src: "https://res.cloudinary.com/rkyfvlbv/video/upload/v1783128148/update_sales_proof_gbloyp.webm",
    poster: "https://res.cloudinary.com/rkyfvlbv/video/upload/so_2,w_1200,h_750,c_fill,q_auto,f_jpg/v1783128148/update_sales_proof_gbloyp.jpg",
  },
  {
    featured: false,
    title: "Shopify Store Performance Optimization",
    problem: "Slow and inefficient store experience.",
    solution: "UX and performance improvements across the theme.",
    impact: "⚡ Improved customer experience",
    icon: "⚡",
    tag: "Performance & UX",
    src: "https://res.cloudinary.com/rkyfvlbv/video/upload/v1783128164/VID-20250521-WA0008_nppver.mp4",
    poster: "https://res.cloudinary.com/rkyfvlbv/video/upload/so_2,w_1200,h_750,c_fill,q_auto,f_jpg/v1783128164/VID-20250521-WA0008_nppver.jpg",
  },
];

function CaseStudies() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);
  const current = active !== null ? HOME_CASE_STUDIES[active] : null;
  const featured = HOME_CASE_STUDIES[0];
  const supporting = HOME_CASE_STUDIES.slice(1);

  const Card = ({ s, index, big }: { s: (typeof HOME_CASE_STUDIES)[number]; index: number; big?: boolean }) => (
    <button
      onClick={() => setActive(index)}
      aria-label={`Play case study: ${s.title}`}
      className="group relative w-full text-left glass rounded-3xl overflow-hidden border border-border hover:border-cyan/40 hover:shadow-glow transition-all hover:-translate-y-1"
    >
      <div className={`relative overflow-hidden ${big ? "aspect-[16/9]" : "aspect-video"}`}>
        <img src={s.poster} alt={`${s.title} thumbnail`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-cyan">{s.tag}</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary shadow-glow ring-4 ring-foreground/10 transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 text-white fill-white ml-0.5" />
          </span>
        </div>
      </div>
      <div className={`p-6 ${big ? "lg:p-8" : ""}`}>
        <h3 className={`font-display font-semibold ${big ? "text-2xl lg:text-3xl" : "text-lg"}`}>{s.title}</h3>
        <div className="mt-4 space-y-2 text-sm">
          <p><span className="text-[10px] uppercase tracking-widest text-muted-foreground mr-2">Problem</span>{s.problem}</p>
          <p><span className="text-[10px] uppercase tracking-widest text-muted-foreground mr-2">Solution</span>{s.solution}</p>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-royal/10 px-3 py-1.5 text-xs font-semibold text-cyan">
          <span>{s.icon}</span> {s.impact}
        </div>
      </div>
    </button>
  );

  return (
    <section id="case-studies" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Case Studies" title={<>Real Store Optimization <span className="gradient-text">Case Studies & Results</span></>} subtitle="Watch walkthroughs of actual Shopify and dropshipping store fixes — SEO recovery, tracking repairs, and performance gains." />
        <div className="mt-12 grid lg:grid-cols-2 gap-6 reveal">
          <Card s={featured} index={0} big />
          <div className="grid gap-6">
            {supporting.map((s, i) => <Card key={s.title} s={s} index={i + 1} />)}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/sales-proof" className="inline-flex items-center gap-2 rounded-xl glass hover:bg-foreground/10 px-6 py-3 text-sm font-semibold transition">
            View all results & proof <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 animate-fade-up"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={() => setActive(null)} aria-label="Close video" className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full glass hover:bg-foreground/10 transition">
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-elegant border border-border bg-black" onClick={(e) => e.stopPropagation()}>
            <video key={current.src} src={current.src} poster={current.poster} controls autoPlay playsInline className="w-full h-full" />
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- AUTHORITY ---------- */
function Authority() {
  const items = [
    { i: Target, t: "Revenue-impacting Shopify focus", d: "I focus on the Shopify issues that actually move sales — not surface-level tweaks." },
    { i: ShoppingBag, t: "Shopify & dropshipping expertise", d: "I help both Shopify brands and dropshipping stores scale conversions." },
    { i: Wrench, t: "Hidden technical fixes", d: "I find and fix the technical problems quietly killing your store's sales." },
    { i: LineChart, t: "Performance over design-only", d: "My work is focused on performance and revenue, not just design changes." },
    { i: Zap, t: "Fast issue identification", d: "Quick diagnosis of the exact thing blocking your store's growth." },
    { i: TrendingUp, t: "Compounding, long-term impact", d: "Fixes that keep paying you back month after month." },
  ];
  return (
    <section id="authority" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Authority" title={<>Why Store Owners <span className="gradient-text">Work With Me</span></>} subtitle="Whether you run a Shopify brand or a dropshipping business, here's why founders trust me with their store." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="glass rounded-2xl p-6 hover:shadow-glow transition hover:-translate-y-1">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICE TIERS ---------- */
function ServiceTiers() {
  const tiers = [
    { dot: "bg-emerald-400", name: "Basic Fix", desc: "Small store issues — tracking or SEO fixes.", items: ["Tracking / pixel repairs", "On-page SEO cleanup", "Small UX fixes"] },
    { dot: "bg-cyan", name: "Growth Optimization", desc: "SEO + tracking + speed + conversion improvements.", items: ["Technical SEO", "Speed & Core Web Vitals", "Conversion improvements", "Analytics rebuild"] },
    { dot: "bg-rose-400", name: "Full Store Optimization", desc: "Full audit + end-to-end, revenue-focused overhaul.", items: ["Full store audit", "End-to-end optimization", "SEO + CRO + tracking", "Revenue-focused roadmap"] },
  ];
  return (
    <section id="service-tiers" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Service Tiers" title={<>Shopify <span className="gradient-text">Optimization Services</span></>} subtitle="Three engagement levels. One focus: fixing what is costing you sales." />
        <div className="mt-12 grid md:grid-cols-3 gap-5 reveal">
          {tiers.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7 flex flex-col hover:shadow-glow transition">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${t.dot}`} />
                <span className="text-sm font-semibold">{t.name}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {t.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-cyan mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToId("diagnosis")} className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-white px-5 py-3 text-sm font-semibold shadow-glow hover:opacity-95 transition">
                Request diagnosis <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DIAGNOSIS FORM ---------- */
function Diagnosis() {
  const [form, setForm] = useState({ name: "", url: "", issue: "Low sales" });
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const name = form.name.trim().slice(0, 80);
    const url = form.url.trim().slice(0, 200);
    if (!name || !url) return;
    const msg = `Hi Mubash, I'd like a free Shopify store diagnosis.%0A%0AName: ${encodeURIComponent(name)}%0AStore URL: ${encodeURIComponent(url)}%0AMain Issue: ${encodeURIComponent(form.issue)}`;
    window.open(`https://wa.me/2347014449168?text=${msg}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (
    <section id="diagnosis" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Free Diagnosis" title={<>Get a <span className="gradient-text">Free Shopify Store Diagnosis</span></>} subtitle="I will analyze your store and identify what is stopping your sales or scaling performance. Works for Shopify stores and dropshipping businesses." />
        <form onSubmit={submit} className="mt-12 glass rounded-3xl p-8 sm:p-10 space-y-5 reveal">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Your name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={80} className="mt-1 w-full bg-background/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Store URL</label>
              <input type="url" placeholder="https://yourstore.com" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} required maxLength={200} className="mt-1 w-full bg-background/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Main issue</label>
            <select value={form.issue} onChange={(e) => setForm({ ...form, issue: e.target.value })} className="mt-1 w-full bg-background/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              {["Low sales", "Tracking issues", "SEO problems", "Slow store", "Not sure"].map((o) => (
                <option key={o} value={o} className="bg-background">{o}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-white px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-95 transition">
            {sent ? "Opening WhatsApp…" : "Request Free Store Diagnosis"} <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center text-xs text-muted-foreground">Sends directly to WhatsApp. No spam, no sales pitch — just a real review.</p>
        </form>
      </div>
    </section>
  );
}

/* ---------- PRICING ANCHOR ---------- */
function PricingAnchor() {
  const rows = [
    { r: "$150 – $800", w: "Basic fixes" },
    { r: "$800 – $2,500", w: "Growth optimization" },
    { r: "$2,500+", w: "Full store optimization systems" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="glass rounded-3xl p-8 sm:p-10 reveal">
          <div className="text-xs uppercase tracking-widest text-cyan text-center">Typical Project Range</div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {rows.map((r) => (
              <div key={r.r} className="rounded-2xl border border-border bg-background/30 p-5 text-center">
                <div className="font-display text-xl sm:text-2xl font-bold gradient-text">{r.r}</div>
                <div className="mt-1 text-xs text-muted-foreground">{r.w}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST STRIP ---------- */
function TrustStrip() {
  const bullets = [
    "Proven Shopify revenue fixes",
    "Real store audits, not templates",
    "Live optimization walkthroughs",
    "Conversion + technical expertise",
    "Direct specialist access",
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rounded-2xl px-6 py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 reveal">
          {bullets.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-cyan" /> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative glass rounded-3xl p-10 sm:p-14 text-center overflow-hidden reveal">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-royal/25 via-transparent to-cyan/15" />
          <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-cyan/10 blur-[120px]" />
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-cyan">
            <Sparkles className="h-3 w-3" /> Ready to fix your store?
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Fix the Issues Silently <span className="gradient-text">Killing Your Sales</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Most Shopify and dropshipping stores have hidden technical, SEO, or conversion problems that cost revenue every day. Get a free diagnosis and a clear fix plan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => scrollToId("diagnosis")} className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white px-7 py-3.5 text-sm font-semibold shadow-glow hover:opacity-95 transition">
              Request Free Store Diagnosis <ArrowRight className="h-4 w-4" />
            </button>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl glass hover:bg-foreground/10 px-7 py-3.5 text-sm font-semibold transition">
              WhatsApp me directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- SKILLS ---------- */
function Skills() {
  const skills = ["Shopify","Liquid","HTML","CSS","JavaScript","React","Next.js","Wix Studio","Velo","SEO","Google Analytics","Search Console","Email Marketing","Klaviyo","OpenAI","Make","Zapier","n8n"];
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Skills" title={<>The Technical <span className="gradient-text">Stack</span></>} />
        <div className="mt-12 flex flex-wrap gap-3 justify-center reveal">
          {skills.map((s, i) => (
            <div
              key={s}
              className="glass rounded-xl px-5 py-3 text-sm font-medium hover:gradient-primary hover:text-white transition cursor-default"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AUDIT ---------- */
function Audit() {
  return (
    <section id="audit" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="AI Store Audit"
          title={<>Get a <span className="gradient-text">free AI-powered audit</span> of any store</>}
          subtitle="Paste any Shopify or eCommerce URL. The AI scores 25 categories, highlights weak spots and gives you a download-ready report. Then book me for the deep human audit."
        />
        <div className="mt-10 reveal">
          <AuditTool />
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  const tiers = [
    { name: "Starter", price: "$150", best: false, features: ["Single page design or fix", "1 round of revisions", "Mobile responsive", "Basic SEO setup", "48–72h turnaround"] },
    { name: "Growth", price: "$450", best: false, features: ["Up to 5 page Shopify/Wix build", "Theme customization", "Basic CRO setup", "Klaviyo welcome flow", "On-page SEO", "2 weeks delivery"] },
    { name: "Professional", price: "$900", best: true, features: ["Full custom Shopify build", "Brand-true design system", "Advanced CRO + analytics", "Email marketing setup", "Technical SEO audit", "30-day post-launch support"] },
    { name: "Elite", price: "$1500+", best: false, features: ["End-to-end consulting partner", "Custom Liquid / Velo dev", "AI automation workflows", "Full SEO + content strategy", "Monthly performance reports", "Direct WhatsApp access"] },
  ];
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Pricing" title={<>Transparent Pricing, <span className="gradient-text">No Surprises</span></>} subtitle="Every package includes a kickoff call, clear deliverables, and direct access to me." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
          {tiers.map((t) => (
            <div key={t.name} className={`relative glass rounded-2xl p-7 flex flex-col ${t.best ? "ring-1 ring-cyan shadow-glow" : ""}`}>
              {t.best && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-primary text-white text-xs font-semibold">
                  Most popular
                </div>
              )}
              <div className="text-sm text-muted-foreground">{t.name}</div>
              <div className="mt-2 font-display text-4xl font-bold">{t.price}</div>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan mt-0.5 shrink-0" /> <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium transition ${t.best ? "gradient-primary text-white shadow-glow" : "glass hover:bg-foreground/10"}`}>
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { n: "Sarah K.", r: "Founder, Skincare DTC", q: "Mubash rebuilt our Shopify in 3 weeks and our conversion rate is up 62%. He just gets eCommerce." },
    { n: "Daniel R.", r: "Marketing Lead, Apparel", q: "Best speed optimization investment we've made. Pages went from sluggish to instant and our ad ROAS jumped." },
    { n: "Priya M.", r: "Owner, Wellness Brand", q: "Our SEO traffic 5x'd over six months. Clear plan, clean execution, honest reporting every step." },
    { n: "Tomás L.", r: "Co-founder, F&B Subscription", q: "We were stuck. Mubash built the entire subscription stack and our MRR finally took off." },
    { n: "Nathan B.", r: "CMO, Beauty Startup", q: "The Klaviyo setup alone paid for the project in the first month. Total pro to work with." },
    { n: "Henrik S.", r: "Founder, Electronics Brand", q: "Custom Liquid work other devs said was impossible. Shipped clean, on time, no drama." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Testimonials" title={<>What clients say</>} />
        <div className="mt-12 grid md:grid-cols-3 gap-5 reveal">
          {items.map((it, idx) => (
            <div key={idx} className={`glass rounded-2xl p-6 transition-all ${idx === i ? "shadow-glow scale-[1.02]" : "opacity-80"}`}>
              <Quote className="h-6 w-6 text-cyan/60" />
              <p className="mt-3 text-sm leading-relaxed">{it.q}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-white font-semibold text-sm">{it.n[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{it.n}</div>
                  <div className="text-xs text-muted-foreground">{it.r}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-cyan text-cyan" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BLOG ---------- */
function Blog() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };
  return (
    <section id="blog" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeading eyebrow="Blog" title={<>Insights From <span className="gradient-text">The Field</span></>} align="left" />
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-foreground/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-foreground/10">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scroll-smooth reveal"
          style={{ scrollbarWidth: "thin" }}
        >
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] glass rounded-2xl overflow-hidden hover:shadow-glow transition group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-royal/20">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-medium bg-royal/60 backdrop-blur text-cyan border border-cyan/20">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-muted-foreground">{p.readTime} read</div>
                <h3 className="mt-2 font-display font-semibold leading-snug group-hover:gradient-text transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                <div className="mt-auto pt-4 text-sm font-medium text-cyan inline-flex items-center gap-1.5">
                  Read the full breakdown <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qs = [
    { q: "What's your typical turnaround?", a: "Most fixes ship in 48–72 hours. Full Shopify builds take 2–4 weeks depending on scope. I'll always give you a clear timeline upfront." },
    { q: "Do you work with Shopify Plus?", a: "Yes. I work across Shopify, Shopify Plus, Wix and Wix Studio. The same playbook applies — just at different scales." },
    { q: "How do you price ongoing work?", a: "Either fixed-scope projects or monthly retainers for performance, SEO and CRO partnerships. No hourly billing — outcomes only." },
    { q: "Can you take over an existing store?", a: "Always. I'll start with an audit, document everything, then ship improvements in clear sprints." },
    { q: "Will I work with you directly?", a: "Yes. You always work with me — no junior account managers, no agency middle layer." },
    { q: "What if I'm not happy with the work?", a: "Every project includes revision rounds and a satisfaction guarantee. If something's off, we fix it." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title={<>Common questions</>} />
        <div className="mt-10 space-y-3 reveal">
          {qs.map((it, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium">{it.q}</span>
                <span className={`h-6 w-6 grid place-items-center rounded-full bg-foreground/5 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{it.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent(`New inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:mubashelitespecialist@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contact" title={<>Ready to Fix Your Store? <span className="gradient-text">Let's Talk</span></>} />
        <div className="mt-12 grid md:grid-cols-2 gap-6 reveal">
          <div className="glass rounded-3xl p-8 space-y-4">
            <a href={EMAIL} className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-border hover:bg-foreground/5 transition">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold">Email Me</div>
                <div className="text-xs text-muted-foreground">mubashelitespecialist@gmail.com</div>
              </div>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-border hover:bg-foreground/5 transition">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white"><MessageSquare className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold">Chat on WhatsApp</div>
                <div className="text-xs text-muted-foreground">Usually replies within an hour</div>
              </div>
            </a>
            <a href={FIVERR} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-border hover:bg-foreground/5 transition">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white"><ExternalLink className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold">Hire Me on Fiverr</div>
                <div className="text-xs text-muted-foreground">Top-rated Shopify & Wix services</div>
              </div>
            </a>
          </div>
          <form onSubmit={submit} className="glass rounded-3xl p-8 space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">Your name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={80} className="mt-1 w-full bg-background/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={120} className="mt-1 w-full bg-background/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">What do you need?</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1500} rows={5} className="mt-1 w-full bg-background/30 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-primary text-white font-medium shadow-glow">
              {sent ? "Opening your email…" : "Send message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="font-display font-bold text-lg">Mubash <span className="gradient-text">Elite Specialist</span></div>
          <p className="mt-3 text-sm text-muted-foreground">Independent Shopify, Wix, SEO and AI growth partner for ambitious eCommerce brands.</p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["about","services","portfolio","pricing","blog","contact"].map((l) => (
              <li key={l}><button className="hover:text-foreground capitalize" onClick={() => scrollToId(l)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Services</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Shopify Development</li><li>Wix Studio</li><li>SEO & CRO</li><li>Klaviyo Email</li><li>AI Automation</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Connect</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={EMAIL} className="hover:text-foreground">Email</a></li>
            <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a></li>
            <li><a href={FIVERR} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Fiverr</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mubash Elite Specialist. All rights reserved.
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 z-40 h-12 w-12 grid place-items-center rounded-full glass hover:gradient-primary hover:text-white transition shadow-card"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/* ---------- SHARED ---------- */
function SectionHeading({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: React.ReactNode; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={`reveal ${align === "center" ? "text-center" : "text-left"}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground`}>
        {eyebrow}
      </div>
      <h2 className={`mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold ${align === "center" ? "max-w-3xl mx-auto" : ""}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-muted-foreground ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  );
}
