import { cn } from "@/shared/utils/cn";
import type { Product } from "../types/product.types";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  className?: string;
  columns?: 2 | 3 | 4;
};

const columnStyles = {
  2: "grid-cols-2",
  3: "grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

export function ProductGrid({
  products,
  className,
  columns = 4,
}: ProductGridProps) {
  return (
    <div className={cn("grid gap-4 md:gap-6", columnStyles[columns], className)}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
