import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80",
    alt: "Glass dropper bottle with golden hair oil",
  },
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    alt: "Serum and oil bottles on marble",
  },
  {
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    alt: "Natural beauty oils in soft daylight",
  },
  {
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    alt: "Hair care flat lay with botanicals",
  },
];

export function InstagramGallery() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">
                @nectarpures
              </p>
              <h2 className="mt-2 font-serif text-3xl text-earth sm:text-4xl">
                On the shelf & in the routine
              </h2>
            </div>
            <p className="max-w-md text-sm text-earth-muted">
              Slow rituals, shiny lengths, and bottles that look as good as they
              feel.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {shots.map((s, i) => (
            <FadeIn key={s.src} delayMs={i * 60}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-beige/50 shadow-soft">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/30 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
