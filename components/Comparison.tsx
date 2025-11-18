import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { X, Check } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Pourquoi choisir <span className="text-brand-blue">Triva-Media</span> ?
          </h2>
          <p className="text-slate-500 mt-4">Arrêtez de payer pour des sites qui ne servent à rien.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 reveal stagger-1">
          <div className="grid grid-cols-3 bg-brand-dark text-white p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-1 self-center">La Différence</div>
            <div className="col-span-1 text-center opacity-50 self-center">Site Web "Classique"</div>
            <div className="col-span-1 text-center text-brand-blue self-center">Triva-Media</div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {COMPARISON_DATA.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-4 sm:p-6 items-stretch hover:bg-slate-50 transition-colors">
                <div className="col-span-1 font-bold text-slate-800 text-xs sm:text-base self-center pr-2">{item.label}</div>
                
                <div className="col-span-1 text-center px-1 flex items-center justify-center">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                        <X size={14} strokeWidth={3} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-400 leading-tight hidden sm:block">{item.bad}</span>
                   </div>
                </div>

                <div className="col-span-1 text-center px-1 border-l border-slate-50 bg-brand-blue/5 -my-4 sm:-my-6 py-4 sm:py-6 flex flex-col items-center justify-center">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/30 shrink-0">
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-brand-blue leading-tight hidden sm:block">{item.good}</span>
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

export default Comparison;