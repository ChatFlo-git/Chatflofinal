import Link from "next/link";
import { site, waLink } from "@/content/site";
import { Container } from "@/components/ui/Container";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Industries", href: "/industries" },
      { label: "Book a Demo", href: "/demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink-100 bg-ink-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-brand-700">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">C</span>
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-600">
              Run your clinic or business on WhatsApp — booking, reminders, payments and updates, with one simple
              dashboard.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--color-whatsapp-dark)" }}
            >
              Chat with us on WhatsApp →
            </a>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink-900">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink-600 hover:text-brand-600">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-200 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.madeIn}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-600 ring-1 ring-ink-200">
              Built on Meta WhatsApp Cloud API
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-600 ring-1 ring-ink-200">
              DPDP Act 2023 compliant
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
