import React from 'react';
import { Camera, Video, Users } from 'lucide-react';

const ForWho: React.FC = () => {
  const cards = [
    {
      title: "Photographes de mariage",
      description: "Remplir votre saison avec des couples qui correspondent à votre style, au lieu de courir après les demandes.",
      icon: Camera
    },
    {
      title: "Vidéastes de mariage",
      description: "Paniers plus élevés, décisions plus longues : chaque demande qualifiée compte double.",
      icon: Video
    },
    {
      title: "Studios et duos",
      description: "Plusieurs dates à remplir chaque week-end : il vous faut un flux régulier, pas des à-coups.",
      icon: Users
    }
  ];

  return (
    <section id="for-who" className="py-20 md:py-28 bg-brand-cream border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Pour qui
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Ceux que j'accompagne
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-8 sm:p-9 rounded-2xl shadow-sm border border-slate-200/80 reveal stagger-1 hover:-translate-y-1 hover:shadow-lg hover:border-brand-accent/40 transition-all duration-300 flex flex-col items-start group"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-cream border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                {React.createElement(card.icon, { size: 28, strokeWidth: 1.75 })}
              </div>
              <h3 className="text-xl font-display font-bold text-brand-dark mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
