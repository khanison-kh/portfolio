"use client";

import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { SiGithub } from "react-icons/si";
import ImageSlider from "../ui/ImageSlider";
import LinkComponent from "../ui/LinkComponent";
import TechStackChip from "../ui/TechStackChip";
import { ProjectProps } from "./ProjectCard";

type ProjectDetailsProps = {
  project: ProjectProps;
  onClose: () => void;
};

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  const {
    name,
    description = [],
    techStack = [],
    imageList = [],
    gitHubLink = "",
    projectLink = "",
  } = project;

  const hasTechStack = techStack.length > 0;
  const hasImages = imageList.length > 0;
  const hasGitHubLink = gitHubLink.trim().length > 0;
  const hasProjectLink = projectLink.trim().length > 0;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-full w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="group absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/80 p-2 shadow-lg transition hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close modal"
        >
          <X
            size={24}
            className="text-neutral-700 transition group-hover:text-black"
          />
        </button>

        {hasImages && (
          <div className="relative w-full bg-neutral-900">
            <ImageSlider images={imageList} alt={name} />
          </div>
        )}

        <div className="space-y-6 p-8">
          <h2 className="text-3xl font-bold text-gray-900">{name}</h2>

          {description.length > 0 && (
            <div className="space-y-3">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {hasTechStack && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Technologies utilisées
              </h3>
              <TechStackChip techStack={techStack} />
            </div>
          )}

          {(hasGitHubLink || hasProjectLink) && (
            <div className="">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Liens
              </h3>
              <div className="flex flex-wrap gap-3">
                {hasGitHubLink && (
                  <LinkComponent
                    href={gitHubLink}
                    icon={<SiGithub size={20} />}
                    variant="default"
                  >
                    GitHub
                  </LinkComponent>
                )}
                {hasProjectLink && (
                  <LinkComponent
                    href={projectLink}
                    icon={<ExternalLink size={20} />}
                    variant="default"
                  >
                    Visiter le projet
                  </LinkComponent>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
