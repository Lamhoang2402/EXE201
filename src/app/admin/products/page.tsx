"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { allProducts } from "@/features/products/data/products";
import { productCategories } from "@/features/products/data/productHelpers";
import { formatPrice } from "@/shared/utils/formatPrice";
import { cn } from "@/shared/utils/cn";

export default function AdminProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return allProducts.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesQuery =
        !normalized ||
        [product.name, product.color, product.collection, product.id]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(normalized));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-light text-white">Product Management</h1>
          <p className="mt-2 text-sm text-neutral-400">
            {filtered.length} sản phẩm — dữ liệu từ file mock, chưa CRUD thật.
          </p>
        </div>
        <button
          type="button"
          disabled
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white opacity-60"
          title="Sẽ bật khi có backend"
        >
          + Thêm sản phẩm
        </button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm theo tên, màu, collection..."
          className="h-10 flex-1 rounded-lg border border-white/10 bg-[#17171f] px-3 text-sm text-white placeholder:text-neutral-500 focus:border-violet-500/50 focus:outline-none"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-10 rounded-lg border border-white/10 bg-[#17171f] px-3 text-sm text-white focus:border-violet-500/50 focus:outline-none"
        >
          {productCategories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#17171f]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-neutral-500">
              <tr>
                <th className="px-4 py-3">Ảnh</th>
                <th className="px-4 py-3">Tên</th>
                <th className="px-4 py-3">Collection</th>
                <th className="px-4 py-3">Danh mục</th>
                <th className="px-4 py-3">Giá</th>
                <th className="px-4 py-3">Badge</th>
                <th className="px-4 py-3">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-white/[0.02]">
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-white">{product.name}</p>
                    <p className="text-xs text-neutral-500">{product.color}</p>
                  </td>
                  <td className="px-4 py-3 capitalize text-neutral-300">
                    {product.collection ?? "—"}
                  </td>
                  <td className="px-4 py-3 capitalize text-neutral-300">
                    {product.category ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-neutral-300">{formatPrice(product.price)}</td>
                  <td className="px-4 py-3">
                    {product.badge ? (
                      <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs capitalize text-violet-300">
                        {product.badge}
                      </span>
                    ) : (
                      <span className="text-neutral-600">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/shop/${product.slug}`}
                      className={cn(
                        "text-xs text-violet-400 underline underline-offset-2 hover:text-violet-300",
                      )}
                    >
                      Xem trên shop
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
