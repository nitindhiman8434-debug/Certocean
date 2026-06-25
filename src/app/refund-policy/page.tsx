import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "CertOcean's refund and cancellation policy for course enrollments and corporate training engagements.",
  alternates: { canonical: `${SITE.domain}/refund-policy` },
};

const sections = [
  {
    title: "Cancellation Before Batch Start",
    body: "Cancel 7 or more days before your batch start date for a full refund, minus a $25 administrative fee. Cancellations made 3-6 days before batch start are eligible for a 50% refund. Cancellations within 48 hours of batch start are not eligible for a cash refund but may use the Course Switch Option below.",
  },
  {
    title: "Cancellation After Batch Start",
    body: "Once live sessions have begun, refund eligibility is generally reduced based on the proportion of the course already delivered or accessed. Recordings and materials accessed count toward this assessment.",
  },
  {
    title: "Course Switch Option",
    body: "Instead of a refund, learners may request to switch to a different upcoming batch or a different certification program of equal or lesser value, subject to availability.",
  },
  {
    title: "Corporate Training Cancellations",
    body: "Refund and cancellation terms for corporate/enterprise training engagements are governed by the specific agreement signed with the corporate client and may differ from individual enrollment terms.",
  },
  {
    title: "How to Request a Refund",
    body: `Refund requests must be submitted in writing to ${SITE.email} with your enrollment ID and batch details. Approved refunds are processed back to the original payment method within 7-10 business days.`,
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Refund & Cancellation Policy" }]} />
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-3 text-sm text-navy-500">Last updated: June 1, 2026</p>
          <p className="mt-6 text-base leading-relaxed text-navy-600">
            This page outlines CertOcean&apos;s refund and cancellation policy for individual course enrollments and
            corporate training engagements.
          </p>
          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-navy-900">{s.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-navy-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
