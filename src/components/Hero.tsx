
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 rounded-full bg-cyber-secondary/20 blur-3xl top-1/4 -left-48" />
        <div className="absolute w-96 h-96 rounded-full bg-cyber-tertiary/10 blur-3xl bottom-1/4 -right-48" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(13,17,23,0)_0%,rgba(13,17,23,0.8)_80%)]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4">
            <span className="block text-white">Sanjay J</span>
            <span className="text-gradient animate-gradient-shift bg-size-200">Security Analyst</span>
          </h1>
          
          <div className="mt-2 mb-6">
            <p className="text-sm md:text-base lg:text-lg text-gray-300 font-medium tracking-wider uppercase">
              VAPT | SIEM | Cloud Security | DevSecOps
            </p>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-cyber-accent font-medium italic">
            "Detect. Defend. Disrupt."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button 
              asChild
              size="lg"
              className="bg-cyber-accent hover:bg-cyber-accent/80 text-black font-medium"
            >
              <a href="https://drive.google.com/file/d/1A51XBahNM1HZ2oRX2XWjMdg2tkkflUbU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline" 
              className="border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10"
            >
              <a href="https://www.linkedin.com/in/sanjay-j--/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline" 
              className="border-cyber-tertiary text-cyber-tertiary hover:bg-cyber-tertiary/10"
            >
              <a href="mailto:sanjayjeyasekar@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
          
          <div className="mt-12">
            <a 
              href="#about" 
              className="inline-block animate-bounce rounded-full p-2 bg-cyber-navy/50 text-white/80 hover:bg-cyber-navy hover:text-white transition-colors"
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
