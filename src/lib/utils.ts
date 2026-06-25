export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number | null) {
  if (price === null) return "Contact for pricing";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}

/** Filters out batches that are not strictly in the future. */
export function getFutureBatches<T extends { startDate: string }>(batches: T[], now: Date = new Date()): T[] {
  return batches.filter((b) => new Date(b.startDate).getTime() > now.getTime());
}

export function formatBatchDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
