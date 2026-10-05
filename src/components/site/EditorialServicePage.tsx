import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleDollarSign, Layers3, RefreshCw, Search, Target, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

type RoutePath = "/contact" | "/portfolio" | "/services" | "/shopify-ecommerce" | "/social-media-marketing" | "/email-marketing";

type Focus = {
  title: string;
  description: string;
};

type CapabilityGroup = {
  title: string;
  items: string[];
};

type RelatedService = {
  label: string;
  to: RoutePath;
};

export function EditorialServicePage({
  eyebrow,
  title,
  italicTitle,
  description,
  image,
  imageAlt,
  trustLine,
  statement,
  focus,
  capabilities,
  process,
  related = [],
  ctaTitle,
  ctaText,
}: {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  trustLine: string;
  statement: string;
  focus: Focus[];
  capabilities: CapabilityGroup[];
  process: string[];
  related?: RelatedService[];
  ctaTitle: string;
  ctaText: string;
}) {
  const focusIcons = [Search, Target, CircleDollarSign];
  const capabilityIcons = [Layers3, Wrench, RefreshCw];
  const processIcons = [Search, Target, Wrench, RefreshCw];
  return (
    <main>
      <section className="border-b border-border pt-28 sm:pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pb-24">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase text-primary">
              <span className="h-px w-10 bg-primary" />
              {eyebrow}
            </div>
            <h1 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-[0.96] sm:text-7xl lg:text-[5.5rem]">
              {title}
              {italicTitle && <span className="block italic text-primary">{italicTitle}</span>}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-none px-6">
                <Link to="/contact">Work With Me <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-primary/40 bg-transparent px-6">
                <Link to="/portfolio">View Selected Work</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[430px] sm:min-h-[560px]">
            <div className="absolute inset-x-0 top-0 h-[88%] overflow-hidden border border-border bg-secondary shadow-elegant sm:left-[8%]">
              <img src={image} alt={imageAlt} width={1152} height={768} className="h-full w-full object-cover object-left" />
            </div>
            <div className="absolute bottom-0 right-0 max-w-sm border border-border bg-card p-5 shadow-elegant sm:p-7">
              <span className="text-[10px] font-semibold uppercase text-primary">Direct specialist access</span>
              <p className="mt-3 font-display text-2xl leading-tight">{trustLine}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase text-primary">Commercial focus</p>
            <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-tight sm:text-6xl">{statement}</h2>
          </div>
          <div className="border-t border-border">
            {focus.map((item, index) => (
              <article key={item.title} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[46px_0.85fr_1.15fr] sm:items-start sm:px-3">
                <span className="flex items-center gap-2 text-xs text-primary">
                  {(() => { const Icon = focusIcons[index % focusIcons.length]; return <Icon className="h-4 w-4" aria-hidden="true" />; })()}
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase text-primary">Capabilities</p>
            <h2 className="mt-5 font-display text-4xl font-medium sm:text-6xl">Clear work. Commercial purpose.</h2>
          </div>
          <div className="mt-12 grid border-l border-t border-border md:grid-cols-3">
            {capabilities.map((group, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              return (
              <article key={group.title} className="border-b border-r border-border p-6 sm:p-8">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-medium">{group.title}</h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[11px] font-semibold uppercase text-primary">Working method</p>
          <ol className="mt-8 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = processIcons[index % processIcons.length];
              return (
              <li key={step} className="border-b border-r border-border p-6">
                <span className="flex items-center justify-between text-xs text-primary"><span>{String(index + 1).padStart(2, "0")}</span><Icon className="h-4 w-4" aria-hidden="true" /></span>
                <p className="mt-7 font-display text-2xl">{step}</p>
              </li>
              );
            })}
          </ol>
          {related.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <span className="text-muted-foreground">Related expertise</span>
              {related.map((service) => (
                <Link key={service.to} to={service.to} className="inline-flex items-center gap-2 font-semibold hover:text-primary">
                  {service.label} <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase text-primary">Start with clarity</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">{ctaTitle}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{ctaText}</p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-none px-7">
            <Link to="/contact">Work With Me <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
}