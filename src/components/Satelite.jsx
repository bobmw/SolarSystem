import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { context } from "../context";
import Ellipse from "./Ellipse";

export default function Satelite({ xRadius, zRadius, size, texture }) {
  const { ellipse } = useContext(context);
  const ref = useRef();

  const props = useTexture({
    map: texture
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const x = -xRadius * Math.sin(elapsedTime);
    const z = zRadius * Math.cos(elapsedTime);

    ref.current.position.x = x;
    ref.current.position.z = z;
  });

  return (
    <>
      <mesh position={[xRadius, 0, zRadius]} ref={ref} receiveShadow castShadow>
        <sphereGeometry args={[size]} />
        <meshStandardMaterial {...props} />
      </mesh>
      {ellipse && <Ellipse xRadius={xRadius} zRadius={zRadius} />}
    </>
  );
}