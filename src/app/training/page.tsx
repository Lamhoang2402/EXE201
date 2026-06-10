import { FlowShopPage } from "@/features/flow/components/FlowShopPage";
import { getProductsByCollection } from "@/features/flow/data/catalog";
import { brandTitle } from "@/shared/constants/brand";

export const metadata = {
  title: brandTitle("Training"),
  description: "Bộ sưu tập Training — hiệu suất cho buổi tập.",
};

export default function TrainingPage() {
  return <FlowShopPage title="Training" products={getProductsByCollection("training")} />;
}
