import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', num: '01', label: 'CORE' },
  { id: 'about', num: '02', label: 'ABOUT' },
  { id: 'skills', num: '03', label: 'STACK' },
  { id: 'projects', num: '04', label: 'WORK' },
  { id: 'journey', num: '05', label: 'JOURNEY' },
  { id: 'beyond', num: '06', label: 'ETHOS' },
  { id: 'contact', num: '07', label: 'CONTACT' },
];

interface SectionRailProps {
  onNavigate: (selector: string) => void;
}

/**
 * Minimal vertical telemetry rail & scroll progress bar inspired by 2002.mp4 step pills.
 */
export const SectionRail: React.FC<SectionRailProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState('hero');
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
      setScrollPct(pct);

      const triggerY = window.innerHeight * 0.42;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            setActiveId(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      {/* Top 1px ultra-crisp global scroll progress hairline */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2px] z-[70] pointer-events-none bg-transparent"
      >
        <div
          className="h-full bg-gradient-to-r from-[#F5F5F5]/60 via-[#E07A42] to-[#F5F5F5] transition-[width] duration-75"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* Desktop Left Floating Step Pills (Inspired by 2002.mp4) */}
      <aside
        aria-label="Section progress navigation"
        className="hidden xl:flex fixed left-3.5 top-1/2 -translate-y-1/2 z-40 flex-col gap-2"
      >
        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(`#${sec.id}`)}
              className="group relative flex items-center text-left focus:outline-none"
              aria-label={`Jump to ${sec.label}`}
            >
              <span
                className={`w-6 h-6 rounded-full border text-[9px] font-mono-tech flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-[#F5F5F5] text-[#080808] border-[#F5F5F5] font-semibold scale-105 shadow-[0_0_20px_rgba(245,245,245,0.2)]'
                    : 'bg-[#111111]/75 text-[#929292] border-[#F5F5F5]/12 group-hover:border-[#E07A42]/60 group-hover:text-[#F5F5F5]'
                }`}
              >
                {sec.num}
              </span>
              <span
                className="pointer-events-none absolute left-8 px-2.5 py-1 rounded-full bg-[#111111]/95 border border-[#F5F5F5]/15 font-mono-tech text-[9px] tracking-[0.2em] text-[#F5F5F5] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap shadow-lg"
              >
                {sec.label}
              </span>
            </button>
          );
        })}
      </aside>
    </>
  );
};
