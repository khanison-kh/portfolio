import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type LinkComponentProps = {
  href: string;
  icon?: ReactNode;
  variant?: "default" | "small";
  children?: ReactNode;
  className?: string;
};

const LinkComponent = ({
  href,
  icon,
  variant = "default",
  children,
  className,
}: LinkComponentProps) => {
  const baseClasses = cn(
    "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-200 px-3 py-1 shadow-sm transition duration-200",
    "hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
    variant === "small" ? "text-xs" : "font-medium",
    className,
  );

  const isSpecialProtocol = href.startsWith("mailto:");

  if (isSpecialProtocol) {
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

export default LinkComponent;
