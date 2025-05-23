
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail, BriefcaseBusiness } from "lucide-react";

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const specialtyTexts = ["VAPT", "SIEM", "Cloud Security", "DevSecOps"];
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Typewriter effect
  useEffect(() => {
    const currentText = specialtyTexts[currentTextIndex];
    
    const type = () => {
      if (isDeleting) {
        setTypewriterText(currentText.substring(0, typewriterIndex - 1));
        setTypewriterIndex(prev => prev - 1);
        setTypingSpeed(50); // Faster deletion speed
        
        if (typewriterIndex <= 1) {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % specialtyTexts.length);
          setTypingSpeed(300); // Pause before typing next
        }
      } else {
        setTypewriterText(currentText.substring(0, typewriterIndex + 1));
        setTypewriterIndex(prev => prev + 1);
        setTypingSpeed(150); // Normal typing speed
        
        if (typewriterIndex >= currentText.length) {
          setTypingSpeed(2000); // Pause at end
          setIsDeleting(true);
        }
      }
    };
    
    typingRef.current = setTimeout(type, typingSpeed);
    
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [typewriterIndex, currentTextIndex, isDeleting, typingSpeed]);
  
  // Cursor follow effect  
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

  // Calculate parallax effect based on mouse position
  const getParallaxStyle = (speed: number) => {
    if (typeof window === 'undefined') return {};
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mousePosition.x - centerX) * speed;
    const moveY = (mousePosition.y - centerY) * speed;
    
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0 cyber-grid">
      {/* Animated background particles */}
      <div className="cyber-particles" id="particles-js"></div>
      
      {/* Scan lines effect */}
      <div className="scan-lines"></div>
      
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <div className="absolute w-96 h-96 rounded-full bg-cyber-secondary/20 blur-3xl top-1/4 -left-48 animate-pulse-slow" 
          style={getParallaxStyle(-0.02)} />
        <div className="absolute w-96 h-96 rounded-full bg-cyber-tertiary/10 blur-3xl bottom-1/4 -right-48 animate-pulse-slow" 
          style={{...getParallaxStyle(-0.03), animationDelay: "1s"}} />
        <div className="absolute w-64 h-64 rounded-full bg-cyber-accent/5 blur-2xl top-1/3 right-1/4 animate-pulse-slow" 
          style={{...getParallaxStyle(-0.01), animationDelay: "1.5s"}} />
        
        {/* Additional interactive elements */}
        <div className="absolute w-20 h-20 bg-blue-500/30 blur-xl rounded-full animate-pulse" 
          style={{
            top: `${50 + Math.sin(Date.now() / 1000) * 10}%`,
            left: `${30 + Math.cos(Date.now() / 1500) * 10}%`,
            ...getParallaxStyle(0.05)
          }} />
        <div className="absolute w-16 h-16 bg-purple-500/20 blur-xl rounded-full animate-pulse" 
          style={{
            bottom: `${30 + Math.sin(Date.now() / 1200) * 8}%`,
            right: `${20 + Math.cos(Date.now() / 1300) * 8}%`,
            ...getParallaxStyle(0.04),
            animationDelay: "0.7s"
          }} />
          
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(13,17,23,0)_0%,rgba(13,17,23,0.8)_80%)]" />
      </div>
      
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4">
            <span className="block text-white">Sanjay J</span>
            <span className="text-gradient animate-gradient-shift bg-size-200">Security Analyst</span>
          </h1>
          
          <div className="mt-2 mb-6">
            <div className="text-sm md:text-base lg:text-lg text-gray-300 font-medium tracking-wider uppercase relative overflow-hidden cyber-border p-4 min-h-[2.5rem]">
              <span className="text-cyber-accent inline-block">{typewriterText}</span>
              <span className="inline-block w-1 h-5 bg-cyber-accent ml-1 animate-pulse"></span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-cyber-accent font-medium italic cursor-glow">
            "Detect. Defend. Disrupt."
          </p>
          
          {/* Interactive elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-8">
            <div className="p-4 bg-cyber-navy/60 border border-cyber-accent/20 rounded-md backdrop-blur-sm transform transition-all hover:scale-105 hover:border-cyber-accent/50 cursor-pointer flex flex-col items-center">
              <div className="w-12 h-12 text-cyber-accent mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Vulnerability Assessment</h3>
              <p className="text-sm text-gray-400">Identify security weaknesses</p>
            </div>
            
            <div className="p-4 bg-cyber-navy/60 border border-cyber-secondary/20 rounded-md backdrop-blur-sm transform transition-all hover:scale-105 hover:border-cyber-secondary/50 cursor-pointer flex flex-col items-center">
              <div className="w-12 h-12 text-cyber-secondary mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">SIEM Solutions</h3>
              <p className="text-sm text-gray-400">Real-time security monitoring</p>
            </div>
            
            <div className="p-4 bg-cyber-navy/60 border border-cyber-tertiary/20 rounded-md backdrop-blur-sm transform transition-all hover:scale-105 hover:border-cyber-tertiary/50 cursor-pointer flex flex-col items-center">
              <div className="w-12 h-12 text-cyber-tertiary mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">DevSecOps</h3>
              <p className="text-sm text-gray-400">Security integrated development</p>
            </div>
          </div>
          
          {/* Button */}
          <div className="mb-6">
            <Button 
              asChild
              size="lg"
              className="relative overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-r from-[#F97316] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#F97316] text-white font-bold py-3 px-8 rounded-full shadow-lg"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <a href="#contact">
                <div className="absolute inset-0 bg-white/20 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                <div className="relative flex items-center space-x-2">
                  <BriefcaseBusiness className="h-5 w-5" />
                  <span className="text-lg">Let's Work</span>
                </div>
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-2">
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
      
      {/* Security metrics display - inspired by the dashboard image */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-4xl px-4 hidden md:block">
        <div className="flex items-center justify-between gap-4 bg-cyber-navy/40 backdrop-blur-sm border border-white/10 rounded-lg p-2 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-gray-300">SIEM Implementation: 98%</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-xs text-gray-300">Vulnerabilities Patched: 1,240+</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></div>
            <span className="text-xs text-gray-300">Security Score: 94%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
