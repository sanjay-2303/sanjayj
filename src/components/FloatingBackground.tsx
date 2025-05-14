
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";

const FloatingParticles = ({ count = 20, isMobile = false }) => {
  const particlesRef = useRef<THREE.Group>(null);
  
  // Generate particles
  const particles = React.useMemo(() => {
    const temp = [];
    const radius = isMobile ? 5 : 8;
    
    for (let i = 0; i < count; i++) {
      const position = [
        (Math.random() - 0.5) * radius,
        (Math.random() - 0.5) * radius,
        (Math.random() - 0.5) * radius * 0.5
      ];
      const color = i % 3 === 0 ? "#4ade80" : i % 3 === 1 ? "#4f46e5" : "#06b6d4";
      const scale = Math.random() * 0.3 + 0.1;
      
      temp.push({
        position,
        color,
        scale,
        speed: Math.random() * 0.02 + 0.01
      });
    }
    return temp;
  }, [count, isMobile]);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        const t = state.clock.getElapsedTime() * particles[i].speed;
        // Slight movement in all directions
        child.position.y = particles[i].position[1] + Math.sin(t) * 0.3;
        child.position.x = particles[i].position[0] + Math.cos(t * 0.5) * 0.2;
        child.rotation.z += 0.002;
      });
    }
  });
  
  return (
    <group ref={particlesRef}>
      {particles.map((particle, idx) => (
        <mesh key={idx} position={particle.position as any}>
          {idx % 2 === 0 ? (
            <boxGeometry args={[particle.scale, particle.scale, particle.scale]} />
          ) : (
            <octahedronGeometry args={[particle.scale]} />
          )}
          <meshStandardMaterial 
            color={particle.color} 
            emissive={particle.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

const FloatingBackgroundScene = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 2]} intensity={0.1} />
      <FloatingParticles count={isMobile ? 10 : 20} isMobile={isMobile} />
    </>
  );
};

const FloatingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <FloatingBackgroundScene />
      </Canvas>
    </div>
  );
};

export default FloatingBackground;
