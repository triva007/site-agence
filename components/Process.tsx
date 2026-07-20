import React from 'react';
import { Camera, Filter, Smartphone, MessageSquare } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Votre campagne",
      description: "Je crée les publicités à partir de VOS images. Vos plus beaux moments arrêtent le scroll mieux que n'importe quel texte.",
      icon: Camera
    },
    {
      title: "Le filtre",
      description: "Avant de pouvoir envoyer sa demande, le couple indique sa date, son lieu et son budget. Les curieux s'arrêtent là. Les couples sérieux passent.",
      icon: Filter
    },
    {
      title: "Votre téléphone",
      description: "Vous recevez la demande complète avec le numéro du couple. Vous rappelez, vous faites votre métier.",
      icon: Smartphone
    },
    {
      title: "La conversion",
      description: "Je ne vous laisse pas seul avec les demandes. Vous recevez mon cadre de rappel : quand rappeler, quoi dire, comment amener le couple vers un rendez-vous. Vous restez le photographe, vous avez juste le script en plus.",
      icon: MessageSquare
    }
  ];

  return (
    <section id="method" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16 reveal">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">LA MÉTHODE</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Le Filtre Couple
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal stagger-1 relative overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="absolute top-4 right-6 text-7xl font-black text-brand-accent opacity-[0.07]">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-brand-cream text-brand-accent flex items-center justify-center rounded-2xl mb-6 relative z-10">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-dark mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;