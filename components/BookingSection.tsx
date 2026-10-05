import React, { useState } from 'react';
import Reveal from './Reveal';
import { Check, MessageCircle, ExternalLink, Loader2, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

// Couleurs de l'agenda alignées sur le site (appliquées par Calendly si l'offre le permet)
const CALENDLY_EMBED =
  CONTACT_INFO.calendlyUrl +
  '&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=0b6e7d&text_color=0b2a3a&background_color=ffffff';

export const BookingSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const steps = [
    { n: '1', t: 'Choisissez un jour et une heure', d: 'Ce sont nos disponibilités réelles.' },
    { n: '2', t: 'Laissez votre nom et votre numéro', d: 'Une minute, rien d’autre à préparer.' },
    { n: '3', t: 'On vous appelle à l’heure dite', d: '30 minutes, gratuit, sans engagement.' },
  ];

  const checks = [
    'Si votre secteur est encore libre',
    'Combien de propriétaires dans votre zone',
    'Ce que ça coûte, annoncé par écrit',
    'Ce qui se passe si ça ne marche pas',
  ];

  return (
    <section id="diagnostic" className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* En-tête */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-vertProfond mb-3 inline-block">
            Diagnostic gratuit · 30 min
          </span>
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold text-texteClair leading-[1.06] tracking-[-0.03em] mb-4">
            Votre secteur est-il encore{' '}
            <span className="font-serif italic font-normal text-vertProfond">libre</span> ?
          </h2>
          <p className="text-lg text-texteClairSec leading-relaxed">
            Réservez un appel avec nous. On regarde votre zone ensemble, et vous repartez avec les prix par écrit, même si vous ne donnez pas suite.
          </p>
        </div>

        {/* Comment ça se passe + ce qu'on regarde */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 mb-6 sm:mb-8">
          <ol className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {steps.map((s) => (
              <Reveal as="li" key={s.n} delay={(Number(s.n) - 1) * 100} className="flex sm:flex-col items-start gap-3 sm:gap-3 bg-blanc rounded-2xl border border-bordureClair p-4 sm:p-5">
                <span className="w-9 h-9 rounded-full bg-encre text-citron grid place-items-center font-extrabold shrink-0">{s.n}</span>
                <span>
                  <span className="block text-base font-bold leading-snug">{s.t}</span>
                  <span className="block text-sm text-texteClairSec mt-1 leading-snug">{s.d}</span>
                </span>
              </Reveal>
            ))}
          </ol>
          <div className="lg:col-span-2 rounded-2xl bg-encre text-texteSombre p-5 sm:p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-citron mb-3">Pendant l’appel</p>
            <ul className="space-y-2.5">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-base">
                  <span className="w-5 h-5 rounded-full bg-citron text-encre grid place-items-center shrink-0 mt-0.5" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Agenda */}
        <div className="bg-blanc rounded-[24px] border border-bordureClair shadow-[0_20px_60px_rgba(11,42,58,.10)] overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-bordureClair bg-blanc">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-texteClair">
              <span className="relative flex w-2.5 h-2.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </span>
              Nos disponibilités en direct
            </div>
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="diagnostic_calendly_external"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-vertProfond hover:underline min-h-[44px]"
            >
              Ouvrir en plein écran <ExternalLink size={14} />
            </a>
          </div>

          <div className="relative h-[1080px] sm:h-[980px] lg:h-[720px]">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blanc z-10 p-6 text-center">
                <Loader2 size={34} className="text-vertProfond animate-spin mb-3" />
                <p className="text-base font-bold text-texteClair">Chargement de l’agenda…</p>
                <p className="text-sm text-texteClairSec mt-1">Si rien ne s’affiche, utilisez « Ouvrir en plein écran ».</p>
              </div>
            )}
            <iframe
              src={CALENDLY_EMBED}
              title="Réserver un appel de 30 minutes avec Triva Media"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <div className="px-4 sm:px-6 py-5 border-t border-bordureClair flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#FBF9F5]">
            <p className="text-base text-texteClairSec">Pas le temps maintenant ? Écrivez-nous ou appelez-nous.</p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={CONTACT_INFO.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="diagnostic_whatsapp"
                className="h-12 px-5 rounded-full bg-encre text-texteSombre text-sm font-bold inline-flex items-center justify-center gap-2 hover:bg-encreDeep transition"
              >
                <MessageCircle size={17} className="text-citron" /> WhatsApp
              </a>
              <a
                href={CONTACT_INFO.phoneHref}
                data-cta="diagnostic_telephone"
                className="h-12 px-5 rounded-full border border-bordureClair text-texteClair text-sm font-bold inline-flex items-center justify-center gap-2 hover:border-vertProfond transition"
              >
                <Phone size={16} className="text-vertProfond" /> {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
