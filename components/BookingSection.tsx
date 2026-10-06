import React, { useState } from 'react';
import { Check, MessageCircle, ExternalLink, Loader2, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import BookingSector from './booking-sector';
import './booking.css';

// Couleurs de l'agenda alignées sur le site (appliquées par Calendly si l'offre le permet)
const CALENDLY_EMBED =
  CONTACT_INFO.calendlyUrl +
  '&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=0b6e7d&text_color=0b2a3a&background_color=ffffff';

/**
 * Section 7 : réservation (#diagnostic, fond sombre).
 * Fusion de l'ancienne réservation et du dernier appel (FinalCall) :
 * le secteur qui se réserve, ce qu'on se dit pendant l'appel, puis l'agenda.
 */
export const BookingSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const checks = [
    'Si votre secteur est libre',
    'Ce que ça coûte, annoncé par écrit',
    'Ce qui se passe si ça ne marche pas',
  ];

  return (
    <section id="diagnostic" className="booking-section py-16 lg:py-20 bg-encre text-texteSombre relative isolate">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 gap-y-7 lg:items-center mb-8">
          {/* Titre */}
          <div className="lg:col-span-7 lg:row-start-1">
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.03em] text-texteSombre">
              Votre secteur est-il{' '}
              <span className="font-serif italic font-normal text-citron tracking-normal">libre</span>&nbsp;?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-texteSombreSec leading-relaxed max-w-[52ch]">
              Un appel de 20 minutes, gratuit. On regarde votre zone ensemble, et vous repartez avec les prix par écrit, même si vous ne donnez pas suite.
            </p>
          </div>

          {/* Le secteur qui se réserve */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2">
            <div className="lg:max-w-[390px] lg:ml-auto">
              <BookingSector />
              <p className="mt-3 text-[15px] sm:text-base text-texteSombre leading-snug">
                <strong className="font-bold">Votre secteur n'est réservé qu'à un seul pisciniste.</strong>{' '}
                <span className="text-texteSombreSec">Par exemple 35&nbsp;km autour de votre entreprise&nbsp;: dans ce rayon, on refuse les autres.</span>
              </p>
            </div>
          </div>

          {/* Pendant l'appel */}
          <div className="lg:col-span-7 lg:row-start-2">
            <p className="text-base font-bold text-texteSombre mb-3">Pendant l'appel, on vous dit&nbsp;:</p>
            <ul className="space-y-2.5">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-base sm:text-lg text-texteSombre leading-snug">
                  <span className="w-5 h-5 rounded-full bg-citron text-encre grid place-items-center shrink-0 mt-[3px]" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Agenda */}
        <div className="booking-agenda bg-blanc text-texteClair rounded-[24px] overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 sm:px-6 py-2 sm:py-2.5 border-b border-bordureClair">
            <div className="flex items-center gap-2.5 text-[13px] sm:text-sm font-semibold">
              <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-citron" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-vertProfond" />
              </span>
              <span className="sm:hidden">Agenda en direct</span>
              <span className="hidden sm:inline">Nos disponibilités en direct</span>
            </div>
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="diagnostic_calendly_external"
              className="inline-flex items-center gap-1.5 text-[13px] sm:text-sm font-bold text-vertProfond hover:underline min-h-[44px]"
            >
              Ouvrir en plein écran <ExternalLink size={14} aria-hidden="true" />
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
              title="Réserver un appel de 20 minutes avec Triva Media"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <div className="px-4 sm:px-6 py-4 border-t border-bordureClair flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#FBF9F5]">
            <p className="text-[15px] sm:text-base text-texteClairSec">
              Pas le temps maintenant&nbsp;? On vous répond directement sur WhatsApp.
            </p>
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:flex gap-2">
              <a
                href={CONTACT_INFO.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="diagnostic_whatsapp"
                className="h-12 px-4 sm:px-5 rounded-full bg-encre text-texteSombre text-sm font-bold inline-flex items-center justify-center gap-2 hover:bg-encreDeep transition-colors whitespace-nowrap"
              >
                <MessageCircle size={17} className="text-citron shrink-0" /> WhatsApp
              </a>
              <a
                href={CONTACT_INFO.phoneHref}
                data-cta="diagnostic_telephone"
                className="h-12 px-3 sm:px-5 rounded-full border border-bordureClair text-texteClair text-[13px] sm:text-sm font-bold inline-flex items-center justify-center gap-1.5 sm:gap-2 hover:border-vertProfond transition-colors whitespace-nowrap"
              >
                <Phone size={16} className="text-vertProfond shrink-0" /> {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
