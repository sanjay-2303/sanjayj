
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
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  // Set document title for better SEO
  useEffect(() => {
    document.title = "Sanjay J | Security Analyst | VAPT | SIEM | Cloud Security";
    
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80, // Adjust for navbar
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Preloader />
      <ParticleBackground />
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />
        
        <RevealOnScroll animation="fade-up">
          <About />
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up">
          <Skills />
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up">
          <Experience />
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up">
          <Education />
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up">
          <Certifications />
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up">
          <Projects />
        </RevealOnScroll>
        
        <RevealOnScroll animation="fade-up">
          <Contact />
        </RevealOnScroll>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
