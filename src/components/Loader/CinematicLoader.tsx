import React, { useEffect, useRef, useState } from 'react';
import { ensureGSAPRegistered, gsap } from '../../animations/gsapConfig';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface CinematicLoaderProps {
  onComplete: () => void;
}

/**
 * Section 01: Restrained, high-precision cinematic intro loader (~1.3s).
 * Displays VINAY., progress bar, and percentage, then slides smoothly upward.
 */
export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    ensureGSAPRegistered();

    if (reducedMotion) {
      setPercent(100);
      const t = window.setTimeout(onComplete, 180);
      return () => window.clearTimeout(t);
    }

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      tl.fromTo(
        nameRef.current,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }
      )
        .fromTo(
          metaRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, ease: 'power2.out' },
          '-=0.3'
        )
        .to(
          counter,
          {
            value: 100,
            duration: 0.85,
            ease: 'power2.inOut',
            onUpdate: () => {
              setPercent(Math.round(counter.value));
            },
          },
          '-=0.15'
        )
        .to(
          progressFillRef.current,
          {
            scaleX: 1,
            duration: 0.85,
            ease: 'power2.inOut',
          },
          '<'
        )
        .to(
          [nameRef.current, metaRef.current],
          {
            yPercent: -35,
            opacity: 0,
            duration: 0.35,
            ease: 'power2.in',
          },
          '+=0.08'
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.65,
          ease: 'power4.inOut',
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete, reducedMotion]);

  return (
    <div
      ref={containerRef}
      role="status"
      aria-label="Loading portfolio experience"
      className="fixed inset-0 z-[100] bg-[#060606] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
    >
      {/* Top hairline */}
      <div className="flex items-center justify-between text-[11px] font-mono-tech tracking-[0.22em] text-[#929292]">
        <span>DARK MATTER // PORTFOLIO</span>
        <span>BENGALURU · INDIA</span>
      </div>

      {/* Center monolithic name */}
      <div className="my-auto flex flex-col items-center">
        <div className="overflow-hidden">
          <div
            ref={nameRef}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.04em] text-[#F5F5F5]"
          >
            VINAY<span className="text-[#E07A42]">.</span>
          </div>
        </div>

        <div
          ref={metaRef}
          className="mt-5 flex items-center gap-4 text-[11px] font-mono-tech tracking-[0.24em] text-[#929292]"
        >
          <span>INITIALIZING INTERFACE</span>
          <span className="text-[#E07A42]">{String(percent).padStart(3, '0')}%</span>
        </div>

        {/* Hairline animated progress track */}
        <div className="mt-4 w-56 sm:w-72 h-px bg-[#F5F5F5]/12 overflow-hidden relative">
          <div
            ref={progressFillRef}
            className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] via-[#E07A42] to-[#F5F5F5] origin-left scale-x-0"
          />
        </div>
      </div>

      {/* Bottom technical stamp */}
      <div className="flex items-center justify-between text-[10px] font-mono-tech tracking-[0.2em] text-[#929292]/70">
        <span>FULL-STACK DEVELOPER</span>
        <span className="font-pixel text-[10px]">SYS.BOOT</span>
      </div>
    </div>
  );
};
