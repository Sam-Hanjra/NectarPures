import { FadeIn } from "@/components/ui/FadeIn";

const quotes = [
  {
    text: "The argan oil absorbs so fast—my ends stopped feeling straw-like after a week.",
    name: "Amelia R.",
    note: "Verified buyer",
  },
  {
    text: "Finally an oil that does not sit on top of my hair. Clean label and glass bottle.",
    name: "Jordan K.",
    note: "Subscriber",
  },
  {
    text: "The rosemary scalp oil changed my wash days—less itch, more bounce.",
    name: "Priya M.",
    note: "Verified buyer",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">
              Real routines
            </p>
            <h2 className="mt-3 font-serif text-3xl text-earth sm:text-4xl">
              Loved by wash day regulars
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <FadeIn key={q.name} delayMs={i * 70}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-earth/8 bg-gradient-to-b from-white/90 to-beige/40 p-8 shadow-soft">
                <p className="text-sm leading-relaxed text-earth">&ldquo;{q.text}&rdquo;</p>
                <footer className="mt-6 border-t border-earth/10 pt-5">
                  <p className="font-medium text-earth">{q.name}</p>
                  <p className="text-xs text-earth-muted">{q.note}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
