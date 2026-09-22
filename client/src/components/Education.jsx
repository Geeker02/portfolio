import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap size={14} />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Background
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            My formal engineering qualifications and academic milestones.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto space-y-5">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all border border-slate-200/80 dark:border-slate-800"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/80">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.institution}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-0.5">
                  {item.details}
                </p>
              </div>

              <div className="flex sm:flex-col sm:items-end justify-between items-center gap-1 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800">
                <div className="text-sm sm:text-base font-bold font-mono text-cyan-600 dark:text-cyan-400">
                  {item.grade}
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                  <Calendar size={12} />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
