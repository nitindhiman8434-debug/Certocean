import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of CertOcean's website and training services.",
  alternates: { canonical: `${SITE.domain}/terms-conditions` },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using CertOcean's website and training services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "Course Enrollment",
    body: "Enrollment is confirmed upon successful payment or written agreement (for corporate engagements). Course access, batch schedules, and materials are provided as described on each course page at the time of enrollment.",
  },
  {
    title: "Certification Exams",
    body: "CertOcean provides training aligned to certification exam blueprints. Official certification exams are scheduled and administered separately by the relevant certifying body (e.g. ISC2, ISACA, PMI, AWS) and are not guaranteed by CertOcean.",
  },
  {
    title: "Intellectual Property",
    body: "All course materials, recordings, and content are the property of CertOcean or its licensors and may not be redistributed, resold, or shared outside your individual enrollment without written permission.",
  },
  {
    title: "Limitation of Liability",
    body: "CertOcean is not liable for indirect, incidental, or consequential damages arising from use of our training services, to the extent permitted by applicable law.",
  },
  {
    title: "Changes to Terms",
    body: "We may update these Terms & Conditions from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-navy-500">Last updated: needs final confirmation from CertOcean.</p>
          <p className="mt-6 text-base leading-relaxed text-navy-600">
            These Terms &amp; Conditions govern your use of {SITE.domain} and CertOcean&apos;s training services.
            This page is a placeholder structure — full, legally reviewed terms need final content from CertOcean
            before launch.
          </p>
          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-navy-900">{s.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-navy-600">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-navy-500">
            Questions about these terms? Contact us at {SITE.email}.
          </p>
        </div>
      </section>
    </>
  );
}
