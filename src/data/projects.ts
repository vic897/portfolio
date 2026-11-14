export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectPostLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  featured?: boolean;
  summary: string;
  problem: string;
  architecture: string;
  highlights: string[];
  specs: ProjectSpec[];
  technologies: string[];
  visualType:
    | 'fitstack'
    | 'huddle'
    | 'liberium'
    | 'flutter-tutor'
    | 'stocker'
    | 'toc-studio';
  githubUrl?: string;
  liveUrl?: string;
  disclaimer?: string;
  postLinks?: ProjectPostLink[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fitstack',
    number: '01',
    title: 'FITSTACK',
    tagline: 'AI Fitness Platform & Context-Aware Coaching',
    category: 'FULL-STACK · AI ENGINEERING',
    featured: true,
    summary:
      'Deployed full-stack fitness application combining Supabase authentication and PostgreSQL Row-Level Security with Groq LLaMA-3.3-70B workout generation constrained strictly to a verified 149-exercise database.',
    problem:
      'Generic AI fitness applications generate ungrounded workout routines with hallucinated exercises and lack persistent multi-tenant security isolating per-user training telemetry.',
    architecture:
      'Next.js App Router client with protected server routes backed by Supabase Auth and PostgreSQL Row-Level Security (RLS) policies, injecting historical user telemetry into Groq LLaMA-3.3-70B.',
    highlights: [
      'Built and deployed a full-stack fitness application with Supabase authentication and PostgreSQL Row-Level Security (RLS) policies enforcing multi-tenant user data isolation.',
      'Developed an AI workout generator powered by Groq API (LLaMA-3.3-70B) constrained to a verified 149-exercise database, generating tailored 7-day training routines.',
      'Engineered a context-aware AI coach injecting historical user telemetry (goals, fitness level, latest weight logs) into structured system prompts.',
      'Shipped production build on Vercel with end-to-end TypeScript type safety and zero client-side data leaks.',
    ],
    specs: [
      { label: 'Model', value: 'LLaMA-3.3-70B via Groq API' },
      { label: 'Constraint', value: '149-Exercise Catalog' },
      { label: 'Security', value: 'Supabase Auth + PG RLS' },
      { label: 'Deployment', value: 'Vercel Production' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Groq API',
      'Tailwind CSS',
      'Vercel',
    ],
    visualType: 'fitstack',
    githubUrl: 'https://github.com/vic897/fitstack',
    liveUrl: 'https://fitstack-delta.vercel.app',
    postLinks: [
      {
        label: 'VIEW PROJECT POST',
        url: 'https://lnkd.in/p/dWQVrZKF',
      },
    ],
  },
  {
    id: 'huddle',
    number: '02',
    title: 'HUDDLE',
    tagline: 'Campus Collaboration & Explainable Team Matching',
    category: 'FULL-STACK · REAL-TIME SYSTEMS',
    featured: true,
    summary:
      'Campus-gated collaboration platform pairing an explainable student matching algorithm with Spring Boot 3 WebSocket STOMP workspaces, PostgreSQL persistence via Spring Data JPA, and fail-closed ClamAV file scanning.',
    problem:
      'Campus students struggle to form balanced project teams across fragmented messaging apps lacking skill verification, structured join requests, or safe file sharing.',
    architecture:
      'Mono-repo architecture pairing a Next.js / TypeScript client with a Spring Boot 3 (Java 17) & PostgreSQL backend via Spring Data JPA, STOMP real-time channels, and ClamAV TCP scanning.',
    highlights: [
      'Engineered a full-stack campus collaboration platform featuring an explainable student matching engine (70% skill complementarity, 30% schedule availability) with itemized score breakdowns.',
      'Built real-time messaging architecture using Spring Boot 3 WebSocket (STOMP) channels, supporting multi-member collaboration workspaces with unread badges and live typing indicators.',
      'Designed fail-closed file security scanning integrating ClamAV over TCP zINSTREAM protocol; architected PostgreSQL persistence via Spring Data JPA with Flyway database migrations.',
      'Maintained comprehensive test coverage with 269 automated backend integration and unit tests across authentication, matching, and messaging pipelines.',
    ],
    specs: [
      { label: 'Matching', value: '70% Skill · 30% Schedule' },
      { label: 'Real-Time', value: 'Spring WebSocket (STOMP)' },
      { label: 'Backend', value: 'Spring Boot 3 · Java 17' },
      { label: 'Testing', value: '269 Automated Tests' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Java 17',
      'Spring Boot 3',
      'Spring Data JPA',
      'PostgreSQL',
      'WebSockets',
      'Flyway',
      'ClamAV',
    ],
    visualType: 'huddle',
    githubUrl: 'https://github.com/vic897/huddle',
    liveUrl: undefined,
    postLinks: [
      {
        label: 'VIEW POST 01',
        url: 'https://lnkd.in/p/drAQvcn9',
      },
      {
        label: 'VIEW POST 02',
        url: 'https://lnkd.in/p/dbe2uJM9',
      },
    ],
  },
  {
    id: 'liberium',
    number: '03',
    title: 'LIBERIUM',
    tagline: 'A distraction-free digital reading sanctuary.',
    category: 'FULL-STACK · AI-POWERED · REAL-TIME',
    featured: true,
    summary:
      'A modern reading platform combining book discovery, AI-assisted literary exploration, and real-time reader communities with cascading local Ollama inference and Groq cloud fallback.',
    problem:
      'Digital reading experiences are fragmented between commercial stores, bloated reader interfaces filled with distractions, and isolated reading without community or literary context.',
    architecture:
      'Next.js 16 + React 19 application hosted on a custom Node.js HTTP server integrating Socket.io real-time rooms, MongoDB persistence, and a cascading AI pipeline (local Ollama LLaMA 3.2 → Groq LLaMA 3.1 cloud fallback).',
    highlights: [
      'Integrated book discovery across Google Books, Open Library, and Project Gutenberg (via Gutendex), normalizing external metadata into a unified application schema.',
      'Engineered a cascading AI literary assistant prioritizing local Ollama inference (LLaMA 3.2) with automatic fallback to Groq cloud inference (LLaMA 3.1) with conversation history context.',
      'Architected real-time reader community discussion rooms using Socket.io and MongoDB with JWT session authentication and community-level membership authorization.',
      'Hardened security with server-side HttpOnly authentication cookies, sliding-window rate limiting on AI endpoints, and restricted WebSocket CORS origins.',
    ],
    specs: [
      { label: 'Discovery', value: 'Google Books · Open Library' },
      { label: 'Inference', value: 'Ollama LLaMA 3.2 → Groq 3.1' },
      { label: 'Real-Time', value: 'Socket.io Discussion Rooms' },
      { label: 'Database', value: 'MongoDB · Mongoose' },
    ],
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Ollama',
      'Groq API',
      'Zustand',
      'Tailwind CSS',
    ],
    visualType: 'liberium',
    githubUrl: 'https://github.com/vic897/liberium',
    liveUrl: undefined,
  },
  {
    id: 'offline-flutter-tutor',
    number: '04',
    title: 'OFFLINE FLUTTER TUTOR',
    tagline: 'Zero-Egress Local Documentation RAG System',
    category: 'APPLIED AI · LOCAL INFERENCE',
    featured: true,
    summary:
      'Fully offline Retrieval-Augmented Generation system answering Flutter/Dart developer questions grounded strictly in curated official documentation using ChromaDB, Sentence-Transformers, and LM Studio.',
    problem:
      'Cloud coding assistants require constant internet access, leak local context externally, and frequently hallucinate deprecated or fabricated Flutter widget APIs.',
    architecture:
      'Python ingestion pipeline chunking 74 curated Flutter docs into 1,794 passages, indexing dense embeddings via Sentence-Transformers into ChromaDB, and serving grounded responses via LM Studio (Qwen2.5-Coder).',
    highlights: [
      'Architected a fully offline, zero-network-egress RAG pipeline to answer developer questions grounded exclusively in curated Flutter/Dart documentation.',
      'Ingested 74 documentation files chunked into 1,794 passages (500-char window, 50-char overlap); indexed dense embeddings using Sentence-Transformers (all-MiniLM-L6-v2) into a local ChromaDB vector store.',
      'Benchmarked retrieval performance achieving 15.61 ms average latency and verified 70% of generated responses as fully grounded against retrieved context.',
      'Orchestrated local inference through LM Studio with Qwen2.5-Coder, optimized to run within a 6 GB VRAM budget on consumer laptop hardware.',
    ],
    specs: [
      { label: 'Latency', value: '15.61 ms Retrieval Avg' },
      { label: 'Dataset', value: '74 Docs · 1,794 Chunks' },
      { label: 'Vector DB', value: 'ChromaDB (Local)' },
      { label: 'Footprint', value: '6GB VRAM Laptop GPU' },
    ],
    technologies: [
      'Python',
      'ChromaDB',
      'Sentence-Transformers',
      'LM Studio',
      'Qwen2.5-Coder',
      'RAG',
    ],
    visualType: 'flutter-tutor',
    githubUrl: 'https://github.com/vic897/offline-flutter-tutor',
    liveUrl: undefined,
    postLinks: [
      {
        label: 'VIEW PROJECT POST',
        url: 'https://lnkd.in/p/drAQvcn9',
      },
    ],
  },
  {
    id: 'stocker',
    number: '05',
    title: 'MR. STOCKER',
    tagline: 'AI-Powered Financial Research & Analysis Assistant',
    category: 'AI · FINTECH · PYTHON APPLICATION',
    featured: false,
    summary:
      'A Python application combining recent market data, news sentiment analysis, and LLM reasoning to generate balanced financial research and multi-perspective market analysis.',
    problem:
      'Financial information is scattered across price charts, news feeds, and investor questions, making it difficult to form a balanced, multi-perspective view of a company or asset.',
    architecture:
      'Python orchestration pipeline combining yFinance recent daily market data and NewsAPI financial news with VADER sentiment scoring, feeding structured multi-perspective prompts into a Groq-hosted Llama 3.3 70B model via Gradio.',
    highlights: [
      'Synthesizes multi-source context by uniting recent daily stock-market data from yFinance with English-language financial news from NewsAPI.',
      'Implements isolated VADER sentiment analysis to calculate compound sentiment scores across news headlines and descriptions prior to prompt construction.',
      'Engineers structured LLM prompts for Groq-hosted Llama 3.3 70B, framing analysis through balanced bullish, bearish, risk-focused, low-risk investor, and high-risk trader viewpoints.',
      'Provides an interactive Gradio interface featuring a Guided Q&A panel that refines investment goals, style, time horizon, and risk tolerance into structured analysis queries.',
    ],
    specs: [
      { label: 'LLM Model', value: 'Llama 3.3 70B (Groq)' },
      { label: 'Market Data', value: 'yFinance Recent Daily Data' },
      { label: 'Sentiment', value: 'VADER Compound Scoring' },
      { label: 'Interface', value: 'Gradio Blocks UI' },
    ],
    technologies: [
      'Python',
      'Groq API',
      'Llama 3.3 70B',
      'yFinance',
      'NewsAPI',
      'VADER Sentiment',
      'Gradio',
    ],
    visualType: 'stocker',
    githubUrl: 'https://github.com/vic897/mr-stocker',
    liveUrl: undefined,
    disclaimer:
      'Educational research tool. Retrieves recent daily market data via yFinance; does not provide real-time streaming quotes or personalized financial advice.',
  },
  {
    id: 'vtu-toc-studio',
    number: '06',
    title: 'VTU TOC STUDIO',
    tagline: 'Interactive Automata & Subset Construction Workbench',
    category: 'FRONTEND ARCHITECTURE · CS TOOLING',
    featured: false,
    summary:
      'Interactive Theory of Computation workbench enabling step-by-step DFA, NFA, and ε-NFA simulation, formal ε-closure computation, and automated subset construction to DFA.',
    problem:
      'Static textbook diagrams make ε-closures, subset construction tables, and multi-path NFA execution hard to trace intuitively.',
    architecture:
      'Next.js 16 + React 19 client workspace combining pure TypeScript automata algorithms (closure, subset construction, simulator) with Cytoscape.js graph rendering and Zustand state.',
    highlights: [
      'Interactive Cytoscape.js state-machine graph paired with synchronized tape stepping and live state highlighting.',
      'Automated NFA / ε-NFA → DFA subset construction with live view toggling and transition table generation.',
      'Formal 5-tuple (Q, Σ, δ, q₀, F) display, explanation panel, and curated VTU previous-year question bank.',
    ],
    specs: [
      { label: 'Engine', value: 'ε-Closure + Subset DFA' },
      { label: 'Graph', value: 'Cytoscape.js + Zustand' },
      { label: 'Stack', value: 'Next.js 16 · React 19' },
      { label: 'Scope', value: 'DFA · NFA · ε-NFA' },
    ],
    technologies: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Cytoscape.js',
      'Zustand',
      'Tailwind CSS',
    ],
    visualType: 'toc-studio',
    githubUrl: 'https://github.com/vic897/vtu-toc-studio',
    liveUrl: undefined,
  },
];
