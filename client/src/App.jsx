import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResume={() => setResumeModalOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Preview & Download Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
