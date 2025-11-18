
import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { X, Check } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Pourquoi choisir <span className="text-brand-blue">Connect</span> ?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 reveal stagger-1">
          <div className="grid grid-cols-3 bg-slate-900 text-white p-6 text-sm font-bold uppercase tracking-wider">
            <div className="col-span-1">Critères</div>
            <div className="col-span-1 text-center opacity-50">Agence Classique</div>
            <div className="col-span-1 text-center text-brand-blue">Connect Web Local</div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {COMPARISON_DATA.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-6 items-center hover:bg-slate-50 transition-colors">
                <div className="col-span-1 font-bold text-slate-800 text-sm sm:text-base">{item.label}</div>
                
                <div className="col-span-1 text-center px-2">
                   <div className="inline-flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <X size={16} strokeWidth={3} />
                      </div>
                      <span className="text-xs text-slate-400 hidden sm:block">{item.bad}</span>
                   </div>
                </div>

                <div className="col-span-1 text-center px-2 border-l border-slate-50 bg-brand-blue/5 -my-6 py-8 flex flex-col items-center justify-center h-full">
                   <div className="inline-flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/30">
                        <Check size={16} strokeWidth={4} />
                      </div>
                      <span className="text-xs font-bold text-brand-blue hidden sm:block mt-2">{item.good}</span>
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
