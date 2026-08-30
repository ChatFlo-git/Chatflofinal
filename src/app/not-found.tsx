import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-28 text-center">
      <p className="text-6xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary">
          Back to home
        </Button>
        <Button href="/industries" variant="secondary">
          Browse industries
        </Button>
      </div>
    </Container>
  );
}
