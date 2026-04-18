import { FadeIn } from "@/components/ui/FadeIn";

const YOUTUBE_EMBED =
  "https://www.youtube.com/embed/UqhKSQ6i28I?rel=0&modestbranding=1";

export function VideoSection() {
  return (
    <section id="video" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">
              Watch
            </p>
            <h2 className="mt-3 font-serif text-3xl text-earth sm:text-4xl">
              See the ritual
            </h2>
            <p className="mt-4 text-sm text-earth-muted leading-relaxed">
              A quick look at how we blend and bottle small-batch hair oils—rooted
              in plants, made for real routines.
            </p>
          </div>
        </FadeIn>
        <FadeIn delayMs={80}>
          <div className="mx-auto mt-12 flex justify-center">
            <div className="relative aspect-9/16 w-full max-w-[min(100%,400px)] overflow-hidden rounded-2xl border border-earth/10 bg-earth/5 shadow-soft">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={YOUTUBE_EMBED}
                title="Nectar Pures — hair oil ritual"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
