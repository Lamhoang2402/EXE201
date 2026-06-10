"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  collectionLabels,
  type FlowCatalogProduct,
} from "@/features/flow/data/catalog";
import { formatFlowPrice } from "@/features/flow/data/catalogHelpers";
import { Wake360ProductCard } from "@/features/wake360/components/Wake360ProductCard";
import type { Product } from "@/features/products/types/product.types";
import { useApp } from "@/shared/context/AppProvider";
import { cn } from "@/shared/utils/cn";

type FlowProductDetailViewProps = {
  product: FlowCatalogProduct;
  relatedProducts: FlowCatalogProduct[];
};

function toCartProduct(product: FlowCatalogProduct): Product {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    color: collectionLabels[product.collection].label,
    price: product.price,
    image: product.image,
    hoverImage: product.hoverImage,
    sizes: product.sizes,
    collection: product.collection,
  };
}

export function FlowProductDetailView({ product, relatedProducts }: FlowProductDetailViewProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);
  const [activeTab, setActiveTab] = useState<"info" | "reviews">("info");
  const { addToCart } = useApp();

  const images = [product.image, product.hoverImage].filter(Boolean) as string[];
  const collection = collectionLabels[product.collection];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    const cartProduct = toCartProduct(product);
    for (let i = 0; i < quantity; i += 1) {
      addToCart(cartProduct, selectedSize);
    }
  };

  return (
    <div className="bg-white pb-16 pt-28 text-neutral-900 md:pt-36">
      <div className="mx-auto max-w-[1450px] px-4 md:px-6">
        <p className="text-sm text-neutral-500">
          <Link href="/" className="hover:text-[#b20000]">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href={collection.href} className="hover:text-[#b20000]">
            {collection.label}
          </Link>
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-3">
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {images.length > 1 ? (
              <div className="flex gap-2">
                {images.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={cn(
                      "relative h-20 w-16 overflow-hidden border",
                      activeImage === image ? "border-neutral-900" : "border-neutral-200",
                    )}
                  >
                    <Image src={image} alt="" fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <h1 className="text-2xl font-medium uppercase tracking-[0.04em] md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xl text-neutral-900">{formatFlowPrice(product.price)}</p>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-neutral-800">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "flex h-9 min-w-9 items-center justify-center border px-3 text-sm transition-colors",
                      selectedSize === size
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-300 text-neutral-800 hover:border-neutral-900",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="product-quantity" className="mb-3 block text-sm font-medium text-neutral-800">
                {product.name} số lượng
              </label>
              <input
                id="product-quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                className="w-24 border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900"
              />
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="mt-6 w-full bg-neutral-900 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b20000] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Thêm vào giỏ hàng
            </button>

            <div className="mt-8 space-y-2 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
              <p>
                <strong className="text-neutral-900">Mã sản phẩm:</strong> {product.details.sku}
              </p>
              <p>
                <strong className="text-neutral-900">Danh mục:</strong> Collection,{" "}
                {collection.label}
              </p>
              <p>
                <strong className="text-neutral-900">Material:</strong> {product.details.material}
              </p>
              <div>
                <strong className="text-neutral-900">Key Features:</strong>
                <ul className="mt-1 list-disc pl-5">
                  {product.details.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong className="text-neutral-900">Form:</strong> {product.details.form}
              </p>
              <p>
                <strong className="text-neutral-900">Standard size:</strong> {product.details.modelNote}
              </p>
            </div>

            <div className="mt-8 border-t border-neutral-200 pt-6">
              <div className="flex gap-6 border-b border-neutral-200 text-sm font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab("info")}
                  className={cn(
                    "border-b-2 pb-3 transition-colors",
                    activeTab === "info"
                      ? "border-neutral-900 text-neutral-900"
                      : "border-transparent text-neutral-500",
                  )}
                >
                  Thông tin bổ sung
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("reviews")}
                  className={cn(
                    "border-b-2 pb-3 transition-colors",
                    activeTab === "reviews"
                      ? "border-neutral-900 text-neutral-900"
                      : "border-transparent text-neutral-500",
                  )}
                >
                  Đánh giá (0)
                </button>
              </div>

              {activeTab === "info" ? (
                <div className="py-6 text-sm text-neutral-600">
                  <table className="w-full max-w-md text-left">
                    <tbody>
                      <tr className="border-b border-neutral-100">
                        <th className="py-3 pr-4 font-medium text-neutral-900">Trọng lượng</th>
                        <td className="py-3">{product.details.weight}</td>
                      </tr>
                      <tr>
                        <th className="py-3 pr-4 font-medium text-neutral-900">Size</th>
                        <td className="py-3">{product.sizes.join(", ")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="py-6 text-sm text-neutral-500">Chưa có đánh giá nào.</p>
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 ? (
          <section className="mt-16 border-t border-neutral-200 pt-12">
            <h2 className="text-center text-lg font-semibold uppercase tracking-[0.12em]">
              Sản phẩm tương tự
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-4">
              {relatedProducts.map((item) => (
                <Wake360ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
