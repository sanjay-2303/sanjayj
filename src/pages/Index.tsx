
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Publications from '../components/Publications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';
import ParticleBackground from '../components/ParticleBackground';
import Background3D from '../components/Background3D';

const Index = () => {
  const mainRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
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
            const offset = isMobile ? 60 : 80; // Smaller offset on mobile
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - offset,
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
  }, [isMobile]);

  return (
    <>
      <Preloader />
      <Background3D />
      <ParticleBackground />
      <Navbar />
      
      <main ref={mainRef} className="overflow-hidden">
        <section id="home" className="pt-16 md:pt-0">
          <Hero />
        </section>
        
        <section id="about">
          <RevealOnScroll animation="fade-up">
            <About />
          </RevealOnScroll>
        </section>
        
        <section id="skills">
          <RevealOnScroll animation="fade-up">
            <Skills />
          </RevealOnScroll>
        </section>
        
        <section id="experience">
          <RevealOnScroll animation="fade-up">
            <Experience />
          </RevealOnScroll>
        </section>
        
        <section id="education">
          <RevealOnScroll animation="fade-up">
            <Education />
          </RevealOnScroll>
        </section>
        
        <section id="certifications">
          <RevealOnScroll animation="fade-up">
            <Certifications />
          </RevealOnScroll>
        </section>
        
        <section id="publications">
          <RevealOnScroll animation="fade-up">
            <Publications />
          </RevealOnScroll>
        </section>
        
        <section id="projects">
          <RevealOnScroll animation="fade-up">
            <Projects />
          </RevealOnScroll>
        </section>
        
        <section id="contact">
          <RevealOnScroll animation="fade-up">
            <Contact />
          </RevealOnScroll>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
