import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CertOcean collects, uses, and protects your personal information.",
  alternates: { canonical: `${SITE.domain}/privacy-policy` },
};

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly (name, email, phone, company) when you enroll in a course, request a consultation, or contact support, as well as usage data collected automatically through cookies and analytics tools.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to deliver training services, process enrollments and payments, respond to inquiries, send relevant certification updates, and improve our website and course offerings.",
  },
  {
    title: "Sharing of Information",
    body: "We do not sell your personal information. We may share information with trusted service providers (e.g. payment processors, scheduling tools) strictly to deliver our services, or where required by law.",
  },
  {
    title: "Cookies",
    body: "CertOcean uses cookies and similar technologies to remember preferences, analyze site traffic, and improve user experience. You can control cookie settings through your browser.",
  },
  {
    title: "Data Security",
    body: "We apply reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission over the internet is 100% secure.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information by contacting support@certocean.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">Privacy Policy</h1>
          <p className="mt-3 text-sm text-navy-500">Last updated: needs final confirmation from CertOcean.</p>
          <p className="mt-6 text-base leading-relaxed text-navy-600">
            This Privacy Policy describes how {SITE.legalName} (&quot;CertOcean&quot;, &quot;we&quot;, &quot;us&quot;)
            collects, uses, and protects information from visitors and learners on {SITE.domain}. This page is a
            placeholder structure — full, legally reviewed policy text needs final content from CertOcean&apos;s
            legal counsel before launch.
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
            Questions about this policy? Contact us at {SITE.email}.
          </p>
        </div>
      </section>
    </>
  );
}
