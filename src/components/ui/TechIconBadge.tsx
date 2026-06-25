import { Course } from "@/data/types";
import { getCourseTechIcon } from "@/lib/techIcons";
import { cn } from "@/lib/utils";

export function TechIconBadge({
  course,
  className,
  iconClassName,
}: {
  course: Course;
  className?: string;
  iconClassName?: string;
}) {
  const { Icon, label } = getCourseTechIcon(course);
  return (
    <span
      title={label}
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-navy-100 bg-navy-50 text-navy-700",
        className
      )}
    >
      <Icon className={cn("h-5 w-5", iconClassName)} />
    </span>
  );
}
