import React, { useState } from 'react';
import { Calculator, Euro, TrendingUp, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { TRADE_PRESETS } from '../constants';

const RoiCalculator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(TRADE_PRESETS[0].id);
  const currentPreset = TRADE_PRESETS.find(p => p.id === selectedPresetId) || TRADE_PRESETS[0];

  const [ticket, setTicket] = useState<number>(currentPreset.defaultTicket);
  const [margin, setMargin] = useState<number>(currentPreset.typicalMargin);
  const [signedPerMonth, setSignedPerMonth] = useState<number>(1);
  const [monthlyAdBudget, setMonthlyAdBudget] = useState<number>(600);

  const handlePresetChange = (presetId: string) => {
    setSelectedPresetId(presetId);
    const preset = TRADE_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setTicket(preset.defaultTicket);
      setMargin(preset.typicalMargin);
    }
  };

  // Calculations
  const monthlyRevenue = signedPerMonth * ticket;
  const annualRevenue = monthlyRevenue * 12;
  const monthlyGrossMargin = monthlyRevenue * (margin / 100);
  const annualGrossMargin = monthlyGrossMargin * 12;
  const annualAdCost = monthlyAdBudget * 12;
  const netAnnualGain = annualGrossMargin - annualAdCost;
  const roiMultiplier = Math.round((annualGrossMargin / (annualAdCost || 1)) * 10) / 10;

  return (
    <section id="simulator" className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>Simulateur de Rentabilité BTP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            Combien peut vous rapporter <br />
            un système publicitaire dédié ?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Sur des prestations à fort panier moyen, il suffit souvent d'un seul chantier signé pour couvrir plusieurs mois de campagnes publicitaires.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
            
            {/* Step 1: Trade Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                1. Choisissez votre corps d'état
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {TRADE_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePresetChange(preset.id)}
                    className={`p-3 rounded-2xl text-xs font-bold border transition-all text-left flex flex-col justify-between ${
                      selectedPresetId === preset.id
                        ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{preset.name.split('(')[0].trim()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Average Ticket Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Panier moyen par chantier
                </label>
                <span className="text-base font-black text-brand-blue font-mono">
                  {ticket.toLocaleString('fr-FR')} €
                </span>
              </div>
              <input
                type="range"
                min={8000}
                max={150000}
                step={2000}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>8 000 €</span>
                <span>50 000 €</span>
                <span>100 000 €</span>
                <span>150 000 €</span>
              </div>
            </div>

            {/* Step 3: Estimated Margin */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Votre marge brute moyenne estimée
                </label>
                <span className="text-base font-black text-slate-800 font-mono">
                  {margin} %
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={50}
                step={1}
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>15%</span>
                <span>30% (standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Step 4: Signed Projects Goal */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4. Objectif de chantiers signés supplémentaires / mois
                </label>
                <span className="text-base font-black text-emerald-600 font-mono">
                  +{signedPerMonth} chantier{signedPerMonth > 1 ? 's' : ''} / mois
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSignedPerMonth(num)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      signedPerMonth === num
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    +{num} / mois
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Monthly Ad Budget Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  5. Budget publicitaire Meta estimé / mois
                </label>
                <span className="text-sm font-bold text-slate-700 font-mono">
                  {monthlyAdBudget} € / mois (~{Math.round(monthlyAdBudget / 30)} €/jour)
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={2000}
                step={50}
                value={monthlyAdBudget}
                onChange={(e) => setMonthlyAdBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/15 px-3 py-1 rounded-full border border-brand-blue/30">
                  Résultats Prévisionnels
                </span>
                <span className="text-xs text-slate-400 font-medium">Sur base annuelle</span>
              </div>

              {/* Big Metric 1: Additional Revenue */}
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Chiffre d'Affaires Additionnel Annuel
                </span>
                <p className="text-3xl sm:text-4xl font-display font-black text-white font-mono">
                  +{annualRevenue.toLocaleString('fr-FR')} €
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Soit +{(monthlyRevenue).toLocaleString('fr-FR')} € de volume par mois
                </p>
              </div>

              {/* Big Metric 2: Additional Gross Margin */}
              <div className="p-5 rounded-2xl bg-brand-blue/10 border border-brand-blue/30">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                  Marge Brute Additionnelle Générée
                </span>
                <p className="text-3xl sm:text-4xl font-display font-black text-emerald-400 font-mono">
                  +{annualGrossMargin.toLocaleString('fr-FR')} €
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Après déduction des coûts matière et sous-traitance ({margin}%)
                </p>
              </div>

              {/* ROI Factor */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs">
                <span className="text-slate-300">Rapport Marge brute / Budget publicitaire :</span>
                <span className="font-black text-white text-sm font-mono bg-slate-700 px-2.5 py-1 rounded-lg">
                  x{roiMultiplier}
                </span>
              </div>

              {/* Concrete Takeaway */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Sparkles size={15} className="text-brand-blue" />
                  <span>En clair pour votre trésorerie :</span>
                </div>
                <p className="leading-relaxed">
                  Avec un panier moyen à <strong>{ticket.toLocaleString('fr-FR')} €</strong>, signer seulement <strong>{signedPerMonth} chantier{signedPerMonth > 1 ? 's' : ''}</strong> par mois génère <strong>{netAnnualGain.toLocaleString('fr-FR')} €</strong> de marge nette supplémentaire après avoir payé 100% du budget publicitaire régie.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-800">
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blueHover text-white rounded-full font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
              >
                <span>Analyser la faisabilité sur votre zone</span>
                <ArrowRight size={15} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RoiCalculator;
