
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 reveal">
            <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mb-8">
              Questions <br/> fréquentes
            </h2>
            
            <div className="hidden lg:block space-y-4">
               <div className="w-1 h-12 bg-brand-blue"></div>
               <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Support</div>
               <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Process</div>
               <div className="text-sm font-bold uppercase tracking-widest text-brand-blue">FAQ</div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 reveal stagger-1">
            {FAQ_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-slate-100 last:border-0"
              >
                <button
                  className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-brand-blue' : 'text-brand-dark group-hover:text-brand-blue'}`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-brand-blue" />
                    ) : (
                      <Plus className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
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
      </div>
    </section>
  );
};

export default FAQ;