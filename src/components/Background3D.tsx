
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { useIsMobile } from '../hooks/use-mobile';

// Floating security icons
const SecurityIcon = ({ position, scale, color, speed = 1, distort = 0.2 }) => {
  const mesh = useRef(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2 * speed) * 0.2;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.2;
  });

  return (
    <Float
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={1.5}
    >
      <mesh 
        ref={mesh} 
        position={position} 
        scale={scale}
      >
        <octahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial 
          color={color} 
          speed={0.5} 
          distort={distort} 
          roughness={0.8}
          metalness={0.2}
          opacity={0.7}
          transparent
        />
      </mesh>
    </Float>
  );
};

// Abstract network nodes
const NetworkNode = ({ position, scale, color, wobble = 0.5 }) => {
  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.2} 
      floatIntensity={0.5}
    >
      <mesh position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshWobbleMaterial 
          color={color} 
          factor={wobble} 
          speed={0.3} 
          roughness={0.6}
          metalness={0.1}
          opacity={0.8}
          transparent
        />
      </mesh>
    </Float>
  );
};

// Main 3D scene
const Scene = () => {
  // Generate some random positions for our objects
  const nodePositions = useMemo(() => {
    return Array(10).fill(0).map(() => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 5 - 5
    ]);
  }, []);

  const iconPositions = useMemo(() => {
    return Array(5).fill(0).map(() => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 5 - 5
    ]);
  }, []);

  return (
    <>
      {/* Network nodes */}
      {nodePositions.map((pos, i) => (
        <NetworkNode 
          key={`node-${i}`}
          position={pos}
          scale={[0.2 + Math.random() * 0.3, 0.2 + Math.random() * 0.3, 0.2 + Math.random() * 0.3]}
          color={['#4ade80', '#4f46e5', '#06b6d4'][Math.floor(Math.random() * 3)]}
          wobble={0.2 + Math.random() * 0.5}
        />
      ))}
      
      {/* Security icons */}
      {iconPositions.map((pos, i) => (
        <SecurityIcon 
          key={`icon-${i}`}
          position={pos}
          scale={[0.3 + Math.random() * 0.4, 0.3 + Math.random() * 0.4, 0.3 + Math.random() * 0.4]}
          color={['#4ade80', '#4f46e5', '#06b6d4'][Math.floor(Math.random() * 3)]}
          speed={0.5 + Math.random() * 0.8}
          distort={0.1 + Math.random() * 0.3}
        />
      ))}
    </>
  );
};

const Background3D = () => {
  const isMobile = useIsMobile();
  
  // Performance optimization for mobile
  const density = isMobile ? 0.4 : 1;
  const pixelRatio = isMobile ? [0.8, 1] : [1, 2];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }} 
        dpr={pixelRatio}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;
