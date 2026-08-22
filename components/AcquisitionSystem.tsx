import React from 'react';
import { Target, Layers, Filter, Send, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PILLARS } from '../constants';

const ICONS = [Target, Layers, Filter, Send];

const AcquisitionSystem: React.FC = () => {
  return (
    <section id="system" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            <span>Méthode &amp; Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            Le Système d'Acquisition Triva Media
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Une mécanique éprouvée en 4 piliers pour transformer les propriétaires de votre secteur en chantiers signés à haute valeur ajoutée.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx];
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-brand-blue/50 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-3xl font-display font-black text-slate-300 group-hover:text-brand-blue/30 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 size={15} className="text-brand-blue shrink-0" />
                  <span>Conçu pour sécuriser votre temps et votre marge</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature: What happens during a lead qualification */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              Focus sur la qualification
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-3">
              Ce que répond le propriétaire avant de vous être transmis :
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Nous n'envoyons aucun numéro sans avoir validé ces 4 informations indispensables à votre activité :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
              <span className="text-xs font-bold text-slate-400 block mb-1">Question 1</span>
              <p className="text-sm font-bold text-white">« Êtes-vous propriétaire de la maison concernée ? »</p>
              <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-400">→ Élimination des locataires</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
              <span className="text-xs font-bold text-slate-400 block mb-1">Question 2</span>
              <p className="text-sm font-bold text-white">« Quel est le type précis de votre projet ? »</p>
              <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-400">→ Ciblage de vos chantiers cibles</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
              <span className="text-xs font-bold text-slate-400 block mb-1">Question 3</span>
              <p className="text-sm font-bold text-white">« Quel budget envisagez-vous d'allouer aux travaux ? »</p>
              <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-400">→ Seuil minimum garanti</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
              <span className="text-xs font-bold text-slate-400 block mb-1">Question 4</span>
              <p className="text-sm font-bold text-white">« À quelle échéance souhaitez-vous démarrer ? »</p>
              <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-400">→ Planning et urgence vérifiés</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcquisitionSystem;
