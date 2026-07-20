
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
    <section id="problem" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="reveal stagger-1 flex flex-col items-start">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 text-brand-dark">
                {React.createElement(card.icon, { size: 24, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-brand-dark">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">
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
