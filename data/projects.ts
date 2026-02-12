import { TECH, TechType } from "./tech";

export type Project = {
  id: string;
  name: string;
  description: string[];
  techStack: TechType[];
  images: string[];
  githubUrl: string;
  projectUrl: string;
};

export const projectsData: Project[] = [
  {
    id: "erp-portal",
    name: "Portail administratif (ERP)",
    description: [
      "Application web permettant la centralisation des services administratifs de l'IUT. Projet d'envergure impliquant une vingtaine de personnes organisées en plusieurs sous-groupes de 3 à 5 personnes.",
    ],
    techStack: [TECH.Angular, TECH.SpringBoot, TECH.MySQL],
    images: [
      "/images/projects/erp1.png",
      "/images/projects/erp2.png",
      "/images/projects/erp3.png",
    ],
    githubUrl: "",
    projectUrl: "",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: [
      "Développment de mon portfolio personnel en utilisant Next.js et Tailwind CSS.",
    ],
    techStack: [TECH.NextJs, TECH.Tailwind, TECH.React, TECH.TypeScript],
    images: ["/images/projects/portfolio1.png"],
    githubUrl: "https://github.com/khanison-kh/portfolio",
    projectUrl: "truc de ouf",
  },
  {
    id: "alert-monitoring-app",
    name: "Application de monitoring d'alertes",
    description: [
      "Application web de suivi d'alertes avec dashboard incluant un graphique interactif",
    ],
    techStack: [TECH.NextJs, TECH.Express, TECH.TypeScript, TECH.Auth0],
    images: [
      "/images/projects/dashboard1.png",
      "/images/projects/dashboard2.png",
      "/images/projects/dashboard3.png",
      "/images/projects/dashboard4.png",
      "/images/projects/dashboard5.png",
    ],
    githubUrl: "https://github.com/khanison-kh/nextjs-alert-dashboard",
    projectUrl: "",
  },
];
