
import React from "react";
import { Code, Shield, Cloud, Database, Bug } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "SIEM & SOC Monitoring",
      icon: <Database className="h-8 w-8 text-cyber-accent" />,
      skills: ["FortiSIEM", "Wazuh", "IBM X-Force", "Sophos"]
    },
    {
      title: "VAPT Tools",
      icon: <Bug className="h-8 w-8 text-cyber-accent" />,
      skills: ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark"]
    },
    {
      title: "Cloud Security",
      icon: <Cloud className="h-8 w-8 text-cyber-accent" />,
      skills: ["IAM", "Defender", "CloudTrail", "AWS & Azure (in progress)"]
    },
    {
      title: "GRC",
      icon: <Shield className="h-8 w-8 text-cyber-accent" />,
      skills: ["ISO 27001", "NIST basics", "Risk assessment"]
    },
    {
      title: "DevSecOps & Automation",
      icon: <Code className="h-8 w-8 text-cyber-accent" />,
      skills: ["CI/CD security awareness", "Python scripting", "Web development basics"]
    },
    {
      title: "Soft Skills & Programming",
      icon: <Code className="h-8 w-8 text-cyber-accent" />,
      skills: ["Time Management", "Communication", "Decision Making", "Python", "SQL"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Code className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="cyber-card hover:border-cyber-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-accent/5"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold mt-3 text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-cyber-accent mr-2"></span>
                      <span className="text-gray-300">{skill}</span>
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
