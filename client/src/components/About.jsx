import React from 'react';
import { 
  Server, 
  Layers, 
  CheckCircle2, 
  Workflow, 
  User
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { candidate } = portfolioData;

  const pillars = [
    {
      icon: Server,
      title: 'Backend & APIs',
      description:
        'Designing modular RESTful services and microservices using Core Java, Spring Boot, and Spring Data JPA.'
    },
    {
      icon: Layers,
      title: 'Clean Architecture',
      description:
        'Structuring codebases with proven OOP patterns, SOLID principles, and clear domain boundaries.'
    },
    {
      icon: CheckCircle2,
      title: 'Testing & Reliability',
      description:
        'Writing automated unit and integration tests with JUnit to catch regressions early and ensure stability.'
    },
    {
      icon: Workflow,
      title: 'Full Stack & Delivery',
      description:
        'Bridging server services with modern React frontends, automated with GitHub Actions CI/CD pipelines.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User size={13} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background & Philosophy
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Bio Description Box */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                Engineering with a clean-code mindset
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                I am a Software Engineer based in Pune, currently working as a <strong className="text-cyan-600 dark:text-cyan-400">Full Stack Developer at CCTech</strong>. My work focuses on building custom C# automation plugins for CAD systems (AutoCAD, Autodesk Inventor), designing Spring Boot backend services, and building responsive React visualizations.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                I believe that good software architecture is about clarity, testability, and maintainability. I regularly write unit tests with JUnit, follow SOLID design principles, and favor clean separation of concerns over premature complexity.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                Competitive programming has been an important part of honing my engineering instincts. Solving <strong className="text-slate-900 dark:text-white">400+ problems on LeetCode</strong> and earning a <strong className="text-slate-900 dark:text-white">5-Star rating on HackerRank</strong> has trained me to analyze computational trade-offs and edge cases carefully.
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block mb-0.5">CURRENT ROLE</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Full Stack Developer @ CCTech</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">LOCATION</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
