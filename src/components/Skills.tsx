
import React, { useState } from "react";
import { Code, Shield, Cloud, Database, Bug } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "SIEM & SOC Monitoring",
      icon: <Database className="h-8 w-8 text-cyber-accent" />,
      skills: ["FortiSIEM", "Wazuh", "IBM X-Force", "Sophos"],
      description: "Security Information and Event Management for real-time threat monitoring."
    },
    {
      title: "VAPT Tools",
      icon: <Bug className="h-8 w-8 text-cyber-accent" />,
      skills: ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark"],
      description: "Vulnerability assessment and penetration testing tools."
    },
    {
      title: "Cloud Security",
      icon: <Cloud className="h-8 w-8 text-cyber-accent" />,
      skills: ["IAM", "Defender", "CloudTrail", "AWS & Azure (in progress)"],
      description: "Secure cloud infrastructure with proper access controls and monitoring."
    },
    {
      title: "GRC",
      icon: <Shield className="h-8 w-8 text-cyber-accent" />,
      skills: ["ISO 27001", "NIST basics", "Risk assessment"],
      description: "Governance, Risk Management and Compliance for security alignment."
    },
    {
      title: "DevSecOps & Automation",
      icon: <Code className="h-8 w-8 text-cyber-accent" />,
      skills: ["CI/CD security", "Python scripting", "Web development basics"],
      description: "Security integration in development lifecycle with automation."
    },
    {
      title: "Soft Skills & Programming",
      icon: <Code className="h-8 w-8 text-cyber-accent" />,
      skills: ["Time Management", "Communication", "Decision Making", "Python", "SQL"],
      description: "Strong interpersonal abilities with programming skills."
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-cyber-dark to-cyber-darker cyber-grid">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Code className="h-6 w-6 text-cyber-accent animate-spin-slow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`cyber-card-interactive ${activeCard === index ? 'cyber-border' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className={`p-3 rounded-full bg-cyber-navy/70 transition-all duration-300 ${activeCard === index ? 'box-glow text-cyber-accent scale-110' : ''}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mt-3 text-white transition-all duration-300 ${activeCard === index ? 'text-glow text-cyber-accent' : ''}`}>
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 text-center h-10 line-clamp-2">
                  {category.description}
                </p>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className={`h-2 w-2 rounded-full bg-cyber-accent mr-2 transition-all duration-300 ${activeCard === index ? 'animate-pulse-slow' : ''}`} 
                        style={{ animationDelay: `${skillIndex * 0.2}s` }}></span>
                      <span className={`text-gray-300 transition-all duration-300 ${activeCard === index ? 'text-white' : ''}`}>
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
