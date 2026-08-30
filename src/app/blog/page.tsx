import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { posts } from "@/content/blog";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = pageMeta({
  title: "Blog",
  description:
    "Practical guides for running clinics and small businesses on WhatsApp — cutting no-shows, NRI family care, payments and growth.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Blog</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Guides for running your business on WhatsApp
          </h1>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-brand-300"
            >
              <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {post.category}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink-900 group-hover:text-brand-700">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-ink-400">
                {formatDate(post.date)} · {post.readingMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
