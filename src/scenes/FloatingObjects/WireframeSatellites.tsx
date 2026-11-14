import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WireframeSatellitesProps {
  scrollProgressRef: React.MutableRefObject<number>;
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
  reducedMotion: boolean;
}

interface CubeDatum {
  orbitRadius: number;
  angle: number;
  yOffset: number;
  zOffset: number;
  speed: number;
  scale: number;
  rotSpeed: [number, number, number];
}

/**
 * Single-draw-call InstancedMesh of floating architectural cubes/voxels,
 * echoing the wireframe cube satellites in Reference 2.
 */
export function WireframeSatellites({
  scrollProgressRef,
  pointerRef,
  isMobile,
  reducedMotion,
}: WireframeSatellitesProps) {
  const wireMeshRef = useRef<THREE.InstancedMesh>(null);
  const solidMeshRef = useRef<THREE.InstancedMesh>(null);
  const count = isMobile ? 14 : 28;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const cubes = useMemo<CubeDatum[]>(() => {
    const list: CubeDatum[] = [];
    for (let i = 0; i < count; i++) {
      // Deterministic pseudo-random spread for reproducible composition
      const seed = (i * 9301 + 49297) % 233280;
      const r1 = seed / 233280;
      const r2 = ((i * 7331 + 19213) % 233280) / 233280;
      const r3 = ((i * 4517 + 8191) % 233280) / 233280;

      list.push({
        orbitRadius: 2.25 + r1 * 2.4,
        angle: (i / count) * Math.PI * 2 + r2 * 0.6,
        yOffset: (r2 - 0.5) * 3.2,
        zOffset: (r3 - 0.5) * 2.2,
        speed: 0.08 + r1 * 0.14,
        scale: i % 4 === 0 ? 0.24 + r3 * 0.14 : 0.08 + r3 * 0.09,
        rotSpeed: [0.15 + r1 * 0.3, 0.2 + r2 * 0.35, 0.1 + r3 * 0.2],
      });
    }
    return list;
  }, [count]);

  useFrame((state) => {
    const wire = wireMeshRef.current;
    const solid = solidMeshRef.current;
    if (!wire || !solid) return;

    const t = reducedMotion ? 0 : state.clock.elapsedTime;
    const scroll = scrollProgressRef.current;
    const pointer = pointerRef.current;
    const footerFade = Math.max(0, 1 - Math.max(0, (scroll - 0.78) / 0.22));
    const anchorX = isMobile ? 0 : 1.45 * Math.max(0, 1 - scroll * 2.6);

    for (let i = 0; i < count; i++) {
      const d = cubes[i];
      const theta = d.angle + t * d.speed + scroll * 1.4;
      const px = anchorX + Math.cos(theta) * d.orbitRadius + pointer.x * 0.35;
      const py = d.yOffset + Math.sin(t * 0.45 + i) * 0.18 + pointer.y * 0.25 - scroll * 1.1;
      const pz = d.zOffset + Math.sin(theta) * (d.orbitRadius * 0.45) - 0.6;

      dummy.position.set(px, py, pz);
      dummy.rotation.set(
        t * d.rotSpeed[0] + i,
        t * d.rotSpeed[1] + scroll * 2,
        t * d.rotSpeed[2]
      );
      dummy.scale.setScalar(d.scale * Math.max(0.001, footerFade));
      dummy.updateMatrix();

      if (i % 3 === 0) {
        wire.setMatrixAt(i, dummy.matrix);
        dummy.scale.setScalar(0.0001);
        dummy.updateMatrix();
        solid.setMatrixAt(i, dummy.matrix);
      } else {
        solid.setMatrixAt(i, dummy.matrix);
        dummy.scale.setScalar(0.0001);
        dummy.updateMatrix();
        wire.setMatrixAt(i, dummy.matrix);
      }
    }

    wire.instanceMatrix.needsUpdate = true;
    solid.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      <instancedMesh ref={wireMeshRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="#F5F5F5"
          wireframe
          transparent
          opacity={0.28}
        />
      </instancedMesh>

      <instancedMesh ref={solidMeshRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#1e1e1e"
          metalness={0.85}
          roughness={0.25}
        />
      </instancedMesh>
    </group>
  );
}
