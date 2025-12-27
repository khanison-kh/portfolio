import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

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
