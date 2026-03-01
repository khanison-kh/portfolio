import { getSkillLabel, Locale, Skill } from "@/data/skills";
import Image from "next/image";

type SkillItemProps = {
  skill: Skill;
  locale?: Locale;
};

export const SkillItem = ({ skill, locale = "fr" }: SkillItemProps) => {
  const label = getSkillLabel(skill, locale);

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg p-4">
      <Image
        src={skill.icon}
        alt={label}
        width={40}
        height={40}
        className={`h-12 w-12 ${skill.shouldIconInvert ? "dark:invert" : ""}`}
      />
      <span className="text-center text-sm font-medium">{label}</span>
    </div>
  );
};
