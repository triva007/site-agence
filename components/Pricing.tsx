
import React from 'react';
import { Zap, MapPin, ShieldCheck, Gift, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge Overlay */}
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-500 text-[10px] font-bold uppercase tracking-widest shadow-sm">
            <Star size={14} className="text-brand-blue" /> Programme Ambassadeur 2026
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl sm:text-6xl font-[900] text-slate-900 mb-6 tracking-tight leading-tight">
            Devenez le partenaire exclusif <br/>
            <span className="text-brand-blue">de votre secteur.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Nous ne travaillons qu'avec <strong>une seule entreprise locale par métier et par ville.</strong><br/>
            Une opportunité rare de blinder votre visibilité avec un tarif préférentiel.
          </p>
        </div>

        {/* IMAGE-STYLE CARD */}
        <div className="max-w-xl mx-auto reveal stagger-1">
          <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
            
            {/* Top Accent Bar */}
            <div className="h-2 bg-brand-blue w-full"></div>

            <div className="p-8 sm:p-12 text-center">
              
              {/* Offer Badge */}
              <div className="inline-block bg-blue-50 text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-4">
                Offre limitée : -50% de réduction
              </div>

              <h3 className="text-3xl font-[900] text-slate-900 mb-8">
                Pack Croissance Intégral
              </h3>

              {/* Description Box */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-10 text-slate-600 text-sm sm:text-base leading-relaxed">
                Pour lancer notre agence dans votre département, nous recherchons une entreprise locale sérieuse pour devenir notre vitrine. 
                <strong className="text-slate-900"> En échange, nous divisons nos honoraires par deux.</strong>
              </div>

              {/* Feature List */}
              <div className="space-y-8 text-left max-w-sm mx-auto mb-12">
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base">Votre Site Web Professionnel</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Design moderne, optimisé pour les appels mobiles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base">Référencement Local Google</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Optimisation de votre fiche Maps pour être en Top 3.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base">Bouclier Anti-Mauvais Avis</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Filtrage intelligent pour protéger votre note 5/5.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <Gift size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base">Propriété à 100%</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Pas d'abonnement, pas de location. Le site est à vous.</p>
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-[#FFD600] hover:bg-yellow-400 text-brand-dark font-black py-5 px-8 rounded-2xl text-lg transition-all shadow-lg shadow-brand-yellow/20 active:scale-[0.98]"
                >
                  Vérifier la disponibilité locale
                </button>
                
                <div className="flex items-center justify-center gap-2 text-red-600 text-xs font-bold">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                  1 seule place restante dans votre secteur
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
