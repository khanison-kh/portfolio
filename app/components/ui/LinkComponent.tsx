// components/ExternalLinkButton.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

type LinkComponentProps = {
  href: string;
  icon?: ReactNode;
  variant?: 'default' | 'small';
  children?: ReactNode;
  className?: string;
};

const LinkComponent = ({
  href,
  icon,
  variant = 'default',
  children,
  className,
}: LinkComponentProps) => {
  const baseClasses =
    'inline-flex items-center gap-2 bg-slate-200 border border-slate-300 px-2 py-1 rounded-full hover:bg-slate-300 shadow-sm transition duration-200' +
    (variant === 'small' ? ' text-xs' : ' font-medium');

  const isSpecialProtocol = href.startsWith('mailto:');

  if (isSpecialProtocol) {
    return (
      <a href={href} className={`${baseClasses} ${className}`.trim()}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`.trim()}
    >
      {icon}
      {children}
    </Link>
  );
};

export default LinkComponent;
