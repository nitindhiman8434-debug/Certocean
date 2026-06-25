import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CourseExplorer } from "@/components/sections/CourseExplorer";
import { CTASection } from "@/components/sections/CTASection";
import { courses } from "@/data/courses";
import { categories } from "@/data/categories";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "All Certification Courses",
  description:
    "Browse 150+ instructor-led IT certification programs across cybersecurity, cloud, project management, audit, governance, data, and testing. Filter by category and level.",
  alternates: { canonical: `${SITE.domain}/courses` },
};

export default function CoursesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "All Courses" }]} />
      <section className="hero-noise relative overflow-hidden bg-navy-gradient py-14">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="container-page relative text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            All Certification Programs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {courses.length}+ instructor-led certification courses across cybersecurity, cloud, project management,
            IT audit, governance, data &amp; AI, and software testing — filter by category, level, or search by
            certification name.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <CourseExplorer courses={courses} categories={categories} />
        </div>
      </section>

      <CTASection
        title="Not Sure Which Certification Fits Your Goals?"
        description="Talk to a certification advisor for a free, personalized recommendation."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
