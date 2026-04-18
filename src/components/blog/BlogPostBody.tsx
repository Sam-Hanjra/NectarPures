import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-10 font-serif text-2xl text-earth first:mt-0 sm:text-3xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-serif text-xl text-earth">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-earth-muted leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-earth-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-earth-muted">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-earth">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-honey-deep underline-offset-2 hover:underline"
      rel="noopener noreferrer"
      target={href?.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-honey/50 bg-beige/40 py-2 pl-4 text-earth-muted italic">
      {children}
    </blockquote>
  ),
};

export function BlogPostBody({ content }: { content: string }) {
  return (
    <div className="blog-md space-y-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
