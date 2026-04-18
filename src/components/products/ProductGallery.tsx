"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-beige/40 shadow-soft">
        <Image
          src={images[active] ?? images[0]}
          alt={`${productName} — photo ${active + 1}`}
          fill
          priority
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.08]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-earth/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                i === active
                  ? "border-honey shadow-glow"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
