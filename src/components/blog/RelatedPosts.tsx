import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types/blog";
import { formatReadingTime } from "@/lib/utils/reading-time";

type RelatedPostsProps = {
  posts: BlogPost[];
  currentSlug: string;
};

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const filtered = posts.filter((p) => p.slug !== currentSlug);
  if (filtered.length === 0) return null;

  return (
    <section className="mt-16 border-t border-earth/10 pt-12">
      <h2 className="font-serif text-2xl text-earth sm:text-3xl">Related articles</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-earth/8 bg-white/90 shadow-soft transition hover:border-honey/25 hover:shadow-[0_12px_40px_-12px_rgb(78_52_46_/_0.18)]"
          >
            <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-beige/50">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="min-h-[3.5rem] font-serif text-lg text-earth line-clamp-2">
                {post.title}
              </h3>
              {post.excerpt ? (
                <p className="mt-1 flex-1 text-sm text-earth-muted line-clamp-2">{post.excerpt}</p>
              ) : (
                <div className="flex-1" />
              )}
              <div className="mt-3 flex items-center justify-between text-xs text-earth-muted">
                <time dateTime={post.date}>{format(new Date(post.date), "MMM d, yyyy")}</time>
                <span>{formatReadingTime(post.readingTimeMinutes)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
