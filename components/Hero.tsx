import React, { useEffect, useState } from 'react';
import WaterSurface from './WaterSurface';
import AmbientVideo from './AmbientVideo';
import { Check, MessageCircle, Play } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

export const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Si la vidéo de présentation n'est pas encore en ligne, on affiche un cadre propre
  useEffect(() => {
    fetch('/video/triva-presentation.mp4', { method: 'HEAD' })
      .then((r) => { if (!r.ok || !(r.headers.get('content-type') || '').includes('video')) setVideoError(true); })
      .catch(() => setVideoError(true));
  }, []);

  const handlePlayClick = () => {
    const video = document.getElementById('hero-presentation-video') as HTMLVideoElement | null;
    if (video) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const assurances = [
    '1 seul pisciniste par secteur',
    'Budget pub sur votre propre compte',
    'Mise en place remboursée si aucun rendez-vous qualifié en 30 jours',
    'Sans engagement de durée',
  ];

  return (
    <section className="relative isolate pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 bg-encreDeep text-texteSombre overflow-hidden">
      {/* Arrière-plan : eau animée en code, puis vidéo d'ambiance Omni par-dessus si elle existe */}
      <div className="absolute inset-0 -z-10">
        <WaterSurface />
        <AmbientVideo src="/media/hero.mp4" eager className="opacity-60 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-encreDeep via-encreDeep/80 to-encreDeep/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-encreDeep to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline, subtext, actions, assurances (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-bordureSombre bg-encreDeep/70 text-xs sm:text-sm font-semibold text-texteSombre mb-6">
              <span className="w-2 h-2 rounded-full bg-citron animate-pulse" aria-hidden="true" />
              <span>Pour les piscinistes · 1 seul pisciniste par secteur</span>
            </div>

            {/* H1 */}
            <h1 className="text-[40px] sm:text-[48px] lg:text-[72px] xl:text-[80px] font-extrabold text-texteSombre leading-[1.08] tracking-[-0.03em] mb-6">
              Remplissez votre carnet avec des projets de piscine{' '}
              <span className="font-serif italic font-normal text-citron">
                sérieux
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-texteSombreSec leading-relaxed font-normal max-w-2xl mb-8">
              On diffuse vos réalisations sur Facebook et Instagram, à votre nom, auprès des propriétaires de votre secteur. Avant de vous contacter, chacun indique son projet, son budget et son délai. Vous rappelez, vous chiffrez, vous vendez.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#diagnostic"
                data-cta="hero_reserver"
                className="h-14 px-8 rounded-full bg-citron text-encre text-base font-bold flex items-center justify-center tracking-tight hover:bg-white transition-all shadow-md active:scale-98"
              >
                Vérifier si mon secteur est libre
              </a>

              <a
                href={CONTACT_INFO.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero_whatsapp"
                className="h-14 px-7 rounded-full border border-bordureSombre hover:border-citron text-texteSombre hover:text-citron text-sm font-semibold flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageCircle size={18} className="text-citron" />
                <span>Poser une question sur WhatsApp</span>
              </a>
            </div>

            {/* 4 Assurances with citron bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-6 border-t border-bordureSombre">
              {assurances.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-citron text-encre flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-texteSombre leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Video presentation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="glass w-full max-w-xl relative rounded-[24px] overflow-hidden border border-white/15 p-2 aspect-video flex flex-col">
              
              {!videoError ? (
                <div className="relative w-full h-full flex items-center justify-center bg-encreDeep rounded-[18px] overflow-hidden">
                  <video
                    id="hero-presentation-video"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/video/triva-presentation-poster.jpg"
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setVideoError(true)}
                  >
                    <source src="/video/triva-presentation.mp4" type="video/mp4" />
                  </video>

                  {/* Big citron play button overlay when not playing */}
                  {!isPlaying && (
                    <button
                      onClick={handlePlayClick}
                      className="absolute inset-0 flex items-center justify-center bg-encre/40 hover:bg-encre/20 transition-all group focus:outline-none"
                      aria-label="Lancer la vidéo de présentation"
                    >
                      <span className="w-20 h-20 rounded-full bg-citron text-encre flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                        <Play size={32} className="fill-encre ml-1" />
                      </span>
                    </button>
                  )}
                </div>
              ) : (
                /* Fallback frame if video file is missing - pristine artisanal aesthetic */
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center rounded-[18px] bg-encreDeep/60">
                  <div className="p-4 rounded-2xl bg-[#123A4D] border border-bordureSombre mb-4">
                    <Logo />
                  </div>
                  <span className="text-citron text-xs font-bold uppercase tracking-widest mb-2">
                    Présentation Triva Media
                  </span>
                  <p className="text-base font-bold text-texteSombre mb-1">
                    Vidéo à venir
                  </p>
                  <p className="text-xs text-texteSombreSec max-w-xs">
                    Découvrez en 45 secondes le fonctionnement du système pour les piscinistes.
                  </p>
                </div>
              )}

            </div>

            {/* Legend below video */}
            <p className="mt-3.5 text-xs text-texteSombreSec text-center font-medium">
              Comment ça marche, en 45 secondes
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
