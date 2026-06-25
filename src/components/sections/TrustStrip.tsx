import { SITE } from "@/data/site";

const stats = [
  { label: "Learners Trained", value: SITE.trust.learnersTrained },
  { label: "Certification Programs", value: SITE.trust.certificationPrograms },
  { label: "Corporate Clients", value: SITE.trust.corporateClients },
  { label: "Countries Reached", value: SITE.trust.countriesReached },
  { label: "Average Learner Rating", value: `${SITE.trust.ratingValue}/5` },
];

export function TrustStrip() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-navy-900">{stat.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-navy-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
