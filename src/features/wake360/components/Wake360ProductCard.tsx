"use client";

import Image from "next/image";
import Link from "next/link";
import type { Wake360Product } from "@/features/wake360/data/homeContent";

function formatWakePrice(amount: number) {
  return `${amount.toLocaleString("vi-VN")} ₫`;
}

type Wake360ProductCardProps = {
  product: Wake360Product;
};

export function Wake360ProductCard({ product }: Wake360ProductCardProps) {
  return (
    <article className="group text-center">
      <div className="relative overflow-hidden bg-neutral-100">
        <Link href={product.href} className="relative block aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {product.hoverImage ? (
            <Image
              src={product.hoverImage}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          ) : null}
        </Link>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-3 py-4 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Xem nhanh
        </div>

        <Link
          href={product.href}
          className="absolute bottom-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-lg font-light text-neutral-900 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100"
          aria-label="Thêm vào giỏ"
        >
          +
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-1">
        {product.sizes.map((size) => (
          <span
            key={size}
            className="flex h-7 min-w-7 items-center justify-center rounded-full border border-neutral-300 px-1.5 text-[11px] text-neutral-700"
          >
            {size}
          </span>
        ))}
      </div>

      <h3 className="mt-3 text-sm font-normal text-neutral-900">
        <Link href={product.href} className="hover:text-[#b20000]">
          {product.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-neutral-800">{formatWakePrice(product.price)}</p>
    </article>
  );
}
