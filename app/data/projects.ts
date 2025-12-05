import { TECH } from '@/constants/tech';
import { ProjectProps } from '../components/projects/ProjectCard';

export const projectsData: ProjectProps[] = [
  {
    id: 'erp-portal',
    name: 'Portail administratif (ERP)',
    description: [
      "Projet d'envergure impliquant une vingtaine de personnes organisées en plusieurs sous-groupes de 3 à 5 personnes. Application web permettant la centralisation des services administratifs de l'IUT.",
    ],
    techStack: [TECH.Angular, TECH.SpringBoot, TECH.MySQL],
    imageList: null,
    gitHubLink: '',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: [
      'Développment de mon portfolio personnel en utilisant Next.js et Tailwind CSS.',
    ],
    techStack: [TECH.Angular, TECH.SpringBoot, TECH.PostgreSQL],
    imageList: ['/images/image1.webp'],
    gitHubLink: 'https://github.com/khanison-kh/portfolio',
    projectLink:
      'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
  },
  {
    id: 'alert-monitoring-app',
    name: "Application de monitoring d'alertes",
    description: [
      "Application web de suivi d'alertes avec dashboard incluant un graphique interactif",
    ],
    techStack: [TECH.NextJs, 'Express', TECH.Auth0],
    imageList: [],
    gitHubLink: '',
  },
];
