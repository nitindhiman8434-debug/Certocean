import type { Metadata } from "next";
import { BadgeCheck, Globe2, Users2, Building2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About CertOcean",
  description: "CertOcean is a global IT certification training and advisory platform helping professionals and corporate teams achieve career-defining certifications.",
  alternates: { canonical: `${SITE.domain}/about` },
};

const stats = [
  { icon: Users2, value: SITE.trust.learnersTrained, label: "Learners Trained" },
  { icon: BadgeCheck, value: SITE.trust.certificationPrograms, label: "Certification Programs" },
  { icon: Building2, value: SITE.trust.corporateClients, label: "Corporate Clients" },
  { icon: Globe2, value: SITE.trust.countriesReached, label: "Countries Reached" },
];

const values = [
  { title: "Outcome-Focused Training", description: "Every program is mapped to certification blueprints and the job roles they unlock — not generic syllabi." },
  { title: "Advisor-Led Guidance", description: "Learners get 1:1 advisor support to choose the right certification path and exam timeline." },
  { title: "Corporate-Grade Delivery", description: "From individual learners to enterprise teams, our delivery model scales without losing quality." },
  { title: "Global Accessibility", description: "Live online batches across timezones make certification training accessible worldwide." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <section className="hero-noise relative overflow-hidden bg-navy-gradient py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="container-page relative max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">About CertOcean</h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">{SITE.description}</p>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-white">
        <Reveal className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold-50 text-gold-600 transition-colors duration-200 group-hover:bg-gold-500 group-hover:text-white">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="mt-2 text-2xl font-bold text-navy-900">{stat.value}</p>
              <p className="text-xs text-navy-500">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-900">Our Mission</h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-600">
            CertOcean exists to make globally recognized IT certifications achievable for working professionals —
            through instructor-led training, exam-aligned curricula, and advisor guidance that goes beyond
            pre-recorded video courses. We work with individual learners building career momentum and with corporate
            L&amp;D teams closing organization-wide skill gaps.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-600">
            CertOcean was founded by a team of certified practitioners and corporate trainers who saw working
            professionals struggling to find certification programs that combined rigorous, exam-aligned curricula
            with real instructor access — not just pre-recorded videos. What started as a small batch of live
            cyber security and project management cohorts has grown into a multi-track training platform spanning
            cybersecurity, cloud, IT audit and governance, data &amp; AI, and software testing, serving learners and
            corporate L&amp;D teams across dozens of countries.
          </p>
        </div>
      </section>

      <section className="section-y bg-navy-50/40">
        <div className="container-page">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card-hover rounded-2xl border border-navy-100 bg-white p-6 card-shadow">
                <h3 className="font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{v.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to Learn More About CertOcean?"
        description="Talk to a certification advisor about your goals and how we can help."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
