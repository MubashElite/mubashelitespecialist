import { createFileRoute } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/lib/blog-posts";

const BASE_URL = "https://mubashelite.com";
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/shopify-ecommerce",
  "/social-media-marketing",
  "/email-marketing",
  "/portfolio",
  "/case-studies",
  "/process",
  "/sales-proof",
  "/blog",
  "/faq",
  "/contact",
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
];


export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toISOString().slice(0, 10);
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...ROUTES.map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
