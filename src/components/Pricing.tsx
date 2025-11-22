
import React from 'react';
import { CheckCircle2, Gift, TrendingUp, ShieldCheck, Sparkles, AlertTriangle } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  // DONNÉES CODÉES EN DUR (HARDCODED) POUR GARANTIR L'AFFICHAGE
  const PLANS = [
    {
      title: "PACK INTÉGRAL : DOMINATION LOCALE",
      price: "990 €",
      originalPrice: "2'200 €",
      priceNote: "LE PRIX AUGMENTE TRÈS BIENTÔT",
      description: "Tout le système (Site + Google + Réputation). Attention, vu la demande, ce tarif de lancement va bientôt augmenter.",
      features: [
        "🚀 Livré en 7 jours (Clé en main)",
        "Site Web Pro (Création ou Refonte complète)",
        "Positionnement Google (Pour être vu)",
        "🛡️ Filtre Anti-Mauvais Avis (Protection)",
        "Optimisation Fiche Google Maps",
        "Rédaction Commerciale (On vend votre expertise)",
        "✅ 100% À VOUS (Propriétaire à vie)"
      ],
      // NOUVEAUX BONUS EXACTS
      bonuses: [
        {
           title: "Formation : Maîtriser Google",
           desc: "Tuto vidéo simple pour gérer votre fiche et poster vos photos comme un pro.",
           value: "290 €"
        },
        {
           title: "Hébergement & Maintenance (3 mois offerts)",
           desc: "Serveur, mises à jour et technique offerts pour démarrer sereinement.",
           value: "180 €"
        },
        {
           title: "Pack 'Réponses aux Avis'",
           desc: "Des modèles de textes professionnels à copier-coller pour vos clients.",
           value: "150 €"
        }
      ],
      isDomination: true,
      buttonText: "Bloquer ce tarif maintenant"
    },
    {
      title: "PACK SÉRÉNITÉ (ABONNEMENT)",
      price: "149 € /mois",
      originalPrice: "250 € /mois",
      priceNote: "Tarif fixe garanti", // Changé de "Bloqué à vie"
      description: "Préservez votre trésorerie. Service tout inclus sans gestion.",
      features: [
        "Création du site Internet Pro",
        "Hébergement & Nom de domaine INCLUS",
        "Maintenance technique INCLUSE",
        "Modifications illimitées",
        "Zéro apport de départ",
        "Support Prioritaire 7j/7"
      ],
      bonuses: [
        { title: "Frais de mise en service", value: "500 €", desc: "(Payables une seule fois)" }
      ],
      isDomination: false,
      buttonText: "Choisir la mensualisation"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#020617] relative overflow-hidden scroll-mt-32">
      
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> Offre limitée
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Choisissez votre <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">liberté.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Pas de devis à tiroirs. Pas de coûts cachés. Juste deux options claires pour propulser votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {PLANS.map((plan, index) => {
            const isDomination = plan.isDomination;
            
            return (
              <div 
                key={index} 
                className={`reveal stagger-${index + 1} relative flex flex-col rounded-[2rem] transition-all duration-300 overflow-hidden
                  ${isDomination 
                    ? 'bg-[#0B1121] border-2 border-brand-blue shadow-[0_0_50px_-12px_rgba(0,85,255,0.3)] z-20 transform lg:scale-105' 
                    : 'bg-white border border-slate-200 shadow-xl opacity-95 lg:scale-95 z-10'
                  }
                `}
              >
                
                {/* URGENCE HEADER FOR DOMINATION */}
                {isDomination && (
                  <div className="bg-gradient-to-r from-red-900/80 to-red-600/80 backdrop-blur-sm py-3 px-4 text-center border-b border-red-500/30">
                     <div className="flex items-center justify-center gap-2 text-white text-sm font-black uppercase tracking-widest animate-pulse">
                        <TrendingUp size={18} /> {plan.priceNote}
                     </div>
                  </div>
                )}

                <div className={`p-8 sm:p-10 flex-grow flex flex-col ${isDomination ? 'text-white' : 'text-slate-900'}`}>
                  
                  {/* Title & Price */}
                  <div className="text-center mb-8">
                    <h3 className={`text-xl font-black uppercase tracking-wide mb-4 ${isDomination ? 'text-brand-blue' : 'text-slate-800'}`}>
                      {plan.title}
                    </h3>
                    
                    <div className="flex flex-col items-center justify-center">
                      <span className={`text-xl line-through font-bold decoration-2 mb-1 ${isDomination ? 'text-slate-500 decoration-red-500' : 'text-slate-400 decoration-red-500'}`}>
                          {plan.originalPrice}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-6xl sm:text-7xl font-black tracking-tighter ${isDomination ? 'text-white' : 'text-slate-900'}`}>
                          {plan.price.split(' ')[0]}
                        </span>
                        <span className={`text-2xl font-bold ${isDomination ? 'text-slate-400' : 'text-slate-500'}`}>
                          {plan.price.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                    </div>
                    
                    {isDomination && (
                      <div className="inline-block bg-slate-800 text-slate-300 text-xs font-bold px-4 py-1.5 rounded-full mt-4 border border-slate-700">
                        Paiement unique à vie
                      </div>
                    )}
                    {!isDomination && (
                       <div className="inline-flex items-center gap-1 mt-4 text-brand-blue font-bold text-sm bg-blue-50 px-3 py-1 rounded-lg">
                          <ShieldCheck size={14} /> {plan.priceNote}
                       </div>
                    )}

                    <p className={`mt-6 font-medium leading-relaxed px-4 ${isDomination ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className={`rounded-2xl p-6 mb-8 ${isDomination ? 'bg-[#1E293B]/50 border border-slate-700/50' : 'bg-slate-50 border border-slate-100'}`}>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 
                            ${isDomination ? 'bg-brand-blue/20 text-brand-blue' : 'bg-green-100 text-green-600'}`}>
                            <CheckCircle2 size={16} strokeWidth={3} />
                          </div>
                          <span className={`text-sm sm:text-base font-bold ${isDomination ? 'text-slate-200' : 'text-slate-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* BONUS SECTION (Yellow Box for Domination) */}
                  {plan.bonuses && plan.bonuses.length > 0 && (
                    <div className={`mt-auto mb-8 rounded-2xl p-1 ${isDomination ? 'bg-gradient-to-b from-brand-yellow to-yellow-600' : 'bg-slate-100'}`}>
                      <div className={`rounded-xl p-5 h-full ${isDomination ? 'bg-[#0B1121]' : 'bg-white'}`}>
                        <div className={`flex items-center gap-2 font-black uppercase text-xs tracking-wider mb-4 ${isDomination ? 'text-brand-yellow' : 'text-slate-500'}`}>
                          <Gift size={16} /> {isDomination ? "Bonus Offerts (Durée Limitée)" : "Frais de démarrage"}
                        </div>
                        
                        <ul className="space-y-4">
                          {plan.bonuses.map((bonus, i) => (
                            <li key={i} className={`relative pl-0 ${isDomination ? 'border-b border-slate-800 last:border-0 pb-4 last:pb-0' : ''}`}>
                              
                              {isDomination ? (
                                <>
                                  <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold text-white text-sm">{bonus.title}</span>
                                    <div className="text-right">
                                        <div className="text-[10px] text-slate-500 line-through decoration-red-500">Valeur {bonus.value}</div>
                                        <div className="text-[10px] font-black text-brand-yellow uppercase">OFFERT</div>
                                    </div>
                                  </div>
                                  <p className="text-xs text-slate-400 leading-snug pr-10">
                                    {bonus.desc}
                                  </p>
                                </>
                              ) : (
                                <div className="flex justify-between items-center text-sm">
                                  <span className="font-bold text-slate-700">{bonus.title}</span>
                                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-bold">{bonus.value}</span>
                                </div>
                              )}

                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button 
                    variant={isDomination ? 'primary' : 'outline'}
                    className={`w-full justify-center py-5 text-lg font-bold rounded-xl shadow-xl transition-transform active:scale-95 ${
                      isDomination 
                        ? 'bg-brand-yellow text-slate-900 hover:bg-yellow-400 border-none shadow-brand-yellow/20' 
                        : ''
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.buttonText} {isDomination && "⚡"}
                  </Button>
                  
                  <p className={`text-center text-[10px] mt-4 font-medium uppercase tracking-wide ${isDomination ? 'text-slate-500' : 'text-slate-400'}`}>
                    {isDomination ? '⚡ Places limitées par secteur' : 'Engagement 5 mois seulement'}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
        
        {/* Guarantee Badge */}
        <div className="mt-16 flex justify-center reveal">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
            <ShieldCheck className="text-brand-yellow" />
            Garantie "Satisfait ou Remboursé" incluse dans tous les packs.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
