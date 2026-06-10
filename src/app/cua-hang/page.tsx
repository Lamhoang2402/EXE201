import { FlowShopPage } from "@/features/flow/components/FlowShopPage";
import { flowCatalogProducts } from "@/features/flow/data/catalog";
import { BRAND_NAME, brandTitle } from "@/shared/constants/brand";

export const metadata = {
  title: brandTitle("Cửa hàng"),
  description: `Khám phá toàn bộ sản phẩm tại ${BRAND_NAME}.`,
};

export default function CuaHangPage() {
  return <FlowShopPage title="Cửa hàng" products={flowCatalogProducts} />;
}
