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
    body: "Learners who cancel enrollment before their batch start date may be eligible for a full or partial refund, depending on how far in advance the cancellation request is made. Needs final content from CertOcean — exact cancellation windows and refund percentages pending confirmation.",
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
    body: `Refund requests must be submitted in writing to ${SITE.email}. Approved refunds are processed back to the original payment method within a standard processing window.`,
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
          <p className="mt-3 text-sm text-navy-500">Last updated: needs final confirmation from CertOcean.</p>
          <p className="mt-6 text-base leading-relaxed text-navy-600">
            This page outlines the general structure of CertOcean&apos;s refund and cancellation policy. Specific
            windows, percentages, and exceptions need final content from CertOcean before launch.
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
