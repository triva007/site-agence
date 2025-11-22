
import React from 'react';
import { XCircle, ImageOff, Star } from 'lucide-react';

const Problem: React.FC = () => {
  const cards = [
    {
      icon: XCircle,
      title: "L'Invisibilité Numérique",
      description: "97% de vos prospects cherchent un pro sur Google avant d'appeler. Si vous n'êtes pas dans le Top 3, vous offrez littéralement votre chiffre d'affaires à vos concurrents.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: ImageOff,
      title: "L'Image Amateur",
      description: "Un site lent, moche ou non sécurisé fait fuir 80% des visiteurs instantanément. Votre site doit inspirer confiance dès la première seconde, sinon vous perdez des appels.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Star,
      title: "La Hantise des Mauvais Avis",
      description: "Une seule mauvaise note injustifiée peut ruiner votre réputation. Notre système 'Bouclier' intercepte les mécontents en privé et propulse les clients ravis sur Google.",
      color: "bg-slate-100 text-slate-600"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            Pourquoi perdez-vous <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">des clients chaque jour ?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Le constat est brutal : si vous n'êtes pas optimisé pour le web local, vous offrez vos clients à vos concurrents sur un plateau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="reveal stagger-1 bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color} shadow-lg`}>
                {React.createElement(card.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">
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
