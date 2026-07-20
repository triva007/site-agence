import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <div className="reveal max-w-sm mx-auto md:max-w-none">
            <div className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-2xl shadow-sm border border-slate-100">
               {/* Vraie photo lumineuse d'Aaron fournie par l'utilisateur */}
               <img 
                 src="https://images.unsplash.com/photo-1555543445-568e61fb1ee6?auto=format&fit=crop&q=80&w=800" 
                 alt="Aaron, fondateur de Triva Media"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
          
          <div className="reveal stagger-1">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">À propos</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-8 tracking-tight">
              Qui je suis
            </h2>
            
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-6">
              <p>
                <strong className="text-brand-dark font-bold">Aaron, fondateur de Triva Media.</strong>
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
              
              <div className="mt-10 pt-8 border-t border-slate-100">
                <h3 className="text-xl font-display font-bold text-brand-dark mb-4">Pourquoi uniquement le mariage ?</h3>
                <p>
                  Parce qu'on ne cible pas un couple qui prépare son mariage comme on vend des fenêtres. Un seul univers, connu à fond : les saisons de réservation, les budgets réels, ce qui fait cliquer un couple.
                </p>
              </div>

              <div className="pt-8">
                <a 
                  href="https://wa.me/33767056066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-[#b5985f] transition-colors w-full sm:w-auto shadow-lg shadow-brand-accent/20"
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
