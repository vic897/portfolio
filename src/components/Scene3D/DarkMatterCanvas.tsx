import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { DarkMatterCore } from '../../scenes/HeroScene/DarkMatterCore';
import { WireframeSatellites } from '../../scenes/FloatingObjects/WireframeSatellites';
import { ParticleField } from '../../scenes/BackgroundScene/ParticleField';
import { useWebGLSupport } from '../../hooks/useWebGLSupport';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useScrollProgressRef } from '../../hooks/useScrollProgress';
import { WebGLFallback } from './WebGLFallback';

function CameraRig({
  scrollProgressRef,
  pointerRef,
  reducedMotion,
}: {
  scrollProgressRef: React.MutableRefObject<number>;
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
}) {
  useFrame((state, delta) => {
    if (reducedMotion) return;
    const dt = Math.min(delta, 0.05);
    const scroll = scrollProgressRef.current;
    const pointer = pointerRef.current;

    const targetCamX = pointer.x * 0.22;
    const targetCamY = pointer.y * 0.16 - scroll * 0.45;
    const targetCamZ = 6.2 + scroll * 1.1;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCamX, dt * 2.5);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCamY, dt * 2.5);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetCamZ, dt * 2.5);
    state.camera.lookAt(0, -scroll * 0.35, 0);
  });

  return null;
}

class CanvasErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const DarkMatterCanvas: React.FC = () => {
  const webglSupported = useWebGLSupport();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const reducedMotion = useReducedMotion();
  const scrollProgressRef = useScrollProgressRef();
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const handleMove = (e: PointerEvent) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, [isMobile, reducedMotion]);

  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <CanvasErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          dpr={isMobile ? [1, 1.25] : [1, 1.75]}
          frameloop={reducedMotion ? 'demand' : 'always'}
          camera={{ position: [0, 0, 6.2], fov: 40, near: 0.1, far: 45 }}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <color attach="background" args={['#080808']} />
          <fog attach="fog" args={['#080808', 5.5, 16]} />

          {/* Controlled Studio Lighting: Obsidian + Warm Tungsten Rim + Crisp White Key */}
          <ambientLight intensity={0.42} />
          <hemisphereLight args={['#f5f2eb', '#120a06', 0.85]} />
          <directionalLight position={[4.5, 5.5, 4.5]} intensity={3.2} color="#F5F2EB" />
          <directionalLight position={[-4.5, 2.0, 2.5]} intensity={1.8} color="#d6dce5" />
          <pointLight position={[3.6, -1.6, 3.2]} intensity={8.0} color="#E07A42" distance={16} />
          <pointLight position={[-2.5, 3.5, 2.0]} intensity={3.0} color="#ffffff" distance={14} />

          <Suspense fallback={null}>
            <CameraRig
              scrollProgressRef={scrollProgressRef}
              pointerRef={pointerRef}
              reducedMotion={reducedMotion}
            />
            <DarkMatterCore
              scrollProgressRef={scrollProgressRef}
              pointerRef={pointerRef}
              isMobile={isMobile}
              reducedMotion={reducedMotion}
            />
            <WireframeSatellites
              scrollProgressRef={scrollProgressRef}
              pointerRef={pointerRef}
              isMobile={isMobile}
              reducedMotion={reducedMotion}
            />
            <ParticleField
              scrollProgressRef={scrollProgressRef}
              isMobile={isMobile}
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>

      {/* Atmospheric gradient vignette ensuring crisp typography legibility while preserving 3D core glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 72% 38%, rgba(8,8,8,0.0) 0%, rgba(8,8,8,0.42) 62%, rgba(8,8,8,0.88) 100%)',
        }}
      />
    </div>
  );
};
