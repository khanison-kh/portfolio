import Image from 'next/image';
import Link from 'next/link';

type ProjectLinkButtonProps = {
  projectLink: string;
};

const ProjectLinkButton = ({ projectLink }: ProjectLinkButtonProps) => {
  return (
    <Link href={projectLink}>
      <Image src="public/images/logos/link.svg" alt="Link logo">
        Accéder au projet
      </Image>
    </Link>
  );
};

export default ProjectLinkButton;
