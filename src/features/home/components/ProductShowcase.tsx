"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Container, LinkButton, SectionHeader } from "@/shared/components/ui";
import {
  CarouselButton,
  ProductCarousel,
  type ProductCarouselHandle,
} from "@/features/products/components/ProductCarousel";
import type { ProductSection } from "@/features/products/types/product.types";
import { fadeInUp, viewportOnce } from "@/shared/animations/variants";

type ProductShowcaseProps = {
  section: ProductSection;
};

export function ProductShowcase({ section }: ProductShowcaseProps) {
  const carouselRef = useRef<ProductCarouselHandle>(null);

  return (
    <section className="overflow-visible py-16 md:py-24">
      <Container size="wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-8"
        >
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            className="mb-0 min-w-0"
          />

          <div className="flex shrink-0 items-center gap-3 md:justify-end">
            <LinkButton href={section.href} variant="secondary">
              {section.ctaLabel}
            </LinkButton>
            <div className="flex gap-2">
              <CarouselButton
                direction="left"
                onClick={() => carouselRef.current?.scroll("left")}
              />
              <CarouselButton
                direction="right"
                onClick={() => carouselRef.current?.scroll("right")}
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-10 -mr-4 sm:-mr-6 lg:-mr-8">
          <ProductCarousel ref={carouselRef} products={section.products} />
        </div>
      </Container>
    </section>
  );
}
