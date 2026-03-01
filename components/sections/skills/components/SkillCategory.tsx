import { SkillItem } from "@/components/ui/SkillItem";
import { CATEGORIES, CategoryKey, Locale, Skill } from "@/data/skills";

type SkillCategoryProps = {
  categoryKey: CategoryKey;
  skills: Skill[];
  locale: Locale;
};

const SkillCategory = ({ categoryKey, skills, locale }: SkillCategoryProps) => {
  return (
    <div className="">
      <h3 className="mb-4 text-xl font-semibold">
        {CATEGORIES[categoryKey][locale]}
      </h3>

      <div className="flex flex-wrap gap-10">
        {skills.map((skill) => (
          <SkillItem key={skill.key} skill={skill} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
