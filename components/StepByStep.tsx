import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import React from 'react';
import AmbientVideo from './AmbientVideo';

export const StepByStep: React.FC = () => {
  const steps = [
    {
      num: 'J1',
      title: 'L’appel de 20 minutes',
      text: 'On regarde votre secteur, vos chantiers cibles et vos disponibilités. On vérifie que votre zone est libre.'
    },
    {
      num: 'S1',
      title: 'La préparation',
      text: 'Vous nous envoyez vos photos et vos critères. On prépare les publicités et les questions. Vous validez tout avant la diffusion.'
    },
    {
      num: 'S2',
      title: '30 jours de diffusion',
      text: 'Les demandes arrivent sur votre téléphone. Vous rappelez. On fait le point chaque semaine et on ajuste.'
    },
    {
      num: 'J30',
      title: 'Le bilan',
      text: 'On regarde les mêmes chiffres : demandes, appels, devis, signés ou perdus. On continue, ou on s\'arrête.'
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-encre text-texteSombre bg-grid-citron relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 sm:mb-20">
                  <SectionHeading eyebrow="Le démarrage, semaine par semaine" tone="dark" className="mb-0">
            Comment on{' '}
            <span className="font-serif italic font-normal text-citron">démarre</span>.
          </SectionHeading>
          <p className="text-lg text-texteSombreSec leading-relaxed max-w-md">
            De l’appel de diagnostic au premier bilan : vous savez à chaque étape ce qui se passe et ce qu’on attend de vous.
          </p>
          <figure className="relative mx-auto lg:mx-0 w-[62%] max-w-[260px] shrink-0 aspect-[9/16] rounded-[24px] overflow-hidden border border-white/15 glass p-1.5">
            <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-encreDeep">
              <img src="/media/chantier.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <AmbientVideo src="/media/chantier.mp4" />
            </div>
          </figure>
        </div>

        {/* Steps Grid: horizontal on lg, vertical on mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div 
            className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-citron/20 z-0" 
            aria-hidden="true" 
          />

          {steps.map((step, i) => (
            <Reveal
              as="div"
              key={step.num}
              delay={i * 110}
              className="card card-dark bg-encreCard rounded-[24px] p-7 border border-bordureSombre relative z-10 flex flex-col justify-between"
            >
              <div>
                {/* Numbered Citron Circle */}
                <div className="w-14 h-14 rounded-full bg-citron text-encre font-black text-xl flex items-center justify-center mb-6 shadow-md">
                  {step.num}
                </div>

                <h3 className="text-xl font-extrabold text-texteSombre tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-texteSombreSec leading-relaxed">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StepByStep;
