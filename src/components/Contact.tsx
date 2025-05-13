
import React, { useState } from "react";
import { Phone, Mail, Linkedin, Send, CheckCircle } from "lucide-react";
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
  const [isSent, setIsSent] = useState(false);

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
      setIsSent(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
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
    <section id="contact" className="section-padding bg-gradient-to-b from-cyber-darker to-cyber-dark cyber-grid relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyber-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyber-tertiary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-navy rounded-lg mb-4">
            <Phone className="h-6 w-6 text-cyber-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-accent to-cyber-tertiary mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="cyber-card cyber-card-interactive">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <Send className="mr-2 h-5 w-5 text-cyber-accent" />
                Get in Touch
              </h3>
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
                    className="bg-cyber-dark border-cyber-navy focus:border-cyber-accent transition-all duration-300"
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
                    className="bg-cyber-dark border-cyber-navy focus:border-cyber-accent transition-all duration-300"
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
                    className="bg-cyber-dark border-cyber-navy focus:border-cyber-accent transition-all duration-300 min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full relative overflow-hidden group ${
                    isSent 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-cyber-accent hover:bg-cyber-accent/80'
                  } text-black font-medium`}
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 
                    ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r 
                    from-cyber-accent via-cyber-tertiary to-cyber-accent opacity-30"></span>
                  
                  <span className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : isSent ? (
                      <CheckCircle className="mr-2 h-4 w-4" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting ? "Sending..." : isSent ? "Message Sent!" : "Send Message"}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="cyber-card cyber-card-interactive">
            <CardContent className="pt-6 flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-10 h-10 rounded-full bg-cyber-navy/70 flex items-center justify-center mr-4 shrink-0 transition-all duration-300 group-hover:bg-cyber-accent/20 group-hover:text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-300 font-medium">{info.label}</h4>
                      <a
                        href={info.link}
                        className="text-cyber-accent hover:underline group-hover:text-cyber-accent/80 transition-colors duration-300"
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
                    className="w-10 h-10 rounded-full bg-cyber-navy/70 flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:shadow-cyber-accent/20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5 text-cyber-accent group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="mailto:sanjayjeyasekar@gmail.com"
                    className="w-10 h-10 rounded-full bg-cyber-navy/70 flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:shadow-cyber-tertiary/20"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-cyber-tertiary group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              
              <div className="mt-10 pt-10 border-t border-cyber-navy/50">
                <div className="text-center">
                  <p className="text-gray-400">Available for</p>
                  <div className="flex justify-center space-x-4 mt-2">
                    {["Full-time", "Contract", "Freelance"].map((type, i) => (
                      <div key={i} className="px-3 py-1 bg-cyber-navy/50 text-cyber-accent text-sm rounded-full">
                        {type}
                      </div>
                    ))}
                  </div>
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
