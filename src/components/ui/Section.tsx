import { clsx } from "@/lib/clsx";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-16 sm:py-20 lg:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx(centered && "mx-auto max-w-2xl text-center", "mb-12", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-600">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-ink-600">{subtitle}</p>}
    </div>
  );
}
