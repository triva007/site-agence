import React from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
          <div className="reveal max-w-md mx-auto md:max-w-none w-full">
            <div className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-3xl shadow-xl border-2 border-brand-cream relative group">
               <img 
                 src="https://images.unsplash.com/photo-1555543445-568e61fb1ee6?auto=format&fit=crop&q=80&w=800" 
                 alt="Aaron, fondateur de Triva Media"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-lg">
                 <div className="flex items-center gap-2 text-brand-dark font-bold text-sm">
                   <UserCheck size={16} className="text-brand-accent" />
                   <span>Aaron · Fondateur Triva Media</span>
                 </div>
                 <p className="text-xs text-slate-500 mt-0.5">Votre interlocuteur unique</p>
               </div>
            </div>
          </div>
          
          <div className="reveal stagger-1">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
              À propos
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark mb-8 tracking-tight">
              Qui je suis
            </h2>
            
            <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-brand-dark font-semibold text-lg">
                Aaron, fondateur de Triva Media.
              </p>
              <p>
                Je monte et je pilote vos campagnes moi-même : ciblage, visuels, formulaire, suivi. Pas de sous-traitance, pas de chatbot. Vous m'écrivez, c'est moi qui réponds.
              </p>
              <p className="bg-brand-cream p-4 rounded-xl border border-brand-accent/20 text-slate-700 text-sm sm:text-base">
                Je travaille à distance avec des prestataires partout en France et en Belgique.
              </p>
              <p className="text-brand-dark font-medium">
                Un seul client par zone : je n'équipe pas vos concurrents.
              </p>
              
              <div className="mt-8 pt-8 border-t border-slate-200/80">
                <h3 className="text-xl font-display font-bold text-brand-dark mb-3">Pourquoi uniquement le mariage ?</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Parce qu'on ne cible pas un couple qui prépare son mariage comme on vend des fenêtres. Un seul univers, connu à fond : les saisons de réservation, les budgets réels, ce qui fait cliquer un couple.
                </p>
              </div>

              <div className="pt-6">
                <a 
                  href="https://wa.me/33767056066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-dark text-white font-bold text-sm sm:text-base rounded-full hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/10 w-full sm:w-auto"
                >
                  <span>M'écrire sur WhatsApp — réponse sous 24h</span>
                  <ArrowRight size={18} />
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
