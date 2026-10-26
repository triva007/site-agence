import React from 'react';
import { Check, X } from 'lucide-react';
import Reveal from './Reveal';
import OfferTimeline from './offer-timeline';

/**
 * L'offre : comment vous payez (frise des 3 étapes, sans montant), la garantie à 45 jours,
 * ce qui compte comme une visite qualifiée, et ce qu'on vous demande pour que la garantie s'applique.
 * Fusion des anciennes sections OfferGuarantee, QualifiedLead et HonestTalk.
 */
const CRITERES: [string, string][] = [
  ['Propriétaire', 'Locataire'],
  ['Dans votre zone', 'Hors zone'],
  ['Budget au-dessus de votre minimum', 'Budget sous votre plancher'],
  ['A dit quand il veut faire les travaux', 'Ne sait pas quand'],
  ['La visite a bien eu lieu', 'Rendez-vous non honoré par le propriétaire'],
];

const VOTRE_PART = [
  { key: 'Vous honorez les rendez-vous', text: 'qui arrivent dans votre agenda.' },
  { key: 'Vous envoyez vos devis sous 48 à 72\u00a0h', text: 'après chaque visite.' },
  { key: 'Vous gardez la publicité active', text: 'pendant toute la durée de la garantie.' },
  { key: 'Vous répondez vite', text: 'aux propriétaires comme à nous.' },
];

export const OfferGuarantee: React.FC = () => {
  return (
    <section id="offre" className="scroll-mt-16 py-16 lg:py-24 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Titre */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 lg:items-end mb-10 lg:mb-14">
          <h2 className="lg:col-span-7 text-balance text-[30px] sm:text-[36px] lg:text-[46px] font-extrabold leading-[1.1] tracking-[-0.03em] text-texteClair">
            Au moins 5&nbsp;000&nbsp;€ de chantiers signés en 45&nbsp;jours, ou nos honoraires remboursés.
          </h2>
          <p className="lg:col-span-5 text-base sm:text-lg leading-relaxed text-texteClairSec max-w-[46ch]">
            On démarre par un engagement de 3&nbsp;mois, payé en 3&nbsp;étapes&nbsp;: vous réglez la suite au fil des résultats. Ensuite, on continue ensemble.
          </p>
        </div>

        {/* L'effet fort : la frise des 3 étapes de paiement, puis la garantie à 45 jours */}
        <OfferTimeline />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-12 lg:mt-20">
          {/* Ce qui compte comme une visite qualifiée */}
          <Reveal className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-texteClair">
              Ce qui compte comme une <span className="whitespace-nowrap">visite qualifiée</span>
            </h3>
            <p className="mt-2 text-base leading-relaxed text-texteClairSec">
              Seuls ces rendez-vous arrivent dans votre agenda. Critères fixés avec vous avant le lancement&nbsp;; en cas de doute, c’est vous qui tranchez.
            </p>

            <table className="mt-5 w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-texteClair/80">
                  <th scope="col" className="w-1/2 pb-2 pr-3 text-sm font-semibold text-vertProfond">Qualifiée si</th>
                  <th scope="col" className="w-1/2 pb-2 pl-3 text-sm font-semibold text-texteClairSec">Pas qualifiée si</th>
                </tr>
              </thead>
              <tbody>
                {CRITERES.map(([oui, non]) => (
                  <tr key={oui} className="border-b border-bordureClair align-top">
                    <td className="py-3 pr-3">
                      <span className="flex items-start gap-2.5 text-[15px] sm:text-base leading-snug font-medium text-texteClair">
                        <span className="mt-[1px] w-5 h-5 rounded-full bg-vertProfond text-blanc grid place-items-center shrink-0" aria-hidden="true">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {oui}
                      </span>
                    </td>
                    <td className="py-3 pl-3">
                      <span className="flex items-start gap-2.5 text-[15px] sm:text-base leading-snug text-texteClairSec">
                        <span className="mt-[1px] w-5 h-5 rounded-full border border-[#CDBFA9] grid place-items-center shrink-0" aria-hidden="true">
                          <X size={11} strokeWidth={2.5} />
                        </span>
                        {non}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Votre part : les conditions de la garantie */}
          <Reveal delay={100} className="lg:col-span-5 lg:border-l lg:border-bordureClair lg:pl-12">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-texteClair">
              Votre part pour que la garantie s’applique
            </h3>
            <ul className="mt-4 space-y-3">
              {VOTRE_PART.map((p) => (
                <li key={p.key} className="text-base leading-snug text-texteClairSec">
                  <strong className="font-semibold text-texteClair">{p.key}</strong> {p.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Bouton */}
        <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href="#diagnostic"
            data-cta="offre_reserver"
            className="btn-shine inline-flex items-center justify-center h-14 px-8 rounded-full bg-citron text-encre text-base font-bold tracking-tight shadow-md hover:bg-eau transition-colors"
          >
            Vérifier si mon secteur est libre
          </a>
          <p className="text-sm leading-snug text-texteClairSec max-w-[42ch]">
            Diagnostic offert de 30&nbsp;minutes. Les prix vous sont donnés par écrit pendant l’appel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferGuarantee;
