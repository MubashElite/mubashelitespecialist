import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ExternalLink, Mail, MessageSquare, ShoppingBag, Code2, Gauge,
  TrendingUp, Globe, Search, Mailbox, Bot, Wrench, ArrowLeftRight, Palette,
  ChevronLeft, ChevronRight, Check, Star, ArrowUp, Quote, Sparkles
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { ChatWidget } from "@/components/site/ChatWidget";
import { AuditTool } from "@/components/site/AuditTool";
import { Counter } from "@/components/site/Counter";
import { useReveal } from "@/components/site/useReveal";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mubash Elite Specialist — Shopify, Wix, SEO & AI Growth Partner" },
      { name: "description", content: "Independent Shopify Expert, Wix Specialist, SEO Consultant and AI Automation Engineer helping eCommerce brands ship better stores that actually convert." },
      { property: "og:title", content: "Mubash Elite Specialist — Premium eCommerce Consulting" },
      { property: "og:description", content: "Shopify, Wix, SEO, CRO and AI automation done right." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/17542504531";
const EMAIL = "mailto:mubashelitespecialist@gmail.com";
const FIVERR = "https://www.fiverr.com/users/shopifybash";

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
      <Services />
      <Process />
      <Portfolio />
      <CaseStudies />
      <Skills />
      <Audit />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs sm:text-sm animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          <span className="text-muted-foreground">Now booking — Q3 2026 consulting slots</span>
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.05s" }}>
          Helping eCommerce brands build{" "}
          <span className="gradient-text">better Shopify & Wix</span>{" "}
          experiences that convert.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.12s" }}>
          I'm <span className="text-foreground font-medium">Mubash Elite Specialist</span> — an independent Shopify Expert, Wix Specialist, SEO Consultant, AI Automation Engineer and eCommerce growth partner. I work with founders who care about craft, speed, and revenue.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <button onClick={() => scrollToId("portfolio")} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary text-white font-medium shadow-glow hover:opacity-95 transition">
            View Portfolio <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => scrollToId("pricing")} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 transition font-medium">
            View Pricing
          </button>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 transition font-medium">
            Book a Consultation
          </a>
          <a href={EMAIL} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 transition font-medium">
            Contact Me
          </a>
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
        <SectionHeading eyebrow="About" title={<>The story behind <span className="gradient-text">Mubash Elite Specialist</span></>} />
        <div className="mt-10 grid md:grid-cols-5 gap-8 items-start reveal">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I started in eCommerce the long way — as a small store owner trying to fix my own conversion problems. Seven years and a couple hundred projects later, I do that for brands every day: Shopify and Wix builds, SEO, CRO, and the AI automation that ties it all together.
            </p>
            <p>
              My approach is simple. I learn the business first, then design and build around what actually moves revenue. No template copy-paste, no inflated retainers, no vague reports. Just clear strategy, clean execution, and numbers I'm willing to be measured by.
            </p>
            <p>
              Most clients work with me as their long-term partner because the work compounds. A faster store today becomes higher rankings next quarter and lower acquisition cost the one after that. That's the loop I'm here to build with you.
            </p>
          </div>
          <div className="md:col-span-2 space-y-3">
            {[
              { t: "Direct access", d: "You work with me, not a junior account manager." },
              { t: "Honest scoping", d: "Realistic timelines and pricing — no surprises." },
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
function Services() {
  const items = [
    { i: ShoppingBag, t: "Shopify Store Design", d: "Conversion-focused, brand-true storefronts." },
    { i: Code2, t: "Shopify Development", d: "Custom themes, sections and apps built right." },
    { i: Wrench, t: "Shopify Custom Coding", d: "Liquid, JS, API — anything off-the-shelf can't do." },
    { i: Gauge, t: "Speed Optimization", d: "Real Core Web Vitals wins, not just Lighthouse." },
    { i: TrendingUp, t: "Conversion Rate Optimization", d: "Research-led testing roadmap that lifts revenue." },
    { i: Palette, t: "Wix Website Design", d: "Polished Wix sites for service-led businesses." },
    { i: Code2, t: "Wix Studio Development", d: "Velo-powered builds with real backend logic." },
    { i: Search, t: "SEO", d: "Strategy, on-page, content and authority building." },
    { i: Search, t: "Technical SEO", d: "Crawl, index, schema and Core Web Vitals." },
    { i: Globe, t: "Google Search Console Setup", d: "Clean setup and ongoing monitoring." },
    { i: Mailbox, t: "Email Marketing", d: "Flows, campaigns and lifecycle marketing." },
    { i: Mailbox, t: "Klaviyo Setup", d: "Account, flows, segments and reporting." },
    { i: Bot, t: "AI Automation", d: "Workflows that save your team real hours." },
    { i: Palette, t: "Landing Page Design", d: "High-intent pages built for paid traffic." },
    { i: Palette, t: "Store Redesign", d: "Brand and UX refresh without the rebuild risk." },
    { i: Wrench, t: "Website Maintenance", d: "Ongoing care, updates and small wins." },
    { i: ArrowLeftRight, t: "Store Migration", d: "Safe moves to Shopify with SEO preserved." },
    { i: Gauge, t: "Performance Optimization", d: "Frontend, theme and asset-level tuning." },
  ];
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Services" title={<>What I build, fix and grow</>} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white shadow-glow group-hover:scale-110 transition">
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

/* ---------- PROCESS ---------- */
function Process() {
  const steps = ["Discovery","Planning","Research","Design","Development","Optimization","Testing","Launch","Growth"];
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Process" title={<>A clear path from <span className="gradient-text">brief to growth</span></>} />
        <div className="mt-14 relative reveal">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal to-transparent" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s} className={`relative flex sm:items-center gap-4 ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
                <div className="sm:w-1/2 flex sm:justify-end pl-12 sm:pl-0">
                  <div className={`glass rounded-2xl px-5 py-4 max-w-md ${i % 2 ? "sm:ml-6" : "sm:mr-6"}`}>
                    <div className="text-xs text-muted-foreground">Phase {i + 1}</div>
                    <div className="font-display font-semibold">{s}</div>
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-8 w-8 rounded-full gradient-primary grid place-items-center text-white text-xs font-semibold shadow-glow">
                  {i + 1}
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
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
          <SectionHeading eyebrow="Portfolio" title={<>Twelve stores I'd be proud to ship</>} align="left" />
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10">
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

/* ---------- CASE STUDIES ---------- */
function CaseStudies() {
  const cases = [
    { t: "+184% revenue in 90 days", d: "Skincare DTC brand. Replatform to Shopify 2.0, full CRO sprint, Klaviyo flows rebuilt.", m: [{ l: "Conv. rate", v: "+62%" }, { l: "AOV", v: "+18%" }, { l: "LCP", v: "1.4s" }] },
    { t: "From 12s to 1.8s load time", d: "Apparel store on Shopify Plus, theme rebuild, image pipeline, third-party script audit.", m: [{ l: "Speed score", v: "98" }, { l: "Bounce", v: "-41%" }, { l: "CLS", v: "0.01" }] },
    { t: "5x organic traffic in 6 months", d: "Wellness brand. Technical SEO overhaul, content cluster strategy, schema rollout.", m: [{ l: "Clicks", v: "+412%" }, { l: "Top 10 KW", v: "+187" }, { l: "Pages indexed", v: "+96%" }] },
    { t: "$0 to $40k MRR subscription", d: "Coffee brand. Built subscription stack, onboarding flow, lifecycle email and CRO.", m: [{ l: "Subs", v: "1,240" }, { l: "Churn", v: "3.1%" }, { l: "LTV", v: "+58%" }] },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Case Studies" title={<>Real numbers from real projects</>} />
        <div className="mt-12 grid md:grid-cols-2 gap-5 reveal">
          {cases.map((c) => (
            <div key={c.t} className="glass rounded-2xl p-7 hover:shadow-glow transition">
              <div className="font-display text-2xl font-bold gradient-text">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {c.m.map((mm) => (
                  <div key={mm.l} className="rounded-xl bg-background/30 border border-white/10 p-3 text-center">
                    <div className="font-display font-semibold">{mm.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{mm.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
        <SectionHeading eyebrow="Skills" title={<>The stack I work in every day</>} />
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
        <SectionHeading eyebrow="Pricing" title={<>Simple, scoped, honest</>} subtitle="Every package includes a kickoff call, clear deliverables and direct access to me." />
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
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium transition ${t.best ? "gradient-primary text-white shadow-glow" : "glass hover:bg-white/10"}`}>
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
    { n: "Aisha B.", r: "CMO, Beauty Startup", q: "The Klaviyo setup alone paid for the project in the first month. Total pro to work with." },
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
  const posts = [
    { t: "Why your Shopify store is slow (and the fix nobody talks about)", c: "Performance", e: "App bloat and unoptimized themes silently kill conversion. Here's the audit I run on every new client store.", time: "6 min" },
    { t: "The Klaviyo flow stack every DTC brand should have", c: "Email", e: "Welcome, abandoned cart, browse abandonment, post-purchase. The exact setup I deploy to lift revenue 20%+.", time: "8 min" },
    { t: "Wix Studio for serious eCommerce: when it actually works", c: "Wix", e: "Wix isn't just for portfolios anymore. Here's where Wix Studio beats Shopify — and where it doesn't.", time: "5 min" },
    { t: "AI automation for store owners who hate spreadsheets", c: "AI", e: "Three workflows I build for almost every client to claw back 10+ hours a week.", time: "7 min" },
    { t: "Technical SEO checklist for Shopify in 2026", c: "SEO", e: "Schema, canonicals, sitemaps and the Core Web Vitals reality check your dev team is avoiding.", time: "9 min" },
    { t: "Landing pages that convert paid traffic at 5%+", c: "CRO", e: "The framework I use to build single-product landers that don't waste ad spend.", time: "6 min" },
  ];
  return (
    <section id="blog" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Blog" title={<>Notes from the field</>} />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {posts.map((p) => (
            <article key={p.t} className="glass rounded-2xl p-6 hover:shadow-glow transition group cursor-pointer" onClick={() => (window.location.href = EMAIL)}>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="px-2 py-0.5 rounded bg-royal/20 text-cyan">{p.c}</span>
                <span>{p.time} read</span>
              </div>
              <h3 className="mt-4 font-display font-semibold leading-snug group-hover:gradient-text transition">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.e}</p>
              <div className="mt-4 text-sm font-medium text-cyan inline-flex items-center gap-1.5">
                Talk to me about this <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
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
                <span className={`h-6 w-6 grid place-items-center rounded-full bg-white/5 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
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
        <SectionHeading eyebrow="Contact" title={<>Let's build something that converts</>} />
        <div className="mt-12 grid md:grid-cols-2 gap-6 reveal">
          <div className="glass rounded-3xl p-8 space-y-4">
            <a href={EMAIL} className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-white/10 hover:bg-white/5 transition">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold">Email Me</div>
                <div className="text-xs text-muted-foreground">mubashelitespecialist@gmail.com</div>
              </div>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-white/10 hover:bg-white/5 transition">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-white"><MessageSquare className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold">Chat on WhatsApp</div>
                <div className="text-xs text-muted-foreground">Usually replies within an hour</div>
              </div>
            </a>
            <a href={FIVERR} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-white/10 hover:bg-white/5 transition">
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
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={80} className="mt-1 w-full bg-background/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={120} className="mt-1 w-full bg-background/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">What do you need?</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1500} rows={5} className="mt-1 w-full bg-background/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
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
    <footer className="border-t border-white/10 mt-20">
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
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
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
