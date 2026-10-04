import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle, ShieldCheck, ExternalLink, Loader2 } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/aaron-triva-media/decouverte?hide_gdpr_banner=1';

const BookingSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar size={14} />
            <span>Diagnostic Gratuit &amp; Sans Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            30 minutes d'échange pour évaluer le potentiel de votre secteur
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Sélectionnez directement le créneau de votre choix ci-dessous. Nous analyserons ensemble le volume de propriétaires dans votre rayon d'action et la disponibilité de votre secteur pour l'exclusivité géographique.
          </p>

          {/* 3 Core Value Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={15} className="text-brand-blue" />
              Vérification de l'exclusivité de votre zone
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={15} className="text-brand-blue" />
              Estimation du coût par prospect qualifié
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={15} className="text-brand-blue" />
              Échange direct avec Aaron (sans commercial)
            </span>
          </div>
        </div>

        {/* Booking Container with Calendly */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-3 sm:p-6 shadow-card relative">
          
          {/* Top Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Agenda en direct · Créneaux disponibles cette semaine</span>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blueHover hover:underline transition-colors"
            >
              <span>Ouvrir dans une nouvelle fenêtre</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Début de widget en ligne Calendly */}
          <div 
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs relative"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }}
          >
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-6 text-center">
                <Loader2 size={36} className="text-brand-blue animate-spin mb-3" />
                <p className="text-sm font-bold text-slate-800 mb-1">Chargement du calendrier en cours...</p>
                <p className="text-xs text-slate-500 max-w-sm">
                  Connexion sécurisée aux disponibilités d'Aaron...
                </p>
              </div>
            )}
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly - Diagnostic Découverte Triva Media"
              className="w-full h-full min-h-[700px] border-0 rounded-2xl"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          {/* Fin de widget en ligne Calendly */}

          {/* Footer note under Calendly */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-5 border-t border-slate-200 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-blue shrink-0" />
              <span>Entretien 100% confidentiel avec Aaron · Zéro démarchage intempestif · 1 seul artisan par secteur</span>
            </div>

            <a
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-600 transition-colors font-semibold"
            >
              <MessageCircle size={16} className="text-emerald-500 shrink-0" />
              <span>Vous préférez échanger sur WhatsApp ? Cliquez ici</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;
