import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/components/ui";
import { PageHero } from "@/shared/components/layout";
import {
  collectionDetails,
  featuredCollections,
} from "@/features/collections/data/collections";

const allCollections = [
  ...featuredCollections,
  ...Object.values(collectionDetails).filter(
    (collection) => !featuredCollections.some((item) => item.slug === collection.slug),
  ),
];

export const metadata = {
  title: "Collections | North Row",
  description: "Khám phá các bộ sưu tập Owners Club, SS26, 247, Initial và nhiều hơn nữa.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore"
        title="Collections"
        description="Mỗi bộ sưu tập kể một câu chuyện riêng — từ essentials hàng ngày đến pieces giới hạn."
      />
      <section className="py-12 md:py-20">
        <Container size="wide">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allCollections.map((collection) => (
              <Link
                key={collection.slug}
                href={collection.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-800"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h2 className="text-xl font-light text-white md:text-2xl">
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-xs text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {collection.description}
                  </p>
                  <span className="mt-4 inline-block text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                    Khám phá →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
