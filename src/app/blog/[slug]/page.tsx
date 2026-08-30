import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost } from "@/content/blog";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            ← All posts
          </Link>
          <span className="mt-6 block w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm text-ink-400">
            By {post.author} · {formatDate(post.date)} · {post.readingMinutes} min read
          </p>

          <div className="mt-8 space-y-5">
            {post.body.map((block, i) =>
              block.type === "h2" ? (
                <h2 key={i} className="pt-2 text-2xl font-bold text-ink-900">
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="text-lg leading-relaxed text-ink-700">
                  {block.text}
                </p>
              ),
            )}
          </div>
        </Container>
      </article>

      <CtaBanner />
    </>
  );
}
