import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import ScrollProgress from './ScrollProgress';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Comment ça marche', href: '#comment-ca-marche' },
    { label: 'L\'offre', href: '#offre' },
    { label: 'Pour qui', href: '#pour-qui' },
    { label: 'Questions', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-encre/95 backdrop-blur-md py-3 border-b border-bordureSombre shadow-md'
            : 'bg-encre py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Logo 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="nav-link text-texteSombreSec hover:text-citron text-sm font-semibold tracking-tight transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header_whatsapp"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-bordureSombre text-texteSombre hover:border-citron hover:text-citron text-sm font-semibold transition-all"
            >
              <MessageCircle size={16} className="text-citron" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#diagnostic"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#diagnostic');
              }}
              data-cta="header_verifier"
              className="btn-shine inline-flex items-center justify-center h-11 px-6 rounded-full bg-citron text-encre hover:bg-white text-sm font-bold tracking-tight transition-all active:scale-95 shadow-sm"
            >
              Vérifier mon secteur
            </a>
          </div>

          {/* Mobile : menu seul, la barre du bas porte les boutons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 rounded-full border border-bordureSombre flex items-center justify-center text-texteSombre hover:text-citron focus:outline-none"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
        <ScrollProgress />
      </header>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-encreDeep/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 sm:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-citron/80 pb-2 border-b border-bordureSombre">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-2xl font-extrabold text-texteSombre hover:text-citron transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-bordureSombre">
            <a
              href="#diagnostic"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#diagnostic');
              }}
              data-cta="header_drawer_verifier"
              className="w-full h-14 rounded-full bg-citron text-encre text-base font-bold flex items-center justify-center tracking-tight shadow-md"
            >
              Vérifier si mon secteur est libre
            </a>
            <a
              href={CONTACT_INFO.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header_drawer_whatsapp"
              className="w-full h-14 rounded-full border border-bordureSombre text-texteSombre text-sm font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} className="text-citron" />
              <span>Contacter Aaron sur WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
