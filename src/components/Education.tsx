
import React from "react";
import { Book } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-cyber-darker">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Book className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Education</h2>
        </div>
        
        <Card className="cyber-card max-w-2xl mx-auto">
          <CardHeader className="pb-2">
            <h3 className="text-xl font-semibold text-white">
              B.Tech in Computer Science Engineering
            </h3>
            <div className="text-lg font-medium text-cyber-accent">
              Karunya Institute of Technology and Sciences, Coimbatore
            </div>
            <div className="text-sm text-gray-400">2020 – 2024</div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-300">
              <p>Graduated First Class</p>
              <div className="mt-4 flex items-center">
                <div className="h-2 flex-1 rounded-full bg-gray-700">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-cyber-accent to-cyber-secondary animate-pulse-slow"
                    style={{ width: "97%" }}
                  ></div>
                </div>
                <span className="ml-3 text-cyber-accent font-medium">First Class</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
