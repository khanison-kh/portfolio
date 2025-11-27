import { Tech } from '@/constants/TechEnum';
import Image from 'next/image';
import GitHubLinkButton from '../ui/GitHubLinkButton';
import ProjectLinkButton from '../ui/ProjectLinkButton';
import TechStackChip from '../ui/TechStackChip';

export type ProjectProps = {
  name: string;
  description: string[];
  techStack: Tech[];
  imageList: string[] | null;
  sourceCodeLink?: string;
  projectLink?: string;
};

const Project = ({
  name,
  description,
  techStack,
  imageList,
  sourceCodeLink,
  projectLink,
}: ProjectProps) => {
  return (
    <div>
      {imageList && imageList.length > 0 && (
        // Display first image as preview
        <Image src={imageList[0]} alt={name} />
      )}
      <div>
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        {/* Display main description */}
        <p>{description[0]}</p>
        <TechStackChip techStack={techStack} />
        <div>
          <div>
            {sourceCodeLink && (
              <GitHubLinkButton sourceCodeLink={sourceCodeLink} />
            )}
            {projectLink && <ProjectLinkButton projectLink={projectLink} />}
          </div>
          <button className="hover:cursor-pointer">Voir détails</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
