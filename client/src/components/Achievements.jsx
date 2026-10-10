import React from 'react';
import { Award, Star, Code2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono font-medium tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2">
            05 / Problem Solving
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Algorithmic Profiles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Regular practice on algorithmic challenges to build solid intuition for computational efficiency, memory limits, and data structures.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="surface-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 flex items-center justify-center border border-slate-200 dark:border-slate-700/60">
                      {item.id === 'leetcode' ? <Code2 size={20} /> : <Star size={20} />}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">
                        {item.platform}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.badge}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-[#0c1017] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                    {item.highlightStats}
                  </span>
                </div>

                <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-2">
                  {item.title}
                </h4>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Profile Link
                </span>
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <span>View on {item.platform}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
