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
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 size={13} />
            <span>Featured Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I've Built
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            An in-depth look at ChatsApp, a full-stack real-time messaging application engineered with Spring Boot, WebSockets, and React.
          </p>
        </div>

        {/* Main Project Card */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 dark:border-slate-800">
            <div>
              {/* Category & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/80">
                  {project.category}
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPreviewOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-cyan-500/20 cursor-pointer"
                    title="Preview ChatsApp screenshots and output"
                  >
                    <Eye size={14} />
                    <span>Project Preview</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium transition-colors shadow-sm"
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

              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-4">
                {project.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {project.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Preview Banner */}
              <div 
                onClick={() => setIsPreviewOpen(true)}
                className="mb-6 p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 dark:bg-slate-900/60 dark:hover:bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-500/60 cursor-pointer flex items-center justify-between group transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <Eye size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      Live Output Preview Walkthrough
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300">
                        14 Screenshots
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Step-by-step output flow: Registration, Login, Chat, Group creation & Real-time sync.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Preview</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60">
              <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold uppercase tracking-wider">
                Technologies & Libraries
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/80"
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
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-cyan-500/20 shadow-md">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700/60">
              <Cpu size={18} className="text-cyan-500" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.architecture.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between"
                >
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1.5">
                    {layer.layer}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
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
