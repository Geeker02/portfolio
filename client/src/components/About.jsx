import React from 'react';
import { 
  Server, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow, 
  Cpu, 
  Terminal, 
  GitPullRequest 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { candidate } = portfolioData;

  const pillars = [
    {
      icon: Server,
      title: 'Enterprise Java & Spring Boot',
      description:
        'Architecting robust, low-latency RESTful APIs and microservices using Spring Boot, Spring MVC, and Spring Data JPA with modular separation of concerns.'
    },
    {
      icon: Layers,
      title: 'OOP & SOLID Architecture',
      description:
        'Translating complex business domains into clean, maintainable class hierarchies adhering to Single Responsibility, Open/Closed, and Dependency Inversion.'
    },
    {
      icon: ShieldCheck,
      title: 'TDD & JUnit Quality Assurance',
      description:
        'Writing comprehensive unit and integration test suites using JUnit to prevent regressions, safeguard critical contracts, and guarantee deployable code.'
    },
    {
      icon: Workflow,
      title: 'Agile & Full-Stack Delivery',
      description:
        'Collaborating across cross-functional teams, CI/CD with GitHub Actions, and bridging performant backends with reactive, modern React.js frontends.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal size={14} />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me & Engineering Focus
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Description Box */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                Software Engineer with a Backend-First Mindset
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                I am a dedicated Full-Stack Software Engineer with specialized hands-on production experience in 
                <strong className="text-slate-900 dark:text-white"> Core Java, Spring Boot, and enterprise RESTful services</strong>.
                Currently working as a <strong className="text-cyan-600 dark:text-cyan-400">Full Stack Developer at CCTech</strong>, 
                I focus on architecting resilient distributed systems, developing C# automation plugins for CAD systems, writing test-driven code, and building high-performance backend services.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                My software engineering foundations are backed by solving <strong className="text-cyan-600 dark:text-cyan-400">400+ algorithmic problems on LeetCode</strong> and holding a 
                <strong className="text-cyan-600 dark:text-cyan-400"> 5-Star Problem Solving badge on HackerRank</strong>. I combine this algorithmic discipline with 
                clean design patterns (Factory, Strategy, Observer, Repository) to build systems that scale gracefully.
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

          {/* Core Pillars 2x2 Grid */}
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
