import { TechEnum } from '@/constants/TechEnum';
import Project, { ProjectProps } from './ProjectCard';

type ProjectData = ProjectProps;

const projects: ProjectData[] = [
  {
    name: 'Portail administratif (ERP)',
    description: [
      "Projet d'envergure impliquant une vingtaine de personnes organisées en plusieurs sous-groupes de 3 à 5 personnes. Application web permettant la centralisation des services administratifs de l'IUT.",
    ],
    techStack: [TechEnum.Angular, TechEnum.SpringBoot, TechEnum.MySQL],
    imageList: null,
    sourceCodeLink: '',
  },
  {
    name: 'Portoflio',
    description: [
      'Développment de mon portfolio personnel en utilisant Next.js et Tailwind CSS.',
    ],
    techStack: [TechEnum.Angular, TechEnum.SpringBoot, TechEnum.PostgreSQL],
    imageList: [],
    sourceCodeLink: 'https://github.com/khanison-kh/portfolio',
  },
  {
    name: "Application de monitoring d'alertes",
    description: [
      "Application web de suivi d'alertes avec dashboard incluant un graphique interactif",
    ],
    techStack: [TechEnum.NextJs, 'Express', TechEnum.Auth0],
    imageList: [],
    sourceCodeLink: '',
  },
];

const ProjectList = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-4">Projets</h2>
      {projects.map((p) => {
        return (
          <Project
            key={p.name}
            name={p.name}
            description={p.description}
            techStack={p.techStack}
            imageList={p.imageList}
            sourceCodeLink={p.sourceCodeLink}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
