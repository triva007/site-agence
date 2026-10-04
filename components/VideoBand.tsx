import React from 'react';
import AmbientVideo from './AmbientVideo';

/** Bandeau plein écran entre deux sections : une vidéo d'ambiance et une phrase forte. */
type Props = {
  video: string;
  image: string;
  eyebrow: string;
  children: React.ReactNode;
  align?: 'left' | 'center';
};

const VideoBand: React.FC<Props> = ({ video, image, eyebrow, children, align = 'left' }) => (
  <section className="relative isolate flex min-h-[48vh] items-end overflow-hidden bg-encreDeep sm:min-h-[64vh]" aria-label={eyebrow}>
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img src={image} alt="" loading="lazy" className="slow-zoom h-full w-full object-cover opacity-80" />
      <AmbientVideo src={video} />
    </div>
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-encreDeep via-encreDeep/55 to-encreDeep/10" />
    <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-encreDeep/60 to-transparent" />

    <div className={`relative mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20 ${align === 'center' ? 'text-center' : ''}`}>
      <p className={`mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-citron ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-[3px] w-8 bg-citron" aria-hidden="true" />
        {eyebrow}
      </p>
      <p className={`text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[68px] ${align === 'center' ? 'mx-auto' : ''} max-w-4xl`}>
        {children}
      </p>
      <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">Images d'ambiance</p>
    </div>
  </section>
);

export default VideoBand;
