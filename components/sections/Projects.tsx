"use client";

import type { Project } from "@/data/projects";
import { projectsData } from "@/data/projects";
import { useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import ProjectDetails from "../projects/ProjectDetails";

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
      <h2 className="mb-6 text-3xl font-bold">Projets</h2>
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
