import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/sections/LeadForm";
import { CTASection } from "@/components/sections/CTASection";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Corporate Training",
  description: "Custom certification-focused corporate training — group batches, enterprise learning plans, skill-gap mapping, and dedicated coordination for your team.",
  alternates: { canonical: `${SITE.domain}/corporate-training` },
};

const offerings = [
  { title: "Custom Batches", description: "Scheduled around your team's availability and timezone." },
  { title: "Skill Gap Mapping", description: "Assessment-driven curriculum matched to your team's current capability." },
  { title: "Dedicated Coordinator", description: "A single point of contact managing scheduling, reporting, and escalations." },
  { title: "Enterprise Reporting", description: "Progress and completion reporting built for L&D stakeholders." },
  { title: "Multi-Certification Tracks", description: "Blend certifications across cybersecurity, cloud, PM, and audit in one engagement." },
  { title: "On-site or Hybrid Delivery", description: "Live online, on-site, or hybrid formats depending on team size and location." },
];

const stats = [
  { value: SITE.trust.corporateClients, label: "Corporate Clients" },
  { value: SITE.trust.countriesReached, label: "Countries Reached" },
  { value: SITE.trust.certificationPrograms, label: "Certification Programs" },
  { value: SITE.trust.learnersTrained, label: "Learners Trained" },
];

export default function CorporateTrainingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Corporate Training" }]} />
      <section className="bg-navy-gradient py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-gold-300">
              For Organizations
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Certification-Focused Corporate Training
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Give your team a structured path to certification with custom batches, enterprise learning plans, and
              dedicated coordination — built around your skill gaps, not a generic syllabus.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/5 p-5 text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="What's Included" title="Built Around Your Team's Goals" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <div key={o.title} className="rounded-2xl border border-navy-100 p-6 card-shadow">
                <BadgeCheck className="h-6 w-6 text-gold-600" />
                <h3 className="mt-4 font-bold text-navy-900">{o.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-50/40">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Get Started" title="Request Corporate Training" />
          <div className="mt-10">
            <LeadForm submitLabel="Request Corporate Training" showCompanyFields />
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions Before You Submit a Request?"
        description="Talk to a certification advisor about your team's training goals."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
