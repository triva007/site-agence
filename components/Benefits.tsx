
import React from 'react';
import { Search, TrendingUp, Smartphone, Layout, Zap, ShieldCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 reveal">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Tout ce dont vous avez besoin <br/>
            <span className="text-brand-blue">pour réussir en ligne.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-rows-[auto_auto_auto]">
          
          {/* Card 1 - Large Focus */}
          <div className="reveal md:col-span-2 lg:col-span-2 row-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand-blue/30 transition-colors group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors"></div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-brand-blue">
                  <Layout size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Design Premium & Sur-mesure</h3>
                  <p className="text-slate-500 leading-relaxed">Pas de templates génériques. Nous créons une identité visuelle unique qui reflète l'excellence de votre savoir-faire local. Chaque pixel est pensé pour la conversion.</p>
                </div>
                <div className="mt-8 w-full h-48 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Design" />
                </div>
             </div>
          </div>

          {/* Card 2 - Dark Contrast */}
          <div className="reveal md:col-span-1 lg:col-span-2 bg-brand-dark text-white rounded-3xl p-8 border border-slate-800 group overflow-hidden relative">
            <div className="absolute right-0 top-0 p-8 opacity-20">
               <TrendingUp size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Local Optimisé</h3>
              <p className="text-slate-400 text-sm">Apparaissez avant vos concurrents sur Google Maps et les recherches locales.</p>
            </div>
          </div>

          {/* Card 3 - Simple */}
          <div className="reveal md:col-span-1 bg-blue-50 rounded-3xl p-8 border border-blue-100 group hover:shadow-lg hover:shadow-blue-100/50 transition-all">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-brand-blue">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">100% Responsive</h3>
            <p className="text-slate-500 text-sm">Une expérience fluide sur mobile, tablette et ordinateur.</p>
          </div>

          {/* Card 4 - Simple */}
          <div className="reveal md:col-span-1 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-slate-900">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ultra Rapide</h3>
            <p className="text-slate-500 text-sm">Chargement instantané pour ne perdre aucun client impatient.</p>
          </div>

           {/* Card 5 - Wide */}
          <div className="reveal md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-center gap-6 hover:border-brand-blue/30 transition-colors">
             <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={32} />
             </div>
             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Hébergement & Sécurité Inclus</h3>
                <p className="text-slate-500 text-sm">On s'occupe de la technique. Certificat SSL, sauvegardes, mises à jour.</p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;
