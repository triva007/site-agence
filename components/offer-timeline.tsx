import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import './offer.css';

/**
 * La frise du mois test : ce qui se passe, et ce que vous payez, du lancement au jour 30.
 * Le trait se remplit au défilement (vertical sur téléphone, horizontal sur ordinateur),
 * chaque étape s'allume quand il l'atteint, la garantie s'allume au bout.
 * prefers-reduced-motion : tout est affiché allumé, sans mouvement.
 */
const STEPS = [
  {
    when: 'Avant le lancement',
    title: 'On fixe vos critères ensemble et on prépare vos publicités.',
    payLabel: 'La mise en place',
    pay: 'payée une seule fois.',
  },
  {
    when: 'Jour 1',
    title: 'Vos publicités tournent, uniquement dans votre zone.',
    payLabel: 'Le budget pub',
    pay: 'payé à Meta, avec votre carte.',
  },
  {
    when: 'Jours 1 à 30',
    title: 'Les demandes arrivent. On fait le point chaque semaine.',
    payLabel: 'Les rendez-vous',
    pay: 'facturés seulement s’ils sont qualifiés et tenus.',
  },
];

const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export const OfferTimeline: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const track = root.querySelector<HTMLElement>('.ofr-track')!;
    const fill = root.querySelector<HTMLElement>('.ofr-fill')!;
    const tip = root.querySelector<HTMLElement>('.ofr-tip')!;
    const items = Array.from(root.querySelectorAll<HTMLElement>('.ofr-item'));
    const dots = items.map((it) => it.querySelector<HTMLElement>('.ofr-dot')!);
    const desktopMq = window.matchMedia('(min-width: 1024px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let horizontal = desktopMq.matches;
    let start = 0;      // centre du premier point, le long de l'axe (px, relatif à la frise)
    let len = 1;        // distance entre le premier et le dernier point
    let marks: number[] = [];
    let shown = 0;      // progression affichée (lissée)
    let target = 0;     // progression visée (défilement)
    let raf = 0;
    let near = false;
    const on: boolean[] = items.map(() => false);

    const layout = () => {
      horizontal = desktopMq.matches;
      const r = root.getBoundingClientRect();
      const centers = dots.map((d) => {
        const b = d.getBoundingClientRect();
        return horizontal ? { a: b.left + b.width / 2 - r.left, c: b.top + b.height / 2 - r.top }
                          : { a: b.top + b.height / 2 - r.top, c: b.left + b.width / 2 - r.left };
      });
      start = centers[0].a;
      len = Math.max(1, centers[centers.length - 1].a - start);
      marks = centers.map((p) => (p.a - start) / len);
      const cross = centers[0].c;
      const s = track.style;
      if (horizontal) {
        s.left = `${start}px`; s.width = `${len}px`; s.top = `${cross - 1}px`; s.height = '2px';
      } else {
        s.top = `${start}px`; s.height = `${len}px`; s.left = `${cross - 1}px`; s.width = '2px';
      }
    };

    const paint = (p: number) => {
      fill.style.transform = horizontal ? `scaleX(${p})` : `scaleY(${p})`;
      const d = p * len;
      tip.style.transform = horizontal ? `translate3d(${d}px,0,0)` : `translate3d(0,${d}px,0)`;
      root.classList.toggle('is-moving', p > 0.002 && p < 0.998);
      items.forEach((it, i) => {
        const lit = p > 0.002 && p >= marks[i] - 0.004;
        if (lit !== on[i]) { on[i] = lit; it.classList.toggle('is-on', lit); }
      });
    };

    const measure = () => {
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      // Ordinateur : la frise se remplit entre le moment où elle entre (90 % de l’écran)
      // et celui où elle est entièrement visible (54 %). Téléphone : le trait suit une ligne de lecture à 66 %.
      target = horizontal
        ? clamp((vh * 0.9 - r.top) / (vh * 0.36))
        : clamp((vh * 0.66 - (r.top + start)) / len);
    };

    const tick = () => {
      raf = 0;
      measure();
      shown += (target - shown) * 0.16;
      if (Math.abs(target - shown) < 0.0015) shown = target;
      paint(shown);
      if (shown !== target) raf = requestAnimationFrame(tick);
    };
    const kick = () => { if (near && !raf) raf = requestAnimationFrame(tick); };

    layout();

    if (reduce) {
      paint(1);
      const onResize = () => { layout(); paint(1); };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    measure(); shown = target; paint(shown);

    const io = new IntersectionObserver(([e]) => { near = e.isIntersecting; kick(); }, { rootMargin: '25% 0px 25% 0px' });
    io.observe(root);
    const ro = new ResizeObserver(() => { layout(); measure(); paint(shown); kick(); });
    ro.observe(root);
    window.addEventListener('scroll', kick, { passive: true });
    const onMq = () => { layout(); kick(); };
    desktopMq.addEventListener?.('change', onMq);

    return () => {
      io.disconnect(); ro.disconnect();
      window.removeEventListener('scroll', kick);
      desktopMq.removeEventListener?.('change', onMq);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="ofr">
      <div className="ofr-track" aria-hidden="true">
        <div className="ofr-fill" />
        <div className="ofr-tip" />
      </div>

      <ol className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1fr_1fr_1.55fr] lg:gap-8">

      {STEPS.map((s) => (
        <li key={s.when} className="ofr-item relative pl-9 lg:pl-0">
          <span className="ofr-dot block absolute left-0 top-[1px] lg:static lg:mb-6" aria-hidden="true" />
          <p className="ofr-when text-sm font-semibold leading-5">{s.when}</p>
          <h3 className="mt-1 text-[17px] sm:text-lg font-bold leading-snug text-texteClair">{s.title}</h3>
          <p className="mt-3 pt-2.5 border-t border-dashed border-[#CDBFA9] text-[15px] sm:text-base leading-snug text-texteClairSec">
            <span className="font-semibold text-vertProfond">{s.payLabel}</span> : {s.pay}
          </p>
        </li>
      ))}

      <li className="ofr-item relative pl-9 lg:pl-0">
        <span className="ofr-dot block absolute left-0 top-[21px] lg:static lg:mb-6" aria-hidden="true" />
        <div className="ofr-card bg-encre text-texteSombre rounded-2xl p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold leading-5 text-citron">Jour 30</p>
              <h3 className="mt-1 text-[17px] sm:text-lg font-bold leading-snug">
                Le bilan : demandes, appels, devis en cours.
              </h3>
            </div>
            <span className="ofr-shield w-9 h-9 rounded-full bg-citron text-encre grid place-items-center shrink-0" aria-hidden="true">
              <ShieldCheck size={20} strokeWidth={2.4} />
            </span>
          </div>
          <p className="mt-3 pt-3 border-t border-dashed border-citron/30 text-base leading-snug text-texteSombre">
            <strong className="font-bold text-citron">Aucun rendez-vous qualifié et tenu en 30 jours de diffusion ?</strong>{' '}
            La mise en place vous est remboursée.
          </p>
          <p className="mt-2 text-sm leading-snug text-texteSombreSec">Le budget Meta n’est pas concerné.</p>
        </div>
      </li>
      </ol>
    </div>
  );
};

export default OfferTimeline;
