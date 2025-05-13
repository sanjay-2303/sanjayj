
import React from "react";
import { Folder } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Image-Based Key Management for File Encryption",
      description: "Developed a file encryption system with image-based key generation using AES. Achieved 97% accuracy in secure data transmission.",
      tools: ["Python", "AES"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-cyber-darker">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Folder className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="cyber-card hover:shadow-lg hover:shadow-cyber-accent/10 transition-all duration-300"
            >
              <CardHeader>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="outline" 
                      className="border-cyber-tertiary text-cyber-tertiary"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <a
                  href={project.link}
                  className="text-cyber-accent hover:underline text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
