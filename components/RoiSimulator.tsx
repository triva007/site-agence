import React, { useState } from 'react';
import { Euro, Percent, HelpCircle } from 'lucide-react';

export const RoiSimulator: React.FC = () => {
  const [avgTicket, setAvgTicket] = useState<number>(25000);
  const [marginPercent, setMarginPercent] = useState<number>(25);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(1000);

  // Exact math:
  // gain par bassin = prix moyen × pourcentage
  const gainPerPool = Math.round(avgTicket * (marginPercent / 100));

  // coût sur 12 mois = budget mensuel × 12
  const cost12Months = monthlyBudget * 12;

  // bassins nécessaires pour couvrir 12 mois = coût sur 12 mois ÷ gain par bassin, arrondi au dixième
  const poolsNeeded = gainPerPool > 0 
    ? (cost12Months / gainPerPool).toFixed(1).replace('.', ',')
    : '0,0';

  const formatEuro = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(val);
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-encre text-texteSombre bg-grid-citron relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-citron mb-3 inline-block">
            Simulation indicative
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteSombre leading-[1.12] tracking-[-0.03em] mb-4">
            Combien de bassins faut-il pour que ce soit{' '}
            <span className="font-serif italic font-normal text-citron">
              rentable
            </span>
            {' '}?
          </h2>
          <p className="text-base sm:text-lg text-texteSombreSec leading-relaxed">
            Une simulation simple, avec vos propres chiffres. Elle ne promet aucun résultat : elle montre seulement à partir de quand l'investissement est couvert.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-encreCard rounded-[24px] p-6 sm:p-10 border border-bordureSombre space-y-8">
            
            {/* Input 1: Prix moyen HT */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="avgTicket" className="text-sm sm:text-base font-bold text-texteSombre">
                  Prix moyen d'un bassin HT
                </label>
                <div className="flex items-center gap-1 bg-encreDeep px-3 py-1.5 rounded-xl border border-bordureSombre">
                  <input
                    type="number"
                    id="avgTicket"
                    min={10000}
                    max={80000}
                    step={1000}
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value) || 0)}
                    onBlur={(e) => setAvgTicket(Math.max(10000, Math.min(80000, Number(e.target.value) || 0)))}
                    className="w-24 bg-transparent text-right font-extrabold text-citron text-base sm:text-lg focus:outline-none"
                  />
                  <span className="text-sm font-bold text-citron">€ HT</span>
                </div>
              </div>

              <input
                type="range"
                style={{ touchAction: 'pan-y' }}
                min={10000}
                max={80000}
                step={1000}
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-2 bg-encreDeep rounded-lg appearance-none cursor-pointer accent-citron"
                aria-label="Curseur prix moyen d'un bassin HT"
              />

              <div className="flex justify-between text-sm text-texteSombreSec mt-2">
                <span>10 000 €</span>
                <span>80 000 €</span>
              </div>
            </div>

            {/* Input 2: Marge restante sur chantier supplémentaire */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="marginPercent" className="text-sm sm:text-base font-bold text-texteSombre">
                  Ce qu'il vous reste sur un chantier en plus, en %
                </label>
                <div className="flex items-center gap-1 bg-encreDeep px-3 py-1.5 rounded-xl border border-bordureSombre">
                  <input
                    type="number"
                    id="marginPercent"
                    min={10}
                    max={40}
                    step={1}
                    value={marginPercent}
                    onChange={(e) => setMarginPercent(Number(e.target.value) || 0)}
                    onBlur={(e) => setMarginPercent(Math.max(10, Math.min(40, Number(e.target.value) || 0)))}
                    className="w-16 bg-transparent text-right font-extrabold text-citron text-base sm:text-lg focus:outline-none"
                  />
                  <span className="text-sm font-bold text-citron">%</span>
                </div>
              </div>

              <p className="text-sm text-texteSombreSec mb-3">
                Vos charges fixes sont déjà payées : sur un chantier supplémentaire, il vous reste la marge du chantier.
              </p>

              <input
                type="range"
                style={{ touchAction: 'pan-y' }}
                min={10}
                max={40}
                step={1}
                value={marginPercent}
                onChange={(e) => setMarginPercent(Number(e.target.value))}
                className="w-full h-2 bg-encreDeep rounded-lg appearance-none cursor-pointer accent-citron"
                aria-label="Curseur pourcentage de marge sur chantier supplémentaire"
              />

              <div className="flex justify-between text-sm text-texteSombreSec mt-2">
                <span>10 %</span>
                <span>40 %</span>
              </div>
            </div>

            {/* Input 3: Budget total par mois */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="monthlyBudget" className="text-sm sm:text-base font-bold text-texteSombre">
                  Budget mensuel estimé : publicité Meta + rendez-vous facturés
                </label>
                <div className="flex items-center gap-1 bg-encreDeep px-3 py-1.5 rounded-xl border border-bordureSombre">
                  <input
                    type="number"
                    id="monthlyBudget"
                    min={300}
                    max={5000}
                    step={100}
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value) || 0)}
                    onBlur={(e) => setMonthlyBudget(Math.max(300, Math.min(5000, Number(e.target.value) || 0)))}
                    className="w-20 bg-transparent text-right font-extrabold text-citron text-base sm:text-lg focus:outline-none"
                  />
                  <span className="text-sm font-bold text-citron">€ / mois</span>
                </div>
              </div>

              <input
                type="range"
                style={{ touchAction: 'pan-y' }}
                min={300}
                max={5000}
                step={100}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2 bg-encreDeep rounded-lg appearance-none cursor-pointer accent-citron"
                aria-label="Curseur budget total mensuel"
              />

              <div className="flex justify-between text-sm text-texteSombreSec mt-2">
                <span>300 €</span>
                <span>5 000 €</span>
              </div>
            </div>

          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Big Citron Card */}
            <div className="bg-citron text-encre rounded-[24px] p-8 sm:p-10 shadow-xl border border-citron">
              <span className="text-xs font-extrabold uppercase tracking-widest text-encre/70 mb-4 inline-block">
                Point d'équilibre annuel
              </span>

              <p className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight mb-6">
                Il faut environ <span className="underline decoration-encre/40 decoration-4">{poolsNeeded} bassin(s)</span> sur l'année pour couvrir 12 mois de dépenses.
              </p>

              <div className="pt-6 border-t border-encre/20">
                <p className="text-base sm:text-lg font-bold leading-normal">
                  Chaque bassin en plus vous laisse environ <span className="text-xl sm:text-2xl font-black">{formatEuro(gainPerPool)} €</span>.
                </p>
                <p className="text-sm font-medium text-encre/75 mt-1">
                  (Gain estimé par bassin supplémentaire au-delà du seuil de couverture)
                </p>
              </div>
            </div>

            {/* Required Disclaimer */}
            <p className="text-sm text-texteSombreSec leading-relaxed">
              Simulation indicative, basée uniquement sur vos chiffres. Les résultats dépendent de votre secteur, de la saison et de votre façon de rappeler les demandes.
            </p>

            {/* Action CTA Button */}
            <a
              href="#diagnostic"
              data-cta="simulator_verifier"
              className="h-14 px-8 rounded-full bg-blanc text-encre text-base font-bold flex items-center justify-center tracking-tight hover:bg-citron transition-all shadow-md active:scale-98"
            >
              Vérifier le potentiel de mon secteur
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RoiSimulator;
