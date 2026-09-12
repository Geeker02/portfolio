import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={14} />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-8 rounded-2xl relative border-l-4 border-l-cyan-500 shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
                    <span>{item.role}</span>
                    <span className="text-slate-400 font-normal">at</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{item.company}</span>
                  </h3>
                  {item.summary && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {item.summary}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                  <div className="flex items-center gap-1">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 size={18} className="text-cyan-500 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60">
                <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold uppercase tracking-wider">
                  Technologies Employed
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
