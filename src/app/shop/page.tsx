import { Suspense } from "react";
import { PageHero } from "@/shared/components/layout";
import { ShopContent } from "@/features/shop/components/ShopContent";
import { allProducts } from "@/features/products/data/products";

export const metadata = {
  title: "Shop | North Row",
  description: "Khám phá toàn bộ bộ sưu tập streetwear cao cấp của North Row.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Tất cả sản phẩm"
        description="Lọc theo danh mục để tìm item phù hợp với phong cách của bạn."
      />
      <Suspense fallback={null}>
        <ShopContent products={allProducts} />
      </Suspense>
    </>
  );
}
