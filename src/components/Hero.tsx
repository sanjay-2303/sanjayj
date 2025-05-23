import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail, BriefcaseBusiness, Shield, Activity, Lock } from "lucide-react";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [securityMetrics, setSecurityMetrics] = useState({
    detected: 0,
    blocked: 0,
    critical: 0,
    vulnerabilities: 0,
    threats: 0,
    securityScore: 0,
    networkSecurity: 0,
  });

  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const specialtyTexts = ["Security Analyst", "VAPT", "SIEM", "Cloud Security", "DevSecOps"];
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<NodeJS.Timeout | null>(null);

  const targetMetrics = {
    detected: 92,
    blocked: 45,
    critical: 13,
    vulnerabilities: 1240,
    threats: 3587,
    securityScore: 98,
    networkSecurity: 99.8,
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const refreshRate = 50;
    const steps = duration / refreshRate;

    const incrementValues = {
      detected: targetMetrics.detected / steps,
      blocked: targetMetrics.blocked / steps,
      critical: targetMetrics.critical / steps,
      vulnerabilities: targetMetrics.vulnerabilities / steps,
      threats: targetMetrics.threats / steps,
      securityScore: targetMetrics.securityScore / steps,
      networkSecurity: targetMetrics.networkSecurity / steps,
    };

    metricsRef.current = setInterval(() => {
      setSecurityMetrics(prev => ({
        detected: Math.min(prev.detected + incrementValues.detected, targetMetrics.detected),
        blocked: Math.min(prev.blocked + incrementValues.blocked, targetMetrics.blocked),
        critical: Math.min(prev.critical + incrementValues.critical, targetMetrics.critical),
        vulnerabilities: Math.min(prev.vulnerabilities + incrementValues.vulnerabilities, targetMetrics.vulnerabilities),
        threats: Math.min(prev.threats + incrementValues.threats, targetMetrics.threats),
        securityScore: Math.min(prev.securityScore + incrementValues.securityScore, targetMetrics.securityScore),
        networkSecurity: Math.min(prev.networkSecurity + incrementValues.networkSecurity, targetMetrics.networkSecurity),
      }));
    }, refreshRate);

    const checkCompletion = setInterval(() => {
      setSecurityMetrics(prev => {
        const allComplete =
          Math.round(prev.detected) >= targetMetrics.detected &&
          Math.round(prev.blocked) >= targetMetrics.blocked &&
          Math.round(prev.critical) >= targetMetrics.critical &&
          Math.round(prev.vulnerabilities) >= targetMetrics.vulnerabilities &&
          Math.round(prev.threats) >= targetMetrics.threats &&
          Math.round(prev.securityScore) >= targetMetrics.securityScore &&
          Math.round(prev.networkSecurity * 10) / 10 >= targetMetrics.networkSecurity;

        if (allComplete && metricsRef.current) {
          clearInterval(metricsRef.current);
          metricsRef.current = null;
        }

        return prev;
      });
    }, 100);

    return () => {
      if (metricsRef.current) clearInterval(metricsRef.current);
      clearInterval(checkCompletion);
    };
  }, []);

  useEffect(() => {
    const currentText = specialtyTexts[currentTextIndex];

    const type = () => {
      if (isDeleting) {
        setTypewriterText(currentText.substring(0, typewriterIndex - 1));
        setTypewriterIndex(prev => prev - 1);
        setTypingSpeed(50);
        if (typewriterIndex <= 1) {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % specialtyTexts.length);
          setTypingSpeed(300);
        }
      } else {
        setTypewriterText(currentText.substring(0, typewriterIndex + 1));
        setTypewriterIndex(prev => prev + 1);
        setTypingSpeed(150);
        if (typewriterIndex >= currentText.length) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };

    typingRef.current = setTimeout(type, typingSpeed);
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [typewriterIndex, currentTextIndex, isDeleting, typingSpeed]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const glowElements = document.querySelectorAll(".cursor-glow");
      const x = event.clientX;
      const y = event.clientY;

      glowElements.forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDistance = 300;
        const intensity = Math.max(0, 1 - distance / maxDistance);

        if (intensity > 0) {
          element.style.textShadow = `0 0 ${10 + intensity * 20}px rgba(74, 222, 128, ${intensity * 0.8})`;
          element.style.transform = `scale(${1 + intensity * 0.05})`;
          element.style.transition = "transform 0.2s ease-out, text-shadow 0.2s ease-out";
        } else {
          element.style.textShadow = "";
          element.style.transform = "";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParallaxStyle = (speed: number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mousePosition.x - centerX) * speed;
    const moveY = (mousePosition.y - centerY) * speed;
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  const ProgressBar = ({ value, color }: { value: number, color: string }) => (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1 overflow-hidden">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${value}%`, transition: 'width 1.5s ease-in-out' }}
      />
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0 cyber-grid">
      <div className="cyber-particles" id="particles-js"></div>
      <div className="scan-lines"></div>

      {/* Add main text and metrics here */}
      <div className="z-10 text-center max-w-xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold cursor-glow text-cyber-accent">
          I am a <span className="text-cyber-secondary">{typewriterText}</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">Passionate about offensive and defensive security.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button><FileText className="mr-2 h-4 w-4" />Resume</Button>
          <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</Button>
          <Button variant="outline"><Mail className="mr-2 h-4 w-4" />Contact</Button>
        </div>

        <div className="mt-8 space-y-2 text-left text-sm">
          <div><Shield className="inline mr-2" /> Detected: {Math.round(securityMetrics.detected)}</div>
          <div><Lock className="inline mr-2" /> Blocked: {Math.round(securityMetrics.blocked)}</div>
          <div><Activity className="inline mr-2" /> Critical: {Math.round(securityMetrics.critical)}</div>
          <div><BriefcaseBusiness className="inline mr-2" /> Vulnerabilities: {Math.round(securityMetrics.vulnerabilities)}</div>
          <ProgressBar value={securityMetrics.securityScore} color="bg-green-400" />
          <div>Security Score: {Math.round(securityMetrics.securityScore)}%</div>
          <ProgressBar value={securityMetrics.networkSecurity} color="bg-blue-400" />
          <div>Network Security: {Math.round(securityMetrics.networkSecurity)}%</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
