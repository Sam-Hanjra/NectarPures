import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Nectar Pures hair oils—usage, storage, shipping, and what to expect from cold-pressed botanicals.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Will hair oil make my hair greasy?",
    a: "When used in small amounts on mid-lengths and ends, argan absorbs without a heavy film. If your hair is very fine, start with one drop and add only where needed. Scalp oils are meant as pre-wash treatments—always shampoo after.",
  },
  {
    q: "How should I store my bottles?",
    a: "Keep them upright, tightly closed, and out of direct sunlight. A cool, dry spot (not the shower ledge) helps oils stay fresh.",
  },
  {
    q: "Are your products silicone-free?",
    a: "Yes. Our formulas are built around cold-pressed botanical oils without silicones or mineral oil, so you can layer them with your favorite sulfate-free wash day.",
  },
  {
    q: "Can I use oils on color-treated hair?",
    a: "Yes—apply mainly to lengths and ends, and follow your colorist’s timing for washes. When in doubt, patch test and start with less product.",
  },
  {
    q: "How long does shipping take?",
    a: "Across Pakistan, we usually ship within 1–2 business days; delivery is often 2–5 days to major cities and can take a bit longer to remote areas. See our shipping page for full details.",
  },
  {
    q: "What is your return policy?",
    a: "We accept unopened items within 14 days of delivery. Opened products may qualify for store credit on a case-by-case basis. Read the full policy on our shipping & returns page.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">Help</p>
      <h1 className="mt-3 font-serif text-4xl text-earth sm:text-5xl">Frequently asked questions</h1>
      <p className="mt-4 text-earth-muted leading-relaxed">
        Straight answers on routines, ingredients, and orders.{" "}
        <Link href="/shipping-returns" className="font-medium text-honey-deep underline-offset-2 hover:underline">
          Shipping & returns
        </Link>{" "}
        ·{" "}
        <Link href="/" className="font-medium text-honey-deep underline-offset-2 hover:underline">
          Shop
        </Link>
      </p>

      <div className="mt-12 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-earth/10 bg-white/80 shadow-soft open:border-honey/20"
          >
            <summary className="cursor-pointer list-none px-6 py-4 font-medium text-earth marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span className="mt-0.5 shrink-0 text-honey-deep transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-earth/8 px-6 pb-5 pt-0 text-sm leading-relaxed text-earth-muted">
              <p className="pt-4">{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
