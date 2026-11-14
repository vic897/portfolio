import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';

interface NavbarProps {
  onNavigate: (selector: string) => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <nav
            aria-label="Primary navigation"
            className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
              scrolled
                ? 'dm-glass-elevated'
                : 'bg-[#080808]/35 backdrop-blur-md border border-[#F5F5F5]/[0.07]'
            }`}
          >
            {/* Left stacked editorial brand mark (Reference 1 + Reference 2) */}
            <button
              onClick={() => handleLink('#hero')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <span className="font-pixel text-sm sm:text-base text-[#F5F5F5] tracking-wider group-hover:text-[#E07A42] transition-colors">
                VINAY<span className="text-[#E07A42]">.</span>
              </span>
              <span className="hidden sm:inline-block h-3.5 w-px bg-[#F5F5F5]/15" />
              <span className="hidden sm:inline-block font-mono-tech text-[10px] tracking-[0.22em] text-[#929292] uppercase">
                {PORTFOLIO_PROFILE.brand}
              </span>
            </button>

            {/* Center Minimal Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleLink(item.href)}
                  className="px-4 py-1.5 rounded-full text-xs font-mono-tech tracking-[0.14em] text-[#929292] hover:text-[#F5F5F5] hover:bg-[#F5F5F5]/[0.06] transition-all uppercase"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-2.5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F5F5F5] text-[#080808] hover:bg-[#E07A42] hover:text-[#080808] font-mono-tech text-[11px] font-semibold tracking-[0.12em] transition-colors uppercase"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                className="md:hidden w-9 h-9 rounded-full border border-[#F5F5F5]/15 bg-[#111111]/80 flex items-center justify-center text-[#F5F5F5] hover:border-[#E07A42]/60 transition-colors"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Responsive Full-Screen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#080808]/95 backdrop-blur-2xl"
          onClick={() => setMobileOpen(false)}
        />
        <div className="relative h-full flex flex-col justify-between p-8 pt-28 pb-10">
          <div className="space-y-4">
            <div className="font-mono-tech text-[11px] tracking-[0.22em] text-[#E07A42]">
              NAVIGATION // DIRECTORY
            </div>
            <div className="divide-y divide-[#F5F5F5]/10 border-t border-b border-[#F5F5F5]/10">
              {NAV_ITEMS.map((item, idx) => (
                <button
                  key={item.href}
                  onClick={() => handleLink(item.href)}
                  className="w-full py-5 flex items-center justify-between text-left group"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-tech text-xs text-[#929292]">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-3xl font-semibold tracking-tight text-[#F5F5F5] group-hover:text-[#E07A42] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#929292] group-hover:text-[#E07A42]" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="/resume.pdf"
              download="Vinaykumar_S_Mathpati_Resume.pdf"
              className="w-full py-3.5 px-5 rounded-full bg-[#F5F5F5] text-[#080808] font-mono-tech text-xs font-semibold tracking-[0.14em] flex items-center justify-center gap-2 uppercase"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#929292]">
              <span>{PORTFOLIO_PROFILE.location}</span>
              <span>{PORTFOLIO_PROFILE.availability}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
