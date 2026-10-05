import React, { useCallback, useEffect, useRef, useState } from 'react';
import HowItWorksDemande from './howitworks-demande';
import './howitworks-motion.css';

type Step = 1 | 2 | 3 | 4;
type Mode = 'desk' | 'mob' | 'static';

const STEPS = [
  {
    title: 'Vos réalisations, à votre nom',
    text: 'Des publicités avec vos photos de chantiers et le nom de votre entreprise, diffusées sur Facebook et Instagram uniquement dans la zone où vous travaillez.',
  },
  {
    title: '4 questions avant de vous contacter',
    text: 'Où se situe le projet, quel type de piscine, quel budget, pour quand. La plupart des projets hors de vos critères sont écartés avant de vous parvenir.',
  },
  {
    title: 'La demande arrive sur votre téléphone',
    text: 'Vous recevez les coordonnées et les réponses du propriétaire. Il a fait la démarche : il attend votre appel.',
  },
  {
    title: 'Vous rappelez, vous vendez',
    text: 'Vous rappelez sous 48 h, vous faites la visite et le devis. Chaque semaine, on fait le point avec vous sur les demandes, et on ajuste.',
  },
];

// Téléphone : durée d'affichage de chaque état pendant la lecture automatique (ms)
const HOLD = [1500, 2500, 2000];

const getMode = (): Mode => {
  if (typeof window === 'undefined') return 'mob';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'static';
  return window.matchMedia('(min-width: 1024px)').matches ? 'desk' : 'mob';
};

export const HowItWorks: React.FC = () => {
  const [mode, setMode] = useState<Mode>(getMode);
  const [step, setStep] = useState<Step>(() => (getMode() === 'static' ? 4 : 1));
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');

  const stageRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const timers = useRef<number[]>([]);

  const clearTimers = () => { timers.current.forEach((t) => window.clearTimeout(t)); timers.current = []; };

  // Lecture automatique (téléphone) : pub, questions, notification, appel réservé
  const play = useCallback(() => {
    clearTimers();
    setStep(1);
    setPhase('playing');
    let at = 0;
    ([2, 3, 4] as Step[]).forEach((s, i) => {
      at += HOLD[i];
      timers.current.push(window.setTimeout(() => {
        setStep(s);
        if (s === 4) setPhase('done');
      }, at));
    });
  }, []);

  // Suivre les changements de largeur ou de préférence d'animation
  useEffect(() => {
    const mqs = [window.matchMedia('(min-width: 1024px)'), window.matchMedia('(prefers-reduced-motion: reduce)')];
    const onChange = () => {
      const m = getMode();
      clearTimers();
      setMode(m);
      setPhase(m === 'mob' ? 'idle' : 'done');
      setStep(m === 'static' ? 4 : 1);
    };
    mqs.forEach((mq) => mq.addEventListener('change', onChange));
    return () => { mqs.forEach((mq) => mq.removeEventListener('change', onChange)); clearTimers(); };
  }, []);

  // Ordinateur : l'étape dont le haut a passé 60 % de la hauteur d'écran est l'étape active.
  // L'objet reste collé à droite (position: sticky). Si un parent empêche le sticky
  // (ex. overflow sur <body>), on le fait suivre par translation, calculée au défilement.
  useEffect(() => {
    if (mode !== 'desk') return;
    const stage = stageRef.current;
    const inner = innerRef.current;
    let follow = false;
    if (stage && inner) {
      for (let el = stage.parentElement; el && el !== document.documentElement; el = el.parentElement) {
        const oy = getComputedStyle(el).overflowY;
        if (oy !== 'visible' && oy !== 'clip') { follow = true; break; }
      }
      inner.classList.toggle('is-follow', follow);
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const line = vh * 0.6;
      let active: Step = 1;
      stepRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < line) active = (i + 1) as Step;
      });
      setStep(active);
      if (follow && stage && inner) {
        const top = Math.max(100, vh / 2 - 256);
        const r = stage.getBoundingClientRect();
        const max = Math.max(0, r.height - inner.offsetHeight);
        const y = Math.min(max, Math.max(0, top - r.top));
        inner.style.transform = `translate3d(0, ${Math.round(y)}px, 0)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (inner) { inner.style.transform = ''; inner.classList.remove('is-follow'); }
    };
  }, [mode]);

  // Téléphone : la séquence se joue une fois, quand l'objet est bien visible
  useEffect(() => {
    if (mode !== 'mob' || phase !== 'idle') return;
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { io.disconnect(); play(); } },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode, phase, play]);

  const pick = (s: Step) => { clearTimers(); setPhase('done'); setStep(s); };

  return (
    <section id="comment-ca-marche" className="relative py-14 sm:py-20 lg:py-24 bg-encre text-texteSombre bg-grid-citron overflow-x-clip">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="hw-grid">

          <h2 className="hw-head text-[31px] sm:text-[38px] lg:text-[46px] font-extrabold leading-[1.1] tracking-[-0.03em] text-texteSombre max-w-[18ch]">
            Comment une demande arrive sur votre téléphone.
          </h2>

          {/* L'objet : la demande qui se construit */}
          <div className="hw-stage mt-7 lg:mt-0" ref={stageRef}>
            <div className="hw-stage-inner" ref={innerRef}>
              <HowItWorksDemande step={step} />

              {/* Téléphone : où en est la séquence, et revoir */}
              {mode === 'mob' && (
                <div className="mx-auto mt-2.5 w-full max-w-[304px]">
                  <div className="flex gap-1.5">
                    {([1, 2, 3, 4] as Step[]).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => pick(s)}
                        aria-label={`Voir l'étape ${s} : ${STEPS[s - 1].title}`}
                        className={`hw-seg ${phase !== 'idle' && s < step ? 'is-past' : ''} ${phase !== 'idle' && s === step ? 'is-now' : ''} ${phase === 'done' || s === 4 ? 'is-still' : ''}`}
                        style={{ '--hw-dur': `${HOLD[Math.min(step, 3) - 1]}ms` } as React.CSSProperties}
                      >
                        <span />
                      </button>
                    ))}
                  </div>
                  <div className="mt-0.5 flex items-start justify-between gap-3 text-[13.5px] leading-snug">
                    <p className="hw-caption text-texteSombre" aria-live="polite">
                      <span className="font-bold text-citron">{step}.</span> {STEPS[step - 1].title}
                    </p>
                    {phase === 'done' ? (
                      <button type="button" onClick={play} className="shrink-0 font-semibold text-citron underline underline-offset-4 decoration-citron/40">
                        Revoir
                      </button>
                    ) : null}
                  </div>
                </div>
              )}

              <p className={`mt-2 text-[13px] text-texteSombreSec ${mode === 'mob' ? 'mx-auto max-w-[304px]' : 'text-center'}`}>
                Exemple illustratif
              </p>
            </div>
          </div>

          {/* Les 4 étapes */}
          <div className={`hw-list hw-steps mt-9 lg:mt-14 ${mode === 'desk' ? 'is-sync' : ''}`}>
            <ol>
            {STEPS.map((s, i) => {
              const n = (i + 1) as Step;
              const reached = mode === 'static' || n <= step;
              const active = mode !== 'static' && n === step;
              const passed = mode === 'static' || n < step;
              return (
                <li
                  key={s.title}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className={`hw-step ${reached ? 'is-reached' : ''} ${active ? 'is-active' : ''} ${passed ? 'is-passed' : ''} ${i < STEPS.length - 1 ? 'pb-6 lg:pb-0' : ''}`}
                  aria-current={active ? 'step' : undefined}
                >
                  <span className="hw-num" aria-hidden="true">{n}</span>
                  <div className="pt-1 max-w-[34rem]">
                    <h3 className="text-[18.5px] sm:text-[21px] lg:text-[24px] font-bold tracking-tight leading-snug text-texteSombre">
                      <span className="sr-only">Étape {n} : </span>{s.title}
                    </h3>
                    <p className="mt-1.5 text-[16px] lg:text-[17px] leading-relaxed text-texteSombreSec">
                      {s.text}
                    </p>
                  </div>
                </li>
              );
            })}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
