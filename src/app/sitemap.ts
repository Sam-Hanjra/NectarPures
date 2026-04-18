import type { MetadataRoute } from "next";
import { getAllSlugs as getAllBlogSlugs } from "@/lib/blog";
import { getAllSlugs as getAllProductSlugs } from "@/lib/products";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${base}/shipping-returns`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${base}/cart`, lastModified, changeFrequency: "monthly", priority: 0.3 },
  ];

  const products: MetadataRoute.Sitemap = getAllProductSlugs().map((slug) => ({
    url: `${base}/products/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const posts: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...products, ...posts];
}
