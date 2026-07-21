import React from 'react';
import { ShieldAlert } from 'lucide-react';

const NoPromises: React.FC = () => {
  return (
    <section id="no-promises" className="relative py-24 md:py-32 bg-brand-dark text-white overflow-hidden">
      {/* Background dark wedding photo overlay with soft vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542131596-ebdeba301bc6?auto=format&fit=crop&q=80&w=2000"
          alt="Mariage reportage émotion"
          className="w-full h-full object-cover opacity-20 grayscale brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-bold uppercase tracking-widest text-xs mb-6 reveal">
            <ShieldAlert size={14} />
            <span>Différenciation</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight reveal">
            Ce que je ne promets pas
          </h2>
          
          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed reveal stagger-1 font-normal">
            <p className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
              <strong className="text-white font-semibold">Des mariages signés ?</strong> Personne ne peut promettre ça sérieusement : c'est vous qui faites l'appel, le devis et la signature. Méfiez-vous de ceux qui promettent le contraire.
            </p>
            <p className="pl-2 border-l-2 border-brand-accent/60">
              Moi, je m'engage sur ce que je contrôle : le volume et la qualité des demandes qui arrivent. Tout est mesuré, vous voyez les mêmes chiffres que moi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoPromises;
