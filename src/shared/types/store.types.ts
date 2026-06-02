import type { Product } from "@/features/products/types/product.types";

export type CartItem = {
  key: string;
  product: Product;
  size: string;
  quantity: number;
};

export type User = {
  email: string;
  name: string;
};

export type ShopFilter = "new" | "bestsellers" | null;

export type ShopParams = {
  category?: string | null;
  filter?: ShopFilter;
  q?: string | null;
};
