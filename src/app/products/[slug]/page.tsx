import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductStickyBar } from "@/components/products/ProductStickyBar";
import { TrustBadges } from "@/components/products/TrustBadges";
import { getProductBySlug, getAllSlugs } from "@/lib/products";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartDesktop } from "./AddToCartDesktop";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: `${product.name} | Nectar Pures`,
    description: product.shortDescription,
  };
}

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <article className="pb-28 lg:pb-16">
        <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <nav className="text-sm text-earth-muted">
            <Link href="/" className="hover:text-earth">
              Home
            </Link>
            <span className="mx-2 text-earth/40">/</span>
            <Link href="/#featured" className="hover:text-earth">
              Shop
            </Link>
            <span className="mx-2 text-earth/40">/</span>
            <span className="text-earth">{product.name}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ProductGallery images={product.images} productName={product.name} />

            <div className="flex flex-col">
              <div className="lg:sticky lg:top-28">
                {product.badge && (
                  <span className="inline-flex rounded-full bg-beige px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-earth">
                    {product.badge}
                  </span>
                )}
                <h1 className="mt-3 font-serif text-4xl text-earth sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg text-earth-muted leading-relaxed">
                  {product.shortDescription}
                </p>
                <div className="mt-8 flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-3xl text-earth">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice != null && (
                    <span className="text-lg text-earth-muted line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>

                <div className="mt-8 hidden lg:block">
                  <AddToCartDesktop product={product} />
                </div>

                <div className="mt-8">
                  <TrustBadges />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-earth/10 pt-16 lg:grid-cols-3">
            <section>
              <h2 className="font-serif text-xl text-earth">Description</h2>
              <p className="mt-4 text-earth-muted leading-relaxed">
                {product.description}
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl text-earth">Benefits</h2>
              <ul className="mt-4 space-y-3 text-earth-muted">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-honey" />
                    {b}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-serif text-xl text-earth">Ingredients</h2>
              <ul className="mt-4 space-y-2 text-earth-muted">
                {product.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
      <ProductStickyBar product={product} />
    </>
  );
}
