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
    <section id="method" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            LA MÉTHODE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Le Filtre Couple
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 reveal stagger-1 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="absolute top-4 right-5 text-6xl font-black text-brand-accent/10 select-none group-hover:text-brand-accent/20 transition-colors">
                  0{index + 1}
                </div>
                <div>
                  <div className="w-14 h-14 bg-brand-cream border border-brand-accent/20 text-brand-accent flex items-center justify-center rounded-2xl mb-6 relative z-10 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-brand-dark mb-3 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base relative z-10">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;