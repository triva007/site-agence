import React, { useEffect, useRef, useState } from 'react';

/**
 * Vidéo d'ambiance en boucle (muette). Elle n'apparaît qu'une fois prête ;
 * si le fichier est absent, rien ne s'affiche et l'arrière-plan prévu reste visible.
 * Chargée seulement à l'approche de l'écran, mise en pause hors écran.
 */
type Props = { src: string; className?: string; eager?: boolean };

const AmbientVideo: React.FC<Props> = ({ src, className = '', eager = false }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [load, setLoad] = useState(eager);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true);
          if (!reduced) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: '300px 0px' }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  if (failed) return null;

  return (
    <video
      ref={ref}
      className={`ambient-video absolute inset-0 h-full w-full object-cover ${ready ? 'is-ready' : ''} ${className}`}
      src={load ? src : undefined}
      muted
      loop
      playsInline
      autoPlay
      preload={eager ? 'auto' : 'none'}
      aria-hidden="true"
      onCanPlay={() => setReady(true)}
      onError={() => setFailed(true)}
    />
  );
};

export default AmbientVideo;
