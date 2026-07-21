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
    <section id="how-to-start" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Processus
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Comment on démarre
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent -translate-y-12 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 sm:p-9 rounded-2xl shadow-sm border border-slate-200/80 reveal stagger-1 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-brand-accent/50 transition-all duration-300 z-10 flex flex-col justify-between group"
            >
                <div className="absolute top-4 right-5 text-6xl font-black text-brand-accent/10 select-none group-hover:text-brand-accent/20 transition-colors">
                  0{index + 1}
                </div>
                <div>
                  <div className="w-14 h-14 bg-brand-cream border border-brand-accent/20 text-brand-accent flex items-center justify-center rounded-2xl mb-6 relative z-10 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <step.icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-brand-dark mb-3 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base relative z-10">{step.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
