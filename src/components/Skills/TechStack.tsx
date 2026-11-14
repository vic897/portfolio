import React, { useState } from 'react';
import { SKILL_CATEGORIES, SkillCategoryId } from '../../data/skills';
import { MaskedText } from '../Transitions/MaskedText';

/**
 * Interactive Technical Ecosystem (Section 04).
 * Combines Reference 1's inverted white active container with an interactive
 * architectural node & project-usage inspector. Zero invented levels/percentages.
 */
export const TechStack: React.FC = () => {
  const [activeCat, setActiveCat] = useState<SkillCategoryId>('frontend');
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(null);

  const currentCategory =
    SKILL_CATEGORIES.find((c) => c.id === activeCat) || SKILL_CATEGORIES[0];

  const activeSkill =
    currentCategory.items.find((item) => item.name === selectedSkillName) ||
    currentCategory.items[0];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-8 xl:px-14 border-t border-[#F5F5F5]/[0.08] bg-[#111111]/75 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 dm-dash-b">
          <div>
            <div className="font-pixel text-[11px] tracking-[0.2em] text-[#E07A42] mb-3">
              03 // THE TOOLKIT
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.035em] leading-[0.96] text-[#F5F5F5]">
              <MaskedText lines={['TECHNICAL', 'ECOSYSTEM.']} />
            </h2>
          </div>

          <p className="text-sm text-[#929292] max-w-md leading-relaxed font-mono-tech">
            Verified tools and technologies directly applied across shipped repositories, real-time messaging engines, and local RAG pipelines.
          </p>
        </div>

        {/* Category Bento Matrix + Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Category Bento Cards (Reference 1 signature high-contrast inversion) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" data-anim="stagger-group">
            {SKILL_CATEGORIES.map((category, idx) => {
              const isActive = category.id === activeCat;
              const isSpanFull = idx === SKILL_CATEGORIES.length - 1;

              return (
                <div
                  key={category.id}
                  data-anim-item=""
                  onClick={() => {
                    setActiveCat(category.id);
                    setSelectedSkillName(category.items[0]?.name ?? null);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCat(category.id);
                      setSelectedSkillName(category.items[0]?.name ?? null);
                    }
                  }}
                  className={`${
                    isSpanFull ? 'sm:col-span-2' : ''
                  } rounded-3xl p-6 transition-all duration-400 cursor-pointer border ${
                    isActive
                      ? 'bg-[#F5F5F5] text-[#080808] border-[#F5F5F5] shadow-[0_24px_60px_rgba(245,245,245,0.1)]'
                      : 'dm-glass text-[#F5F5F5] hover:border-[#E07A42]/45'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-current/15">
                    <span className="font-display text-lg font-bold tracking-tight">
                      {category.title}
                    </span>
                    <span
                      className={`font-mono-tech text-[10px] tracking-[0.18em] px-2.5 py-0.5 rounded-full border ${
                        isActive
                          ? 'border-[#080808]/20 text-[#080808]/75'
                          : 'border-[#F5F5F5]/12 text-[#E07A42]'
                      }`}
                    >
                      {category.code}
                    </span>
                  </div>

                  {/* Slash-delimited editorial stack list (Reference 1) + interactive chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => {
                      const isSkillSelected =
                        isActive && activeSkill?.name === item.name;

                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCat(category.id);
                            setSelectedSkillName(item.name);
                          }}
                          className={`px-3 py-1 rounded-full font-mono-tech text-xs transition-all border ${
                            isActive
                              ? isSkillSelected
                                ? 'bg-[#080808] text-[#F5F5F5] border-[#080808]'
                                : 'bg-[#080808]/[0.07] text-[#080808] border-[#080808]/15 hover:bg-[#080808]/15'
                              : 'bg-[#080808]/60 text-[#F5F5F5]/85 border-[#F5F5F5]/10 hover:border-[#E07A42]/50'
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 Cols: Interactive System Architecture Node Inspector */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="dm-glass-elevated rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              {/* Subtle connecting orbital rings SVG */}
              <svg
                aria-hidden="true"
                viewBox="0 0 360 140"
                className="w-full h-28 mb-4 opacity-80"
              >
                <line
                  x1="36"
                  y1="70"
                  x2="324"
                  y2="70"
                  stroke="rgba(245,245,245,0.12)"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="60"
                  cy="70"
                  r="24"
                  fill="rgba(17,17,17,0.9)"
                  stroke="rgba(245,245,245,0.22)"
                />
                <text
                  x="60"
                  y="73"
                  textAnchor="middle"
                  fill="#929292"
                  fontSize="9"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {currentCategory.code}
                </text>

                {/* Active Central Node */}
                <circle
                  cx="180"
                  cy="70"
                  r="42"
                  fill="rgba(224,122,66,0.1)"
                  stroke="#E07A42"
                  strokeWidth="1.2"
                />
                <circle
                  cx="180"
                  cy="70"
                  r="54"
                  fill="none"
                  stroke="rgba(245,245,245,0.12)"
                  strokeDasharray="2 5"
                />
                <text
                  x="180"
                  y="68"
                  textAnchor="middle"
                  fill="#F5F5F5"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="Space Grotesk, sans-serif"
                >
                  {activeSkill.name.length > 14
                    ? `${activeSkill.name.slice(0, 14)}…`
                    : activeSkill.name}
                </text>
                <text
                  x="180"
                  y="83"
                  textAnchor="middle"
                  fill="#E07A42"
                  fontSize="8"
                  fontFamily="JetBrains Mono, monospace"
                >
                  ACTIVE NODE
                </text>

                <circle
                  cx="300"
                  cy="70"
                  r="24"
                  fill="rgba(17,17,17,0.9)"
                  stroke="rgba(245,245,245,0.22)"
                />
                <text
                  x="300"
                  y="73"
                  textAnchor="middle"
                  fill="#F5F5F5"
                  fontSize="9"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {activeSkill.usedIn.length} REPO{activeSkill.usedIn.length > 1 ? 'S' : ''}
                </text>
              </svg>

              {/* Selected Technology Details */}
              <div className="space-y-5">
                <div>
                  <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#E07A42] uppercase">
                    {currentCategory.title} // {currentCategory.subtitle}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] mt-1">
                    {activeSkill.name}
                  </h3>
                  <p className="text-sm text-[#929292] leading-relaxed mt-2">
                    {activeSkill.context}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F5F5]/10">
                  <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#929292] uppercase mb-2.5">
                    APPLIED IN PROJECTS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.usedIn.map((proj) => (
                      <span
                        key={proj}
                        className="px-3 py-1 rounded-full bg-[#080808] border border-[#F5F5F5]/12 font-mono-tech text-xs text-[#F5F5F5]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 dm-dash-t flex items-center justify-between text-[10px] font-mono-tech text-[#929292]">
                  <span>SELECT ANY TECHNOLOGY TO INSPECT</span>
                  <span className="text-[#E07A42]">VERIFIED STACK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
