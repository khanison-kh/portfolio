import { projectsData } from '@/app/data/projects';

import Section from '../layout/Section';
import ProjectCard from '../projects/ProjectCard';

const Projects = () => {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-4">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
