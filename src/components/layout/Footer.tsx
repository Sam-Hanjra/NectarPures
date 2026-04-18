import Link from "next/link";

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-earth/10 bg-earth text-beige/95">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-beige">Nectar Pures</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-beige/75">
              Organic hair oils—cold-pressed, silicone-free, and blended in
              small batches for shine, scalp comfort, and strands that feel
              cared for.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-honey/90">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#featured" className="hover:text-honey">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-honey">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#story" className="hover:text-honey">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-honey">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-honey/90">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-honey"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-beige/55">
              hello@nectarpures.example
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-beige/10 pt-8 text-xs text-beige/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nectar Pures. All rights reserved.</p>
          <p className="text-beige/45">100% natural · Cold-pressed · Cruelty-free</p>
        </div>
      </div>
    </footer>
  );
}
