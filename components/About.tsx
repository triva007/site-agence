import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="reveal">
            {/* Vraie photo d'Aaron demandée, utiliser un placeholder propre en attendant ou la vraie si dispo */}
            <div className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-lg">
               <img 
                 src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                 alt="Aaron, fondateur de Triva Media"
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               />
            </div>
          </div>
          
          <div className="reveal stagger-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-8 tracking-tight">
              Qui je suis
            </h2>
            
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-6">
              <p>
                <strong className="text-brand-dark font-semibold">Aaron, fondateur de Triva Media.</strong>
              </p>
              <p>
                Je monte et je pilote vos campagnes moi-même : ciblage, visuels, formulaire, suivi. Pas de sous-traitance, pas de chatbot. Vous m'écrivez, c'est moi qui réponds.
              </p>
              <p>
                Je travaille à distance avec des prestataires partout en France et en Belgique.
              </p>
              <p>
                Un seul client par zone : je n'équipe pas vos concurrents.
              </p>

              <div className="pt-8">
                <a 
                  href="https://wa.me/33767056066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white font-medium hover:bg-brand-whatsapp transition-colors w-full sm:w-auto"
                >
                  M'écrire sur WhatsApp — réponse sous 24h
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
