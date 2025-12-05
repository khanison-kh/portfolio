import { TechType } from '@/constants/tech';
import { truncateText } from '@/utils/string';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { SiGithub } from 'react-icons/si';
import LinkComponent from '../ui/LinkComponent';
import TechStackChip from '../ui/TechStackChip';
import ProjectDetailsButton from './../ui/ProjectDetailsButton';

export type ProjectProps = {
  id: string;
  name: string;
  description?: string[];
  techStack?: TechType[];
  imageList?: string[] | null;
  gitHubLink?: string;
  projectLink?: string;
};

const ProjectCard = ({
  name,
  description,
  techStack,
  imageList,
  gitHubLink,
  projectLink,
}: ProjectProps) => {
  const truncated = truncateText(description?.[0] || '', 160);
  const hasTechStack = techStack && techStack.length > 0;
  const hasImages = imageList && imageList.length > 0;
  const hasGitHubLink = gitHubLink && gitHubLink.length > 0;
  const hasProjectLink = projectLink && projectLink.length > 0;

  return (
    // Card container
    <div
      className="group relative flex flex-col border border-neutral-300 bg-white
     rounded-xl shadow-md hover:shadow-2xl hover:border-blue-500/40 transition duration-300 overflow-hidden max-w-md"
    >
      {/* // Image container */}
      <div className="relative h-40 w-full overflow-hidden bg-linear-to-br from-blue-600/40 to-indigo-600/40">
        {hasImages ? (
          <Image
            src={imageList[0]}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center group-hover:scale-105 transition duration-400"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white/70 backdrop-blur-sm">
            Aucune image
          </div>
        )}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-40 transition" />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-500 transition">
          {name}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed">{truncated}</p>

        {hasTechStack && <TechStackChip techStack={techStack} />}

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {hasGitHubLink && (
              <LinkComponent
                href={gitHubLink}
                icon={<SiGithub size={20} />}
                variant="small"
              >
                GitHub
              </LinkComponent>
            )}
            {hasProjectLink && (
              <LinkComponent
                href={projectLink}
                icon={<ExternalLink size={20} />}
                variant="small"
              >
                Project
              </LinkComponent>
            )}
          </div>
          <ProjectDetailsButton />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
