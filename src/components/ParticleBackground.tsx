
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const particles: Particle[] = [];
    const particleCount = Math.min(width * height / 10000, 100); // Responsive particle count
    
    // Particle properties
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Cyber color palette
        const colors = [
          'rgba(74, 222, 128, 0.4)', // cyber-accent
          'rgba(79, 70, 229, 0.4)', // cyber-secondary
          'rgba(6, 182, 212, 0.4)'  // cyber-tertiary
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    // Create initial particles
    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    function connectParticles() {
      if (!ctx) return;
      
      const maxDist = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDist) {
            // Opacity based on distance
            const opacity = 1 - distance / maxDist;
            ctx.strokeStyle = `rgba(74, 222, 128, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx) return;
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
    }
    
    // Handle resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
      
      // Reset particles for new dimensions
      particles.length = 0;
      init();
    }
    
    // Initial setup
    handleResize();
    init();
    animate();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground;
