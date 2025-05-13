
import React from "react";
import { Book, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RevealOnScroll from "./RevealOnScroll";

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-cyber-darker cyber-grid">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Book className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4"></div>
        </div>
        
        <RevealOnScroll animation="fade-up">
          <Card className="cyber-card cyber-card-interactive max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-cyber-accent/10 rounded-full blur-xl"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-cyber-tertiary/10 rounded-full blur-xl"></div>
            
            <CardHeader className="pb-2 flex md:flex-row flex-col items-start md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-cyber-accent" />
                  B.Tech in Computer Science Engineering
                </h3>
                <div className="text-lg font-medium text-cyber-accent">
                  Karunya Institute of Technology and Sciences, Coimbatore
                </div>
                <div className="text-sm text-gray-400">2020 – 2024</div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <Award className="h-6 w-6 text-cyber-tertiary animate-pulse-slow mr-2" />
                <span className="text-cyber-tertiary font-medium">First Class</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="text-gray-300 space-y-6">
                <p>Graduated with First Class distinction, specializing in cybersecurity and network engineering.</p>
                
                <div className="space-y-2">
                  <h4 className="text-cyber-accent font-medium">Key Courses</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Network Security", "Cryptography", "Ethical Hacking", "Cloud Computing", "Database Management", "Web Security"].map((course, i) => (
                      <div key={i} className="text-sm bg-cyber-navy/50 rounded px-2 py-1 text-center">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Overall Performance</span>
                    <span className="text-sm text-cyber-accent font-medium">First Class</span>
                  </div>
                  <div className="h-2 flex-1 rounded-full bg-gray-700 overflow-hidden">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-cyber-accent to-cyber-secondary relative"
                      style={{ width: "97%" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-gradient-shift bg-size-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Education;
