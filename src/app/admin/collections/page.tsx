import Link from "next/link";
import { collectionDetails } from "@/features/collections/data/collections";
import { getProductsByCollection } from "@/features/products/data/productHelpers";

const collections = Object.values(collectionDetails);

export default function AdminCollectionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-light text-white">Collection Management</h1>
        <p className="mt-2 text-sm text-neutral-400">
          {collections.length} bộ sưu tập — quản lý từ mock data.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {collections.map((collection) => {
          const productCount = getProductsByCollection(collection.slug).length;

          return (
            <article
              key={collection.slug}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#17171f]"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="h-40 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <div>
                  <h2 className="text-lg text-white">{collection.name}</h2>
                  <p className="text-xs text-neutral-500">/{collection.slug}</p>
                </div>
                <p className="line-clamp-2 text-sm text-neutral-400">{collection.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">{productCount} sản phẩm</span>
                  <Link
                    href={collection.href}
                    className="text-violet-400 underline underline-offset-2 hover:text-violet-300"
                  >
                    Xem collection
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
