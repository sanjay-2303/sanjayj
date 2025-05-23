
import React from "react";
import { Award, ExternalLink, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "./RevealOnScroll";

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "CEH Master",
      issuer: "EC-Council",
      date: "Mar 2025",
      image: "shield",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/1658f3kKDyjGgWsz2UFfcXmyfB7ML3i7X/view?usp=drive_link",
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "CEH Practical",
      issuer: "EC-Council",
      date: "Feb 2025",
      image: "shield",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/1eb3e2lSdj_7UDdkO_KUUYkOCqJDYYOXh/view?usp=drive_link",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "CNSP (SecOps Group)",
      issuer: "SecOps Group",
      date: "Jan 2025",
      image: "shield",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/13F_Vy-P7qia3tAk8wJrihvuqBFwzOsKC/view?usp=drive_link",
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "Oct 2024",
      image: "shield",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/12XygwOjMgcMDZ-Gjb7yqHz9ieEzKtRJd/view?usp=drive_link",
      color: "from-red-400 to-orange-600"
    },
    {
      title: "Cisco CyberOps",
      issuer: "Cisco",
      date: "Jul 2024",
      image: "shield",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/1YgJSlzhhi5nL6BDyMARR1OzpGBr821ri/view?usp=drive_link",
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Fortinet NSE",
      issuer: "Fortinet",
      date: "May 2024",
      image: "shield",
      linkText: "View Certificate",
      link: "https://drive.google.com/file/d/1n-us__ulXZSK6ZPecRk3o_QPe6RUND0K/view?usp=drive_link",
      color: "from-amber-400 to-yellow-600"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-cyber-dark cyber-grid">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4 relative group">
            <Award className="h-6 w-6 text-cyber-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyber-accent/20 to-cyber-tertiary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4 relative overflow-hidden">
            <span className="absolute inset-0 bg-white/30 animate-pulse-slow"></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <RevealOnScroll key={index} delay={index * 100} animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <Card 
                className="cyber-card-interactive overflow-hidden hover:border-cyber-accent/30 transition-all duration-500 relative group"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-cyber-navy rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-accent/20 to-cyber-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
                    <Shield className="h-8 w-8 text-cyber-accent relative z-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center group-hover:text-cyber-accent transition-colors duration-300">{cert.title}</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-cyber-accent">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                  
                  {/* Badge decoration */}
                  <div className="mt-4 flex justify-center">
                    <div className="relative w-24 h-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-accent to-cyber-tertiary rounded-full animate-pulse-slow"></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center pb-6">
                  <Button 
                    asChild
                    variant="outline" 
                    className="border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10 relative group overflow-hidden"
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyber-secondary/20 to-cyber-tertiary/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                      <span className="relative z-10">{cert.linkText}</span>
                      <ExternalLink className="ml-1 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
                <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="h-4 w-4 text-cyber-accent/70" />
                </span>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
