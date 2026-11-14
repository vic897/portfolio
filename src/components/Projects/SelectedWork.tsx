import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/BrandIcons';
import { PROJECTS, ProjectItem } from '../../data/projects';
import { MaskedText } from '../Transitions/MaskedText';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';

/**
 * Section 05: SELECTED WORK.
 * Synthesizes 2002.mp4's horizontal gallery momentum & overlapping kinetic deck
 * with Reference 1's circular arrow controls & Reference 2's structured spec sheets.
 */
export const SelectedWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeProject = PROJECTS[activeIndex];

  const selectProject = (idx: number) => {
    const wrapped = (idx + PROJECTS.length) % PROJECTS.length;
    setActiveIndex(wrapped);

    const container = trackRef.current;
    const card = container?.children[wrapped] as HTMLElement | undefined;
    if (container && card) {
      const targetLeft =
        card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-8 xl:px-14 border-t border-[#F5F5F5]/[0.08] bg-[#080808]/88"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header + Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 mb-12 dm-dash-b">
          <div>
            <div className="font-pixel text-[11px] tracking-[0.2em] text-[#E07A42] mb-3">
              04 // ENGINEERING ARCHIVE
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[0.94] text-[#F5F5F5]">
              <MaskedText lines={['SELECTED', 'WORK.']} />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 mr-2">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => selectProject(idx)}
                  aria-label={`Select project ${proj.title}`}
                  className={`px-3 py-1 rounded-full font-mono-tech text-[11px] transition-all border ${
                    idx === activeIndex
                      ? 'bg-[#F5F5F5] text-[#080808] border-[#F5F5F5] font-semibold'
                      : 'bg-[#111111]/80 text-[#929292] border-[#F5F5F5]/12 hover:border-[#E07A42]/50 hover:text-[#F5F5F5]'
                  }`}
                >
                  {proj.number}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => selectProject(activeIndex - 1)}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border border-[#F5F5F5]/18 bg-[#111111]/80 hover:border-[#E07A42] hover:bg-[#1a1a1a] flex items-center justify-center text-[#F5F5F5] transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => selectProject(activeIndex + 1)}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border border-[#F5F5F5]/18 bg-[#111111]/80 hover:border-[#E07A42] hover:bg-[#1a1a1a] flex items-center justify-center text-[#F5F5F5] transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Interactive Showcase Track (2002.mp4 + Reference 1 card deck inspiration) */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROJECTS.map((project, idx) => {
              const isFocused = idx === activeIndex;

              return (
                <article
                  key={project.id}
                  data-cursor="view"
                  onClick={() => {
                    if (isFocused) {
                      setModalProject(project);
                    } else {
                      selectProject(idx);
                    }
                  }}
                  className={`snap-center shrink-0 w-[86vw] sm:w-[440px] lg:w-[500px] rounded-3xl p-4 sm:p-5 transition-all duration-500 cursor-pointer border ${
                    isFocused
                      ? 'dm-glass-elevated border-[#F5F5F5]/25 scale-100 opacity-100'
                      : 'dm-glass border-[#F5F5F5]/10 scale-[0.97] opacity-65 hover:opacity-95'
                  }`}
                >
                  {/* Hover-zoom Visual Container */}
                  <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#F5F5F5]/10 group">
                    <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <ProjectVisual visualType={project.visualType} />
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#080808]/85 border border-[#F5F5F5]/15 font-mono-tech text-[10px] tracking-[0.16em] text-[#F5F5F5]">
                      {project.number} // {project.featured ? 'CORE' : 'ARCHIVE'}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="pt-5 px-1 space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono-tech tracking-[0.18em] text-[#E07A42]">
                      <span>{project.category}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F5F5F5]/60" />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5]">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#929292] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Active Project Editorial Case Study Spotlight (Reference 2 spec sheet layout) */}
        <div className="mt-10 dm-glass-elevated rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Vertical / Rotated Accent Index (Reference 2) + Main Narrative */}
            <div className="lg:col-span-7 flex gap-5">
              <div className="hidden sm:flex flex-col items-center justify-between py-1">
                <span className="font-mono-tech text-[10px] tracking-[0.26em] text-[#929292] [writing-mode:vertical-rl] rotate-180 uppercase">
                  FEATURED SPECIFICATION
                </span>
                <span className="font-pixel text-xs text-[#E07A42]">
                  {activeProject.number}
                </span>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <div className="font-mono-tech text-[11px] tracking-[0.2em] text-[#E07A42] uppercase">
                    {activeProject.category}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] mt-1.5">
                    {activeProject.title}
                  </h3>
                  <div className="font-editorial italic text-xl text-[#F3EFEA]/85 mt-1">
                    {activeProject.tagline}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#929292] leading-relaxed">
                  {activeProject.summary}
                </p>

                <ul className="space-y-2 pt-2">
                  {activeProject.highlights.slice(0, 3).map((hl) => (
                    <li
                      key={hl}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F5]/85 leading-relaxed"
                    >
                      <span className="text-[#E07A42] mt-1 font-mono-tech">→</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#080808] border border-[#F5F5F5]/12 font-mono-tech text-xs text-[#F5F5F5]/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Technical Specs Matrix & Case Study Actions */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-2xl bg-[#080808]/85 border border-[#F5F5F5]/10 divide-y divide-[#F5F5F5]/10">
                {activeProject.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="px-4 py-3.5 flex items-center justify-between gap-4 text-xs"
                  >
                    <span className="font-mono-tech tracking-[0.16em] text-[#929292] uppercase">
                      {spec.label}
                    </span>
                    <span className="font-mono-tech text-[#F5F5F5] text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalProject(activeProject)}
                  className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F5F5F5] text-[#080808] hover:bg-[#E07A42] font-mono-tech text-xs font-semibold tracking-[0.14em] uppercase transition-colors"
                >
                  <Layers className="w-4 h-4" />
                  <span>FULL CASE STUDY</span>
                </button>

                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full dm-pill text-[#F5F5F5] font-mono-tech text-xs tracking-[0.12em] uppercase"
                  >
                    <GithubIcon className="w-4 h-4 text-[#E07A42]" />
                    <span>CODE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full dm-pill text-[#F5F5F5] font-mono-tech text-xs tracking-[0.12em] uppercase"
                  >
                    <span>LIVE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E07A42]" />
                  </a>
                )}

                {activeProject.postLinks?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full dm-pill text-[#F5F5F5] font-mono-tech text-xs tracking-[0.12em] uppercase hover:border-[#E07A42]/60 transition-colors"
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
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
