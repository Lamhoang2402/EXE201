import { cn } from "@/shared/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-950",
        hover &&
          "transition-all duration-500 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

type CardImageProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardImage({ children, className }: CardImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-[3/4] overflow-hidden bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
}

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("p-4", className)}>{children}</div>;
}
