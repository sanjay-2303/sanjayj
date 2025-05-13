
import React, { useEffect } from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

const Index = () => {
  // Set document title for better SEO
  useEffect(() => {
    document.title = "Sanjay J | Security Analyst | VAPT | SIEM | Cloud Security";
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />
        
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Education />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Certifications />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
