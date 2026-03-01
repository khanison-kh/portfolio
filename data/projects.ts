import { SKILLS, Skill } from "./skills";

export type Project = {
  id: string;
  name: string;
  description: string[];
  techStack: Skill[];
  images: string[];
  sourceCodeUrl: string;
  liveProjectUrl: string;
};

export const projectsData: Project[] = [
  {
    id: "edt-app",
    name: "Nexus Portal - Emploi du temps",
    description: [
      "Application web d'emploi du temps permettant d'apporter des nouvelles fonctionnalités par rapport à celle utilisée par l'IUT (ADEsoft).",
      "Fonctionnalités principales : authentification via JWT avec gestion des rôles (étudiant, enseignant, administrateur), affichage de l'emploi du temps et des salles libres, demandes de modifications d'emploi du temps par les enseignants (ex: demander à déplacer un cours), statistiques sur le taux d'utilisation des salles sur différentes périodes.",
    ],
    techStack: [
      SKILLS.Angular,
      SKILLS.SpringBoot,
      SKILLS.PostgreSQL,
      SKILLS.RestApi,
    ],
    images: [
      "/images/projects/edt1.png",
      "/images/projects/edt2.png",
      "/images/projects/edt3.png",
      "/images/projects/edt4.png",
      "/images/projects/edt5.png",
    ],
    sourceCodeUrl: "",
    liveProjectUrl: "",
  },
  {
    id: "erp-portal",
    name: "Portail administratif (ERP)",
    description: [
      "Application web full-stack permettant de centraliser différents services administratifs de l'IUT (gestion de l'emploi du temps, absences, notes, stage et alternance) afin de permettre un flux de travail moins fragmenté (éviter de jongler entre plusieurs outils) pour le personnel (enseignants, secrétariat etc...) et un meilleur suivi pour les étudiants et enseignants.",
      "Projet scolaire d'envergure impliquant une vingtaine de personnes organisées en plusieurs sous-groupes de 3 à 5 personnes.",
      "Mon rôle était de développer le module « Gestion des stages et de l'alternance », qui comprenait la création d'une interface utilisateur pour les étudiants et les enseignants, ainsi que la mise en place d'une API REST pour gérer les données métiers (entreprises, offres de stage, candidatures, etc...).",
    ],
    techStack: [
      SKILLS.Angular,
      SKILLS.SpringBoot,
      SKILLS.MySQL,
      SKILLS.RestApi,
    ],
    images: [
      "/images/projects/erp1.png",
      "/images/projects/erp2.png",
      "/images/projects/erp3.png",
    ],
    sourceCodeUrl: "",
    liveProjectUrl: "",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: [
      "Développement de mon portfolio en utilisant Next.js et Tailwind CSS.",
    ],
    techStack: [SKILLS.NextJs, SKILLS.Tailwind, SKILLS.TypeScript],
    images: ["/images/projects/portfolio1.png"],
    sourceCodeUrl: "https://github.com/khanison-kh/portfolio",
    liveProjectUrl: "https://khanifolio.vercel.app/",
  },
  {
    id: "alert-monitoring-app",
    name: "Application de monitoring d'alertes",
    description: [
      "Application web de suivi d'alertes avec dashboard incluant un graphique interactif.",
      "Projet réalisé dans le but d'expérimenter avec Next.js, Express et Auth0 pour la gestion de l'authentification.",
    ],
    techStack: [SKILLS.NextJs, SKILLS.Express, SKILLS.TypeScript, SKILLS.Auth0],
    images: [
      "/images/projects/dashboard1.png",
      "/images/projects/dashboard2.png",
      "/images/projects/dashboard3.png",
      "/images/projects/dashboard4.png",
      "/images/projects/dashboard5.png",
    ],
    sourceCodeUrl: "https://github.com/khanison-kh/nextjs-alert-dashboard",
    liveProjectUrl: "",
  },
  {
    id: "basic-project-manager",
    name: "Programme de gestion de projets",
    description: [
      "Programme en mode console avec navigation par menus numérotés permettant de gérer des projets, avec des fonctionnalités de création, modification et suppression de projets, ainsi que la possibilité d'ajouter des tâches et de suivre leur avancement.",
      "Projet réalisé en Java dans le but de mettre en pratique les concepts de la programmation orientée objet (POO).",
    ],
    techStack: [SKILLS.Java],
    images: [
      "/images/projects/bpm1.png",
      "/images/projects/bpm2.png",
      "/images/projects/bpm3.png",
      "/images/projects/bpm4.png",
    ],
    sourceCodeUrl: "https://github.com/khanison-kh/basic-task-manager",
    liveProjectUrl: "",
  },
];
