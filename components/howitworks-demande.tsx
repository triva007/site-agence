import React from 'react';

/**
 * L'objet vivant de « Comment ça marche » : un téléphone dont l'écran passe
 * de la publicité à votre nom (1) aux 4 réponses du propriétaire (2),
 * à la notification « Nouvelle demande » (3), puis à l'appel réservé (4).
 * Exemple illustratif : aucune donnée réelle.
 */
type Props = { step: 1 | 2 | 3 | 4 };

const ROWS: { q: string; a: string }[] = [
  { q: 'Secteur', a: 'à 15 km' },
  { q: 'Projet', a: 'piscine 8 × 4' },
  { q: 'Budget annoncé', a: '35 000 à 45 000 €' },
  { q: 'Délai', a: 'dans 3 à 6 mois' },
];

const LABEL =
  "Exemple illustratif d'une demande : une publicité à votre nom sur Facebook ou Instagram, " +
  'puis les 4 réponses du propriétaire (secteur à 15 km, piscine 8 × 4, budget annoncé 35 000 à 45 000 €, ' +
  'délai de 3 à 6 mois), la notification Nouvelle demande de Claire D., propriétaire, ' +
  'et enfin un appel réservé mardi à 17 h 30.';

const Tick: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className}>
    <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HowItWorksDemande: React.FC<Props> = ({ step }) => {
  const cls = `hw-obj ${step >= 2 ? 'ge2' : ''} ${step >= 3 ? 'ge3' : ''} ${step >= 4 ? 'ge4' : ''}`;

  return (
    <div className={cls} role="img" aria-label={LABEL} data-step={step}>
      <div className="hw-phone">
        <span className="hw-wave" aria-hidden="true" />
        <span className="hw-wave" aria-hidden="true" />

        <div className="hw-screen">
          <span className="hw-island" aria-hidden="true" />

          {/* 2 à 4 : la fiche de la demande */}
          <div className="hw-fiche">
            <div className="hw-slot">
              {/* Rappel de la publicité d'origine pendant que le propriétaire répond */}
              <div className="hw-src">
                <img src="/media/realisation-pub.jpg" alt="" className="w-11 h-11 rounded-xl object-cover shrink-0" loading="lazy" />
                <div className="leading-tight min-w-0">
                  <p className="text-[13.5px] font-bold truncate">Votre entreprise de piscines</p>
                  <p className="text-[12px] text-[#5B6B73]">Formulaire en 4 questions</p>
                </div>
              </div>

              {/* Notification sur votre téléphone */}
              <div className="hw-notif">
                <span className="w-9 h-9 rounded-[10px] bg-citron text-encre grid place-items-center shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" fill="currentColor" />
                  </svg>
                </span>
                <div className="leading-tight min-w-0 flex-1">
                  <p className="flex items-baseline justify-between gap-2">
                    <span className="text-[13.5px] font-bold">Nouvelle demande</span>
                    <span className="text-[11px] text-texteSombreSec shrink-0">à l'instant</span>
                  </p>
                  <p className="text-[12.5px] text-texteSombreSec truncate">Piscine 8 × 4, à 15 km</p>
                </div>
              </div>
            </div>

            <div className="hw-who">
              <p className="hw-form text-[19px] font-bold tracking-tight leading-9">Votre projet</p>
              <p className="hw-name text-[24px] font-extrabold tracking-tight leading-9">Claire D.</p>
            </div>

            <dl className="mt-1.5">
              {ROWS.map((r, i) => (
                <div key={r.q} className="hw-row" style={{ '--r': i } as React.CSSProperties}>
                  <dt>{r.q}</dt>
                  <dd>
                    <span className="hw-blank" aria-hidden="true" />
                    <span className="hw-val">
                      {r.a}
                      <Tick className="hw-tick" />
                    </span>
                  </dd>
                </div>
              ))}
              <div className="hw-row hw-row-statut">
                <dt>Statut déclaré</dt>
                <dd>propriétaire</dd>
              </div>
            </dl>

            <div className="hw-cta">
              <div className="hw-pill hw-pill-send">Envoyer ma demande</div>
              <div className="hw-pill hw-pill-wait">À rappeler sous 48 h</div>
              <div className="hw-pill hw-pill-ok">
                <Tick className="hw-check" />
                <span>Appel réservé · mardi 17 h 30</span>
              </div>
            </div>
          </div>

          {/* 1 : la publicité diffusée à votre nom */}
          <div className="hw-ad">
            <div className="flex items-center gap-2.5 px-3.5 pb-2.5">
              <span className="w-9 h-9 rounded-full bg-encre text-citron grid place-items-center text-[12px] font-extrabold shrink-0">VE</span>
              <div className="leading-tight">
                <p className="text-[13.5px] font-bold">Votre entreprise de piscines</p>
                <p className="text-[11.5px] text-[#6b7a82]">Sponsorisé</p>
              </div>
            </div>
            <p className="px-3.5 pb-3 text-[13.5px] leading-snug text-[#1c2b33]">
              Un projet de piscine ? Découvrez nos réalisations près de chez vous.
            </p>
            <img src="/media/realisation-pub.jpg" alt="" className="w-full flex-1 min-h-0 object-cover" loading="lazy" />
            <div className="px-3.5 py-3 bg-[#F3EEE6]">
              <span className="relative block text-center rounded-lg bg-encre text-citron text-[13px] font-bold px-3 py-2.5">
                Décrire mon projet
                <span className="hw-tap" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksDemande;
