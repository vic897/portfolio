import React from 'react';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';

interface FooterProps {
  onNavigate: (selector: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative z-10 bg-[#060606] border-t border-[#F5F5F5]/[0.08] px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono-tech tracking-[0.16em] text-[#929292]">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <span className="font-pixel text-[#F5F5F5]">DARK MATTER</span>
          <span className="text-[#F5F5F5]/20">//</span>
          <span>{PORTFOLIO_PROFILE.fullName.toUpperCase()}</span>
          <span className="text-[#F5F5F5]/20">·</span>
          <span>{PORTFOLIO_PROFILE.location.toUpperCase()}</span>
        </div>

        <div className="flex items-center gap-6 uppercase">
          <button
            type="button"
            onClick={() => onNavigate('#hero')}
            className="hover:text-[#F5F5F5] transition-colors"
          >
            Back to Top
          </button>
          <a
            href="https://github.com/vic897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5F5] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vinay-mathpati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5F5] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
