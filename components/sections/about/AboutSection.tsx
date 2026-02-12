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
          l&apos;informatique après avoir obtenu le diplôme de la licence afin
          de mettre ma logique au service de la création d&apos;applications
          concrètes.
        </p>
        <p>
          Principalement orienté vers le développement web, mes compétences clés
          sont :{" "}
          <span className="font-bold">
            JavaScript/TypeScript, React, Angular, Java, Spring Boot.
          </span>{" "}
          Cependant, je reste ouvert à l&apos;exploration de différents types de
          projets. Je possède également des bases solides avec Git et Docker. Je
          suis constamment à la recherche de meilleures pratiques afin
          d&apos;améliorer mes compétences et offrir des solutions de qualité.
        </p>
      </div>
    </>
  );
};

export default About;
