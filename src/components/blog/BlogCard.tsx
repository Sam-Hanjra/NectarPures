import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types/blog";
import { formatReadingTime } from "@/lib/utils/reading-time";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-earth/8 bg-white/90 shadow-soft backdrop-blur-sm transition hover:border-honey/25 hover:shadow-[0_12px_40px_-12px_rgb(78_52_46_/_0.18)]">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-video w-full overflow-hidden bg-beige/50">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-3 inline-block max-w-fit rounded-full bg-earth/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-beige">
            {post.category}
          </span>
          <h2 className="font-serif text-xl text-earth line-clamp-2">{post.title}</h2>
          {post.excerpt ? (
            <p className="mt-2 flex-1 text-sm text-earth-muted line-clamp-2">{post.excerpt}</p>
          ) : null}
          <div className="mt-auto flex items-center justify-between pt-4 text-sm text-earth-muted">
            <time dateTime={post.date}>{format(new Date(post.date), "MMM d, yyyy")}</time>
            <span>{formatReadingTime(post.readingTimeMinutes)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
