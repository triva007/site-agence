
import React from 'react';
import { PORTFOLIO } from '../constants';
import { Play, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-brand-dark text-white overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Nos dernières <span className="text-brand-blue">réalisations.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Chez Connect Web Local, nous réalisons des sites web attrayants et efficaces qui aident les petites entreprises à attirer plus de clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((project, index) => (
            <div 
              key={project.id} 
              className={`reveal stagger-${index + 1} group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-800 aspect-[4/5]`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/70 border border-white/20 px-2 py-1 rounded-md">Cliquez pour voir</span>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <div className="bg-white w-12 h-1 mb-4"></div>
                   <h3 className="text-3xl font-black leading-tight mb-2">{project.title}</h3>
                   <p className="text-slate-300 font-medium">{project.description}</p>
                </div>

                {/* Center Play Button Lookalike */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                  <Play className="fill-white text-white ml-1" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
            <button className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors">
                Voir tous les projets <ArrowRight size={18} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;