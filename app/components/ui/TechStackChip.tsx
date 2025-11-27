import { Tech } from '@/constants/TechEnum';

type TechStackProps = {
  techStack: Tech[];
};

const TechStackChip = ({ techStack }: TechStackProps) => {
  return (
    <div className="space-x-2">
      {techStack.map((tech, i) => {
        return (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center rounded-full bg-gray-900 px-2 py-1 text-xs font-semibold text-gray-100 shadow-xl"
          >
            {tech}
          </span>
        );
      })}
    </div>
  );
};

export default TechStackChip;
