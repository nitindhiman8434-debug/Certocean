import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { BlogPost } from "@/data/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 card-shadow">
      <span className="absolute inset-x-0 top-0 h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">{post.category}</span>
      <h3 className="mt-2 text-lg font-bold text-navy-900 leading-snug">
        <Link href={`/blog/${post.slug}`} className="focus-ring hover:text-navy-700">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-navy-600 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4 text-xs text-navy-500">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
        <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 font-semibold text-navy-900 hover:text-gold-600">
          Read <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
