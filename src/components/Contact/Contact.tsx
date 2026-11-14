import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/BrandIcons';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';
import { MaskedText } from '../Transitions/MaskedText';
import { MagneticButton } from '../Transitions/MagneticButton';

/**
 * Section 08: CONTACT — Closing cinematic statement as the 3D singularity recedes into darkness.
 */
export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { contact } = PORTFOLIO_PROFILE;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback gracefully if clipboard API is unavailable
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-4 sm:px-8 xl:px-14 border-t border-[#F5F5F5]/[0.08] overflow-hidden"
    >
      {/* Subtle obsidian horizon gradient so the 3D scene melts into darkness at the footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.88) 70%, #060606 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="dm-glass-elevated rounded-[2rem] p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden">
          {/* Warm muted amber aura inside closing glass stage */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[480px] h-[240px] rounded-full blur-[110px] opacity-20 bg-[#E07A42]"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E07A42]/35 bg-[#E07A42]/10 font-mono-tech text-[11px] tracking-[0.2em] text-[#F5F5F5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A42] animate-pulse" />
              <span>{contact.eyebrow}</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-[#F5F5F5]">
              <MaskedText lines={contact.headingLines} />
            </h2>

            <p className="text-sm sm:text-base text-[#929292] max-w-xl mx-auto leading-relaxed">
              {contact.subcopy}
            </p>

            {/* Interactive Email Copy + Direct Send Pill (2002.mp4 centered pill rhythm) */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2.5 p-2 rounded-3xl sm:rounded-full bg-[#080808]/90 border border-[#F5F5F5]/14 shadow-2xl max-w-full">
              <div className="flex items-center gap-2.5 px-4 py-2 font-mono-tech text-xs sm:text-sm text-[#F5F5F5]">
                <Mail className="w-4 h-4 text-[#E07A42] shrink-0" />
                <span className="select-all break-all">{contact.email}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-2.5 rounded-full border border-[#F5F5F5]/14 hover:border-[#E07A42]/60 text-xs font-mono-tech text-[#F5F5F5] flex items-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#E07A42]" />
                      <span className="text-[#E07A42]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#929292]" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <MagneticButton
                  href={`mailto:${contact.email}`}
                  className="px-6 py-2.5 rounded-full bg-[#F5F5F5] text-[#080808] hover:bg-[#E07A42] font-mono-tech text-xs font-semibold tracking-[0.12em] uppercase inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>START CONVERSATION</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </div>

            {/* Verified External Links Row */}
            <div className="pt-8 border-t border-[#F5F5F5]/10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/vic897"
                target="_blank"
                rel="noopener noreferrer"
                className="dm-pill px-5 py-2.5 rounded-full font-mono-tech text-xs text-[#929292] hover:text-[#F5F5F5] inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-[#E07A42]" />
                <span>GitHub // @vic897</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://linkedin.com/in/vinay-mathpati"
                target="_blank"
                rel="noopener noreferrer"
                className="dm-pill px-5 py-2.5 rounded-full font-mono-tech text-xs text-[#929292] hover:text-[#F5F5F5] inline-flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-[#E07A42]" />
                <span>LinkedIn // vinay-mathpati</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="/resume.pdf"
                download="Vinaykumar_S_Mathpati_Resume.pdf"
                className="dm-pill px-5 py-2.5 rounded-full font-mono-tech text-xs text-[#929292] hover:text-[#F5F5F5] inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#E07A42]" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
