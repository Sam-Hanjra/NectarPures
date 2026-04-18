export default function BlogPostLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <div className="h-4 w-48 animate-pulse rounded bg-earth/10" />
      <div className="mt-8 h-6 w-24 animate-pulse rounded bg-earth/10" />
      <div className="mt-4 h-12 w-full animate-pulse rounded-lg bg-earth/10" />
      <div className="mt-8 aspect-[21/9] animate-pulse rounded-2xl bg-earth/10 sm:aspect-[2/1]" />
      <div className="mt-12 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-earth/10" />
        <div className="h-4 w-full animate-pulse rounded bg-earth/10" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-earth/10" />
      </div>
    </div>
  );
}
