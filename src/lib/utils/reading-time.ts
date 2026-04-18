/**
 * Reading time from plain text (words per minute ≈ 225).
 */
export function calculateReadingTime(text: string): number {
  const cleanText = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
  const wordCount = cleanText.trim().split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 225;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime);
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 1) return "1 min read";
  return `${minutes} mins read`;
}
