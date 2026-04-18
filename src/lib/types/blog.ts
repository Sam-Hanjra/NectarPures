export type BlogPostFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  /** Featured image — Unsplash or same-origin path under /public */
  image: string;
  imageAlt?: string;
  /** Optional override; otherwise derived from body word count */
  readingTimeMinutes?: number;
};

export type BlogPost = BlogPostFrontmatter & {
  content: string;
  readingTimeMinutes: number;
  /** Stable id for React keys (filename without .md) */
  id: string;
};

export const ALL_POSTS_CATEGORY = "All posts";
