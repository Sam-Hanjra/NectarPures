import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { BlogPost, BlogPostFrontmatter } from "@/lib/types/blog";
import { calculateReadingTime } from "@/lib/utils/reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parsePost(filename: string): BlogPost | null {
  const id = filename.replace(/\.md$/, "");
  const full = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<BlogPostFrontmatter>;
  if (!fm.title || !fm.slug || !fm.date || !fm.category || !fm.image) {
    return null;
  }
  const readingFromFm =
    typeof fm.readingTimeMinutes === "number" && fm.readingTimeMinutes > 0
      ? fm.readingTimeMinutes
      : calculateReadingTime(content);
  return {
    id,
    title: fm.title,
    slug: fm.slug,
    excerpt: fm.excerpt ?? "",
    date: fm.date,
    category: fm.category,
    image: fm.image,
    imageAlt: fm.imageAlt,
    content,
    readingTimeMinutes: readingFromFm,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files
    .map((f) => parsePost(f))
    .filter((p): p is BlogPost => p !== null);
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

export function extractCategoriesFromPosts(posts: BlogPost[]): string[] {
  const set = new Set<string>();
  for (const p of posts) {
    if (p.category?.trim()) set.add(p.category.trim());
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3,
): BlogPost[] {
  return getAllBlogPosts()
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return getAllBlogPosts().map((p) => p.slug);
}
