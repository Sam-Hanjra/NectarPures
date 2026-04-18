import type { BlogPost } from "@/lib/types/blog";
import type { Product } from "@/lib/types";
import { getSiteUrl } from "@/lib/site";

export function organizationJsonLd(): object {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nectar Pures",
    url,
    description:
      "Organic cold-pressed hair oils—silicone-free, small-batch, rooted in botanicals.",
  };
}

export function productJsonLd(product: Product): object {
  const base = getSiteUrl();
  const productUrl = `${base}/products/${product.slug}`;
  const images = product.images.map((src) =>
    src.startsWith("http") ? src : `${base}${src}`,
  );
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: images,
    brand: {
      "@type": "Brand",
      name: "Nectar Pures",
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "PKR",
      price: String(product.price),
      availability: "https://schema.org/InStock",
    },
  };
}

export function articleJsonLd(post: BlogPost): object {
  const base = getSiteUrl();
  const url = `${base}/blog/${post.slug}`;
  const image = post.image.startsWith("http") ? post.image : `${base}${post.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Nectar Pures",
    },
    publisher: {
      "@type": "Organization",
      name: "Nectar Pures",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
