import { Button } from "@/components/ui/Button";

export function StickyMobileCTA({
  enrollHref,
  advisorHref = "/advisor",
}: {
  enrollHref: string;
  advisorHref?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-navy-100 bg-white/95 p-3 backdrop-blur lg:hidden">
      <Button href={advisorHref} variant="secondary" size="md" className="flex-1">
        Talk to Advisor
      </Button>
      <Button href={enrollHref} variant="primary" size="md" className="flex-1">
        Enroll Now
      </Button>
    </div>
  );
}
