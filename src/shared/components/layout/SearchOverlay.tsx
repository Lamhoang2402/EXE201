"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { allProducts } from "@/features/products/data/products";
import { useApp } from "@/shared/context/AppProvider";
import { formatPrice } from "@/shared/utils/formatPrice";

const popularSearches = ["Hoodie", "Owners Club", "247", "T-Shirt", "Initial"];

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useApp();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isSearchOpen) setQuery("");
  }, [isSearchOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSearchOpen, closeSearch]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return allProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.color.toLowerCase().includes(term) ||
          product.category?.toLowerCase().includes(term),
      )
      .slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={closeSearch}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 z-[70] border-b border-neutral-800 bg-neutral-950"
          >
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Tìm kiếm
                </h2>
                <button
                  type="button"
                  onClick={closeSearch}
                  className="text-neutral-400 hover:text-white"
                  aria-label="Đóng tìm kiếm"
                >
                  ✕
                </button>
              </div>

              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm sản phẩm, bộ sưu tập..."
                className="h-12 w-full border-b border-neutral-700 bg-transparent text-lg text-white placeholder:text-neutral-600 focus:border-white focus:outline-none"
              />

              {query.trim() === "" ? (
                <div className="mt-8">
                  <p className="mb-3 text-[10px] uppercase tracking-widest text-neutral-500">
                    Tìm kiếm phổ biến
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setQuery(term)}
                        className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400 transition-all duration-300 hover:border-neutral-600 hover:bg-white/5 hover:text-white"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <p className="mt-8 text-sm text-neutral-500">Không tìm thấy kết quả</p>
              ) : (
                <ul className="mt-6 divide-y divide-neutral-800">
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/shop/${product.slug}`}
                        onClick={closeSearch}
                        className="flex items-center gap-4 py-4 transition-opacity hover:opacity-80"
                      >
                        <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-neutral-900">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm text-white">{product.name}</p>
                          <p className="text-xs text-neutral-500">{product.color}</p>
                        </div>
                        <span className="text-sm text-neutral-300">
                          {formatPrice(product.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
