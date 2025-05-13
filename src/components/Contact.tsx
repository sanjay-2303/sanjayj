
import React, { useState } from "react";
import { Phone, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-cyber-accent" />,
      label: "Email",
      value: "sanjayjeyasekar@gmail.com",
      link: "mailto:sanjayjeyasekar@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-cyber-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sanjay-j--",
      link: "https://www.linkedin.com/in/sanjay-j--/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Phone className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Contact</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="cyber-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-1 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-cyber-dark border-cyber-navy focus:border-cyber-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-cyber-dark border-cyber-navy focus:border-cyber-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-1 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-cyber-dark border-cyber-navy focus:border-cyber-accent min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cyber-accent hover:bg-cyber-accent/80 text-black font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="cyber-card">
            <CardContent className="pt-6 flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-cyber-navy/70 flex items-center justify-center mr-4 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-300 font-medium">{info.label}</h4>
                      <a
                        href={info.link}
                        className="text-cyber-accent hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg text-gray-300 font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/sanjay-j--/"
                    className="w-10 h-10 rounded-full bg-cyber-navy/70 flex items-center justify-center hover:bg-cyber-accent/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5 text-cyber-accent" />
                  </a>
                  <a
                    href="mailto:sanjayjeyasekar@gmail.com"
                    className="w-10 h-10 rounded-full bg-cyber-navy/70 flex items-center justify-center hover:bg-cyber-accent/20 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-cyber-accent" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
