"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge, Button, Container } from "@/shared/components/ui";
import { formatPrice } from "@/shared/utils/formatPrice";
import type { Product } from "../types/product.types";
import { cn } from "@/shared/utils/cn";
import { useApp } from "@/shared/context/AppProvider";

type ProductDetailViewProps = {
  product: Product;
};

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(product.image);
  const [added, setAdded] = useState(false);
  const { addToCart, openCart } = useApp();

  const images = [product.image, product.hoverImage].filter(Boolean) as string[];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    openCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="py-8 md:py-12">
      <Container size="wide">
        <nav className="mb-8 text-xs text-neutral-500">
          <Link href="/" className="hover:text-white">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-white">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-300">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <motion.div
                  className="absolute left-4 top-4"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Badge variant={product.badge}>
                    {product.badge === "new"
                      ? "New Arrival"
                      : product.badge === "restocked"
                        ? "Restocked"
                        : "Sale"}
                  </Badge>
                </motion.div>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={cn(
                      "relative aspect-square w-20 overflow-hidden rounded-xl border transition-all duration-200",
                      activeImage === image
                        ? "border-white"
                        : "border-neutral-800 hover:border-neutral-600",
                    )}
                  >
                    <Image src={image} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {product.collection?.replace("-", " ") ?? "North Row"}
            </p>
            <h1 className="text-2xl font-light tracking-tight text-white md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-neutral-400">
              {product.color}
              {product.colorCount ? ` · ${product.colorCount} màu` : ""}
            </p>

            <motion.div
              className="mt-6 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-xl text-white">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-sm text-neutral-500 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </motion.div>

            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
                  Chọn size
                </span>
                <button type="button" className="text-xs text-neutral-500 underline-offset-2 hover:text-white hover:underline">
                  Size guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-[3rem] rounded-xl border px-4 py-2.5 text-xs font-medium transition-all duration-200",
                      selectedSize === size
                        ? "border-white bg-white text-neutral-950"
                        : "border-neutral-700 text-neutral-300 hover:border-neutral-500",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="mt-3 text-xs text-neutral-500">Vui lòng chọn size</p>
              )}
            </div>

            <div className="mt-8 space-y-3">
              <Button
                size="lg"
                fullWidth
                disabled={!selectedSize}
                onClick={handleAddToCart}
              >
                {added ? "Đã thêm vào giỏ ✓" : "Thêm vào giỏ hàng"}
              </Button>
              <Button variant="secondary" size="lg" fullWidth>
                Thêm vào wishlist
              </Button>
            </div>

            <div className="mt-10 space-y-4 border-t border-neutral-800 pt-8 text-sm text-neutral-400">
              <p>Miễn phí giao hàng cho đơn từ 2.000.000₫</p>
              <p>Đổi trả trong 30 ngày</p>
              <p>Thanh toán an toàn — Visa, Mastercard, Momo</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
