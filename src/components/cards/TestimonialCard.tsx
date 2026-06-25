import { Quote, Star } from "lucide-react";
import { Testimonial } from "@/data/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 card-shadow">
      <Quote className="h-7 w-7 text-gold-300" />
      <blockquote className="mt-4 flex-1 text-navy-700 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <figcaption className="mt-3 text-sm">
        <span className="font-semibold text-navy-900">{testimonial.name}</span>
        <span className="block text-navy-500">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
