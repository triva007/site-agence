import React from 'react';
import Logo from './Logo';
import { CONTACT_INFO } from '../constants';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLegalLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Comment ça marche', href: '#comment-ca-marche' },
    { label: 'L\'offre & Garantie', href: '#offre' },
    { label: 'Pour qui', href: '#pour-qui' },
    { label: 'Questions fréquentes', href: '#faq' },
    { label: 'Vérifier mon secteur', href: '#diagnostic' },
  ];

  return (
    <footer className="bg-encreDeep text-texteSombre border-t border-bordureSombre pt-16 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-bordureSombre/60">
          
          {/* Col 1: Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-sm sm:text-base text-texteSombreSec leading-relaxed max-w-sm pt-2">
              Triva Media aide les piscinistes indépendants à recevoir des demandes de projets sérieux, dans leur secteur et à leur nom.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-encre border border-bordureSombre text-xs text-citron font-semibold">
              <span className="w-2 h-2 rounded-full bg-citron" />
              <span>1 seul pisciniste par secteur géographique</span>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-citron mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-texteSombreSec hover:text-citron transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-citron mb-4">
              Contact direct
            </p>
            <div className="space-y-3 text-sm text-texteSombreSec">
              <a
                href={CONTACT_INFO.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-texteSombre hover:text-citron font-semibold transition-colors"
              >
                <MessageCircle size={16} className="text-citron shrink-0" />
                <span>WhatsApp : 07 67 05 60 66</span>
              </a>

              <a
                href={CONTACT_INFO.phoneHref}
                className="flex items-center gap-2.5 hover:text-citron transition-colors"
              >
                <Phone size={16} className="text-citron shrink-0" />
                <span>Téléphone : 07 67 05 60 66</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-citron transition-colors"
              >
                <Mail size={16} className="text-citron shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-texteSombreSec pt-1">
                <MapPin size={16} className="text-citron shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.area}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-texteSombreSec">
          <p>© 2026 Triva Media. Tous droits réservés.</p>
          
          <div className="flex items-center gap-6">
            <a
              href="/mentions-legales"
              onClick={(e) => handleLegalLink(e, '/mentions-legales')}
              className="hover:text-citron transition-colors underline-offset-4 hover:underline"
            >
              Mentions légales
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/politique-de-confidentialite"
              onClick={(e) => handleLegalLink(e, '/politique-de-confidentialite')}
              className="hover:text-citron transition-colors underline-offset-4 hover:underline"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
