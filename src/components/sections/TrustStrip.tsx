import { Users2, BadgeCheck, Building2, Globe2, Star } from "lucide-react";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { icon: Users2, label: "Learners Trained", value: SITE.trust.learnersTrained },
  { icon: BadgeCheck, label: "Certification Programs", value: SITE.trust.certificationPrograms },
  { icon: Building2, label: "Corporate Clients", value: SITE.trust.corporateClients },
  { icon: Globe2, label: "Countries Reached", value: SITE.trust.countriesReached },
  { icon: Star, label: "Average Learner Rating", value: `${SITE.trust.ratingValue}/5` },
];

export function TrustStrip() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <Reveal className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="group text-center">
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gold-50 text-gold-600 transition-colors duration-200 group-hover:bg-gold-500 group-hover:text-white">
              <stat.icon className="h-4 w-4" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-bold text-navy-900">{stat.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-navy-500">{stat.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
