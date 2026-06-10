import { FlowShopPage } from "@/features/flow/components/FlowShopPage";
import { flowCatalogProducts } from "@/features/flow/data/catalog";
import { brandTitle } from "@/shared/constants/brand";

export const metadata = {
  title: brandTitle("Collection"),
  description: "Khám phá bộ sưu tập Daily và Training.",
};

export default function CollectionPage() {
  return <FlowShopPage title="Collection" products={flowCatalogProducts} />;
}
