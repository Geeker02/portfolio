import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] max-h-[900px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Jaydeep Jogdand - Resume</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Software Engineer | Core Java & Spring Boot Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Jaydeep_Jogdand_Software_Developer.pdf"
              download="Jaydeep_Jogdand_Software_Developer.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-sm"
            >
              <Download size={14} />
              Download PDF
            </a>
            <a
              href="/Jaydeep_Jogdand_Software_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Open in new tab"
            >
              <ExternalLink size={18} />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ml-1"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Embed */}
        <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-1">
          <iframe
            src="/Jaydeep_Jogdand_Software_Developer.pdf#toolbar=1"
            title="Jaydeep Jogdand Software Developer Resume"
            className="w-full h-full rounded-lg border-0"
          />
        </div>
      </div>
    </div>
  );
};
