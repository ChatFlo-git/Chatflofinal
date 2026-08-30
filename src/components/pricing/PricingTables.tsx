"use client";

import { useState } from "react";
import { plans, enterprise } from "@/content/pricing";
import { waLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

export function PricingTables() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="mb-10 flex items-center justify-center gap-3">
        <span className={clsx("text-sm font-medium", !annual ? "text-ink-900" : "text-ink-400")}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          onClick={() => setAnnual((v) => !v)}
          className={clsx(
            "relative h-7 w-12 rounded-full transition-colors",
            annual ? "bg-brand-600" : "bg-ink-300",
          )}
        >
          <span
            className={clsx(
              "absolute top-1 h-5 w-5 rounded-full bg-white transition-transform",
              annual ? "translate-x-6" : "translate-x-1",
            )}
          />
        </button>
        <span className={clsx("text-sm font-medium", annual ? "text-ink-900" : "text-ink-400")}>
          Annual
          <span className="ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">
            2 months free
          </span>
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => {
          const price = annual ? Math.round(p.annualTotal / 12) : p.monthly;
          return (
            <div
              key={p.name}
              className={clsx(
                "flex flex-col rounded-2xl border bg-white p-7",
                p.highlighted ? "border-brand-500 shadow-xl shadow-brand-900/10 ring-2 ring-brand-500" : "border-ink-100",
              )}
            >
              {p.highlighted && (
                <span className="mb-3 inline-block w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold text-ink-900">{p.name}</h3>
              <p className="mt-1 min-h-12 text-sm text-ink-500">{p.tagline}</p>
              <p className="mt-4">
                <span className="text-4xl font-bold text-ink-900">₹{price.toLocaleString("en-IN")}</span>
                <span className="text-ink-500">/month</span>
              </p>
              <p className="mt-1 text-xs text-ink-400">
                {annual ? `₹${p.annualTotal.toLocaleString("en-IN")} billed yearly` : "billed monthly"}
              </p>
              <Button href={p.cta.href} variant={p.highlighted ? "primary" : "secondary"} className="mt-6 w-full">
                {p.cta.label}
              </Button>
              <ul className="mt-7 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-ink-700">
                    <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-brand-100 text-[10px] text-brand-700">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Enterprise */}
      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink-200 bg-ink-50 p-7 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-ink-900">{enterprise.name}</h3>
          <p className="mt-1 max-w-xl text-sm text-ink-600">{enterprise.description}</p>
        </div>
        <Button href={waLink("Hi ChatFlo! I'd like to discuss an Enterprise plan for my hospital group.")} variant="whatsapp" whatsappIcon external>
          Talk to us on WhatsApp
        </Button>
      </div>
    </div>
  );
}
