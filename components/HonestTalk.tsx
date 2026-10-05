import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import React from 'react';

export const HonestTalk: React.FC = () => {
  const points = [
    {
      title: 'Une demande n\'est pas une vente.',
      text: 'La visite, le devis et la signature restent votre métier. On vous apporte des gens sérieux, on ne signe pas à votre place.'
    },
    {
      title: 'Une construction se signe en 2 à 4 mois.',
      text: 'Le propriétaire réfléchit, compare, attend la mairie. On vous le dit avant de commencer, pas après.'
    },
    {
      title: 'On ne filtre pas 100 % des curieux.',
      text: 'Les 4 questions en écartent la plupart. Quand une demande n\'est pas bonne, vous nous le dites et on ajuste les critères.'
    },
    {
      title: 'Vous gardez la main.',
      text: 'Le compte publicitaire est à votre nom, le budget est payé directement à Meta, et vous voyez où va chaque euro.'
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-encre text-texteSombre bg-grid-citron relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionHeading eyebrow="Ce qu'on ne vous promet pas" tone="dark">
          Pas de belles promesses. Voici ce qui se passe{' '}
          <span className="font-serif italic font-normal text-citron">vraiment</span>.
        </SectionHeading>

        {/* 4 Honest Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {points.map((point, i) => (
            <Reveal
              as="div"
              key={point.title}
              delay={i * 90}
              className="card card-dark bg-encreCard rounded-[24px] p-8 border border-bordureSombre shadow-md"
            >
              <h3 className="text-xl sm:text-2xl font-extrabold text-texteSombre tracking-tight mb-3">
                {point.title}
              </h3>
              <p className="text-base sm:text-lg text-texteSombreSec leading-relaxed">
                {point.text}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HonestTalk;
