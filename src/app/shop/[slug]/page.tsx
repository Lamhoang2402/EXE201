import { notFound } from "next/navigation";
import { ProductDetailView } from "@/features/products";
import { getProductBySlug } from "@/features/products/data/productHelpers";
import { allProducts } from "@/features/products/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product | North Row" };

  return {
    title: `${product.name} | North Row`,
    description: `${product.name} — ${product.color}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return <ProductDetailView product={product} />;
}
