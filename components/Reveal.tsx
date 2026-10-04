import React, { useEffect, useRef, useState } from 'react';

/**
 * Apparition au défilement : l'élément se révèle une seule fois, quand il entre dans l'écran.
 * Si l'utilisateur demande moins d'animations, tout s'affiche immédiatement.
 */
type Variant = 'up' | 'left' | 'right' | 'scale' | 'fade';

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;          // en millisecondes
  className?: string;
  as?: 'div' | 'li' | 'section' | 'span';
  amount?: number;         // part de l'élément visible avant déclenchement
};

const START: Record<Variant, string> = {
  up: 'translate3d(0,34px,0)',
  left: 'translate3d(-34px,0,0)',
  right: 'translate3d(34px,0,0)',
  scale: 'scale(.965)',
  fade: 'none',
};

export const Reveal: React.FC<Props> = ({
  children, variant = 'up', delay = 0, className = '', as = 'div', amount = 0.15,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: amount, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : START[variant],
        transition: `opacity .7s cubic-bezier(.22,.8,.3,1) ${delay}ms, transform .7s cubic-bezier(.22,.8,.3,1) ${delay}ms`,
        willChange: shown ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
