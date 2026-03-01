import { Locale, Skill } from "@/data/skills";

type TechBadgeProps = {
  tech: Skill;
};

const locale: Locale = "fr";

export const TechBadge = ({ tech }: TechBadgeProps) => (
  <span className="bg-accent-solid text-accent-fg inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold shadow-xl">
    {typeof tech.label === "string" ? tech.label : tech.label[locale]}
  </span>
);

type TechBadgeListProps = {
  techStack: Skill[];
};

export const TechBadgeList = ({ techStack }: TechBadgeListProps) => (
  <div className="flex flex-wrap gap-2">
    {techStack.map((tech) => (
      <TechBadge key={tech.key} tech={tech} />
    ))}
  </div>
);
