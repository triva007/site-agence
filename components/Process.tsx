
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Phone, DollarSign, Zap, Star } from 'lucide-react';

const Process: React.FC = () => {
  const icons = [Phone, DollarSign, Zap, Star];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-4xl sm:text-5xl font-black text-brand-blue italic">
            En 4 étapes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 md:hidden"></div>

          {PROCESS_STEPS.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className={`reveal stagger-${index + 1} relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0`}>
                
                {/* Step Content - Left for even, Right for odd (Desktop) */}
                <div className={`md:w-1/2 pl-20 md:pl-0 md:pr-16 ${index % 2 !== 0 ? 'md:order-1 md:text-right md:pr-16' : 'md:order-3 md:pl-16'}`}>
                  <h3 className="text-3xl font-light text-slate-300 mb-2">Étape {step.number}</h3>
                  <div className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-brand-blue/30 transition-colors duration-300`}>
                     <div className="mb-4 inline-block p-3 bg-brand-light rounded-2xl text-brand-blue">
                       <Icon size={24} />
                     </div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-white shadow-sm z-10 mt-8 md:mt-0 md:order-2"></div>

                {/* Empty space for the other side */}
                <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
