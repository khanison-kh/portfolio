import { TECH } from "@/constants/tech";
import { ProjectProps } from "../components/projects/ProjectCard";

export const projectsData: ProjectProps[] = [
  {
    id: "erp-portal",
    name: "Portail administratif (ERP)",
    description: [
      "Application web permettant la centralisation des services administratifs de l'IUT. Projet d'envergure impliquant une vingtaine de personnes organisées en plusieurs sous-groupes de 3 à 5 personnes.",
    ],
    techStack: [TECH.Angular, TECH.SpringBoot, TECH.MySQL],
    imageList: [
      "/images/projects/erp1.png",
      "/images/projects/erp2.png",
      "/images/projects/erp3.png",
    ],
    gitHubLink: "",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: [
      "Développment de mon portfolio personnel en utilisant Next.js et Tailwind CSS.",
    ],
    techStack: [TECH.NextJs, TECH.Tailwind, TECH.React, TECH.TypeScript],
    imageList: [
      "/images/projects/project1-1.jpg",
      "/images/projects/project1-2.jpg",
      "/images/projects/project1-3.jpg",
    ],
    gitHubLink: "https://github.com/khanison-kh/portfolio",
    projectLink:
      "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal",
  },
  {
    id: "alert-monitoring-app",
    name: "Application de monitoring d'alertes",
    description: [
      "Application web de suivi d'alertes avec dashboard incluant un graphique interactif",
    ],
    techStack: [TECH.NextJs, TECH.Express, TECH.TypeScript, TECH.Auth0],
    imageList: [
      "/images/projects/dashboard1.png",
      "/images/projects/dashboard2.png",
      "/images/projects/dashboard3.png",
      "/images/projects/dashboard4.png",
      "/images/projects/dashboard5.png",
    ],
    gitHubLink: "https://github.com/khanison-kh/nextjs-alert-dashboard",
  },
];
