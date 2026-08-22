import React from 'react';
import { PhoneCall, FileEdit, CheckCircle2, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const STEP_ICONS = [PhoneCall, FileEdit, CheckCircle2, Rocket];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Rocket size={14} />
            <span>Déploiement Simple &amp; Rapide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            Comment nous mettons en place votre système
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Votre métier, c'est de bâtir. Le nôtre, c'est de vous apporter les chantiers sans vous faire perdre de temps technique.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 hover:border-brand-blue/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-xl bg-brand-blue text-white flex items-center justify-center font-black text-sm">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-slate-200/80">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                  Étape {idx + 1} validée
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
