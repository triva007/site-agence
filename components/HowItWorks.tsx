import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import React from 'react';
import { CalendarCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Vos réalisations, à votre nom',
      text: 'On crée des publicités avec vos photos de chantiers et le nom de votre entreprise. Elles sont diffusées sur Facebook et Instagram, uniquement dans la zone où vous travaillez.'
    },
    {
      num: '2',
      title: '4 questions avant de vous contacter',
      text: 'Où se situe le projet ? Quel type de piscine ? Quel budget ? Pour quand ? Les projets hors de vos critères sont écartés avant d\'arriver jusqu\'à vous.'
    },
    {
      num: '3',
      title: 'La demande arrive sur votre téléphone',
      text: 'Vous recevez les coordonnées et les réponses du propriétaire. Il a fait la démarche : il attend votre appel.'
    },
    {
      num: '4',
      title: 'Vous rappelez, vous vendez',
      text: 'Vous rappelez sous 48 h, vous faites la visite et le devis. On regarde avec vous chaque semaine ce que deviennent les demandes, et on ajuste.'
    },
  ];

  return (
    <section id="comment-ca-marche" className="py-20 sm:py-28 lg:py-32 bg-encre text-texteSombre bg-grid-citron relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionHeading eyebrow="Comment ça marche" tone="dark">
          De votre piscine à son projet, en{' '}
          <span className="font-serif italic font-normal text-citron">4 étapes</span>.
        </SectionHeading>

        {/* Grid: 4 Steps on left, Phone Mockup on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Steps column (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Vertical connector line */}
            <div 
              className="absolute left-6 top-8 bottom-8 w-[2px] bg-citron/25 hidden sm:block" 
              aria-hidden="true" 
            />

            <div className="space-y-10 sm:space-y-12">
              {steps.map((step, i) => (
                <Reveal as="div" key={step.num} delay={i * 110} variant="left" className="relative flex items-start gap-5 sm:gap-6 group">
                  {/* Step circle */}
                  <div className="w-12 h-12 rounded-full bg-citron text-encre flex items-center justify-center font-extrabold text-lg shrink-0 shadow-md relative z-10 transition-transform group-hover:scale-110">
                    {step.num}
                  </div>

                  {/* Step content */}
                  <div className="pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-texteSombre tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-texteSombreSec leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

          {/* Phone Mockup column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="float-soft w-full max-w-[340px] sm:max-w-[360px] bg-encreDeep rounded-[36px] p-3 border-2 border-citron/30 shadow-2xl relative">
              
              {/* Phone speaker notch */}
              <div className="w-24 h-4 bg-encre rounded-full mx-auto mb-3" />

              {/* Écran : Fiche de la demande */}
              <div className="bg-blanc text-texteClair rounded-[26px] p-5 sm:p-6 shadow-inner">
                
                {/* Notification header */}
                <div className="flex items-center justify-between border-b border-bordureClair pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-texteClairSec uppercase tracking-wider">
                      Nouvelle demande
                    </span>
                  </div>
                  <span className="text-[11px] text-texteClairSec">Il y a 4 min</span>
                </div>

                {/* Prospect Name */}
                <h4 className="text-2xl font-extrabold text-texteClair tracking-tight mb-4">
                  Claire D.
                </h4>

                {/* Data Rows */}
                <div className="space-y-2.5 text-sm mb-5">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-texteClairSec font-medium">Secteur :</span>
                    <span className="font-bold text-texteClair">à 15 km</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-texteClairSec font-medium">Projet :</span>
                    <span className="font-bold text-texteClair">piscine 8 × 4</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-texteClairSec font-medium">Budget annoncé :</span>
                    <span className="font-bold text-texteClair">35 000 à 45 000 €</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-texteClairSec font-medium">Démarrage souhaité :</span>
                    <span className="font-bold text-texteClair">dans 3 à 6 mois</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-texteClairSec font-medium">Statut déclaré :</span>
                    <span className="font-bold text-texteClair">propriétaire</span>
                  </div>
                </div>

                {/* Citron Appointment Pill */}
                <div className="bg-citron text-encre rounded-full py-2.5 px-4 text-sm font-extrabold flex items-center justify-center gap-2 shadow-xs">
                  <CalendarCheck size={14} className="stroke-[2.5]" />
                  <span>Appel réservé · mardi 17 h 30</span>
                </div>

              </div>

            </div>

            {/* Disclaimer under phone */}
            <p className="mt-4 text-sm text-texteSombreSec text-center font-medium">
              Exemple illustratif
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
