"use client";

import { useState } from "react";
import { clsx } from "@/lib/clsx";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-ink-900">{item.q}</span>
              <span
                className={clsx(
                  "flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform",
                  isOpen && "rotate-45",
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-ink-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
