export const CATEGORIES = {
  ProgLanguages: { en: "Programming languages", fr: "Langages" },
  Frontend: { en: "Frontend", fr: "Frontend" },
  Backend: { en: "Backend", fr: "Backend" },
  Databases: { en: "Databases", fr: "Bases de données" },
  Tools: { en: "Tools & DevOps", fr: "Outils & DevOps" },
  Languages: { en: "Languages", fr: "Langues" },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export type Locale = "en" | "fr";

export type Skill = {
  key: string;
  label: string | Record<Locale, string>;
  icon: string;
  category: CategoryKey;
  shouldIconInvert?: boolean;
};

export const getSkillLabel = (skill: Skill, locale: Locale): string => {
  return typeof skill.label === "string" ? skill.label : skill.label[locale];
};

const LOGO_BASE = "/images/skills";

export const SKILLS = {
  Java: {
    key: "java",
    label: "Java",
    icon: `${LOGO_BASE}/java.svg`,
    category: "ProgLanguages",
  },
  JavaScript: {
    key: "javascript",
    label: "JavaScript",
    icon: `${LOGO_BASE}/javascript.svg`,
    category: "ProgLanguages",
  },
  TypeScript: {
    key: "typescript",
    label: "TypeScript",
    icon: `${LOGO_BASE}/typescript.svg`,
    category: "ProgLanguages",
  },
  Python: {
    key: "python",
    label: "Python",
    icon: `${LOGO_BASE}/python.svg`,
    category: "ProgLanguages",
  },
  SQL: {
    key: "sql",
    label: "SQL",
    icon: `${LOGO_BASE}/sql.svg`,
    category: "ProgLanguages",
  },
  SpringBoot: {
    key: "springboot",
    label: "Spring Boot",
    icon: `${LOGO_BASE}/springboot.svg`,
    category: "Backend",
  },
  NodeJs: {
    key: "nodejs",
    label: "Node.js",
    icon: `${LOGO_BASE}/nodejs.svg`,
    category: "Backend",
  },
  NestJS: {
    key: "nestjs",
    label: "NestJS",
    icon: `${LOGO_BASE}/nestjs.svg`,
    category: "Backend",
  },
  Express: {
    key: "express",
    label: "Express",
    icon: `${LOGO_BASE}/express.svg`,
    category: "Backend",
    shouldIconInvert: true,
  },
  RestApi: {
    key: "restapi",
    label: "REST API",
    icon: `${LOGO_BASE}/rest.svg`,
    category: "Backend",
    shouldIconInvert: true,
  },
  Auth0: {
    key: "auth0",
    label: "Auth0",
    icon: `${LOGO_BASE}/auth0.svg`,
    category: "Backend",
  },
  Angular: {
    key: "angular",
    label: "Angular",
    icon: `${LOGO_BASE}/angular.svg`,
    category: "Frontend",
  },
  React: {
    key: "react",
    label: "React",
    icon: `${LOGO_BASE}/react.svg`,
    category: "Frontend",
  },
  NextJs: {
    key: "nextjs",
    label: "Next.js",
    icon: `${LOGO_BASE}/nextjs.svg`,
    category: "Frontend",
    shouldIconInvert: true,
  },
  HTML: {
    key: "html",
    label: "HTML",
    icon: `${LOGO_BASE}/html.svg`,
    category: "Frontend",
  },
  CSS: {
    key: "css",
    label: "CSS",
    icon: `${LOGO_BASE}/css.svg`,
    category: "Frontend",
  },
  Tailwind: {
    key: "tailwind",
    label: "Tailwind CSS",
    icon: `${LOGO_BASE}/tailwind.svg`,
    category: "Frontend",
  },
  PostgreSQL: {
    key: "postgresql",
    label: "PostgreSQL",
    icon: `${LOGO_BASE}/postgresql.svg`,
    category: "Databases",
  },
  MySQL: {
    key: "mysql",
    label: "MySQL",
    icon: `${LOGO_BASE}/mysql.svg`,
    category: "Databases",
  },
  Git: {
    key: "git",
    label: "Git",
    icon: `${LOGO_BASE}/git.svg`,
    category: "Tools",
  },
  Docker: {
    key: "docker",
    label: "Docker",
    icon: `${LOGO_BASE}/docker.svg`,
    category: "Tools",
  },
  Postman: {
    key: "postman",
    label: "Postman",
    icon: `${LOGO_BASE}/postman.svg`,
    category: "Tools",
  },
  French: {
    key: "french",
    label: { en: "French", fr: "Français" },
    icon: `${LOGO_BASE}/fr.svg`,
    category: "Languages",
  },
  English: {
    key: "english",
    label: { en: "English (TOEIC 930/990)", fr: "Anglais (TOEIC 930/990)" },
    icon: `${LOGO_BASE}/en.svg`,
    category: "Languages",
  },
} as const satisfies Record<string, Skill>;

export type SkillItemType = (typeof SKILLS)[keyof typeof SKILLS];

export type GroupedCategory = {
  categoryKey: CategoryKey;
  skills: SkillItemType[];
};

export const getGroupedSkills = (): GroupedCategory[] => {
  const groups: GroupedCategory[] = [];

  Object.values(SKILLS).forEach((skill) => {
    let group = groups.find((g) => g.categoryKey === skill.category);

    if (!group) {
      group = { categoryKey: skill.category, skills: [] };
      groups.push(group);
    }

    group.skills.push(skill);
  });

  return groups;
};
