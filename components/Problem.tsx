
import React from 'react';
import { Target, MessageSquareDashed, Users } from 'lucide-react';

const Problem: React.FC = () => {
  const cards = [
    {
      icon: Target,
      title: "L'algorithme décide",
      description: "Poster tous les jours en espérant qu'Instagram vous montre aux bons couples, ce n'est pas une stratégie, c'est une loterie."
    },
    {
      icon: MessageSquareDashed,
      title: "Les demandes floues",
      description: "\"C'est combien ?\" sans date ni lieu, des négociateurs, des curieux. Y répondre, c'est des heures perdues chaque semaine."
    },
    {
      icon: Users,
      title: "L'annuaire payant",
      description: "Être listé au milieu de 100 confrères, sur une plateforme qui affiche vos concurrents juste à côté de votre profil."
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-brand-cream border-y border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Le constat
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Le problème des demandes en ligne
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="reveal stagger-1 flex flex-col items-start bg-white p-8 sm:p-9 rounded-2xl shadow-sm border border-slate-200/80 hover:-translate-y-1 hover:shadow-lg hover:border-brand-accent/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-brand-cream border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                {React.createElement(card.icon, { size: 28, strokeWidth: 1.75 })}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-brand-dark">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
