import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-blue transition-colors font-bold mb-12"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </a>

        <h1 className="text-3xl md:text-4xl font-display font-black text-brand-dark mb-10">
          Mentions légales &amp; Politique de confidentialité
        </h1>

        <div className="space-y-6 text-slate-600 leading-relaxed text-base">
          <p>
            <strong className="text-brand-dark">Éditeur du site :</strong> Triva Media — Agence d'acquisition digitale pour le BTP.
          </p>
          <p>
            <strong className="text-brand-dark">SIRET :</strong> 106 951 197 00016.
          </p>
          <p>
            <strong className="text-brand-dark">Contact :</strong> <a href="mailto:aaron@triva-media.com" className="text-brand-blue hover:underline">aaron@triva-media.com</a> / WhatsApp : +33 7 67 05 60 66.
          </p>
          <p>
            <strong className="text-brand-dark">Directeur de la publication :</strong> Aaron, Fondateur de Triva Media.
          </p>
          <p>
            <strong className="text-brand-dark">Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.
          </p>
          <p>
            <strong className="text-brand-dark">Propriété intellectuelle :</strong> L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
          </p>
          <p className="text-xs text-slate-500 pt-4 border-t border-slate-200">
            TVA non applicable, article 293 B du CGI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
