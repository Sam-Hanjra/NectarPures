import type { Product } from "./types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [
  {
    id: "1",
    slug: "organic-argan-hair-oil",
    name: "Organic Argan Hair Oil",
    shortDescription:
      "Cold-pressed argan with vitamin E for shine, softness, and everyday protection.",
    description:
      "Our signature argan oil is cold-pressed in small batches and lightly filtered to keep fatty acids and antioxidants intact. It absorbs cleanly—no greasy film—so ends stay smooth and lengths catch the light without weight.",
    price: 28,
    compareAtPrice: 34,
    images: [
      img("photo-1571875257727-256c39da42af"),
      img("photo-1556228720-195a672e8a03"),
      img("photo-1620916566398-39f1143ab7be"),
    ],
    benefits: [
      "Helps reduce frizz and improve manageability",
      "Supports stronger-feeling strands with regular use",
      "Light enough for daily ends-and-mids application",
    ],
    ingredients: [
      "Organic argan (Argania spinosa) kernel oil",
      "Tocopherol (vitamin E, natural)",
    ],
    badge: "Bestseller",
  },
  {
    id: "2",
    slug: "rosemary-castor-scalp-oil",
    name: "Rosemary & Castor Scalp Oil",
    shortDescription:
      "A focused scalp ritual with rosemary and Jamaican black castor—massage, rinse, or overnight.",
    description:
      "We blend cooling rosemary essential oil with rich castor to create a pre-wash or overnight treatment. Massage into the scalp to stimulate circulation, then shampoo as usual—ideal for dry scalps and protective styles.",
    price: 32,
    images: [
      img("photo-1617897903246-719242758050"),
      img("photo-1596462502278-27bfdc403348"),
      img("photo-1608571423902-eed4a5ad8108"),
    ],
    benefits: [
      "Designed for scalp massage and root care",
      "No silicones or mineral oil",
      "Pairs with your favorite sulfate-free shampoo",
    ],
    ingredients: [
      "Organic castor (Ricinus communis) seed oil",
      "Organic rosemary (Rosmarinus officinalis) leaf oil",
      "Organic sunflower seed oil",
    ],
    badge: "Organic",
  },
  {
    id: "3",
    slug: "nectar-ritual-gift-set",
    name: "Nectar Ritual Gift Set",
    shortDescription:
      "Our argan oil plus rosemary & castor scalp oil in a keepsake box—perfect for gifting.",
    description:
      "Share the ritual: full sizes of both formulas in a recyclable craft box with a simple how-to card. A thoughtful gift for anyone building a gentler hair routine—color-safe when used as directed.",
    price: 58,
    compareAtPrice: 64,
    images: [
      img("photo-1507003211169-0a1dd7228f2d"),
      img("photo-1571875257727-256c39da42af"),
      img("photo-1556228720-195a672e8a03"),
    ],
    benefits: [
      "Gift-ready packaging",
      "Two complementary routines—lengths and scalp",
      "Includes care & usage card",
    ],
    ingredients: ["See individual bottles for full ingredient lists"],
    badge: "Limited",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
