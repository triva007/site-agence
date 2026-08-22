import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle, MapPin, User, Euro, Clock, Sparkles } from 'lucide-react';
import { TRADE_PRESETS } from '../constants';

const Hero: React.FC = () => {
  const [activeTradeIndex, setActiveTradeIndex] = useState(0);
  const activeTrade = TRADE_PRESETS[activeTradeIndex];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-radial-gradient">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck size={14} />
            <span>Spécialisé BTP Haut Panier Moyen</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>1 seul artisan par secteur géographique</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-brand-dark tracking-tight leading-[1.12]">
            Sécurisez un flux régulier de <br className="hidden sm:inline" />
            <span className="text-brand-blue">chantiers à fort panier moyen</span> <br className="hidden sm:inline" />
            sur votre secteur géographique.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Nous concevons et pilotons votre système publicitaire Meta Ads pour capter des propriétaires vérifiés qui ont un vrai projet et le budget adapté. <strong className="text-slate-900 font-semibold">Zéro mise en concurrence partagée, zéro temps perdu en devis inutiles.</strong>
          </p>

          {/* Primary CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href="#booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-blue hover:bg-brand-blueHover text-white rounded-full font-bold text-sm sm:text-base shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all hover:-translate-y-0.5 active:scale-98"
            >
              <Calendar size={18} />
              <span>Demander un diagnostic de zone</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-full font-bold text-xs sm:text-sm shadow-2xs hover:border-slate-300 transition-colors"
            >
              <MessageCircle size={17} className="text-emerald-600" />
              <span>Discuter avec Aaron</span>
            </a>
          </div>

          {/* 3 Core Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>Demandes 100% exclusives</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>Filtre budget strict anti-curieux</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>Sans engagement contraignant</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Lead Preview Container */}
        <div className="mt-14 max-w-4xl mx-auto">
          
          {/* Trade Switcher Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
            {TRADE_PRESETS.map((trade, idx) => (
              <button
                key={trade.id}
                onClick={() => setActiveTradeIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  activeTradeIndex === idx
                    ? 'bg-brand-dark text-white border-brand-dark shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {trade.name.split('(')[0].trim()}
              </button>
            ))}
          </div>

          {/* Interactive Phone / Card Display */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Dossier Client Qualifié &amp; Transmis
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-dark mt-2">
                  Exemple de fiche reçue directement sur votre téléphone
                </h2>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs text-slate-400 font-medium">Panier moyen estimé</span>
                <p className="text-xl sm:text-2xl font-black text-brand-blue">
                  {activeTrade.defaultTicket.toLocaleString('fr-FR')} €
                </p>
              </div>
            </div>

            {/* Lead Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-1">
                  <User size={14} className="text-brand-blue" />
                  <span>Statut vérifié</span>
                </div>
                <p className="font-bold text-sm text-brand-dark">Propriétaire occupant</p>
                <p className="text-xs text-slate-500">Maison individuelle (Villa)</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-1">
                  <MapPin size={14} className="text-brand-blue" />
                  <span>Localisation</span>
                </div>
                <p className="font-bold text-sm text-brand-dark">Dans votre rayon cible</p>
                <p className="text-xs text-slate-500">À moins de 30 km du siège</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-1">
                  <Euro size={14} className="text-brand-blue" />
                  <span>Budget pré-validé</span>
                </div>
                <p className="font-bold text-sm text-emerald-700 font-mono">
                  &gt; {Math.round(activeTrade.defaultTicket * 0.8 / 1000) * 1000} €
                </p>
                <p className="text-xs text-slate-500">Financement prévu validé</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-1">
                  <Clock size={14} className="text-brand-blue" />
                  <span>Délai d'exécution</span>
                </div>
                <p className="font-bold text-sm text-brand-dark">Prochains 3 à 6 mois</p>
                <p className="text-xs text-slate-500">Prêt pour rendez-vous technique</p>
              </div>

            </div>

            {/* Note bar */}
            <div className="mt-5 p-3.5 rounded-xl bg-brand-blueLight/50 border border-brand-blue/15 flex items-center justify-between gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-brand-blue shrink-0" />
                <span>
                  <strong>Exclusivité totale :</strong> Ce prospect n'est envoyé à aucun autre artisan. Vous êtes le seul professionnel qu'il attend au téléphone.
                </span>
              </div>
              <a
                href="#simulator"
                className="hidden sm:inline-flex items-center gap-1 font-bold text-brand-blue hover:underline shrink-0"
              >
                Calculer vos retours
                <ArrowRight size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
