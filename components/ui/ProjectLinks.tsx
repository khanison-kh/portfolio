import { ExternalLink } from "lucide-react";
import { MouseEvent } from "react";
import { SiGithub } from "react-icons/si";
import LinkComponent from "./LinkComponent";

type ProjectLinksProps = {
  githubUrl: string;
  projectUrl: string;
  variant?: "default" | "small";
  stopPropagation?: boolean;
};

/**
 * Renders GitHub and project links.
 * Optionally stops click propagation (useful inside clickable cards).
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
        <LinkComponent
          href={githubUrl}
          icon={<SiGithub size={iconSize} />}
          variant={variant}
        >
          GitHub
        </LinkComponent>
      )}
      {hasProject && (
        <LinkComponent
          href={projectUrl}
          icon={<ExternalLink size={iconSize} />}
          variant={variant}
        >
          Visiter le projet
        </LinkComponent>
      )}
    </div>
  );
};

export default ProjectLinks;
