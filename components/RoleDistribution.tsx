import React from 'react';
import { Check } from 'lucide-react';

export const RoleDistribution: React.FC = () => {
  const trivaDuties = [
    'les visuels et les textes des publicités ;',
    'la diffusion dans votre secteur ;',
    'les questions qui écartent les projets hors critères ;',
    'la réception des demandes et leur envoi sur votre téléphone ;',
    'le point chaque semaine et les ajustements.'
  ];

  const poolBuilderDuties = [
    'nous envoyer vos plus belles photos de chantiers ;',
    'rappeler les demandes sous 48 h ;',
    'faire la visite et le devis ;',
    'nous dire ce que devient chaque demande.'
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteClair leading-[1.12] tracking-[-0.03em]">
            Je m'occupe de la publicité. Vous vous occupez des{' '}
            <span className="font-serif italic font-normal text-vertProfond">
              piscines
            </span>
            .
          </h2>
        </div>

        {/* 2 Distinct Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Triva Media (Dark Encre) */}
          <div className="bg-encre text-texteSombre rounded-[24px] p-8 sm:p-10 border border-bordureSombre shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-citron mb-3 inline-block">
                Délégation totale
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-texteSombre tracking-tight mb-8">
                Triva Media s'occupe de
              </h3>

              <ul className="space-y-4">
                {trivaDuties.map((duty) => (
                  <li key={duty} className="flex items-start gap-3.5">
                    <span 
                      className="w-5 h-5 rounded-full bg-citron text-encre flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-base sm:text-lg text-texteSombre leading-snug font-normal">
                      {duty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 pt-6 border-t border-bordureSombre text-xs text-texteSombreSec">
              Piloté personnellement par Aaron, sans commercial ni intermédiaire.
            </p>
          </div>

          {/* Column 2: Pool Builder (White Card) */}
          <div className="bg-blanc text-texteClair rounded-[24px] p-8 sm:p-10 border border-bordureClair shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-vertProfond mb-3 inline-block">
                Votre métier de terrain
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-texteClair tracking-tight mb-8">
                Vous vous occupez de
              </h3>

              <ul className="space-y-4">
                {poolBuilderDuties.map((duty) => (
                  <li key={duty} className="flex items-start gap-3.5">
                    <span 
                      className="w-5 h-5 rounded-full bg-vertProfond text-blanc flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-base sm:text-lg text-texteClair leading-snug font-normal">
                      {duty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 pt-6 border-t border-bordureClair text-xs text-texteClairSec">
              Vous gardez 100 % de votre énergie pour ce que vous faites de mieux : bâtir et chiffrer.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RoleDistribution;
