
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left reveal">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 mx-auto lg:mx-0">
              Publicité Facebook & Instagram · Spécialisé mariage
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-brand-dark leading-[1.1] mb-6 tracking-tight">
              Des demandes de couples sérieux, pas des curieux.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Un système complet pour les photographes et vidéastes de mariage : la publicité, le filtre qui écarte les curieux, et le cadre de rappel pour transformer les demandes en rendez-vous. Les couples viennent à vous, même pendant que vous shootez.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <a 
                href="https://wa.me/33767056066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-dark text-white hover:bg-slate-800 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all"
              >
                M'écrire sur WhatsApp <ArrowRight size={20} />
              </a>
              <div className="text-sm font-medium text-slate-400">
                Je réponds moi-même, sous 24h.
              </div>
            </div>
          </div>

          {/* Visual Content - Phone Mockup over Real Wedding Photo */}
          <div className="lg:w-1/2 relative mt-8 lg:mt-0 w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl shadow-slate-200/50">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200" 
                alt="Couple de mariés" 
                className="w-full h-full object-cover grayscale"
              />
              
              {/* Phone Mockup overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm">
                <div className="w-full max-w-[320px] bg-white rounded-[2rem] shadow-2xl border-4 border-slate-900 overflow-hidden flex flex-col">
                  {/* Phone Header / Notch area */}
                  <div className="bg-slate-900 h-6 w-full flex justify-center rounded-b-xl mb-6 mx-auto max-w-[120px]"></div>
                  
                  {/* Notification Card */}
                  <div className="px-4 pb-8">
                    <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nouvelle demande</span>
                      </div>
                      <div className="space-y-2 text-sm font-medium text-brand-dark">
                        <p>· Julie & Thomas</p>
                        <p>· Mariage le 14 juin 2027</p>
                        <p>· Domaine près de Lyon</p>
                        <p>· Budget photo : 2 500 à 3 500 €</p>
                        <p>· 06 4X XX XX XX</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center text-white">
                  <p className="font-bold text-sm">Ce que vous recevez, directement dans votre téléphone.</p>
                  <p className="text-xs text-white/70 mt-1 italic">exemple de demande type</p>
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
