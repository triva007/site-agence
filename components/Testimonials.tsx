
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Données intégrées pour garantir l'affichage des nouveaux textes RASSURANTS et RÉALISTES
  const TESTIMONIALS_DATA = [
    {
      id: 1,
      name: "Marc",
      role: "Gérant Garage",
      company: "AutoFix",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Ce que j'apprécie, c'est que le site m'appartient vraiment. On est enfin visibles sur Google Maps sans payer de pub. Le téléphone sonne plus souvent et les clients nous trouvent sérieux avant même d'arriver."
    },
    {
      id: 2,
      name: "Sophie",
      role: "Restauratrice",
      company: "Le Petit Coin",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Le système de filtre d'avis est top. J'avais peur des mauvaises notes injustifiées. Là, je récupère les avis positifs sur Google et je gère les petits soucis en privé. Ça rassure énormément les futurs clients."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            La confiance <br/>
            <span className="text-brand-blue">avant tout.</span>
          </h2>
          <p className="text-slate-400 text-lg">Vos voisins nous font confiance pour gérer leur image locale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={testimonial.id} className={`reveal stagger-${index + 1} bg-[#0B1121] border border-slate-800 p-8 sm:p-10 rounded-3xl relative group hover:border-brand-blue/30 transition-colors`}>
              
              <Quote size={48} className="absolute top-8 right-8 text-slate-800 group-hover:text-brand-blue/20 transition-colors" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-700"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border border-[#0B1121]">
                    <Star size={10} className="text-white fill-white" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg text-white">{testimonial.name}</p>
                  <p className="text-xs text-brand-blue font-bold uppercase tracking-wider">{testimonial.role} — {testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-2">
                 <div className="flex text-brand-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                 </div>
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-2">Client Vérifié</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
