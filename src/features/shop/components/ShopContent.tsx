"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/shared/components/ui";
import { ProductGrid } from "@/features/products";
import type { Product } from "@/features/products/types/product.types";
import {
  filterProducts,
  getShopTitle,
  productCategories,
} from "@/features/products/data/productHelpers";
import { cn } from "@/shared/utils/cn";

type ShopContentProps = {
  products: Product[];
};

const shopFilters = [
  { label: "All", value: "all" },
  { label: "New", value: "new" },
  { label: "Bestsellers", value: "bestsellers" },
] as const;

export function ShopContent({ products }: ShopContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const category = searchParams.get("category") ?? "all";
  const filter = searchParams.get("filter");
  const q = searchParams.get("q") ?? "";

  const filtered = useMemo(
    () => filterProducts(products, { category, filter, q }),
    [category, filter, products, q],
  );

  const title = useMemo(
    () => getShopTitle({ category, filter, q }),
    [category, filter, q],
  );

  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === "all") params.delete(key);
      else params.set(key, value);
    });
    router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  };

  return (
    <section className="py-12 md:py-16">
      <Container size="wide">
        <div className="mb-6 flex flex-wrap gap-2 md:gap-3">
          {shopFilters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => updateParams({ filter: item.value })}
              className={cn(
                "rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300",
                filter === item.value
                  ? "border-white bg-white text-neutral-950"
                  : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
          {productCategories.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => updateParams({ category: item.value })}
              className={cn(
                "rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300",
                category === item.value || (!category && item.value === "all")
                  ? "border-white bg-white text-neutral-950"
                  : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          key={`${category}-${filter}-${q}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">{title}</p>
            <p className="text-xs text-neutral-500">{filtered.length} sản phẩm</p>
          </div>

          {filtered.length > 0 ? (
            <ProductGrid products={filtered} columns={4} />
          ) : (
            <div className="border border-dashed border-neutral-800 py-16 text-center text-sm text-neutral-500">
              Không tìm thấy sản phẩm phù hợp.
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
