import React, { useEffect, useRef } from 'react';
import './problem.css';

/**
 * Le constat : trois douleurs que le pisciniste reconnaît, en lecture rapide.
 * Pas de cartes ni de numéros (ce ne sont pas des étapes) : une liste à filets.
 * Mouvement : le filet se trace et la phrase clé se surligne quand la ligne arrive à l'écran.
 */
const PAINS = [
  {
    key: 'Un mois sous l’eau, puis plus rien.',
    text: 'Le bouche-à-oreille ne se pilote pas : vous ne savez pas ce que vous ferez dans trois mois, et vos gars doivent tourner.',
  },
  {
    key: 'La même demande, revendue à 4 ou 5 piscinistes.',
    text: 'Sur les plateformes, le client compare les prix, et le chantier se perd pour 300 €.',
  },
  {
    key: 'Des devis pour rien.',
    text: 'Des soirées et des samedis à chiffrer pour des gens qui voulaient juste un prix, ou qui feront leur piscine dans trois ans.',
  },
];

export const TheProblem: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>('.pb-item'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((it) => it.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      // la ligne se déclenche quand elle a franchi le bas de l'écran d'un bon cinquième
      { threshold: 0.6, rootMargin: '0px 0px -18% 0px' }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);

  return (
    <section id="constat" className="py-16 lg:py-24 bg-papier text-texteClair">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Titre + une seule photo (ordinateur) : le carnet rempli à moitié */}
          <div className="lg:col-span-5">
            <h2 className="text-balance text-[30px] sm:text-[36px] lg:text-[46px] font-extrabold leading-[1.1] tracking-[-0.03em] text-texteClair">
              <span className="block">Le bouche-à-oreille fait votre réputation.</span>
              <span className="block text-vertProfond">Il ne remplit pas votre carnet.</span>
            </h2>
            <img
              src="/media/constat-carnet.jpg"
              alt="Planning de chantiers au mur, rempli sur quelques semaines puis vide"
              loading="lazy"
              width={900}
              height={672}
              className="hidden lg:block mt-10 w-full aspect-[16/10] object-cover object-left rounded-2xl"
            />
          </div>

          {/* Les trois douleurs, en liste à filets */}
          <div className="lg:col-span-7 lg:pt-2">
            <ul ref={listRef} className="max-w-[640px]">
              {PAINS.map((p) => (
                <li key={p.key} className="pb-item">
                  <div className="pb-rule" aria-hidden="true" />
                  <p className="py-5 lg:py-6 text-base sm:text-lg leading-relaxed text-texteClairSec">
                    <strong className="pb-mark font-bold text-texteClair">{p.key}</strong>{' '}
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-2 lg:mt-4 pt-6 border-t-2 border-vertProfond max-w-[640px] text-lg sm:text-xl font-semibold leading-snug text-texteClair">
              Il vous faut un canal à vous : des propriétaires de votre secteur qui vous contactent, vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
