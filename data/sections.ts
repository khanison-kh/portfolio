import About from "../components/sections/about/AboutSection";
import Contact from "../components/sections/contact/ContactSection";
import Education from "../components/sections/education/EducationSection";
import Hero from "../components/sections/hero/HeroSection";
import Projects from "../components/sections/projects/ProjectsSection";
import Skills from "../components/sections/skills/SkillsSection";
import WorkExperience from "../components/sections/work-experience/WorkExperienceSection";

export const sections: {
  id: string;
  label: string;
  layout?: "hero" | "default";
  Component: React.ComponentType;
}[] = [
  {
    id: "hero",
    label: "Accueil",
    layout: "hero",
    Component: Hero,
  },
  {
    id: "about",
    label: "À propos",
    Component: About,
  },
  {
    id: "projects",
    label: "Projets",
    Component: Projects,
  },
  {
    id: "skills",
    label: "Compétences",
    Component: Skills,
  },
  {
    id: "work-experience",
    label: "Expériences",
    Component: WorkExperience,
  },
  {
    id: "education",
    label: "Formation",
    Component: Education,
  },
  {
    id: "contact",
    label: "Contact",
    Component: Contact,
  },
];
