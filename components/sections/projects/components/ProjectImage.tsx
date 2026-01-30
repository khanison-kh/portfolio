import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectImageProps = {
  src: string | undefined;
  alt: string;
  fallbackText?: string;
  className?: string;
};

/**
 * Displays a project image or a gradient fallback.
 */
const ProjectImage = ({
  src,
  alt,
  fallbackText = "Aucune image",
  className,
}: ProjectImageProps) => {
  if (!src) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 text-sm font-medium text-white",
          className,
        )}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 384px"
      className={cn("object-cover", className)}
      loading="lazy"
    />
  );
};

export default ProjectImage;
