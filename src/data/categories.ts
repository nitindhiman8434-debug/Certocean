import { Category } from "./types";

/**
 * Category slugs/names are based on certocean.com's real category structure
 * found via indexed search results (e.g. /category/cloud-computing-devops/5,
 * /category/project-management/9, /category/software-testing/6,
 * /category/operating-system/16, /category/database/19,
 * /category/business-intelligence-and-visualizations/10). Direct site crawl
 * was blocked, so overview copy below is newly written for the rebuild and
 * career-path/FAQ content should be reviewed against the live catalogue.
 */
export const categories: Category[] = [
  {
    id: "cat-cyber-security",
    name: "Cyber Security",
    slug: "cyber-security",
    shortTagline: "Defend, audit, and lead security programs at enterprise scale.",
    heroIntro:
      "Build globally respected credentials like CISSP, CISM, CCISO, and CHFI to move into security leadership, incident response, and enterprise risk roles.",
    overview:
      "CertOcean's Cyber Security track is built for IT professionals who want to move from hands-on security operations into certified, decision-making roles. Whether you are starting in security analysis or aiming for CISO-level governance, our instructor-led programs map each certification to real job outcomes, current exam blueprints, and practical lab work — not just theory.",
    icon: "shield",
    careerPaths: [
      { role: "Security Analyst", description: "Monitor, detect, and respond to security incidents using industry-standard frameworks." },
      { role: "Information Security Manager", description: "Own security strategy, governance, and risk programs (CISM track)." },
      { role: "IT Auditor / CISO", description: "Lead enterprise security audits, compliance, and executive-level security strategy (CISSP, CCISO)." },
      { role: "Digital Forensics Investigator", description: "Investigate breaches and cybercrime using forensic tools and methodology (CHFI)." },
    ],
    faqs: [
      {
        question: "Which cyber security certification should I start with?",
        answer:
          "If you're new to security, start with CompTIA Security+ to build foundational knowledge. If you already have 3-5 years of security experience, CISSP or CISM are the strongest next steps depending on whether you're moving into technical leadership (CISSP) or security management (CISM).",
      },
      {
        question: "Is CISSP good for IT auditors?",
        answer:
          "CISSP is broader than audit — it's best suited to professionals designing and managing security programs. IT auditors focused specifically on systems audit and control are usually better served starting with CISA under our IT Audit track.",
      },
      {
        question: "Do I need a security background to enroll?",
        answer:
          "No. Each course starts with foundational concepts before progressing to exam-level depth, and our advisors can help you choose a certification that matches your current experience level.",
      },
    ],
    relatedCategorySlugs: ["it-audit", "it-governance-risk", "cloud-computing-devops"],
  },
  {
    id: "cat-cloud-computing-devops",
    name: "Cloud Computing & DevOps",
    slug: "cloud-computing-devops",
    shortTagline: "Get certified on AWS, Azure, Google Cloud, and modern DevOps tooling.",
    heroIntro:
      "From your first cloud practitioner badge to professional-level architect and DevOps certifications, build a cloud career with vendor-aligned, hands-on training.",
    overview:
      "Cloud and DevOps skills are now baseline requirements across almost every IT role. CertOcean's Cloud Computing & DevOps track covers AWS, Microsoft Azure, and Google Cloud certification paths alongside practical DevOps tooling (CI/CD, containers, infrastructure automation), so you graduate with both the certification and the hands-on ability employers expect.",
    icon: "cloud",
    careerPaths: [
      { role: "Cloud Support Associate", description: "Entry-level cloud operations and support roles (AWS Cloud Practitioner)." },
      { role: "Cloud / Solutions Architect", description: "Design scalable, secure cloud architecture (AWS SAA/SAP, Google Cloud Architect)." },
      { role: "Cloud Developer", description: "Build and deploy cloud-native applications (Azure Developer Associate)." },
      { role: "DevOps Engineer", description: "Automate deployment pipelines and infrastructure (AWS DevOps Professional)." },
    ],
    faqs: [
      {
        question: "Should I learn AWS, Azure, or Google Cloud first?",
        answer:
          "Choose based on your target employer's stack — AWS has the largest market share and is a safe default, Azure is strongest for enterprises already on Microsoft technology, and Google Cloud is common in data-heavy and startup environments. Many learners pursue AWS first, then add a second platform later.",
      },
      {
        question: "Do I need coding experience for cloud certifications?",
        answer:
          "Foundational certifications like AWS Cloud Practitioner need no coding background. Architect and developer-level certifications benefit from basic scripting knowledge, which is covered within the course.",
      },
    ],
    relatedCategorySlugs: ["cyber-security", "software-testing"],
  },
  {
    id: "cat-project-management",
    name: "Project Management",
    slug: "project-management",
    shortTagline: "Lead projects with PMP, CAPM, and Agile/Scrum credentials.",
    heroIntro:
      "Whether you're starting your project management career or aiming for PMP, our project management track builds the planning, leadership, and exam-readiness you need.",
    overview:
      "Project management certifications are some of the most globally portable credentials in any industry. CertOcean's Project Management track takes you from foundational frameworks (CAPM, Scrum) to the globally recognized PMP credential, with exam-pattern practice and real-world case studies led by certified instructors.",
    icon: "target",
    careerPaths: [
      { role: "Project Coordinator", description: "Support project planning, scheduling, and reporting (CAPM)." },
      { role: "Scrum Master / Agile Lead", description: "Facilitate agile delivery teams and ceremonies." },
      { role: "Project Manager (PMP)", description: "Independently plan, execute, and deliver complex projects across industries." },
    ],
    faqs: [
      {
        question: "What is the difference between CAPM and PMP?",
        answer:
          "CAPM is an entry-level certification with no major experience requirement, ideal if you're starting your project management career. PMP requires verified project experience and is recognized as the gold-standard certification for practicing project managers.",
      },
      {
        question: "Is PMP worth it in 2026?",
        answer:
          "Yes — PMP remains one of the highest-recognized project management credentials globally and is frequently listed as a preferred or required qualification for project management roles across IT, construction, finance, and healthcare.",
      },
    ],
    relatedCategorySlugs: ["it-governance-risk", "business-management"],
  },
  {
    id: "cat-it-audit",
    name: "IT Audit",
    slug: "it-audit",
    shortTagline: "Build certified expertise in systems audit, control, and assurance.",
    heroIntro:
      "Earn CISA and other audit-focused credentials to advance into IT audit, assurance, and compliance leadership roles.",
    overview:
      "IT audit professionals are in growing demand as organizations face tightening compliance and regulatory requirements. This track focuses on systems auditing, control assessment, and assurance methodology aligned to globally recognized certification bodies such as ISACA.",
    icon: "clipboard-check",
    careerPaths: [
      { role: "IT Auditor", description: "Assess and report on information systems controls and compliance." },
      { role: "Compliance Analyst", description: "Support regulatory and audit-readiness programs." },
      { role: "Audit Manager", description: "Lead enterprise audit planning and assurance strategy." },
    ],
    faqs: [
      {
        question: "What is CISA certification?",
        answer:
          "CISA (Certified Information Systems Auditor) is a globally recognized certification from ISACA for professionals who audit, control, monitor, and assess an organization's information systems and business operations.",
      },
      {
        question: "Who should take CISA?",
        answer:
          "CISA is ideal for IT auditors, compliance professionals, risk and security professionals, and anyone responsible for assessing or reporting on information systems controls.",
      },
      {
        question: "CISA vs CISM — which should I choose?",
        answer:
          "Choose CISA if your focus is auditing, controls, and assurance. Choose CISM if your focus is managing and governing an information security program. Many professionals pursue both over their careers.",
      },
    ],
    relatedCategorySlugs: ["it-governance-risk", "cyber-security"],
  },
  {
    id: "cat-it-governance-risk",
    name: "IT Governance & Risk",
    slug: "it-governance-risk",
    shortTagline: "Master enterprise risk, governance, and control frameworks.",
    heroIntro:
      "Build governance and risk management expertise with certifications like CRISC to support enterprise risk strategy and IT governance.",
    overview:
      "As organizations formalize risk and governance functions, certified professionals are needed to bridge business risk strategy with IT control frameworks. This track is designed for professionals moving into enterprise risk, governance, and IT control leadership.",
    icon: "scale",
    careerPaths: [
      { role: "Risk Analyst", description: "Identify, assess, and monitor enterprise IT risk." },
      { role: "IT Governance Specialist", description: "Implement and maintain governance frameworks (COBIT-aligned)." },
      { role: "Risk & Compliance Manager", description: "Lead enterprise risk strategy and reporting (CRISC)." },
    ],
    faqs: [
      {
        question: "What is the best certification for IT governance?",
        answer:
          "CRISC (Certified in Risk and Information Systems Control) is the most directly aligned certification for IT governance and enterprise risk roles, especially for professionals bridging business risk and IT control functions.",
      },
      {
        question: "Do I need an audit background for CRISC?",
        answer:
          "No — CRISC is suited to risk, governance, and control professionals more broadly, not exclusively auditors. Relevant experience in risk identification or IT control assessment is recommended.",
      },
    ],
    relatedCategorySlugs: ["it-audit", "cyber-security"],
  },
  {
    id: "cat-data-ai",
    name: "Data & AI",
    slug: "data-ai",
    shortTagline: "Develop in-demand data science, analytics, and AI skills.",
    heroIntro:
      "Learn data science, statistical modeling, and applied AI with hands-on, instructor-led training designed for working professionals.",
    overview:
      "Data and AI skills now sit at the center of nearly every digital transformation initiative. This track covers practical data science using R, statistical modeling, and analytics tooling, helping learners move into data-driven roles without needing a prior data science degree.",
    icon: "chart",
    careerPaths: [
      { role: "Data Analyst", description: "Turn raw data into actionable business insight." },
      { role: "Data Scientist", description: "Apply statistical modeling and machine learning to solve business problems." },
      { role: "AI/ML Practitioner", description: "Build and deploy applied machine learning solutions." },
    ],
    faqs: [
      {
        question: "Do I need a programming background for data science?",
        answer:
          "Basic familiarity with logical thinking is helpful but not required. Our Data Science with R course builds programming and statistical concepts from the ground up.",
      },
      {
        question: "What is the best certification for beginners in data & AI?",
        answer:
          "Start with a foundational Data Science with R or SAS course to build core analytical skills before progressing toward specialized machine learning or AI certifications.",
      },
    ],
    relatedCategorySlugs: ["business-intelligence-visualization", "database"],
  },
  {
    id: "cat-software-testing",
    name: "Software Testing",
    slug: "software-testing",
    shortTagline: "Master manual and automation testing tools and methodology.",
    heroIntro:
      "Build a career in quality engineering with manual testing fundamentals and automation tools like Selenium and TestComplete.",
    overview:
      "Quality engineering remains a critical function across every software organization. CertOcean's Software Testing track covers manual testing fundamentals through to industry-standard automation frameworks, preparing learners for QA, SDET, and automation engineering roles.",
    icon: "check-circle",
    careerPaths: [
      { role: "QA / Test Engineer", description: "Execute manual and exploratory testing across the software lifecycle." },
      { role: "Automation Test Engineer", description: "Build automated test suites with Selenium and similar frameworks." },
      { role: "SDET", description: "Combine development and test engineering skills for scalable quality systems." },
    ],
    faqs: [
      {
        question: "Should I learn manual testing before automation testing?",
        answer:
          "Yes — a strong foundation in manual testing concepts (test design, defect lifecycle, test planning) makes automation tools like Selenium far easier to apply effectively.",
      },
      {
        question: "Is Selenium still relevant in 2026?",
        answer:
          "Yes, Selenium remains one of the most widely used open-source automation frameworks and is a common requirement in QA and SDET job postings.",
      },
    ],
    relatedCategorySlugs: ["cloud-computing-devops", "data-ai"],
  },
  {
    id: "cat-bi-visualization",
    name: "Business Intelligence & Visualization",
    slug: "business-intelligence-visualization",
    shortTagline: "Turn data into decisions with Tableau and modern BI tools.",
    heroIntro:
      "Learn to design dashboards and reporting systems that drive real business decisions using industry-leading BI tools.",
    overview:
      "Business Intelligence and visualization skills bridge raw data and business decision-making. This track focuses on practical, tool-based learning — including Tableau — so you can build dashboards and reporting systems that stakeholders actually use.",
    icon: "bar-chart",
    careerPaths: [
      { role: "BI Analyst", description: "Build dashboards and reports for business stakeholders." },
      { role: "BI Developer", description: "Design and maintain enterprise BI and data visualization systems." },
    ],
    faqs: [
      {
        question: "Is Tableau certification worth it?",
        answer:
          "Tableau remains one of the most requested BI tools in job postings across analytics, finance, and operations roles, making it a strong, practical skill investment.",
      },
    ],
    relatedCategorySlugs: ["data-ai", "database"],
  },
  {
    id: "cat-database",
    name: "Database",
    slug: "database",
    shortTagline: "Build database administration and data integration expertise.",
    heroIntro:
      "Develop hands-on database and data integration skills, from core administration to enterprise ETL tooling like Informatica.",
    overview:
      "Reliable, well-governed data infrastructure underpins every analytics and application initiative. This track covers database fundamentals and enterprise data integration tooling for learners moving into database administration or data engineering roles.",
    icon: "database",
    careerPaths: [
      { role: "Database Administrator", description: "Manage, secure, and optimize enterprise databases." },
      { role: "Data Integration / ETL Developer", description: "Design and manage data pipelines using tools like Informatica." },
    ],
    faqs: [
      {
        question: "What is Informatica used for?",
        answer:
          "Informatica is an enterprise data integration (ETL) platform used to extract, transform, and load data between systems — a core skill for data engineering and data warehouse roles.",
      },
    ],
    relatedCategorySlugs: ["data-ai", "operating-systems"],
  },
  {
    id: "cat-operating-systems",
    name: "Operating Systems",
    slug: "operating-systems",
    shortTagline: "Master Linux administration for infrastructure and DevOps roles.",
    heroIntro:
      "Build core systems administration skills with hands-on Linux training designed for infrastructure, cloud, and DevOps careers.",
    overview:
      "Linux skills remain foundational to almost every cloud, DevOps, and infrastructure role. This track builds practical systems administration capability for learners supporting modern IT environments.",
    icon: "terminal",
    careerPaths: [
      { role: "Systems Administrator", description: "Manage and maintain Linux-based infrastructure." },
      { role: "Infrastructure / Cloud Engineer", description: "Apply Linux administration skills within cloud and DevOps environments." },
    ],
    faqs: [
      {
        question: "Is Linux administration necessary for a cloud career?",
        answer:
          "Yes — the majority of cloud infrastructure runs on Linux, making systems administration skills a strong complement to any cloud or DevOps certification path.",
      },
    ],
    relatedCategorySlugs: ["cloud-computing-devops", "database"],
  },
  {
    id: "cat-business-management",
    name: "Business & Management",
    slug: "business-management",
    shortTagline: "Build CRM, business platform, and management skills for career growth.",
    heroIntro:
      "Develop practical, in-demand business platform skills including CRM systems like Salesforce.",
    overview:
      "Beyond core technical certifications, business platform skills like Salesforce CRM are increasingly required across sales operations, business analysis, and customer success roles. This track is built for professionals expanding into business-systems careers.",
    icon: "briefcase",
    careerPaths: [
      { role: "CRM / Salesforce Administrator", description: "Configure and manage CRM platforms for business teams." },
      { role: "Business Systems Analyst", description: "Bridge business requirements with platform configuration." },
    ],
    faqs: [
      {
        question: "Is Salesforce a good certification for beginners?",
        answer:
          "Yes — Salesforce administration is one of the more accessible entry points into business systems and CRM careers, with strong demand across sales, marketing, and operations teams.",
      },
    ],
    relatedCategorySlugs: ["project-management"],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
