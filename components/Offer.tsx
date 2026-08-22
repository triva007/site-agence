import React from 'react';
import { ShieldCheck, Check, Sparkles, Calendar, MessageCircle, ArrowRight, Zap, RefreshCw, PhoneForwarded } from 'lucide-react';

const Offer: React.FC = () => {
  const FEATURES = [
    {
      title: "Gestion complète de vos campagnes Meta Ads",
      desc: "Création technique, paramétrage du compte publicitaire, rédaction des textes, sélection des angles et veille permanente."
    },
    {
      title: "Exclusivité totale sur votre zone géographique",
      desc: "Aucun autre artisan de votre métier n'est accepté sur votre secteur d'intervention (rayon défini ensemble)."
    },
    {
      title: "Filtre de qualification sur-mesure",
      desc: "Formulaire anti-curieux paramétré selon votre panier moyen minimum, le statut de propriétaire et le délai souhaité."
    },
    {
      title: "Transmission instantanée sur votre smartphone",
      desc: "Réception immédiate des coordonnées complètes et des réponses du prospect par WhatsApp ou e-mail dès soumission."
    },
    {
      title: "Optimisations & A/B testing continus",
      desc: "Renouvellement régulier des visuels et des annonces pour éviter la fatigue publicitaire et maintenir un flux stable."
    },
    {
      title: "Ligne directe et réactivité avec Aaron",
      desc: "Aucun intermédiaire, aucun ticket de support impersonnel : vous échangez directement avec le fondateur."
    }
  ];

  return (
    <section id="offer" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Blue gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Offre Partenaire Clé en Main</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight mb-5">
            Une formule transparente, sans engagement contraignant
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tout est inclus pour vous permettre de vous concentrer à 100% sur vos chantiers et la satisfaction de vos clients.
          </p>
        </div>

        {/* Offer Container Card */}
        <div className="bg-slate-800/90 border border-slate-700/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Included features (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                  Accompagnement Tout-Inclus
                </span>
                <span className="text-xs text-slate-400">
                  Pensé spécifiquement pour le BTP haut panier
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                Votre département acquisition externalisé
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {FEATURES.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Guarantee & Action Box (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  <ShieldCheck size={16} />
                  <span>Nos Engagements Clairs</span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Zéro engagement 12 mois :</strong> la relation se poursuit parce qu'elle est rentable, pas parce qu'un contrat vous y oblige.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Contrôle de votre budget :</strong> vous payez le budget publicitaire directement à Meta, en totale transparence.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>1 seul artisan par secteur :</strong> nous verrouillons votre zone dès le lancement.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blueHover text-white rounded-full font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
                >
                  <Calendar size={15} />
                  <span>Réserver mon créneau d'échange</span>
                </a>

                <a
                  href="https://wa.me/33767056066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <MessageCircle size={15} className="text-emerald-400" />
                  <span>Poser une question sur WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Offer;
