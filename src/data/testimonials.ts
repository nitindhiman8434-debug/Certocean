import { Testimonial } from "./types";

/**
 * Reflects sentiment/themes from real Trustpilot reviews of certocean.com
 * surfaced via search snippets (exact reviewer names were not disclosed in
 * those snippets). Display names below are illustrative placeholders —
 * replace with verified, attributable reviews before publishing.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Needs final content from CertOcean",
    role: "PMP Candidate",
    courseSlug: "pmp-certification-exam-training",
    quote: "Passed my PMP exam on the first attempt. The instructor-led sessions were resourceful and the practice exams matched the real test closely.",
    rating: 5,
    source: "Trustpilot",
    needsVerification: true,
  },
  {
    id: "t2",
    name: "Needs final content from CertOcean",
    role: "Information Security Manager",
    courseSlug: "cism-certification-certified-information-security-manager",
    quote: "CertOcean gave me everything I needed to obtain my CISM certification — clear structure, knowledgeable trainers, and responsive support.",
    rating: 5,
    source: "Trustpilot",
    needsVerification: true,
  },
  {
    id: "t3",
    name: "Needs final content from CertOcean",
    role: "Cloud Engineer",
    courseSlug: "aws-solutions-architect-associate-certification",
    quote: "One of the best online classes I've had. Recordings were always available to review, which made a huge difference around my work schedule.",
    rating: 5,
    source: "Trustpilot",
    needsVerification: true,
  },
  {
    id: "t4",
    name: "Needs final content from CertOcean",
    role: "QA Automation Engineer",
    courseSlug: "selenium-certification-training",
    quote: "Affordable, reliable, and the trainers are highly skilled. I could learn at my own pace without losing the structure of a live class.",
    rating: 5,
    source: "Trustpilot",
    needsVerification: true,
  },
];
