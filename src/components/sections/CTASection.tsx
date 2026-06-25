import { Button } from "@/components/ui/Button";

export function CTASection({
  title,
  description,
  primaryLabel = "Talk to an Advisor",
  primaryHref = "/advisor",
  secondaryLabel = "Explore Certifications",
  secondaryHref = "/courses",
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section-y bg-navy-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(207,147,38,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(79,120,187,0.4), transparent 40%)",
        }}
      />
      <div className="container-page relative text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
        {description && <p className="mx-auto mt-4 max-w-2xl text-white/70 text-lg">{description}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline-light" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
