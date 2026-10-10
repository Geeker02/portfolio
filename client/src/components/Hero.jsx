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
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Subtle Location & Role Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#111622] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Full Stack Developer @ CCTech</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-slate-500 dark:text-slate-400">Pune, India</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            Hi, I'm Jaydeep Jogdand.
          </h1>

          <div className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 mb-6">
            Software Developer <span className="text-slate-300 dark:text-slate-700 mx-1">|</span> Core Java, Spring Boot & React
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
            I build robust, test-driven backend systems with Core Java & Spring Boot, develop enterprise CAD workflow automations in C#, and create clean user interfaces with React.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium text-sm shadow-sm transition-all"
            >
              <span>Featured Project</span>
              <ArrowRight size={15} />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-[#111622] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-800 transition-all cursor-pointer shadow-sm"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-[#111622] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-800 transition-all shadow-sm"
            >
              <Mail size={15} />
              <span>Contact</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-xs">
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#111622] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-2xs"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>

            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#111622] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-2xs"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${candidate.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#111622] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-2xs"
            >
              <Mail size={13} />
              <span>{candidate.email}</span>
            </a>

            <a
              href={`tel:${candidate.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#111622] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-2xs"
            >
              <Phone size={13} />
              <span>{candidate.formattedPhone}</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="surface-card p-4 rounded-xl flex flex-col items-center justify-center text-center"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white mb-0.5">
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
