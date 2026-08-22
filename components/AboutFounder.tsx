import React from 'react';
import { User, MessageCircle, ShieldCheck, HeartHandshake, CheckCircle2, Phone } from 'lucide-react';

const AboutFounder: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Avatar & Quick Info (4 cols) */}
            <div className="md:col-span-4 text-center md:text-left space-y-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-brand-blue/10 border-2 border-brand-blue/30 text-brand-blue flex items-center justify-center font-display font-black text-3xl sm:text-4xl mx-auto md:mx-0 shadow-inner">
                A
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-brand-dark">
                  Aaron
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  Fondateur · Triva Media
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Expert en acquisition publicitaire Meta Ads
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/33767056066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold shadow-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>07 67 05 60 66</span>
                </a>
              </div>
            </div>

            {/* Right: Vision & Direct Message (8 cols) */}
            <div className="md:col-span-8 space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700">
                <HeartHandshake size={14} className="text-brand-blue" />
                <span>La Vision Triva Media</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-brand-dark">
                « Un partenariat direct d'artisan à artisan »
              </h4>

              <p>
                Dans le bâtiment, votre temps est sur les chantiers : à coordonner les équipes, caler les approvisionnements et veiller à la qualité des finitions. Vous n'avez ni le temps ni l'envie de gérer des algorithmes publicitaires complexes ou d'échanger avec 3 chefs de projet stagiaires différents.
              </p>

              <p>
                Chez Triva Media, j'ai fait le choix de travailler avec un <strong>nombre restreint d'entreprises du bâtiment</strong>, avec un interlocuteur unique : moi-même. Chaque campagne est rédigée, optimisée et surveillée personnellement.
              </p>

              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                  <span>Ligne directe WhatsApp avec Aaron</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                  <span>Zéro blabla d'agence ni jargon théorique</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                  <span>Transparence totale sur les chiffres</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                  <span>Exclusivité territoriale respectée</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFounder;
