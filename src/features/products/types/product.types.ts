export type ProductBadge = "new" | "restocked" | "sale";

export type Product = {
  id: string;
  slug: string;
  name: string;
  color: string;
  colorCount?: number;
  price: number;
  compareAtPrice?: number;
  image: string;
  hoverImage?: string;
  sizes: string[];
  badge?: ProductBadge;
  collection?: string;
  category?: string;
};

export type ProductSection = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  href: string;
  ctaLabel: string;
  products: Product[];
};
