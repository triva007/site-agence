
import React from 'react';
import { CheckCircle2, Gift, ShieldCheck, Sparkles, Star, Trophy, Clock } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#020617] relative overflow-hidden scroll-mt-32">
      
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-sm font-bold uppercase tracking-wider mb-6">
            <Trophy size={14} /> Opportunité Unique
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Devenez notre <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-400">Ambassadeur Local.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Nous cherchons un partenaire de référence dans votre secteur. <br/>
            Nous baissons notre marge, vous nous offrez votre réussite en témoignage.
          </p>
        </div>

        {/* SINGLE CARD LAYOUT - AMBASSADEUR */}
        <div className="max-w-lg mx-auto reveal stagger-1">
            <div className="relative flex flex-col rounded-[2.5rem] overflow-hidden bg-[#0B1121] border-2 border-brand-yellow shadow-[0_0_60px_-15px_rgba(255,214,0,0.15)] transform hover:scale-[1.02] transition-transform duration-500">
                
                {/* AMBASSADOR RIBBON */}
                <div className="bg-gradient-to-r from-brand-yellow to-orange-500 py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-slate-900 text-sm font-black uppercase tracking-widest animate-pulse">
                    <Star size={16} fill="currentColor" /> OFFRE PARTENAIRE / AMBASSADEUR
                    </div>
                </div>

                <div className="p-8 sm:p-12 flex-grow flex flex-col text-white">
                  
                  {/* Title & Price Replacement */}
                  <div className="text-center mb-10">
                    <h3 className="text-2xl font-black uppercase tracking-wide mb-2 text-brand-blue">
                      PACK INTÉGRAL : PROPRIÉTAIRE
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mb-8">Site Web + Google + Propriété Totale</p>
                    
                    {/* Softened Discount Badge Area */}
                    <div className="flex flex-col items-center justify-center py-4 bg-slate-800/30 rounded-2xl border border-white/5 relative overflow-hidden group">
                       <div className="absolute inset-0 bg-brand-yellow/5 group-hover:bg-brand-yellow/10 transition-colors"></div>
                       
                       <div className="relative z-10 text-center">
                           <span className="block text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-yellow to-orange-400 drop-shadow-sm">
                             - 50%
                           </span>
                           <span className="text-slate-300 font-bold text-sm uppercase tracking-widest mt-1 block">
                             Sur le tarif public
                           </span>
                       </div>

                       {/* Limited Time Badge */}
                       <div className="mt-4 inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                          <Clock size={12} className="text-red-400" />
                          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">
                             Offre limitée dans le temps
                          </span>
                       </div>
                    </div>
                    
                    <div className="inline-block text-slate-400 text-xs font-medium mt-6">
                       ✅ Paiement unique • 0€ de frais cachés
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="rounded-3xl p-8 mb-8 bg-[#1E293B]/30 border border-slate-700/50">
                    <ul className="space-y-5">
                        {[
                            "🚀 Site Web Pro livré en 7 jours",
                            "✅ 100% Propriétaire (Site à vous)",
                            "📍 Référencement Google Local (SEO)",
                            "📱 Design Moderne & Mobile First",
                            "🛡️ Certificat de Sécurité SSL",
                            "✍️ Rédaction Commerciale Incluse"
                        ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/20 text-brand-blue">
                            <CheckCircle2 size={16} strokeWidth={3} />
                          </div>
                          <span className="text-base font-bold text-slate-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* BONUS SECTION (AMBASSADEUR) */}
                  <div className="mt-auto mb-10 rounded-2xl p-[1px] bg-gradient-to-r from-brand-yellow/50 to-orange-500/50">
                      <div className="rounded-2xl p-6 bg-[#0F172A] relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl"></div>

                        <div className="flex items-center gap-2 font-black uppercase text-xs tracking-wider mb-6 text-brand-yellow relative z-10">
                          <Gift size={16} /> Bonus Ambassadeur (Inclus)
                        </div>
                        
                        <ul className="space-y-4 relative z-10">
                            <li className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                                <div>
                                    <span className="font-bold text-white text-sm block">Optimisation Fiche Google (GMB)</span>
                                    <span className="text-[10px] text-slate-400">Pour apparaître sur la carte</span>
                                </div>
                                <div className="text-[10px] font-black bg-brand-yellow text-brand-dark px-2 py-1 rounded uppercase">Offert</div>
                            </li>
                            <li className="flex justify-between items-center">
                                <div>
                                    <span className="font-bold text-white text-sm block">Pack Juridique</span>
                                    <span className="text-[10px] text-slate-400">Mentions légales & RGPD conformes</span>
                                </div>
                                <div className="text-[10px] font-black bg-brand-yellow text-brand-dark px-2 py-1 rounded uppercase">Offert</div>
                            </li>
                        </ul>
                      </div>
                    </div>

                  {/* CTA Button */}
                  <Button 
                    variant='primary'
                    className="w-full justify-center py-6 text-xl font-bold rounded-2xl shadow-[0_0_30px_-5px_rgba(255,214,0,0.4)] transition-transform hover:scale-[1.02] active:scale-95 bg-brand-yellow text-slate-900 border-none hover:bg-yellow-400"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Profiter de l'offre Ambassadeur
                  </Button>
                  
                  <p className="text-center text-[10px] mt-4 font-medium uppercase tracking-wide text-slate-500">
                    Offre limitée à 1 seul partenaire par secteur géographique
                  </p>

                </div>
            </div>
        </div>
        
        {/* Guarantee Badge */}
        <div className="mt-16 flex justify-center reveal">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
            <ShieldCheck className="text-brand-yellow" />
            Garantie "Satisfait ou Remboursé" incluse.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
