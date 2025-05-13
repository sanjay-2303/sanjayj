
import React, { useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'none';
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children,
  threshold = 0.1,
  delay = 0,
  animation = 'fade-up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div ref={ref} className={`reveal reveal-${animation}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
