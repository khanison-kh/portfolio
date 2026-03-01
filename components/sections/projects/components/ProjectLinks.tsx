import { ExternalLink } from "lucide-react";
import { MouseEvent } from "react";
import { SiGithub } from "react-icons/si";
import LinkButton from "../../../ui/LinkButton";

type ProjectLinksProps = {
  sourceCodeUrl: string;
  liveProjectUrl: string;
  variant?: "default" | "small";
  stopPropagation?: boolean;
};

/**
 * Renders GitHub and project links.
 */
const ProjectLinks = ({
  sourceCodeUrl,
  liveProjectUrl,
  stopPropagation = false,
}: ProjectLinksProps) => {
  const hasGithub = Boolean(sourceCodeUrl);
  const hasProject = Boolean(liveProjectUrl);

  if (!hasGithub && !hasProject) return null;

  const handleClick = (e: MouseEvent) => {
    if (stopPropagation) e.stopPropagation();
  };

  return (
    <div className="flex flex-wrap gap-2" onClick={handleClick}>
      {hasGithub && (
        <LinkButton
          href={sourceCodeUrl}
          icon={<SiGithub size={18} color="white" />}
          className="bg-[#1f2429] dark:invert"
        />
      )}
      {hasProject && (
        <LinkButton
          href={liveProjectUrl}
          icon={<ExternalLink size={18} color="white" />}
          className="bg-[#1f2429] dark:invert"
        />
      )}
    </div>
  );
};

export default ProjectLinks;
