import type { ReactNode } from 'react';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
}: PageIntroProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`space-y-6 ${
        isCentered ? 'mx-auto max-w-4xl text-center' : 'max-w-5xl'
      }`}
    >
      <div className={`flex ${isCentered ? 'justify-center' : 'justify-start'}`}>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="space-y-4">
        <h1 className="max-w-4xl text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p
          className={`text-base leading-8 text-stone-300/78 sm:text-lg ${
            isCentered ? 'mx-auto max-w-3xl' : 'max-w-3xl'
          }`}
        >
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
