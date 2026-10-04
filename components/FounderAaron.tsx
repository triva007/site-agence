import Reveal from './Reveal';
import React, { useState } from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FounderAaron: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const pillars = [
    'Ligne directe WhatsApp avec Aaron',
    'Pas de jargon',
    'Chiffres transparents',
    'Exclusivité respectée'
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo / Avatar fallback (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blanc shadow-xl bg-encre flex items-center justify-center relative mb-5">
              {!imgError ? (
                <img
                  src="/images/aaron.jpg"
                  alt="Aaron, fondateur de Triva Media"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback circular initials */
                <div className="w-full h-full bg-encre flex items-center justify-center">
                  <span className="font-serif italic text-7xl font-bold text-citron select-none">
                    A
                  </span>
                </div>
              )}
            </div>

            {/* Founder details & WhatsApp */}
            <div className="text-center sm:text-left space-y-1">
              <p className="text-lg font-extrabold text-texteClair tracking-tight">
                Aaron
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-vertProfond mb-3">
                Fondateur de Triva Media
              </p>
              
              <div className="flex flex-col gap-1.5 pt-2 text-sm text-texteClairSec">
                <a
                  href={CONTACT_INFO.whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="founder_whatsapp"
                  className="inline-flex items-center gap-2 font-bold text-texteClair hover:text-vertProfond transition-colors"
                >
                  <MessageCircle size={16} className="text-vertProfond" />
                  <span>07 67 05 60 66 (WhatsApp direct)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Founder's letter and commitments (8 cols) */}
          <div className="lg:col-span-8">
            
            <span className="text-xs font-bold uppercase tracking-widest text-vertProfond mb-3 inline-block">
              Le fondateur
            </span>

            <h2 className="text-[32px] sm:text-[36px] lg:text-[52px] font-extrabold text-texteClair leading-[1.12] tracking-[-0.03em] mb-6">
              Un seul interlocuteur :{' '}
              <span className="font-serif italic font-normal text-vertProfond">
                moi
              </span>
              .
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-texteClairSec leading-relaxed mb-8">
              <p>
                Votre temps est sur les chantiers : les équipes, les livraisons, les finitions. Vous n'avez ni le temps ni l'envie de gérer des publicités, ni de parler à trois chefs de projet différents.
              </p>
              <p>
                Je travaille avec un petit nombre de piscinistes, un par secteur. Je rédige, je lance et je surveille chaque campagne moi-même. Quand vous m'écrivez, c'est moi qui réponds.
              </p>
              <p className="font-semibold text-texteClair">
                Je ne vous promettrai pas de chantiers signés : ça, c'est votre métier. Je m'engage sur des demandes sérieuses, sur un suivi chaque semaine et sur des chiffres clairs.
              </p>
            </div>

            {/* 4 Pillars with checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-bordureClair">
              {pillars.map((pillar, i) => (
                <Reveal as="div" key={pillar} delay={i * 80} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-vertProfond text-blanc flex items-center justify-center shrink-0" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base font-bold text-texteClair">
                    {pillar}
                  </span>
                </Reveal>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderAaron;
