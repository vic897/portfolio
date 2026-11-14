import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface DarkMatterCoreProps {
  scrollProgressRef: React.MutableRefObject<number>;
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
  reducedMotion: boolean;
}

/**
 * Faceted obsidian glass icosahedron + dual precision gimbal wireframes.
 * Inspired by Reference 2's faceted polyhedron + 2002.mp4's warm rim lighting.
 */
export function DarkMatterCore({
  scrollProgressRef,
  pointerRef,
  isMobile,
  reducedMotion,
}: DarkMatterCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const outerShellRef = useRef<THREE.Mesh>(null);
  const ringARef = useRef<THREE.Mesh>(null);
  const ringBRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const scroll = scrollProgressRef.current;
    const pointer = pointerRef.current;

    if (!groupRef.current) return;

    // Position shifts gracefully from upper-right focal zone in Hero -> atmospheric backdrop -> sinks into darkness at Footer
    const heroWeight = Math.max(0, 1 - scroll * 3.0);
    const footerFade = Math.max(0, (scroll - 0.72) / 0.28);

    const targetX = isMobile ? 0 : 1.75 * heroWeight + Math.sin(scroll * Math.PI) * -0.35;
    const targetY = isMobile ? 0.35 * heroWeight - footerFade * 1.4 : 0.42 * heroWeight - footerFade * 1.9;
    const targetZ = 0.25 - scroll * 1.8 - footerFade * 2.2;

    const baseScale = isMobile ? 0.76 : 1.08;
    const scrollScale = baseScale * (1 - scroll * 0.28) * (1 - footerFade * 0.55);

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX + pointer.x * 0.28,
      dt * 3.5
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY + pointer.y * 0.22,
      dt * 3.5
    );
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      targetZ,
      dt * 3.0
    );

    const safeScale = Math.max(0.05, scrollScale);
    groupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(groupRef.current.scale.x, safeScale, dt * 3.5)
    );

    if (reducedMotion) return;

    const elapsed = state.clock.elapsedTime;

    // Subtle pointer-reactive tilt + slow architectural rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      elapsed * 0.14 + pointer.x * 0.42 + scroll * 1.8,
      dt * 3
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      elapsed * 0.08 - pointer.y * 0.32,
      dt * 3
    );

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= dt * 0.22;
      innerCoreRef.current.rotation.z += dt * 0.12;
    }

    if (outerShellRef.current) {
      outerShellRef.current.rotation.x += dt * 0.09;
    }

    if (ringARef.current) {
      ringARef.current.rotation.z += dt * 0.18;
    }

    if (ringBRef.current) {
      ringBRef.current.rotation.y -= dt * 0.15;
    }
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.1}
      rotationIntensity={reducedMotion ? 0 : 0.15}
      floatIntensity={reducedMotion ? 0 : 0.35}
    >
      <group ref={groupRef} position={[isMobile ? 0 : 1.75, isMobile ? 0.35 : 0.42, 0.25]}>
        {/* Outer Faceted Obsidian Glass Polyhedron */}
        <mesh ref={outerShellRef}>
          <icosahedronGeometry args={[1.36, 0]} />
          {isMobile ? (
            <meshStandardMaterial
              color="#2b2b2b"
              emissive="#1a0d07"
              emissiveIntensity={0.45}
              metalness={0.58}
              roughness={0.26}
              flatShading
            />
          ) : (
            <meshPhysicalMaterial
              color="#2c2c2c"
              emissive="#1c0f08"
              emissiveIntensity={0.48}
              metalness={0.55}
              roughness={0.24}
              clearcoat={0.95}
              clearcoatRoughness={0.14}
              reflectivity={0.9}
              transparent
              opacity={0.82}
              flatShading
            />
          )}
        </mesh>

        {/* Crisp Precision Wireframe Cage around Polyhedron */}
        <mesh scale={1.018}>
          <icosahedronGeometry args={[1.36, 0]} />
          <meshBasicMaterial
            color="#F5F5F5"
            wireframe
            transparent
            opacity={0.44}
          />
        </mesh>

        {/* Inner Warm Tungsten / Muted Orange Octahedral Singularity */}
        <mesh ref={innerCoreRef} scale={0.62}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#3b1d0d"
            emissive="#E07A42"
            emissiveIntensity={1.65}
            metalness={0.9}
            roughness={0.16}
            flatShading
          />
        </mesh>

        {/* Orbital Telemetry Rings */}
        <mesh ref={ringARef} rotation={[Math.PI / 2.6, 0.3, 0]}>
          <torusGeometry args={[2.02, 0.007, 12, 110]} />
          <meshBasicMaterial color="#F5F5F5" transparent opacity={0.32} />
        </mesh>

        <mesh ref={ringBRef} rotation={[-Math.PI / 3.1, -0.45, 0.2]}>
          <torusGeometry args={[2.34, 0.006, 12, 110]} />
          <meshBasicMaterial color="#E07A42" transparent opacity={0.44} />
        </mesh>
      </group>
    </Float>
  );
}
