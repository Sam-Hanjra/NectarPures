import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogPageHeroSection } from "@/components/blog/BlogPageHeroSection";
import { BlogPostsSection } from "@/components/blog/BlogPostsSection";
import { BlogPostsSectionSkeleton } from "@/components/blog/BlogPostsSectionSkeleton";
import { extractCategoriesFromPosts, getAllBlogPosts } from "@/lib/blog";
import { ALL_POSTS_CATEGORY } from "@/lib/types/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Hair oil rituals, scalp care, and ingredient guides from Nectar Pures—practical tips for healthy-looking strands.",
};

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const posts = getAllBlogPosts();
  const availableCategories = extractCategoriesFromPosts(posts);

  return (
    <div className="min-h-[600px] px-4 pb-16 pt-24 sm:min-h-[700px] sm:px-6 sm:pt-28 lg:px-8">
      <BlogPageHeroSection
        selectedCategory={category || ALL_POSTS_CATEGORY}
        categories={availableCategories}
      />
      <Suspense fallback={<BlogPostsSectionSkeleton />}>
        <BlogPostsSection posts={posts} />
      </Suspense>
    </div>
  );
}
