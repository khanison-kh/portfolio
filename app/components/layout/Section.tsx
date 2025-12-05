import { ReactNode } from 'react';

export type SectionProps = {
  id?: string;
  children: ReactNode;
  variant?: 'home' | 'default';
  className?: string;
};

const Section = ({
  id,
  children,
  variant = 'default',
  className,
}: SectionProps) => {
  const variants: Record<'home' | 'default', string> = {
    home: 'px-4 sm:px-6 md:px-8 lg:px-12 pt-12 h-[calc(100dvh-72px)] border border-green-500', // moderate lateral padding
    default:
      'px-6 sm:px-2 md:px-16 lg:px-24 xl:px-32 py-12 border border-red-500', // large lateral padding
  };

  return (
    <section id={id} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </section>
  );
};

export default Section;
