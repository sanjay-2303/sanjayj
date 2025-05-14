
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useIsMobile } from "@/hooks/use-mobile";
import { BackgroundScene } from "./scenes/BackgroundScene";

const FloatingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <BackgroundScene />
      </Canvas>
    </div>
  );
};

export default FloatingBackground;
