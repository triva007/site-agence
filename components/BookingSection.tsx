import React, { useEffect } from 'react';
import { Calendar, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

const BookingSection: React.FC = () => {
  useEffect(() => {
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).Calendly && typeof (window as any).Calendly.initInlineWidgets === 'function') {
      (window as any).Calendly.initInlineWidgets();
    }
  }, []);

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
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-4 sm:p-8 shadow-card">
          {/* Début de widget en ligne Calendly */}
          <div
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden bg-white shadow-xs"
            data-url="https://calendly.com/aaron-triva-media/decouverte?hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
          {/* Fin de widget en ligne Calendly */}

          {/* Footer note under Calendly */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-blue shrink-0" />
              <span>Entretien 100% confidentiel avec Aaron · Zéro démarchage intempestif · 1 seul artisan par secteur</span>
            </div>

            <a
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors font-semibold"
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
