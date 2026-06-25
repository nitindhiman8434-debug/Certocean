import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 shadow-[0_10px_30px_-8px_rgba(207,147,38,0.55)] hover:from-gold-300 hover:to-gold-500 hover:shadow-glow",
  secondary:
    "bg-gradient-to-r from-navy-900 to-navy-800 text-white hover:from-navy-800 hover:to-navy-700",
  ghost:
    "bg-transparent text-navy-900 hover:bg-navy-50",
  "outline-light":
    "bg-transparent text-white border border-white/30 hover:border-gold-300 hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ButtonAsButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
