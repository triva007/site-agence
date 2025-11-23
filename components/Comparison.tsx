
import React from 'react';
import { Check, X, Lock, Clock, Wallet, MessageCircle, ShieldCheck, MapPin, Trophy, TrendingUp } from 'lucide-react';

const Comparison: React.FC = () => {
  // Données intégrées pour garantir l'affichage immédiat
  const points = [
    {
      icon: MapPin,
      title: "Spécialiste Local",
      bad: "Agence généraliste (E-com, Startups...)",
      good: "100% Dédié aux artisans & commerçants"
    },
    {
      icon: Trophy,
      title: "Visibilité Google N°1",
      bad: "Site vitrine joli mais invisible sur Google",
      good: "Optimisé pour être le Premier sur votre ville"
    },
    {
      icon: Lock,
      title: "Propriété & Liberté",
      bad: "Site en location (Vous payez à vie)",
      good: "100% Propriétaire (Le site est à vous)"
    },
    {
      icon: TrendingUp,
      title: "Rentabilité",
      bad: "Coût élevé sans garantie de résultats",
      good: "Conçu pour faire sonner le téléphone"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Pourquoi choisir un <br/>
            <span className="text-brand-blue">expert local ?</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Ne confiez pas votre image à des généralistes. Nous sommes spécialisés pour faire de vous le premier choix dans votre ville.
          </p>
        </div>

        {/* Grid Layout - Mobile Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, index) => (
            <div key={index} className="reveal stagger-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-blue/5 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-bold text-slate-900 mb-6 text-lg">{item.title}</h3>
              
              <div className="space-y-4">
                {/* The Bad Way */}
                <div className="flex items-start gap-3 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                  <div className="bg-red-100 text-red-500 rounded-full p-0.5 shrink-0 mt-0.5">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <p className="text-xs leading-relaxed font-medium text-slate-500">Ailleurs : <br/>{item.bad}</p>
                </div>
                
                <div className="w-full h-px bg-slate-50"></div>

                {/* The Good Way */}
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-600 rounded-full p-0.5 shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-sm leading-relaxed font-bold text-slate-800">Chez Triva-Media : <br/>{item.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
           <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wide border border-green-100 shadow-sm">
              <ShieldCheck size={18} /> Garantie Transparence Totale
           </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;
