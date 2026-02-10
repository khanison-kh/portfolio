import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  icon?: ReactNode;
  className?: string;
};

const LinkButton = ({ href, icon, className }: LinkButtonProps) => {
  const classes = cn(
    "p-3 rounded-full shrink-0 hover:opacity-80 transition-all duration-200",
    className,
  );

  const isMailLink = href.startsWith("mailto:");

  if (isMailLink) {
    return (
      <a href={href} className={classes}>
        {icon}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {icon}
    </Link>
  );
};

export default LinkButton;
