"use client";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { KeyboardEvent } from "react";
import { TechBadgeList } from "../../../ui/TechBadge";
import ProjectImage from "./ProjectImage";
import ProjectLinks from "./ProjectLinks";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const { name, description, techStack, images, githubUrl, projectUrl } =
    project;

  const primaryDescription = description[0] ?? "";
  const hasImages = images.length > 0;
  const hasTechStack = techStack.length > 0;
  const hasLinks = Boolean(githubUrl) || Boolean(projectUrl);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Ouvrir les détails du projet ${name}`}
      aria-expanded={false}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl",
        "border border-neutral-300 bg-white shadow-md",
        "transition duration-300 hover:cursor-pointer hover:shadow-xl",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none",
        "md:flex-row",
      )}
    >
      {/* Image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-96">
        <ProjectImage src={hasImages ? images[0] : undefined} alt={name} />
      </div>

      {/* Content */}
      <div className="flex grow flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold transition group-hover:text-blue-600">
            {name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed">
            {primaryDescription}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          {hasTechStack && <TechBadgeList techStack={techStack} />}
          {hasLinks && (
            <ProjectLinks
              githubUrl={githubUrl}
              projectUrl={projectUrl}
              variant="small"
              stopPropagation
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
