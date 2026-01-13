
import React, { useState } from 'react';
import { ArrowRight, Phone, Star, MapPin, Search, Globe, CheckCircle2, Navigation } from 'lucide-react';

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
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full pl-4 pr-4 py-1.5 mb-8 animate-fade-in-up mx-auto lg:mx-0 group transition-all">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue">SPÉCIALEMENT POUR LES ENTREPRISES LOCALES</span>
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
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Client satisfait 1"/>
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Client satisfait 2"/>
                    <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Client satisfait 3"/>
                 </div>
                 <p>Rejoignez les pros qui réussissent</p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 relative reveal stagger-2 mt-8 lg:mt-0 w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="relative">
              
              {/* Phone Frame */}
              <div className="relative z-20 mx-auto w-[280px] sm:w-[300px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-slate-900/50">
                 <div className="bg-white rounded-[2rem] overflow-hidden h-[480px] relative flex flex-col border-[3px] border-slate-900">
                    
                    {/* Search Bar */}
                    <div className="bg-white px-4 pt-5 pb-2 shadow-sm z-20 relative">
                       <div className="h-9 bg-slate-50 border border-slate-200 shadow-inner rounded-full w-full flex items-center px-4 text-slate-700 font-medium text-xs mb-2 gap-2">
                          <Search size={14} className="text-brand-blue" />
                          <span className="text-slate-900">Meilleur [Votre Métier]...</span>
                       </div>
                       <div className="flex gap-1.5 overflow-x-hidden pb-1">
                          <div className="px-2.5 py-1 bg-brand-blue text-white rounded-full text-[8px] font-bold">Meilleurs résultats</div>
                       </div>
                    </div>
                    
                    {/* Map View */}
                    <div className="h-28 w-full relative bg-slate-100 flex-shrink-0">
                       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                          <div className="relative">
                             <div className="w-8 h-8 bg-brand-blue rounded-full border-2 border-white shadow-lg flex items-center justify-center z-10 relative">
                                <MapPin size={14} className="text-white fill-white" />
                             </div>
                             <div className="absolute top-0 left-0 w-full h-full bg-brand-blue rounded-full animate-ping opacity-30"></div>
                          </div>
                       </div>
                    </div>

                    {/* Results List */}
                    <div className="flex-1 bg-slate-50 p-3 relative -mt-4 rounded-t-2xl z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] flex flex-col">
                       <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto mb-3 flex-shrink-0"></div>
                       <div className="bg-white rounded-xl p-3 shadow-xl border-l-4 border-brand-blue mb-3 transform scale-[1.02] relative z-20">
                          <div className="flex justify-between items-start mb-1 pl-1">
                             <div>
                                <h3 className="font-black text-slate-900 text-sm uppercase">Votre Entreprise</h3>
                                <div className="flex items-center gap-1 mt-0.5">
                                   <div className="flex text-brand-yellow">
                                      <Star size={8} fill="currentColor" />
                                      <Star size={8} fill="currentColor" />
                                      <Star size={8} fill="currentColor" />
                                      <Star size={8} fill="currentColor" />
                                      <Star size={8} fill="currentColor" />
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                             <div className="flex-1 bg-brand-blue text-white py-1.5 rounded-md flex items-center justify-center gap-1 text-xs font-bold">
                                <Phone size={12} /> Appeler
                             </div>
                          </div>
                       </div>
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
