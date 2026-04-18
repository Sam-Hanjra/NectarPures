import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  heading?: string;
  subheading?: string;
  id?: string;
};

export function ProductGrid({
  products,
  heading = "Featured",
  subheading = "Our most-loved oils, chosen for purity and everyday results.",
  id,
}: ProductGridProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-earth sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-earth-muted">{subheading}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
