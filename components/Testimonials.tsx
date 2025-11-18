import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl font-black mb-4">
            Ils en parlent mieux que nous
          </h2>
          <p className="text-slate-400">Nos clients sont nos meilleurs ambassadeurs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.id} className={`reveal stagger-${index + 1} bg-white text-brand-dark p-8 rounded-2xl shadow-lg`}>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <p className="font-bold text-base">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase">{testimonial.role} - {testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="inline-flex items-center gap-1 bg-brand-dark text-white px-3 py-1 rounded-full text-xs font-bold">
                 <Star size={12} className="fill-current" /> 5/5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;