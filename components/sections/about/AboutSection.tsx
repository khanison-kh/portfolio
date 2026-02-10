import SectionTitle from "@/components/layout/SectionTitle";

const About = () => {
  return (
    <>
      <SectionTitle title="À propos" />
      <div className="space-y-4">
        <p>
          Je m&apos;appelle <span title="Prénom">Khanison</span>{" "}
          <span title="Nom de famille">Kheereesantikul</span> et je suis
          développeur junior. Principalement orienté vers le développement web,
          je reste ouvert à l&apos;exploration de différents types de projets.
          Après une licence en mathématiques, je me suis tourné vers la
          programmation pour mettre ma logique au service de la création
          d&apos;applications concrètes.
        </p>
        <p>
          Je possède des bases solides en frontend avec React, Next.js et
          Angular ainsi qu&apos;en backend avec Spring Boot et la conception
          d&apos;API REST.
        </p>
      </div>
    </>
  );
};

export default About;
