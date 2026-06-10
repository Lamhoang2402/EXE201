import Image from "next/image";
import Link from "next/link";
import {
  FLOW_SOCIAL_LINKS,
  WAKE360_ASSETS,
  wake360CollectionBanners,
  wake360ShopByCollection,
  wake360SocialImages,
} from "@/features/wake360/data/homeContent";
import { flowCatalogProducts } from "@/features/flow/data/catalog";
import { Wake360ProductCard } from "./Wake360ProductCard";

function TileCard({
  href,
  image,
  title,
  external,
  headingTag: Tag = "h2",
}: {
  href: string;
  image: string;
  title: string;
  external?: boolean;
  headingTag?: "h2" | "h3";
}) {
  const content = (
    <div className="group relative aspect-square overflow-hidden bg-neutral-200">
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
      <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
        <Tag className="text-xl font-bold uppercase tracking-[0.1em] md:text-2xl">
          <strong>{title}</strong>
        </Tag>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}

export function Wake360HomePage() {
  return (
    <div className="bg-white text-neutral-900">
      {/* Hero video */}
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={WAKE360_ASSETS.shopTile}
        >
          <source src={WAKE360_ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/15" />
      </section>

      {/* SHOP | ABOUT US | COMMUNITY */}
      <section className="mx-auto grid max-w-[1450px] grid-cols-1 md:grid-cols-3">
        <TileCard href="/cua-hang" image={WAKE360_ASSETS.shopTile} title="SHOP" />
        <TileCard href="/ve-flow" image={WAKE360_ASSETS.aboutTile} title="ABOUT US" headingTag="h3" />
        <TileCard
          href={FLOW_SOCIAL_LINKS.instagram}
          image={WAKE360_ASSETS.communityTile}
          title="COMMUNITY"
          external
        />
      </section>

      {/* Products */}
      <section className="mx-auto max-w-[1450px] px-3 py-8 md:px-4 md:py-12">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-4">
          {flowCatalogProducts.slice(0, 8).map((product) => (
            <Wake360ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by collection */}
      <section className="mx-auto max-w-[1450px] px-4 pb-4 pt-6 md:pt-10">
        <h2 className="text-center text-xl font-bold uppercase tracking-[0.12em] md:text-2xl">
          <strong>SHOP BY COLLECTION</strong>
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-8">
          {wake360ShopByCollection.map((item) => (
            <div key={item.label}>
              {"external" in item && item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden">
                  <Image src={item.image} alt={item.label} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 flex items-end justify-center bg-black/20 p-4">
                    <h4 className="text-lg font-semibold uppercase tracking-widest text-white">{item.label}</h4>
                  </div>
                </a>
              ) : (
                <Link href={item.href} className="group relative block aspect-square overflow-hidden">
                  <Image src={item.image} alt={item.label} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 flex items-end justify-center bg-black/20 p-4">
                    <h4 className="text-lg font-semibold uppercase tracking-widest text-white">{item.label}</h4>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Collection banners */}
      <section className="mx-auto max-w-[1450px] px-4 py-8 md:py-14">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {wake360CollectionBanners.map((item) => (
            <TileCard
              key={item.label}
              href={item.href}
              image={item.image}
              title={item.label}
              external={"external" in item ? item.external : false}
            />
          ))}
        </div>
      </section>

      {/* Stay connected */}
      <section className="overflow-hidden pb-12 pt-4 md:pb-16 md:pt-8">
        <div className="px-4 text-center">
          <h2 className="text-xl font-bold uppercase tracking-[0.12em] md:text-2xl">
            <strong>STAY CONECTED</strong>
          </h2>
          <p className="mt-2 text-sm text-neutral-600">Follow us on our socials.</p>
        </div>

        <div className="wake360-marquee mt-8">
          <div className="wake360-marquee-track">
            {[...wake360SocialImages, ...wake360SocialImages].map((src, index) => (
              <a
                key={`${src}-${index}`}
                href={FLOW_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mx-1 h-24 w-24 shrink-0 overflow-hidden md:h-28 md:w-28"
              >
                <Image src={src} alt="FLOW social" fill className="object-cover" sizes="112px" />
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
