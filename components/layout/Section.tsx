import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type SectionProps = {
  id?: string;
  children: ReactNode;
  layout?: "home" | "default";
  className?: string;
};

const Section = ({
  id,
  children,
  layout = "default",
  className,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "flex scroll-mt-22 flex-col px-6",
        layout === "home" && "min-h-dvh pt-48",
        layout === "default" && "py-12",
        className,
      )}
    >
      {layout === "home" && children}
      {layout === "default" && (
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
