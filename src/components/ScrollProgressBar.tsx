
import React, { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercent = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 h-1 z-50 w-full bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-cyber-accent via-cyber-secondary to-cyber-tertiary animate-gradient-shift bg-size-200" 
        style={{ width: `${scrollProgress}%`, transition: 'width 0.2s ease-out' }} 
      />
    </div>
  );
};

export default ScrollProgressBar;
