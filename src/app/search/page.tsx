import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CourseExplorer } from "@/components/sections/CourseExplorer";
import { CTASection } from "@/components/sections/CTASection";
import { courses } from "@/data/courses";
import { categories } from "@/data/categories";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Search Certification Courses",
  description: "Search CertOcean's certification catalogue by course name, category, certification name, or keyword.",
  alternates: { canonical: `${SITE.domain}/search` },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <>
      <Breadcrumbs items={[{ label: "Search" }]} />
      <section className="hero-noise relative overflow-hidden bg-navy-gradient py-14">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="container-page relative text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Search Results</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {q ? (
              <>
                Showing results for <span className="font-semibold text-gold-300">&ldquo;{q}&rdquo;</span>
              </>
            ) : (
              "Search across course names, categories, certification names, and keywords."
            )}
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <CourseExplorer courses={courses} categories={categories} initialQuery={q} />
        </div>
      </section>

      <CTASection
        title="Can't Find What You're Looking For?"
        description="Talk to a certification advisor — we'll help you find the right program."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
