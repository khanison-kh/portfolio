import { ExternalLink } from "lucide-react";
import { MouseEvent } from "react";
import { SiGithub } from "react-icons/si";
import LinkButton from "../../../ui/LinkButton";

type ProjectLinksProps = {
  githubUrl: string;
  projectUrl: string;
  variant?: "default" | "small";
  stopPropagation?: boolean;
};

/**
 * Renders GitHub and project links.
 */
const ProjectLinks = ({
  githubUrl,
  projectUrl,
  stopPropagation = false,
}: ProjectLinksProps) => {
  const hasGithub = Boolean(githubUrl);
  const hasProject = Boolean(projectUrl);

  if (!hasGithub && !hasProject) return null;

  const handleClick = (e: MouseEvent) => {
    if (stopPropagation) e.stopPropagation();
  };

  return (
    <div className="flex flex-wrap gap-2" onClick={handleClick}>
      {hasGithub && (
        <LinkButton
          href={githubUrl}
          icon={<SiGithub size={18} color="white" />}
          className="bg-[#1f2429] dark:invert"
        />
      )}
      {hasProject && (
        <LinkButton
          href={projectUrl}
          icon={<ExternalLink size={18} color="white" />}
          className="bg-[#1f2429] dark:invert"
        />
      )}
    </div>
  );
};

export default ProjectLinks;
