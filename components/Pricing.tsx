import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircle2, Zap } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Zap size={14} className="fill-current"/> Simple et Transparent
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
            Une seule offre <span className="text-brand-blue">complète.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Fini les devis à tiroirs. Voici ce qu'il vous faut pour démarrer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`reveal stagger-${index + 1} relative flex flex-col p-8 sm:p-10 rounded-3xl overflow-hidden transition-transform hover:-translate-y-1 duration-300 ${
                plan.isPopular 
                  ? 'bg-brand-dark text-white shadow-2xl shadow-brand-blue/20 ring-2 ring-brand-blue/50' 
                  : 'bg-white text-brand-dark border border-slate-200 shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider shadow-lg">
                  Recommandé
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-3 ${plan.isPopular ? 'text-brand-blue' : 'text-slate-400'}`}>{plan.title}</h3>
                <div className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">{plan.price}</div>
                <p className={`text-sm sm:text-base leading-relaxed ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className={`flex-shrink-0 w-5 h-5 ${plan.isPopular ? 'text-brand-blue' : 'text-green-500'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? 'secondary' : 'primary'} 
                className={`w-full justify-center py-4 text-lg ${plan.isPopular ? 'bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-brand-blue/30' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.buttonText}
              </Button>
              <p className="text-center text-xs opacity-50 mt-4 font-medium">Possibilité de payer en plusieurs fois</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;