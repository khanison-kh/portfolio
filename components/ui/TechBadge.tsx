type TechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgeProps) => (
  <span className="inline-flex items-center rounded-full bg-gray-900 px-2 py-1 text-xs font-semibold text-gray-100 shadow-xl">
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
