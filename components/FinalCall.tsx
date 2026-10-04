import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FinalCall: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-encre text-texteSombre bg-grid-citron relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* H2 */}
        <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold text-texteSombre leading-[1.08] tracking-[-0.03em] mb-6 max-w-3xl mx-auto">
          Votre secteur n'est réservé qu'à{' '}
          <span className="font-serif italic font-normal text-citron">
            un seul
          </span>
          {' '}pisciniste.
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-texteSombreSec leading-relaxed max-w-2xl mx-auto mb-10">
          Prenez 30 minutes pour vérifier s'il est encore libre. Sans engagement.
        </p>

        {/* Actions buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#diagnostic"
            data-cta="final_reserver"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-citron text-encre text-base font-bold flex items-center justify-center gap-2 tracking-tight hover:bg-white transition-all shadow-lg active:scale-98"
          >
            <Calendar size={18} />
            <span>Réserver mon diagnostic (30 min)</span>
          </a>

          <a
            href={CONTACT_INFO.whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="final_whatsapp"
            className="w-full sm:w-auto h-14 px-7 rounded-full border border-bordureSombre hover:border-citron text-texteSombre hover:text-citron text-sm font-semibold flex items-center justify-center gap-2.5 transition-all"
          >
            <MessageCircle size={18} className="text-citron" />
            <span>Écrire sur WhatsApp</span>
          </a>
        </div>

        {/* Reassurance line */}
        <p className="text-xs sm:text-sm text-texteSombreSec font-medium max-w-xl mx-auto">
          1 pisciniste par secteur · Budget pub sur votre compte · Garantie 30 jours · Sans engagement de durée
        </p>

      </div>
    </section>
  );
};

export default FinalCall;
