import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blog";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Certification Insights & Guides",
  description:
    "Practical comparisons, certification guides, and career advice for IT professionals pursuing cybersecurity, cloud, project management, and audit certifications.",
  alternates: { canonical: `${SITE.domain}/blog` },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="bg-navy-gradient py-14">
        <div className="container-page text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Certification Insights &amp; Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Practical comparisons, certification guides, and career advice from our training and advisory team.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Certification Question We Haven't Covered?"
        description="Talk to a certification advisor for a free, personalized recommendation."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
