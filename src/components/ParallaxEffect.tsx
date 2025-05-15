
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const ParallaxEffect: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial animation on page load
    const elements = document.querySelectorAll('.parallax-element');
    elements.forEach(el => {
      el.classList.add('animate-fade-in');
    });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Reduce parallax intensity on mobile
  const parallaxIntensity = isMobile ? 0.02 : 0.05;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background circles with parallax effect */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-cyber-accent/5 blur-3xl parallax-element"
        style={{ 
          transform: `translate3d(${scrollY * -parallaxIntensity * 0.5}px, ${scrollY * parallaxIntensity}px, 0)`,
          top: '10%',
          left: '5%',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      <div 
        className="absolute w-80 h-80 rounded-full bg-cyber-secondary/10 blur-3xl parallax-element"
        style={{ 
          transform: `translate3d(${scrollY * parallaxIntensity * 0.7}px, ${scrollY * parallaxIntensity * 0.5}px, 0)`,
          top: '30%',
          right: '10%',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      <div 
        className="absolute w-64 h-64 rounded-full bg-cyber-tertiary/10 blur-2xl parallax-element"
        style={{ 
          transform: `translate3d(${scrollY * -parallaxIntensity}px, ${scrollY * -parallaxIntensity * 0.3}px, 0)`,
          bottom: '15%',
          left: '15%',
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default ParallaxEffect;
