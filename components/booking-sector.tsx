import React, { useEffect, useRef, useState } from 'react';

/**
 * Visuel « votre secteur se réserve » (section Réservation).
 * SVG dessiné, sans carte ni tuile externe.
 * À l'entrée à l'écran : une onde part de votre entreprise, le cercle du secteur se trace,
 * et les autres piscinistes qui étaient dans le rayon sortent de la zone et s'estompent
 * au moment où le trait passe sur eux. Une seule fois. Par défaut (capture pleine page,
 * moins d'animations demandées, lien direct vers la section) on montre l'état final.
 */

const W = 400;
const H = 300;
const CX = 200;
const CY = 150;
const R = 100; // le rayon du secteur (ex. 35 km)
const TRACE_DELAY = 350; // ms
const TRACE_DUR = 1600; // ms

// Autres piscinistes : dans le rayon (ils vont en sortir) et autour
const INSIDE: [number, number][] = [
  [150, 95], [262, 118], [245, 215], [138, 190], [182, 205],
];
const OUTSIDE: [number, number][] = [
  [48, 62], [120, 28], [292, 32], [356, 54], [378, 162],
  [334, 262], [204, 284], [70, 252], [26, 150],
];

const insideMoves = INSIDE.map(([x, y]) => {
  const dx = x - CX;
  const dy = y - CY;
  const d = Math.hypot(dx, dy);
  const out = R + 20;
  // angle mesuré depuis le haut, dans le sens des aiguilles d'une montre (le trait part du haut)
  let a = (Math.atan2(dx, -dy) * 180) / Math.PI;
  if (a < 0) a += 360;
  // Le trait suit une courbe « sinus » (cubic-bezier(.37,0,.63,1)) : on inverse la courbe
  // pour savoir à quel instant il passe sur ce point.
  const t = Math.acos(1 - 2 * (a / 360)) / Math.PI;
  return {
    x, y,
    tx: (dx / d) * out - dx,
    ty: (dy / d) * out - dy,
    delay: Math.round(TRACE_DELAY + t * TRACE_DUR - 90),
  };
});

export const BookingSector: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  // 'final' : secteur déjà réservé, sans animation (état par défaut : c'est ce que montre
  //           une capture pleine page, ou un visiteur qui demande moins d'animations).
  // 'armed'  : remis à l'état de départ juste avant d'entrer à l'écran (encore invisible).
  // 'play'   : l'animation se joue.
  const [phase, setPhase] = useState<'final' | 'armed' | 'play'>('final');
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // 1. Quand le visuel approche par le bas (encore hors écran, à moins d'un écran), on le remet à zéro.
    const arm = new IntersectionObserver(
      ([e]) => {
        if (phaseRef.current !== 'final') return;
        const below = e.boundingClientRect.top >= window.innerHeight;
        if (e.isIntersecting && below) {
          setPhase('armed');
          arm.disconnect();
        } else if (!below) {
          // Déjà à l'écran ou dépassé (lien direct vers la section) : on garde l'état final.
          arm.disconnect();
        }
      },
      { rootMargin: '0px 0px 100% 0px', threshold: 0 }
    );
    // 2. Quand il est bien visible, on joue. S'il est dépassé sans avoir été vu, état final.
    const play = new IntersectionObserver(
      ([e]) => {
        if (phaseRef.current !== 'armed') return;
        if (e.intersectionRatio >= 0.55) {
          setPhase('play');
          play.disconnect();
        } else if (!e.isIntersecting && e.boundingClientRect.top < 0) {
          setPhase('final'); // on garde l'observateur : un clic sur un lien #diagnostic peut le réarmer
        }
      },
      { threshold: [0, 0.55], rootMargin: '0px 0px -6% 0px' }
    );
    arm.observe(el);
    play.observe(el);

    // 3. Un clic sur « Vérifier si mon secteur est libre » (lien #diagnostic) fait défiler
    //    jusqu'ici : si le visuel est hors écran et n'a jamais été joué, on le prépare.
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as Element | null)?.closest?.('a[href="#diagnostic"]');
      if (!a || phaseRef.current !== 'final') return;
      const r = el.getBoundingClientRect();
      if (r.top >= window.innerHeight || r.bottom <= 0) setPhase('armed');
    };
    document.addEventListener('click', onClick, true);
    return () => { arm.disconnect(); play.disconnect(); document.removeEventListener('click', onClick, true); };
  }, []);

  const stateClass = phase === 'final' ? 'is-on is-still' : phase === 'play' ? 'is-on' : '';

  return (
    <figure className="m-0">
      <div
        ref={ref}
        className={`sector max-w-[330px] sm:max-w-[420px] lg:max-w-none mx-auto ${stateClass}`}
        style={{ ['--trace' as string]: `${TRACE_DUR}ms`, ['--trace-delay' as string]: `${TRACE_DELAY}ms` }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="sector-svg" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="sector-dots" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="1" fill="#7FDCE8" opacity=".22" />
            </pattern>
            <radialGradient id="sector-fade" cx="50%" cy="50%" r="60%">
              <stop offset="55%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="sector-mask">
              <rect width={W} height={H} fill="url(#sector-fade)" />
            </mask>
            <radialGradient id="sector-zone" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3FC6D9" stopOpacity=".26" />
              <stop offset="70%" stopColor="#3FC6D9" stopOpacity=".10" />
              <stop offset="100%" stopColor="#3FC6D9" stopOpacity=".04" />
            </radialGradient>
          </defs>

          {/* Le terrain : une trame de points qui s'efface vers les bords */}
          <rect width={W} height={H} fill="url(#sector-dots)" mask="url(#sector-mask)" />

          {/* La zone qui se remplit une fois réservée */}
          <circle className="sector-zone" cx={CX} cy={CY} r={R} fill="url(#sector-zone)" />

          {/* L'onde de départ, comme une goutte dans l'eau */}
          <circle className="sector-ripple" cx={CX} cy={CY} r={R} fill="none" stroke="#7FDCE8" strokeWidth="1.5" />
          <circle className="sector-ripple sector-ripple-2" cx={CX} cy={CY} r={R} fill="none" stroke="#7FDCE8" strokeWidth="1" />

          {/* Repère discret du rayon avant le tracé */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#A9C1CB" strokeOpacity=".22" strokeWidth="1" strokeDasharray="2 6" />

          {/* Le cercle du secteur, qui se trace depuis le haut */}
          <circle
            className="sector-ring"
            cx={CX} cy={CY} r={R}
            fill="none" stroke="#3FC6D9" strokeWidth="2.5" strokeLinecap="round"
            pathLength={1}
          />

          {/* Le rayon : 35 km */}
          <line className="sector-radius" x1={CX} y1={CY} x2={CX + R} y2={CY} stroke="#3FC6D9" strokeWidth="1.5" strokeDasharray="3 4" />

          {/* Les autres piscinistes */}
          {OUTSIDE.map(([x, y]) => (
            <circle key={`o${x}-${y}`} className="sector-comp sector-comp-out" cx={x} cy={y} r="5" />
          ))}
          {insideMoves.map((m) => (
            <circle
              key={`i${m.x}-${m.y}`}
              className="sector-comp sector-comp-in"
              cx={m.x} cy={m.y} r="5"
              style={{
                ['--tx' as string]: `${m.tx.toFixed(1)}px`,
                ['--ty' as string]: `${m.ty.toFixed(1)}px`,
                ['--d' as string]: `${m.delay}ms`,
              }}
            />
          ))}

          {/* Votre entreprise */}
          <circle className="sector-halo" cx={CX} cy={CY} r="15" fill="#3FC6D9" />
          <circle cx={CX} cy={CY} r="7.5" fill="#3FC6D9" stroke="#F3EEE6" strokeWidth="2.5" />
        </svg>

        {/* Étiquettes en HTML : elles restent lisibles quelle que soit la taille du dessin */}
        <span className="sector-label sector-label-you">Votre entreprise</span>
        <span className="sector-label sector-label-km">35 km</span>
        <span className="sector-label sector-label-tag">Secteur réservé</span>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-texteSombreSec">
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-citron ring-2 ring-texteSombre/80" aria-hidden="true" />
          Votre entreprise
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-texteSombreSec/60" aria-hidden="true" />
          Les autres piscinistes
        </span>
      </figcaption>
    </figure>
  );
};

export default BookingSector;
