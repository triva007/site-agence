import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const OfferGuarantee: React.FC = () => {
  const blocks = [
    {
      num: '01',
      title: 'Une mise en place unique',
      text: 'On prépare tout : publicités, questions, réception des demandes sur votre téléphone.'
    },
    {
      num: '02',
      title: 'Puis uniquement les rendez-vous qualifiés et tenus',
      text: 'Un vrai projet, dans vos critères, et l\'appel a eu lieu. Pas tenu ou hors critères : pas facturé.'
    },
    {
      num: '03',
      title: 'Le budget pub, sur votre compte',
      text: 'Vous le payez directement à Meta. Il ne passe jamais par nous.'
    },
  ];

  return (
    <section id="offre" className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-vertProfond mb-3 inline-block">
            L'offre
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteClair leading-[1.12] tracking-[-0.03em]">
            Vous payez à la{' '}
            <span className="font-serif italic font-normal text-vertProfond">
              performance
            </span>
            .
          </h2>
        </div>

        {/* 3 Pillars Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {blocks.map((block) => (
            <div
              key={block.num}
              className="bg-blanc rounded-[24px] p-8 border border-bordureClair shadow-sm flex flex-col justify-between"
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
            </div>
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

          <p className="text-2xl sm:text-3xl font-serif italic text-vertProfond font-normal">
            « Je gagne quand vous gagnez. »
          </p>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#diagnostic"
            data-cta="offre_reserver"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-encre text-citron text-base font-bold tracking-tight hover:bg-vertProfond hover:text-white transition-all shadow-md active:scale-98"
          >
            Réserver mon diagnostic de 30 min
          </a>
        </div>

      </div>
    </section>
  );
};

export default OfferGuarantee;
