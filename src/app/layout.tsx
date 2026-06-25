import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | Online Certification Courses & Professional IT Training`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} | Online Certification Courses & Professional IT Training`,
    description: SITE.description,
    url: SITE.domain,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Online Certification Courses & Professional IT Training`,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: SITE.domain,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
    },
    contactPoint: SITE.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.number,
      contactType: "customer support",
      areaServed: p.label,
    })),
    sameAs: Object.values(SITE.social),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.trust.ratingValue,
      reviewCount: SITE.trust.ratingCount,
    },
  };

  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
