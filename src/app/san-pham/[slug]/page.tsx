import { notFound } from "next/navigation";
import { FlowProductDetailView } from "@/features/flow/components/FlowProductDetailView";
import {
  flowCatalogProducts,
  getFlowProductBySlug,
  getRelatedFlowProducts,
} from "@/features/flow/data/catalog";
import { brandTitle } from "@/shared/constants/brand";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return flowCatalogProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getFlowProductBySlug(slug);
  if (!product) return { title: brandTitle("Sản phẩm") };

  return {
    title: brandTitle(product.name),
    description: `${product.name} — ${product.details.material}`,
  };
}

export default async function FlowProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getFlowProductBySlug(slug);

  if (!product) notFound();

  return (
    <FlowProductDetailView
      product={product}
      relatedProducts={getRelatedFlowProducts(product)}
    />
  );
}
