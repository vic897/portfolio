import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  scrollProgressRef: React.MutableRefObject<number>;
  isMobile: boolean;
  reducedMotion: boolean;
}

/**
 * Low-density atmospheric starfield / micro-dust drifting quietly in deep space.
 */
export function ParticleField({
  scrollProgressRef,
  isMobile,
  reducedMotion,
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 75 : 190;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const s1 = ((i * 16807) % 2147483647) / 2147483647;
      const s2 = (((i + 37) * 48271) % 2147483647) / 2147483647;
      const s3 = (((i + 91) * 69621) % 2147483647) / 2147483647;

      arr[i * 3] = (s1 - 0.5) * 16;
      arr[i * 3 + 1] = (s2 - 0.5) * 11;
      arr[i * 3 + 2] = -1.5 - s3 * 8;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current || reducedMotion) return;
    const dt = Math.min(delta, 0.05);
    pointsRef.current.rotation.y += dt * 0.015;
    pointsRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.12) * 0.12 -
      scrollProgressRef.current * 1.4;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#E8E4DF"
        transparent
        opacity={0.42}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
