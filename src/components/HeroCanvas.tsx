
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

// Floating cybersecurity icons
const FloatingIcons = ({ count = 12, isMobile = false }) => {
  const iconsRef = useRef<THREE.Group>(null);
  
  // Generate random positions
  const icons = useMemo(() => {
    const temp = [];
    const radius = isMobile ? 4 : 6;
    
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * radius,
        (Math.random() - 0.5) * radius,
        (Math.random() - 0.5) * radius
      );
      const scale = Math.random() * 0.3 + 0.1;
      const rotation = Math.random() * Math.PI;
      
      temp.push({
        position,
        scale,
        rotation,
        speed: Math.random() * 0.02 + 0.01
      });
    }
    return temp;
  }, [count, isMobile]);
  
  useFrame((state) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      iconsRef.current.children.forEach((child, i) => {
        const t = state.clock.getElapsedTime() * icons[i].speed;
        child.position.y = icons[i].position.y + Math.sin(t) * 0.5;
      });
    }
  });

  return (
    <group ref={iconsRef}>
      {icons.map((icon, index) => (
        <mesh 
          key={index} 
          position={icon.position} 
          rotation={[icon.rotation, icon.rotation, icon.rotation]}
        >
          <boxGeometry args={[icon.scale, icon.scale, icon.scale]} />
          <meshStandardMaterial 
            color={index % 3 === 0 ? "#4ade80" : index % 3 === 1 ? "#4f46e5" : "#06b6d4"} 
            emissive={index % 3 === 0 ? "#4ade80" : index % 3 === 1 ? "#4f46e5" : "#06b6d4"}
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

// Floating text effect
const FloatingText = ({ isMobile = false }) => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      textRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
    }
  });
  
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <Text3D
        ref={textRef}
        font="/fonts/Cyber_Regular.json"
        size={isMobile ? 0.5 : 0.7}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        CYBER SECURITY
        <meshStandardMaterial 
          color="#4ade80" 
          emissive="#4ade80" 
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  );
};

// Grid effect for cyberpunk feel
const CyberGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = -Math.PI / 2;
      gridRef.current.position.y = -2;
    }
  });
  
  return (
    <group ref={gridRef}>
      <gridHelper args={[30, 30, "#4ade80", "#162133"]} />
    </group>
  );
};

// Main Scene
const Scene = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 8 : 6]} fov={75} />
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
      
      <Center position={[0, 0, 0]}>
        <FloatingText isMobile={isMobile} />
      </Center>
      
      <FloatingIcons count={isMobile ? 8 : 15} isMobile={isMobile} />
      <CyberGrid />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// Main component that loads the 3D canvas
const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas shadows dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
