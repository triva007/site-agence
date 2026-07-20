import React from 'react';
import { Camera, Filter, Smartphone } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "1. Votre campagne",
      description: "Je crée les publicités à partir de VOS images. Vos plus beaux moments arrêtent le scroll mieux que n'importe quel texte.",
      icon: Camera
    },
    {
      title: "2. Le filtre",
      description: "Avant de pouvoir envoyer sa demande, le couple indique sa date, son lieu et son budget. Les curieux s'arrêtent là. Les couples sérieux passent.",
      icon: Filter
    },
    {
      title: "3. Votre téléphone",
      description: "Vous recevez la demande complète avec le numéro du couple. Vous rappelez, vous faites votre métier.",
      icon: Smartphone
    }
  ];

  return (
    <section id="method" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
            La méthode
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white p-8 border border-slate-100 reveal stagger-1">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-brand-dark flex items-center justify-center rounded-full mb-6">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;