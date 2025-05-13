
import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Enable scrolling when loaded
    }, 1500);

    // Disable scrolling during loading
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-darker">
      <div className="flex flex-col items-center">
        <Shield className="h-16 w-16 text-cyber-accent animate-pulse-slow" />
        <div className="mt-4 text-cyber-accent font-mono">
          <span className="inline-block animate-pulse">L</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "100ms" }}>o</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "200ms" }}>a</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "300ms" }}>d</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "400ms" }}>i</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "500ms" }}>n</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "600ms" }}>g</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "700ms" }}>.</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "800ms" }}>.</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "900ms" }}>.</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
