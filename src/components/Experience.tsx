
import React, { useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RevealOnScroll from "./RevealOnScroll";
import { useIsMobile } from "@/hooks/use-mobile";

const Experience: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  const experiences = [
    {
      company: "Develupers",
      role: "Security Analyst",
      period: "Dec 2024 – Present",
      location: "Remote, India",
      responsibilities: [
        "Secured GitHub repos using access control and secrets management",
        "Deployed Wazuh and custom rules for endpoint monitoring",
        "Integrated and automated log monitoring for real-time threat detection"
      ],
      achievements: [
        "Reduced security incidents by 35% through improved monitoring",
        "Automated 70% of threat detection processes",
        "Implemented zero-trust architecture for developer workflows"
      ]
    },
    {
      company: "Secure Network Solutions Pvt Ltd",
      role: "Network Security Engineer",
      period: "Jun 2024 – Nov 2024",
      location: "Chennai, India",
      responsibilities: [
        "Deployed FortiSIEM/Wazuh across on-prem/cloud",
        "Integrated logs from AWS, S3, IAM, and network devices",
        "Conducted VAs, improved response workflows, and engaged with enterprise clients"
      ],
      achievements: [
        "Streamlined incident response time by 45%",
        "Enhanced visibility across hybrid infrastructure",
        "Detected and mitigated 3 critical zero-day vulnerabilities"
      ]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="experience" className="section-padding bg-cyber-dark cyber-grid">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Briefcase className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Experience <span className="text-lg md:text-xl text-cyber-accent">(1+ Year)</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4"></div>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-accent via-cyber-secondary to-cyber-tertiary transform md:-translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <RevealOnScroll 
              key={index} 
              animation={isMobile ? 'fade-up' : (index % 2 === 0 ? 'fade-right' : 'fade-left')} 
              delay={index * 150}
            >
              <div className={`flex flex-col ${isMobile ? '' : (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')} items-center`}>
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <Card 
                    className={`cyber-card-interactive border-l-4 border-l-cyber-accent relative cursor-pointer transition-all duration-300 ${expandedItem === index ? 'cyber-border shadow-xl' : ''}`}
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-cyber-accent flex items-center justify-center z-10 hidden md:flex">
                      <div className="w-2 h-2 rounded-full bg-cyber-dark"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <ChevronRight 
                          className={`h-5 w-5 text-cyber-accent transition-transform duration-300 ${expandedItem === index ? 'rotate-90' : ''}`} 
                        />
                      </div>
                      <div className="text-lg font-medium text-cyber-accent">{exp.company}</div>
                      <div className="text-sm text-gray-400 flex flex-wrap justify-between">
                        <span>{exp.period}</span>
                        <span>{exp.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-md font-medium text-cyber-tertiary mb-2">Responsibilities</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-baseline">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyber-tertiary mr-2 mt-1.5"></span>
                                <span className="text-gray-300">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {expandedItem === index && (
                          <div className="animate-fade-in">
                            <h4 className="text-md font-medium text-cyber-secondary mb-2">Key Achievements</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achieveIndex) => (
                                <li key={achieveIndex} className="flex items-baseline">
                                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-secondary mr-2 mt-1.5"></span>
                                  <span className="text-gray-300">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
