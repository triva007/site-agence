import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const MobileStickyBar: React.FC = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-encreDeep/95 backdrop-blur-md border-t border-bordureSombre px-4 py-2.5 flex items-center gap-2.5 shadow-2xl"
      role="region"
      aria-label="Actions rapides mobiles"
    >
      {/* Réserver 30 min Button */}
      <a
        href="#diagnostic"
        data-cta="mobile_bottom_reserver"
        className="flex-1 h-14 bg-citron text-encre rounded-full font-bold text-sm flex items-center justify-center gap-2 tracking-tight active:scale-98 shadow-md"
      >
        <Calendar size={17} className="text-encre" />
        <span>Réserver 30 min</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={CONTACT_INFO.whatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="mobile_bottom_whatsapp"
        aria-label="Poser une question à Aaron sur WhatsApp"
        className="w-14 h-14 rounded-full border border-bordureSombre bg-encre flex items-center justify-center text-citron shrink-0 active:scale-95"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
};

export default MobileStickyBar;
