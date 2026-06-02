import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

const variants = {
  primary:
    "bg-white text-neutral-950 hover:bg-neutral-200 active:bg-neutral-300",
  secondary:
    "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5",
  ghost: "bg-transparent text-white hover:bg-white/10",
  outline:
    "bg-transparent text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white",
} as const;

const sizes = {
  sm: "h-9 px-4 text-xs tracking-widest",
  md: "h-11 px-6 text-xs tracking-widest",
  lg: "h-13 px-8 text-sm tracking-widest",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
