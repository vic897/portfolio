import React from 'react';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';
import { MaskedText } from '../Transitions/MaskedText';

/**
 * Section 07: BEYOND THE CODE.
 * Reference 2 modular geometric emblem + editorial curiosity pillars.
 */
export const BeyondCode: React.FC = () => {
  const { beyondCode } = PORTFOLIO_PROFILE;

  return (
    <section
      id="beyond"
      className="relative py-24 sm:py-32 px-4 sm:px-8 xl:px-14 border-t border-[#F5F5F5]/[0.08] bg-[#080808]/90"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top editorial split echoing Reference 2's "WHY AND HOW?" geometry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 dm-dash-b">
          {/* Left Geometric Modular Lattice Emblem (Reference 2 inspired) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
            <svg
              viewBox="0 0 320 180"
              className="w-full max-w-[300px]"
              aria-hidden="true"
            >
              {/* Layered geometric interconnected nodes */}
              <g fill="none" stroke="rgba(245,245,245,0.28)" strokeWidth="1.2">
                <rect x="28" y="34" width="68" height="68" rx="34" />
                <rect x="122" y="34" width="68" height="68" rx="34" />
                <rect x="216" y="34" width="68" height="68" rx="34" />
              </g>
              <g fill="#F5F5F5">
                <circle cx="62" cy="68" r="20" />
                <circle cx="156" cy="68" r="20" fill="#E07A42" />
                <circle cx="250" cy="68" r="20" />
                <circle cx="109" cy="115" r="20" fill="#F5F5F5" fillOpacity="0.88" />
                <circle cx="203" cy="115" r="20" fill="#F5F5F5" fillOpacity="0.88" />
              </g>
              {/* Connecting structural bridge */}
              <path
                d="M62 68 L109 115 L156 68 L203 115 L250 68"
                fill="none"
                stroke="#080808"
                strokeWidth="4"
              />
              <text
                x="156"
                y="165"
                textAnchor="middle"
                fill="#929292"
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="3"
              >
                FIRST PRINCIPLES // CURIOSITY
              </text>
            </svg>
          </div>

          {/* Right Philosophy Statement */}
          <div className="lg:col-span-7 space-y-5">
            <div className="font-pixel text-[11px] tracking-[0.2em] text-[#E07A42]">
              {beyondCode.eyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.02] text-[#F5F5F5]">
              <MaskedText lines={[beyondCode.heading]} />
            </h2>
            <p className="text-base sm:text-lg text-[#929292] leading-relaxed max-w-2xl">
              {beyondCode.statement}
            </p>
          </div>
        </div>

        {/* 3-Column Dashed Editorial Grid (Reference 2 bottom rhythm) */}
        <div
          data-anim="stagger-group"
          className="pt-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-[#F5F5F5]/14"
        >
          {beyondCode.pillars.map((pillar) => (
            <div
              key={pillar.index}
              data-anim-item=""
              className="py-8 md:py-2 md:px-8 first:pl-0 last:pr-0 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-pixel text-2xl text-[#F5F5F5]">
                  {pillar.index}
                </span>
                <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#E07A42]">
                  {pillar.label}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#F5F5F5]">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#929292] leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
