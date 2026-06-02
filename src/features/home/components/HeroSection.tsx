"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Container } from "@/shared/components/ui";
import { fadeInUp, viewportOnce } from "@/shared/animations/variants";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
        alt="Summer Capsule Collection"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20" />

      <Container className="relative flex min-h-[85vh] flex-col justify-end pb-16 pt-32 md:pb-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Coming Soon
          </p>
          <h1 className="mb-6 text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl">
            Summer Capsule &apos;26
          </h1>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-neutral-300 md:text-base">
            Bộ sưu tập giới hạn với thiết kế tối giản, chất liệu cao cấp và
            phong cách streetwear đương đại.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/collections/ss26">
              <Button size="lg">Khám phá ngay</Button>
            </Link>
            <Link href="/shop">
              <Button variant="secondary" size="lg">
                Shop All
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
