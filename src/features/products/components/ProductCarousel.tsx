"use client";

import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/utils/cn";
import type { Product } from "../types/product.types";
import { ProductCard } from "./ProductCard";

export type ProductCarouselHandle = {
  scroll: (direction: "left" | "right") => void;
};

type ProductCarouselProps = {
  products: Product[];
  className?: string;
  hideControls?: boolean;
};

export const ProductCarousel = forwardRef<ProductCarouselHandle, ProductCarouselProps>(
  function ProductCarousel({ products, className }, ref) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = useCallback((direction: "left" | "right") => {
      if (!scrollRef.current) return;
      const amount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }, []);

    useImperativeHandle(ref, () => ({ scroll }), [scroll]);

    return (
      <div className={cn("relative", className)}>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto overscroll-x-contain pb-4 pl-0 pr-4 scrollbar-hide scroll-smooth sm:pr-6 md:gap-6 lg:pr-8"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="w-[72vw] max-w-[320px] shrink-0 sm:w-[48vw] md:w-[36vw] lg:w-[28vw] lg:max-w-[300px] xl:w-[22vw] xl:max-w-[280px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
          <div className="w-4 shrink-0 sm:w-6 lg:w-8" aria-hidden />
        </div>
      </div>
    );
  },
);

type CarouselButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
};

export function CarouselButton({ direction, onClick, className }: CarouselButtonProps) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      onClick={onClick}
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all duration-300 hover:border-neutral-600 hover:bg-white/5 hover:text-white",
        className,
      )}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}
