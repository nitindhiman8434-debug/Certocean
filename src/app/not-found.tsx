import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-y bg-navy-gradient min-h-[60vh] flex items-center">
      <div className="container-page max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20">
          <SearchX className="h-9 w-9 text-gold-400" />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white">404</h1>
        <p className="mt-3 text-xl font-semibold text-white">Page Not Found</p>
        <p className="mt-3 text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Try exploring our certification
          catalogue or head back home.
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
