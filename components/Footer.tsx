
import React from 'react';
import { ArrowRight, Facebook, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark relative text-white overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,160,89,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">
            Disponibilité par zone
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
            Envie de savoir si votre zone est libre ?
          </h2>
          
          <div className="flex justify-center mt-10">
            <a 
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-brand-accent text-white font-bold rounded-full text-base sm:text-lg hover:bg-brand-accent/90 transition-all duration-300 shadow-xl shadow-brand-accent/20 hover:scale-105"
            >
              <span>M'écrire sur WhatsApp — réponse sous 24h</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-12 relative z-10 bg-slate-950/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="font-display font-bold text-white text-2xl tracking-tight">Triva Media</span>
              <div className="mt-1 text-slate-400 text-sm">
                Publicité Facebook & Instagram pour les pros du mariage.
              </div>
            </div>

            <div className="flex items-center gap-5">
              <a 
                href="https://www.facebook.com/profile.php?id=61552535227323" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-accent hover:text-white transition-all duration-200" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://wa.me/33767056066" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition-all duration-200" 
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="mailto:aaron@triva-media.com" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-accent hover:text-white transition-all duration-200" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-800/80 text-center md:text-left text-sm font-medium text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {new Date().getFullYear()} Triva Media. Tous droits réservés.
            </div>
            <div>
              <a href="/mentions-legales" className="hover:text-brand-accent transition-colors underline underline-offset-4 decoration-slate-700">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
