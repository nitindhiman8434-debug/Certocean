import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqGroups, allFAQs } from "@/data/faqs";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about CertOcean courses, certification guidance, payments, batches, corporate training, and support.",
  alternates: { canonical: `${SITE.domain}/faq` },
};

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Script id="faq-page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <section className="hero-noise relative overflow-hidden bg-navy-gradient py-14">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="container-page relative max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-white/70">
            Everything you need to know about courses, certification guidance, payments, batches, corporate
            training, and support.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page max-w-3xl space-y-12">
          {faqGroups.map((group) => (
            <div key={group.id} id={group.id}>
              <h2 className="text-xl font-bold text-navy-900">{group.title}</h2>
              <div className="mt-5">
                <FAQAccordion items={group.items} withSchema={false} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Talk to a certification advisor for a free, personalized answer."
        primaryLabel="Talk to a Certification Advisor"
      />
    </>
  );
}
