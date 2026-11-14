import React from 'react';

/**
 * Pure CSS + SVG atmospheric geometric fallback when WebGL is unsupported.
 */
export const WebGLFallback: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080808]"
    >
      {/* Subtle warm tungsten obsidian radial glow */}
      <div
        className="absolute top-1/4 right-[8%] w-[480px] h-[480px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(224, 122, 66, 0.35) 0%, rgba(17, 17, 17, 0) 70%)',
        }}
      />

      {/* Architectural wireframe polyhedron SVG */}
      <svg
        viewBox="0 0 400 400"
        className="absolute top-1/2 right-[-60px] md:right-[6%] -translate-y-1/2 w-[360px] md:w-[460px] opacity-20"
      >
        <circle
          cx="200"
          cy="200"
          r="175"
          fill="none"
          stroke="rgba(245,245,245,0.22)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
        />
        <polygon
          points="200,52 330,128 330,272 200,348 70,272 70,128"
          fill="rgba(17,17,17,0.75)"
          stroke="rgba(245,245,245,0.35)"
          strokeWidth="1"
        />
        <polygon
          points="200,52 330,272 70,272"
          fill="none"
          stroke="rgba(224,122,66,0.45)"
          strokeWidth="0.9"
        />
        <line
          x1="200"
          y1="52"
          x2="200"
          y2="348"
          stroke="rgba(245,245,245,0.2)"
          strokeWidth="0.8"
        />
        <line
          x1="70"
          y1="128"
          x2="330"
          y2="272"
          stroke="rgba(245,245,245,0.16)"
          strokeWidth="0.8"
        />
        <line
          x1="330"
          y1="128"
          x2="70"
          y2="272"
          stroke="rgba(245,245,245,0.16)"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
};
