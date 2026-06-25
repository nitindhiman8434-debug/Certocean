import {
  Shield,
  Cloud,
  Target,
  ClipboardCheck,
  Scale,
  BarChart3,
  CheckCircle2,
  Database,
  Terminal,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  cloud: Cloud,
  target: Target,
  "clipboard-check": ClipboardCheck,
  scale: Scale,
  chart: BarChart3,
  "bar-chart": BarChart3,
  "check-circle": CheckCircle2,
  database: Database,
  terminal: Terminal,
  briefcase: Briefcase,
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Shield;
  return <Icon className={cn("h-6 w-6", className)} />;
}
