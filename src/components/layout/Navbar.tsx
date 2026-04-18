"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/#featured", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/#story", label: "Our Story" },
  { href: "/#testimonials", label: "Reviews" },
];

function CartLink({
  transparent,
  itemCount,
  className = "",
}: {
  transparent: boolean;
  itemCount: number;
  className?: string;
}) {
  return (
    <Link
      href="/cart"
      className={`relative inline-flex rounded-2xl px-3 py-2 text-sm font-medium transition ${
        transparent
          ? "bg-white/15 text-white hover:bg-white/25"
          : "bg-beige/80 text-earth hover:bg-beige"
      } ${className}`}
    >
      Cart
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-honey px-1 text-[10px] font-semibold text-earth">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Link>
  );
}

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !solid;
  const navClass = transparent
    ? "border-transparent bg-transparent text-white"
    : "border-beige/60 bg-cream/90 text-earth shadow-soft backdrop-blur-md";

  const linkClass = transparent
    ? "text-white/95 hover:text-white"
    : "text-earth-muted hover:text-earth";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${navClass}`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-3 md:h-16 md:grid-cols-3 md:items-center md:gap-y-0 md:px-6 md:py-0 lg:px-8">
        <div className="col-span-2 flex items-center justify-between md:col-span-1 md:justify-start">
          <Link
            href="/"
            className={`font-serif text-xl tracking-tight transition-colors ${
              transparent ? "text-white drop-shadow-sm" : "text-earth"
            }`}
          >
            Nectar Pures
          </Link>
          <CartLink transparent={transparent} itemCount={itemCount} className="md:hidden" />
        </div>

        <ul className="col-span-2 flex items-center justify-center gap-6 text-sm font-medium tracking-wide md:col-span-1 md:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`transition hover:opacity-80 ${linkClass}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="col-span-2 hidden justify-end md:col-span-1 md:flex">
          <CartLink transparent={transparent} itemCount={itemCount} />
        </div>
      </nav>
    </header>
  );
}
