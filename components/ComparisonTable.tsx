import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      label: 'À qui appartient la demande',
      triva: 'À vous seul',
      plateformes: 'Revendue à 4 ou 5 concurrents',
      boucheAOreille: 'À vous',
      siteWeb: 'À vous',
    },
    {
      label: 'Mise en concurrence',
      triva: 'Réduite : il vous contacte avant d’avoir comparé',
      plateformes: 'Forte, guerre des prix',
      boucheAOreille: 'Faible',
      siteWeb: 'Il compare plusieurs sites',
    },
    {
      label: 'Tri des curieux',
      triva: '4 questions avant contact',
      plateformes: 'Peu ou pas de tri',
      boucheAOreille: 'Aucun',
      siteWeb: 'Aucun',
    },
    {
      label: 'Votre nom mis en avant',
      triva: 'Oui, chaque publicité',
      plateformes: 'Non, c\'est la marque de la plateforme',
      boucheAOreille: 'Oui, dans votre entourage',
      siteWeb: 'Oui, si on le trouve',
    },
    {
      label: 'Prévisible',
      triva: 'Pilotable : on accélère ou on ralentit',
      plateformes: 'Variable',
      boucheAOreille: 'Non',
      siteWeb: 'Non, il faut qu\'on vous cherche',
    },
    {
      label: 'Engagement',
      triva: 'Aucun engagement de durée',
      plateformes: 'Souvent un abonnement',
      boucheAOreille: 'Aucun',
      siteWeb: 'Paiement unique, souvent élevé',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-vertProfond mb-3 inline-block">
            Comparatif clair
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteClair leading-[1.12] tracking-[-0.03em]">
            Pourquoi ce modèle est{' '}
            <span className="font-serif italic font-normal text-vertProfond">
              différent
            </span>
            .
          </h2>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-bordureClair">
                <th className="py-5 px-6 font-bold text-texteClairSec text-sm uppercase tracking-wider w-1/4">
                  Critères
                </th>
                <th className="py-5 px-6 bg-encre text-citron font-extrabold text-lg rounded-t-2xl w-1/4">
                  Triva Media
                </th>
                <th className="py-5 px-6 font-bold text-texteClair text-sm uppercase tracking-wider w-1/4">
                  Plateformes de demandes
                </th>
                <th className="py-5 px-6 font-bold text-texteClairSec text-sm uppercase tracking-wider w-1/8">
                  Bouche-à-oreille seul
                </th>
                <th className="py-5 px-6 font-bold text-texteClairSec text-sm uppercase tracking-wider w-1/8">
                  Site internet seul
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bordureClair text-sm">
              {rows.map((row, idx) => (
                <tr key={row.label} className={idx % 2 === 0 ? 'bg-papier' : 'bg-blanc/50'}>
                  <td className="py-5 px-6 font-bold text-texteClair">
                    {row.label}
                  </td>
                  
                  {/* Highlighted Triva Media Column */}
                  <td className={`py-5 px-6 bg-encre font-bold text-texteSombre border-x border-bordureSombre ${
                    idx === rows.length - 1 ? 'rounded-b-2xl' : ''
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-citron shrink-0" />
                      <span>{row.triva}</span>
                    </div>
                  </td>

                  <td className="py-5 px-6 text-texteClair font-medium">
                    {row.plateformes}
                  </td>
                  <td className="py-5 px-6 text-texteClairSec">
                    {row.boucheAOreille}
                  </td>
                  <td className="py-5 px-6 text-texteClairSec">
                    {row.siteWeb}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Suite of cards, one per criterion, with Triva Media first */}
        <div className="lg:hidden space-y-5">
          {rows.map((row) => (
            <div
              key={row.label}
              className="bg-blanc rounded-[24px] p-6 border border-bordureClair shadow-sm"
            >
              <h3 className="text-base font-extrabold text-texteClair mb-4 pb-2 border-b border-bordureClair">
                {row.label}
              </h3>

              <div className="space-y-3">
                {/* Triva Media Card Block */}
                <div className="bg-encre text-texteSombre rounded-2xl p-4 border border-citron/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-citron">
                      Triva Media
                    </span>
                    <span className="w-2 h-2 rounded-full bg-citron" />
                  </div>
                  <p className="text-sm font-bold text-blanc">
                    {row.triva}
                  </p>
                </div>

                {/* Other alternatives */}
                <div className="p-3 rounded-xl bg-slate-50 text-sm space-y-2">
                  <div>
                    <span className="font-bold text-slate-700 block">Plateformes :</span>
                    <span className="text-slate-600">{row.plateformes}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block">Bouche-à-oreille :</span>
                    <span className="text-slate-600">{row.boucheAOreille}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block">Site internet :</span>
                    <span className="text-slate-600">{row.siteWeb}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;
