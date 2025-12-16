import About from "../components/sections-content/About";
import Contact from "../components/sections-content/Contact";
import Education from "../components/sections-content/Education";
import Experience from "../components/sections-content/Experience";
import Home from "../components/sections-content/Home";
import Projects from "../components/sections-content/Projects";
import Skills from "../components/sections-content/Skills";

export const sections: {
  id: string;
  layout?: "home" | "default";
  Component: React.ComponentType;
}[] = [
  {
    id: "home",
    layout: "home",
    Component: Home,
  },
  {
    id: "about",
    Component: About,
  },
  {
    id: "projects",
    Component: Projects,
  },
  {
    id: "skills",
    Component: Skills,
  },
  {
    id: "experience",
    Component: Experience,
  },
  {
    id: "education",
    Component: Education,
  },
  {
    id: "contact",
    Component: Contact,
  },
];
