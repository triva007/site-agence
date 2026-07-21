
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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
    <section id="faq" className="py-20 md:py-28 bg-brand-cream border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-brand-accent/30 text-brand-accent font-bold uppercase tracking-widest text-xs mb-3 shadow-2xs">
            <HelpCircle size={14} />
            <span>Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Foire aux questions
          </h2>
        </div>

        <div className="space-y-4 reveal stagger-1">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-brand-accent/50 shadow-md ring-1 ring-brand-accent/20' 
                  : 'border-slate-200/80 shadow-xs hover:border-slate-300'
              }`}
            >
              <button
                className="w-full px-6 py-5 sm:py-6 text-left flex justify-between items-center focus:outline-none group cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-base sm:text-lg transition-colors ${openIndex === index ? 'text-brand-dark' : 'text-slate-700 group-hover:text-brand-dark'}`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-brand-cream text-brand-accent' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out px-6 ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                   <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 border-t border-slate-100">
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