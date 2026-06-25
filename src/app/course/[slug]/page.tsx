import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  Star,
  Clock,
  Users,
  Globe2,
  BadgeCheck,
  ArrowRight,
  GraduationCap,
  Briefcase,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CourseCard } from "@/components/cards/CourseCard";
import { CTASection } from "@/components/sections/CTASection";
import { courses, getCourseBySlug, getRelatedCourses } from "@/data/courses";
import { getCategoryBySlug } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import { formatPrice, getFutureBatches, formatBatchDate } from "@/lib/utils";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.shortDescription,
    alternates: { canonical: `${SITE.domain}/course/${course.slug}` },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return notFound();

  const category = getCategoryBySlug(course.categorySlug);
  const relatedCourses = getRelatedCourses(course);
  const reviews = testimonials.filter((t) => t.courseSlug === course.slug);
  const futureBatches = getFutureBatches(course.upcomingBatches);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    provider: { "@type": "Organization", name: SITE.name, sameAs: SITE.domain },
    ...(course.rating && course.reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: course.rating,
            reviewCount: course.reviewCount,
          },
        }
      : {}),
  };

  return (
    <>
      <Script
        id={`course-schema-${course.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Courses", href: "/courses" },
          ...(category ? [{ label: category.name, href: `/category/${category.slug}` }] : []),
          { label: course.title },
        ]}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-gradient">
        <div className="container-page relative grid gap-10 py-14 sm:py-16 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gold-300">
              {course.certificationBody && (
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{course.certificationBody}</span>
              )}
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{course.level}</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white leading-tight">
              {course.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70 leading-relaxed">{course.shortDescription}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> {course.rating} ({course.reviewCount} reviews)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" /> {course.enrolledCount.toLocaleString()}+ trained
              </span>
              <span className="flex items-center gap-1.5">
                <Globe2 className="h-4 w-4" /> {course.language}
              </span>
            </div>
            <div className="mt-8 hidden gap-4 sm:flex">
              <Button href="/advisor" variant="primary" size="lg">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/advisor" variant="outline-light" size="lg">
                Talk to an Advisor
              </Button>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-7">
            <p className="text-sm font-semibold text-white/70">Program Investment</p>
            <p className="mt-1 text-3xl font-bold text-white">{formatPrice(course.price)}</p>
            {course.originalPrice && course.price && (
              <p className="text-sm text-white/40 line-through">{formatPrice(course.originalPrice)}</p>
            )}
            <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-400" /> {course.duration}
              </p>
              <p className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-gold-400" /> {course.level} Level
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-400" /> {course.mode.join(", ")}
              </p>
            </div>
            <Button href="/advisor" variant="primary" size="lg" className="mt-6 w-full justify-center">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Quick Facts */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            { label: "Duration", value: course.duration },
            { label: "Level", value: course.level },
            { label: "Delivery", value: course.mode[0] },
            { label: "Certification Body", value: course.certificationBody ?? "Industry Body" },
          ].map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="text-sm font-bold text-navy-900">{fact.value}</p>
              <p className="text-xs text-navy-500">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why This Certification Matters */}
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-900">
            Why {course.certificationBody ? `${course.certificationBody} ` : ""}
            {course.title.split(" ")[0]} Certification Matters
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-600">{course.longDescription}</p>
        </div>
      </section>

      {/* 4. Who Should Attend */}
      <section className="section-y bg-navy-50/40">
        <div className="container-page">
          <SectionHeading eyebrow="Eligibility" title="Who Should Attend" align="left" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {course.whoShouldAttend.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <span className="text-sm text-navy-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Skills */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Skills" title="Skills You'll Gain" align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            {course.skills.map((skill) => (
              <span key={skill} className="rounded-full bg-navy-900 px-4 py-2 text-sm font-medium text-gold-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Curriculum */}
      <section className="section-y bg-navy-50/40">
        <div className="container-page">
          <SectionHeading eyebrow="Curriculum" title="Course Curriculum" align="left" />
          <div className="mt-8 space-y-3">
            {course.curriculum.map((module, i) => (
              <details key={module.title} className="group rounded-2xl border border-navy-100 bg-white open:shadow-md" open={i === 0}>
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between px-6 py-4">
                  <span className="font-semibold text-navy-900">
                    Module {i + 1}: {module.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-navy-400 transition-transform group-open:rotate-90" />
                </summary>
                <ul className="space-y-2 px-6 pb-5 pt-1">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-navy-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" /> {topic}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Exam Guidance */}
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Exam Guidance" title="Exam Pattern & Eligibility" align="left" />
          <p className="mt-6 text-base leading-relaxed text-navy-600">{course.examGuidance}</p>
        </div>
      </section>

      {/* 8. Career Outcomes */}
      <section className="section-y bg-navy-900">
        <div className="container-page">
          <SectionHeading eyebrow="Career Outcomes" title="Roles This Certification Unlocks" light align="left" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {course.careerOutcomes.map((role) => (
              <div key={role} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Briefcase className="h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-sm font-medium text-white">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Training Delivery */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Training Delivery" title="How You'll Learn" align="left" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {course.mode.map((mode) => (
              <div key={mode} className="rounded-2xl border border-navy-100 p-6 card-shadow">
                <GraduationCap className="h-6 w-6 text-gold-600" />
                <h3 className="mt-4 font-bold text-navy-900">{mode}</h3>
                <p className="mt-2 text-sm text-navy-600">
                  {mode.includes("Live")
                    ? "Real-time instructor-led sessions with live Q&A and doubt resolution."
                    : mode.includes("Self")
                    ? "Learn at your own pace with full access to recorded sessions and materials."
                    : "Custom-scheduled training delivered for your organization's team."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Upcoming Batches */}
      <section className="section-y bg-navy-50/40">
        <div className="container-page">
          <SectionHeading eyebrow="Schedule" title="Upcoming Batches" align="left" />
          {futureBatches.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {futureBatches.map((batch) => (
                <div key={batch.startDate} className="flex items-center justify-between rounded-2xl border border-navy-100 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-gold-600" />
                    <div>
                      <p className="font-semibold text-navy-900">{formatBatchDate(batch.startDate)}</p>
                      <p className="text-xs text-navy-500">{batch.time}</p>
                    </div>
                  </div>
                  {batch.seatsLeft && (
                    <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
                      {batch.seatsLeft} seats left
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-navy-200 bg-white p-8 text-center text-navy-500">
              No upcoming batches are currently scheduled. Talk to an advisor to register interest for the next available batch.
            </div>
          )}
        </div>
      </section>

      {/* 11. Reviews */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Reviews" title="What Learners Say" align="left" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reviews.length > 0 ? (
              reviews.map((t) => (
                <div key={t.id} className="rounded-2xl border border-navy-100 p-6 card-shadow">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-navy-600">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-500">{t.role}</p>
                </div>
              ))
            ) : (
              <div className="sm:col-span-2 rounded-2xl border border-dashed border-navy-200 bg-navy-50/40 p-8 text-center text-navy-500">
                Be among the first to share your experience with this program — your review will appear here.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="section-y bg-navy-50/40">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" />
          <div className="mt-8">
            <FAQAccordion items={course.faqs} schemaId={`faq-schema-${course.slug}`} />
          </div>
        </div>
      </section>

      {/* 13. Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-page">
            <SectionHeading eyebrow="Continue Learning" title="Related Certifications" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 14. Final CTA */}
      <CTASection
        title={`Ready to Start Your ${course.title.split(" ").slice(0, 2).join(" ")} Journey?`}
        description="Talk to a certification advisor for a free, personalized enrollment plan."
        primaryLabel="Enroll Now"
        primaryHref="/advisor"
      />

      <div className="h-20 lg:hidden" />
      <StickyMobileCTA enrollHref="/advisor" />
    </>
  );
}
