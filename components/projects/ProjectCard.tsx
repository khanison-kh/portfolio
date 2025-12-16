"use client";

import { TechType } from "@/data/tech";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import LinkComponent from "../ui/LinkComponent";
import TechStackChip from "../ui/TechStackChip";

export type ProjectProps = {
  id: string;
  name: string;
  description?: string[];
  techStack?: TechType[];
  imageList?: string[];
  gitHubLink?: string;
  projectLink?: string;
  onClick?: () => void;
};

const ProjectCard = ({
  name,
  description = [],
  techStack = [],
  imageList = [],
  gitHubLink = "",
  projectLink = "",
  onClick,
}: ProjectProps) => {
  const primaryDescription = description[0] ?? "";
  const hasTechStack = techStack.length > 0;
  const hasImages = imageList.length > 0;
  const hasGitHubLink = gitHubLink.trim().length > 0;
  const hasProjectLink = projectLink.trim().length > 0;

  return (
    // Card container
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-md transition duration-300 hover:cursor-pointer hover:shadow-xl md:flex-row"
      onClick={onClick}
    >
      {/* Image container */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-96">
        {hasImages ? (
          <>
            <Image
              src={imageList[0]}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
              loading="lazy"
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 text-sm font-medium text-white">
            Aucune image
          </div>
        )}
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
          {hasTechStack && <TechStackChip techStack={techStack} />}
          <div className="flex flex-wrap gap-2">
            {hasGitHubLink && (
              <LinkComponent
                href={gitHubLink}
                icon={<SiGithub size={18} />}
                variant="small"
                className=""
              >
                GitHub
              </LinkComponent>
            )}
            {hasProjectLink && (
              <LinkComponent
                href={projectLink}
                icon={<ExternalLink size={18} />}
                variant="small"
                className=""
              >
                Visiter le projet
              </LinkComponent>
            )}
          </div>
          {/* <div className="flex justify-end">
            <ProjectDetailsButton />
          </div> */}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
