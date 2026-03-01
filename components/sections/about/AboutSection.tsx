import SectionTitle from "@/components/layout/SectionTitle";
import { SkillItem } from "@/components/ui/SkillItem";
import { SKILLS } from "@/data/skills";

const About = () => {
  return (
    <>
      <SectionTitle title="À propos" />
      <div className="space-y-6 text-center text-xl leading-relaxed">
        <p>
          Je m&apos;appelle <span title="Prénom">Khanison</span>{" "}
          <span title="Nom de famille">Kheereesantikul</span> et je suis
          développeur. Ayant commencé mes études par une licence de
          mathématiques, je me suis orienté vers l&apos;informatique après avoir
          obtenu mon diplôme dans le but de créer des applications concrètes.
        </p>
        <p>
          Principalement orienté vers le développement web, mes compétences clés
          incluent :
        </p>
        <div className="flex flex-row justify-center gap-4">
          <SkillItem skill={SKILLS.JavaScript} />
          <SkillItem skill={SKILLS.TypeScript} />
          <SkillItem skill={SKILLS.React} />
          <SkillItem skill={SKILLS.Angular} />
          <SkillItem skill={SKILLS.Java} />
          <SkillItem skill={SKILLS.SpringBoot} />
        </div>
        <p>
          Ouvert à l&apos;apprentissage de nouvelles technologies, je
          m&apos;adapte rapidement à de nouveaux environnements techniques et
          contextes métiers.
        </p>
        <p>
          Soucieux de la qualité du code, j&apos;applique les bonnes pratiques
          de développement afin de produire des applications claires,
          structurées et maintenables. Mon objectif est de concevoir des
          solutions performantes répondant à des besoins réels.
        </p>
      </div>
    </>
  );
};

export default About;
