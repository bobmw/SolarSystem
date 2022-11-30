import Planet from "../components/Planet";
import Sun from "../components/Sun";
import { OrbitControls } from "@react-three/drei";
import { planetsConfig } from "../config/planets.config";
import { MOUSE } from "three";
import StarDome from "../components/StarDome";
import { useState } from "react";
import PostProcessing from "../components/PostProcessing";

export default function Scene() {
  const [sunRef, setSunRef] = useState(null);

  const mouseConfig = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.DOLLY
  };

  return (
    <>
      <OrbitControls minDistance={30} maxDistance={200} mouseButtons={mouseConfig} />
      <ambientLight intensity={0.5} />
      <pointLight intensity={2} />
      <StarDome />
      <group>
        <PostProcessing sun={sunRef} />
        <Sun ref={setSunRef} />
        {planetsConfig.map((props, index) => (
          <Planet {...props} key={index} />
        ))
        }
      </group>
    </>
  );
}
