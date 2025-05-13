
import React, { useState } from "react";
import { Folder, ExternalLink, Github, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from "./RevealOnScroll";

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Image-Based Key Management for File Encryption",
      description: "Developed a file encryption system with image-based key generation using AES. Achieved 97% accuracy in secure data transmission.",
      tools: ["Python", "AES", "Cryptography", "OpenCV"],
      link: "#",
      image: "bg-gradient-to-br from-cyan-500 to-blue-800"
    },
    {
      title: "Security Log Analyzer",
      description: "Created an automated log analysis tool that uses pattern recognition to identify potential security threats in system logs.",
      tools: ["Python", "Regex", "Data Analysis", "Machine Learning"],
      link: "#",
      image: "bg-gradient-to-br from-emerald-500 to-green-900"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-cyber-darker cyber-grid">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Folder className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <RevealOnScroll
              key={index} 
              delay={index * 150}
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <Card 
                className="cyber-card-interactive h-full overflow-hidden group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`h-32 ${project.image} relative overflow-hidden transition-all duration-500`}>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Lock className={`h-10 w-10 text-white transition-all duration-700 ${
                      hoveredProject === index ? 'opacity-0 scale-150' : 'opacity-70'
                    }`} />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-cyber-navy via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
                
                <CardHeader className="relative pt-0 z-10 -mt-8">
                  <div className="bg-cyber-navy p-4 rounded-t-lg border-t border-x border-cyber-accent/20 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant="outline" 
                        className={`border-cyber-tertiary text-cyber-tertiary transition-all duration-300 ${
                          hoveredProject === index ? 'bg-cyber-tertiary/10' : ''
                        }`}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a
                    href={project.link}
                    className="text-cyber-accent hover:underline text-sm flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm flex items-center group transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span>Source</span>
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

export default Projects;
