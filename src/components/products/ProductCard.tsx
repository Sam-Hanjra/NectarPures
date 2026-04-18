"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const image = product.images[0];
  const badge = product.badge ?? "Organic";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-earth/8 bg-white/80 shadow-soft backdrop-blur-sm transition hover:border-honey/25 hover:shadow-[0_12px_40px_-12px_rgb(78_52_46_/_0.18)]">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-beige/50">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-earth shadow-sm">
          {badge}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-xl text-earth transition group-hover:text-honey-deep">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-earth-muted">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <p className="font-semibold text-earth">{formatPrice(product.price)}</p>
            {product.compareAtPrice != null && (
              <p className="text-xs text-earth-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="shrink-0 rounded-xl bg-earth px-4 py-2.5 text-xs font-semibold text-beige transition hover:bg-honey hover:text-earth hover:shadow-glow"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
