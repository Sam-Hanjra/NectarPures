"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

export default function CartPage() {
  const { lines, subtotal, setQuantity, removeLine } = useCart();

  return (
    <div className="mx-auto min-h-[70vh] max-w-6xl px-4 pb-36 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <h1 className="font-serif text-4xl text-earth">Your Cart</h1>
      <p className="mt-2 text-earth-muted">
        Organic hair oils, packed with care. Review your bottles before checkout.
      </p>

      {lines.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-earth/10 bg-white/70 p-12 text-center shadow-soft">
          <p className="text-earth-muted">Your cart is empty.</p>
          <Link
            href="/#featured"
            className="mt-6 inline-flex rounded-2xl bg-honey px-8 py-3 text-sm font-semibold text-earth shadow-glow transition hover:bg-[#ffc21a]"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <ul className="space-y-6">
            {lines.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex gap-5 rounded-2xl border border-earth/8 bg-white/80 p-4 shadow-soft backdrop-blur-sm sm:gap-8 sm:p-6"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-beige/50 sm:h-32 sm:w-32"
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/products/${product.slug}`}
                        className="font-serif text-lg text-earth hover:text-honey-deep"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 text-sm text-earth-muted">
                        {formatPrice(product.price)} each ·{" "}
                        <span className="text-earth/80">Organic</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(product.id)}
                      className="text-xs font-medium text-earth-muted underline-offset-2 hover:text-earth hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <div className="inline-flex items-center rounded-xl border border-earth/15 bg-cream/80">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        className="px-3 py-2 text-earth hover:bg-beige/80"
                        onClick={() =>
                          setQuantity(product.id, quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="min-w-[2rem] text-center text-sm font-medium text-earth">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        className="px-3 py-2 text-earth hover:bg-beige/80"
                        onClick={() =>
                          setQuantity(product.id, quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-earth">
                      {formatPrice(product.price * quantity)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-earth/10 bg-gradient-to-b from-white/95 to-beige/50 p-6 shadow-soft">
              <h2 className="font-serif text-xl text-earth">Order summary</h2>
              <div className="mt-6 flex justify-between text-sm text-earth-muted">
                <span>Subtotal</span>
                <span className="font-medium text-earth">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-xs text-earth-muted">
                Shipping & taxes calculated at checkout. 100% natural guarantee.
              </p>
              <button
                type="button"
                className="mt-8 w-full rounded-2xl bg-earth py-4 text-sm font-semibold text-beige transition hover:bg-honey hover:text-earth hover:shadow-glow"
              >
                Checkout
              </button>
              <Link
                href="/#featured"
                className="mt-4 block text-center text-sm font-medium text-earth-muted hover:text-earth"
              >
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      )}

      {lines.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-earth/10 bg-cream/95 px-4 py-4 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
            <div>
              <p className="text-xs text-earth-muted">Subtotal</p>
              <p className="font-serif text-xl text-earth">
                {formatPrice(subtotal)}
              </p>
            </div>
            <button
              type="button"
              className="min-w-[10rem] rounded-2xl bg-honey px-6 py-3.5 text-sm font-semibold text-earth shadow-glow transition hover:bg-[#ffc21a]"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
