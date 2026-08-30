import { waLink } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner({
  title = "Ready to run your front desk on WhatsApp?",
  subtitle = "Book a free demo and we'll set you up in a day. No app downloads, no lock-in.",
  waMessage,
}: {
  title?: string;
  subtitle?: string;
  waMessage?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center sm:px-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" aria-hidden />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-brand-50">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/demo" variant="secondary" size="lg">
                Book a Free Demo
              </Button>
              <Button href={waLink(waMessage)} variant="whatsapp" whatsappIcon external size="lg">
                Chat with us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
