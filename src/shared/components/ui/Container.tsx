import { cn } from "@/shared/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

const sizeStyles = {
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  narrow: "max-w-4xl",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
