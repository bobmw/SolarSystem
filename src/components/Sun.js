import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { starsConfig } from "../config/stars.config";

export default function Sun() {
  const { size, texture } = starsConfig.sun;
  const ref = useRef();
  const props = useTexture({
    map: texture
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size]} />
      <meshPhongMaterial {...props}/>
    </mesh>
  );
}
