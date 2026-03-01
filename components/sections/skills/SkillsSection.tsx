import SectionTitle from "@/components/layout/SectionTitle";
import { getGroupedSkills } from "@/data/skills";
import { useMemo } from "react";
import SkillCategory from "./components/SkillCategory";

const locale = "fr";

const Skills = () => {
  const groupedSkills = useMemo(() => getGroupedSkills(), []);
  return (
    <>
      <SectionTitle title="Compétences" />

      <div className="space-y-10">
        {groupedSkills.map((group) => (
          <SkillCategory
            key={group.categoryKey}
            categoryKey={group.categoryKey}
            skills={group.skills}
            locale={locale}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
