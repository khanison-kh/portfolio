"use client";

import { projectsData } from "@/app/data/projects";
import { useState } from "react";
import ProjectCard, { ProjectProps } from "../projects/ProjectCard";
import ProjectDetails from "../projects/ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );

  const handleOpenModal = (project: ProjectProps) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">Projets</h2>
      <div className="flex flex-col gap-6">
        {projectsData.map((p) => (
          <ProjectCard key={p.id} {...p} onClick={() => handleOpenModal(p)} />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Projects;
