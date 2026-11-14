import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Minimal desktop custom cursor with lagging ring + interactive pointer label.
 * Automatically disabled on touch devices and when prefers-reduced-motion is set.
 */
export const CustomCursor: React.FC = () => {
  const isTouchOrCoarse = useMediaQuery('(pointer: coarse), (hover: none)');
  const reducedMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursorMode] = useState<'default' | 'pointer' | 'view'>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTouchOrCoarse || reducedMotion) {
      document.body.classList.remove('has-custom-cursor');
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let rafId = 0;

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-cursor="view"]')) {
        setCursorMode('view');
      } else if (target?.closest('a, button, [role="button"]')) {
        setCursorMode('pointer');
      } else {
        setCursorMode('default');
      }
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isTouchOrCoarse, reducedMotion, visible]);

  if (isTouchOrCoarse || reducedMotion) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-[90]">
      {/* Precision core dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorMode === 'pointer'
            ? 'w-1.5 h-1.5 bg-[#E07A42]'
            : 'w-2 h-2 bg-[#F5F5F5]'
        }`}
      />

      {/* Smooth trailing orbital ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border flex items-center justify-center transition-[width,height,border-color,background-color,opacity] duration-200 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorMode === 'view'
            ? 'w-16 h-16 border-[#E07A42]/80 bg-[#080808]/75 backdrop-blur-sm'
            : cursorMode === 'pointer'
              ? 'w-11 h-11 border-[#E07A42]/65 bg-[#E07A42]/10'
              : 'w-8 h-8 border-[#F5F5F5]/25'
        }`}
      >
        {cursorMode === 'view' && (
          <span className="font-mono-tech text-[9px] tracking-[0.2em] text-[#F5F5F5] uppercase">
            OPEN
          </span>
        )}
      </div>
    </div>
  );
};
