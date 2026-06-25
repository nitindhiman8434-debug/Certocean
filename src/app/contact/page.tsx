import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LeadForm } from "@/components/sections/LeadForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CertOcean's certification advisory and support team.",
  alternates: { canonical: `${SITE.domain}/contact` },
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: SITE.phones.map((p) => p.number).join(" / ") },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: MapPin, label: "Address", value: SITE.address },
  { icon: Clock, label: "Support Hours", value: "24x7 ticket-based support, advisor calls by appointment" },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="hero-noise relative overflow-hidden bg-navy-gradient py-14">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="container-page relative max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Contact CertOcean</h1>
          <p className="mt-4 text-lg text-white/70">
            Questions about a certification, batch, or corporate training? Reach out and our team will respond
            promptly.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Get in Touch</h2>
            <div className="mt-6 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                    <p className="text-sm text-navy-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <LeadForm submitLabel="Send Message" />
        </div>
      </section>
    </>
  );
}
