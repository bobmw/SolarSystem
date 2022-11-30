import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../containers/Scene";
import LoadMessage from "../components/LoadMessage";

export default function SolarSystem() {
  return (
    <Canvas
      style={{ height: "100vh" }} camera={{ position: [0, 20, 150], fov: 75 }}
    >
      <Suspense fallback={<LoadMessage />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
