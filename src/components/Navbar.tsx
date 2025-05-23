
import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Navigation items
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-cyber-darker/90 backdrop-blur-lg shadow-[0_4px_30px_rgba(79,70,229,0.1)] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="flex items-center gap-2 group"
          >
            <Shield className="h-6 w-6 text-cyber-accent group-hover:text-cyan-400 transition-colors duration-300" />
            <span className="text-xl md:text-2xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-cyber-accent to-cyber-tertiary bg-clip-text text-transparent">SANJAY</span>
              <span className="text-cyber-accent ml-1">J</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className={`text-sm font-medium relative px-2 py-1 transition-colors duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "text-cyber-accent"
                        : "text-gray-300 hover:text-cyber-accent"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href.substring(1) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-accent"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-white hover:bg-cyber-navy/50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-cyber-darker/95 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] border-t border-cyber-accent/10" : "max-h-0"
        }`}
      >
        <nav className="py-4 px-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className={`block py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-cyber-navy/70 text-cyber-accent"
                      : "text-gray-300 hover:bg-cyber-navy/30 hover:text-cyber-accent"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
