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
    <section id="for-who" className="py-24 bg-brand-cream border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Pour qui</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Ceux que j'accompagne
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal stagger-1">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 text-brand-accent">
                {React.createElement(card.icon, { size: 32, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-display font-bold text-brand-dark mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
