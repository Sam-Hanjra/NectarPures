import { BlogPostsSectionSkeleton } from "@/components/blog/BlogPostsSectionSkeleton";

export default function BlogLoading() {
  return (
    <div className="min-h-[600px] px-4 pb-16 pt-24 sm:min-h-[700px] sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-6xl animate-pulse pb-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-4">
            <div className="h-4 w-28 rounded bg-earth/15" />
            <div className="h-10 w-full rounded bg-earth/10" />
            <div className="h-10 w-full rounded bg-earth/10" />
            <div className="h-10 w-3/4 rounded bg-earth/10" />
          </div>
          <div className="col-span-2 aspect-square rounded-2xl bg-earth/10 sm:aspect-[3/2]" />
        </div>
      </div>
      <BlogPostsSectionSkeleton />
    </div>
  );
}
