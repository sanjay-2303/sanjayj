
import React from "react";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "CEH Master",
      issuer: "EC-Council",
      date: "Oct 2023",
      image: "shield",
      linkText: "View Certificate",
      link: "#"
    },
    {
      title: "CNSP (SecOps Group)",
      issuer: "SecOps Group",
      date: "May 2023",
      image: "shield",
      linkText: "View Certificate",
      link: "#"
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "Aug 2023",
      image: "shield",
      linkText: "View Certificate",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-cyber-dark">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Award className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="cyber-card overflow-hidden hover:border-cyber-accent/30 transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-cyber-accent via-cyber-secondary to-cyber-tertiary"></div>
              <CardHeader className="pb-2">
                <div className="w-16 h-16 bg-cyber-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-cyber-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">{cert.title}</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-cyber-accent">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button 
                  asChild
                  variant="outline" 
                  className="border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    {cert.linkText}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
