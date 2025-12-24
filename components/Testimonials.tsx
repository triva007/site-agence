
import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Globe, X, Maximize2, Monitor, ShieldCheck, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState<string | null>(null);

  // Lock scroll when preview is open
  useEffect(() => {
    if (selectedSite) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedSite]);

  return (
    <section id="results" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 object-contain" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avis Clients Vérifiés</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-[900] text-slate-900 mb-6 tracking-tight leading-tight">
            Ils nous font confiance <br/>
            <span className="text-brand-blue">pour leur visibilité locale.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Découvrez les résultats concrets et le retour d'expérience de nos partenaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.id} className={`reveal stagger-${index + 1} flex flex-col`}>
              
              {/* GOOGLE STYLE CARD - CLEAN NO AVATAR */}
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 flex-grow flex flex-col hover:shadow-xl transition-all duration-500 group">
                
                {/* Header Info */}
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h4 className="font-black text-slate-900 text-lg leading-tight mb-0.5">{testimonial.name}</h4>
                      <p className="text-[10px] text-brand-blue font-black uppercase tracking-wider">{testimonial.role}</p>
                   </div>
                   <div className="text-[10px] text-slate-300 font-bold uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md">
                      {testimonial.date}
                   </div>
                </div>

                {/* Stars */}
                <div className="flex text-[#fbbc04] gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                {/* Review Text */}
                <div className="relative mb-8 flex-grow">
                  <div className="absolute -left-4 -top-2 text-slate-100 scale-150 select-none opacity-50">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.899 14.918 16 16.017 16H19.017V14H15.017C13.356 14 12.017 12.661 12.017 11V7C12.017 5.339 13.356 4 15.017 4H19.017C20.678 4 22.017 5.339 22.017 7V11C22.017 12.661 20.678 14 19.017 14V16C19.017 17.101 18.116 18 17.017 18H14.017V21ZM2.017 21L2.017 18C2.017 16.899 2.918 16 4.017 16H7.017V14H3.017C1.356 14 0.017 12.661 0.017 11V7C0.017 5.339 1.356 4 3.017 4H7.017C8.678 4 10.017 5.339 10.017 7V11C10.017 12.661 8.678 14 7.017 14V16C7.017 17.101 6.116 18 5.017 18H2.017V21Z"/></svg>
                  </div>
                  <p className="relative z-10 text-slate-600 text-[15px] leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>

                {/* SITE PREVIEW TRIGGER BUTTON */}
                {testimonial.websiteUrl && (
                  <div className="mt-auto">
                    <button 
                      onClick={() => setSelectedSite(testimonial.websiteUrl!)}
                      className="w-full rounded-2xl bg-[#1a1a1a] border border-slate-800 p-5 transition-all hover:bg-brand-blue hover:border-brand-blue group/btn overflow-hidden relative shadow-lg shadow-slate-200"
                    >
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                               <Monitor size={20} />
                            </div>
                            <div className="text-left">
                               <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-0.5">Aperçu Réalisation</p>
                               <p className="text-xs font-black text-white truncate max-w-[140px]">
                                 {testimonial.company}
                               </p>
                            </div>
                         </div>
                         <div className="bg-white/10 p-2 rounded-lg text-white group-hover/btn:bg-white group-hover/btn:text-brand-blue transition-all">
                            <Maximize2 size={16} />
                         </div>
                      </div>
                    </button>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 text-center reveal">
           <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                 <span className="text-2xl font-black text-slate-900">4.9/5</span>
                 <div className="flex text-[#fbbc04]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
                 </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-100"></div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] flex items-center gap-2">
                 <ShieldCheck size={16} className="text-brand-blue" /> Accompagnement Premium par Aaron
              </p>
           </div>
        </div>

      </div>

      {/* BROWSER MOCKUP MODAL */}
      {selectedSite && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md cursor-pointer" 
            onClick={() => setSelectedSite(null)}
          ></div>
          
          {/* Mockup Container */}
          <div className="relative w-full max-w-6xl h-[85vh] bg-white rounded-[1.5rem] overflow-hidden shadow-2xl flex flex-col animate-scale-up border border-white/20">
            
            {/* Browser Header (Mac Style) */}
            <div className="h-12 bg-[#1a1a1a] flex items-center px-4 shrink-0 relative z-10">
               {/* Traffic Lights */}
               <div className="flex gap-2 mr-6">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
               </div>
               
               {/* URL Bar */}
               <div className="flex-1 max-w-xl mx-auto h-7 bg-white/10 rounded-md flex items-center px-3 text-[10px] text-white/50 font-medium tracking-tight">
                  <Globe size={10} className="mr-2" /> {selectedSite}
               </div>

               {/* Close Button */}
               <button 
                onClick={() => setSelectedSite(null)}
                className="ml-auto w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-colors"
               >
                  <X size={18} />
               </button>
            </div>

            {/* IFRAME Content */}
            <div className="flex-1 w-full bg-slate-50 relative overflow-hidden">
               {/* Loading indicator */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-100">
                  <div className="flex flex-col items-center gap-4">
                     <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Chargement de la réalisation...</p>
                  </div>
               </div>
               <iframe 
                src={selectedSite} 
                className="w-full h-full border-none relative z-10"
                title="Aperçu Réalisation"
               />
            </div>
            
            {/* Footer Control */}
            <div className="bg-white border-t border-slate-100 p-4 flex justify-between items-center shrink-0">
               <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Site Live & Sécurisé</span>
               </div>
               <button 
                  onClick={() => window.open(selectedSite, '_blank')}
                  className="text-[10px] font-black text-brand-blue uppercase flex items-center gap-1.5 hover:underline group"
               >
                  Ouvrir le site live <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}} />
    </section>
  );
};

export default Testimonials;
