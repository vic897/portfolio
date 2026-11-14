import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let registered = false;

export function ensureGSAPRegistered() {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });
    registered = true;
  }
}

export interface SmoothScrollController {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, offset?: number) => void;
  destroy: () => void;
}

export function createSmoothScroll(reducedMotion: boolean): SmoothScrollController {
  ensureGSAPRegistered();

  if (reducedMotion || typeof window === 'undefined') {
    return {
      lenis: null,
      scrollTo: (target, offset = -72) => {
        if (typeof target === 'string') {
          const el = document.querySelector(target);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: 'auto' });
          }
        } else if (typeof target === 'number') {
          window.scrollTo({ top: target, behavior: 'auto' });
        } else {
          const top = target.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top, behavior: 'auto' });
        }
      },
      destroy: () => {},
    };
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.4,
  });

  const onScroll = () => ScrollTrigger.update();
  lenis.on('scroll', onScroll);

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    scrollTo: (target, offset = -72) => {
      lenis.scrollTo(target, { offset, duration: 1.2 });
    },
    destroy: () => {
      gsap.ticker.remove(tick);
      lenis.off('scroll', onScroll);
      lenis.destroy();
    },
  };
}

export { gsap, ScrollTrigger };
