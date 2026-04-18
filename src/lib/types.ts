export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  benefits: string[];
  ingredients: string[];
  /** Short numbered steps for product detail page */
  howToUse: string[];
  badge?: string;
};
