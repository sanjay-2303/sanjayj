
import React, { useEffect, useRef } from 'react';
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
  const mainRef = useRef<HTMLElement>(null);
  
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
    
    // Add cursor effect for interactive feel
    const cursor = document.createElement("div");
    cursor.classList.add("fixed", "w-6", "h-6", "rounded-full", "pointer-events-none", "z-50", "border-2", "border-cyber-accent", "transform", "-translate-x-1/2", "-translate-y-1/2", "opacity-70");
    cursor.style.mixBlendMode = "difference";
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener("mousemove", moveCursor);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <Preloader />
      <ParticleBackground />
      <Navbar />
      
      <main ref={mainRef} className="overflow-hidden">
        <section id="home">
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
