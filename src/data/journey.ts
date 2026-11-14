export interface JourneyEntry {
  id: string;
  timeframe: string;
  kind: 'EDUCATION' | 'PROJECT MILESTONE' | 'AVAILABILITY';
  title: string;
  organization: string;
  subtitle: string;
  highlights: string[];
  tags: string[];
  active?: boolean;
}

export const JOURNEY_ENTRIES: JourneyEntry[] = [
  {
    id: 'cec-vtu',
    timeframe: 'EXPECTED MAY 2028',
    kind: 'EDUCATION',
    title: 'B.E. Computer Science & Engineering',
    organization: 'City Engineering College, Bengaluru · VTU',
    subtitle: 'Undergraduate CSE Program (Visvesvaraya Technological University)',
    highlights: [
      'Core coursework: Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, Web Development, Machine Learning, Computer Networks, and Theory of Computation.',
      'Translating core academic computer science fundamentals directly into production-grade systems and open-source tools.',
    ],
    tags: ['DSA', 'DBMS', 'OS', 'Computer Networks'],
    active: true,
  },
  {
    id: 'huddle-milestone',
    timeframe: 'SHIPPED SYSTEM',
    kind: 'PROJECT MILESTONE',
    title: 'Huddle — Campus Collaboration Platform',
    organization: 'github.com/vic897/huddle',
    subtitle: 'Full-Stack Architecture · Explainable Matching · Spring Boot 3 & STOMP',
    highlights: [
      'Built campus-verified student team matching (70% skill complementarity, 30% availability overlap) with Next.js, TypeScript, Java 17, Spring Boot 3, and PostgreSQL via Spring Data JPA.',
      'Engineered STOMP WebSocket workspaces, fail-closed ClamAV TCP malware scanning, and 269 automated backend integration and unit tests.',
    ],
    tags: ['Spring Boot 3', 'Java 17', 'WebSockets', 'PostgreSQL', 'Next.js'],
  },
  {
    id: 'liberium-milestone',
    timeframe: 'PRODUCTION PLATFORM',
    kind: 'PROJECT MILESTONE',
    title: 'Liberium — Distraction-Free Reading Sanctuary',
    organization: 'github.com/vic897/liberium',
    subtitle: 'Multi-Source Discovery · Cascading Local AI · Real-Time Communities',
    highlights: [
      'Integrated book discovery across Google Books, Open Library, and Project Gutenberg (Gutendex) with an editorial, distraction-free reading experience.',
      'Built a cascading AI assistant prioritizing local Ollama inference (LLaMA 3.2) with Groq cloud fallback (LLaMA 3.1) and real-time Socket.io discussion rooms.',
    ],
    tags: ['Next.js 16', 'Ollama', 'Groq API', 'Socket.io', 'MongoDB'],
  },
  {
    id: 'fitstack-milestone',
    timeframe: 'DEPLOYED ON VERCEL',
    kind: 'PROJECT MILESTONE',
    title: 'FitStack — AI Fitness Platform',
    organization: 'fitstack-delta.vercel.app',
    subtitle: 'Supabase RLS · Groq LLaMA-3.3-70B · Context-Aware Coaching',
    highlights: [
      'Built and deployed a full-stack fitness application with Supabase authentication and PostgreSQL Row-Level Security (RLS) policies enforcing multi-tenant user data isolation.',
      'Developed a 149-exercise-constrained 7-day workout generator and context-aware coach powered by Groq LLaMA-3.3-70B.',
    ],
    tags: ['Next.js', 'Supabase RLS', 'Groq API', 'Vercel'],
  },
  {
    id: 'rag-milestone',
    timeframe: 'LOCAL-FIRST AI',
    kind: 'PROJECT MILESTONE',
    title: 'Offline Flutter Tutor — Local RAG Pipeline',
    organization: 'github.com/vic897/offline-flutter-tutor',
    subtitle: 'Zero-Egress Retrieval-Augmented Generation',
    highlights: [
      'Architected a zero-egress RAG pipeline chunking 74 Flutter docs into 1,794 passages embedded via Sentence-Transformers into local ChromaDB.',
      'Benchmarked 15.61 ms average retrieval latency and 70% grounded response accuracy with Qwen2.5-Coder running within a 6GB VRAM budget.',
    ],
    tags: ['Python', 'ChromaDB', 'Sentence-Transformers', 'LM Studio'],
  },
  {
    id: 'tools-milestone',
    timeframe: 'RESEARCH & TOOLING',
    kind: 'PROJECT MILESTONE',
    title: 'Mr. Stocker & VTU TOC Studio',
    organization: 'github.com/vic897',
    subtitle: 'Financial Research Assistant & Automata Simulation Workbench',
    highlights: [
      'Engineered Mr. Stocker financial research assistant combining recent yFinance market data and NewsAPI/VADER sentiment with Groq Llama 3.3 70B reasoning via Gradio.',
      'Created VTU TOC Studio interactive automata visualizer featuring formal ε-closure computation and subset construction to DFA.',
    ],
    tags: ['Python', 'Groq API', 'Gradio', 'Cytoscape.js', 'React 19'],
  },
  {
    id: 'swe-seeking',
    timeframe: 'CURRENT FOCUS',
    kind: 'AVAILABILITY',
    title: 'Seeking Software Engineering Internships',
    organization: 'Bengaluru / Remote',
    subtitle: 'Full-Stack Engineering · Backend Systems · Applied AI',
    highlights: [
      'Ready to contribute across TypeScript/Next.js frontends, relational Spring Boot/Node backends, and applied local/cloud AI pipelines.',
    ],
    tags: ['SWE Intern', 'Full-Stack', 'Backend Systems', 'Applied AI'],
    active: true,
  },
];
