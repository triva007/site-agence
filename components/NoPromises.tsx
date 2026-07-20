import React from 'react';

const NoPromises: React.FC = () => {
  return (
    <section id="no-promises" className="relative py-20 md:py-32 bg-slate-900 border-t border-slate-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542131596-ebdeba301bc6?auto=format&fit=crop&q=80&w=2000"
          alt="Mariage reportage émotion"
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 reveal">Différenciation</div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-10 tracking-tight reveal">
          Ce que je ne promets pas
        </h2>
        
        <div className="prose prose-lg prose-slate max-w-none text-slate-300 space-y-6 reveal stagger-1">
          <p>
            <strong className="text-white font-semibold">Des mariages signés ?</strong> Personne ne peut promettre ça sérieusement : c'est vous qui faites l'appel, le devis et la signature. Méfiez-vous de ceux qui promettent le contraire.
          </p>
          <p>
            Moi, je m'engage sur ce que je contrôle : le volume et la qualité des demandes qui arrivent. Tout est mesuré, vous voyez les mêmes chiffres que moi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoPromises;
