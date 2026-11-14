import React, { useEffect, useRef } from 'react';
import { JOURNEY_ENTRIES } from '../../data/journey';
import { ensureGSAPRegistered, gsap } from '../../animations/gsapConfig';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { MaskedText } from '../Transitions/MaskedText';

/**
 * Section 06: THE JOURNEY.
 * Editorial vertical timeline with a scroll-scrubbed hairline spine and
 * strictly verified education + project milestones (zero fabricated roles).
 */
export const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current || !progressLineRef.current) return;
    ensureGSAPRegistered();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32 px-4 sm:px-8 xl:px-14 border-t border-[#F5F5F5]/[0.08] bg-[#111111]/70 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Reference 1 inspired split header with massive headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-14 dm-dash-b">
          <div>
            <div className="font-pixel text-[11px] tracking-[0.2em] text-[#E07A42] mb-3">
              05 // EDUCATION &amp; MILESTONES
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[0.94] text-[#F5F5F5]">
              <MaskedText lines={['THE', 'JOURNEY.']} />
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono-tech text-[#929292] max-w-md leading-relaxed">
            Academic foundations at VTU and verifiable systems shipped along the path toward software engineering internships.
          </p>
        </div>

        {/* Vertical Timeline Spine + Milestones */}
        <div ref={containerRef} className="relative pl-6 sm:pl-12">
          {/* Background static 1px hairline */}
          <div
            aria-hidden="true"
            className="absolute left-2 sm:left-4 top-2 bottom-2 w-px bg-[#F5F5F5]/10"
          />
          {/* Animated Scroll-Scrubbed Accent Progress Line */}
          <div
            ref={progressLineRef}
            aria-hidden="true"
            className="absolute left-2 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#F5F5F5] via-[#E07A42] to-[#E07A42]/30 origin-top"
          />

          <div className="space-y-6" data-anim="stagger-group">
            {JOURNEY_ENTRIES.map((entry) => (
              <article
                key={entry.id}
                data-anim-item=""
                className="relative group dm-glass rounded-3xl p-6 sm:p-8 hover:border-[#F5F5F5]/25 transition-all duration-300"
              >
                {/* Node marker on spine */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[22px] sm:-left-[38px] top-9 w-3 h-3 rounded-full border transition-colors ${
                    entry.active
                      ? 'bg-[#E07A42] border-[#F5F5F5] shadow-[0_0_14px_rgba(224,122,66,0.75)]'
                      : 'bg-[#080808] border-[#F5F5F5]/40 group-hover:border-[#E07A42]'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Timeframe + Type */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="font-mono-tech text-xs font-semibold tracking-[0.16em] text-[#F5F5F5]">
                      {entry.timeframe}
                    </div>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full font-mono-tech text-[10px] tracking-[0.16em] border ${
                        entry.kind === 'EDUCATION'
                          ? 'border-[#E07A42]/45 text-[#E07A42] bg-[#E07A42]/10'
                          : entry.kind === 'AVAILABILITY'
                            ? 'border-[#F5F5F5] text-[#080808] bg-[#F5F5F5] font-semibold'
                            : 'border-[#F5F5F5]/15 text-[#929292]'
                      }`}
                    >
                      {entry.kind}
                    </span>
                  </div>

                  {/* Center: Title + Organization */}
                  <div className="lg:col-span-4 space-y-1.5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-[#E07A42] transition-colors">
                      {entry.title}
                    </h3>
                    <div className="font-mono-tech text-xs text-[#F5F5F5]/75">
                      {entry.organization}
                    </div>
                    <div className="text-xs text-[#929292]">{entry.subtitle}</div>
                  </div>

                  {/* Right: Highlights + Tags */}
                  <div className="lg:col-span-5 space-y-3">
                    <ul className="space-y-2">
                      {entry.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="text-xs sm:text-sm text-[#929292] leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#E07A42] mt-0.5">›</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#080808]/80 border border-[#F5F5F5]/10 font-mono-tech text-[10px] text-[#929292]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
