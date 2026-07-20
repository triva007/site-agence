import React from 'react';

const NoPromises: React.FC = () => {
  return (
    <section id="no-promises" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-8 tracking-tight reveal">
          Ce que je ne promets pas
        </h2>
        
        <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-6 reveal stagger-1">
          <p>
            <strong className="text-brand-dark font-semibold">Des mariages signés ?</strong> Personne ne peut promettre ça sérieusement : c'est vous qui faites l'appel, le devis et la signature. Méfiez-vous de ceux qui promettent le contraire.
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
