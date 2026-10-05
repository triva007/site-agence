import React, { useEffect, useState } from 'react';
import WaterSurface from './WaterSurface';
import AmbientVideo from './AmbientVideo';
import { MessageCircle, Play } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import './hero-motion.css';

// Titre découpé en mots pour la montée au chargement (l'ordre donne le délai)
const TITLE_WORDS = ['Des', 'propriétaires', 'de', 'votre', 'secteur', 'qui', 'veulent', 'une', 'piscine', 'et', 'contactent'];

const GARANTIES = [
  'Un seul pisciniste par secteur',
  'Sans engagement de durée',
  'Aucun rendez-vous qualifié et tenu en 30 jours : mise en place remboursée',
];

const CheckMark: React.FC = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className="shrink-0 mt-[3px] text-citron">
    <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

  return (
    <section className="relative isolate pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-20 bg-encreDeep text-texteSombre overflow-hidden">
      {/* Arrière-plan : eau animée en code, puis vidéo d'ambiance par-dessus si elle existe */}
      <div className="absolute inset-0 -z-10">
        <WaterSurface />
        {/* Ordinateur : vidéo horizontale ; téléphone : vidéo verticale */}
        <div className="absolute inset-0 hidden lg:block">
          <img src="/media/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <AmbientVideo src="/media/hero.mp4" className="opacity-55" />
        </div>
        <div className="absolute inset-0 lg:hidden">
          <img src="/media/hero-mobile.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <AmbientVideo src="/media/hero-mobile.mp4" className="opacity-50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-encreDeep/90 via-encreDeep/75 to-encreDeep/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-encreDeep to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Promesse, accroche, boutons, garanties */}
          <div className="lg:col-span-7 flex flex-col items-start">

            <h1 className="text-[31px] min-[375px]:text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[66px] font-extrabold text-texteSombre leading-[1.06] tracking-[-0.03em]">
              {TITLE_WORDS.map((w, i) => (
                <React.Fragment key={i}>
                  <span className="hero-w" style={{ '--i': i } as React.CSSProperties}>{w}</span>{' '}
                </React.Fragment>
              ))}
              <span className="hero-w font-serif italic font-normal text-citron" style={{ '--i': 11 } as React.CSSProperties}>votre</span>{' '}
              <span className="hero-w" style={{ '--i': 12 } as React.CSSProperties}>
                <span className="font-serif italic font-normal text-citron">entreprise</span>.
              </span>
            </h1>

            <p
              className="hero-in mt-4 sm:mt-6 text-[16.5px] sm:text-lg lg:text-[19px] text-texteSombreSec leading-[1.55] max-w-[34rem]"
              style={{ '--d': '230ms' } as React.CSSProperties}
            >
              On diffuse vos réalisations sur Facebook et Instagram, à votre nom, auprès des propriétaires de votre secteur. Avant de vous contacter, chacun indique son projet, son budget et son délai.
            </p>

            <div
              className="hero-in mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto"
              style={{ '--d': '340ms' } as React.CSSProperties}
            >
              <a
                href="#diagnostic"
                data-cta="hero_reserver"
                className="btn-shine h-14 px-8 rounded-full bg-citron text-encre text-base font-bold whitespace-nowrap flex items-center justify-center tracking-tight hover:bg-white transition-colors shadow-md"
              >
                Vérifier si mon secteur est libre
              </a>

              <a
                href={CONTACT_INFO.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero_whatsapp"
                className="h-14 px-5 sm:px-7 rounded-full border border-white/20 bg-encreDeep/40 hover:border-citron text-texteSombre hover:text-citron text-[14.5px] sm:text-[15px] font-semibold whitespace-nowrap flex items-center justify-center gap-2.5 transition-colors"
              >
                <MessageCircle size={18} className="text-citron" aria-hidden="true" />
                <span>Poser une question sur WhatsApp</span>
              </a>
            </div>

            <p
              className="hero-in mt-3 text-[13.5px] sm:text-sm text-texteSombreSec"
              style={{ '--d': '380ms' } as React.CSSProperties}
            >
              Appel de 30 minutes, gratuit. Les prix vous sont donnés pendant l'appel.
            </p>

            {/* Trois garanties, en liste simple */}
            <ul
              className="hero-in mt-7 sm:mt-9 w-full max-w-[38rem] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 pt-5 border-t border-white/10"
              style={{ '--d': '430ms' } as React.CSSProperties}
            >
              {GARANTIES.map((g, i) => (
                <li key={g} className={`flex items-start gap-2 text-[14px] leading-snug text-texteSombre/90 ${i === 2 ? 'sm:col-span-2' : ''}`}>
                  <CheckMark />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vidéo de présentation */}
          <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end">
            <div className="hero-land w-full max-w-xl">
              <div className="glass relative w-full rounded-[20px] overflow-hidden border border-white/15 p-1 sm:p-1.5">

                {!videoError ? (
                  <div className="relative w-full aspect-video bg-encreDeep rounded-[15px] overflow-hidden">
                    <video
                      id="hero-presentation-video"
                      controls
                      playsInline
                      preload="metadata"
                      poster="/video/triva-presentation-poster.jpg"
                      className="absolute inset-0 w-full h-full object-contain"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onError={() => setVideoError(true)}
                    >
                      <source src="/video/triva-presentation.mp4" type="video/mp4" />
                    </video>

                    {/* Bouton de lecture tant que la vidéo n'a pas démarré */}
                    {!isPlaying && (
                      <button
                        onClick={handlePlayClick}
                        className="absolute inset-0 flex items-center justify-center bg-encre/25 hover:bg-encre/10 transition-colors group focus:outline-none"
                        aria-label="Lancer la vidéo de présentation"
                      >
                        <span className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-citron text-encre flex items-center justify-center shadow-xl transition-transform group-hover:scale-105">
                          <Play size={28} className="fill-encre ml-1" />
                        </span>
                      </button>
                    )}
                  </div>
                ) : (
                  /* Vidéo indisponible : exemple de publicité diffusée au nom du pisciniste, même cadre */
                  <div className="relative w-full aspect-video rounded-[15px] overflow-hidden bg-white">
                    <img
                      src="/media/realisation-pub.jpg"
                      alt="Exemple de visuel de publicité pour un pisciniste"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute left-2.5 top-2.5 flex items-center gap-2 rounded-xl bg-white/95 pl-1.5 pr-3 py-1.5 text-[#1c2b33] shadow-sm">
                      <span className="w-7 h-7 rounded-full bg-encre text-citron grid place-items-center text-[11px] font-extrabold">VE</span>
                      <span className="leading-tight">
                        <span className="block text-[12.5px] font-bold">Votre entreprise de piscines</span>
                        <span className="block text-[11px] text-[#6b7a82]">Sponsorisé</span>
                      </span>
                    </div>
                    <span className="absolute right-2.5 bottom-2.5 rounded-lg bg-encre text-citron text-[12.5px] font-bold px-3 py-2">
                      Décrire mon projet
                    </span>
                  </div>
                )}
              </div>
            </div>

            <p className="hero-in mt-3 text-[13.5px] text-texteSombreSec text-center lg:text-right w-full max-w-xl" style={{ '--d': '700ms' } as React.CSSProperties}>
              {videoError ? 'Exemple de publicité diffusée à votre nom' : 'Triva Media expliqué en 40 secondes'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
