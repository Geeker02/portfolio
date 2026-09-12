import React from 'react';
import { 
  FolderGit2, 
  Github, 
  CheckCircle2, 
  Layers, 
  Activity, 
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
  Database,
  Radio
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;
  const project = projects[0]; // Spotlight personal project (ChatsApp)

  if (!project) return null;

  return (
    <section id="projects" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 size={14} />
            <span>Personal Software Engineering Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Full-Stack Project
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Deep-dive into full-stack real-time messaging, WebSocket STOMP protocol, Spring Security stateless JWT authentication, and relational schema optimization.
          </p>
        </div>

        {/* Spotlight Project Card */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative border border-slate-200/80 dark:border-slate-800">
            <div>
              {/* Category & GitHub Link */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/80">
                  {project.category}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold transition-colors shadow-sm"
                  title="View Source on GitHub"
                >
                  <Github size={15} />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                {project.title}
              </h3>

              <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 mb-4">
                {project.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {project.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={17} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60">
              <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold uppercase tracking-wider">
                Full-Stack Architecture & Dependencies
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

        {/* Architectural Blueprint Breakdown */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-lg">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700/60">
              <Activity size={18} className="text-cyan-500" />
              <div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold block uppercase">
                  Systems Architecture
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  ChatsApp Layer Breakdown & Data Flow
                </h4>
              </div>
            </div>

            {/* Layer Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.architecture.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-1.5 flex items-center justify-between">
                    <span>{layer.layer}</span>
                    <span className="text-[10px] text-slate-400">Layer 0{idx + 1}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {layer.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
