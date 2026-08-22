import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, MapPin, Lock } from 'lucide-react';
import { WHO_IS_IT_FOR } from '../constants';

const QualificationCheck: React.FC = () => {
  return (
    <section id="qualification" className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Lock size={14} />
            <span>Critères &amp; Exclusivité</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            Pour qui est pensé ce partenariat ?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Parce que nous nous engageons sur une exclusivité géographique stricte, nous sélectionnons nos partenaires avec rigueur.
          </p>
        </div>

        {/* 2 Column Comparison: Ideal vs Not For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* For Whom It Is */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">
                    Ce partenariat est fait pour vous si :
                  </h3>
                  <span className="text-xs font-semibold text-emerald-600">Conditions requises</span>
                </div>
              </div>

              <ul className="space-y-4">
                {WHO_IS_IT_FOR.ideal.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
              <span>✓ Nous serons ravis d'étudier votre secteur géographique.</span>
            </div>
          </div>

          {/* For Whom It Is NOT */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <XCircle size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">
                    Ce n'est PAS adapté pour vous si :
                  </h3>
                  <span className="text-xs font-semibold text-rose-600">Cas incompatibles</span>
                </div>
              </div>

              <ul className="space-y-4">
                {WHO_IS_IT_FOR.notFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <XCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-rose-700">
              <span>✕ Mieux vaut privilégier d'autres canaux dans ces situations.</span>
            </div>
          </div>

        </div>

        {/* Territory Exclusivity Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-white shrink-0 mt-1">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">
                La Règle d'Exclusivité Territoriale
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Dès que nous démarrons avec votre entreprise sur une zone (par exemple un rayon de 35 km autour de votre atelier), <strong>nous refusons tout autre professionnel de votre spécialité sur ce secteur</strong>. Vous êtes assuré de ne subir aucune concurrence interne.
              </p>
            </div>
          </div>

          <a
            href="#booking"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blueHover text-white rounded-full font-bold text-xs sm:text-sm whitespace-nowrap shadow-md transition-all active:scale-98"
          >
            <ShieldCheck size={16} />
            <span>Vérifier mon secteur</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default QualificationCheck;
