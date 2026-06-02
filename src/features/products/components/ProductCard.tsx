"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge, Card, CardContent, CardImage } from "@/shared/components/ui";
import { formatPrice } from "@/shared/utils/formatPrice";
import type { Product, ProductBadge } from "../types/product.types";

const badgeLabels: Record<ProductBadge, string> = {
  new: "New Arrival",
  restocked: "Restocked",
  sale: "Sale",
};

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/shop/${product.slug}`} className="group block">
        <Card hover>
          <CardImage>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {product.hoverImage && (
              <Image
                src={product.hoverImage}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            )}
            {product.badge && (
              <div className="absolute left-3 top-3">
                <Badge variant={product.badge}>{badgeLabels[product.badge]}</Badge>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-3 transition-transform duration-500 group-hover:translate-y-0">
              <div className="flex flex-wrap gap-1">
                {product.sizes.slice(0, 6).map((size) => (
                  <span
                    key={size}
                    className="px-1.5 py-0.5 text-[10px] text-neutral-300"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </CardImage>

          <CardContent className="space-y-1">
            <h3 className="text-sm font-medium text-white">{product.name}</h3>
            <p className="text-xs text-neutral-500">
              {product.color}
              {product.colorCount && ` · ${product.colorCount} Colours`}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-sm text-white">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-xs text-neutral-500 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
