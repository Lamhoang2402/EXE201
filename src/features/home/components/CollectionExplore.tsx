"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/shared/components/ui";
import { featuredCollections } from "@/features/collections/data/collections";
import { fadeInUp, staggerContainer, viewportOnce } from "@/shared/animations/variants";

export function CollectionExplore() {
  return (
    <section className="border-t border-neutral-800 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Explore"
          title="Explore Collections"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featuredCollections.map((collection) => (
            <motion.div key={collection.slug} variants={fadeInUp}>
              <Link href={collection.href} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-lg font-medium text-white">{collection.name}</h3>
                  <p className="mt-2 text-xs text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {collection.description}
                  </p>
                  <span className="mt-4 inline-block text-[10px] font-medium uppercase tracking-[0.2em] text-white underline-offset-4 group-hover:underline">
                    Discover
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
