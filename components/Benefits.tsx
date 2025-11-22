
import React from 'react';
import { TrendingUp, ShieldCheck, RefreshCcw, Lock, Zap, Star, MapPin } from 'lucide-react';

const Benefits: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Domination Locale",
      description: "Nous optimisons tout pour que lorsque quelqu'un tape votre métier + votre ville, c'est VOUS qui sortez en premier."
    },
    {
      icon: ShieldCheck,
      title: "Le Bouclier d'Avis",
      description: "Notre système intelligent filtre les avis : les clients contents sont dirigés vers Google, les mécontents vers un formulaire privé."
    },
    {
      icon: RefreshCcw,
      title: "Création ou Refonte",
      description: "Site existant ou page blanche : nous livrons un site moderne, rapide et vendeur en seulement 7 jours."
    },
    {
      icon: Lock,
      title: "Liberté Totale",
      description: "Choisissez votre modèle : Pack Visibilité (Achat unique) ou Pack Sérénité (Abonnement). Pas de frais cachés."
    },
    {
      icon: Zap,
      title: "Livraison Express",
      description: "Votre outil de travail est prêt à générer du chiffre d'affaires en une semaine chrono (7 jours)."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 reveal text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Un investissement <br/>
            <span className="text-brand-blue">qui rapporte de l'argent.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">Votre site web n'est pas une dépense, c'est un actif commercial qui vous appartient à 100%.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-auto">
          
          {/* Feature 1: Domination Locale */}
          <div className="reveal md:col-span-2 lg:col-span-2 row-span-2 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-brand-blue/30 transition-colors group relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors"></div>
             <div className="relative z-10 flex-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-brand-blue">
                  {React.createElement(features[0].icon, { size: 28, strokeWidth: 2 })}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{features[0].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm sm:text-base">{features[0].description}</p>
                </div>
             </div>
             <div className="mt-8 w-full h-40 sm:h-48 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10"></div>
                 <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Clients" />
             </div>
          </div>

          {/* Feature 2: Le Bouclier d'Avis (Dark Card) */}
          <div className="reveal md:col-span-1 lg:col-span-2 bg-brand-dark text-white rounded-3xl p-6 sm:p-8 border border-slate-800 group overflow-hidden relative flex flex-col justify-between min-h-[280px]">
            <div className="absolute right-0 top-0 p-8 opacity-10 text-brand-blue">
               <ShieldCheck size={140} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-4 text-brand-yellow">
                {React.createElement(features[1].icon, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{features[1].title}</h3>
              <p className="text-slate-400 text-sm sm:text-base">{features[1].description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30 flex items-center gap-1">
                  <Star size={10} fill="currentColor"/> 5★ Public
                </span>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30 flex items-center gap-1">
                   1★ Privé (Filtré)
                </span>
            </div>
          </div>

          {/* Feature 3: Création ou Refonte */}
          <div className="reveal md:col-span-1 bg-blue-50 rounded-3xl p-6 sm:p-8 border border-blue-100 group hover:shadow-lg hover:shadow-blue-100/50 transition-all min-h-[200px]">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-brand-blue">
               {React.createElement(features[2].icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{features[2].title}</h3>
            <p className="text-slate-600 text-sm">{features[2].description}</p>
          </div>

          {/* Feature 4: Propriété 100% */}
          <div className="reveal md:col-span-1 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all min-h-[200px]">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-brand-dark">
               {React.createElement(features[3].icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{features[3].title}</h3>
            <p className="text-slate-500 text-sm">{features[3].description}</p>
          </div>

           {/* Feature 5: Hébergement Offert */}
          <div className="reveal md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-brand-blue/30 transition-colors">
             <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                {React.createElement(features[4].icon, { size: 32 })}
             </div>
             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{features[4].title}</h3>
                <p className="text-slate-500 text-sm">{features[4].description}</p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;
