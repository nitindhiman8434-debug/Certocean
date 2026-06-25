import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
            light ? "bg-white/10 text-gold-300" : "bg-gold-50 text-gold-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold tracking-tight",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", light ? "text-white/70" : "text-navy-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
