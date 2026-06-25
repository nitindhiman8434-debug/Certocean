import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting CertOcean. Our team will be in touch shortly.",
  alternates: { canonical: `${SITE.domain}/thank-you` },
};

export default function ThankYouPage() {
  return (
    <section className="hero-noise section-y relative flex min-h-[60vh] items-center overflow-hidden bg-navy-gradient">
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="container-page relative max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20">
          <CheckCircle2 className="h-9 w-9 text-gold-400" />
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Thank You!</h1>
        <p className="mt-4 text-lg text-white/70">
          We&apos;ve received your request. A CertOcean advisor will reach out shortly at the contact details you
          provided.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/courses" variant="primary" size="lg">
            Explore Certifications
          </Button>
          <Button href="/" variant="outline-light" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
