import Link from "next/link";
import { cn } from "@/shared/utils/cn";
import { Button, type ButtonProps } from "./Button";

type LinkButtonProps = Omit<ButtonProps, "onClick"> & {
  href: string;
  external?: boolean;
};

export function LinkButton({
  href,
  external = false,
  className,
  children,
  variant,
  size,
  fullWidth,
}: LinkButtonProps) {
  const buttonClass = cn(
    "inline-flex items-center justify-center font-medium uppercase transition-all duration-300",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={fullWidth ? "block w-full" : undefined}>
      <Button variant={variant} size={size} fullWidth={fullWidth}>
        {children}
      </Button>
    </Link>
  );
}
