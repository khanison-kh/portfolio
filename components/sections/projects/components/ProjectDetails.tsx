"use client";

import type { Project } from "@/data/projects";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import ImageSlider from "../../../ui/ImageSlider";
import { TechBadgeList } from "../../../ui/TechBadge";
import ProjectLinks from "./ProjectLinks";

type ProjectDetailsProps = {
  project: Project;
  onClose: () => void;
};

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  const { name, description, techStack, images, githubUrl, projectUrl } =
    project;

  const hasImages = images.length > 0;
  const hasDescription = description.length > 0;
  const hasTechStack = techStack.length > 0;
  const hasLinks = Boolean(githubUrl) || Boolean(projectUrl);

  // Modal lifecycle hooks
  useBodyScrollLock(true);
  useEscapeKey(onClose);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className={cn(
          "relative max-h-full w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-2xl",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className={cn(
            "group absolute top-4 right-4 z-10 cursor-pointer rounded-full",
            "bg-white/80 p-2 shadow-lg transition hover:bg-gray-100",
            "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none",
          )}
          aria-label="Close modal"
        >
          <X
            size={24}
            className="text-neutral-700 transition group-hover:text-black"
          />
        </button>

        {/* Image slider */}
        {hasImages && (
          <div className="relative w-full bg-neutral-900">
            <ImageSlider images={images} alt={name} />
          </div>
        )}

        {/* Content */}
        <div className="space-y-6 p-8">
          <h2 id="project-title" className="text-3xl font-bold text-gray-900">
            {name}
          </h2>

          {/* Description */}
          {hasDescription && (
            <div className="space-y-3">
              {description.map((paragraph, index) => (
                <p
                  key={`${project.id}-desc-${index}`}
                  className="text-base leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Tech stack */}
          {hasTechStack && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Technologies utilisées
              </h3>
              <TechBadgeList techStack={techStack} />
            </div>
          )}

          {/* Links */}
          {hasLinks && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Liens
              </h3>
              <ProjectLinks githubUrl={githubUrl} projectUrl={projectUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
