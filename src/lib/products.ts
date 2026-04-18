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
    price: 7990,
    compareAtPrice: 9490,
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
    howToUse: [
      "Warm 2–4 drops between palms until the oil feels fluid.",
      "Press into mid-lengths and ends on dry or damp hair—avoid the scalp if hair is fine.",
      "Comb through with fingers or a wide-tooth comb for even coverage.",
      "Style as usual; add a half-drop to smooth flyaways after drying.",
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
    price: 8990,
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
    howToUse: [
      "Part hair and apply a thin line of oil directly to the scalp.",
      "Massage in small circles for 3–5 minutes—use fingertips, not nails.",
      "Leave on 20–30 minutes, or overnight in a loose braid if your scalp tolerates it.",
      "Follow with your usual shampoo; double-cleanse only if hair still feels coated.",
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
    price: 16490,
    compareAtPrice: 17990,
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
    howToUse: [
      "Use Organic Argan Hair Oil on lengths and ends for daily shine and frizz control.",
      "Use Rosemary & Castor Scalp Oil as a pre-wash scalp treatment 1–2 times per week.",
      "Gift box includes a usage card—store bottles upright, away from direct sun.",
    ],
    badge: "Limited",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
