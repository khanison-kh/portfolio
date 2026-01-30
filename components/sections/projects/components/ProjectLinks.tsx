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
  variant = "default",
  stopPropagation = false,
}: ProjectLinksProps) => {
  const hasGithub = Boolean(githubUrl);
  const hasProject = Boolean(projectUrl);

  if (!hasGithub && !hasProject) return null;

  const handleClick = (e: MouseEvent) => {
    if (stopPropagation) e.stopPropagation();
  };

  const iconSize = variant === "small" ? 18 : 20;

  return (
    <div className="flex flex-wrap gap-2" onClick={handleClick}>
      {hasGithub && (
        <LinkButton
          href={githubUrl}
          icon={<SiGithub size={iconSize} />}
          variant={variant}
        >
          GitHub
        </LinkButton>
      )}
      {hasProject && (
        <LinkButton
          href={projectUrl}
          icon={<ExternalLink size={iconSize} />}
          variant={variant}
        >
          Visiter le projet
        </LinkButton>
      )}
    </div>
  );
};

export default ProjectLinks;
