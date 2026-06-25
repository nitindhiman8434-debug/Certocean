export type Level = "Beginner" | "Intermediate" | "Advanced" | "Leadership";
export type Mode = "Live Online (Instructor-Led)" | "Self-Paced" | "Corporate / On-site";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Batch {
  /** ISO date string, must be in the future at render time */
  startDate: string;
  time: string;
  timezone: string;
  seatsLeft?: number;
}

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  subcategory?: string;
  certificationBody?: string;
  shortDescription: string;
  longDescription: string;
  /** USD */
  price: number | null;
  originalPrice?: number | null;
  duration: string;
  level: Level;
  mode: Mode[];
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  language: string;
  skills: string[];
  whoShouldAttend: string[];
  careerOutcomes: string[];
  curriculum: CurriculumModule[];
  examGuidance: string;
  faqs: FAQItem[];
  relatedCourseSlugs: string[];
  upcomingBatches: Batch[];
  popular?: boolean;
}

export interface CareerPath {
  role: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  shortTagline: string;
  heroIntro: string;
  overview: string;
  icon: string;
  careerPaths: CareerPath[];
  faqs: FAQItem[];
  relatedCategorySlugs: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  contentHtml: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  relatedCourseSlugs: string[];
  faqs: FAQItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  courseSlug?: string;
  quote: string;
  rating: number;
  source: string;
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}
