
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white relative">
      <div className="py-32 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-8 tracking-tight">
            Envie de savoir si votre zone est libre ?
          </h2>
          
          <div className="flex justify-center mt-10">
            <a 
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white font-medium hover:bg-slate-800 transition-colors rounded-full text-lg w-full sm:w-auto"
            >
              M'écrire sur WhatsApp — réponse sous 24h
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="container mx-auto px-6 text-center text-sm font-medium text-slate-500">
          <div className="mb-4">
            <span className="font-display font-bold text-brand-dark text-lg">Triva Media</span>
          </div>
          <div className="mb-6">
            <a href="mailto:aaron@triva-media.com" className="hover:text-brand-dark transition-colors">
              aaron@triva-media.com
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} Triva Media. Tous droits réservés. <a href="#" className="underline hover:text-brand-dark">Mentions légales</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
