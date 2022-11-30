import { EffectComposer, GodRays } from "@react-three/postprocessing";

export default function PostProcessing({ sun }) {
  return (
    sun && (
      <EffectComposer>
        <GodRays sun={sun} samples={100} />
      </EffectComposer>
    )
  );
}