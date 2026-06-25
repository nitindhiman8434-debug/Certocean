import Link from "next/link";
import Script from "next/script";
import { ChevronRight, Home } from "lucide-react";
import { SITE } from "@/data/site";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: item.href ? `${SITE.domain}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-navy-50/50">
      <Script
        id={`breadcrumb-schema-${items.map((i) => i.label).join("-")}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-page flex items-center gap-1.5 py-3 text-sm text-navy-500 overflow-x-auto">
        <Link href="/" className="flex items-center gap-1 hover:text-navy-900 shrink-0">
          <Home className="h-3.5 w-3.5" />
          Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 shrink-0">
            <ChevronRight className="h-3.5 w-3.5 text-navy-300" />
            {item.href ? (
              <Link href={item.href} className="hover:text-navy-900">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-900 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
