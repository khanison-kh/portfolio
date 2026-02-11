type TechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgeProps) => (
  <span className="bg-accent-solid text-accent-fg inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold shadow-xl">
    {name}
  </span>
);

type TechBadgeListProps = {
  techStack: { name: string }[];
};

export const TechBadgeList = ({ techStack }: TechBadgeListProps) => (
  <div className="flex flex-wrap gap-2">
    {techStack.map((tech) => (
      <TechBadge key={tech.name} name={tech.name} />
    ))}
  </div>
);
