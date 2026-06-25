"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";
import { FAQItem } from "@/data/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
  schemaId,
  withSchema = true,
}: {
  items: FAQItem[];
  schemaId?: string;
  withSchema?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
      {withSchema && (
        <Script
          id={schemaId ?? "faq-schema"}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-semibold text-navy-900">{item.question}</span>
              <ChevronDown
                className={cn("h-5 w-5 shrink-0 text-navy-400 transition-transform duration-200", open && "rotate-180 text-gold-600")}
              />
            </button>
            {open && (
              <div className="px-5 sm:px-6 pb-5 text-navy-600 leading-relaxed">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
