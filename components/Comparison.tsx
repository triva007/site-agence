import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">COMPARAISON</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Deux façons d'avoir des demandes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch reveal stagger-1">
          {/* Left Column - My Method */}
          <div className="bg-white rounded-2xl p-8 border-2 border-brand-accent shadow-lg relative flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Ma méthode
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-dark mb-8 text-center mt-4">
              Le Filtre Couple
            </h3>
            <ul className="space-y-6 flex-1">
              {[
                "Des demandes exclusives : votre zone, vos campagnes, jamais partagées ni revendues",
                "Des couples filtrés sur la date, le lieu et le budget avant même de vous contacter",
                "Vos propres images en publicité, pas des visuels génériques",
                "Un cadre de rappel fourni pour convertir les demandes en rendez-vous",
                "Les chiffres partagés avec vous chaque semaine, en toute transparence"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-cream text-brand-accent flex items-center justify-center mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Old Way */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <h3 className="text-2xl font-display font-bold text-slate-500 mb-8 text-center mt-4">
              Ce que vous connaissez déjà
            </h3>
            <ul className="space-y-6 flex-1">
              {[
                "Les annuaires qui présentent le même couple à cinq confrères en même temps",
                "Le boost Instagram qui envoie des curieux sans date ni budget vers votre profil",
                "Les agences généralistes qui découvrent le monde du mariage avec votre argent",
                "Des rapports incompréhensibles, ou pas de rapport du tout"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5 text-slate-400">
                    <X size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-500 leading-relaxed">{item}</span>
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
