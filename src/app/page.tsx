import Link from "next/link";
import { ArrowRight, BadgeCheck, Users2, Globe2, GraduationCap, HeadphonesIcon, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HeroScene } from "@/components/hero/HeroScene";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { CourseCard } from "@/components/cards/CourseCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { categories } from "@/data/categories";
import { courses, getPopularCourses } from "@/data/courses";
import { blogPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";

const badgeCerts = ["CISSP", "CISM", "CEH", "PMP", "AWS", "Azure", "Security+", "CISA"];

const pathway = [
  {
    stage: "Beginner",
    description: "Foundational certifications with no major prerequisites.",
    slugs: ["comptia-security-plus-certification-training", "aws-cloud-practitioner-certification-clf-c02", "capm-certification-training-course"],
  },
  {
    stage: "Intermediate",
    description: "Build specialized, hands-on technical capability.",
    slugs: ["ceh-v12-certified-ethical-hacker", "aws-solutions-architect-associate-certification", "pmp-certification-exam-training"],
  },
  {
    stage: "Advanced",
    description: "Certifications that signal deep technical or audit authority.",
    slugs: ["cissp-certification-training-course", "cisa-certification-training", "aws-certified-solution-architect-professional-course"],
  },
  {
    stage: "Leadership",
    description: "Govern, manage, and lead enterprise programs.",
    slugs: ["cism-certification-certified-information-security-manager", "certified-chief-information-security-officer-cciso", "crisc-certification-training"],
  },
];

const whyChoose = [
  { icon: GraduationCap, title: "Instructor-Led Training", description: "Live, expert-led sessions — not pre-recorded filler content." },
  { icon: Users2, title: "Flexible Batches", description: "Weekday, weekend, and corporate batch options across timezones." },
  { icon: BadgeCheck, title: "Career-Focused Curriculum", description: "Every module is mapped to real certification blueprints and job roles." },
  { icon: HeadphonesIcon, title: "Exam Prep & Advisor Support", description: "Practice assessments plus 1:1 advisor guidance through your exam journey." },
  { icon: Building2, title: "Corporate Training", description: "Custom group training, skill mapping, and dedicated coordinators." },
  { icon: Globe2, title: "Global Learner Community", description: "Trained professionals across 40+ countries and counting." },
];

export default function HomePage() {
  const featured = getPopularCourses().slice(0, 6);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 10%, rgba(207,147,38,0.45), transparent 35%), radial-gradient(circle at 85% 30%, rgba(79,120,187,0.5), transparent 40%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-fade" />
        <HeroScene className="absolute inset-0 z-0" />
        <div className="container-page relative z-10 grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-gold-300">
              <BadgeCheck className="h-3.5 w-3.5" /> Trusted by 25,000+ learners worldwide
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.1]">
              Advance Your IT Career with{" "}
              <span className="text-gradient-gold">Globally Recognized</span> Certification Training
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
              Join instructor-led certification programs designed for working professionals, corporate teams, and
              career-focused learners across cybersecurity, cloud, project management, audit, governance, and
              emerging technologies.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/courses" variant="primary" size="lg">
                Explore Certifications <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/advisor" variant="outline-light" size="lg">
                Talk to an Advisor
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              {badgeCerts.map((badge) => (
                <span key={badge} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-float-slow">
            <div className="glass-panel glow-shadow rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Your Certification Dashboard</span>
                <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-300">Live Preview</span>
              </div>
              <div className="mt-6 space-y-4">
                {featured.slice(0, 3).map((course) => (
                  <div key={course.id} className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{course.title}</p>
                      <p className="text-xs text-white/50">{course.duration} · {course.level}</p>
                    </div>
                    <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-navy-950">
                      {course.rating}★
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                <div>
                  <p className="text-xl font-bold text-white">150+</p>
                  <p className="text-[11px] text-white/50">Programs</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-white">4.8★</p>
                  <p className="text-[11px] text-white/50">Avg. Rating</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-white">40+</p>
                  <p className="text-[11px] text-white/50">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Popular Certification Tracks */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certification Tracks"
            title="Popular Certification Tracks"
            description="Choose a track aligned to your career goals — each path is built around globally recognized certifications and real job outcomes."
          />
          <Reveal className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 9).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </Reveal>
          <div className="mt-10 text-center">
            <Button href="/courses" variant="ghost" size="md">
              View All Categories <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-y bg-navy-50/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Featured Programs"
            title="In-Demand Certifications"
            description="Hand-picked programs across cybersecurity, cloud, and project management — the certifications employers ask for most."
          />
          <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Reveal>
          <div className="mt-10 text-center">
            <Button href="/courses" variant="secondary" size="md">
              Browse All {courses.length}+ Courses <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Certification Pathway */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Guided Pathway"
            title="Your Certification Pathway"
            description="Not sure where to start? Follow a guided progression from foundational to leadership-level certifications."
          />
          <Reveal className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
            {pathway.map((stage, i) => (
              <div key={stage.stage} className="card-hover relative rounded-2xl border border-navy-100 bg-white p-6 card-shadow">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-950 text-sm font-bold text-gold-300">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{stage.stage}</h3>
                <p className="mt-1 text-sm text-navy-600">{stage.description}</p>
                <ul className="mt-4 space-y-2">
                  {stage.slugs.map((slug) => {
                    const course = courses.find((c) => c.slug === slug);
                    if (!course) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/course/${slug}`} className="focus-ring text-sm font-medium text-navy-700 hover:text-gold-600">
                          {course.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Why Choose CertOcean */}
      <section className="section-y bg-navy-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why CertOcean"
            title="Why Professionals Choose CertOcean"
            light
            description="We combine instructor-led training, advisor guidance, and corporate-grade delivery to make certification success achievable — not just theoretical."
          />
          <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-700">
              For Organizations
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-navy-900">
              Upskill Your Team with Certification-Focused Corporate Training
            </h2>
            <p className="mt-4 text-lg text-navy-600 leading-relaxed">
              Give your team a structured path to certification with custom batches, enterprise learning plans, and
              dedicated coordination — built around your skill gaps, not a generic syllabus.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Custom batches", "Group training", "Enterprise learning plans", "Skill gap mapping", "Reporting support", "Dedicated coordinator"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-navy-700">
                    <BadgeCheck className="h-4 w-4 text-gold-600" /> {item}
                  </li>
                )
              )}
            </ul>
            <div className="mt-8">
              <Button href="/corporate-training" variant="secondary" size="lg">
                Request Corporate Training <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-8 lg:p-10">
            <div className="absolute inset-0 bg-grid-fade" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { value: "300+", label: "Corporate Clients" },
                { value: "40+", label: "Countries Reached" },
                { value: "150+", label: "Certification Programs" },
                { value: "25,000+", label: "Learners Trained" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y bg-navy-50/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Learner Success"
            title="What Our Learners Say"
            description="Real outcomes from professionals who advanced their careers through CertOcean."
          />
          <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Resources"
            title="Insights to Guide Your Certification Journey"
            description="Practical comparisons, guides, and certification advice from our training experts."
          />
          <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </Reveal>
          <div className="mt-10 text-center">
            <Button href="/blog" variant="ghost" size="md">
              Visit the Blog <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Certification Is Right for You?"
        description="Talk to a certification advisor for a free, personalized recommendation based on your experience, goals, and timeline."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
