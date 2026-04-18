"use client";

import type { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format-price";

export function ProductStickyBar({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-earth/10 bg-cream/95 px-4 py-3 shadow-[0_-8px_32px_-12px_rgb(78_52_46_/_0.2)] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
        <div>
          <p className="text-xs text-earth-muted">Total</p>
          <p className="font-semibold text-earth">{formatPrice(product.price)}</p>
        </div>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="min-w-[10rem] rounded-2xl bg-honey px-6 py-3 text-sm font-semibold text-earth shadow-glow transition hover:bg-[#ffc21a] active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
