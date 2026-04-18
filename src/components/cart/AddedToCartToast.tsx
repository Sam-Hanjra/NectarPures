"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function AddedToCartToast() {
  const { lastAddedProductName, addSequence } = useCart();

  if (!lastAddedProductName) return null;

  return (
    <div
      key={addSequence}
      className="pointer-events-none fixed inset-x-4 bottom-24 z-[60] flex justify-center md:bottom-10"
      role="status"
      aria-live="polite"
    >
      <div className="pointer-events-auto flex max-w-md animate-cart-toast-in items-center gap-4 rounded-2xl border border-earth/10 bg-cream/95 px-5 py-4 shadow-[0_12px_40px_-8px_rgb(78_52_46_/_0.25)] backdrop-blur-md">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-honey text-lg text-earth shadow-glow">
          ✓
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-earth">Added to cart</p>
          <p className="truncate text-sm text-earth-muted">{lastAddedProductName}</p>
        </div>
        <Link
          href="/cart"
          className="shrink-0 rounded-xl bg-earth px-4 py-2 text-xs font-semibold text-beige transition hover:bg-honey hover:text-earth"
        >
          View cart
        </Link>
      </div>
    </div>
  );
}
