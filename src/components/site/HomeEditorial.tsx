import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait-cutout.png";
import shopifyProof from "@/assets/port7.jpg";
import growthProof from "@/assets/port8.jpg";
import storefrontProof from "@/assets/blog3.jpg";

const servicePaths = [
  {
    number: "01",
    title: "Storefront Direction",
    text: "Shopify design with stronger hierarchy, trust and buying flow.",
    to: "/shopify-ecommerce" as const,
  },
  {
    number: "02",
    title: "Conversion Architecture",
    text: "Sharper product pages and fewer reasons to leave before checkout.",
    to: "/shopify-ecommerce" as const,
  },
  {
    number: "03",
    title: "Demand Systems",
    text: "Social and email journeys that return attention to revenue.",
    to: "/services" as const,
  },
];

const platforms = ["Shopify", "Klaviyo", "Meta", "Google", "Wix Studio"];

function EditorialLink({ to, children }: { to: "/portfolio" | "/services" | "/about" | "/contact" | "/shopify-ecommerce"; children: React.ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground">
      <span>{children}</span>
      <span className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-12" />
      <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function HomeEditorial() {
  return (
    <main className="home-editorial">
      <section className="relative min-h-[min(900px,100svh)] overflow-hidden border-b border-border pt-28 sm:pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-8 lg:pb-20">
          <div className="relative z-10 lg:pb-10">
            <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase text-primary">
              <span className="h-px w-10 bg-primary" />
              Shopify growth specialist
            </div>
            <h1 className="max-w-3xl font-display text-[3.6rem] font-medium leading-[0.92] sm:text-7xl lg:text-[6.8rem]">
              Building
              <span className="block pl-[12%] italic text-primary">digital</span>
              <span className="block">flagships.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              Shopify stores shaped for buying confidence, clean journeys and sustainable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-none px-6">
                <Link to="/contact">Work With Me <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-primary/40 bg-transparent px-6">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[510px] sm:min-h-[650px] lg:min-h-[680px]">
            <div className="absolute left-[2%] top-0 h-[85%] w-[82%] overflow-hidden border border-border bg-secondary shadow-elegant sm:left-[9%]">
              <img src={shopifyProof} alt="Shopify analytics and commerce optimization work" width={1152} height={768} className="h-full w-full object-cover object-left transition-transform duration-700 hover:scale-[1.02]" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 w-[70%] border border-border bg-card p-5 shadow-elegant sm:w-[58%] sm:p-7">
              <span className="text-[10px] font-semibold uppercase text-primary">The commercial lens</span>
              <p className="mt-3 font-display text-2xl leading-tight sm:text-3xl">Every decision should make the store easier to trust and easier to buy from.</p>
              <Link to="/portfolio" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
                Selected work <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 border-t border-border px-5 py-5 text-[10px] font-semibold uppercase text-muted-foreground sm:px-8">
          <span className="text-primary">Working across</span>
          {platforms.map((platform) => <span key={platform}>{platform}</span>)}
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase text-primary">Commercial craft</p>
              <h2 className="mt-5 max-w-sm font-display text-4xl font-medium leading-tight sm:text-6xl">Not decoration. Direction.</h2>
            </div>
            <div className="border-t border-border">
              {servicePaths.map((service) => (
                <Link key={service.number} to={service.to} className="group grid gap-4 border-b border-border py-7 transition-colors hover:bg-secondary/35 sm:grid-cols-[48px_0.8fr_1.2fr_24px] sm:items-center sm:px-4">
                  <span className="text-xs text-primary">{service.number}</span>
                  <h3 className="font-display text-2xl font-medium">{service.title}</h3>
                  <p className="max-w-md text-sm leading-6 text-muted-foreground">{service.text}</p>
                  <ArrowRight className="hidden h-4 w-4 text-primary transition-transform group-hover:translate-x-1 sm:block" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-end"><EditorialLink to="/services">View all capabilities</EditorialLink></div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase text-primary">Selected work</p>
              <h2 className="mt-4 font-display text-4xl font-medium sm:text-6xl">Proof, composed.</h2>
            </div>
            <div className="hidden sm:block"><EditorialLink to="/portfolio">Explore projects</EditorialLink></div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <Link to="/case-studies" className="group relative block min-h-[430px] overflow-hidden border border-border bg-card sm:min-h-[600px]">
              <img src={growthProof} alt="Shopify store analytics case study" width={1152} height={768} className="h-full w-full object-cover object-left transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-x-0 bottom-0 bg-background/95 p-5 backdrop-blur sm:p-7">
                <span className="text-[10px] font-semibold uppercase text-primary">Commerce optimization</span>
                <div className="mt-2 flex items-center justify-between gap-4"><h3 className="font-display text-2xl sm:text-3xl">Sharper decisions from real store signals.</h3><ArrowRight className="h-5 w-5 shrink-0 text-primary" /></div>
              </div>
            </Link>
            <div className="grid gap-5">
              <Link to="/portfolio" className="group relative min-h-[280px] overflow-hidden border border-border bg-card">
                <img src={storefrontProof} alt="Premium e-commerce storefront shown on a laptop" width={768} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-x-0 bottom-0 bg-background/95 px-5 py-4 backdrop-blur"><span className="text-sm font-semibold">Storefront experience</span></div>
              </Link>
              <div className="flex min-h-[240px] flex-col justify-between border border-primary/30 bg-secondary p-6 sm:p-8">
                <span className="text-[10px] font-semibold uppercase text-primary">Built around the buyer</span>
                <p className="font-display text-3xl leading-tight">Clarity earns attention. Confidence earns the checkout.</p>
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold">View case studies <ExternalLink className="h-4 w-4 text-primary" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:hidden"><EditorialLink to="/portfolio">Explore projects</EditorialLink></div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto h-[420px] w-full max-w-md overflow-hidden border border-border bg-secondary sm:h-[540px]">
            <div className="absolute inset-x-8 top-8 h-px bg-primary/60" />
            <img src={portrait} alt="Mubash, Shopify and e-commerce specialist" width={700} height={700} className="h-full w-full object-contain object-bottom" />
          </div>
          <div className="lg:pl-10">
            <p className="text-[11px] font-semibold uppercase text-primary">Independent specialist</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-6xl">Senior thinking. Direct access. No agency theatre.</h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">I shape the store, customer journey and growth system as one connected commercial experience.</p>
            <div className="mt-8"><EditorialLink to="/about">Meet Mubash</EditorialLink></div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 border-y border-primary/30 py-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase text-primary">Your next move</p>
              <h2 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.98] sm:text-7xl">Make the store feel worth choosing.</h2>
            </div>
            <Button asChild size="lg" className="h-13 rounded-none px-7">
              <Link to="/contact">Start a Conversation <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}