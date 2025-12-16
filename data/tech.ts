export const TECH = {
  Angular: "Angular",
  SpringBoot: "Spring Boot",
  NextJs: "Next.js",
  React: "React",
  Express: "Express",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  Java: "Java",
  Auth0: "Auth0",
  Python: "Python",
  PostgreSQL: "PostgreSQL",
  MySQL: "MySQL",
  Tailwind: "Tailwind CSS",
  HTML: "HTML",
  CSS: "CSS",
} as const;

export type TechType = (typeof TECH)[keyof typeof TECH] | string;
