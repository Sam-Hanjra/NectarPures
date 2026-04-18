import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & returns",
  description:
    "Shipping times, rates, and return policy for Nectar Pures organic hair oils.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">Policies</p>
      <h1 className="mt-3 font-serif text-4xl text-earth sm:text-5xl">Shipping & returns</h1>
      <p className="mt-4 text-earth-muted leading-relaxed">
        Clear expectations before you check out. Questions?{" "}
        <a href="mailto:hello@nectarpures.example" className="font-medium text-honey-deep underline-offset-2 hover:underline">
          Email us
        </a>
        .
      </p>

      <div className="mt-12 space-y-10 text-earth-muted">
        <section>
          <h2 className="font-serif text-2xl text-earth">Shipping</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
            <li>
              <strong className="text-earth">Processing:</strong> Orders typically ship within{" "}
              <strong className="text-earth">1–2 business days</strong> (excluding weekends and holidays).
            </li>
            <li>
              <strong className="text-earth">Pakistan (nationwide):</strong> Standard courier delivery is
              typically <strong className="text-earth">2–5 business days</strong> to major cities
              (Karachi, Lahore, Islamabad, Rawalpindi, etc.) and often{" "}
              <strong className="text-earth">4–8 business days</strong> to other areas, depending on
              address and service.
            </li>
            <li>
              <strong className="text-earth">Tracking:</strong> You’ll receive a confirmation email with
              tracking when your order ships.
            </li>
            <li>
              <strong className="text-earth">Rates:</strong> Shipping within Pakistan is calculated at
              checkout based on weight and city—rates align with standard nationwide courier pricing.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-earth">Returns</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
            <li>
              <strong className="text-earth">Window:</strong> Unopened items may be returned within{" "}
              <strong className="text-earth">14 days of delivery</strong> for a refund to the original payment
              method, subject to inspection.
            </li>
            <li>
              <strong className="text-earth">Opened products:</strong> For safety, we generally cannot
              resell opened oils. We may offer <strong className="text-earth">store credit</strong> on a
              case-by-case basis—contact us with your order number.
            </li>
            <li>
              <strong className="text-earth">How to start:</strong> Email{" "}
              <a
                href="mailto:hello@nectarpures.example"
                className="font-medium text-honey-deep underline-offset-2 hover:underline"
              >
                hello@nectarpures.example
              </a>{" "}
              with your order number and reason for return. We’ll send instructions and the return address.
            </li>
            <li>
              <strong className="text-earth">Refund timing:</strong> After we receive and approve your
              return, refunds typically post within <strong className="text-earth">5–10 business days</strong>,
              depending on your bank or payment method.
            </li>
          </ul>
        </section>

        <p className="text-sm">
          <Link href="/faq" className="font-medium text-honey-deep underline-offset-2 hover:underline">
            Read the FAQ
          </Link>{" "}
          for product usage and storage tips.
        </p>
      </div>
    </div>
  );
}
