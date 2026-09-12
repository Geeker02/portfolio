import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  FileText,
  MapPin,
  Briefcase
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const { candidate, metrics } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Subtle Location & Role Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Full Stack Developer @ CCTech</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-slate-500 dark:text-slate-400">Pune, India</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
            Hi, I'm <span className="text-gradient">Jaydeep</span>.
          </h1>

          <div className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-5">
            Software Engineer <span className="text-cyan-500">|</span> Core Java & Spring Boot
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
            I build robust, test-driven backend systems with Core Java & Spring Boot, and create clean, responsive user interfaces with React. Passionate about clean code, SOLID architecture, and solving complex algorithmic challenges.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm shadow-sm transition-all"
            >
              <span>View Projects</span>
              <ArrowRight size={15} />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-all"
            >
              <FileText size={15} className="text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-700 transition-all"
            >
              <Mail size={15} className="text-cyan-500" />
              <span>Contact</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 text-xs">
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${candidate.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Mail size={14} />
              <span>{candidate.email}</span>
            </a>

            <a
              href={`tel:${candidate.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
            >
              <Phone size={14} />
              <span>{candidate.formattedPhone}</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="glass-card p-3.5 rounded-xl flex flex-col items-center justify-center text-center"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400 mb-0.5">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
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
