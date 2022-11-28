import Planet from "../components/Planet";
import Sun from "../components/Sun";
import { OrbitControls } from "@react-three/drei";
import { planetsConfig } from "../config/planets.config";
import { MOUSE } from "three";
import StarDome from "../components/StarDome";

export default function Scene() {
  const mouseConfig = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.DOLLY
  };

  return (
    <>
      <OrbitControls minDistance={30} maxDistance={200} mouseButtons={mouseConfig} />
      <ambientLight intensity={0.8} />
      <pointLight intensity={5}/>
      <StarDome />
      <group>
        <Sun />
        {planetsConfig.map((props, index) => (
          <Planet {...props} key={index} />
        ))
        }
      </group>
    </>
  );
}
