"use client";

import type { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

export function AddToCartDesktop({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className="w-full rounded-2xl bg-earth py-4 text-sm font-semibold text-beige shadow-soft transition hover:bg-honey hover:text-earth hover:shadow-glow active:scale-[0.99]"
    >
      Add to Cart
    </button>
  );
}
