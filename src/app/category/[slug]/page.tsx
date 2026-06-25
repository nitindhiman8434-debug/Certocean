import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Star, Clock, BadgeCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { CourseCard } from "@/components/cards/CourseCard";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getCoursesByCategory } from "@/data/courses";
import { formatPrice } from "@/lib/utils";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} Certifications & Training`,
    description: category.shortTagline,
    alternates: { canonical: `${SITE.domain}/category/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return notFound();

  const courses = getCoursesByCategory(category.slug);
  const relatedCategories = category.relatedCategorySlugs
    .map((s) => getCategoryBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const avgRating = courses.length
    ? (courses.reduce((sum, c) => sum + c.rating, 0) / courses.length).toFixed(1)
    : "—";

  return (
    <>
      <Breadcrumbs items={[{ label: "Courses", href: "/courses" }, { label: category.name }]} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-gradient">
        <div className="container-page relative py-16 sm:py-20">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold-300">
              <CategoryIcon name={category.icon} className="h-7 w-7" />
            </div>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-gold-300">
              {courses.length} Certification Programs
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {category.name} Certification Training
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70 leading-relaxed">{category.heroIntro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#courses" variant="primary" size="lg">
              Browse {category.name} Courses <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/advisor" variant="outline-light" size="lg">
              Talk to an Advisor
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Quick stats */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-navy-900">{courses.length}</p>
            <p className="text-xs text-navy-500">Programs</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-navy-900">{avgRating}★</p>
            <p className="text-xs text-navy-500">Avg. Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-navy-900">{category.careerPaths.length}+</p>
            <p className="text-xs text-navy-500">Career Paths</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-navy-900">Live</p>
            <p className="text-xs text-navy-500">Instructor-Led</p>
          </div>
        </div>
      </section>

      {/* 3. Overview / AEO answer block */}
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-900">
            What is {category.name} Certification Training?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-600">{category.overview}</p>
        </div>
      </section>

      {/* 4. Courses grid */}
      <section id="courses" className="section-y bg-navy-50/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Programs"
            title={`${category.name} Certification Programs`}
            description="Instructor-led, exam-aligned training with advisor support from enrollment through certification."
          />
          {courses.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-navy-200 bg-white p-10 text-center text-navy-500">
              Needs final content from CertOcean — course list for this category is pending confirmation.
            </div>
          )}
        </div>
      </section>

      {/* 5. Compare Courses Table */}
      {courses.length > 1 && (
        <section className="section-y bg-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="Compare"
              title="Compare Programs"
              description="A side-by-side look at level, duration, and pricing to help you choose the right starting point."
            />
            <div className="mt-10 overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th className="px-5 py-3.5 font-semibold">Certification</th>
                    <th className="px-5 py-3.5 font-semibold">Level</th>
                    <th className="px-5 py-3.5 font-semibold">Duration</th>
                    <th className="px-5 py-3.5 font-semibold">Rating</th>
                    <th className="px-5 py-3.5 font-semibold">Price</th>
                    <th className="px-5 py-3.5 font-semibold"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100 bg-white">
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td className="px-5 py-4 font-semibold text-navy-900">{course.title}</td>
                      <td className="px-5 py-4 text-navy-600">{course.level}</td>
                      <td className="px-5 py-4 text-navy-600">{course.duration}</td>
                      <td className="px-5 py-4 text-navy-600">
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" /> {course.rating}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-semibold text-navy-900">{formatPrice(course.price)}</td>
                      <td className="px-5 py-4">
                        <Link href={`/course/${course.slug}`} className="focus-ring text-sm font-semibold text-gold-700 hover:text-gold-800">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 6. Career Paths */}
      <section className="section-y bg-navy-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="Career Outcomes"
            title="Where This Track Can Take You"
            light
            description="Real roles and responsibilities professionals move into after completing certifications in this track."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {category.careerPaths.map((path) => (
              <div key={path.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <BadgeCheck className="h-6 w-6 text-gold-400" />
                <h3 className="mt-4 font-bold text-white">{path.role}</h3>
                <p className="mt-2 text-sm text-white/60">{path.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why this track / training delivery note */}
      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            { title: "Instructor-Led Sessions", description: "Live, expert-led training mapped to current exam blueprints." },
            { title: "Advisor Support", description: "1:1 guidance choosing the right certification and exam timeline." },
            { title: "Flexible Batches", description: "Weekday, weekend, and corporate batch options across timezones." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy-100 p-6 card-shadow">
              <Clock className="h-6 w-6 text-gold-600" />
              <h3 className="mt-4 font-bold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm text-navy-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Related Categories */}
      {relatedCategories.length > 0 && (
        <section className="section-y bg-navy-50/40">
          <div className="container-page">
            <SectionHeading eyebrow="Explore More" title="Related Certification Tracks" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCategories.map((c) => (
                <CategoryCard key={c.id} category={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Category FAQ */}
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`${category.name} Certification FAQs`} />
          <div className="mt-10">
            <FAQAccordion items={category.faqs} schemaId={`faq-schema-${category.slug}`} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Start Your ${category.name} Certification?`}
        description="Talk to a certification advisor for a free, personalized training plan."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
