
import React from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Experience: React.FC = () => {
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
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-cyber-dark">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Briefcase className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="cyber-card border-l-4 border-l-cyber-accent relative"
            >
              <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-cyber-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyber-dark"></div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <div className="text-lg font-medium text-cyber-accent">{exp.company}</div>
                <div className="text-sm text-gray-400 flex flex-wrap justify-between">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-baseline">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyber-tertiary mr-2 mt-1.5"></span>
                      <span className="text-gray-300">{resp}</span>
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

export default Experience;
