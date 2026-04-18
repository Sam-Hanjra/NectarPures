import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function StorySection() {
  return (
    <section id="story" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="relative order-2 aspect-4/5 overflow-hidden rounded-2xl shadow-soft lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
              alt="Hands applying nourishing hair oil"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-earth/25 to-transparent" />
          </FadeIn>
          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">
                Our story
              </p>
              <h2 className="mt-3 font-serif text-3xl text-earth sm:text-4xl">
                Hair care, slowed down and simplified
              </h2>
              <p className="mt-6 text-earth-muted leading-relaxed">
                We started Nectar Pures with one idea: your routine should feel
                as good as the results look. Our oils are blended in small runs
                from cold-pressed botanicals—no silicones filling the bottle, no
                mystery fragrance.
              </p>
              <p className="mt-4 text-earth-muted leading-relaxed">
                Every batch is tested for purity, packed in recyclable glass, and
                labeled with ingredients you can recognize—so you always know
                what you are putting next to your skin and scalp.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-earth">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                  Ethical sourcing & transparent suppliers
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                  Gentle, filler-free formulas
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                  Organic certification on key botanicals
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
