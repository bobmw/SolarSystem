import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef, useState } from "react";
import Ellipse from "./Ellipse";
import PlanetRing from "./PlanetRing";
import Satelite from "./Satelite";
import { context } from "../context";
import { Card } from "@mui/material";

export default function Planet({
  texture,
  size,
  xRadius,
  zRadius,
  transSpeed = 1,
  ring = false,
  satelite = false,
  xSatelitePosition,
  zSatelitePosition,
  sateliteSize,
  sateliteTexture,
  invertRotation = false,
  ringTexture,
  name
}) {
  const ref = useRef();
  const [satelitePosition, setSatelitePosition] = useState({ xOrbit: 0, zOrbit: 0 });
  const { ellipse, planetNames } = useContext(context);

  const props = useTexture({
    map: texture
  });

  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime() * transSpeed;
    const x = xRadius * Math.sin(elapsedTime);
    const z = zRadius * Math.cos(elapsedTime);
    ref.current.position.x = invertRotation ? x * -1 : x;
    ref.current.position.z = z;
    ref.current.rotation.y += delta;
    setSatelitePosition({ ...satelitePosition, xOrbit: x, zOrbit: z });
  });

  return (
    <>
      <mesh ref={ref} receiveShadow castShadow >
        <sphereGeometry args={[size]} />
        <meshStandardMaterial {...props} />
        {satelite && <Satelite xRadius={xSatelitePosition} zRadius={zSatelitePosition} size={sateliteSize} texture={sateliteTexture} />}
        {ring && <PlanetRing ringTexture={ringTexture} />}
        {planetNames && <Html distanceFactor={50}>
          <Card style={{ padding: 3, transform: 'translate3d(-50%, -250%, 0)' }}>
            {name}
          </Card>
        </Html>}
      </mesh>
      {ellipse && <Ellipse xRadius={xRadius} zRadius={zRadius} />}
    </>
  );
}
