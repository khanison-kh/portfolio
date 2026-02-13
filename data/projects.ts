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
      "Application web permettant de centraliser différents services administratifs de l'IUT (gestion de l'emploi du temps, absences, notes, stage et alternance) afin de permettre un flux de travail moins fragmenté (jonglage entre plusieurs outils) pour le personnel (enseignants, secrétariat etc...) et un meilleur suivi pour les étudiants et les enseignants.",
      "Projet scolaire d'envergure impliquant une vingtaine de personnes organisées en plusieurs sous-groupes de 3 à 5 personnes.",
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
      "Développement de mon portfolio en utilisant Next.js et Tailwind CSS.",
    ],
    techStack: [TECH.NextJs, TECH.Tailwind, TECH.TypeScript],
    images: ["/images/projects/portfolio1.png"],
    githubUrl: "https://github.com/khanison-kh/portfolio",
    projectUrl: "truc de ouf",
  },
  {
    id: "alert-monitoring-app",
    name: "Application de monitoring d'alertes",
    description: [
      "Application web de suivi d'alertes avec dashboard incluant un graphique interactif.",
      "Projet réalisé dans le but d'expérimenter avec Next.js, Express et Auth0 pour la gestion de l'authentification.",
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
  {
    id: "basic-project-manager",
    name: "Programme de gestion de projets",
    description: [
      "Programme en mode console avec navigation par menus numérotés permettant de gérer des projets, avec des fonctionnalités de création, modification et suppression de projets, ainsi que la possibilité d'ajouter des tâches et de suivre leur avancement.",
      "Projet réalisé en Java dans le but de mettre en pratique les concepts de la programmation orientée objet (POO).",
    ],
    techStack: [TECH.Java],
    images: [
      "/images/projects/bpm1.png",
      "/images/projects/bpm2.png",
      "/images/projects/bpm3.png",
      "/images/projects/bpm4.png",
    ],
    githubUrl: "https://github.com/khanison-kh/basic-task-manager",
    projectUrl: "",
  },
];
