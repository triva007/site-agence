import React, { useState } from 'react';
import { Check, MessageCircle, ExternalLink, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const BookingSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const pills = [
    'Vérification de l\'exclusivité de votre zone',
    'Échange direct avec Aaron, sans commercial',
    'Aucun démarchage ensuite si ce n\'est pas pour vous'
  ];

  return (
    <section id="diagnostic" className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-vertProfond mb-3 inline-block">
            Diagnostic gratuit · 30 min
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteClair leading-[1.12] tracking-[-0.03em] mb-4">
            Votre secteur est-il encore{' '}
            <span className="font-serif italic font-normal text-vertProfond">
              libre
            </span>
            {' '}?
          </h2>
          <p className="text-base sm:text-lg text-texteClairSec leading-relaxed">
            Choisissez un créneau. En 30 minutes, on regarde le nombre de propriétaires dans votre zone, la disponibilité de votre secteur et ce qu'on peut raisonnablement en attendre.
          </p>

          {/* 3 Value Puces */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8">
            {pills.map((pill) => (
              <div key={pill} className="flex items-start gap-2.5 bg-blanc p-3.5 rounded-2xl border border-bordureClair">
                <span className="w-5 h-5 rounded-full bg-vertProfond text-blanc flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-xs sm:text-sm font-bold text-texteClair leading-tight">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Calendly Booking Card */}
        <div className="bg-blanc rounded-[24px] p-4 sm:p-8 border border-bordureClair shadow-sm relative">
          
          {/* Top Bar with External Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-texteClairSec">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Agenda en direct · Créneaux disponibles avec Aaron</span>
            </div>

            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="diagnostic_calendly_external"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-vertProfond hover:underline transition-colors"
            >
              <span>Ouvrir dans une nouvelle fenêtre</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Calendly Inline Widget Container */}
          <div 
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs relative"
            data-url={CONTACT_INFO.calendlyUrl}
            style={{ minWidth: '320px', height: '700px' }}
          >
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-6 text-center">
                <Loader2 size={36} className="text-vertProfond animate-spin mb-3" />
                <p className="text-sm font-bold text-texteClair mb-1">
                  Chargement de l'agenda en cours...
                </p>
                <p className="text-xs text-texteClairSec max-w-sm">
                  Connexion sécurisée aux disponibilités d'Aaron.
                </p>
              </div>
            )}
            
            <iframe
              src={CONTACT_INFO.calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly - Diagnostic Découverte Triva Media"
              className="w-full h-full min-h-[700px] border-0 rounded-2xl"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Under Widget: Direct WhatsApp Alternative */}
          <div className="mt-8 pt-6 border-t border-bordureClair flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-texteClairSec">
              Vous préférez écrire ?{' '}
              <a
                href={CONTACT_INFO.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="diagnostic_whatsapp"
                className="font-bold text-vertProfond hover:underline inline-flex items-center gap-1.5 ml-1"
              >
                <MessageCircle size={15} className="inline text-vertProfond" />
                <span>Posez votre question sur WhatsApp</span>
              </a>
            </p>

            <span className="text-xs text-texteClairSec">
              Réponse directe par Aaron
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingSection;
