import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const LegalNotice: React.FC = () => {
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

          <a
            href="/politique-de-confidentialite"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue bg-brand-blueLight px-3 py-1.5 rounded-full border border-brand-blue/20 hover:bg-brand-blueSoft transition-colors"
          >
            <ShieldCheck size={14} />
            <span>Politique de Confidentialité RGPD &rarr;</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-xs space-y-8">
          
          <div className="border-b border-slate-100 pb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-brand-dark tracking-tight">
              Mentions Légales
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Informations légales obligatoires relatives au site triva-media.com.
            </p>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-brand-dark">1. Éditeur du site</h2>
              <p><strong>Dénomination commerciale :</strong> Triva Media</p>
              <p><strong>Activité :</strong> Agence d'acquisition publicitaire et de génération de prospects qualifiés pour les professionnels du bâtiment.</p>
              <p><strong>Numéro SIRET :</strong> 106 951 197 00016</p>
              <p><strong>Directeur de la publication :</strong> Aaron, Fondateur</p>
              <p><strong>Contact e-mail :</strong> <a href="mailto:aaron@triva-media.com" className="text-brand-blue hover:underline font-semibold">aaron@triva-media.com</a></p>
              <p><strong>Contact téléphonique / WhatsApp :</strong> +33 7 67 05 60 66</p>
              <p className="text-xs text-slate-500">TVA non applicable, article 293 B du CGI.</p>
            </section>

            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-brand-dark">2. Hébergement du site</h2>
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">vercel.com</a></p>
            </section>

            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-brand-dark">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus (textes, visuels, structure, logos, calculateurs) présents sur le site triva-media.com est la propriété exclusive de Triva Media ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, représentation ou diffusion sans accord préalable écrit est interdite.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-brand-dark">4. Données personnelles et formulaires Meta</h2>
              <p>
                Pour consulter le détail du traitement de vos données personnelles collectées via nos formulaires publicitaires Facebook/Instagram et sur notre site, veuillez vous référer à notre{' '}
                <a href="/politique-de-confidentialite" className="text-brand-blue font-bold hover:underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Triva Media · Tous droits réservés.
            </div>
            <a href="/" className="hover:text-brand-blue underline">
              Accueil
            </a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LegalNotice;
