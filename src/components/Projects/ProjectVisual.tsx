import React from 'react';
import { ProjectItem } from '../../data/projects';

interface ProjectVisualProps {
  visualType: ProjectItem['visualType'];
  className?: string;
}

/**
 * Bespoke dark-studio architectural visuals for each real project.
 * Styled to harmonize with #080808 obsidian surfaces, fine hairlines, and warm #E07A42 light.
 */
export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  visualType,
  className = '',
}) => {
  if (visualType === 'fitstack') {
    return (
      <div
        className={`relative w-full h-full bg-[#0b0b0b] overflow-hidden flex items-center justify-center p-6 ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-56 h-56 rounded-full blur-[70px] opacity-25 bg-[#E07A42]"
        />
        <div aria-hidden="true" className="absolute inset-0 dm-tech-grid opacity-55" />

        <svg viewBox="0 0 420 260" className="w-full h-full relative z-10">
          {/* Outer glass frame */}
          <rect
            x="24"
            y="22"
            width="372"
            height="216"
            rx="16"
            fill="rgba(17,17,17,0.85)"
            stroke="rgba(245,245,245,0.12)"
          />
          {/* Top header bar */}
          <line
            x1="24"
            y1="56"
            x2="396"
            y2="56"
            stroke="rgba(245,245,245,0.08)"
          />
          <circle cx="44" cy="39" r="4" fill="#E07A42" />
          <text
            x="56"
            y="43"
            fill="#F5F5F5"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
          >
            FITSTACK // GROQ LLAMA-3.3-70B
          </text>
          <text
            x="376"
            y="43"
            textAnchor="end"
            fill="#929292"
            fontSize="9"
            fontFamily="JetBrains Mono, monospace"
          >
            PG RLS ISOLATED
          </text>

          {/* 3-Stage Constrained AI Architecture Flow */}
          <rect
            x="44"
            y="82"
            width="96"
            height="72"
            rx="10"
            fill="#080808"
            stroke="rgba(245,245,245,0.16)"
          />
          <text x="92" y="108" textAnchor="middle" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            CONTEXT
          </text>
          <text x="92" y="125" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            Goal + Weight
          </text>
          <text x="92" y="140" textAnchor="middle" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            AUTH SESSION
          </text>

          <path d="M144 118 H164" stroke="#E07A42" strokeWidth="1.2" strokeDasharray="3 3" />

          <rect
            x="166"
            y="74"
            width="104"
            height="88"
            rx="12"
            fill="rgba(224,122,66,0.08)"
            stroke="#E07A42"
          />
          <text x="218" y="104" textAnchor="middle" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            CONSTRAINED
          </text>
          <text x="218" y="122" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="700">
            149 EXERCISES
          </text>
          <text x="218" y="142" textAnchor="middle" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            7-DAY SPLIT ENGINE
          </text>

          <path d="M274 118 H292" stroke="#F5F5F5" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />

          <rect
            x="294"
            y="82"
            width="84"
            height="72"
            rx="10"
            fill="#080808"
            stroke="rgba(245,245,245,0.16)"
          />
          <text x="336" y="110" textAnchor="middle" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            PERSISTED
          </text>
          <text x="336" y="127" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            Supabase DB
          </text>

          {/* 7-day cadence strip */}
          {[0, 1, 2, 3, 4, 5, 6].map((day) => (
            <g key={day} transform={`translate(${44 + day * 48}, 182)`}>
              <rect
                width="40"
                height="34"
                rx="6"
                fill={day % 2 === 0 ? 'rgba(245,245,245,0.08)' : 'rgba(17,17,17,0.9)'}
                stroke={day === 0 ? '#E07A42' : 'rgba(245,245,245,0.12)'}
              />
              <text
                x="20"
                y="21"
                textAnchor="middle"
                fill={day === 0 ? '#E07A42' : '#F5F5F5'}
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
              >
                D0{day + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (visualType === 'huddle') {
    return (
      <div
        className={`relative w-full h-full bg-[#0b0b0b] overflow-hidden flex items-center justify-center p-6 ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-60 h-60 rounded-full blur-[80px] opacity-20 bg-[#E07A42]"
        />
        <div aria-hidden="true" className="absolute inset-0 dm-tech-grid opacity-55" />

        <svg viewBox="0 0 420 260" className="w-full h-full relative z-10">
          <rect
            x="24"
            y="22"
            width="372"
            height="216"
            rx="16"
            fill="rgba(17,17,17,0.85)"
            stroke="rgba(245,245,245,0.12)"
          />
          <line x1="24" y1="56" x2="396" y2="56" stroke="rgba(245,245,245,0.08)" />
          <circle cx="44" cy="39" r="4" fill="#E07A42" />
          <text x="56" y="43" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            HUDDLE // EXPLAINABLE MATCHING
          </text>
          <text x="376" y="43" textAnchor="end" fill="#929292" fontSize="9" fontFamily="JetBrains Mono, monospace">
            WS STOMP + CLAMAV
          </text>

          {/* Explainable Match Weights Bar */}
          <text x="48" y="88" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            SKILL COMPLEMENTARITY
          </text>
          <text x="372" y="88" textAnchor="end" fill="#E07A42" fontSize="10" fontFamily="JetBrains Mono, monospace">
            0.70 WEIGHT
          </text>
          <rect x="48" y="96" width="324" height="10" rx="5" fill="#080808" stroke="rgba(245,245,245,0.12)" />
          <rect x="48" y="96" width="227" height="10" rx="5" fill="#E07A42" />

          <text x="48" y="132" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            AVAILABILITY OVERLAP
          </text>
          <text x="372" y="132" textAnchor="end" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            0.30 WEIGHT
          </text>
          <rect x="48" y="140" width="324" height="10" rx="5" fill="#080808" stroke="rgba(245,245,245,0.12)" />
          <rect x="48" y="140" width="97" height="10" rx="5" fill="#F5F5F5" />

          {/* Two-tier architecture chips */}
          <rect x="48" y="172" width="154" height="44" rx="10" fill="#080808" stroke="rgba(245,245,245,0.14)" />
          <text x="125" y="191" textAnchor="middle" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            BROKER CHANNELS
          </text>
          <text x="125" y="206" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            /topic/collaboration
          </text>

          <rect x="218" y="172" width="154" height="44" rx="10" fill="#080808" stroke="rgba(224,122,66,0.45)" />
          <text x="295" y="191" textAnchor="middle" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            FILE SAFETY
          </text>
          <text x="295" y="206" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            ClamAV zINSTREAM
          </text>
        </svg>
      </div>
    );
  }

  if (visualType === 'liberium') {
    return (
      <div
        className={`relative w-full h-full bg-[#0b0b0b] overflow-hidden flex items-center justify-center p-6 ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute -top-10 left-1/3 w-64 h-64 rounded-full blur-[85px] opacity-20 bg-[#E07A42]"
        />
        <div aria-hidden="true" className="absolute inset-0 dm-tech-grid opacity-55" />

        <svg viewBox="0 0 420 260" className="w-full h-full relative z-10">
          <rect
            x="24"
            y="22"
            width="372"
            height="216"
            rx="16"
            fill="rgba(17,17,17,0.85)"
            stroke="rgba(245,245,245,0.12)"
          />
          <line x1="24" y1="56" x2="396" y2="56" stroke="rgba(245,245,245,0.08)" />
          <circle cx="44" cy="39" r="4" fill="#E07A42" />
          <text x="56" y="43" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            LIBERIUM // CASCADING AI & REAL-TIME
          </text>
          <text x="376" y="43" textAnchor="end" fill="#E07A42" fontSize="9" fontFamily="JetBrains Mono, monospace">
            OLLAMA 3.2 → GROQ 3.1
          </text>

          {/* Step 1: Multi-Source Discovery */}
          <rect
            x="44"
            y="76"
            width="96"
            height="86"
            rx="10"
            fill="#080808"
            stroke="rgba(245,245,245,0.16)"
          />
          <text x="92" y="99" textAnchor="middle" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            01 // DISCOVERY
          </text>
          <text x="92" y="117" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            Google Books
          </text>
          <text x="92" y="132" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            + Gutendex
          </text>
          <text x="92" y="148" textAnchor="middle" fill="#E07A42" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            PUBLIC DOMAIN
          </text>

          {/* Arrow 1 -> 2 */}
          <path d="M144 119 H162" stroke="#E07A42" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Step 2: Cascading AI */}
          <rect
            x="164"
            y="70"
            width="114"
            height="98"
            rx="12"
            fill="rgba(224,122,66,0.08)"
            stroke="#E07A42"
          />
          <text x="221" y="92" textAnchor="middle" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            02 // CASCADING AI
          </text>
          <text x="221" y="111" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="700">
            Local Ollama
          </text>
          <text x="221" y="126" textAnchor="middle" fill="#929292" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            ↳ Groq Cloud Fallback
          </text>
          <text x="221" y="142" textAnchor="middle" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            LLaMA 3.2 / 3.1
          </text>
          <text x="221" y="156" textAnchor="middle" fill="#929292" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            CONTEXT AWARE
          </text>

          {/* Arrow 2 -> 3 */}
          <path d="M280 119 H296" stroke="#F5F5F5" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Step 3: Real-Time Rooms */}
          <rect
            x="298"
            y="76"
            width="82"
            height="86"
            rx="10"
            fill="#080808"
            stroke="rgba(245,245,245,0.16)"
          />
          <text x="339" y="99" textAnchor="middle" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            03 // ROOMS
          </text>
          <text x="339" y="118" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            Socket.io
          </text>
          <text x="339" y="133" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            Communities
          </text>
          <text x="339" y="148" textAnchor="middle" fill="#E07A42" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            MONGODB
          </text>

          {/* Bottom Security / Architecture Strip */}
          <rect x="44" y="180" width="336" height="34" rx="8" fill="#080808" stroke="rgba(245,245,245,0.12)" />
          <text x="58" y="201" fill="#929292" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            SECURITY //
          </text>
          <text x="122" y="201" fill="#F5F5F5" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            SERVER-SIDE HTTPONLY JWT · RATE-LIMITED AI · RESTRICTED CORS
          </text>
        </svg>
      </div>
    );
  }

  if (visualType === 'flutter-tutor') {
    return (
      <div
        className={`relative w-full h-full bg-[#0b0b0b] overflow-hidden flex items-center justify-center p-6 ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full blur-[80px] opacity-20 bg-[#E07A42]"
        />
        <div aria-hidden="true" className="absolute inset-0 dm-tech-grid opacity-55" />

        <svg viewBox="0 0 420 260" className="w-full h-full relative z-10">
          <rect
            x="24"
            y="22"
            width="372"
            height="216"
            rx="16"
            fill="rgba(17,17,17,0.85)"
            stroke="rgba(245,245,245,0.12)"
          />
          <line x1="24" y1="56" x2="396" y2="56" stroke="rgba(245,245,245,0.08)" />
          <circle cx="44" cy="39" r="4" fill="#E07A42" />
          <text x="56" y="43" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            LOCAL RAG // ZERO NETWORK EGRESS
          </text>
          <text x="376" y="43" textAnchor="end" fill="#E07A42" fontSize="9" fontFamily="JetBrains Mono, monospace">
            AIR-GAPPED
          </text>

          {/* Vertical pipeline steps */}
          {[
            { num: '01', title: '74 Official Flutter Docs', meta: '1,794 Chunks · 50-Overlap', accent: false },
            { num: '02', title: 'ChromaDB + Sentence-Transformers', meta: '15.61ms Retrieval Latency', accent: true },
            { num: '03', title: 'LM Studio (Qwen2.5-Coder)', meta: '6GB VRAM Laptop GPU', accent: false },
          ].map((row, idx) => (
            <g key={row.num} transform={`translate(48, ${72 + idx * 54})`}>
              <rect
                width="324"
                height="40"
                rx="9"
                fill="#080808"
                stroke={row.accent ? '#E07A42' : 'rgba(245,245,245,0.14)'}
              />
              <text x="16" y="24" fill="#E07A42" fontSize="10" fontFamily="JetBrains Mono, monospace">
                {row.num}
              </text>
              <text x="42" y="24" fill="#F5F5F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
                {row.title}
              </text>
              <text x="308" y="24" textAnchor="end" fill="#929292" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
                {row.meta}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (visualType === 'stocker') {
    return (
      <div
        className={`relative w-full h-full bg-[#0b0b0b] overflow-hidden flex items-center justify-center p-6 ${className}`}
      >
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-8 w-60 h-60 rounded-full blur-[80px] opacity-20 bg-[#E07A42]"
        />
        <div aria-hidden="true" className="absolute inset-0 dm-tech-grid opacity-55" />

        <svg viewBox="0 0 420 260" className="w-full h-full relative z-10">
          <rect
            x="24"
            y="22"
            width="372"
            height="216"
            rx="16"
            fill="rgba(17,17,17,0.85)"
            stroke="rgba(245,245,245,0.12)"
          />
          <line x1="24" y1="56" x2="396" y2="56" stroke="rgba(245,245,245,0.08)" />
          <circle cx="44" cy="39" r="4" fill="#E07A42" />
          <text x="56" y="43" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            MR. STOCKER // FINANCIAL RESEARCH
          </text>
          <text x="376" y="43" textAnchor="end" fill="#E07A42" fontSize="9" fontFamily="JetBrains Mono, monospace">
            LLAMA 3.3 70B · VADER
          </text>

          {/* Left Inputs: Market Data + News Sentiment */}
          <rect x="44" y="72" width="104" height="44" rx="8" fill="#080808" stroke="rgba(245,245,245,0.16)" />
          <text x="54" y="89" fill="#929292" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            MARKET DATA
          </text>
          <text x="54" y="104" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            yFinance (Recent)
          </text>

          <rect x="44" y="124" width="104" height="44" rx="8" fill="#080808" stroke="rgba(245,245,245,0.16)" />
          <text x="54" y="141" fill="#929292" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            NEWS + NLP
          </text>
          <text x="54" y="156" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            NewsAPI · VADER
          </text>

          {/* Connectors to reasoning engine */}
          <path d="M150 94 H166" stroke="#F5F5F5" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />
          <path d="M150 146 H166" stroke="#F5F5F5" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Center Box: Groq Llama 3.3 70B Reasoning */}
          <rect
            x="168"
            y="70"
            width="128"
            height="100"
            rx="12"
            fill="rgba(224,122,66,0.08)"
            stroke="#E07A42"
          />
          <text x="232" y="90" textAnchor="middle" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            STRUCTURED REASONING
          </text>
          <text x="232" y="107" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="700">
            Groq Llama 3.3 70B
          </text>
          <text x="180" y="124" fill="#F5F5F5" fontSize="8" fontFamily="JetBrains Mono, monospace">
            + Bullish Case
          </text>
          <text x="180" y="138" fill="#F5F5F5" fontSize="8" fontFamily="JetBrains Mono, monospace">
            - Bearish Case
          </text>
          <text x="180" y="152" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            • Risk Context
          </text>

          {/* Connector to Gradio */}
          <path d="M298 120 H312" stroke="#E07A42" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Right Box: Gradio UI */}
          <rect x="314" y="72" width="66" height="96" rx="10" fill="#080808" stroke="rgba(245,245,245,0.16)" />
          <text x="347" y="95" textAnchor="middle" fill="#929292" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            INTERFACE
          </text>
          <text x="347" y="114" textAnchor="middle" fill="#F5F5F5" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            Gradio
          </text>
          <text x="347" y="129" textAnchor="middle" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Guided
          </text>
          <text x="347" y="142" textAnchor="middle" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Q&amp;A
          </text>

          {/* Bottom Educational Disclaimer Strip */}
          <rect x="44" y="180" width="336" height="34" rx="8" fill="#080808" stroke="rgba(245,245,245,0.12)" />
          <text x="58" y="201" fill="#E07A42" fontSize="8" fontFamily="JetBrains Mono, monospace">
            DISCLAIMER //
          </text>
          <text x="136" y="201" fill="#929292" fontSize="8" fontFamily="JetBrains Mono, monospace">
            EDUCATIONAL RESEARCH · RECENT DATA · NOT FINANCIAL ADVICE
          </text>
        </svg>
      </div>
    );
  }

  // VTU TOC STUDIO
  return (
    <div
      className={`relative w-full h-full bg-[#0b0b0b] overflow-hidden flex items-center justify-center p-6 ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0 dm-tech-grid opacity-55" />
      <svg viewBox="0 0 420 260" className="w-full h-full relative z-10">
        <rect
          x="24"
          y="22"
          width="372"
          height="216"
          rx="16"
          fill="rgba(17,17,17,0.85)"
          stroke="rgba(245,245,245,0.12)"
        />
        <line x1="24" y1="56" x2="396" y2="56" stroke="rgba(245,245,245,0.08)" />
        <circle cx="44" cy="39" r="4" fill="#E07A42" />
        <text x="56" y="43" fill="#F5F5F5" fontSize="10" fontFamily="JetBrains Mono, monospace">
          VTU TOC STUDIO // SUBSET → DFA
        </text>
        <text x="376" y="43" textAnchor="end" fill="#929292" fontSize="9" fontFamily="JetBrains Mono, monospace">
          CYTOSCAPE ENGINE
        </text>

        {/* Automata transitions */}
        <path d="M56 146 H90" stroke="#F5F5F5" strokeOpacity="0.6" strokeWidth="1.4" />
        <path d="M144 146 H196" stroke="#F5F5F5" strokeOpacity="0.45" strokeWidth="1.4" />
        <path d="M250 146 H302" stroke="#E07A42" strokeWidth="1.5" />
        <path d="M126 118 Q210 72 320 116" fill="none" stroke="rgba(245,245,245,0.28)" strokeDasharray="4 4" />

        {/* State q0 */}
        <circle cx="118" cy="146" r="26" fill="#080808" stroke="rgba(245,245,245,0.5)" strokeWidth="1.4" />
        <text x="118" y="150" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontFamily="JetBrains Mono, monospace">
          q₀
        </text>

        {/* State q1 */}
        <circle cx="222" cy="146" r="26" fill="#080808" stroke="rgba(245,245,245,0.5)" strokeWidth="1.4" />
        <text x="222" y="150" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontFamily="JetBrains Mono, monospace">
          {`{q₁,q₂}`}
        </text>

        {/* Accepting State */}
        <circle cx="328" cy="146" r="28" fill="rgba(224,122,66,0.12)" stroke="#E07A42" strokeWidth="1.5" />
        <circle cx="328" cy="146" r="22" fill="none" stroke="#E07A42" strokeWidth="1" />
        <text x="328" y="150" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontFamily="JetBrains Mono, monospace">
          q_f
        </text>

        <text x="170" y="136" textAnchor="middle" fill="#929292" fontSize="10" fontFamily="JetBrains Mono, monospace">
          ε
        </text>
        <text x="276" y="136" textAnchor="middle" fill="#E07A42" fontSize="10" fontFamily="JetBrains Mono, monospace">
          0,1
        </text>
        <text x="210" y="216" textAnchor="middle" fill="#929292" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
          M = (Q, Σ, δ, q₀, F) // STEP TAPE SIMULATOR
        </text>
      </svg>
    </div>
  );
};
