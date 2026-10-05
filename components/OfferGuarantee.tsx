import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const OfferGuarantee: React.FC = () => {
  const blocks = [
    {
      num: '01',
      title: 'Une mise en place, une seule fois',
      text: 'On prépare tout avant de lancer : les publicités, les questions posées au propriétaire, la réception des demandes sur votre téléphone.'
    },
    {
      num: '02',
      title: 'Puis seulement les rendez-vous que vous avez eus',
      text: 'Un vrai projet, dans vos critères, et vous avez eu la personne. Pas eu, ou hors critères : pas facturé.'
    },
    {
      num: '03',
      title: 'Le budget pub, sur votre compte',
      text: 'Vous le payez directement à Meta, avec votre carte. Il ne passe jamais par nous, et vous voyez chaque euro dépensé.'
    },
  ];

  return (
    <section id="offre" className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionHeading eyebrow="Le mois test" tone="light">
          On commence toujours par{' '}
          <span className="font-serif italic font-normal text-vertProfond">30 jours de test</span>.
        </SectionHeading>

        {/* 3 Pillars Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {blocks.map((block, i) => (
            <Reveal
              as="div"
              key={block.num}
              delay={i * 110}
              className="card bg-blanc rounded-[24px] p-8 border border-bordureClair shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold text-vertProfond tracking-wider uppercase mb-4 inline-block">
                  Étape {block.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-texteClair tracking-tight mb-3">
                  {block.title}
                </h3>
                <p className="text-base sm:text-lg text-texteClairSec leading-relaxed">
                  {block.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 30-Day Guarantee Card */}
        <div className="bg-encre text-texteSombre rounded-[24px] p-8 sm:p-12 border-2 border-citron shadow-xl mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-citron text-encre flex items-center justify-center shrink-0">
                <ShieldCheck size={22} className="stroke-[2.5]" />
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-texteSombre tracking-tight">
                La garantie des 30 jours
              </h3>
            </div>

            <p className="text-base sm:text-xl text-texteSombreSec leading-relaxed">
              Si aucun rendez-vous qualifié et tenu n'arrive dans les 30 premiers jours de diffusion, on vous rembourse l'intégralité de la mise en place. Les critères sont définis ensemble avant le lancement. Le budget payé à Meta n'est pas concerné.
            </p>
          </div>
        </div>

        {/* Line under offer and signature quote */}
        <div className="max-w-3xl space-y-4 mb-10">
          <p className="text-base sm:text-lg text-texteClairSec leading-relaxed">
            Aucun engagement de durée. À 30 jours, on fait un premier bilan : demandes, appels, devis en cours. Une construction se signe en 2 à 4 mois : vous jugez sur la durée, et vous pouvez arrêter quand vous voulez.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#diagnostic"
            data-cta="offre_reserver"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-encre text-citron text-base font-bold tracking-tight hover:bg-vertProfond hover:text-white transition-all shadow-md active:scale-98"
          >
            Vérifier si mon secteur est libre
          </a>
        </div>

      </div>
    </section>
  );
};

export default OfferGuarantee;
