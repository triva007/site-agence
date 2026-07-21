import React from 'react';
import { Activity } from 'lucide-react';

const CurrentTest: React.FC = () => {
  return (
    <section id="current-test" className="py-20 md:py-28 bg-brand-cream border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 shadow-lg border border-brand-accent/30 rounded-3xl reveal relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-accent/5 rounded-full pointer-events-none"></div>

          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-brand-accent/30 text-brand-accent font-bold uppercase tracking-widest text-xs">
              <Activity size={14} className="animate-pulse" />
              <span>Transparent</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Campagnes actives</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6 tracking-tight">
            Test en cours — Été 2026
          </h2>
          
          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            <p className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
              <strong className="text-brand-dark font-semibold">Été 2026 :</strong> je fais tourner un test avec 3 photographes et vidéastes de mariage. Les résultats chiffrés seront publiés ici fin août.
            </p>
            <p className="text-slate-500 text-sm sm:text-base italic">
              C'est aussi pour ça qu'il n'y a pas encore d'études de cas sur cette page : je préfère montrer du réel que des captures d'écran invérifiables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentTest;
