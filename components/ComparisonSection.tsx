import React from 'react';
import { Check, X, Shield, Sparkles, AlertCircle } from 'lucide-react';
import { COMPARISON_POINTS } from '../constants';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Shield size={14} />
            <span>Comparatif Transparent</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            Pourquoi notre modèle change la donne pour votre entreprise
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Comparez objectivement les différentes manières de remplir votre carnet de commandes.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="space-y-4">
          {COMPARISON_POINTS.map((point, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-slate-300 transition-all shadow-2xs"
            >
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                {point.criterion}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Triva Media (Winner) */}
                <div className="p-5 rounded-2xl bg-brand-blueLight/60 border-2 border-brand-blue/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-brand-blue uppercase tracking-wider">
                        Triva Media
                      </span>
                      <span className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs">
                        <Check size={12} />
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-brand-dark leading-relaxed">
                      {point.triva}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-brand-blue mt-3 inline-block">
                    ✓ Approche saine &amp; pérenne
                  </span>
                </div>

                {/* Traditional Platforms */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Plateformes de leads partagés
                      </span>
                      <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs">
                        <X size={12} />
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {point.traditional}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-rose-600 mt-3 inline-block">
                    ✕ Guerre des prix &amp; marge détruite
                  </span>
                </div>

                {/* Word of mouth */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Bouche-à-oreille passif seul
                      </span>
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs">
                        <AlertCircle size={12} />
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {point.wordOfMouth}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-amber-700 mt-3 inline-block">
                    ⚠ Risque de mois creux imprévus
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
