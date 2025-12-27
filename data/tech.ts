const LOGO_BASE = "/images/tech-icons";

export const TECH = {
  Java: { name: "Java", icon: `${LOGO_BASE}/java.svg` },
  JavaScript: { name: "JavaScript", icon: `${LOGO_BASE}/javascript.svg` },
  TypeScript: { name: "TypeScript", icon: `${LOGO_BASE}/typescript.svg` },
  Python: { name: "Python", icon: `${LOGO_BASE}/python.svg` },
  SQL: { name: "SQL", icon: `${LOGO_BASE}/sql.svg` },
  SpringBoot: { name: "Spring Boot", icon: `${LOGO_BASE}/springboot.svg` },
  Express: { name: "Express", icon: `${LOGO_BASE}/express.svg` },
  RestApis: { name: "REST APIs", icon: `${LOGO_BASE}/rest.svg` },
  Auth0: { name: "Auth0", icon: `${LOGO_BASE}/auth0.svg` },
  Angular: { name: "Angular", icon: `${LOGO_BASE}/angular.svg` },
  React: { name: "React", icon: `${LOGO_BASE}/react.svg` },
  NextJs: { name: "Next.js", icon: `${LOGO_BASE}/nextjs.svg` },
  HTML: { name: "HTML", icon: `${LOGO_BASE}/html.svg` },
  CSS: { name: "CSS", icon: `${LOGO_BASE}/css.svg` },
  Tailwind: { name: "Tailwind CSS", icon: `${LOGO_BASE}/tailwind.svg` },
  PostgreSQL: { name: "PostgreSQL", icon: `${LOGO_BASE}/postgresql.svg` },
  MySQL: { name: "MySQL", icon: `${LOGO_BASE}/mysql.svg` },
  Git: { name: "Git", icon: `${LOGO_BASE}/git.svg` },
  Docker: { name: "Docker", icon: `${LOGO_BASE}/docker.svg` },
  Postman: { name: "Postman", icon: `${LOGO_BASE}/postman.svg` },
} as const;

export const TECH_CATEGORIES = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  Backend: ["SpringBoot", "Express", "RestApis", "Auth0"],
  Frontend: ["Angular", "React", "NextJs", "HTML", "CSS", "Tailwind"],
  Databases: ["PostgreSQL", "MySQL"],
  Tools: ["Git", "Docker", "Postman"],
} as const;

export const CATEGORY_LABELS: Record<TechCategory, Record<Locale, string>> = {
  Languages: { en: "Languages", fr: "Langages" },
  Backend: { en: "Backend", fr: "Backend" },
  Frontend: { en: "Frontend", fr: "Frontend" },
  Databases: { en: "Databases", fr: "Bases de données" },
  Tools: { en: "Tools", fr: "Outils" },
};

// Types
export type TechKey = keyof typeof TECH;
export type TechCategory = keyof typeof TECH_CATEGORIES;
export type Locale = "en" | "fr";
export type TechType = { name: string; icon: string };
