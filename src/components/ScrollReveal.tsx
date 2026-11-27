import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fallbackVisible, setFallbackVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const supportsScrollDriven =
      window.CSS?.supports?.('(animation-timeline: view()) and (animation-range: entry)') ??
      false;
    const noReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: no-preference)').matches ?? false;

    if (supportsScrollDriven || !noReducedMotion) {
      setFallbackVisible(true);
      return;
    }

    // Fallback for browsers without scroll-driven animation support
    setFallbackVisible(false);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setFallbackVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`kairos-scroll-reveal transition-[opacity,transform] duration-500 ease-out ${
        fallbackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  );
};
