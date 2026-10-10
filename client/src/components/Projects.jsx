import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  CheckCircle2, 
  ArrowUpRight,
  Radio,
  Cpu,
  Eye
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectPreviewModal } from './ProjectPreviewModal';
import { chatsappScreenshots } from '../data/chatsappScreenshots';

export const Projects = () => {
  const { projects } = portfolioData;
  const project = projects[0];
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  if (!project) return null;

  return (
    <section id="projects" className="py-20 relative bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono font-medium tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2">
            04 / Project
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Project
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            An in-depth look at ChatsApp, a full-stack real-time messaging application engineered with Spring Boot, WebSockets, and React.
          </p>
        </div>

        {/* Main Project Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative">
            <div>
              {/* Category & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#0c1017] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                  {project.category}
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPreviewOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium transition-all shadow-sm cursor-pointer"
                    title="Preview ChatsApp screenshots and output"
                  >
                    <Eye size={14} />
                    <span>Project Preview</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#111622] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-800 transition-colors shadow-2xs"
                    title="View Source on GitHub"
                  >
                    <Github size={14} />
                    <span>GitHub Repository</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                {project.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-4">
                {project.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {project.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0 mt-2" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Preview Banner */}
              <div 
                onClick={() => setIsPreviewOpen(true)}
                className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 cursor-pointer flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center">
                    <Eye size={17} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      Live Output Preview Walkthrough
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        14 Screenshots
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Step-by-step output flow: Registration, Login, Chat, Group creation & Real-time sync.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Preview</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-2 font-semibold uppercase tracking-wider">
                Technologies & Libraries
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100/80 dark:bg-[#0c1017] text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Breakdown */}
        <div className="max-w-4xl mx-auto">
          <div className="surface-card p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <Cpu size={18} className="text-slate-700 dark:text-slate-300" />
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  System Architecture & Data Flow
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  How components communicate across the client, authentication layer, and database.
                </p>
              </div>
            </div>

            {/* Layer Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {project.architecture.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl surface-subtle flex flex-col justify-between"
                >
                  <div className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5 font-mono">
                    {layer.layer}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {layer.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Project Screenshots Preview Modal */}
      <ProjectPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        projectTitle="ChatsApp"
        screenshots={chatsappScreenshots}
      />
    </section>
  );
};
