import { Container } from "@/components/ui/Container";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-400">Last updated: {updated}</p>
        <p className="mt-6 text-lg text-ink-700">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-ink-900">{s.heading}</h2>
              <div className="mt-3 space-y-3">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-ink-700">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
