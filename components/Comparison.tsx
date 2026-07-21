import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            COMPARAISON
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Deux façons d'avoir des demandes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch reveal stagger-1">
          {/* Left Column - My Method */}
          <div className="bg-gradient-to-b from-brand-cream to-white rounded-3xl p-8 sm:p-10 border-2 border-brand-accent shadow-xl relative flex flex-col hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>Ma méthode</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-dark mb-8 text-center mt-2">
              Le Filtre Couple
            </h3>
            
            <ul className="space-y-5 flex-1">
              {[
                "Des demandes exclusives : votre zone, vos campagnes, jamais partagées ni revendues",
                "Des couples filtrés sur la date, le lieu et le budget avant même de vous contacter",
                "Vos propres images en publicité, pas des visuels génériques",
                "Un cadre de rappel fourni pour convertir les demandes en rendez-vous",
                "Les chiffres partagés avec vous chaque semaine, en toute transparence"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 bg-white/80 p-3.5 rounded-xl border border-brand-accent/20">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center mt-0.5 shadow-2xs">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-800 leading-relaxed font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Old Way */}
          <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-500 mb-8 text-center mt-2">
              Ce que vous connaissez déjà
            </h3>
            
            <ul className="space-y-5 flex-1">
              {[
                "Les annuaires qui présentent le même couple à cinq confrères en même temps",
                "Le boost Instagram qui envoie des curieux sans date ni budget vers votre profil",
                "Les agences généralistes qui découvrent le monde du mariage avec votre argent",
                "Des rapports incompréhensibles, ou pas de rapport du tout"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/60 bg-white/40">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mt-0.5">
                    <X size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-500 leading-relaxed text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
