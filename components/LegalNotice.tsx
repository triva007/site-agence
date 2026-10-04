import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const LegalNotice: React.FC = () => {
  useEffect(() => {
    document.title = "Mentions Légales | Triva Media";
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

          <a
            href="/politique-de-confidentialite"
            className="inline-flex items-center gap-2 text-xs font-semibold text-citron bg-encreCard px-3 py-1.5 rounded-full border border-bordureSombre hover:border-citron transition-colors"
          >
            <ShieldCheck size={14} />
            <span>Politique de Confidentialité RGPD &rarr;</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-blanc rounded-[24px] p-6 sm:p-10 md:p-12 border border-bordureClair shadow-sm space-y-8">
          
          <div className="border-b border-bordureClair pb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-texteClair tracking-tight">
              Mentions Légales
            </h1>
            <p className="text-sm text-texteClairSec mt-2">
              Informations légales relatives au site triva-media.com.
            </p>
          </div>

          <div className="space-y-6 text-texteClairSec leading-relaxed text-sm sm:text-base">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-texteClair">1. Éditeur du site</h2>
              <p><strong>Dénomination commerciale :</strong> Triva Media</p>
              <p><strong>Activité :</strong> Agence de diffusion publicitaire et d'acquisition de demandes de projets pour les piscinistes.</p>
              <p><strong>Directeur de la publication :</strong> Aaron, Fondateur</p>
              <p><strong>Contact e-mail :</strong> <a href="mailto:aaron@triva-media.com" className="text-vertProfond hover:underline font-semibold">aaron@triva-media.com</a></p>
              <p><strong>Contact téléphonique / WhatsApp :</strong> 07 67 05 60 66</p>
              <p className="text-xs text-texteClairSec">TVA non applicable, article 293 B du CGI.</p>
            </section>

            <section className="space-y-2 pt-4 border-t border-bordureClair">
              <h2 className="text-base sm:text-lg font-bold text-texteClair">2. Hébergement du site</h2>
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-vertProfond hover:underline">vercel.com</a></p>
            </section>

            <section className="space-y-2 pt-4 border-t border-bordureClair">
              <h2 className="text-base sm:text-lg font-bold text-texteClair">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, logos, mise en page, éléments graphiques) sont la propriété exclusive de Triva Media, sauf mention contraire. Toute reproduction ou utilisation non autorisée est interdite.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-bordureClair">
              <h2 className="text-base sm:text-lg font-bold text-texteClair">4. Protection des données</h2>
              <p>
                Pour toute question relative au traitement de vos données personnelles, veuillez consulter notre{' '}
                <a href="/politique-de-confidentialite" className="text-vertProfond font-bold hover:underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-bordureClair flex items-center justify-between text-xs text-texteClairSec">
            <span>© 2026 Triva Media</span>
            <a href="/" className="hover:text-vertProfond underline">Retour à l'accueil</a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LegalNotice;
