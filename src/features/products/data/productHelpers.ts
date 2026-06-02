import type { Product } from "../types/product.types";
import { allProducts } from "./products";

export type ProductFilters = {
  category?: string | null;
  filter?: string | null;
  q?: string | null;
};

const bestsellerIds = new Set(["ss-3", "ss-4", "247-5", "oc-1", "in-7"]);

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

export function getProductsByCollection(collection: string): Product[] {
  return allProducts.filter((product) => product.collection === collection);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((product) => product.category === category);
}

export function filterProducts(
  products: Product[],
  { category, filter, q }: ProductFilters,
): Product[] {
  const normalizedQuery = q?.trim().toLowerCase() ?? "";

  return products.filter((product) => {
    const matchesCategory = !category || category === "all" || product.category === category;
    const matchesQuery =
      !normalizedQuery ||
      [product.name, product.color, product.collection, product.category]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalizedQuery));

    const matchesFilter =
      !filter ||
      filter === "all" ||
      (filter === "new" && product.badge === "new") ||
      (filter === "bestsellers" &&
        (product.badge === "restocked" || product.badge === "sale" || bestsellerIds.has(product.id)));

    return matchesCategory && matchesQuery && matchesFilter;
  });
}

export function getShopTitle({ category, filter, q }: ProductFilters): string {
  if (q?.trim()) return `Kết quả cho “${q.trim()}”`;
  if (filter === "new") return "New Arrivals";
  if (filter === "bestsellers") return "Bestsellers";

  const categoryLabel = productCategories.find((item) => item.value === category)?.label;
  return categoryLabel && categoryLabel !== "Tất cả" ? categoryLabel : "All Products";
}

export const productCategories = [
  { label: "Tất cả", value: "all" },
  { label: "T-Shirts", value: "t-shirts" },
  { label: "Hoodies", value: "hoodies" },
  { label: "Pants", value: "pants" },
  { label: "Accessories", value: "accessories" },
  { label: "Sweatshirts", value: "sweatshirts" },
  { label: "Shirts", value: "shirts" },
  { label: "Footwear", value: "footwear" },
  { label: "Outerwear", value: "outerwear" },
] as const;
