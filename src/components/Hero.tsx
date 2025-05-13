
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  useEffect(() => {
    // Cursor follow effect
    const handleMouseMove = (event: MouseEvent) => {
      const glowElements = document.querySelectorAll(".cursor-glow");
      const x = event.clientX;
      const y = event.clientY;
      
      glowElements.forEach((el) => {
        const element = el as HTMLElement;
        // Calculate distance between cursor and element
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate how far the cursor is from the element
        const distance = Math.sqrt(
          Math.pow(x - centerX, 2) + 
          Math.pow(y - centerY, 2)
        );
        
        // The closer the cursor, the stronger the glow
        const maxDistance = 300;
        const intensity = Math.max(0, 1 - distance / maxDistance);
        
        if (intensity > 0) {
          element.style.textShadow = `0 0 ${10 + intensity * 20}px rgba(74, 222, 128, ${intensity * 0.8})`;
          element.style.transform = `scale(${1 + intensity * 0.05})`;
          element.style.transition = "transform 0.2s ease-out, text-shadow 0.2s ease-out";
        } else {
          element.style.textShadow = "";
          element.style.transform = "";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0 cyber-grid">
      {/* Animated background particles */}
      <div className="cyber-particles" id="particles-js"></div>
      
      {/* Scan lines effect */}
      <div className="scan-lines"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 rounded-full bg-cyber-secondary/20 blur-3xl top-1/4 -left-48 animate-pulse-slow" />
        <div className="absolute w-96 h-96 rounded-full bg-cyber-tertiary/10 blur-3xl bottom-1/4 -right-48 animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute w-64 h-64 rounded-full bg-cyber-accent/5 blur-2xl top-1/3 right-1/4 animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(13,17,23,0)_0%,rgba(13,17,23,0.8)_80%)]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4">
            <span className="block text-white animate-floating">Sanjay J</span>
            <span className="text-gradient animate-gradient-shift bg-size-200">Security Analyst</span>
          </h1>
          
          <div className="mt-2 mb-6">
            <p className="text-sm md:text-base lg:text-lg text-gray-300 font-medium tracking-wider uppercase relative overflow-hidden cyber-border p-2">
              <span className="animate-scale-pulse inline-block">VAPT</span> <span className="mx-1">|</span> 
              <span className="animate-scale-pulse inline-block" style={{ animationDelay: "0.3s" }}>SIEM</span> <span className="mx-1">|</span> 
              <span className="animate-scale-pulse inline-block" style={{ animationDelay: "0.6s" }}>Cloud Security</span> <span className="mx-1">|</span> 
              <span className="animate-scale-pulse inline-block" style={{ animationDelay: "0.9s" }}>DevSecOps</span>
            </p>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-cyber-accent font-medium italic cursor-glow">
            "Detect. Defend. Disrupt."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button 
              asChild
              size="lg"
              className="bg-cyber-accent hover:bg-cyber-accent/80 text-black font-medium group relative overflow-hidden"
            >
              <a href="https://drive.google.com/file/d/1A51XBahNM1HZ2oRX2XWjMdg2tkkflUbU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 
                  ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r 
                  from-cyber-accent via-cyber-tertiary to-cyber-accent opacity-30"></span>
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline" 
              className="border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10 group relative overflow-hidden"
            >
              <a href="https://www.linkedin.com/in/sanjay-j--/" target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 
                  ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r 
                  from-cyber-secondary to-cyber-tertiary opacity-20"></span>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline" 
              className="border-cyber-tertiary text-cyber-tertiary hover:bg-cyber-tertiary/10 group relative overflow-hidden"
            >
              <a href="mailto:sanjayjeyasekar@gmail.com">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 
                  ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r 
                  from-cyber-tertiary to-cyber-accent opacity-20"></span>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
          
          <div className="mt-12">
            <a 
              href="#about" 
              className="inline-block animate-bounce rounded-full p-3 bg-cyber-navy/50 text-white/80 hover:bg-cyber-navy hover:text-white transition-colors hover:shadow-lg hover:shadow-cyber-accent/20"
              aria-label="Scroll down"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
