
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Combien ça coûte ?",
      answer: "Une mise en place, puis un abonnement mensuel. Votre budget publicitaire se paie directement à Meta, sur votre compte : cet argent ne passe jamais par moi. Les chiffres exacts dépendent de votre zone et de vos objectifs, je les donne en appel, et tout est annoncé avant de commencer, sans frais cachés."
    },
    {
      question: "Vous vous engagez sur quoi, concrètement ?",
      answer: "Un objectif de demandes qualifiées défini ensemble au départ, selon votre budget. S'il n'est pas atteint, je continue de travailler gratuitement jusqu'à l'atteindre, dans la limite d'un mois. Je ne promets ni mariages signés, ni chiffres magiques."
    },
    {
      question: "Et une fois que la demande arrive, je fais quoi ?",
      answer: "C'est exactement là que la plupart perdent la vente : rappel trop tardif, mauvais premiers mots. Je vous fournis un cadre simple : quand rappeler, quoi dire, comment proposer le rendez-vous. Et on l'ajuste ensemble selon vos retours."
    },
    {
      question: "Un formulaire qui demande le budget, ça ne fait pas fuir ?",
      answer: "Si, et c'est le but. Ça fait fuir ceux qui n'ont ni date ni budget. Ceux qui passent le filtre sont ceux avec qui vous signez."
    },
    {
      question: "J'ai déjà testé la pub, ça n'a rien donné.",
      answer: "Booster un post envoie du trafic vers votre profil, où il se perd. Ici, la campagne envoie vers un formulaire qui filtre et récupère le téléphone. Ce n'est pas le même métier."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-cream border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Questions</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-12">
            FAQ
          </h2>
        </div>

        <div className="space-y-4 reveal stagger-1">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-brand-accent' : 'text-slate-600 group-hover:text-brand-dark'}`}>
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4 transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-brand-accent" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-400" />
                  )}
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out px-6 ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                   <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;