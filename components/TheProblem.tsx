import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export const TheProblem: React.FC = () => {
  const cards = [
    {
      title: 'Les montagnes russes',
      text: 'Un mois sous l\'eau, puis plus rien. Le bouche-à-oreille ne se pilote pas : vous ne savez jamais ce que vous ferez dans trois mois, et vos gars doivent tourner.',
      step: '01',
      img: '/media/constat-carnet.jpg',
      alt: 'Planning de chantiers rempli quelques semaines puis vide',
    },
    {
      title: 'Les demandes partagées',
      text: 'Les plateformes revendent la même demande à 4 ou 5 piscinistes. Le client compare les prix, et vous perdez un chantier pour 300 €.',
      step: '02',
      img: '/media/constat-telephone.jpg',
      alt: 'Téléphone posé dans une camionnette devant un chantier de piscine',
    },
    {
      title: 'Les devis pour rien',
      text: 'Des soirées et des samedis à métrer et chiffrer pour des gens qui voulaient juste un prix, ou qui feront leur piscine dans trois ans.',
      step: '03',
      img: '/media/constat-devis.jpg',
      alt: 'Bloc-notes de devis et mètre ruban posés dans un jardin',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <SectionHeading eyebrow="Le constat">
          Le bouche-à-oreille fait votre réputation. Il ne remplit pas votre{' '}
          <span className="font-serif italic font-normal text-vertProfond">carnet</span>.
        </SectionHeading>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 110}
              className="card bg-blanc rounded-[24px] overflow-hidden border border-bordureClair shadow-sm flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-encre">
                <img src={card.img} alt={card.alt} loading="lazy" className="zoomable h-full w-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
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
            </Reveal>
          ))}
        </div>

        {/* Transition statement */}
        <Reveal variant="left" className="max-w-3xl border-l-2 border-vertProfond pl-6 py-2">
          <p className="text-lg sm:text-xl font-semibold text-texteClair leading-relaxed">
            Il vous faut un canal à vous : des propriétaires de votre secteur qui découvrent vos réalisations et qui vous contactent, vous.
          </p>
        </Reveal>

      </div>
    </section>
  );
};

export default TheProblem;
