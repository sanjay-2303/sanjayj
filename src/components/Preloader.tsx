
import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time with progress
    const duration = 2500; // 2.5 seconds total
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      setProgress(Math.min(100, Math.floor((currentStep / steps) * 100)));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "auto"; // Enable scrolling when loaded
        }, 300); // Short delay after reaching 100%
      }
    }, interval);

    // Disable scrolling during loading
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-darker">
      <div className="flex flex-col items-center">
        {/* Animated shield with glow */}
        <div className="relative">
          <Shield className="h-20 w-20 text-cyber-accent animate-pulse-slow relative z-10" />
          <div className="absolute inset-0 bg-cyber-accent rounded-full opacity-20 blur-xl animate-pulse-slow" style={{ animationDelay: "0.3s" }}></div>
        </div>
        
        {/* Cyberpunk-style text */}
        <div className="mt-6 text-cyber-accent font-mono text-xl">
          <span className="inline-block animate-pulse">S</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "100ms" }}>E</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "200ms" }}>C</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "300ms" }}>U</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "400ms" }}>R</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "500ms" }}>I</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "600ms" }}>T</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "700ms" }}>Y</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "800ms" }}> </span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "900ms" }}>L</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "1000ms" }}>O</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "1100ms" }}>A</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "1200ms" }}>D</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "1300ms" }}>I</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "1400ms" }}>N</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "1500ms" }}>G</span>
        </div>
        
        {/* Progress bar */}
        <div className="mt-8 w-60 h-2 bg-cyber-navy/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyber-accent to-cyber-tertiary"
            style={{ width: `${progress}%`, transition: "width 0.3s ease-out" }}
          ></div>
        </div>
        
        {/* Progress percentage */}
        <div className="mt-2 text-cyber-accent font-mono text-sm">
          {progress}%
        </div>
        
        {/* Digital circuit lines decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/3 w-20 h-px bg-cyber-accent/20"></div>
          <div className="absolute right-0 top-2/3 w-20 h-px bg-cyber-accent/20"></div>
          <div className="absolute left-1/4 bottom-0 h-20 w-px bg-cyber-accent/20"></div>
          <div className="absolute right-1/4 top-0 h-20 w-px bg-cyber-accent/20"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
