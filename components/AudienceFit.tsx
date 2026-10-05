import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import React from 'react';
import { Check, X } from 'lucide-react';

export const AudienceFit: React.FC = () => {
  const forYou = [
    'vous êtes pisciniste indépendant : construction, rénovation de bassins, ou les deux ;',
    'vous avez des réalisations dont vous êtes fier et une assurance décennale à jour ;',
    'vous voulez des chantiers d\'avance sans dépendre uniquement du bouche-à-oreille ;',
    'vous pouvez rappeler les demandes sérieuses sous 48 h.'
  ];

  const notForYou = [
    'votre carnet est plein pour les 12 prochains mois et vous ne voulez pas grandir ;',
    'vous ne pouvez pas rappeler les demandes dans un délai raisonnable ;',
    'vous cherchez des résultats sans aucun budget publicitaire ;',
    'vous dépendez d\'un réseau qui gère déjà votre publicité au niveau national.'
  ];

  return (
    <section id="pour-qui" className="py-20 sm:py-28 lg:py-32 bg-encreDeep text-texteSombre bg-grid-citron relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionHeading eyebrow="On ne prend pas tout le monde" tone="dark">
          Pour qui c'est fait, et pour qui ça ne l'est{' '}
          <span className="font-serif italic font-normal text-citron">pas</span>.
        </SectionHeading>

        {/* 2 Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* C'est pour vous si */}
          <Reveal variant="left" className="card card-dark bg-encreCard rounded-[24px] p-8 sm:p-10 border border-citron/25 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-citron mb-3 inline-block">
                On travaille avec vous si
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-texteSombre tracking-tight mb-8">
                C'est pour vous si
              </h3>

              <ul className="space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span 
                      className="w-5 h-5 rounded-full bg-citron text-encre flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-base sm:text-lg text-texteSombre leading-snug font-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Ce n'est pas pour vous si */}
          <Reveal variant="right" delay={90} className="card card-dark bg-encreDeep rounded-[24px] p-8 sm:p-10 border border-bordureSombre shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-texteSombreSec mb-3 inline-block">
                On vous le dit franchement
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-texteSombreSec tracking-tight mb-8">
                Ce n'est pas pour vous si
              </h3>

              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span 
                      className="w-5 h-5 rounded-full border border-bordureSombre text-texteSombreSec flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <X size={12} strokeWidth={2.5} />
                    </span>
                    <span className="text-base sm:text-lg text-texteSombreSec leading-snug font-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>

        {/* Exclusivity banner with pulsing citron dot */}
        <div className="bg-encreDeep rounded-[24px] p-6 sm:p-8 border border-bordureSombre flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md">
          <div className="flex items-start sm:items-center gap-4 max-w-3xl">
            <span 
              className="w-4 h-4 rounded-full bg-citron shrink-0 mt-1 sm:mt-0 animate-pulse shadow-sm shadow-citron/50" 
              aria-hidden="true"
            />
            <p className="text-base sm:text-lg text-texteSombre leading-relaxed">
              <strong className="text-citron">La règle d'exclusivité :</strong> quand on démarre avec vous sur un secteur (par exemple 35 km autour de votre entreprise), on refuse tout autre pisciniste sur cette zone.
            </p>
          </div>

          <a
            href="#diagnostic"
            data-cta="pourqui_verifier"
            className="h-12 px-7 rounded-full bg-citron text-encre text-sm font-bold flex items-center justify-center tracking-tight hover:bg-white transition-all shrink-0 active:scale-95"
          >
            Vérifier si mon secteur est libre
          </a>
        </div>

      </div>
    </section>
  );
};

export default AudienceFit;
