import React from 'react';
import { Award, Star, Code2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={13} />
            <span>Coding Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Problem Solving & Profiles
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Regular practice on algorithmic challenges to build solid intuition for computational efficiency, memory limits, and data structures.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500/15 to-orange-500/15 text-amber-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.id === 'leetcode' ? <Code2 size={24} /> : <Star size={24} />}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-slate-400 block uppercase tracking-wider">
                        {item.platform}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {item.badge}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
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

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Profile Link
                </span>
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500"
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
