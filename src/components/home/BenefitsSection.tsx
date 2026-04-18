import { FadeIn } from "@/components/ui/FadeIn";

const items = [
  {
    title: "100% Organic botanicals",
    body: "Certified organic oils and extracts—no synthetic shortcuts in the bottle.",
  },
  {
    title: "No harsh extras",
    body: "Silicone-free, sulfate-free formulas you can layer with your favorite wash day.",
  },
  {
    title: "Small-batch blended",
    body: "Crafted in limited runs so every bottle stays fresh and true to the harvest.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-honey/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">
              Why Nectar Pures
            </p>
            <h2 className="mt-3 font-serif text-3xl text-earth sm:text-4xl">
              Oils you can trust on scalp and strands
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delayMs={i * 80}>
              <div className="h-full rounded-2xl border border-earth/8 bg-white/70 p-8 shadow-soft backdrop-blur-sm transition hover:border-honey/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-beige text-lg">
                  {i === 0 ? "🌿" : i === 1 ? "✨" : "💧"}
                </div>
                <h3 className="mt-5 font-serif text-xl text-earth">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-earth-muted">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
