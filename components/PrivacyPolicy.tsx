import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Politique de Confidentialité | Triva Media";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-papier text-texteClair font-sans">
      {/* Top Header */}
      <header className="bg-encre text-texteSombre border-b border-bordureSombre sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-texteSombre hover:text-citron transition-colors font-bold text-sm"
          >
            <ArrowLeft size={18} />
            <span>Retour au site principal</span>
          </a>

          <div className="flex items-center gap-2 text-xs font-semibold text-citron bg-encreCard px-3 py-1.5 rounded-full border border-bordureSombre">
            <ShieldCheck size={14} />
            <span>Conforme RGPD &amp; Meta Ads</span>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-blanc rounded-[24px] p-6 sm:p-10 md:p-12 border border-bordureClair shadow-sm space-y-10">
          
          {/* Header */}
          <div className="border-b border-bordureClair pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vertProfond/10 text-vertProfond text-xs font-bold uppercase tracking-wider mb-3">
              <Lock size={13} />
              <span>Protection des Données Personnelles</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-texteClair tracking-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-sm text-texteClairSec mt-2">
              Dernière mise à jour : 2026 · Conforme aux exigences du RGPD et des règles publicitaires Meta (Facebook &amp; Instagram).
            </p>
          </div>

          {/* Intro text */}
          <div className="text-texteClairSec leading-relaxed text-sm sm:text-base bg-papier p-5 rounded-2xl border border-bordureClair">
            <p>
              La présente politique de confidentialité a pour objectif de vous informer de manière simple, claire et transparente sur la manière dont <strong>Triva Media</strong> collecte, utilise et protège vos données personnelles lorsque vous remplissez nos formulaires (formulaires instantanés Facebook/Instagram ou formulaires sur notre site internet).
            </p>
          </div>

          {/* Section 1: Responsable du traitement */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-texteClair flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-vertProfond text-blanc text-xs flex items-center justify-center font-bold shrink-0">1</span>
              Responsable du traitement des données
            </h2>
            <div className="text-texteClairSec text-sm sm:text-base leading-relaxed pl-8 space-y-1">
              <p><strong>Dénomination :</strong> Triva Media</p>
              <p><strong>Fondateur &amp; Responsable :</strong> Aaron</p>
              <p><strong>E-mail de contact :</strong> <a href="mailto:aaron@triva-media.com" className="text-vertProfond font-semibold hover:underline">aaron@triva-media.com</a></p>
              <p><strong>Téléphone / WhatsApp :</strong> 07 67 05 60 66</p>
            </div>
          </section>

          {/* Section 2: Données collectées */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-texteClair flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-vertProfond text-blanc text-xs flex items-center justify-center font-bold shrink-0">2</span>
              Données personnelles collectées
            </h2>
            <div className="text-texteClairSec text-sm sm:text-base leading-relaxed pl-8 space-y-2">
              <p>
                Nous collectons uniquement les informations strictement nécessaires pour qualifier votre projet de piscine et vous mettre en relation avec le pisciniste partenaire exclusif de votre secteur :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nom et prénom</li>
                <li>Numéro de téléphone portable</li>
                <li>Adresse e-mail</li>
                <li>Localisation du projet (commune ou code postal)</li>
                <li>Caractéristiques du projet de piscine (type de bassin, dimensions, délai envisagé, budget annoncé)</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Finalités du traitement */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-texteClair flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-vertProfond text-blanc text-xs flex items-center justify-center font-bold shrink-0">3</span>
              Finalité de la collecte
            </h2>
            <div className="text-texteClairSec text-sm sm:text-base leading-relaxed pl-8 space-y-2">
              <p>Vos données sont collectées exclusivement afin de :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vous contacter par téléphone, SMS ou WhatsApp pour étudier la faisabilité de votre projet de piscine ;</li>
                <li>Transmettre votre demande au professionnel pisciniste partenaire exclusif intervenant sur votre secteur géographique ;</li>
                <li>Organiser un échange téléphonique ou une visite technique pour l'établissement d'un devis gratuit.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Base légale */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-texteClair flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-vertProfond text-blanc text-xs flex items-center justify-center font-bold shrink-0">4</span>
              Base légale et engagement de non-revente
            </h2>
            <div className="text-texteClairSec text-sm sm:text-base leading-relaxed pl-8 space-y-2">
              <p>
                Le traitement de vos données repose sur votre <strong>consentement explicite</strong>, recueilli lors de la validation du formulaire.
              </p>
              <p className="font-semibold text-texteClair">
                Triva Media s'engage formellement à ne jamais revendre, louer ou céder vos données personnelles à des fins de prospection commerciale non sollicitée.
              </p>
            </div>
          </section>

          {/* Section 5: Destinataires */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-texteClair flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-vertProfond text-blanc text-xs flex items-center justify-center font-bold shrink-0">5</span>
              Destinataires des données
            </h2>
            <div className="text-texteClairSec text-sm sm:text-base leading-relaxed pl-8 space-y-2">
              <p>
                Les données sont transmises exclusivement à :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>L'équipe interne de Triva Media en charge de la qualification des projets ;</li>
                <li>Le pisciniste partenaire unique titulaire de l'exclusivité géographique sur votre commune.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Durée de conservation */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-texteClair flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-vertProfond text-blanc text-xs flex items-center justify-center font-bold shrink-0">6</span>
              Durée de conservation
            </h2>
            <div className="text-texteClairSec text-sm sm:text-base leading-relaxed pl-8">
              <p>
                Vos informations personnelles sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier contact émanant de votre part, ou supprimées immédiatement sur simple demande.
              </p>
            </div>
          </section>

          {/* Section 7: Vos droits RGPD */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-texteClair flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-vertProfond text-blanc text-xs flex items-center justify-center font-bold shrink-0">7</span>
              Vos droits et modalités d'exercice
            </h2>
            <div className="text-texteClairSec text-sm sm:text-base leading-relaxed pl-8 space-y-3">
              <p>
                Conformément à la réglementation européenne (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition.
              </p>
              
              <div className="p-4 rounded-2xl bg-papier border border-bordureClair text-texteClair text-sm mt-3">
                <p className="font-semibold mb-1">Comment exercer vos droits ?</p>
                <p className="text-texteClairSec">
                  Envoyez un simple e-mail à :{' '}
                  <a href="mailto:aaron@triva-media.com" className="text-vertProfond font-bold hover:underline">
                    aaron@triva-media.com
                  </a>. Votre demande sera traitée sous 48 heures ouvrées.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom links */}
          <div className="pt-8 border-t border-bordureClair flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-texteClairSec">
            <div>
              © 2026 Triva Media · Tous droits réservés.
            </div>
            <div className="flex items-center gap-4">
              <a href="/mentions-legales" className="hover:text-vertProfond underline">
                Mentions Légales
              </a>
              <a href="/" className="hover:text-vertProfond underline">
                Accueil
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
