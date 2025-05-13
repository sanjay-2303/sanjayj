
import React from "react";
import { ArrowUp, Shield } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-darker py-8 border-t border-gray-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-5 w-5 text-cyber-accent mr-2" />
            <div className="text-gray-400">
              © {currentYear} <span className="text-cyber-accent font-medium">Sanjay J</span>. All rights reserved.
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#about"
              className="text-gray-400 hover:text-cyber-accent transition-colors"
              aria-label="About"
            >
              About
            </a>
            <a 
              href="#skills"
              className="text-gray-400 hover:text-cyber-accent transition-colors"
              aria-label="Skills"
            >
              Skills
            </a>
            <a 
              href="#projects"
              className="text-gray-400 hover:text-cyber-accent transition-colors"
              aria-label="Projects"
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-gray-400 hover:text-cyber-accent transition-colors"
              aria-label="Contact"
            >
              Contact
            </a>
          </div>
          
          <a 
            href="#home"
            className="inline-block text-gray-400 hover:text-cyber-accent transition-colors p-2 bg-cyber-navy/50 rounded-full hover:bg-cyber-navy/70 group"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
