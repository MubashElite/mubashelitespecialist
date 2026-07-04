import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowLeft, Gauge, TrendingUp, Search, Smartphone,
  CheckCircle2, Zap, BarChart3, Globe, Layers, Sparkles, MessageSquare,
  Play, X, Film,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";

import { useReveal } from "@/components/site/useReveal";
import port1 from "@/assets/port1.jpg.asset.json";
import port2 from "@/assets/port2.jpg.asset.json";
import port3 from "@/assets/port3.jpg.asset.json";
import port4 from "@/assets/port4.jpg.asset.json";
import port5 from "@/assets/port5.jpg.asset.json";
import port6 from "@/assets/port6.jpg.asset.json";
import port7 from "@/assets/port7.jpg.asset.json";
import port8 from "@/assets/port8.jpg.asset.json";

const PAGE_URL = "https://mubashelitespecialist.lovable.app/sales-proof";
const PAGE_TITLE = "Results & Proof | Mubash Elite Specialist";
const PAGE_DESCRIPTION =
  "Detailed proof of eCommerce optimization, technical SEO, performance improvements and Shopify/Wix projects delivered by Mubash Elite Specialist.";
const WHATSAPP = "https://wa.me/17542504531?text=Hi%20Mubash%2C%20I%27d%20like%20to%20start%20a%20project.";

export const Route = createFileRoute("/sales-proof")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: SalesProofPage,
});

/* ---------- DATA ---------- */
const PERFORMANCE = [
  {
    name: "Skincare DTC — Shopify Plus",
    image: port1.url,
    before: { speed: 38, lcp: "6.4s", cvr: "1.1%" },
    after: { speed: 96, lcp: "1.4s", cvr: "3.2%" },
    notes: "Theme rebuild, image pipeline, third-party script audit, critical CSS.",
  },
  {
    name: "Apparel Brand — Shopify 2.0",
    image: port2.url,
    before: { speed: 44, lcp: "5.2s", cvr: "1.6%" },
    after: { speed: 98, lcp: "1.6s", cvr: "3.9%" },
    notes: "Section-based rebuild, deferred JS, WebP + AVIF, PDP CRO sprint.",
  },
  {
    name: "Wellness Store — Wix Studio",
    image: port3.url,
    before: { speed: 41, lcp: "7.1s", cvr: "0.9%" },
    after: { speed: 92, lcp: "2.1s", cvr: "2.8%" },
    notes: "Wix Studio migration, media optimization, checkout friction removal.",
  },
];

const SEO_PROOF = [
  { metric: "Impressions (90d)", before: "18.2K", after: "412K", delta: "+2163%" },
  { metric: "Clicks (90d)", before: "612", after: "9,840", delta: "+1508%" },
  { metric: "Indexed Pages", before: "48", after: "612", delta: "+1175%" },
  { metric: "Avg. Position", before: "38.4", after: "9.1", delta: "-29.3" },
  { metric: "Core Web Vitals", before: "12% good", after: "94% good", delta: "+82pp" },
  { metric: "Crawl Errors", before: "184", after: "3", delta: "-98%" },
];

const SEO_FIXES = [
  "Fixed 184 crawl errors and duplicate canonical conflicts",
  "Rolled out Product, Article, FAQ and Breadcrumb schema sitewide",
  "Rebuilt XML sitemap and submitted to Google Search Console",
  "Consolidated 40+ thin pages into topical clusters",
  "Migrated to HTTPS and fixed mixed-content warnings",
  "Optimized meta titles + descriptions on 200+ URLs",
];

const OPTIMIZATION = [
  {
    title: "Product page redesign",
    image: port5.url,
    before: "Cluttered PDP, no trust signals, hidden reviews, weak CTA hierarchy.",
    after: "Sticky ATC, above-fold reviews, size guide modal, benefit-led copy.",
    result: "+62% conversion rate, +18% AOV",
  },
  {
    title: "Mobile checkout rebuild",
    image: port6.url,
    before: "5-step form, no autofill, cart abandonment 78%.",
    after: "One-page express checkout, Shop Pay, Apple Pay, guest flow.",
    result: "-34% abandonment, +41% mobile revenue",
  },
  {
    title: "Homepage UX overhaul",
    image: port7.url,
    before: "Generic hero, no clear value prop, 12s LCP, high bounce.",
    after: "Editorial hero, curated collections, 1.8s LCP, category shortcuts.",
    result: "-41% bounce, +2.4x pages/session",
  },
];

const PROJECTS = [
  {
    type: "Shopify Plus Rebuild",
    challenge: "Legacy theme, 12s load time, checkout dropping 78% on mobile.",
    work: "Full theme rebuild on Dawn base, image pipeline, Shop Pay, custom sections, Klaviyo flows.",
    outcome: "1.8s LCP, +184% revenue in 90 days, mobile CVR from 1.1% to 3.2%.",
  },
  {
    type: "Wix Studio Launch",
    challenge: "Founder needed a premium presence in 3 weeks for a product launch.",
    work: "Wix Studio design system, custom code widgets, SEO foundation, email capture.",
    outcome: "Shipped on day 19. 4.1x traffic in first month vs. previous site.",
  },
  {
    type: "Technical SEO Overhaul",
    challenge: "612 pages, 184 crawl errors, no schema, average position 38.",
    work: "Full technical audit, schema rollout, sitemap rebuild, content consolidation.",
    outcome: "+2163% impressions, average position 9.1, 94% Core Web Vitals good.",
  },
  {
    type: "CRO Sprint",
    challenge: "Healthy traffic, low conversion (1.6%). Weak PDP, no urgency, no reviews.",
    work: "PDP redesign, sticky ATC, reviews module, checkout friction removal, A/B tests.",
    outcome: "CVR 1.6% → 3.9%, AOV +22%, revenue +2.6x with same traffic.",
  },
  {
    type: "AI Automation Buildout",
    challenge: "Team drowning in support tickets, manual order tagging, no lifecycle emails.",
    work: "AI support agent, Zapier + Make flows, Klaviyo lifecycle series, order tagging bot.",
    outcome: "-68% support load, +34% repeat purchase, 20 hrs/week freed.",
  },
  {
    type: "Subscription Stack",
    challenge: "Coffee brand wanted subscriptions but zero infrastructure.",
    work: "Recharge integration, subscription-first PDP, onboarding flow, churn recovery.",
    outcome: "$0 → $40k MRR in 6 months, 3.1% churn, +58% LTV.",
  },
];

/* ---------- COMPONENTS ---------- */
function SectionHeading({
  eyebrow, title, description,
}: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center reveal">
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-cyan">
        <Sparkles className="h-3 w-3" /> {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-royal/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-cyan/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-cyan">
          <BarChart3 className="h-3 w-3" /> Results & Proof
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          eCommerce Growth, Optimization <span className="gradient-text">& Performance Proof</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore detailed examples of optimization work, technical improvements, and eCommerce projects — the real numbers behind the promises.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href={WHATSAPP}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white px-6 py-3 text-sm font-semibold shadow-glow hover:opacity-95 transition"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#performance"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
          >
            See the numbers
          </a>
        </div>
      </div>
    </section>
  );
}

function PerformanceShowcase() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="performance" ref={ref} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Performance Showcase"
          title={<>Speed, conversion & revenue lifts</>}
          description="Dashboard-style snapshots from live optimization projects — before and after the sprint."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {PERFORMANCE.map((p) => (
            <div key={p.name} className="reveal glass rounded-2xl p-6 hover:shadow-glow transition">
              <div className="flex items-center gap-2 text-xs text-cyan">
                <Gauge className="h-4 w-4" /> Optimization report
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">{p.name}</h3>
              <div className="mt-4 rounded-xl overflow-hidden border border-white/5">
                <img src={p.image} alt={`${p.name} analytics dashboard`} loading="lazy" className="w-full h-auto block" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { l: "PageSpeed", b: p.before.speed, a: p.after.speed },
                  { l: "LCP", b: p.before.lcp, a: p.after.lcp },
                  { l: "CVR", b: p.before.cvr, a: p.after.cvr },
                ].map((m) => (
                  <div key={m.l} className="rounded-xl bg-background/40 border border-white/5 p-3 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                    <div className="mt-1 text-xs text-muted-foreground line-through">{m.b}</div>
                    <div className="text-lg font-display font-bold gradient-text">{m.a}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{p.notes}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                <TrendingUp className="h-4 w-4" /> Deployed & verified in production
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoProof() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technical SEO Proof"
          title={<>Search Console wins that compound</>}
          description="90-day snapshot from a technical SEO overhaul — indexing, rankings and Core Web Vitals."
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="reveal glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-xs text-cyan">
              <Search className="h-4 w-4" /> Search Console — 90 day
            </div>
            <div className="mt-5 divide-y divide-white/5">
              {SEO_PROOF.map((r) => (
                <div key={r.metric} className="grid grid-cols-4 items-center py-3 text-sm">
                  <div className="col-span-2 text-muted-foreground">{r.metric}</div>
                  <div className="text-xs text-muted-foreground line-through">{r.before}</div>
                  <div className="text-right font-display font-semibold">
                    {r.after} <span className="ml-1 text-xs text-emerald-400">{r.delta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-xs text-cyan">
              <Zap className="h-4 w-4" /> Technical fixes shipped
            </div>
            <ul className="mt-5 space-y-3">
              {SEO_FIXES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="reveal glass rounded-2xl p-3 overflow-hidden">
            <img src={port4.url} alt="Shopify analytics dashboard with +340% growth" loading="lazy" className="w-full h-auto rounded-xl block" />
          </div>
          <div className="reveal glass rounded-2xl p-3 overflow-hidden">
            <img src={port8.url} alt="Shopify overview dashboard with sales and conversion metrics" loading="lazy" className="w-full h-auto rounded-xl block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function OptimizationResults() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Website Optimization"
          title={<>Before & after that customers feel</>}
          description="UX, mobile and conversion improvements — laid out side-by-side."
        />
        <div className="mt-14 space-y-6">
          {OPTIMIZATION.map((o) => (
            <div key={o.title} className="reveal glass rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-2 text-xs text-cyan">
                <Smartphone className="h-4 w-4" /> {o.title}
              </div>
              <div className="mt-5 rounded-xl overflow-hidden border border-white/5">
                <img src={o.image} alt={`${o.title} dashboard result`} loading="lazy" className="w-full h-auto block" />
              </div>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/5 bg-background/40 p-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Before</div>
                  <p className="mt-2 text-sm">{o.before}</p>
                </div>
                <div className="rounded-xl border border-cyan/30 bg-royal/10 p-5">
                  <div className="text-[10px] uppercase tracking-widest text-cyan">After</div>
                  <p className="mt-2 text-sm">{o.after}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400">
                <TrendingUp className="h-4 w-4" /> {o.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBreakdown() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Project Breakdown"
          title={<>Anatomy of a delivered project</>}
          description="Each card: the project type, the challenge, the work I shipped, and the outcome."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div key={p.type} className="reveal glass rounded-2xl p-6 lg:p-7 hover:shadow-glow transition">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-md bg-royal/20 text-cyan">{p.type}</span>
              </div>
              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Layers className="h-3 w-3" /> Challenge
                  </div>
                  <p className="mt-1">{p.challenge}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Globe className="h-3 w-3" /> Work completed
                  </div>
                  <p className="mt-1">{p.work}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan">
                    <TrendingUp className="h-3 w-3" /> Outcome
                  </div>
                  <p className="mt-1 font-medium">{p.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-royal/20 via-transparent to-cyan/10" />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-cyan">
            <MessageSquare className="h-3 w-3" /> Ready when you are
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Your store deserves the same numbers.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell me about the store, the goal and the timeline. I'll come back with a clear plan and a fixed quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={WHATSAPP}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white px-7 py-3.5 text-sm font-semibold shadow-glow hover:opacity-95 transition"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SalesProofPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PerformanceShowcase />
        <SeoProof />
        <OptimizationResults />
        <ProjectBreakdown />
        <CTA />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mubash Elite Specialist — All rights reserved.
      </footer>
    </div>
  );
}
