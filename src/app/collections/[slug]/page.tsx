import { notFound } from "next/navigation";
import { PageHero } from "@/shared/components/layout";
import { Container } from "@/shared/components/ui";
import { ProductGrid } from "@/features/products";
import { collectionDetails } from "@/features/collections/data/collections";
import { getProductsByCollection } from "@/features/products/data/productHelpers";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(collectionDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collectionDetails[slug];
  if (!collection) return { title: "Collection | North Row" };

  return {
    title: `${collection.name} | North Row`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collectionDetails[slug];

  if (!collection) notFound();

  const products = getProductsByCollection(slug);
  const heroImage = collection.heroImage;

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={collection.name}
        description={collection.description}
        image={heroImage}
      />
      <section className="py-12 md:py-16">
        <Container size="wide">
          <p className="mb-8 text-xs text-neutral-500">{products.length} sản phẩm</p>
          <ProductGrid products={products} columns={4} />
        </Container>
      </section>
    </>
  );
}
