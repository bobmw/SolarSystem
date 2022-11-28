import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function StarDome() {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y -= delta / 30;
  });

  return(
<>
  <color attach="background" args={["#232323"]} />
        <Stars
          radius={200}
          depth={0}
          count={4000}
          factor={6}
          fade
          ref={ref}
        />
</>
  );
}