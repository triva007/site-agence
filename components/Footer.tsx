
import React from 'react';
import { MousePointerClick, Facebook, Instagram, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 relative pt-24">
      
      {/* Pre-Footer CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div id="contact" className="bg-brand-light rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden relative scroll-mt-32">
          <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8">
               Rejoignez plus de <span className="text-brand-blue">50 entreprises</span> qui font déjà confiance à Connect.
             </h2>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/20">
                  Nous contacter par mail <ArrowRight size={20} />
                </button>
                <button className="bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
                  <MessageCircle size={20} /> Sur Whatsapp
                </button>
             </div>
          </div>
          
          {/* Logos bg deco */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex flex-wrap justify-center content-center gap-12 grayscale">
             <div className="w-32 h-32 rounded-full bg-black blur-xl"></div>
             <div className="w-32 h-32 rounded-full bg-brand-blue blur-xl"></div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-brand-dark">Connect.</span>
            </div>

            <div className="flex gap-6">
               <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Instagram size={24} /></a>
               <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Linkedin size={24} /></a>
            </div>

            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-brand-dark">Offres</a>
              <a href="#" className="hover:text-brand-dark">Portfolio</a>
              <a href="#" className="hover:text-brand-dark">FAQ</a>
              <a href="#" className="hover:text-brand-dark">Nous contacter</a>
            </div>
            
          </div>
          
          <div className="mt-12 text-center text-xs text-slate-400">
             © {new Date().getFullYear()} Connect Web Local Sàrl. Tous droits réservés. Politique de confidentialité.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
