import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Cloud, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { candidate } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Architecture Badge, Quick links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {candidate.name}
              </span>
              <span className="text-cyan-500 font-mono text-sm">/</span>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                {candidate.specialization}
              </span>
            </div>
          </div>

          {/* Cloud Badges */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <Cloud size={12} className="text-cyan-500" />
              <span>Vercel Edge</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <ShieldCheck size={12} className="text-cyan-500" />
              <span>Render Node.js</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Uptime Keep-Alive 14m
            </span>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Socials, Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Jaydeep Jogdand. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${candidate.email}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Email Jaydeep"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
