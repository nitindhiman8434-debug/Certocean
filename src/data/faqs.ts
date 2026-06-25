import { FAQItem } from "./types";

export interface FAQGroup {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqGroups: FAQGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      { question: "What is CertOcean?", answer: "CertOcean is a global IT certification training and advisory platform offering instructor-led and self-paced programs across cybersecurity, cloud, project management, IT audit, governance, data, and software testing." },
      { question: "Do you train individuals and companies?", answer: "Yes — CertOcean supports individual learners as well as corporate teams through dedicated group and enterprise training programs." },
      { question: "Is CertOcean training available globally?", answer: "Yes, all live online programs are accessible globally, with batch timings published in multiple timezones." },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    items: [
      { question: "How do I choose the right course?", answer: "Use our certification pathway guide on each category page, or talk to a certification advisor for a free, personalized recommendation based on your experience and goals." },
      { question: "Are courses self-paced or live?", answer: "Most CertOcean programs are instructor-led live online classes with recordings provided for lifetime access; select courses also offer a self-paced option." },
      { question: "Do I get a certificate after completing a course?", answer: "Yes, you receive a CertOcean course completion certificate. For vendor certifications (e.g. AWS, PMI, ISACA, EC-Council), the official certification exam is scheduled separately with the certifying body." },
    ],
  },
  {
    id: "certification-guidance",
    title: "Certification Guidance",
    items: [
      { question: "How do I know if I'm eligible for a certification exam?", answer: "Eligibility requirements vary by certifying body (e.g. PMP requires verified project experience, CISA/CISM require security/audit experience). Our advisors review your background and confirm eligibility before you enroll." },
      { question: "What's the difference between a foundational and advanced certification?", answer: "Foundational certifications (e.g. Security+, CAPM, AWS Cloud Practitioner) have no major prerequisites. Advanced certifications (e.g. CISSP, CISM, PMP) typically require several years of relevant experience." },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    items: [
      { question: "What payment methods do you accept?", answer: "CertOcean accepts major credit/debit cards and other standard online payment methods. Corporate clients can request invoice-based billing." },
      { question: "Can I pay in installments?", answer: "Installment options may be available depending on the course — speak with our enrollment team to confirm options for your selected program." },
    ],
  },
  {
    id: "batches",
    title: "Batches",
    items: [
      { question: "What happens if I miss a live class?", answer: "All live sessions are recorded and made available with lifetime access, so you never lose progress from a missed class." },
      { question: "Can I switch to a different batch?", answer: "Yes, batch transfers are available — contact support or your advisor to move to an upcoming batch that fits your schedule." },
    ],
  },
  {
    id: "corporate-training",
    title: "Corporate Training",
    items: [
      { question: "Can CertOcean train our entire team?", answer: "Yes — we design custom group and enterprise training plans, including skill-gap mapping, dedicated coordinators, and reporting for L&D teams." },
      { question: "Do you offer on-site corporate training?", answer: "Yes, on-site and hybrid corporate training formats are available in addition to live online sessions, depending on team size and location." },
    ],
  },
  {
    id: "refund-cancellation",
    title: "Refund / Cancellation",
    items: [
      { question: "What is CertOcean's refund policy?", answer: "Refund eligibility depends on how much of the course has been accessed and how far in advance you cancel before your batch start date. See our full Refund & Cancellation Policy page for details." },
      { question: "Can I cancel and switch to a different course instead?", answer: "Yes — course-switch requests are generally easier to accommodate than refunds. Contact support to discuss your options." },
    ],
  },
  {
    id: "technical-support",
    title: "Technical / Account Support",
    items: [
      { question: "Who do I contact for technical issues during a live class?", answer: "Our 24x7 ticket-based technical support team is available to resolve access, video, or platform issues during and outside class hours." },
      { question: "How do I access my class recordings?", answer: "Recordings are available in your learner dashboard after each session, with lifetime access for enrolled courses." },
    ],
  },
];

export const allFAQs: FAQItem[] = faqGroups.flatMap((g) => g.items);
