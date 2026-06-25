/**
 * Company / brand-wide constants.
 * Sourced from public search-index snippets of certocean.com — direct crawl of
 * certocean.com was blocked by this environment's network egress policy, so
 * figures marked NEEDS VERIFICATION should be re-confirmed against the live
 * site before launch.
 */
export const SITE = {
  name: "CertOcean",
  legalName: "CertOcean",
  domain: "https://www.certocean.com",
  tagline: "Globally Recognized IT Certification Training",
  description:
    "CertOcean is a global IT certification training and advisory platform helping working professionals, career-starters, and corporate teams achieve certifications in cybersecurity, cloud, project management, IT audit, governance, and emerging technology.",
  phones: [
    { label: "USA", number: "+1 805 200 4058" },
    { label: "USA (Alt)", number: "+1 302 360 8582" },
  ],
  email: "support@certocean.com",
  address: "16192 Coastal Highway, Lewes, Delaware 19958, US",
  social: {
    linkedin: "https://www.linkedin.com/company/certocean",
    facebook: "https://www.facebook.com/certocean/",
    x: "https://x.com/certocean",
  },
  // NEEDS VERIFICATION — Trustpilot aggregate at time of research; re-pull before launch.
  trust: {
    ratingValue: 4.8,
    ratingCount: 105,
    learnersTrained: "25,000+",
    certificationPrograms: "150+",
    corporateClients: "300+",
    countriesReached: "40+",
  },
} as const;
