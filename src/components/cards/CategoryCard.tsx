import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/types";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { getCoursesByCategory } from "@/data/courses";

export function CategoryCard({ category }: { category: Category }) {
  const count = getCoursesByCategory(category.slug).length;

  return (
    <Link
      href={`/category/${category.slug}`}
      className="focus-ring group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 card-shadow transition-all duration-200 hover:-translate-y-1 hover:border-gold-200 hover:shadow-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-300 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
        <CategoryIcon name={category.icon} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy-900">{category.name}</h3>
      <p className="mt-2 text-sm text-navy-600 line-clamp-2">{category.shortTagline}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-medium text-navy-500">{count} programs</span>
        <span className="flex items-center gap-1 font-semibold text-navy-900 group-hover:text-gold-600">
          Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
