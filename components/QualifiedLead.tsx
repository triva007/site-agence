import React from 'react';
import { Check, X } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/**
 * Définit le seul terme qui porte toute l'offre et toute la facturation.
 * C'est le mot avec lequel d'autres agences ont déjà promené le pisciniste :
 * il doit être défini là où il le lit pour la première fois.
 */
export const QualifiedLead: React.FC = () => {
  const compte = [
    'La personne est propriétaire de la maison.',
    'Le projet est dans votre zone.',
    'Le budget annoncé est au-dessus de votre minimum.',
    'Elle vous a dit quand elle veut faire les travaux.',
    'Vous l’avez eue au téléphone.',
  ];
  const compteJamais = [
    'Hors de votre zone.',
    'La personne est locataire.',
    'Budget sous votre plancher.',
    'Vous n’avez jamais réussi à l’avoir.',
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Le mot qui compte"
          tone="light"
          lead={<>C’est sur ce mot que vous êtes facturé. Alors on l’écrit noir sur blanc, et les critères sont fixés avec vous avant le lancement.</>}
        >
          Ce qu’on appelle un rendez-vous{' '}
          <span className="font-serif italic font-normal text-vertProfond">qualifié et tenu</span>.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <Reveal variant="left" className="card bg-blanc rounded-[24px] p-8 sm:p-10 border border-bordureClair shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-vertProfond mb-6">On vous le facture si</p>
            <ul className="space-y-4">
              {compte.map((c) => (
                <li key={c} className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-vertProfond text-blanc grid place-items-center shrink-0 mt-1" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-base sm:text-lg text-texteClair leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={90} className="card bg-blanc rounded-[24px] p-8 sm:p-10 border border-bordureClair shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-texteClairSec mb-6">On ne vous le facture pas si</p>
            <ul className="space-y-4">
              {compteJamais.map((c) => (
                <li key={c} className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full border border-bordureClair text-texteClairSec grid place-items-center shrink-0 mt-1" aria-hidden="true">
                    <X size={12} strokeWidth={2.5} />
                  </span>
                  <span className="text-base sm:text-lg text-texteClairSec leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="max-w-3xl mt-10 border-l-2 border-vertProfond pl-6 py-2">
          <p className="text-lg sm:text-xl font-semibold text-texteClair leading-relaxed">
            En cas de doute, c’est vous qui tranchez. Une demande hors critères, vous nous le dites, et elle n’est pas facturée.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default QualifiedLead;
