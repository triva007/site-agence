import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircle2, Zap } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
            Investissez dans votre <br/> <span className="text-brand-blue">croissance.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Pas de frais cachés, pas de mauvaises surprises. Un prix juste pour un outil qui rapporte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`reveal stagger-${index + 1} relative flex flex-col p-8 sm:p-10 rounded-[2rem] overflow-hidden transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-brand-dark text-white shadow-2xl shadow-brand-blue/20 scale-105 lg:scale-110 z-10 border border-brand-blue/50' 
                  : 'bg-slate-50 text-brand-dark border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-blue to-brand-lightBlue"></div>
              )}

              <div className="mb-8">
                <div className="flex justify-between items-start">
                    <h3 className={`text-lg font-bold uppercase tracking-wide mb-3 ${plan.isPopular ? 'text-brand-blue' : 'text-slate-500'}`}>{plan.title}</h3>
                    {plan.isPopular && <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">Best-seller</span>}
                </div>
                <div className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">{plan.price}</div>
                <p className={`text-sm sm:text-base leading-relaxed font-medium ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-5 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className={`flex-shrink-0 w-6 h-6 ${plan.isPopular ? 'text-brand-blue' : 'text-green-600'}`} />
                    <span className="text-sm font-bold">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? 'secondary' : 'primary'} 
                className={`w-full justify-center py-4 text-lg font-bold rounded-xl ${
                    plan.isPopular 
                    ? 'bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-brand-blue/30 border-none' 
                    : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-brand-dark hover:bg-brand-dark hover:text-white'
                }`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.buttonText}
              </Button>
              <p className="text-center text-xs opacity-50 mt-4 font-medium">Paiement en 3x sans frais disponible</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
