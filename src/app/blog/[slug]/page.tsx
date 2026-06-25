import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts, getBlogBySlug, getRelatedBlogPosts } from "@/data/blog";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.domain}/blog/${post.slug}` },
  };
}

function extractHeadings(html: string) {
  const matches = [...html.matchAll(/<h2>(.*?)<\/h2>/g)];
  return matches.map((m) => m[1].replace(/<[^>]+>/g, ""));
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function withHeadingIds(html: string) {
  return html.replace(/<h2>(.*?)<\/h2>/g, (_match, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    return `<h2 id="${slugify(text)}">${inner}</h2>`;
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedBlogPosts(post);
  const headings = extractHeadings(post.contentHtml);
  const html = withHeadingIds(post.contentHtml);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <Script
        id={`blog-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <section className="hero-noise relative overflow-hidden bg-navy-gradient py-14">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="container-page relative max-w-3xl">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gold-300">{post.category}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              Updated{" "}
              {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          <article
            className="prose-blog max-w-none [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy-900 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-navy-600"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <aside className="space-y-6 lg:order-first lg:order-last">
            {headings.length > 0 && (
              <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">In This Article</p>
                <ul className="mt-3 space-y-2">
                  {headings.map((h) => (
                    <li key={h}>
                      <a href={`#${slugify(h)}`} className="focus-ring text-sm text-navy-700 hover:text-gold-700">
                        {h}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl border border-navy-100 p-5 card-shadow">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Written By</p>
              <p className="mt-2 font-bold text-navy-900">{post.author}</p>
              <p className="text-sm text-navy-500">{post.authorRole}</p>
            </div>
          </aside>
        </div>
      </section>

      {post.faqs.length > 0 && (
        <section className="section-y bg-navy-50/40">
          <div className="container-page max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" />
            <div className="mt-8">
              <FAQAccordion items={post.faqs} schemaId={`faq-schema-blog-${post.slug}`} />
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-page">
            <SectionHeading eyebrow="Continue Reading" title="Related Articles" />
            <Reveal className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Turn This Into a Certification Plan?"
        description="Talk to a certification advisor for a free, personalized recommendation."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
