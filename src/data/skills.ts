export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'tools'
  | 'other';

export interface SkillItem {
  name: string;
  context: string;
  usedIn: string[];
}

export interface SkillCategory {
  id: SkillCategoryId;
  code: string;
  title: string;
  subtitle: string;
  items: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    code: 'SYS.01',
    title: 'FRONTEND',
    subtitle: 'Component Architecture & Real-Time UI',
    items: [
      {
        name: 'TypeScript',
        context: 'Strict type safety across client & API contracts',
        usedIn: ['Huddle', 'Liberium', 'FitStack', 'VTU TOC Studio'],
      },
      {
        name: 'Next.js',
        context: 'App Router, Route Handlers & server components',
        usedIn: ['Huddle', 'Liberium', 'FitStack', 'VTU TOC Studio'],
      },
      {
        name: 'React',
        context: 'Interactive stateful interfaces & custom hooks',
        usedIn: ['Huddle', 'Liberium', 'FitStack', 'VTU TOC Studio'],
      },
      {
        name: 'JavaScript',
        context: 'Core browser & asynchronous event programming',
        usedIn: ['C-HIVE TechFest', 'Web Systems'],
      },
      {
        name: 'Tailwind CSS',
        context: 'Design systems & responsive dark-glass layouts',
        usedIn: ['Huddle', 'Liberium', 'FitStack', 'VTU TOC Studio'],
      },
      {
        name: 'Zustand',
        context: 'Lightweight deterministic client state stores',
        usedIn: ['Liberium', 'VTU TOC Studio'],
      },
      {
        name: 'Gradio',
        context: 'Interactive web UI for Python AI workflows',
        usedIn: ['Mr. Stocker'],
      },
    ],
  },
  {
    id: 'backend',
    code: 'SYS.02',
    title: 'BACKEND',
    subtitle: 'APIs, Auth & Event-Driven Messaging',
    items: [
      {
        name: 'Spring Boot 3 (Java 17)',
        context: 'Enterprise microservices, JPA & ClamAV TCP integration',
        usedIn: ['Huddle'],
      },
      {
        name: 'Spring Data JPA & Hibernate 6',
        context: 'Relational data mapping, repository patterns & transactions',
        usedIn: ['Huddle'],
      },
      {
        name: 'Spring Security & JWT',
        context: 'Stateless token authentication & endpoint authorization',
        usedIn: ['Huddle', 'Liberium'],
      },
      {
        name: 'WebSockets (STOMP)',
        context: 'Bidirectional team chat, presence & typing indicators',
        usedIn: ['Huddle'],
      },
      {
        name: 'Socket.io',
        context: 'Authenticated real-time community chat channels',
        usedIn: ['Liberium'],
      },
      {
        name: 'Node.js & Express.js',
        context: 'Custom HTTP servers, REST routing & middleware',
        usedIn: ['Liberium', 'C-HIVE TechFest'],
      },
      {
        name: 'Python',
        context: 'Ingestion, vector retrieval & AI orchestration',
        usedIn: ['Offline Flutter Tutor', 'Mr. Stocker'],
      },
      {
        name: 'SQL',
        context: 'Complex queries, schema design & versioned migrations',
        usedIn: ['Huddle', 'FitStack'],
      },
    ],
  },
  {
    id: 'databases',
    code: 'SYS.03',
    title: 'DATABASES',
    subtitle: 'Relational, Row-Level Security & Vector Stores',
    items: [
      {
        name: 'PostgreSQL',
        context: 'Relational modeling, constraints & Flyway migrations',
        usedIn: ['Huddle', 'FitStack'],
      },
      {
        name: 'Supabase (RLS & Auth)',
        context: 'Row-Level Security policies enforcing per-user data isolation',
        usedIn: ['FitStack'],
      },
      {
        name: 'MongoDB & Mongoose',
        context: 'Document persistence for communities & registrations',
        usedIn: ['Liberium', 'C-HIVE TechFest'],
      },
      {
        name: 'ChromaDB',
        context: 'On-device vector database for dense passage retrieval',
        usedIn: ['Offline Flutter Tutor'],
      },
    ],
  },
  {
    id: 'tools',
    code: 'SYS.04',
    title: 'TOOLS & DEVOPS',
    subtitle: 'Version Control, Build & Deployment',
    items: [
      {
        name: 'Git & GitHub',
        context: 'Feature branching, audit workflows & version control',
        usedIn: ['All Projects'],
      },
      {
        name: 'Maven & Flyway',
        context: 'Java dependency management & repeatable SQL migrations',
        usedIn: ['Huddle'],
      },
      {
        name: 'Postman',
        context: 'API contract testing, payload mocking & endpoint verification',
        usedIn: ['Huddle', 'Liberium'],
      },
      {
        name: 'Linux / Bash',
        context: 'Shell scripting, server environments & command-line pipelines',
        usedIn: ['Systems & Automation'],
      },
      {
        name: 'Vercel',
        context: 'Production Next.js deployment & serverless edge runtime',
        usedIn: ['FitStack'],
      },
      {
        name: 'ClamAV',
        context: 'Fail-closed TCP zINSTREAM file security scanner',
        usedIn: ['Huddle'],
      },
    ],
  },
  {
    id: 'other',
    code: 'SYS.05',
    title: 'AI & APPLIED INTELLIGENCE',
    subtitle: 'RAG Pipelines, Local Inference & Multi-Source Synthesis',
    items: [
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        context: 'Chunking, dense vector indexing & grounded retrieval',
        usedIn: ['Offline Flutter Tutor'],
      },
      {
        name: 'Sentence-Transformers',
        context: 'Dense semantic vector embeddings (all-MiniLM-L6-v2)',
        usedIn: ['Offline Flutter Tutor'],
      },
      {
        name: 'Local LLMs (LM Studio & Ollama)',
        context: 'Air-gapped on-device inference (Qwen2.5-Coder / LLaMA 3.2)',
        usedIn: ['Offline Flutter Tutor', 'Liberium'],
      },
      {
        name: 'Groq API (Llama 3.3 & 3.1)',
        context: 'High-speed cloud fallback & structured financial analysis',
        usedIn: ['FitStack', 'Liberium', 'Mr. Stocker'],
      },
      {
        name: 'yFinance & VADER Sentiment',
        context: 'Recent market data gathering & news sentiment scoring',
        usedIn: ['Mr. Stocker'],
      },
      {
        name: 'Cytoscape.js',
        context: 'Interactive graph layout for state machines & automata',
        usedIn: ['VTU TOC Studio'],
      },
    ],
  },
];
