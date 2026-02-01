import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  icon?: ReactNode;
  variant?: "default" | "small";
  children?: ReactNode;
  className?: string;
};

const LinkButton = ({
  href,
  icon,
  variant = "default",
  children,
  className,
}: LinkButtonProps) => {
  const baseClasses = cn(
    "inline-flex items-center gap-2 rounded-full px-3 py-1",
    "border bg-surface text-fg-primary border-border",
    "shadow-sm transition-colors duration-150",
    "hover:bg-subtle",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--linkbtn-ring)] focus-visible:ring-offset-2",
    "ring-offset-[var(--color-bg)]",
    variant === "small" ? "text-xs" : "text-sm font-medium",
    className,
  );

  const isMailLink = href.startsWith("mailto:");

  if (isMailLink) {
    return (
      <a href={href} className={baseClasses}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
    >
      {icon}
      {children}
    </Link>
  );
};

export default LinkButton;
