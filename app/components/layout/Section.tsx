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
    home: 'px-8 sm:px-12 md:px-18 lg:px-22 pt-32 min-h-dvh scroll-mt-28', // moderate lateral padding with anchor offset for fixed navbar
    default: 'px-8 sm:px-12 md:px-18 lg:px-24 xl:px-32 py-12 scroll-mt-28', // large lateral padding with anchor offset for fixed navbar
  };

  return (
    <section id={id} className={`${variants[variant]} ${className}`.trim()}>
      {variant === 'home' && children}
      {variant === 'default' && (
        <div className="max-w-4xl flex flex-col mx-auto">{children}</div>
      )}
    </section>
  );
};

export default Section;
