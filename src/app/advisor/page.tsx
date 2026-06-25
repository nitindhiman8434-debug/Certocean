import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LeadForm } from "@/components/sections/LeadForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Talk to a Certification Advisor",
  description: "Get a free, personalized certification recommendation from a CertOcean advisor based on your experience, goals, and timeline.",
  alternates: { canonical: `${SITE.domain}/advisor` },
};

const benefits = [
  "Personalized certification recommendation based on your experience and goals",
  "Clarity on eligibility requirements before you enroll",
  "Guidance on exam timelines and batch scheduling",
  "Support comparing certifications (e.g. CISSP vs CISM, PMP vs CAPM)",
];

export default function AdvisorPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Certification Advisor" }]} />
      <section className="hero-noise relative overflow-hidden bg-navy-gradient py-14">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="container-page relative max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Talk to a Certification Advisor
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Not sure which certification is right for you? Get a free, personalized recommendation based on your
            experience, goals, and timeline.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">What You&apos;ll Get</h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-600">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-navy-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm submitLabel="Request My Free Consultation" />
        </div>
      </section>
    </>
  );
}
