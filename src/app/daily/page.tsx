import { FlowShopPage } from "@/features/flow/components/FlowShopPage";
import { getProductsByCollection } from "@/features/flow/data/catalog";
import { brandTitle } from "@/shared/constants/brand";

export const metadata = {
  title: brandTitle("Daily"),
  description: "Bộ sưu tập Daily — essentials cho mọi ngày.",
};

export default function DailyPage() {
  return <FlowShopPage title="Daily" products={getProductsByCollection("daily")} />;
}
