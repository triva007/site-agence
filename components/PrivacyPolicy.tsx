import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Mail, FileText, CheckCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Politique de Confidentialité | Triva Media";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-blue transition-colors font-bold text-sm"
          >
            <ArrowLeft size={18} />
            <span>Retour au site principal</span>
          </a>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck size={14} />
            <span>Conforme RGPD &amp; Meta Ads</span>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-xs space-y-10">
          
          {/* Header */}
          <div className="border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blueLight text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
              <Lock size={13} />
              <span>Protection des Données Personnelles</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-brand-dark tracking-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Dernière mise à jour : 28 août 2026 · Conforme aux exigences du RGPD et des règles publicitaires Meta (Facebook &amp; Instagram Lead Ads).
            </p>
          </div>

          {/* Intro text */}
          <div className="text-slate-600 leading-relaxed text-sm sm:text-base bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <p>
              La présente politique de confidentialité a pour objectif de vous informer de manière simple, claire et transparente sur la manière dont <strong>Triva Media</strong> collecte, utilise et protège vos données personnelles lorsque vous remplissez nos formulaires (formulaires instantanés Facebook/Instagram ou formulaires sur notre site internet).
            </p>
          </div>

          {/* Section 1: Responsable du traitement */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">1</span>
              Responsable du traitement des données
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 space-y-1">
              <p><strong>Entité :</strong> Triva Media</p>
              <p><strong>Numéro SIRET :</strong> 106 951 197 00016</p>
              <p><strong>Responsable de la publication :</strong> Aaron, Fondateur de Triva Media</p>
              <p><strong>E-mail de contact DPO / Confidentialité :</strong> <a href="mailto:aaron@triva-media.com" className="text-brand-blue font-semibold hover:underline">aaron@triva-media.com</a></p>
              <p><strong>Téléphone / WhatsApp :</strong> +33 7 67 05 60 66</p>
            </div>
          </section>

          {/* Section 2: Données collectées */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">2</span>
              Données collectées via les formulaires publicitaires Meta et le site
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 space-y-3">
              <p>
                Nous limitons la collecte aux seules données strictement nécessaires au traitement de votre demande de projet ou de devis :
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Données d'identité :</strong> Nom, prénom.</li>
                <li><strong>Données de contact :</strong> Numéro de téléphone portable, adresse e-mail.</li>
                <li><strong>Données de localisation :</strong> Ville, code postal ou département d'intervention.</li>
                <li><strong>Informations sur votre projet :</strong> Type de travaux (piscine, rénovation globale, menuiserie, extension), budget estimé, délai envisagé et détails descriptifs.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Finalités du traitement */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">3</span>
              Finalités de la collecte (Pourquoi nous collectons ces données)
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 space-y-3">
              <p>Vos données sont collectées exclusivement pour les finalités suivantes :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <div className="font-bold text-brand-dark mb-1 flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-brand-blue" />
                    <span>Prise de contact</span>
                  </div>
                  <p className="text-slate-600">Vous recontacter par téléphone, WhatsApp ou email pour étudier votre besoin et vérifier sa faisabilité.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <div className="font-bold text-brand-dark mb-1 flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-brand-blue" />
                    <span>Établissement de devis</span>
                  </div>
                  <p className="text-slate-600">Transmettre votre demande de manière exclusive au professionnel qualifié en charge de votre secteur pour l'établissement d'une proposition.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Base légale */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">4</span>
              Base légale du traitement
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              <p>
                Le traitement de vos données repose sur votre <strong>consentement explicite</strong>, recueilli au moment où vous soumettez le formulaire sur Facebook, Instagram ou sur notre site en cochant la case d'acceptation de la politique de confidentialité.
              </p>
            </div>
          </section>

          {/* Section 5: Destinataires et Non-revente */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">5</span>
              Destinataires et Engagement de Non-Revente
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 space-y-2">
              <p>
                <strong>Engagement formel :</strong> Vos données ne sont <strong>jamais vendues, louées ou cédées</strong> à des régies publicitaires tierces ou à des fins de prospection massive.
              </p>
              <p>
                Elles sont uniquement accessibles par l'équipe de Triva Media et transmises de façon strictement confidentielle et exclusive à l'entreprise partenaire agréée pour votre secteur géographique dans le cadre de votre projet.
              </p>
            </div>
          </section>

          {/* Section 6: Durée de conservation */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">6</span>
              Durée de conservation des données
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              <p>
                Vos informations personnelles sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier contact émanant de votre part, ou supprimées immédiatement sur simple demande de votre part.
              </p>
            </div>
          </section>

          {/* Section 7: Vos droits RGPD */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">7</span>
              Vos droits et modalités d'exercice
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 space-y-3">
              <p>
                Conformément à la réglementation européenne (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Droit d'accès et d'information.</li>
                <li>Droit de rectification (modification de vos informations).</li>
                <li>Droit à l'effacement (« droit à l'oubli » / suppression totale).</li>
                <li>Droit d'opposition ou de retrait de votre consentement.</li>
              </ul>
              
              <div className="p-4 rounded-2xl bg-brand-blueLight/60 border border-brand-blue/20 text-slate-800 text-sm mt-3">
                <p className="font-semibold text-brand-dark mb-1">Comment exercer vos droits ?</p>
                <p>
                  Il vous suffit d'envoyer un simple e-mail à l'adresse suivante :{' '}
                  <a href="mailto:aaron@triva-media.com" className="text-brand-blue font-bold hover:underline">
                    aaron@triva-media.com
                  </a>{' '}
                  en précisant votre nom et votre numéro de téléphone. Votre demande sera traitée sous 48 heures ouvrées.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Cookies & Sécurité */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-brand-dark flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold shrink-0">8</span>
              Sécurité et Cookies
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 space-y-2">
              <p>
                Nous appliquons des mesures de sécurité techniques pour protéger vos données contre tout accès non autorisé ou altération. Ce site peut utiliser les outils d'analyse de trafic et de mesure d'audience de Meta (Pixel Meta) dans le respect strict des réglementations en vigueur.
              </p>
            </div>
          </section>

          {/* Bottom links */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Triva Media · Tous droits réservés.
            </div>
            <div className="flex items-center gap-4">
              <a href="/mentions-legales" className="hover:text-brand-blue underline">
                Mentions Légales
              </a>
              <a href="/" className="hover:text-brand-blue underline">
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
