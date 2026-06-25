# CertOcean — Frontend Rebuild

A full rebuild of the CertOcean marketing site: a premium IT certification training and advisory
platform spanning cybersecurity, cloud, project management, IT audit/governance, data &amp; AI, and
software testing.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first theme in `src/app/globals.css`)
- Data-driven content layer in `src/data/*.ts` (courses, categories, blog, testimonials, FAQs, nav)
- JSON-LD structured data (Organization, BreadcrumbList, Course, FAQPage, BlogPosting)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app` — route segments (homepage, `/courses`, `/category/[slug]`, `/course/[slug]`, `/blog`,
  `/blog/[slug]`, static pages)
- `src/components` — `ui/`, `cards/`, `sections/`, `layout/` reusable components
- `src/data` — typed content modules acting as the site's content source
- `src/lib` — shared utilities

## Content Status

Course, category, and blog data was rebuilt from CertOcean's real catalogue structure using publicly
indexed search snippets (a direct site crawl was blocked by network policy in the build environment).
Fields that could not be verified this way (pricing, review counts, batch dates, testimonial names) are
flagged with `needsVerification: true` in the data files and/or labeled "Needs final content from
CertOcean" in the UI — these should be reconciled against the live CMS/database before launch.
