import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Mail, MessageSquare, ExternalLink, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { BLOG_POSTS, getPostBySlug, type BlogPost } from "@/lib/blog-posts";

const SITE = "https://mubashelitespecialist.lovable.app";
const EMAIL = "mailto:mubashelitespecialist@gmail.com";
const WHATSAPP = "https://wa.me/2347014449168";
const FIVERR = "https://www.fiverr.com/shopifybash";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Mubash Elite Specialist" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `${SITE}/blog/${post.slug}`;
    const title = `${post.title} | Mubash Elite Specialist`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { name: "keywords", content: `${post.category}, Shopify, Wix, SEO, eCommerce, ${post.title}` },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: post.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.publishedAt,
            author: { "@type": "Person", name: "Mubash Elite Specialist", url: SITE },
            publisher: { "@type": "Person", name: "Mubash Elite Specialist" },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-display font-bold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">The post you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 text-cyan font-medium">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <article className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-royal/40 text-cyan border border-cyan/20 font-medium">{post.category}</span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Calendar className="h-3.5 w-3.5" />{publishedDate}</span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Clock className="h-3.5 w-3.5" />{post.readTime} read</span>
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight gradient-text">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">{post.excerpt}</p>

          <div className="mt-8 rounded-3xl overflow-hidden glass border border-white/10">
            <img
              src={post.image}
              alt={post.title}
              width={1024}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-14">
          <p className="text-lg leading-relaxed text-foreground/90">{post.intro}</p>

          {post.sections.map((s) => (
            <section key={s.heading} className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold">{s.heading}</h2>
              <div className="mt-4 space-y-4">
                {s.body.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground">{para}</p>
                ))}
              </div>
            </section>
          ))}

          {/* Key takeaways */}
          <div className="mt-14 glass rounded-2xl p-6 sm:p-8 border border-cyan/10">
            <h3 className="text-xl font-display font-semibold">Key takeaways</h3>
            <ul className="mt-4 space-y-3">
              {post.keyTakeaways.map((k) => (
                <li key={k} className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{k}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conversion CTA */}
          <div className="mt-14 rounded-3xl p-8 sm:p-10 gradient-primary text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-display font-bold">{post.cta.headline}</h3>
              <p className="mt-3 text-white/90 max-w-2xl">{post.cta.sub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={FIVERR} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-5 py-3 rounded-xl hover:bg-white/90 transition">
                  Hire me on Fiverr <ExternalLink className="h-4 w-4" />
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold px-5 py-3 rounded-xl hover:bg-white/20 transition">
                  <MessageSquare className="h-4 w-4" /> WhatsApp me
                </a>
                <a href={EMAIL} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold px-5 py-3 rounded-xl hover:bg-white/20 transition">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold">Keep reading</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="glass rounded-2xl overflow-hidden group hover:shadow-glow transition flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[11px] font-medium bg-royal/60 backdrop-blur text-cyan border border-cyan/20">{p.category}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold leading-snug group-hover:gradient-text transition">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-auto pt-4 text-sm font-medium text-cyan inline-flex items-center gap-1.5">
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
