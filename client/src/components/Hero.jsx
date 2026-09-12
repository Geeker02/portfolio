import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Download, 
  Terminal, 
  CheckCircle2,
  Sparkles,
  Code2,
  Database,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const { candidate, metrics } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Time Software Engineering Roles</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Hi, I'm <span className="text-gradient">{candidate.name}</span>
          </h1>

          <div className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4 font-mono">
            {candidate.role} <span className="text-cyan-500">|</span> {candidate.specialization}
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            {candidate.summary}
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-cyan-400/50 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Download size={16} className="text-cyan-400" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all"
            >
              <Mail size={16} className="text-cyan-500" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links & Quick Contact Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14 text-sm">
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Github size={16} />
              <span className="font-mono text-xs">github.com/Geeker02</span>
            </a>

            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Linkedin size={16} />
              <span className="font-mono text-xs">linkedin.com/in/jaydeep-jogdand</span>
            </a>

            <a
              href={`mailto:${candidate.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Mail size={16} />
              <span className="font-mono text-xs">{candidate.email}</span>
            </a>

            <a
              href={`tel:${candidate.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Phone size={16} />
              <span className="font-mono text-xs">{candidate.formattedPhone}</span>
            </a>
          </div>

          {/* Key Metrics Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-500 dark:text-cyan-400 mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
