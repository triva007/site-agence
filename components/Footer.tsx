
import React from 'react';
import { ArrowRight, Facebook, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark relative">
      <div className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
            Envie de savoir si votre zone est libre ?
          </h2>
          
          <div className="flex justify-center mt-10">
            <a 
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-white font-bold hover:bg-[#b5985f] transition-colors rounded-full text-lg w-full sm:w-auto shadow-lg shadow-brand-accent/20"
            >
              M'écrire sur WhatsApp — réponse sous 24h
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="font-display font-bold text-white text-xl">Triva Media</span>
              <div className="mt-2 text-slate-400 text-sm">
                Publicité Facebook & Instagram pour les pros du mariage.
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/profile.php?id=61552535227323" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/33767056066" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle size={24} />
              </a>
              <a href="mailto:aaron@triva-media.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left text-sm font-medium text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {new Date().getFullYear()} Triva Media. Tous droits réservés.
            </div>
            <div>
              <a href="/mentions-legales" className="hover:text-slate-300 transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
