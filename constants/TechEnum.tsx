export const TechEnum = {
  Angular: 'Angular',
  SpringBoot: 'Spring Boot',
  NextJs: 'Next.js',
  React: 'React',
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  Java: 'Java',
  Auth0: 'Auth0',
  Python: 'Python',
  PostgreSQL: 'PostgreSQL',
  MySQL: 'MySQL',
  Tailwind: 'Tailwind CSS',
  HTML: 'HTML',
  CSS: 'CSS',
} as const;

export type Tech = (typeof TechEnum)[keyof typeof TechEnum] | string;
