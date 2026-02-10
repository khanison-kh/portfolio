"use client";

import SectionTitle from "@/components/layout/SectionTitle";
import type { Project } from "@/data/projects";
import { projectsData } from "@/data/projects";
import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectDetails from "./components/ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <SectionTitle title="Projets" />
      <div className="flex flex-col gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => handleOpenModal(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Projects;
