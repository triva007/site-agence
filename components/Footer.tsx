
import React from 'react';
import { Instagram, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 relative pt-24">
      
      {/* Pre-Footer CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div id="contact" className="bg-brand-blue rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center overflow-hidden relative scroll-mt-32 shadow-2xl shadow-brand-blue/30">
          <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
               Prêt à développer <br/>votre clientèle locale ?
             </h2>
             <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Discutons de votre projet. Audit gratuit de votre présence en ligne actuelle.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => window.location.href = 'mailto:aaron@triva-media.com'}
                  className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl"
                >
                  Nous contacter par mail <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/33767056066', '_blank')}
                  className="bg-brand-dark hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all border border-white/10"
                >
                  <MessageCircle size={20} /> Sur Whatsapp
                </button>
             </div>
          </div>
          
          {/* Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
             <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl mix-blend-overlay"></div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-brand-dark">Triva<span className="text-brand-blue">-</span>Media</span>
            </div>

            <div className="flex gap-6">
               <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors bg-slate-50 p-2 rounded-full"><Instagram size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors bg-slate-50 p-2 rounded-full"><Linkedin size={20} /></a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500">
              <a href="#process" className="hover:text-brand-blue transition-colors">Notre approche</a>
              <a href="#portfolio" className="hover:text-brand-blue transition-colors">Portfolio</a>
              <a href="#faq" className="hover:text-brand-blue transition-colors">FAQ</a>
            </div>
            
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-50 text-center text-xs text-slate-400 font-medium">
             © {new Date().getFullYear()} Triva-Media Agency. Tous droits réservés. <a href="#" className="underline hover:text-brand-blue">Mentions légales</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
