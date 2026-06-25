import { NavItem } from "./types";
import { categories } from "./categories";
import { courses } from "./courses";

export const popularCertSlugsForMenu = [
  "cissp-certification-training-course",
  "cism-certification-certified-information-security-manager",
  "ceh-v12-certified-ethical-hacker",
  "pmp-certification-exam-training",
  "aws-solutions-architect-associate-certification",
  "cisa-certification-training",
];

export const mainNav: NavItem[] = [
  {
    label: "Courses",
    href: "/courses",
    children: courses
      .filter((c) => popularCertSlugsForMenu.includes(c.slug))
      .map((c) => ({ label: c.title, href: `/course/${c.slug}`, description: c.shortDescription })),
  },
  {
    label: "Categories",
    href: "/courses",
    children: categories.map((cat) => ({ label: cat.name, href: `/category/${cat.slug}`, description: cat.shortTagline })),
  },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Resources", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    title: "Popular Courses",
    links: popularCertSlugsForMenu.map((slug) => {
      const c = courses.find((co) => co.slug === slug)!;
      return { label: c.title, href: `/course/${c.slug}` };
    }),
  },
  {
    title: "Top Categories",
    links: categories.slice(0, 6).map((cat) => ({ label: cat.name, href: `/category/${cat.slug}` })),
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Insights", href: "/blog" },
      { label: "FAQs", href: "/faq" },
      { label: "Certification Advisor", href: "/advisor" },
      { label: "All Courses", href: "/courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Corporate Training", href: "/corporate-training" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Refund & Cancellation Policy", href: "/refund-policy" },
    ],
  },
];
