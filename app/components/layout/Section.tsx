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
  const baseLayout: string = "px-6 scroll-mt-22 flex flex-col";

  const layouts: Record<"home" | "default", string> = {
    home: `${baseLayout} pt-32 min-h-dvh `, // moderate lateral padding with anchor offset for fixed navbar
    default: `${baseLayout} py-12`, // large lateral padding with anchor offset for fixed navbar
  };

  return (
    <section id={id} className={`${layouts[layout]} ${className ?? ""}`.trim()}>
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
