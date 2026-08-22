import React from 'react';
import { AlertTriangle, XCircle, TrendingDown, Clock, ShieldAlert, ArrowRight } from 'lucide-react';

const MarketReality: React.FC = () => {
  const PAIN_POINTS = [
    {
      icon: TrendingDown,
      badge: "L'impasse n°1",
      title: "Le bouche-à-oreille en dents de scie",
      description: "Le bouche-à-oreille est excellent pour la réputation, mais impossible à piloter. Résultat : vous alternez entre des mois de surcharge intense et des périodes de calme angoissant où le planning n'est pas rempli à l'avance."
    },
    {
      icon: ShieldAlert,
      badge: "L'impasse n°2",
      title: "Les plateformes de leads partagés",
      description: "Acheter des fiches contacts sur des plateformes tierces vous met en concurrence directe avec 4 ou 5 confrères. Vous entrez dans une guerre des prix agressive qui détruit vos marges pour des clients qui cherchent le moins disant."
    },
    {
      icon: Clock,
      badge: "L'impasse n°3",
      title: "Le syndrome du devis pour curieux",
      description: "Passer vos soirées et vos samedis à vous déplacer pour métrer et chiffrer des projets pour des particuliers qui n'ont en réalité ni le budget, ni l'accord bancaire, ni l'intention de démarrer prochainement."
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle ambient gradient */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">
            <AlertTriangle size={14} />
            <span>Le Constat dans le BTP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight mb-5">
            Pourquoi la plupart des artisans subissent leur carnet de commandes
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Travailler dur sur les chantiers ne suffit plus si vous n'avez pas le contrôle direct sur la qualité et le volume de vos futures demandes.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-600 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                      {point.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-rose-400">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {point.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center gap-2 text-xs text-slate-400">
                  <XCircle size={15} className="text-rose-400 shrink-0" />
                  <span>Perte de temps et marges sous pression</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Transition Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-blue/20 via-slate-800 to-slate-800 border border-brand-blue/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              La solution ? Reprendre la main avec un canal direct et prévisible.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Cibler uniquement des propriétaires qualifiés dans votre zone qui découvrent vos réalisations et s'adressent exclusivement à vous.
            </p>
          </div>

          <a
            href="#system"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blueHover text-white rounded-full font-bold text-xs sm:text-sm whitespace-nowrap shadow-md transition-all active:scale-98"
          >
            <span>Découvrir notre système</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default MarketReality;
