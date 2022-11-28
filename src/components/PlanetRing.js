import { Torus, useTexture } from "@react-three/drei";

export default function PlanetRing({ ringTexture }) {
  const props = useTexture({
    map: ringTexture
  });

  return (
    <mesh receiveShadow castShadow>
      <Torus args={[3, 0.5, 2, 1000]} rotation={[80, 0, 0]}>
        <meshLambertMaterial opacity={2} transparent {...props} />
      </Torus>
    </mesh>
  );
}