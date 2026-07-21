
import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* Subtle warm ambient background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cream border border-brand-accent/30 text-xs font-bold uppercase tracking-wider text-brand-dark mb-6 mx-auto lg:mx-0 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span>Publicité Facebook & Instagram · Spécialisé mariage</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-brand-dark leading-[1.08] mb-6 tracking-tight">
              Des demandes de couples sérieux, pas des curieux.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Un système complet pour les photographes et vidéastes de mariage : la publicité, le <strong className="font-semibold text-brand-dark">Filtre Couple</strong> qui écarte les curieux, et le cadre de rappel pour transformer les demandes en rendez-vous. Les couples viennent à vous, même pendant que vous shootez.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <a 
                href="https://wa.me/33767056066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-dark text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-slate-900/10 hover:shadow-xl active:scale-98"
              >
                <span>M'écrire sur WhatsApp</span>
                <ArrowRight size={18} />
              </a>
              <div className="text-xs sm:text-sm font-medium text-slate-500">
                Je réponds moi-même, sous 24h.
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100">
                <ShieldCheck size={13} className="text-brand-accent" />
                Un seul prestataire par zone
              </span>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100">
                <Lock size={13} className="text-brand-accent" />
                Vos demandes ne sont jamais partagées
              </span>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100">
                <Sparkles size={13} className="text-brand-accent" />
                Sans engagement caché
              </span>
            </div>
          </div>

          {/* Visual Content - Phone Mockup over Real Wedding Photo */}
          <div className="lg:w-1/2 relative mt-4 lg:mt-0 w-full max-w-[480px] lg:max-w-none mx-auto">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl shadow-slate-900/15 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200" 
                alt="Couple de mariés" 
                className="w-full h-full object-cover grayscale brightness-95"
              />
              
              {/* Overlay Glass Backdrop */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40 backdrop-blur-xs">
                {/* Phone Frame */}
                <div className="w-full max-w-[310px] bg-white rounded-[2.2rem] shadow-2xl border-4 border-slate-900 overflow-hidden flex flex-col">
                  {/* Speaker / Camera Notch */}
                  <div className="bg-slate-900 h-5 w-full flex justify-center rounded-b-xl mb-5 mx-auto max-w-[110px]"></div>
                  
                  {/* Notification Card */}
                  <div className="px-4 pb-7">
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nouvelle demande</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold">À l'instant</span>
                      </div>
                      <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-brand-dark">
                        <p className="flex items-center gap-1.5"><span className="text-brand-accent">·</span> Julie & Thomas</p>
                        <p className="flex items-center gap-1.5"><span className="text-brand-accent">·</span> Mariage le 14 juin 2027</p>
                        <p className="flex items-center gap-1.5"><span className="text-brand-accent">·</span> Domaine près de Lyon</p>
                        <p className="flex items-center gap-1.5"><span className="text-brand-accent">·</span> Budget photo : 2 500 à 3 500 €</p>
                        <p className="flex items-center gap-1.5"><span className="text-brand-accent">·</span> 06 4X XX XX XX</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 text-center text-white drop-shadow-md">
                  <p className="font-bold text-sm">Ce que vous recevez, directement dans votre téléphone.</p>
                  <p className="text-xs text-white/80 mt-1 italic">exemple de demande type</p>
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
