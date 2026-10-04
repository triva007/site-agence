import React from 'react';

interface LogoProps {
  lightTheme?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ lightTheme = false, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
      role="banner"
      aria-label="Triva Media Logo"
    >
      {/* Signature Citron Dot */}
      <span 
        className="w-3 h-3 rounded-full bg-citron shrink-0 transition-transform group-hover:scale-125" 
        aria-hidden="true"
      />

      {/* Brand Text */}
      <span className="flex items-baseline gap-1.5 font-sans leading-none">
        <span 
          className={`font-extrabold text-xl sm:text-2xl tracking-tight transition-colors ${
            lightTheme ? 'text-encre' : 'text-blanc'
          }`}
        >
          triva
        </span>
        <span 
          className={`font-semibold text-[10px] sm:text-[11px] tracking-[0.35em] uppercase transition-colors ${
            lightTheme ? 'text-vertProfond' : 'text-citron'
          }`}
        >
          MEDIA
        </span>
      </span>
    </div>
  );
};

export default Logo;
