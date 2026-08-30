import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500",
  secondary: "bg-white text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50 focus-visible:ring-brand-500",
  // WhatsApp green is reserved strictly for WhatsApp CTAs.
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark focus-visible:ring-whatsapp",
  ghost: "text-ink-700 hover:bg-ink-100 focus-visible:ring-ink-300",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02A9.86 9.86 0 0 0 12.04 2Z" />
    </svg>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Renders the WhatsApp glyph (use with variant="whatsapp"). */
  whatsappIcon?: boolean;
  type?: "button" | "submit";
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  whatsappIcon,
  type = "button",
  external,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {whatsappIcon && <WhatsAppGlyph />}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
