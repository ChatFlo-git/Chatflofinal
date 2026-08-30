"use client";

import { useState } from "react";
import { verticalGroups, verticalsByGroup } from "@/content/verticals";
import { waLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

const timeOptions = ["Morning (9am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–8pm)", "Anytime"];

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      business: String(fd.get("business") ?? ""),
      businessType: String(fd.get("businessType") ?? ""),
      city: String(fd.get("city") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      preferredTime: String(fd.get("preferredTime") ?? ""),
      website: String(fd.get("website") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      setSubmittedName(payload.name.split(" ")[0] ?? "");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-5 text-2xl font-bold text-ink-900">
          Thanks{submittedName ? `, ${submittedName}` : ""}! We&apos;ll be in touch.
        </h3>
        <p className="mt-3 text-ink-600">
          Our team will reach out shortly to set up your free demo. Want to skip the wait? Message us directly on
          WhatsApp now.
        </p>
        <div className="mt-6">
          <Button
            href={waLink("Hi ChatFlo! I just booked a demo and wanted to chat right away.")}
            variant="whatsapp"
            whatsappIcon
            external
            size="lg"
          >
            Chat with us on WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" placeholder="Dr. Anjali Nair" required />
        <Field label="Business name" name="business" placeholder="Sunrise Clinic" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="businessType">Business type</Label>
          <select id="businessType" name="businessType" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select your business type
            </option>
            {verticalGroups.map((group) => (
              <optgroup key={group} label={group}>
                {verticalsByGroup(group).map((v) => (
                  <option key={v.slug} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <Field label="City" name="city" placeholder="Kochi" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="WhatsApp number"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          required
          hint="We'll reach you here."
        />
        <div>
          <Label htmlFor="preferredTime">Preferred time to talk</Label>
          <select id="preferredTime" name="preferredTime" defaultValue="Anytime" className={inputClass}>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot — hidden from humans, catches bots. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <Button type="submit" variant="primary" size="lg" className={clsx("w-full", status === "submitting" && "opacity-70")}>
        {status === "submitting" ? "Sending…" : "Book my free demo"}
      </Button>
      <p className="text-center text-xs text-ink-400">
        No spam. We&apos;ll only use your details to set up your demo.
      </p>
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-800">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className={inputClass} />
      {hint && <p className="mt-1 text-xs text-ink-400">{hint}</p>}
    </div>
  );
}
