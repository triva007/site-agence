import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-accent transition-colors font-bold mb-12"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </a>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-10">
          Mentions légales
        </h1>

        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            <strong className="text-brand-dark">Éditeur du site :</strong> Triva Media, entreprise individuelle.
          </p>
          <p>
            <strong className="text-brand-dark">SIRET :</strong> 106 951 197 00016.
          </p>
          <p>
            <strong className="text-brand-dark">Contact :</strong> <a href="mailto:aaron@triva-media.com" className="text-brand-accent hover:underline">aaron@triva-media.com</a>.
          </p>
          <p>
            <strong className="text-brand-dark">Directeur de la publication :</strong> Aaron, fondateur de Triva Media.
          </p>
          <p>
            <strong className="text-brand-dark">Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.
          </p>
          <p>
            TVA non applicable, article 293 B du CGI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
