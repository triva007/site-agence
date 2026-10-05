import React, { useState } from 'react';
import { MessageCircle, Check, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import './founder.css';

/**
 * Section 5 : le fondateur + pour qui c'est fait (#pour-qui, fond sombre).
 * Fusion de l'ancien FounderAaron et d'AudienceFit.
 * Le visage d'Aaron est l'argument de confiance : grand, net, chargé tout de suite
 * (pas de chargement différé : une capture pleine page le montrait en rond vide).
 */
export const FounderAaron: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const commitments = [
    { t: 'WhatsApp direct, pas de standard' },
    { t: 'Un point chaque semaine' },
    { t: 'Le compte publicitaire est à votre nom' },
    { t: 'Un seul pisciniste par secteur', d: 'Par exemple 35\u00a0km autour de votre entreprise\u00a0: on refuse les autres.' },
  ];

  const forYou = [
    'Vous construisez ou rénovez des piscines.',
    'Vous avez des chantiers à montrer et une décennale à jour.',
    'Vous pouvez rappeler une demande sous 48\u00a0h.',
  ];

  const notForYou = [
    'Votre carnet est plein et vous ne voulez pas grandir.',
    'Vous ne voulez pas de budget publicitaire.',
    'Un réseau national gère déjà votre publicité.',
  ];

  return (
    <section id="pour-qui" className="founder-section py-16 lg:py-24 bg-encreDeep text-texteSombre relative isolate overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

        {/* Photo + contact direct */}
        <figure className="lg:col-span-4 flex lg:flex-col items-center lg:items-stretch gap-4 min-[380px]:gap-5 lg:gap-6 m-0">
          <div className="founder-photo shrink-0 w-[128px] h-[160px] min-[380px]:w-[144px] min-[380px]:h-[180px] sm:w-[176px] sm:h-[220px] lg:w-full lg:h-auto lg:aspect-[4/5]">
            {!imgError ? (
              <img
                src="/images/aaron.jpg"
                alt="Aaron, fondateur de Triva Media"
                width={800}
                height={800}
                decoding="async"
                className="founder-photo-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="w-full h-full grid place-items-center text-6xl font-extrabold text-citron select-none" aria-hidden="true">A</span>
            )}
          </div>

          <figcaption className="min-w-0">
            <p className="text-xl lg:text-2xl font-extrabold tracking-tight text-texteSombre leading-tight">Aaron</p>
            <p className="text-sm lg:text-base text-texteSombreSec mt-0.5">Fondateur de Triva Media</p>
            <a
              href={CONTACT_INFO.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="founder_whatsapp"
              aria-label={`Écrire à Aaron sur WhatsApp au ${CONTACT_INFO.phoneDisplay}`}
              className="mt-3 inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border border-citron/40 text-texteSombre text-sm font-bold whitespace-nowrap hover:border-citron hover:text-citron transition-colors"
            >
              <MessageCircle size={16} className="text-citron shrink-0" />
              {CONTACT_INFO.phoneDisplay}
            </a>
            <p className="hidden lg:block text-sm text-texteSombreSec mt-2">WhatsApp direct&nbsp;: c'est lui qui répond.</p>
          </figcaption>
        </figure>

        {/* Texte, engagements, pour qui */}
        <div className="lg:col-span-8">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] font-extrabold leading-[1.08] tracking-[-0.03em] text-texteSombre max-w-[16ch] lg:max-w-none">
            Un seul interlocuteur, pas un service client.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-texteSombreSec leading-relaxed max-w-[60ch]">
            Les publicités sont écrites, lancées et suivies en interne. Quand vous écrivez sur WhatsApp, c'est Aaron qui répond, pas un chargé de compte.
          </p>
          <p className="mt-3 text-base sm:text-lg font-semibold text-texteSombre leading-relaxed max-w-[60ch]">
            On ne vous promettra pas de chantiers signés&nbsp;: ça, c'est votre métier. On s'engage sur des demandes dans vos critères.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-white/10 pt-5">
            {commitments.map((c) => (
              <li key={c.t} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-citron text-encre grid place-items-center shrink-0 mt-[3px]" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>
                  <span className="block text-base font-bold text-texteSombre leading-snug">{c.t}</span>
                  {c.d && <span className="block text-sm text-texteSombreSec leading-snug mt-0.5">{c.d}</span>}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base font-bold text-citron mb-3">C'est pour vous si</h3>
              <ul className="space-y-2.5">
                {forYou.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[15px] sm:text-base text-texteSombre leading-snug">
                    <Check size={16} strokeWidth={2.5} className="text-citron shrink-0 mt-[3px]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:border-l sm:border-white/10 sm:pl-8">
              <h3 className="text-base font-bold text-texteSombreSec mb-3">Ce n'est pas pour vous si</h3>
              <ul className="space-y-2.5">
                {notForYou.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[15px] sm:text-base text-texteSombreSec leading-snug">
                    <X size={16} strokeWidth={2.5} className="text-texteSombreSec/70 shrink-0 mt-[3px]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderAaron;
