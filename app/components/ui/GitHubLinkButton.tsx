import Image from 'next/image';
import Link from 'next/link';

type GitHubLinkButtonProps = {
  sourceCodeLink: string;
};

const GitHubLinkButton = ({ sourceCodeLink }: GitHubLinkButtonProps) => {
  return (
    <Link href={sourceCodeLink} className="inline-flex items-center gap-2">
      <Image
        src="/images/logos/github.svg"
        alt="GitHub logo"
        width={20}
        height={20}
      />
      <span>Code Source</span>
    </Link>
  );
};

export default GitHubLinkButton;
