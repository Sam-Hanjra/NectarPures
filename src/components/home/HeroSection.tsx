import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[min(92vh,880px)] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=2000&q=80"
        alt="Natural hair oil bottles and botanicals in warm light"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-earth/55 via-earth/35 to-earth/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgb(244_180_0_/_0.15),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-beige/90">
            Organic · Cold-pressed · Silicone-free
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-beige sm:text-5xl lg:text-6xl">
            Ritual-grade oils for hair that feels alive
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-beige/85">
            Lightweight blends rooted in plants—crafted for shine, scalp comfort,
            and strands that move with you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#featured"
              className="inline-flex items-center justify-center rounded-2xl bg-honey px-8 py-3.5 text-sm font-semibold text-earth shadow-glow transition hover:bg-[#ffc21a] hover:shadow-[0_12px_40px_-8px_rgb(244_180_0_/_0.45)]"
            >
              Shop oils
            </Link>
            <Link
              href="/#story"
              className="inline-flex items-center justify-center rounded-2xl border border-beige/40 bg-white/10 px-8 py-3.5 text-sm font-medium text-beige backdrop-blur-sm transition hover:bg-white/15"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent"
        aria-hidden
      />
    </section>
  );
}
