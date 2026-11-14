import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, CheckCircle2, Globe, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/BrandIcons';
import { ProjectItem } from '../../data/projects';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
      data-lenis-prevent
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#050505]/85 backdrop-blur-xl"
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto dm-glass-elevated rounded-3xl p-6 sm:p-10 text-[#F5F5F5]">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#F5F5F5]/10">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-mono-tech tracking-[0.2em] text-[#E07A42]">
              <span>CASE STUDY // {project.number}</span>
              <span className="text-[#F5F5F5]/25">•</span>
              <span className="text-[#929292]">{project.category}</span>
            </div>
            <h3
              id="project-modal-title"
              className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2"
            >
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#929292] mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="w-10 h-10 rounded-full border border-[#F5F5F5]/15 bg-[#111111] hover:border-[#E07A42] flex items-center justify-center text-[#F5F5F5] shrink-0 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Showcase */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#F5F5F5]/10 h-60 sm:h-72">
          <ProjectVisual visualType={project.visualType} />
        </div>

        {/* Problem & Architecture */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="dm-glass rounded-2xl p-5">
            <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#E07A42] uppercase mb-2">
              PROBLEM STATEMENT
            </div>
            <p className="text-sm text-[#929292] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="dm-glass rounded-2xl p-5">
            <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#E07A42] uppercase mb-2">
              SYSTEM ARCHITECTURE
            </div>
            <p className="text-sm text-[#929292] leading-relaxed">
              {project.architecture}
            </p>
          </div>
        </div>

        {/* Disclaimer / Notice when specified */}
        {project.disclaimer && (
          <div className="mt-6 rounded-2xl bg-[#080808]/90 border border-[#E07A42]/30 p-4 flex items-start gap-3">
            <span className="font-mono-tech text-[10px] text-[#E07A42] tracking-[0.18em] uppercase shrink-0 mt-0.5">
              NOTICE //
            </span>
            <p className="text-xs text-[#929292] leading-relaxed">
              {project.disclaimer}
            </p>
          </div>
        )}

        {/* Technical Specifications Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.specs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-xl bg-[#080808]/80 border border-[#F5F5F5]/10 p-3.5"
            >
              <div className="font-mono-tech text-[10px] tracking-[0.16em] text-[#929292] uppercase">
                {spec.label}
              </div>
              <div className="font-mono-tech text-xs text-[#F5F5F5] mt-1 font-medium">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Key Implementation Highlights */}
        <div className="mt-8">
          <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#929292] uppercase mb-3">
            IMPLEMENTATION HIGHLIGHTS
          </div>
          <ul className="space-y-2.5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[#F5F5F5]/90 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E07A42] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack + Actions */}
        <div className="mt-8 pt-6 border-t border-[#F5F5F5]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-[#080808] border border-[#F5F5F5]/12 font-mono-tech text-xs text-[#F5F5F5]/85"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F5] text-[#080808] hover:bg-[#E07A42] font-mono-tech text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>SOURCE REPO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <a
                href="https://github.com/vic897"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full dm-pill text-[#F5F5F5] font-mono-tech text-xs"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#E07A42]" />
                <span>GITHUB PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E07A42] text-[#080808] font-mono-tech text-xs font-semibold"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.postLinks?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full dm-pill text-[#F5F5F5] font-mono-tech text-xs hover:border-[#E07A42]/60 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#E07A42]" />
                <span>{link.label}</span>
                <span className="sr-only">↗</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E07A42]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
