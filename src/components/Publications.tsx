
import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from "./RevealOnScroll";

const Publications: React.FC = () => {
  const publications = [
    {
      title: "Image-Based Key Management for Enhanced File Encryption",
      publisher: "IEEE",
      date: "2023",
      description: "This research introduces a novel approach to key management using image-based cryptographic techniques for secure file encryption, enhancing data protection measures in modern cybersecurity frameworks.",
      link: "https://ieeexplore.ieee.org/document/10575769",
      tags: ["Cryptography", "Key Management", "Image Processing", "File Security"]
    },
    {
      title: "Advanced Threat Detection in SIEM Environments",
      publisher: "Research in Progress",
      date: "2024",
      description: "Ongoing research exploring machine learning applications in Security Information and Event Management (SIEM) systems to improve threat detection accuracy and reduce false positives.",
      link: "#",
      tags: ["SIEM", "Machine Learning", "Threat Intelligence", "Security Analytics"]
    }
  ];

  return (
    <section id="publications" className="section-padding bg-cyber-dark cyber-grid">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <FileText className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Publications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {publications.map((publication, index) => (
            <RevealOnScroll
              key={index} 
              delay={index * 150}
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <Card className="cyber-card h-full overflow-hidden group hover:border-cyber-accent/30 transition-colors duration-300">
                <CardHeader className="border-b border-gray-800">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-white">{publication.title}</h3>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{publication.publisher}</span>
                      <span className="text-cyber-accent">{publication.date}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <p className="text-gray-300">{publication.description}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="border-cyber-tertiary text-cyber-tertiary bg-cyber-tertiary/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 mt-auto">
                  <a
                    href={publication.link}
                    className="text-cyber-accent hover:underline text-sm flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Read Publication</span>
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
