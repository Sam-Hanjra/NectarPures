export function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-earth/8 bg-white/70 shadow-soft">
      <div className="aspect-video animate-pulse bg-earth/10" />
      <div className="space-y-3 p-6">
        <div className="h-5 w-24 animate-pulse rounded-full bg-earth/10" />
        <div className="h-6 w-full animate-pulse rounded-lg bg-earth/10" />
        <div className="h-4 w-full animate-pulse rounded bg-earth/10" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-earth/10" />
        <div className="flex justify-between pt-2">
          <div className="h-4 w-24 animate-pulse rounded bg-earth/10" />
          <div className="h-4 w-20 animate-pulse rounded bg-earth/10" />
        </div>
      </div>
    </div>
  );
}
