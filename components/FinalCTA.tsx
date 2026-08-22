import React from 'react';
import { Calendar, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
      
      {/* Blue background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck size={14} className="text-brand-blue" />
          <span>Exclusivité Territoriale Limitée</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
          Prêt à sécuriser votre carnet de chantiers sur votre secteur ?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Ne laissez pas vos concurrents verrouiller votre zone d'intervention. Échangeons 30 minutes pour vérifier la faisabilité et le potentiel de votre secteur géographique.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-blue hover:bg-brand-blueHover text-white rounded-full font-bold text-base shadow-xl shadow-brand-blue/30 transition-all hover:-translate-y-0.5 active:scale-98"
          >
            <Calendar size={18} />
            <span>Réserver mon diagnostic (30 min)</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="https://wa.me/33767056066"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-bold text-sm transition-colors"
          >
            <MessageCircle size={18} className="text-emerald-400" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          🔒 1 seul artisan par zone géographique et par spécialité · Sans engagement 12 mois
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;
