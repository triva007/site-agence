import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Search, PenTool, Layout, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const icons = [Search, PenTool, Layout, Rocket];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
            Notre méthode
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-blue italic">
            Simple. Efficace. Transparente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className={`reveal stagger-${index + 1} relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0`}>
                
                {/* Content Wrapper */}
                <div className={`w-full md:w-1/2 pl-4 md:pl-0 md:pr-16 ${index % 2 !== 0 ? 'md:order-1 md:text-right md:pr-16' : 'md:order-3 md:pl-16'}`}>
                  
                  {/* Mobile Header (Icon + Number) */}
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center shadow-lg shrink-0">
                         <Icon size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-300">0{step.number}</h3>
                  </div>

                  <div className={`bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-brand-blue/30 transition-colors duration-300 group`}>
                     <div className="hidden md:inline-block mb-4 p-3 bg-brand-light rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <Icon size={24} />
                     </div>
                     <h4 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-brand-blue z-10 mt-8 md:mt-0 md:order-2 hidden md:flex items-center justify-center">
                   <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                </div>

                {/* Empty space */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 !== 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;