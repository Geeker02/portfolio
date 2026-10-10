import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2">
            06 / Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
            Academic Background
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-2">
            Formal engineering qualifications and foundational computer science education.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl space-y-4">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="surface-card p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
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

              <div className="flex sm:flex-col sm:items-end justify-between items-center gap-1.5 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800">
                <div className="text-sm sm:text-base font-semibold font-mono text-slate-900 dark:text-slate-100">
                  {item.grade}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
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
