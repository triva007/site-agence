import React from 'react';
import { Mail, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white relative border-t border-slate-800">
      
      {/* Upper Footer */}
      <div className="py-16 sm:py-20 relative z-10 border-b border-slate-800/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Col 1: Brand info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center text-white font-black text-base">
                  T
                </div>
                <span className="text-xl font-display font-black tracking-tight text-white">
                  Triva Media
                </span>
              </div>
              
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Système d'acquisition publicitaire Meta Ads pour les professionnels du bâtiment à fort panier moyen : Piscinistes, Rénovation globale, Menuiserie alu &amp; Vérandas, Extension de maison, Paysagisme haut de gamme.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <ShieldCheck size={16} />
                <span>Règle stricte d'exclusivité par zone géographique</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>
                  <a href="#problem" className="hover:text-brand-blue transition-colors">
                    Le Constat BTP
                  </a>
                </li>
                <li>
                  <a href="#system" className="hover:text-brand-blue transition-colors">
                    Notre Système en 4 Piliers
                  </a>
                </li>
                <li>
                  <a href="#simulator" className="hover:text-brand-blue transition-colors">
                    Simulateur de Rentabilité
                  </a>
                </li>
                <li>
                  <a href="#qualification" className="hover:text-brand-blue transition-colors">
                    Critères d'Éligibilité
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-brand-blue transition-colors">
                    Notre Déploiement
                  </a>
                </li>
                <li>
                  <a href="#offer" className="hover:text-brand-blue transition-colors">
                    Offre Clé en Main
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand-blue transition-colors">
                    Foire aux Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Contact Direct
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <a 
                    href="https://wa.me/33767056066" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:underline font-semibold"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp : 07 67 05 60 66</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:aaron@triva-media.com" 
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={16} className="text-slate-400" />
                    <span>aaron@triva-media.com</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-xs">
                  <MapPin size={16} className="text-slate-500" />
                  <span>France entière · Secteur réservé par client</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} Triva Media. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="/politique-de-confidentialite" className="hover:text-white transition-colors underline">
              Politique de Confidentialité
            </a>
            <a href="/mentions-legales" className="hover:text-white transition-colors underline">
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
