import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, CONTACT_INFO } from '../constants';

export const FAQSection: React.FC = () => {
  // Une seule question ouverte à la fois
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-encre text-texteSombre bg-grid-citron relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-citron mb-3 inline-block">
            FAQ
          </span>
          <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteSombre leading-[1.12] tracking-[-0.03em]">
            Vos questions, nos réponses{' '}
            <span className="font-serif italic font-normal text-citron">
              franches
            </span>
            .
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 mb-14">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-encreCard rounded-[20px] border border-bordureSombre overflow-hidden transition-colors hover:border-citron/30"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-texteSombre tracking-tight">
                    {item.question}
                  </span>
                  <span 
                    className={`w-9 h-9 rounded-full bg-encre flex items-center justify-center shrink-0 text-citron transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-citron text-encre' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-texteSombreSec leading-relaxed border-t border-bordureSombre/60 pt-4 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question WhatsApp prompt */}
        <div className="bg-encreDeep rounded-[24px] p-8 border border-bordureSombre text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg font-bold text-texteSombre mb-1">
              Une autre question ?
            </p>
            <p className="text-xs sm:text-sm text-texteSombreSec">
              Écrivez directement à Aaron sur WhatsApp.
            </p>
          </div>

          <a
            href={CONTACT_INFO.whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="faq_whatsapp"
            className="h-12 px-7 rounded-full bg-citron text-encre text-sm font-bold flex items-center justify-center gap-2 tracking-tight hover:bg-white transition-all shrink-0 active:scale-95 shadow-sm"
          >
            <MessageCircle size={16} />
            <span>Poser ma question</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
