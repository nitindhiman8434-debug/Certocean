import { BlogPost } from "./types";

/**
 * Titles below are confirmed real CertOcean blog posts found via indexed
 * search snippets (certocean.com/blogs, blog-details.php?id=...). Full
 * article body content could not be crawled (network-blocked), so
 * contentHtml is newly written for this rebuild and marked for review.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "blog-pmp-guide",
    title: "What Is PMP Certification? Benefits, Eligibility & Guide",
    slug: "what-is-pmp-certification-benefits-eligibility-guide",
    category: "Project Management",
    excerpt:
      "Everything you need to know about the PMP credential — what it is, who it's for, eligibility requirements, and how it impacts your career.",
    contentHtml: `
      <h2>What is PMP certification?</h2>
      <p>The Project Management Professional (PMP) certification, issued by the Project Management Institute (PMI), is the most widely recognized credential for project managers globally. It validates your ability to lead and direct projects across people, process, and business environment domains.</p>
      <h2>Who should pursue PMP?</h2>
      <p>PMP is best suited to professionals who already have hands-on project leadership experience and want a globally portable credential that signals proven capability to employers.</p>
      <h2>PMP eligibility requirements</h2>
      <p>You need either a four-year degree with 36 months of project leadership experience and 35 hours of project management education, or a high school diploma/associate degree with 60 months of experience and the same 35 hours of education.</p>
      <h2>Is PMP worth it?</h2>
      <p>Yes. PMP-certified project managers are frequently preferred or required for senior project roles across IT, construction, healthcare, and finance, and the certification has consistently ranked among the highest-recognized PM credentials globally.</p>
    `,
    author: "CertOcean Editorial Team",
    authorRole: "Certification Advisory Desk",
    publishedAt: "2025-11-04",
    updatedAt: "2026-03-12",
    readTime: "6 min read",
    relatedCourseSlugs: ["pmp-certification-exam-training", "capm-certification-training-course"],
    faqs: [
      { question: "How long does it take to get PMP certified?", answer: "Most learners complete training in 4-6 weeks and sit the exam within 1-3 months after meeting eligibility requirements." },
      { question: "Does PMP expire?", answer: "Yes — PMP requires 60 PDUs (Professional Development Units) every 3 years to maintain certification." },
    ],
    needsVerification: true,
  },
  {
    id: "blog-prince2-vs-scrum",
    title: "PRINCE2 vs Scrum – Which One Is Better?",
    slug: "prince2-vs-scrum-which-one-is-better",
    category: "Project Management",
    excerpt:
      "PRINCE2 and Scrum solve different problems. Here's how to decide which methodology — or certification — fits your project environment.",
    contentHtml: `
      <h2>PRINCE2 vs Scrum: the core difference</h2>
      <p>PRINCE2 is a structured, process-driven project management methodology best suited to predictive, plan-heavy environments. Scrum is an Agile framework designed for iterative, fast-changing product development.</p>
      <h2>When to choose PRINCE2</h2>
      <p>Choose PRINCE2 if you work in regulated industries, government, or large-scale programs where governance, documentation, and predictable milestones matter most.</p>
      <h2>When to choose Scrum</h2>
      <p>Choose Scrum if you work in software development or product teams that need to adapt quickly to changing requirements through short, iterative sprints.</p>
      <h2>Can you use both?</h2>
      <p>Yes — many organizations blend PRINCE2 governance at the program level with Scrum delivery at the team level. Many career project managers hold both credentials.</p>
    `,
    author: "CertOcean Editorial Team",
    authorRole: "Certification Advisory Desk",
    publishedAt: "2025-09-18",
    updatedAt: "2026-01-22",
    readTime: "5 min read",
    relatedCourseSlugs: ["scrum-master-certification", "pmp-certification-exam-training"],
    faqs: [{ question: "Is Scrum Master certification enough without PMP?", answer: "For Agile-only environments, Scrum Master certification can be sufficient. For broader project leadership roles, PMP carries wider recognition." }],
    needsVerification: true,
  },
  {
    id: "blog-sql-explained",
    title: "What Is SQL? Features, Advantages, and Disadvantages",
    slug: "what-is-sql-features-advantages-disadvantages",
    category: "Database",
    excerpt:
      "A clear, beginner-friendly breakdown of SQL — what it does, where it's used, and its key trade-offs.",
    contentHtml: `
      <h2>What is SQL?</h2>
      <p>SQL (Structured Query Language) is the standard language for managing and querying relational databases, used to create, read, update, and delete data.</p>
      <h2>Key advantages of SQL</h2>
      <p>SQL is widely supported, declarative and readable, and integrates with virtually every modern data platform and BI tool.</p>
      <h2>Key limitations of SQL</h2>
      <p>SQL can become complex for deeply nested or highly unstructured data, and performance depends heavily on schema design and indexing strategy.</p>
    `,
    author: "CertOcean Editorial Team",
    authorRole: "Certification Advisory Desk",
    publishedAt: "2025-05-02",
    updatedAt: "2025-12-09",
    readTime: "4 min read",
    relatedCourseSlugs: ["informatica-certification-training-course", "data-science-certification-training-course-using-r"],
    faqs: [{ question: "Do I need to learn SQL before data science?", answer: "Yes — SQL is a foundational skill for nearly every data analyst and data scientist role and pairs well with our Data Science with R course." }],
    needsVerification: true,
  },
  {
    id: "blog-aws-certs-2023",
    title: "Most In-Demand AWS Certifications to Go For",
    slug: "most-in-demand-aws-certifications",
    category: "Cloud Computing",
    excerpt:
      "From Cloud Practitioner to DevOps Engineer Professional — here's how to choose the right AWS certification path for your career stage.",
    contentHtml: `
      <h2>Start with Cloud Practitioner if you're new to cloud</h2>
      <p>AWS Cloud Practitioner requires no prerequisites and builds the vocabulary and core concepts needed before pursuing Associate-level certifications.</p>
      <h2>Solutions Architect Associate for hands-on cloud careers</h2>
      <p>This is the most broadly in-demand AWS certification, covering architecture, security, and cost optimization fundamentals used across nearly every cloud role.</p>
      <h2>DevOps Engineer Professional for automation-focused roles</h2>
      <p>If your goal is CI/CD, infrastructure-as-code, and release automation, the DevOps Engineer Professional path builds on Associate-level architecture knowledge.</p>
      <h2>Solutions Architect Professional for senior architects</h2>
      <p>The Professional-level credential validates enterprise-scale, multi-account architecture skills and is best pursued after 2+ years of hands-on AWS experience.</p>
    `,
    author: "CertOcean Editorial Team",
    authorRole: "Certification Advisory Desk",
    publishedAt: "2025-08-14",
    updatedAt: "2026-02-27",
    readTime: "7 min read",
    relatedCourseSlugs: ["aws-cloud-practitioner-certification-clf-c02", "aws-solutions-architect-associate-certification", "devops-certification-training"],
    faqs: [{ question: "Should I learn AWS, Azure, or Google Cloud first?", answer: "AWS has the largest market share and is a safe default first certification; add a second platform once you have a role-specific need." }],
    needsVerification: true,
  },
  {
    id: "blog-cisa-vs-cism",
    title: "CISA vs CISM: Which Certification Should You Choose?",
    slug: "cisa-vs-cism-which-certification-should-you-choose",
    category: "Cyber Security",
    excerpt:
      "Both are ISACA credentials, but they serve different careers. Here's a direct comparison to help you decide.",
    contentHtml: `
      <h2>CISA: built for auditors</h2>
      <p>CISA (Certified Information Systems Auditor) is designed for professionals who audit, assess, and report on information systems controls.</p>
      <h2>CISM: built for security managers</h2>
      <p>CISM (Certified Information Security Manager) is designed for professionals who govern, manage, and lead enterprise security programs.</p>
      <h2>Which should you choose?</h2>
      <p>Choose CISA if your day-to-day work centers on audit and assurance. Choose CISM if your work centers on managing and directing a security program. Many security leaders eventually hold both.</p>
    `,
    author: "CertOcean Editorial Team",
    authorRole: "Certification Advisory Desk",
    publishedAt: "2025-10-29",
    updatedAt: "2026-04-02",
    readTime: "5 min read",
    relatedCourseSlugs: ["cisa-certification-training", "cism-certification-certified-information-security-manager"],
    faqs: [{ question: "Can I take both CISA and CISM?", answer: "Yes — many professionals pursue both over their careers to cover both audit/assurance and security management responsibilities." }],
    needsVerification: true,
  },
  {
    id: "blog-best-beginner-cyber-cert",
    title: "Best Cyber Security Certification for Beginners",
    slug: "best-cyber-security-certification-for-beginners",
    category: "Cyber Security",
    excerpt: "Starting a security career? Here's the most reliable certification sequence for beginners in 2026.",
    contentHtml: `
      <h2>Start with CompTIA Security+</h2>
      <p>Security+ is the most widely required entry-level certification, covering network security, cryptography, and incident response fundamentals with no prerequisites.</p>
      <h2>Then specialize</h2>
      <p>After Security+, choose a specialization: CEH for offensive security, CISA for audit, or continue toward CISM/CISSP for management and architecture tracks as you gain experience.</p>
    `,
    author: "CertOcean Editorial Team",
    authorRole: "Certification Advisory Desk",
    publishedAt: "2025-12-01",
    updatedAt: "2026-05-15",
    readTime: "4 min read",
    relatedCourseSlugs: ["comptia-security-plus-certification-training", "ceh-v12-certified-ethical-hacker"],
    faqs: [{ question: "Can I skip Security+ and go straight to CEH?", answer: "It's possible if you already have networking fundamentals, but Security+ builds a stronger base for the offensive-security concepts covered in CEH." }],
    needsVerification: true,
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3) {
  return blogPosts.filter((b) => b.id !== post.id && b.category === post.category).slice(0, limit);
}
