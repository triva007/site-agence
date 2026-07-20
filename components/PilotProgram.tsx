import React from 'react';

const PilotProgram: React.FC = () => {
  return (
    <section id="pilot-program" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-10 md:p-12 shadow-sm border border-slate-200 reveal">
          <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark mb-6 tracking-tight">
            Programme Pilote
          </h2>
          
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              Été 2026 : je fais tourner un programme pilote avec 3 photographes et vidéastes de mariage. Les résultats chiffrés seront publiés ici fin août.
            </p>
            <p>
              C'est aussi pour ça qu'il n'y a pas encore d'études de cas sur cette page : je préfère montrer du réel que des captures d'écran invérifiables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotProgram;
