import React, { useCallback, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, CONTACT_INFO } from '../constants';
import './faq.css';

// Espace insécable avant « ? » et « : » : la ponctuation ne part jamais seule à la ligne
const nbsp = (t: string) => t.replace(/ ([?:!;])/g, '\u00a0$1');

/**
 * Section 6 : les questions (#faq, fond papier).
 * Une seule question ouverte à la fois. L'ouverture est fluide (hauteur en grille 0fr -> 1fr),
 * et la question touchée reste à sa place à l'écran pendant que l'autre se referme :
 * pas de saut de page sur téléphone.
 */

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const rafRef = useRef<number>(0);

  const toggle = useCallback((id: string, btn: HTMLButtonElement) => {
    const before = btn.getBoundingClientRect().top;
    setOpenId((cur) => (cur === id ? null : id));

    // Garde la question touchée immobile pendant la transition (≈ 450 ms).
    // La page défile en « smooth » (classe scroll-smooth sur <html>) : on le coupe le temps
    // de la compensation, sinon chaque correction serait elle-même animée et en retard.
    cancelAnimationFrame(rafRef.current);
    const html = document.documentElement;
    html.style.scrollBehavior = 'auto';
    const start = performance.now();
    const hold = () => {
      const delta = btn.getBoundingClientRect().top - before;
      if (Math.abs(delta) > 0.5) window.scrollBy(0, delta);
      if (performance.now() - start < 560) {
        rafRef.current = requestAnimationFrame(hold);
      } else {
        html.style.scrollBehavior = ''; // retour au comportement de la page
      }
    };
    rafRef.current = requestAnimationFrame(hold);
  }, []);

  return (
    <section id="faq" className="faq-section py-16 lg:py-24 bg-papier text-texteClair">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

        {/* Titre + question libre */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.08] tracking-[-0.03em] text-texteClair">
            Les questions que vous vous posez.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-texteClairSec leading-relaxed max-w-[34ch]">
            Réponses courtes. Les prix exacts, on vous les donne par écrit pendant l'appel.
          </p>

          <div className="hidden lg:block mt-8 pt-6 border-t border-bordureClair">
            <p className="text-base font-bold text-texteClair">Une autre question&nbsp;?</p>
            <p className="text-sm text-texteClairSec mt-1 mb-4">On vous répond directement sur WhatsApp.</p>
            <a
              href={CONTACT_INFO.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="faq_whatsapp"
              className="h-12 px-6 rounded-full bg-encre text-texteSombre text-sm font-bold inline-flex items-center justify-center gap-2 hover:bg-vertProfond transition-colors"
            >
              <MessageCircle size={16} className="text-citron" />
              Poser ma question
            </a>
          </div>
        </div>

        {/* Accordéon */}
        <div className="lg:col-span-8">
          <ul className="faq-list border-t border-bordureClair">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <li key={item.id} className={`faq-item border-b border-bordureClair ${isOpen ? 'is-open' : ''}`}>
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={`faq-q-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${item.id}`}
                      onClick={(e) => toggle(item.id, e.currentTarget)}
                      className="faq-q w-full text-left py-4 sm:py-5 lg:py-4 flex items-center justify-between gap-4"
                    >
                      <span className="text-[16px] sm:text-lg font-bold leading-snug tracking-tight text-texteClair">
                        {nbsp(item.question)}
                      </span>
                      <span className="faq-icon" aria-hidden="true">
                        <span className="faq-icon-h" />
                        <span className="faq-icon-v" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-q-${item.id}`}
                    aria-hidden={!isOpen}
                    className="faq-a"
                  >
                    <div className="faq-a-inner">
                      <p className="faq-a-text pb-5 pr-2 sm:pr-14 text-[15px] sm:text-base text-texteClairSec leading-relaxed max-w-[62ch]">
                        {nbsp(item.answer)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Question libre, version téléphone */}
          <div className="lg:hidden mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-base text-texteClair">
              <span className="font-bold">Une autre question&nbsp;?</span>{' '}
              <span className="text-texteClairSec">On vous répond directement sur WhatsApp.</span>
            </p>
            <a
              href={CONTACT_INFO.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="faq_whatsapp"
              className="h-12 px-6 rounded-full bg-encre text-texteSombre text-sm font-bold inline-flex items-center justify-center gap-2 shrink-0 active:scale-[.98] transition-transform"
            >
              <MessageCircle size={16} className="text-citron" />
              Poser ma question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
