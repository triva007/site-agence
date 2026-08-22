import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Transparence Totale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            Questions fréquentes des artisans
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Des réponses claires et sans détour sur le fonctionnement de nos campagnes publicitaires Meta.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden shadow-2xs ${
                  isOpen ? 'border-brand-blue ring-1 ring-brand-blue/15' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-brand-dark"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact box */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="font-bold text-base text-brand-dark">
              Une question spécifique à votre entreprise ou votre secteur ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Posez-la directement à Aaron, réponse rapide par message ou note vocale.
            </p>
          </div>
          <a
            href="https://wa.me/33767056066"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs whitespace-nowrap shadow-sm transition-colors"
          >
            <MessageCircle size={15} />
            <span>M'écrire sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
