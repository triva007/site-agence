import React, { useEffect, useRef } from 'react';

/** Fine jauge de lecture en haut de la page. */
export const ScrollProgress: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      el.style.transform = `scaleX(${p})`;
      el.style.opacity = p > 0.004 ? '1' : '0';
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div id="scroll-progress" ref={ref} className="w-full" style={{ transform: 'scaleX(0)', opacity: 0, transition: 'opacity .3s ease' }} aria-hidden="true" />;
};

export default ScrollProgress;
