import React from 'react';
import { PhoneCall, Rocket, Inbox } from 'lucide-react';

const HowToStart: React.FC = () => {
  const steps = [
    {
      title: "Un appel de 15 minutes",
      description: "On regarde votre zone, vos images et vos objectifs. Si je ne peux pas vous aider, je vous le dis.",
      icon: PhoneCall
    },
    {
      title: "Lancement sous 7 jours",
      description: "Je monte tout : campagne, visuels, formulaire. Vous validez tout avant diffusion.",
      icon: Rocket
    },
    {
      title: "Les demandes arrivent",
      description: "Avec les infos et le téléphone du couple. Et chaque semaine, un point simple sur les chiffres.",
      icon: Inbox
    }
  ];

  return (
    <section id="how-to-start" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Processus</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Comment on démarre
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal stagger-1 relative overflow-hidden">
                <div className="absolute top-4 right-6 text-7xl font-black text-brand-accent opacity-[0.07]">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-brand-cream text-brand-accent flex items-center justify-center rounded-2xl mb-6 relative z-10">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-dark mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
