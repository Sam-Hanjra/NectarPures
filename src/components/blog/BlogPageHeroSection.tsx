"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ALL_POSTS_CATEGORY } from "@/lib/types/blog";

function ArrowIcon() {
  return (
    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" aria-hidden>
      <path
        d="M11.664 0.824219L18.6624 7.82262M18.6624 7.82262L11.664 14.821M18.6624 7.82262L0 7.82261"
        stroke="currentColor"
        strokeWidth="2.3328"
      />
    </svg>
  );
}

type BlogPageHeroSectionProps = {
  selectedCategory: string;
  categories: string[];
};

export function BlogPageHeroSection({
  selectedCategory = ALL_POSTS_CATEGORY,
  categories,
}: BlogPageHeroSectionProps) {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    if (category === ALL_POSTS_CATEGORY) {
      router.push("/blog");
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`);
    }
  };

  const allCategories = [ALL_POSTS_CATEGORY, ...categories];

  return (
    <div className="mx-auto max-w-6xl pb-12 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-honey-deep">
            Categories
          </p>
          <ul className="mt-6 flex flex-col gap-2 sm:gap-4">
            {allCategories.map((category) => {
              const isActive = category === selectedCategory;
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className="group flex w-full cursor-pointer items-center text-left"
                  >
                    <span
                      className={`transition-colors duration-300 sm:text-3xl ${
                        isActive
                          ? "font-serif text-2xl font-bold text-earth sm:text-4xl"
                          : "font-serif text-2xl text-earth/70 sm:text-4xl hover:text-earth"
                      }`}
                    >
                      {category}
                    </span>
                    <span className="ml-4 shrink-0 text-earth/40 transition duration-300 group-hover:translate-x-2 group-hover:text-honey-deep">
                      <ArrowIcon />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-2">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80"
              alt="Hair care and botanical oils"
              width={1200}
              height={800}
              className="aspect-square w-full object-cover sm:aspect-[3/2]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-earth/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
