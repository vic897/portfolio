import { ensureGSAPRegistered, gsap } from './gsapConfig';

/**
 * Sets up reusable ScrollTrigger animations inside a scoped GSAP context.
 * Cleanly separates motion choreography from React JSX markup.
 */
export function initGlobalScrollChoreography(
  root: HTMLElement,
  reducedMotion: boolean
): () => void {
  ensureGSAPRegistered();

  if (reducedMotion) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    // 1. Mask-based line / headline reveals across all sections
    const maskLines = gsap.utils.toArray<HTMLElement>('[data-anim="mask-rise"]');
    maskLines.forEach((el) => {
      gsap.fromTo(
        el,
        { yPercent: 112, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.05,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el.closest('[data-anim-group]') || el,
            start: 'top 84%',
            once: true,
          },
        }
      );
    });

    // 2. Staggered editorial card / block reveals
    const staggerGroups = gsap.utils.toArray<HTMLElement>('[data-anim="stagger-group"]');
    staggerGroups.forEach((group) => {
      const children = group.querySelectorAll<HTMLElement>('[data-anim-item]');
      if (!children.length) return;

      gsap.fromTo(
        children,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            once: true,
          },
        }
      );
    });

    // 3. Thin hairline rule draws (horizontal width scale from left)
    const rules = gsap.utils.toArray<HTMLElement>('[data-anim="rule-draw"]');
    rules.forEach((rule) => {
      gsap.fromTo(
        rule,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rule,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    // 4. Subtle scroll-linked parallax elements
    const parallaxItems = gsap.utils.toArray<HTMLElement>('[data-anim="parallax"]');
    parallaxItems.forEach((item) => {
      const depth = parseFloat(item.dataset.depth || '36');
      gsap.fromTo(
        item,
        { y: depth * 0.5 },
        {
          y: -depth,
          ease: 'none',
          scrollTrigger: {
            trigger: item.closest('section') || item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    });
  }, root);

  return () => ctx.revert();
}
