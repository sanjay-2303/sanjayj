import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail, BriefcaseBusiness, Shield, Activity, Lock } from "lucide-react";

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [securityMetrics, setSecurityMetrics] = useState({
    detected: 0,
    blocked: 0,
    critical: 0,
    vulnerabilities: 0,
    threats: 0,
    securityScore: 0,
    networkSecurity: 0
  });
  
  const specialtyTexts = ["VAPT", "SIEM", "Cloud Security", "DevSecOps"];
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<NodeJS.Timeout | null>(null);
  
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
  
  // Animate security metrics
  useEffect(() => {
    // Target final values
    const targetMetrics = {
      detected: 92,
      blocked: 45,
      critical: 13,
      vulnerabilities: 1240,
      threats: 3587,
      securityScore: 94,
      networkSecurity: 99.8
    };
    
    // Increment values gradually for animation effect
    metricsRef.current = setInterval(() => {
      setSecurityMetrics(prev => ({
        detected: Math.min(prev.detected + 3, targetMetrics.detected),
        blocked: Math.min(prev.blocked + 2, targetMetrics.blocked),
        critical: Math.min(prev.critical + 1, targetMetrics.critical),
        vulnerabilities: Math.min(prev.vulnerabilities + 40, targetMetrics.vulnerabilities),
        threats: Math.min(prev.threats + 100, targetMetrics.threats),
        securityScore: Math.min(prev.securityScore + 3, targetMetrics.securityScore),
        networkSecurity: Math.min(prev.networkSecurity + 3, targetMetrics.networkSecurity)
      }));
    }, 100);
    
    return () => {
      if (metricsRef.current) clearInterval(metricsRef.current);
    };
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

  // Progress bar component for dashboard
  const ProgressBar = ({ value, color }: { value: number, color: string }) => (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
      <div 
        className={`h-2.5 rounded-full ${color}`} 
        style={{ width: `${value}%`, transition: 'width 1s ease-in-out' }}
      />
    </div>
  );

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
      
      <div className="container mx-auto z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Personal introduction */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex px-3 py-1 rounded-full bg-cyber-navy/40 border border-cyber-accent/30 text-xs font-medium mb-4">
              <span className="text-cyber-accent">Cybersecurity Professional</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4">
              <span className="block text-white">Sanjay J</span>
              <span className="text-gradient animate-gradient-shift bg-size-200">Security Analyst</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-gray-300 max-w-xl">
              Securing digital landscapes with 
              <span className="font-semibold text-white"> advanced threat detection</span> & 
              <span className="font-semibold text-white"> vulnerability assessment</span>
            </p>
            
            <div className="mt-2 mb-6">
              <div className="text-sm md:text-base lg:text-lg text-gray-300 font-medium tracking-wider relative overflow-hidden cyber-border p-4 min-h-[2.5rem] inline-block">
                <span className="text-cyber-accent inline-block">{typewriterText}</span>
                <span className="inline-block w-1 h-5 bg-cyber-accent ml-1 animate-pulse"></span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-cyber-accent font-medium italic cursor-glow">
              "Detect. Defend. Disrupt."
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-cyber-accent hover:bg-cyber-accent/80 text-black font-medium group relative overflow-hidden"
              >
                <a href="#contact">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 
                    ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r 
                    from-cyber-accent via-cyber-tertiary to-cyber-accent opacity-30"></span>
                  <BriefcaseBusiness className="mr-2 h-4 w-4" />
                  Let's Work
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline" 
                className="border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10 group relative overflow-hidden"
              >
                <a href="https://drive.google.com/file/d/1A51XBahNM1HZ2oRX2XWjMdg2tkkflUbU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 
                    ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r 
                    from-cyber-secondary to-cyber-tertiary opacity-20"></span>
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right column - Security Dashboard */}
          <div className="bg-cyber-navy/30 backdrop-blur-md rounded-lg border border-white/10 p-4 shadow-xl transform transition-all duration-300 hover:shadow-cyber-accent/10" style={getParallaxStyle(0.02)}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-cyber-accent" />
                <h3 className="text-lg font-semibold text-white">Security Dashboard</h3>
              </div>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            {/* Threat Monitor Panel */}
            <div className="bg-cyber-navy/70 rounded-md p-3 mb-4 border border-white/5">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-sm font-medium text-gray-300">Threat Monitor</h4>
                <span className="px-2 py-0.5 rounded bg-cyber-tertiary/20 text-cyber-tertiary text-xs font-medium">
                  Live
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-cyber-navy/70 rounded p-2">
                  <div className="text-yellow-500 mb-1">
                    <Activity className="h-5 w-5 mx-auto" />
                  </div>
                  <div className="text-xl font-bold">{securityMetrics.detected}</div>
                  <div className="text-xs text-gray-400">Detected</div>
                </div>
                
                <div className="bg-cyber-navy/70 rounded p-2">
                  <div className="text-green-500 mb-1">
                    <Shield className="h-5 w-5 mx-auto" />
                  </div>
                  <div className="text-xl font-bold">{securityMetrics.blocked}</div>
                  <div className="text-xs text-gray-400">Blocked</div>
                </div>
                
                <div className="bg-cyber-navy/70 rounded p-2">
                  <div className="text-red-500 mb-1">
                    <Lock className="h-5 w-5 mx-auto" />
                  </div>
                  <div className="text-xl font-bold">{securityMetrics.critical}</div>
                  <div className="text-xs text-gray-400">Critical</div>
                </div>
              </div>
            </div>
            
            {/* Security Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyber-navy/50 p-3 rounded border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4 text-yellow-500" />
                  <span className="text-xs text-gray-300">Vulnerabilities Patched</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-bold">{securityMetrics.vulnerabilities}+</span>
                  <span className="text-xs text-green-500 font-medium">+12%</span>
                </div>
              </div>
              
              <div className="bg-cyber-navy/50 p-3 rounded border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="h-4 w-4 text-purple-500" />
                  <span className="text-xs text-gray-300">Threats Detected</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-bold">{securityMetrics.threats.toLocaleString()}</span>
                  <span className="text-xs text-red-500 font-medium">-8%</span>
                </div>
              </div>
            </div>
            
            {/* Progress bars */}
            <div className="mt-4">
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">SIEM Implementation</span>
                  <span className="text-cyber-tertiary">98%</span>
                </div>
                <ProgressBar value={98} color="bg-blue-500" />
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Threat Detection</span>
                  <span className="text-cyber-tertiary">94%</span>
                </div>
                <ProgressBar value={94} color="bg-green-500" />
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Incident Response</span>
                  <span className="text-cyber-tertiary">92%</span>
                </div>
                <ProgressBar value={92} color="bg-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Social links and scroll indicator */}
        <div className="flex flex-col items-center mt-16">
          <div className="flex gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/sanjay-j--/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyber-tertiary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:sanjayjeyasekar@gmail.com"
              className="text-white/60 hover:text-cyber-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
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
    </section>
  );
};

export default Hero;
