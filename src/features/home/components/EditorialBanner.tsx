"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/shared/components/ui";
import { fadeInUp, viewportOnce } from "@/shared/animations/variants";

const editorials = [
  {
    title: "North Row × Belstaff II",
    subtitle: "Discover",
    href: "/collections/ss26",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80",
  },
  {
    title: "North Row × NFL",
    subtitle: "Fanatics Presents",
    href: "/collections/nfl",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1200&q=80",
  },
];

export function EditorialBanner() {
  return (
    <section className="border-y border-neutral-800">
      <Container size="wide" className="grid md:grid-cols-2">
        {editorials.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={index === 0 ? "border-b border-neutral-800 md:border-b-0 md:border-r" : ""}
          >
            <Link href={item.href} className="group relative block aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.35)" }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20"
              />
              <motion.div
                className="absolute inset-x-0 bottom-0 p-8 md:p-12"
                initial={{ y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  {item.subtitle}
                </p>
                <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl lg:text-4xl">
                  {item.title}
                </h2>
                <span className="mt-6 inline-block text-[10px] font-medium uppercase tracking-[0.25em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Shop Now →
                </span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
