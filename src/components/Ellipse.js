import { useMemo } from "react";
import { BufferGeometry, Vector3 } from "three";

export default function Ellipse({ xRadius, zRadius }) {

  const geometry = useMemo(() => {
    const vertices = [];
    const divisions = 100;

    for (let i = 0; i < divisions; i++) {
      const angle = (i / divisions) * (2 * Math.PI);
      const x = xRadius * Math.cos(angle);
      const z = zRadius * Math.sin(angle);
      vertices.push(new Vector3(x, 0, z));
    }
    vertices.push(vertices[0]);

    return new BufferGeometry().setFromPoints(vertices)
  }, [xRadius, zRadius]);

  return (
    <line geometry={ geometry }>
      <lineBasicMaterial color="white" />
    </line>
  );
}