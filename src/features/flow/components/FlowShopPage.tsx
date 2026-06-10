"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { FlowCatalogProduct } from "@/features/flow/data/catalog";
import { Wake360ProductCard } from "@/features/wake360/components/Wake360ProductCard";

type SortOption =
  | "popular"
  | "rating"
  | "newest"
  | "price-asc"
  | "price-desc";

const sortLabels: Record<SortOption, string> = {
  popular: "Thứ tự theo mức độ phổ biến",
  rating: "Thứ tự theo điểm đánh giá",
  newest: "Mới nhất",
  "price-asc": "Thứ tự theo giá: thấp đến cao",
  "price-desc": "Thứ tự theo giá: cao xuống thấp",
};

type FlowShopPageProps = {
  title: string;
  products: FlowCatalogProduct[];
};

export function FlowShopPage({ title, products }: FlowShopPageProps) {
  const [sort, setSort] = useState<SortOption>("popular");

  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "newest":
        return list.sort((a, b) => Number(b.id) - Number(a.id));
      default:
        return list;
    }
  }, [products, sort]);

  return (
    <div className="bg-white pb-16 pt-28 text-neutral-900 md:pt-36">
      <div className="mx-auto max-w-[1450px] px-4 md:px-6">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          <Link href="/" className="hover:text-[#b20000]">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </p>

        <div className="mt-8 flex justify-end">
          <label className="sr-only" htmlFor="flow-shop-sort">
            Sắp xếp sản phẩm
          </label>
          <select
            id="flow-shop-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-neutral-900"
          >
            {(Object.keys(sortLabels) as SortOption[]).map((option) => (
              <option key={option} value={option}>
                {sortLabels[option]}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-4">
          {sortedProducts.map((product) => (
            <Wake360ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
