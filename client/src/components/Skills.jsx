import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Cpu, 
  Layout, 
  Database, 
  CheckCircle, 
  Wrench,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    'Languages': Code,
    'Backend & APIs': Server,
    'Software Architecture': Cpu,
    'Frontend & Web': Layout,
    'Databases & Caching': Database,
    'Testing & QA': CheckCircle,
    'DevOps & Tools': Wrench
  };

  const categoriesList = ['All', ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-medium tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2">
            02 / Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Languages, frameworks, databases, and engineering principles I use in daily development.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-[#111622] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {displayedCategories.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Code;
            return (
              <div
                key={idx}
                className="surface-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center border border-slate-200 dark:border-slate-700/60">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100/80 dark:bg-[#0c1017] text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
