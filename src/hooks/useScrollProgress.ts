import { useEffect, useRef } from 'react';

/**
 * Tracks normalized scroll progress [0..1] in a mutable ref so 3D render loops
 * can read scroll position at 60fps without triggering React re-renders.
 */
export function useScrollProgressRef() {
  const progressRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current =
        docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progressRef;
}
