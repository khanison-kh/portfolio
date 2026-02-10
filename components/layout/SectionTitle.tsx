import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  const baseClasses = "mb-18 text-3xl font-bold";
  return <h2 className={cn(baseClasses, className)}>{title}</h2>;
};

export default SectionTitle;
