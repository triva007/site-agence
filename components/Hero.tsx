
import React, { useState } from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [showBadge, setShowBadge] = useState(true);

  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50 to-white pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left reveal">
            
            {showBadge && (
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full pl-4 pr-4 py-1.5 mb-8 animate-fade-in-up mx-auto lg:mx-0 group transition-all">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Spécialement pour les entreprises locales</span>
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Votre entreprise mérite d'être <br className="hidden lg:block"/>
              <span className="text-brand-blue underline decoration-brand-yellow decoration-4 underline-offset-4">N°1 sur Google.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Arrêtez de laisser vos concurrents prendre vos clients. Triva-Media transforme votre présence en ligne en une machine à générer des appels et des visites.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto bg-brand-blue text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/30 hover:-translate-y-1 active:scale-95">
                Je veux être visible <ArrowRight size={20} />
              </button>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                 <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt=""/>
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt=""/>
                    <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt=""/>
                 </div>
                 <p>Rejoignez les pros qui réussissent</p>
              </div>
            </div>
          </div>

          {/* Visual Content - Focused on Local Results */}
          <div className="lg:w-1/2 relative reveal stagger-2 mt-8 lg:mt-0 w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="relative">
              
              {/* Phone Mockup showing Google Maps */}
              <div className="relative z-20 mx-auto w-[280px] sm:w-[320px] bg-slate-900 rounded-[3rem] p-4 border-[8px] border-slate-900 shadow-2xl">
                 <div className="bg-white rounded-[2rem] overflow-hidden h-[500px] relative">
                    {/* Fake Google Interface */}
                    <div className="bg-white p-4 shadow-sm z-10 relative">
                       <div className="h-8 bg-slate-100 rounded-full w-full flex items-center px-3 text-slate-400 text-xs mb-4">
                          🔍 Coiffeur à proximité...
                       </div>
                       <div className="flex gap-2 mb-2">
                          <div className="px-3 py-1 bg-brand-blue text-white rounded-full text-xs font-bold">Meilleurs résultats</div>
                          <div className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs">Ouvert</div>
                       </div>
                    </div>
                    
                    {/* Map Placeholder */}
                    <div className="h-32 bg-blue-50 w-full relative">
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-8 h-8 bg-brand-blue rounded-full border-4 border-white shadow-lg animate-bounce"></div>
                       </div>
                    </div>

                    {/* Result Card */}
                    <div className="p-4">
                       <div className="bg-white border-2 border-brand-blue/20 rounded-xl p-4 shadow-lg">
                          <h3 className="font-bold text-slate-900 text-lg">Votre Entreprise</h3>
                          <div className="flex items-center gap-1 text-brand-yellow mb-2">
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <span className="text-slate-400 text-xs ml-1">(128 avis)</span>
                          </div>
                          <div className="flex gap-2 text-xs text-slate-500 mb-3">
                             <span>Ouvert</span> • <span>1.2 km</span>
                          </div>
                          <div className="flex gap-2">
                             <div className="flex-1 bg-brand-blue text-white py-2 rounded-lg text-center font-bold text-sm">Appeler</div>
                             <div className="flex-1 bg-slate-100 text-slate-900 py-2 rounded-lg text-center font-bold text-sm">Itinéraire</div>
                          </div>
                       </div>
                       
                       {/* Competitor (Greyed out) */}
                       <div className="mt-3 opacity-50 grayscale px-2">
                          <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                          <div className="h-3 w-20 bg-slate-200 rounded"></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Floating Success Notification */}
              <div className="absolute top-20 -right-4 sm:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-green-100 z-30 animate-float-slow hidden sm:block">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2.5 rounded-full text-green-600"><Phone size={20} /></div>
                   <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Nouvel appel entrant</div>
                      <div className="text-sm font-bold text-slate-900">Client potentiel</div>
                   </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
