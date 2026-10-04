import React from 'react';

export const TheProblem: React.FC = () => {
  const cards = [
    {
      title: 'Les montagnes russes',
      text: 'Un mois sous l\'eau, puis plus rien. Le bouche-à-oreille ne se pilote pas : vous ne savez jamais ce que vous ferez dans trois mois, et vos gars doivent tourner.',
      step: '01'
    },
    {
      title: 'Les demandes partagées',
      text: 'Les plateformes revendent la même demande à 4 ou 5 piscinistes. Le client compare les prix, et vous perdez un chantier pour 300 €.',
      step: '02'
    },
    {
      title: 'Les devis pour rien',
      text: 'Des soirées et des samedis à métrer et chiffrer pour des gens qui voulaient juste un prix, ou qui feront leur piscine dans trois ans.',
      step: '03'
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-vertProfond mb-3 inline-block">
            Le constat
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteClair leading-[1.12] tracking-[-0.03em]">
            Le bouche-à-oreille fait votre réputation. Il ne remplit pas votre{' '}
            <span className="font-serif italic font-normal text-vertProfond">
              carnet
            </span>
            .
          </h2>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-blanc rounded-[24px] p-8 border border-bordureClair shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-texteClairSec tracking-wider uppercase mb-4 inline-block">
                  {card.step}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-texteClair tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-base sm:text-lg text-texteClairSec leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="max-w-3xl border-l-2 border-vertProfond pl-6 py-2">
          <p className="text-lg sm:text-xl font-semibold text-texteClair leading-relaxed">
            Il vous faut un canal à vous : des propriétaires de votre secteur qui découvrent vos réalisations et qui vous contactent, vous.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TheProblem;
