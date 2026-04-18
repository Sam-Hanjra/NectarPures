"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ALL_POSTS_CATEGORY, type BlogPost } from "@/lib/types/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogCardSkeleton } from "@/components/blog/BlogCardSkeleton";

type BlogPostsSectionProps = {
  posts: BlogPost[];
};

const POSTS_PER_LOAD = 6;

function getInitialPostsCount(): number {
  if (typeof window === "undefined") return 6;
  const width = window.innerWidth;
  if (width >= 1024) return 6;
  if (width >= 768) return 4;
  return 2;
}

export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const isInitialMount = useRef(true);
  const prevCategoryRef = useRef<string | null>(category);
  const [visibleCount, setVisibleCount] = useState(() => getInitialPostsCount());
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(getInitialPostsCount());
  }, [category]);

  const filteredPosts = useMemo(() => {
    if (category && category !== ALL_POSTS_CATEGORY) {
      return posts.filter((p) => p.category === category);
    }
    return posts;
  }, [category, posts]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevCategoryRef.current = category;
      return;
    }
    if (prevCategoryRef.current !== category) {
      prevCategoryRef.current = category;
      const el = document.getElementById("blog-posts");
      if (el) {
        const timer = setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [category]);

  useEffect(() => {
    if (visibleCount >= filteredPosts.length || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + POSTS_PER_LOAD);
            setIsLoading(false);
          }, 400);
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredPosts.length, isLoading]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div id="blog-posts" className="mx-auto my-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      {filteredPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
            {isLoading
              ? Array.from({ length: POSTS_PER_LOAD }).map((_, i) => (
                  <BlogCardSkeleton key={`skeleton-${i}`} />
                ))
              : null}
          </div>
          {hasMore && !isLoading ? (
            <div ref={loadMoreRef} className="h-10 w-full" aria-hidden />
          ) : null}
        </>
      ) : (
        <div className="py-12 text-center">
          <p className="text-lg font-semibold text-earth-muted">
            No posts in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
