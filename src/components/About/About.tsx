import React, { useRef, useState } from 'react';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';
import { MaskedText } from '../Transitions/MaskedText';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const About: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const isTouch = useMediaQuery('(pointer: coarse), (hover: none)');
  const reducedMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || reducedMotion || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -y * 9, ry: x * 9 });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-8 xl:px-14 border-t border-[#F5F5F5]/[0.08] bg-[#080808]/75 backdrop-blur-[2px]"
    >
      {/* Subtle animated technical coordinate grid behind the section */}
      <div aria-hidden="true" className="absolute inset-0 dm-tech-grid opacity-55 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Reference 1 Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-14 dm-dash-b">
          <span className="font-mono-tech text-xs tracking-[0.18em] text-[#929292]">
            ... / Behind the interface ...
          </span>
          <span className="font-pixel text-[11px] tracking-[0.2em] text-[#E07A42]">
            02 // ENGINEER PROFILE
          </span>
        </div>

        {/* Main Asymmetric 12-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10" data-anim-group="">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[0.95] text-[#F5F5F5]">
                <MaskedText lines={PORTFOLIO_PROFILE.about.heading} />
              </h2>
              <p className="mt-6 font-editorial italic text-2xl sm:text-3xl text-[#F3EFEA]/90 leading-snug max-w-2xl">
                {PORTFOLIO_PROFILE.about.lead}
              </p>
            </div>

            <div className="space-y-5 text-base sm:text-[17px] text-[#929292] leading-[1.75] max-w-2xl">
              {PORTFOLIO_PROFILE.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Engineering Approach Pillars */}
            <div
              data-anim="stagger-group"
              className="pt-8 border-t border-[#F5F5F5]/10 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {PORTFOLIO_PROFILE.about.principles.map((item) => (
                <div
                  key={item.code}
                  data-anim-item=""
                  className="dm-glass rounded-2xl p-5 hover:border-[#E07A42]/40 transition-colors"
                >
                  <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#E07A42] mb-2">
                    {item.code}
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#F5F5F5] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#929292] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Monochromatic Portrait & 3D Glass Frame Container (5 cols) */}
          <div className="lg:col-span-5" data-anim="parallax" data-depth="24">
            <div
              ref={frameRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className="relative dm-glass-elevated rounded-3xl p-4 sm:p-5 overflow-hidden group"
            >
              {/* Subtle 3D outer bezel corners */}
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-[#F5F5F5]/[0.07]" />

              {/* Monochromatic Portrait Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0c0c0c] border border-[#F5F5F5]/10 flex flex-col justify-between p-5">
                {/* Finalized Portrait Photograph */}
                <img
                  src="/Portrait.png"
                  alt="Portrait of Vinay"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle dark vignettes to preserve header and telemetry legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-[#080808]/60 pointer-events-none"
                />

                {/* Subtle coordinate mesh inside frame */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 dm-tech-grid opacity-20 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-[70px] opacity-25 bg-[#E07A42] pointer-events-none"
                />

                {/* Top Portrait Metadata */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono-tech tracking-[0.2em] text-[#929292]">
                  <span className="text-[#F5F5F5]/90">ENGINEER // PORTRAIT</span>
                  <span className="text-[#E07A42]">B&amp;W ARCHIVE</span>
                </div>

                <div className="flex-1" />

                {/* Bottom Verified Identity Telemetry */}
                <div className="relative z-10 pt-4 border-t border-[#F5F5F5]/15 backdrop-blur-[2px] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base font-semibold text-[#F5F5F5]">
                      {PORTFOLIO_PROFILE.fullName}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#E07A42]">
                      VINAY
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech text-[#929292]">
                    <span>{PORTFOLIO_PROFILE.institution}</span>
                    <span>{PORTFOLIO_PROFILE.graduation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
