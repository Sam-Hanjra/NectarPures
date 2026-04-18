import { format } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd } from "@/lib/seo/json-ld";
import { getAllSlugs, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog";
import { formatReadingTime } from "@/lib/utils/reading-time";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 6);

  return (
    <article className="pb-24 pt-24 sm:pt-28">
      <JsonLd data={articleJsonLd(post)} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <BlogBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">
          {post.category}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-earth sm:text-5xl">{post.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-earth-muted">
          <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
          <span aria-hidden>·</span>
          <span>{formatReadingTime(post.readingTimeMinutes)}</span>
        </div>

        <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl shadow-soft sm:aspect-[2/1]">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48rem"
            priority
          />
        </div>

        <div className="mt-12">
          <BlogPostBody content={post.content} />
        </div>

        <div className="mt-12 border-t border-earth/10 pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-honey-deep hover:text-earth"
          >
            ← Back to blog
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <RelatedPosts posts={related} currentSlug={post.slug} />
      </div>
    </article>
  );
}
