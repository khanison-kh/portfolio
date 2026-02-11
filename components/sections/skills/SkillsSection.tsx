import SectionTitle from "@/components/layout/SectionTitle";
import {
  CATEGORY_LABELS,
  TECH,
  TECH_CATEGORIES,
  TechCategory,
  type TechKey,
} from "@/data/tech";

const locale = "fr";

const Skills = () => {
  return (
    <>
      <SectionTitle title="Compétences techniques" />

      <div className="space-y-10">
        {Object.entries(TECH_CATEGORIES).map(([category, techKeys]) => (
          <div key={category}>
            <h3 className="mb-4 text-xl font-semibold">
              {CATEGORY_LABELS[category as TechCategory][locale]}
            </h3>

            <div className="flex flex-wrap gap-10">
              {techKeys.map((key) => (
                <TechItem key={key} techKey={key as TechKey} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const TechItem = ({ techKey }: { techKey: TechKey }) => {
  const { name, icon } = TECH[techKey];
  const shouldInvert = ["Express", "RestApis", "NextJs"].includes(techKey);

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg p-4">
      <img
        src={icon}
        alt={name}
        className={`h-12 w-12 ${shouldInvert ? "dark:invert" : ""}`}
      />
      <span className="text-center text-sm font-medium">{name}</span>
    </div>
  );
};

export default Skills;
