import SectionTitle from "@/components/layout/SectionTitle";

const About = () => {
  return (
    <>
      <SectionTitle title="À propos" />
      <div className="space-y-4 text-xl leading-relaxed">
        <p>
          Je m&apos;appelle <span title="Prénom">Khanison</span>{" "}
          <span title="Nom de famille">Kheereesantikul</span> et je suis
          développeur junior. Ayant commencé mes études par une licence de
          mathématiques, je me suis définitivement orienté vers
          l&apos;informatique après avoir obtenu le diplôme dans le but de créer
          des applications concrètes.
        </p>
        <p>
          Principalement orienté vers le développement web, mes compétences clés
          sont :{" "}
          <span className="font-bold">
            JavaScript/TypeScript, React, Angular, Java, Spring Boot.
          </span>{" "}
          Je reste cependant ouvert à l&apos;exploration de différents types de
          projets. Je possède également des bases solides avec Git et Docker.
        </p>
        <p>
          Je suis constamment dans une démarche d&apos;amélioration continue et
          veille à appliquer au mieux les bonnes pratiques de développement pour
          produire un code clair, structuré et maintenable. Mon objectif est de
          concevoir des applications concrètes, utiles et performantes, qui
          répondent aux besoins réels des utilisateurs.
        </p>
      </div>
    </>
  );
};

export default About;
