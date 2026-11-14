import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/BrandIcons';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';
import { ensureGSAPRegistered, gsap } from '../../animations/gsapConfig';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { MagneticButton } from '../Transitions/MagneticButton';

interface HeroProps {
  ready: boolean;
  onNavigate: (selector: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ ready, onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ready || !sectionRef.current) return;
    ensureGSAPRegistered();

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.05 });

      tl.fromTo(
        '[data-hero="hud"]',
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      )
        .fromTo(
          '[data-hero="line"]',
          { yPercent: 112, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.11,
            ease: 'power4.out',
          },
          '-=0.45'
        )
        .fromTo(
          '[data-hero="fade"]',
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.09,
            ease: 'power3.out',
          },
          '-=0.65'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [ready, reducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-4 sm:px-8 xl:px-14 overflow-hidden"
    >
      {/* Subtle architectural concentric hairline rings (Reference 1) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-44 -right-44 w-[620px] h-[620px] rounded-full border border-[#F5F5F5]/[0.05]" />
        <div className="absolute -top-28 -right-28 w-[440px] h-[440px] rounded-full border border-dashed border-[#E07A42]/15" />
      </div>

      {/* Top HUD Telemetry Bar */}
      <div
        data-hero="hud"
        className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-3 pb-5 dm-dash-b text-[11px] font-mono-tech tracking-[0.18em] text-[#929292] uppercase relative z-10"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-[#F5F5F5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A42] animate-pulse" />
            {PORTFOLIO_PROFILE.shortName}
          </span>
          <span className="text-[#F5F5F5]/20">/</span>
          <span>{PORTFOLIO_PROFILE.altRoleTag}</span>
        </div>

        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#E07A42]" />
            {PORTFOLIO_PROFILE.location}
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E07A42]/35 bg-[#E07A42]/10 text-[#F5F5F5] text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A42]" />
            {PORTFOLIO_PROFILE.availability}
          </span>
        </div>
      </div>

      {/* Main Editorial + 3D Composition */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Oversized Typographic Composition (Reference 1 + Reference 2 + 2002.mp4 mask rise) */}
          <div className="lg:col-span-9">
            <h1 className="select-none">
              {/* Line 1 + Floating Split White Pill CTA (Reference 1 rhythm) */}
              <span className="flex flex-wrap items-center gap-5 sm:gap-8">
                <span className="dm-mask-line">
                  <span
                    data-hero="line"
                    className="dm-mask-inner font-display text-[clamp(2.9rem,8.5vw,7.4rem)] font-bold tracking-[-0.04em] leading-[0.94] text-[#F5F5F5]"
                  >
                    BUILDING
                  </span>
                </span>

                <span data-hero="fade" className="hidden md:inline-flex items-center gap-2">
                  <MagneticButton
                    onClick={() => onNavigate('#projects')}
                    className="inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full bg-[#F5F5F5] text-[#080808] hover:bg-[#E07A42] font-mono-tech text-xs font-semibold tracking-[0.12em] uppercase shadow-[0_12px_36px_rgba(245,245,245,0.12)]"
                  >
                    <span>EXPLORE MY WORK</span>
                    <span className="w-8 h-8 rounded-full bg-[#080808] text-[#F5F5F5] flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </MagneticButton>
                </span>
              </span>

              {/* Line 2: Crisp Pixel Tech Contrast (Reference 2) */}
              <span className="dm-mask-line mt-1 sm:mt-2">
                <span
                  data-hero="line"
                  className="dm-mask-inner font-pixel text-[clamp(2.4rem,7.3vw,6.3rem)] leading-[0.98] text-[#F5F5F5] tracking-[0.02em]"
                >
                  DIGITAL
                </span>
              </span>

              {/* Line 3: Editorial Offset Contrast */}
              <span className="dm-mask-line mt-1 sm:mt-2 lg:pl-16">
                <span
                  data-hero="line"
                  className="dm-mask-inner font-display text-[clamp(2.7rem,8.2vw,7.1rem)] font-bold tracking-[-0.04em] leading-[0.94] text-[#F5F5F5]"
                >
                  EXPERIENCES<span className="text-[#E07A42]">.</span>
                </span>
              </span>
            </h1>
          </div>

          {/* Right Editorial Metadata Counterpoint */}
          <div data-hero="fade" className="lg:col-span-3 lg:pb-3">
            <div className="dm-glass rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono-tech tracking-[0.2em] text-[#929292]">
                <span>PROFILE // ID</span>
                <span className="text-[#E07A42]">VTU &apos;28</span>
              </div>
              <div className="text-sm font-medium text-[#F5F5F5]">
                {PORTFOLIO_PROFILE.fullName}
              </div>
              <div className="text-xs text-[#929292] leading-relaxed">
                {PORTFOLIO_PROFILE.degree} · City Engineering College
              </div>
              <div className="pt-2 border-t border-[#F5F5F5]/10 flex items-center justify-between text-[10px] font-mono-tech text-[#929292]">
                <span>FULL-STACK</span>
                <span className="text-[#F5F5F5]/60">REAL-TIME · AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Hero Split: Short Intro + Dual CTAs + Social Pills */}
        <div
          data-hero="fade"
          className="mt-10 sm:mt-14 pt-8 border-t border-[#F5F5F5]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <p className="lg:col-span-6 text-base sm:text-lg text-[#929292] leading-relaxed max-w-xl">
            <span className="text-[#F5F5F5] font-medium">Vinay</span> —{' '}
            {PORTFOLIO_PROFILE.intro}
          </p>

          <div className="lg:col-span-6 flex flex-wrap items-center lg:justify-end gap-3">
            <MagneticButton
              onClick={() => onNavigate('#projects')}
              className="md:hidden inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#F5F5F5] text-[#080808] font-mono-tech text-xs font-semibold tracking-[0.12em] uppercase"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              onClick={() => onNavigate('#contact')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full dm-pill text-[#F5F5F5] font-mono-tech text-xs tracking-[0.14em] uppercase"
            >
              <span>LET&apos;S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E07A42]" />
            </MagneticButton>

            {/* Minimal Social Pills (Reference 1) */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/vic897"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-10 h-10 rounded-full dm-pill flex items-center justify-center text-[#929292] hover:text-[#F5F5F5]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/vinay-mathpati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-full dm-pill flex items-center justify-center text-[#929292] hover:text-[#F5F5F5]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_PROFILE.contact.email}`}
                aria-label="Send email"
                className="w-10 h-10 rounded-full dm-pill flex items-center justify-center text-[#929292] hover:text-[#F5F5F5]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div
        data-hero="fade"
        className="max-w-7xl mx-auto w-full flex items-center justify-between text-[10px] font-mono-tech tracking-[0.22em] text-[#929292] uppercase relative z-10"
      >
        <span className="hidden sm:inline">REAL-TIME SYSTEMS &amp; LOCAL-FIRST AI</span>
        <button
          onClick={() => onNavigate('#about')}
          className="ml-auto inline-flex items-center gap-2.5 text-[#929292] hover:text-[#F5F5F5] transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="w-7 h-7 rounded-full border border-[#F5F5F5]/15 flex items-center justify-center group-hover:border-[#E07A42]/60 transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-[#E07A42]" />
          </span>
        </button>
      </div>
    </section>
  );
};
