
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-cyber-darker/90 backdrop-blur-lg shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold text-gradient tracking-wider"
          >
            SANJAY<span className="text-cyber-accent">J</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-cyber-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyber-accent after:transition-all hover:after:w-full"
                  >
                    {item.label}
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
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-darker/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <nav className="py-4 px-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="block py-2 text-sm font-medium text-gray-300 hover:text-cyber-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
