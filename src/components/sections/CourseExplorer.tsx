"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Course, Level } from "@/data/types";
import { Category } from "@/data/types";
import { CourseCard } from "@/components/cards/CourseCard";
import { cn } from "@/lib/utils";

const levels: Level[] = ["Beginner", "Intermediate", "Advanced", "Leadership"];

export function CourseExplorer({
  courses,
  categories,
  initialCategorySlug,
  initialQuery,
}: {
  courses: Course[];
  categories: Category[];
  initialCategorySlug?: string;
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery ?? "");
  const [categorySlug, setCategorySlug] = useState<string>(initialCategorySlug ?? "all");
  const [level, setLevel] = useState<Level | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((course) => {
      if (categorySlug !== "all" && course.categorySlug !== categorySlug) return false;
      if (level !== "all" && course.level !== level) return false;
      if (!q) return true;
      const haystack = [
        course.title,
        course.certificationBody ?? "",
        course.shortDescription,
        ...course.skills,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [courses, categorySlug, level, query]);

  return (
    <div>
      <div className="rounded-2xl border border-navy-100 bg-white p-4 sm:p-5 card-shadow">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by course, certification, or skill (e.g. CISSP, AWS, PMP)"
              className="focus-ring w-full rounded-full border border-navy-100 bg-navy-50/40 py-3 pl-11 pr-4 text-sm text-navy-900 placeholder:text-navy-400"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-navy-500">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </div>
            <select
              value={categorySlug}
              onChange={(e) => setCategorySlug(e.target.value)}
              className="focus-ring rounded-full border border-navy-100 bg-white px-4 py-2.5 text-sm font-medium text-navy-700"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as Level | "all")}
              className="focus-ring rounded-full border border-navy-100 bg-white px-4 py-2.5 text-sm font-medium text-navy-700"
            >
              <option value="all">All Levels</option>
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setCategorySlug("all")}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
              categorySlug === "all" ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-600 hover:bg-navy-100"
            )}
          >
            All
          </button>
          {categories.slice(0, 8).map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategorySlug(c.slug)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                categorySlug === c.slug ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-600 hover:bg-navy-100"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm font-medium text-navy-500">
        Showing {filtered.length} of {courses.length} certification programs
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-navy-200 bg-navy-50/40 p-12 text-center">
          <p className="text-lg font-semibold text-navy-900">No programs match your filters</p>
          <p className="mt-2 text-sm text-navy-500">
            Try a different keyword, or talk to a certification advisor for a personalized recommendation.
          </p>
        </div>
      )}
    </div>
  );
}
