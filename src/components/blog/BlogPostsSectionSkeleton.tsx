import { BlogCardSkeleton } from "@/components/blog/BlogCardSkeleton";

export function BlogPostsSectionSkeleton() {
  return (
    <div className="mx-auto my-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
