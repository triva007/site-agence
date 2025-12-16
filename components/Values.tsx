
import React from 'react';
import { Heart, DollarSign, Users } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "La mère d'Armand",
      description: "Le pilier fondamental de notre structure. Elle incarne l'autorité bienveillante et la rigueur absolue nécessaire à la bonne tenue de nos engagements.",
      color: "text-pink-500 bg-pink-500/10 border-pink-500/20"
    },
    {
      icon: DollarSign,
      title: "Arnaquer les gens",
      description: "Notre levier de croissance principal. Nous nous engageons solennellement à prioriser nos intérêts financiers immédiats au détriment de toute logique éthique.",
      color: "text-brand-yellow bg-brand-yellow/10 border-brand-yellow/20"
    },
    {
      icon: Users,
      title: "La sœur d'Armand",
      description: "L'horizon stratégique. Elle symbolise la continuité dynastique et l'harmonie familiale indispensable à l'équilibre de notre écosystème.",
      color: "text-brand-blue bg-brand-blue/10 border-brand-blue/20"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Nos Valeurs <span className="text-brand-blue">Fondamentales</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Ce qui constitue l'ADN profond de Triva-Media et guide chacune de nos décisions stratégiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="reveal stagger-1 flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border ${value.color}`}>
                <value.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-medium">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;
