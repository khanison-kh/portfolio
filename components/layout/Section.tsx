import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  layout?: "hero" | "default";
};

/**
 * Base section layout.
 */
const Section = ({
  id,
  children,
  layout = "default",
  className,
}: SectionProps) => {
  const isHero = layout === "hero";

  return (
    <section
      id={id}
      className={cn(
        "flex scroll-mt-22 flex-col px-4 sm:px-6 md:px-8 lg:px-12",
        isHero ? "min-h-dvh pt-48" : "py-24",
        className,
      )}
    >
      {isHero ? (
        children
      ) : (
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
