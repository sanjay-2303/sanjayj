
import React from "react";
import { User, FileText, Award, Code, Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const About: React.FC = () => {
  const stats = [
    { label: 'Experience', value: '2+ Years', icon: <FileText className="h-5 w-5 text-cyber-accent" /> },
    { label: 'Certifications', value: '3+', icon: <Award className="h-5 w-5 text-cyber-tertiary" /> },
    { label: 'Technologies', value: '12+', icon: <Code className="h-5 w-5 text-cyber-secondary" /> },
    { label: 'Security Focus', value: 'SIEM & VAPT', icon: <Shield className="h-5 w-5 text-green-400" /> },
  ];

  return (
    <section id="about" className="section-padding bg-cyber-darker cyber-grid">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <User className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="cyber-card cyber-card-interactive relative overflow-hidden">
              {/* Abstract cyber decoration */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-cyber-accent/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-cyber-tertiary/5 rounded-full blur-3xl"></div>
              
              <CardHeader>
                <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-secondary mb-4"></div>
                <h3 className="text-xl font-semibold text-white">Security Professional</h3>
              </CardHeader>
              <CardContent className="text-lg space-y-4">
                <p className="relative">
                  <span className="absolute left-0 top-0 -ml-4 text-3xl text-cyber-accent opacity-30">"</span>
                  Cybersecurity professional with a B.Tech in Computer Science Engineering and practical experience in SIEM tools (FortiSIEM, Wazuh), threat analysis, and VAPT using Burp Suite and Nmap.
                </p>
                <p>
                  CEH Master certified with a strong foundation in offensive and defensive security. Actively pursuing AWS and Azure certifications, sharpening skills through TryHackMe labs and cybersecurity conferences.
                </p>
                <p className="relative">
                  Focused on contributing to secure, cloud-ready infrastructures.
                  <span className="absolute right-0 bottom-0 -mr-2 text-3xl text-cyber-accent opacity-30">"</span>
                </p>
                
                <div className="pt-4 relative">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-accent/30 to-transparent"></div>
                  <p className="text-cyber-accent text-center text-sm italic pt-4">Detect. Defend. Disrupt.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="cyber-card h-full cyber-card-interactive">
              <CardHeader>
                <h3 className="text-xl font-semibold text-white">Professional Stats</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-cyber-navy/50 rounded-lg p-4 flex items-center justify-between hover:bg-cyber-navy transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-cyber-navy mr-3">
                          {stat.icon}
                        </div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm text-gray-400">Expertise Level</span>
                    <span className="text-sm text-cyber-accent">Advancing</span>
                  </div>
                  <div className="h-2 bg-cyber-navy rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyber-accent to-cyber-tertiary rounded-full animate-pulse-slow"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
