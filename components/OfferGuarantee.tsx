import React from 'react';
import { Check } from 'lucide-react';
import Reveal from './Reveal';

/**
 * La garantie, en une phrase forte. Le détail (étapes de paiement, conditions, critères)
 * est expliqué pendant le diagnostic, pas sur la page.
 */
const POINTS = [
  { key: 'Un seul pisciniste par secteur', text: 'Votre zone est réservée : on ne travaille pas avec vos concurrents.' },
  { key: 'Des demandes à votre nom', text: 'Elles ne sont jamais revendues, et seuls les rendez-vous qualifiés arrivent dans votre agenda.' },
  { key: 'Un seul interlocuteur', text: 'Aaron, du lancement jusqu’au premier chantier signé.' },
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
            Si ce n’est pas atteint, vous êtes remboursé. Les conditions et le prix vous sont expliqués pendant le diagnostic, avant tout engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {POINTS.map((p, i) => (
            <Reveal key={p.key} delay={i * 80}>
              <div className="flex items-start gap-3">
                <span className="mt-[2px] w-6 h-6 rounded-full bg-vertProfond text-blanc grid place-items-center shrink-0" aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </span>
                <p className="text-base leading-snug text-texteClairSec">
                  <strong className="block font-semibold text-texteClair text-lg">{p.key}</strong>
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
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
            Diagnostic offert de 30&nbsp;minutes, sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferGuarantee;
