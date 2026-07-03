import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://mubashelitespecialist.lovable.app";
const LOGO_URL = `${SITE_URL}/favicon.png`;
const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/rb0zggpZa0hb5EOjUYl7sodNSUh2/social-images/social-1782785202870-WhatsApp_Image_2026-06-29_at_15.06.21.webp";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Mubash Elite Specialist" },
      { name: "publisher", content: "Mubash Elite Specialist" },
      { name: "theme-color", content: "#0b1230" },
      { name: "color-scheme", content: "dark light" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mubash Elite Specialist" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@shopifybash" },
      { name: "twitter:site", content: "@shopifybash" },
      { name: "application-name", content: "Mubash Elite Specialist" },
      { name: "apple-mobile-web-app-title", content: "Mubash Elite Specialist" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Builds premium, enterprise-level personal portfolio websites for brands, showcasing expertise in Shopify, Wix, and eCommerce growth." },
      { property: "og:description", content: "Builds premium, enterprise-level personal portfolio websites for brands, showcasing expertise in Shopify, Wix, and eCommerce growth." },
      { name: "twitter:description", content: "Builds premium, enterprise-level personal portfolio websites for brands, showcasing expertise in Shopify, Wix, and eCommerce growth." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/rb0zggpZa0hb5EOjUYl7sodNSUh2/social-images/social-1783039581323-ChatGPT_Image_Jun_23,_2026,_11_48_29_AM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/rb0zggpZa0hb5EOjUYl7sodNSUh2/social-images/social-1783039581323-ChatGPT_Image_Jun_23,_2026,_11_48_29_AM.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.png" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Mubash Elite Specialist",
              description:
                "Shopify Expert, Wix Specialist, SEO Consultant and AI Automation Engineer building high-converting eCommerce stores.",
              inLanguage: "en-US",
              publisher: { "@id": `${SITE_URL}/#person` },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": ["Person", "Brand"],
              "@id": `${SITE_URL}/#person`,
              name: "Mubash Elite Specialist",
              alternateName: "Mubash",
              url: SITE_URL,
              image: SOCIAL_IMAGE,
              logo: LOGO_URL,
              email: "mailto:mubashelitespecialist@gmail.com",
              telephone: "+1-754-250-4531",
              jobTitle:
                "Shopify Expert, Wix Specialist, SEO Consultant & AI Automation Engineer",
              description:
                "Independent eCommerce growth partner specializing in Shopify development, Wix design, technical SEO, conversion optimization and AI automation.",
              sameAs: [
                "https://www.fiverr.com/shopifybash",
                "https://www.fiverr.com/users/shopifybash",
                "https://wa.me/17542504531",
              ],
              knowsAbout: [
                "Shopify Development",
                "Shopify Plus",
                "Shopify Theme Customization",
                "Wix Website Design",
                "Wix Studio",
                "Technical SEO",
                "On-Page SEO",
                "eCommerce Growth",
                "Conversion Rate Optimization",
                "AI Automation",
                "Website Performance Optimization",
                "Core Web Vitals",
              ],
              knowsLanguage: ["English"],
              worksFor: { "@id": `${SITE_URL}/#business` },
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#business`,
              name: "Mubash Elite Specialist — eCommerce Consulting",
              url: SITE_URL,
              image: LOGO_URL,
              logo: LOGO_URL,
              priceRange: "$$-$$$",
              email: "mailto:mubashelitespecialist@gmail.com",
              telephone: "+1-754-250-4531",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Worldwide",
              },
              serviceType: [
                "Shopify Store Development",
                "Shopify Plus Development",
                "Wix Website Design",
                "SEO Consulting",
                "Technical SEO Audits",
                "Conversion Rate Optimization",
                "AI Automation",
                "eCommerce Consulting",
              ],
              founder: { "@id": `${SITE_URL}/#person` },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wix Website Design" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO & CRO" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
                ],
              },
              sameAs: [
                "https://www.fiverr.com/shopifybash",
                "https://wa.me/17542504531",
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
