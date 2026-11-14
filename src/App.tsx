import { useCallback, useEffect, useRef, useState } from 'react';
import { createSmoothScroll, ScrollTrigger, SmoothScrollController } from './animations/gsapConfig';
import { initGlobalScrollChoreography } from './animations/scrollChoreography';
import { useReducedMotion } from './hooks/useReducedMotion';
import { CinematicLoader } from './components/Loader/CinematicLoader';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { DarkMatterCanvas } from './components/Scene3D/DarkMatterCanvas';
import { Navbar } from './components/Navbar/Navbar';
import { SectionRail } from './components/Transitions/SectionRail';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { TechStack } from './components/Skills/TechStack';
import { SelectedWork } from './components/Projects/SelectedWork';
import { Journey } from './components/Experience/Journey';
import { BeyondCode } from './components/BeyondCode/BeyondCode';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollCtrlRef = useRef<SmoothScrollController | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctrl = createSmoothScroll(reducedMotion);
    scrollCtrlRef.current = ctrl;

    let cleanupChoreography: (() => void) | undefined;
    if (rootRef.current) {
      cleanupChoreography = initGlobalScrollChoreography(rootRef.current, reducedMotion);
    }

    return () => {
      cleanupChoreography?.();
      ctrl.destroy();
      scrollCtrlRef.current = null;
    };
  }, [reducedMotion]);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
    window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  const handleNavigate = useCallback((selector: string) => {
    if (scrollCtrlRef.current) {
      scrollCtrlRef.current.scrollTo(selector, -72);
    } else {
      const target = document.querySelector(selector);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div ref={rootRef} className="relative min-h-screen bg-[#080808] text-[#F5F5F5]">
      {/* 01. Cinematic Preloader Sequence */}
      {!loaderDone && <CinematicLoader onComplete={handleLoaderComplete} />}

      {/* Desktop Magnetic / Contextual Custom Cursor */}
      <CustomCursor />

      {/* Ambient Film Grain Overlay */}
      <div aria-hidden="true" className="dm-film-grain" />

      {/* Real-Time Interactive Three.js 3D Environment */}
      <DarkMatterCanvas />

      {/* Navigation & Floating Step Indicator Rail */}
      <Navbar onNavigate={handleNavigate} />
      <SectionRail onNavigate={handleNavigate} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero ready={loaderDone} onNavigate={handleNavigate} />
        <About />
        <TechStack />
        <SelectedWork />
        <Journey />
        <BeyondCode />
        <Contact />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
