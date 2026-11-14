export interface SocialLink {
  id: 'github' | 'linkedin' | 'email' | 'resume';
  label: string;
  handle: string;
  href: string;
  external?: boolean;
  download?: string;
}

export const PORTFOLIO_PROFILE = {
  brand: 'DARK MATTER',
  shortName: 'VINAY',
  fullName: 'Vinaykumar S Mathpati',
  role: 'Full-Stack Developer',
  headlineLines: ['BUILDING', 'DIGITAL', 'EXPERIENCES.'] as const,
  altRoleTag: 'FULL-STACK DEVELOPER',
  location: 'Bengaluru, India',
  coordinates: '12.9716° N · 77.5946° E',
  institution: 'City Engineering College, Bengaluru · VTU',
  degree: 'B.E. Computer Science & Engineering',
  graduation: 'Expected May 2028',
  availability: 'OPEN FOR SWE INTERNSHIPS',
  intro:
    'Computer Science undergraduate (VTU, Expected 2028) specializing in backend engineering, real-time distributed systems, and local AI pipelines.',
  about: {
    heading: ['BEHIND', 'THE INTERFACE.'] as const,
    lead: 'Engineering reliable full-stack architectures and local-first AI software with editorial clarity.',
    paragraphs: [
      'I am Vinaykumar S Mathpati — known simply as Vinay — a Computer Science & Engineering student based in Bengaluru, India, pursuing my B.E. at City Engineering College (VTU, Expected May 2028).',
      'My engineering focus sits at the intersection of real-time distributed web systems, production-grade microservices, and local-first applied AI. Instead of treating intelligence as an external wrapper, I build the end-to-end mechanics underneath — from Spring Boot 3 WebSocket STOMP channels and PostgreSQL Row-Level Security to on-device ChromaDB vector retrieval pipelines.',
      'Across every project I ship, I aim to unify clean systems architecture, verifiable security models, and tactile interfaces that feel deliberate and effortless to use.',
    ],
    principles: [
      {
        code: '01 // ARCHITECTURE',
        title: 'Systems First',
        summary:
          'Strong data models, fail-closed security boundaries, and deterministic contracts before UI polish.',
      },
      {
        code: '02 // LOCAL AI',
        title: 'Zero-Egress Intelligence',
        summary:
          'Grounded retrieval pipelines and local inference that respect user privacy and constrained hardware.',
      },
      {
        code: '03 // CRAFT',
        title: 'Intentional Interfaces',
        summary:
          'Restrained motion, crisp typographic hierarchy, and tactile feedback serving real product utility.',
      },
    ],
  },
  beyondCode: {
    eyebrow: '07 // BEYOND THE CODE',
    heading: 'CURIOSITY & PHILOSOPHY.',
    statement:
      'Great software starts with first principles — dissecting how protocols, automata, vector spaces, and browsers behave under constraint, then assembling them into tools people genuinely enjoy using.',
    pillars: [
      {
        index: '01',
        label: 'LEARNING PHILOSOPHY',
        title: 'Build to Understand',
        detail:
          'From implementing NFA-to-DFA subset construction visually in VTU TOC Studio to building a TCP malware scanner in Huddle, I learn complex CS theory by turning it into working software.',
      },
      {
        index: '02',
        label: 'AREAS OF EXPLORATION',
        title: 'Local-First & Real-Time',
        detail:
          'Exploring quantized local inference on consumer GPUs, low-latency WebSocket coordination, and fail-closed application security.',
      },
      {
        index: '03',
        label: 'PROBLEM SOLVING',
        title: 'Explainable by Design',
        detail:
          'Whether ranking student teams or grounding RAG answers in documentation, systems should expose why they make a decision.',
      },
    ],
  },
  contact: {
    eyebrow: '08 // CONTACT',
    headingLines: ['HAVE AN IDEA?', "LET'S BUILD IT."] as const,
    subcopy:
      'Currently seeking Software Engineering internship opportunities and open to engineering collaborations on full-stack products and applied AI tools.',
    email: 'vinaymathpati16@gmail.com',
  },
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      handle: 'github.com/vic897',
      href: 'https://github.com/vic897',
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'in/vinay-mathpati',
      href: 'https://linkedin.com/in/vinay-mathpati',
      external: true,
    },
    {
      id: 'email',
      label: 'Email',
      handle: 'vinaymathpati16@gmail.com',
      href: 'mailto:vinaymathpati16@gmail.com',
      external: false,
    },
    {
      id: 'resume',
      label: 'Resume',
      handle: 'Vinay_Resume_Final.pdf',
      href: '/resume.pdf',
      download: 'Vinay_Resume_Final.pdf',
    },
  ] satisfies SocialLink[],
};
