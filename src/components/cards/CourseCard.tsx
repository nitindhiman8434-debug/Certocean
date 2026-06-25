import Link from "next/link";
import { Clock, Star, Users } from "lucide-react";
import { Course } from "@/data/types";
import { getCategoryBySlug } from "@/data/categories";
import { formatPrice } from "@/lib/utils";
import { TechIconBadge } from "@/components/ui/TechIconBadge";

export function CourseCard({ course }: { course: Course }) {
  const category = getCategoryBySlug(course.categorySlug);

  return (
    <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 card-shadow">
      <span className="absolute inset-x-0 top-0 h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
      <div className="flex items-center justify-between gap-2">
        {category && (
          <Link
            href={`/category/${category.slug}`}
            className="text-xs font-semibold uppercase tracking-wide text-navy-500 hover:text-gold-600"
          >
            {category.name}
          </Link>
        )}
        <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-semibold text-navy-600">
          {course.level}
        </span>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <TechIconBadge course={course} className="transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50 group-hover:text-gold-700" />
        <h3 className="text-lg font-bold text-navy-900 leading-snug">
          <Link href={`/course/${course.slug}`} className="focus-ring hover:text-navy-700">
            {course.title}
          </Link>
        </h3>
      </div>

      <p className="mt-2 text-sm text-navy-600 line-clamp-2">{course.shortDescription}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-navy-500">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {course.duration}
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" /> {course.rating} ({course.reviewCount})
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" /> {course.enrolledCount.toLocaleString()}+
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
        <span className="text-lg font-bold text-navy-900">{formatPrice(course.price)}</span>
        <div className="flex items-center gap-2">
          <Link
            href={`/course/${course.slug}`}
            className="focus-ring rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
          >
            View Program
          </Link>
        </div>
      </div>
    </article>
  );
}
