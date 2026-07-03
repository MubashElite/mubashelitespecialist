import blog1 from "@/assets/blog1.jpg.asset.json";
import blog2 from "@/assets/blog2.jpg.asset.json";
import blog3 from "@/assets/blog3.jpg.asset.json";
import blog4 from "@/assets/blog4.jpg.asset.json";
import blog5 from "@/assets/blog5.jpg.asset.json";
import blog6 from "@/assets/blog6.jpg.asset.json";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  publishedAt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  keyTakeaways: string[];
  cta: { headline: string; sub: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "shopify-store-slow-fix",
    title: "Why Your Shopify Store Is Slow (And The Fix Nobody Talks About)",
    category: "Performance",
    excerpt:
      "App bloat and unoptimized themes silently kill conversion. Here's the audit I run on every new client store.",
    readTime: "6 min",
    image: blog1.url,
    publishedAt: "2026-05-14",
    intro:
      "A slow Shopify store isn't a design problem. It's a revenue problem. Every additional second of load time cuts conversions by 7% on average, and most stores I audit are shipping 4-8 second load times without realizing it. Here's exactly what's dragging you down and how to fix it in a weekend.",
    sections: [
      {
        heading: "The real culprit: app stacking",
        body: [
          "Most Shopify stores install 15-25 apps over their lifetime. Each one injects JavaScript, CSS, and often blocking third-party requests into every page. Even 'lightweight' apps like reviews, upsells, and popups add 100-400ms each.",
          "The fix isn't to uninstall everything. It's to audit which apps actually earn revenue and remove the rest. I typically cut app count by 40% in the first week and reclaim 1.5-3 seconds of load time immediately.",
        ],
      },
      {
        heading: "Theme code that's silently killing you",
        body: [
          "Premium themes ship with features you don't use — mega menus, quick view, complex product galleries. All that code loads on every page. A properly optimized theme removes what you don't need, defers what isn't critical, and lazy-loads everything below the fold.",
          "Liquid loops with unnecessary metafield calls, uncompressed hero images, and render-blocking web fonts round out the top offenders.",
        ],
      },
      {
        heading: "Core Web Vitals: the Google penalty most stores miss",
        body: [
          "Google now uses LCP, INP, and CLS as ranking signals. Your store can be beautifully designed and still be invisible in search because CLS is above 0.1 or INP is above 200ms. I fix these by nailing image dimensions, preloading fonts, and eliminating layout shift from lazy-loaded content.",
        ],
      },
    ],
    keyTakeaways: [
      "Audit and remove low-value apps first — this alone can shave 2+ seconds",
      "Strip unused theme features and defer non-critical JavaScript",
      "Optimize LCP images with explicit width/height and modern formats (AVIF/WebP)",
      "Preload fonts and eliminate CLS on above-the-fold sections",
    ],
    cta: {
      headline: "Want me to audit your store's speed personally?",
      sub: "I'll deliver a video walkthrough of every issue and a prioritized fix list within 48 hours.",
    },
  },
  {
    slug: "klaviyo-flow-stack-dtc",
    title: "The Klaviyo Flow Stack Every DTC Brand Should Have",
    category: "Email",
    excerpt:
      "Welcome, abandoned cart, browse abandonment, post-purchase. The exact setup I deploy to lift revenue 20%+.",
    readTime: "8 min",
    image: blog2.url,
    publishedAt: "2026-05-22",
    intro:
      "Klaviyo can drive 25-40% of your total store revenue if the automation stack is set up correctly. Most stores I audit are running only 2-3 flows and leaving 60% of email revenue on the table. Here's the exact stack I build for every DTC client.",
    sections: [
      {
        heading: "Flow 1: Welcome series (3-5 emails)",
        body: [
          "Fired the moment someone joins your list. First email delivers whatever you promised (discount code, guide, first-look access) within 15 minutes. Emails 2-5 build brand story, showcase bestsellers, and handle objections.",
          "Expected result: 8-15% of new subscribers convert within 14 days.",
        ],
      },
      {
        heading: "Flow 2: Abandoned cart (3 emails, 3 SMS)",
        body: [
          "The single highest-ROI flow you'll ever run. Email 1 at 1 hour with product image and one-click checkout. Email 2 at 24 hours with social proof. Email 3 at 72 hours with a soft discount if margin allows.",
          "Layer SMS on top for a 20-30% recovery rate combined.",
        ],
      },
      {
        heading: "Flow 3: Browse abandonment",
        body: [
          "Fires when a subscriber views a product 2+ times without adding to cart. Softer than cart abandonment — you're educating, not selling. Reviews, comparison content, and 'people also bought' work well here.",
        ],
      },
      {
        heading: "Flow 4: Post-purchase (thank you + review + replenishment)",
        body: [
          "Thank-you email 1 hour after purchase. Shipping confirmation. Review request 5-7 days after delivery. Replenishment reminder timed to your product's usage cycle. This is where LTV is built.",
        ],
      },
      {
        heading: "Flow 5: Winback",
        body: [
          "Triggered 60-90 days after last purchase for customers with no activity. Two emails plus SMS. Escalating incentive. Recovers 5-10% of lapsing customers on autopilot.",
        ],
      },
    ],
    keyTakeaways: [
      "5 flows is the minimum viable stack — welcome, cart, browse, post-purchase, winback",
      "Layer SMS on your two highest-intent flows (cart + welcome) for compound lift",
      "Segment aggressively — engaged vs unengaged should never see the same emails",
      "Test subject lines and send times monthly, not seasonally",
    ],
    cta: {
      headline: "Want this stack built and shipping in your Klaviyo this week?",
      sub: "I set up the full flow architecture, copy, and design in 5-7 days for most brands.",
    },
  },
  {
    slug: "wix-studio-ecommerce",
    title: "Wix Studio For Serious eCommerce: When It Actually Works",
    category: "Wix",
    excerpt:
      "Wix isn't just for portfolios anymore. Here's where Wix Studio beats Shopify — and where it doesn't.",
    readTime: "5 min",
    image: blog3.url,
    publishedAt: "2026-06-01",
    intro:
      "Wix Studio has quietly become a legitimate competitor to Shopify for a specific type of merchant. It isn't right for everyone, but if you fit the profile, you'll ship faster, spend less, and get a better-looking storefront. Here's the honest breakdown.",
    sections: [
      {
        heading: "Where Wix Studio wins",
        body: [
          "Design flexibility without a developer. Wix Studio's visual editor lets you build genuinely custom layouts that would require a custom Shopify theme (and $8-15k) to replicate.",
          "Lower total cost of ownership for stores under 500 SKUs and under $500k annual revenue. No app subscriptions eating your margin.",
          "Built-in booking, membership, and content features that would need multiple Shopify apps.",
        ],
      },
      {
        heading: "Where Shopify still wins",
        body: [
          "High-volume operations. If you're processing 1000+ orders per month, Shopify's ecosystem for inventory, fulfillment, and multi-channel selling is unmatched.",
          "Complex product configurations, subscriptions at scale, and international multi-currency setups still favor Shopify.",
        ],
      },
      {
        heading: "The sweet spot for Wix Studio",
        body: [
          "Design-forward brands. Service + product hybrids. Editorial-style stores. Anyone who cares more about brand experience than raw operational scale in the first two years.",
        ],
      },
    ],
    keyTakeaways: [
      "Wix Studio is genuinely competitive for design-led brands under 500 SKUs",
      "Cost of ownership is often 40-60% lower than an equivalent Shopify build",
      "Migrate to Shopify once you cross ~1000 orders/month or need complex operations",
      "Don't choose a platform based on hype — match it to your operational reality",
    ],
    cta: {
      headline: "Not sure which platform fits your brand?",
      sub: "Book a free 20-minute call and I'll give you a straight answer based on your actual numbers.",
    },
  },
  {
    slug: "ai-automation-store-owners",
    title: "AI Automation For Store Owners Who Hate Spreadsheets",
    category: "AI",
    excerpt:
      "Three workflows I build for almost every client to claw back 10+ hours a week.",
    readTime: "7 min",
    image: blog4.url,
    publishedAt: "2026-06-10",
    intro:
      "You didn't start a store to spend Sundays updating spreadsheets. Here are the three AI-powered automations I build for nearly every client that give them their weekends back and reduce human error to near zero.",
    sections: [
      {
        heading: "Automation 1: Product description generator",
        body: [
          "Feed the system a product name, key attributes, and target audience. It generates SEO-optimized, on-brand product descriptions in your voice, complete with meta titles and structured data.",
          "Time saved: 15-30 minutes per SKU. For a store adding 20 products a month, that's 5-10 hours reclaimed.",
        ],
      },
      {
        heading: "Automation 2: Customer support triage",
        body: [
          "AI reads incoming emails, categorizes them (shipping, returns, product question, complaint), drafts a response using your voice and policies, and either sends automatically or queues for one-click human approval.",
          "Response times drop from hours to seconds. Support workload drops by 60-75%.",
        ],
      },
      {
        heading: "Automation 3: Inventory & reorder alerts",
        body: [
          "Sales velocity, seasonality, and lead time flow into a model that predicts when to reorder and how much. Alerts hit Slack or email before you stock out. No more emergency air freight bills.",
        ],
      },
    ],
    keyTakeaways: [
      "Start with product descriptions — highest time savings, lowest risk",
      "Support triage delivers the biggest CX win alongside the time saved",
      "Predictive reorder alerts eliminate the two most expensive inventory mistakes",
      "Build once, save hours every week for the life of the store",
    ],
    cta: {
      headline: "Want these three workflows deployed in your store?",
      sub: "I build the full stack in 10-14 days including training on your product catalog and brand voice.",
    },
  },
  {
    slug: "shopify-technical-seo-2026",
    title: "Technical SEO Checklist For Shopify In 2026",
    category: "SEO",
    excerpt:
      "Schema, canonicals, sitemaps and the Core Web Vitals reality check your dev team is avoiding.",
    readTime: "9 min",
    image: blog5.url,
    publishedAt: "2026-06-18",
    intro:
      "Shopify handles basic SEO for you. It does not handle the technical layer that separates stores ranking on page 1 from stores buried on page 5. Here's the 2026 checklist I run on every store to unlock organic traffic that most competitors are missing.",
    sections: [
      {
        heading: "Schema markup: beyond Product",
        body: [
          "Every product page needs Product schema with offers, aggregateRating, and review nested correctly. Add BreadcrumbList on collection pages, FAQPage on product pages with structured Q&A, and Organization on the homepage.",
          "Correct schema drives rich results, which drive 30-50% higher CTR at the same ranking position.",
        ],
      },
      {
        heading: "Canonical tags and duplicate content",
        body: [
          "Shopify creates duplicate URLs for products accessible via /products/ and /collections/handle/products/. If canonicals aren't set correctly, you're competing with yourself. Filter and sort parameters need canonical treatment too.",
        ],
      },
      {
        heading: "Sitemap hygiene and internal linking",
        body: [
          "Submit and monitor sitemap.xml in Search Console. Remove low-value pages (tags, filtered collections) from indexing. Build internal links from high-authority pages (homepage, top collections) to your money pages using descriptive anchor text.",
        ],
      },
      {
        heading: "Core Web Vitals — the ranking multiplier",
        body: [
          "LCP under 2.5s, INP under 200ms, CLS under 0.1. Miss any of these and Google actively demotes you. Fix with image optimization, font preloading, and eliminating render-blocking scripts.",
        ],
      },
    ],
    keyTakeaways: [
      "Schema markup unlocks rich results and 30-50% higher CTR",
      "Fix canonical issues before spending on content — you're competing with yourself",
      "Prune your sitemap: fewer indexed pages of higher quality beats bloat",
      "Core Web Vitals are ranking multipliers, not just UX metrics",
    ],
    cta: {
      headline: "Want a full technical SEO audit of your store?",
      sub: "I deliver a prioritized action plan with expected traffic lift in 5 business days.",
    },
  },
  {
    slug: "high-converting-landing-pages",
    title: "Landing Pages That Convert Paid Traffic At 5%+",
    category: "CRO",
    excerpt:
      "The framework I use to build single-product landing pages that don't waste ad spend.",
    readTime: "6 min",
    image: blog6.url,
    publishedAt: "2026-06-25",
    intro:
      "Most stores send paid traffic to a product page and wonder why CVR sits at 1.2%. A dedicated landing page purpose-built for your top ad creative routinely hits 4-6% CVR. Here's the framework I've refined across 40+ builds.",
    sections: [
      {
        heading: "Section 1: The above-the-fold decision",
        body: [
          "One promise, one hero visual, one CTA. Sub-headline handles the biggest objection. Trust badges (guarantees, ratings, press) sit directly under the CTA. If a visitor can't understand the offer in 5 seconds, you've lost them.",
        ],
      },
      {
        heading: "Section 2: Problem agitation into solution",
        body: [
          "Name the pain your customer is feeling in their own language. Amplify the cost of doing nothing. Then reveal your product as the specific, believable solution — never as a magic bullet.",
        ],
      },
      {
        heading: "Section 3: Proof stack",
        body: [
          "Video testimonials outperform text 3:1. Real customer photos beat stock imagery every time. Show before/after, quantified results, and press logos in that order.",
        ],
      },
      {
        heading: "Section 4: Offer stack + risk reversal",
        body: [
          "Stack bonuses. Anchor value. Present price. Then remove risk with a real guarantee (60-day money back, free returns). The offer stack should feel like a no-brainer.",
        ],
      },
      {
        heading: "Section 5: FAQ + final CTA",
        body: [
          "FAQ handles remaining objections. Final CTA reminds them of the promise and the risk-free offer. Sticky mobile CTA on scroll is non-negotiable.",
        ],
      },
    ],
    keyTakeaways: [
      "One promise, one visual, one CTA above the fold — always",
      "Problem-solution-proof-offer-FAQ is the proven flow",
      "Video and real-customer photos beat everything else for social proof",
      "Sticky mobile CTA is worth 15-25% CVR lift on its own",
    ],
    cta: {
      headline: "Need a landing page that converts your ad spend?",
      sub: "I design, write, and build fully-conversion-optimized landers in 7-10 days.",
    },
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
