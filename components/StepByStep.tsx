import React from 'react';

export const StepByStep: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Le diagnostic (30 min)',
      text: 'On regarde votre secteur, vos chantiers cibles et vos disponibilités. On vérifie que votre zone est libre.'
    },
    {
      num: '2',
      title: 'La préparation',
      text: 'Vous nous envoyez vos photos et vos critères. On prépare les publicités et les questions. Vous validez tout avant la diffusion.'
    },
    {
      num: '3',
      title: '30 jours de diffusion',
      text: 'Les demandes arrivent sur votre téléphone. Vous rappelez. On fait le point chaque semaine et on ajuste.'
    },
    {
      num: '4',
      title: 'Le bilan',
      text: 'On regarde les mêmes chiffres : demandes, appels, devis, signés ou perdus. On continue, ou on s\'arrête.'
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-encre text-texteSombre bg-grid-citron relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-citron mb-3 inline-block">
            Processus
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteSombre leading-[1.12] tracking-[-0.03em]">
            Comment on{' '}
            <span className="font-serif italic font-normal text-citron">
              démarre
            </span>
            .
          </h2>
        </div>

        {/* Steps Grid: horizontal on lg, vertical on mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div 
            className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-citron/20 z-0" 
            aria-hidden="true" 
          />

          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-encreCard rounded-[24px] p-7 border border-bordureSombre relative z-10 flex flex-col justify-between hover:border-citron/40 transition-colors"
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
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StepByStep;
