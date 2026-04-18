import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function BlogBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-earth-muted">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center">
            {index > 0 ? (
              <span className="mx-1 text-earth/35" aria-hidden>
                /
              </span>
            ) : null}
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-earth">
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? "font-medium text-earth" : ""}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
