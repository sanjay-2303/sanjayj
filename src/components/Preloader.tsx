
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
      <div className="flex flex-col items-center px-4 text-center">
        {/* Animated shield with glow - improved for mobile */}
        <div className="relative">
          <Shield className="h-16 w-16 sm:h-20 sm:w-20 text-cyber-accent animate-pulse-slow relative z-10" />
          <div className="absolute inset-0 bg-cyber-accent rounded-full opacity-20 blur-xl animate-pulse-slow" style={{ animationDelay: "0.3s" }}></div>
        </div>
        
        {/* Loading text - removed "SECURITY" */}
        <div className="mt-6 text-cyber-accent font-mono text-lg sm:text-xl">
          <span className="inline-block animate-pulse">L</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "100ms" }}>O</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "200ms" }}>A</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "300ms" }}>D</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "400ms" }}>I</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "500ms" }}>N</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "600ms" }}>G</span>
        </div>
        
        {/* Progress bar - made responsive */}
        <div className="mt-6 sm:mt-8 w-48 sm:w-60 h-2 bg-cyber-navy/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyber-accent to-cyber-tertiary"
            style={{ width: `${progress}%`, transition: "width 0.3s ease-out" }}
          ></div>
        </div>
        
        {/* Progress percentage - improved size */}
        <div className="mt-2 text-cyber-accent font-mono text-sm">
          {progress}%
        </div>
        
        {/* Digital circuit lines decoration - optimized for mobile */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute left-0 top-1/3 w-12 sm:w-20 h-px bg-cyber-accent/20"></div>
          <div className="absolute right-0 top-2/3 w-12 sm:w-20 h-px bg-cyber-accent/20"></div>
          <div className="absolute left-1/4 bottom-0 h-12 sm:h-20 w-px bg-cyber-accent/20"></div>
          <div className="absolute right-1/4 top-0 h-12 sm:h-20 w-px bg-cyber-accent/20"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
