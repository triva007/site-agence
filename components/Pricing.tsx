
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
            Des offres <span className="text-brand-blue">simples</span> et <br/>
            <span className="text-brand-blue">transparentes.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Du site d'une page à la plateforme complexe, nous nous adaptons à tous les budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`reveal stagger-${index + 1} relative flex flex-col p-10 rounded-3xl overflow-hidden ${
                plan.isPopular 
                  ? 'bg-brand-blue text-white shadow-2xl shadow-brand-blue/30' 
                  : 'bg-white text-brand-dark border border-slate-100 shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Populaire
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">{plan.title}</h3>
                <div className="text-5xl font-black mb-4">{plan.price}</div>
                <p className={`text-sm leading-relaxed ${plan.isPopular ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className={`flex-shrink-0 w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-brand-blue'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? 'secondary' : 'primary'} 
                className={`w-full justify-center ${plan.isPopular ? 'bg-white text-brand-blue hover:bg-slate-100' : 'bg-brand-dark text-white hover:bg-slate-800'}`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
