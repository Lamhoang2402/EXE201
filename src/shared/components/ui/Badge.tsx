import { cn } from "@/shared/utils/cn";

type BadgeVariant = "default" | "new" | "restocked" | "sale";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-800 text-neutral-300",
  new: "bg-white text-neutral-950",
  restocked: "bg-emerald-900/40 text-emerald-300 border border-emerald-800/50",
  sale: "bg-red-900/40 text-red-300 border border-red-800/50",
};

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
