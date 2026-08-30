"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, site, waLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clsx } from "@/lib/clsx";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-brand-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">C</span>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink-700 hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href={waLink()} variant="whatsapp" whatsappIcon external size="md">
            Chat
          </Button>
          <Button href="/demo" variant="primary" size="md">
            Book a Free Demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-800">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      <div className={clsx("md:hidden", open ? "block" : "hidden")}>
        <Container className="flex flex-col gap-1 border-t border-ink-100 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button href={waLink()} variant="whatsapp" whatsappIcon external size="lg">
              Chat with us on WhatsApp
            </Button>
            <Button href="/demo" variant="primary" size="lg">
              Book a Free Demo
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
