
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useIsMobile } from "@/hooks/use-mobile";
import { HeroScene } from "./scenes/HeroScene";

const HeroCanvas: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute inset-0 z-10">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <HeroScene isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
