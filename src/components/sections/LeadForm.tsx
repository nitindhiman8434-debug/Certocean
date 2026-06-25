"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ButtonAsButton } from "@/components/ui/Button";

export function LeadForm({
  submitLabel = "Submit Request",
  showCompanyFields = false,
}: {
  submitLabel?: string;
  showCompanyFields?: boolean;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get("fullName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() || undefined,
      interest: formData.get("interest")?.toString() || undefined,
      company: formData.get("company")?.toString() || undefined,
      teamSize: formData.get("teamSize")?.toString() || undefined,
      message: formData.get("message")?.toString() || undefined,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/thank-you");
    } catch {
      setError("We couldn't submit your request. Please try again or email us directly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 card-shadow">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-semibold text-navy-700">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            type="text"
            className="focus-ring mt-2 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-900"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="focus-ring mt-2 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-900"
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="focus-ring mt-2 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-900"
            placeholder="+1 (___) ___-____"
          />
        </div>
        {showCompanyFields ? (
          <div>
            <label htmlFor="company" className="text-sm font-semibold text-navy-700">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="focus-ring mt-2 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-900"
              placeholder="Your Company"
            />
          </div>
        ) : (
          <div>
            <label htmlFor="interest" className="text-sm font-semibold text-navy-700">
              Certification of Interest
            </label>
            <input
              id="interest"
              name="interest"
              type="text"
              className="focus-ring mt-2 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-900"
              placeholder="e.g. CISSP, PMP, AWS Solutions Architect"
            />
          </div>
        )}
      </div>

      {showCompanyFields && (
        <div>
          <label htmlFor="teamSize" className="text-sm font-semibold text-navy-700">
            Team Size
          </label>
          <input
            id="teamSize"
            name="teamSize"
            type="text"
            className="focus-ring mt-2 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-900"
            placeholder="e.g. 10-25 learners"
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="focus-ring mt-2 w-full rounded-xl border border-navy-100 px-4 py-3 text-sm text-navy-900"
          placeholder="Tell us about your goals or questions..."
        />
      </div>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <ButtonAsButton type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={submitting}>
        {submitting ? "Submitting..." : submitLabel}
      </ButtonAsButton>
    </form>
  );
}
