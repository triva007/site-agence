import React from 'react';
import Reveal from './Reveal';

/**
 * En-tête de section commun à tout le site : même œil, mêmes marges, même rythme.
 * `tone` suit le fond de la section.
 */
type Props = {
  eyebrow: string;
  children: React.ReactNode;     // le titre
  lead?: React.ReactNode;        // phrase d'introduction
  tone?: 'light' | 'dark';       // light = fond papier, dark = fond encre
  align?: 'left' | 'center';
  className?: string;
};

export const SectionHeading: React.FC<Props> = ({
  eyebrow, children, lead, tone = 'light', align = 'left', className = '',
}) => {
  const dark = tone === 'dark';
  const center = align === 'center';
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl mb-14 sm:mb-16 ${className}`}>
      <Reveal variant="fade">
        <span
          className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] mb-4 ${
            dark ? 'text-citron' : 'text-vertProfond'
          } ${center ? 'justify-center' : ''}`}
        >
          <span className={`h-[2px] w-7 ${dark ? 'bg-citron' : 'bg-vertProfond'}`} aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={70}>
        <h2
          className={`text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold leading-[1.12] tracking-[-0.03em] ${
            dark ? 'text-texteSombre' : 'text-texteClair'
          }`}
        >
          {children}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={140}>
          <p
            className={`mt-5 text-base sm:text-lg leading-relaxed ${
              dark ? 'text-texteSombreSec' : 'text-texteClairSec'
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
