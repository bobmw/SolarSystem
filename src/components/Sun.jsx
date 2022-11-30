import { useTexture } from "@react-three/drei";
import { forwardRef } from "react";
import { starsConfig } from "../config/stars.config";

const  Sun = forwardRef((_, ref) => {
  const { size, texture } = starsConfig.sun;
  const props = useTexture({
    map: texture
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size]} />
      <meshBasicMaterial {...props}/>
    </mesh>
  );
});

export default Sun;
