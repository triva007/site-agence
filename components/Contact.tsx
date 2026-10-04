
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Setup */}
      <div className="absolute inset-0 bg-brand-blue"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Info */}
          <div className="text-white reveal">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-6">
              Contactez-nous
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Prêt à faire décoller votre activité ?
            </h2>
            <p className="text-brand-lightBlue text-lg mb-12 leading-relaxed">
              Discutons de votre projet autour d'un café ou par téléphone. Le devis est gratuit, précis et sans mauvaise surprise.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group p-4 rounded-2xl transition-colors hover:bg-white/5">
                <div className="bg-brand-yellow p-3 rounded-xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Appelez-nous</h3>
                  <p className="text-brand-lightBlue">+33 7 67 05 60 66</p>
                  <p className="text-sm text-white/50 mt-1">Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start group p-4 rounded-2xl transition-colors hover:bg-white/5">
                <div className="bg-brand-yellow p-3 rounded-xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Écrivez-nous</h3>
                  <p className="text-brand-lightBlue">aaron@triva-media.com</p>
                  <p className="text-sm text-white/50 mt-1">Réponse sous 24h garantie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Calendly Widget */}
          <div className="reveal delay-200 bg-white rounded-3xl p-4 sm:p-8 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Réserver un créneau d'échange</h3>
            {/* Début de widget en ligne Calendly */}
            <div 
              className="calendly-inline-widget w-full rounded-2xl overflow-hidden bg-white shadow-xs" 
              data-url="https://calendly.com/aaron-triva-media/decouverte?hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            >
              <iframe
                src="https://calendly.com/aaron-triva-media/decouverte?hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Triva Media"
                className="w-full h-full min-h-[700px] border-0 rounded-2xl"
              />
            </div>
            {/* Fin de widget en ligne Calendly */}
            <p className="text-xs text-center text-slate-400 mt-4">
              Vos données restent 100% confidentielles. Zéro démarchage intempestif.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
