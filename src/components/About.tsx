
import React from "react";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-cyber-darker">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <User className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">About Me</h2>
        </div>
        
        <Card className="cyber-card">
          <CardHeader>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-secondary mb-4"></div>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <p>
              Cybersecurity professional with a B.Tech in Computer Science Engineering and practical experience in SIEM tools (FortiSIEM, Wazuh), threat analysis, and VAPT using Burp Suite and Nmap.
            </p>
            <p>
              CEH Master certified with a strong foundation in offensive and defensive security. Actively pursuing AWS and Azure certifications, sharpening skills through TryHackMe labs and cybersecurity conferences.
            </p>
            <p>
              Focused on contributing to secure, cloud-ready infrastructures.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
