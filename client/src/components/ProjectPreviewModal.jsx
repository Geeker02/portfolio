import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Eye
} from 'lucide-react';

export const ProjectPreviewModal = ({ isOpen, onClose, projectTitle, screenshots = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const thumbnailRefs = useRef([]);

  // Reset to first slide when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setImageLoaded(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
    setImageLoaded(false);
  }, [currentIndex]);

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, screenshots.length]);

  if (!isOpen || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl bg-white dark:bg-[#0c111d] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c111d] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
              <Eye size={16} />
            </div>
            <div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                  {projectTitle || 'ChatsApp'}
                </h3>
                <span className="text-slate-300 dark:text-slate-700 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
                  Interactive Output Walkthrough
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-750">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[220px] sm:max-w-md mt-0.5">
                {current.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Keyboard shortcut hint */}
            <div className="hidden lg:flex items-center gap-1 text-[11px] font-mono text-slate-400 dark:text-slate-500 mr-2">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-750 text-[10px]">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-750 text-[10px]">→</kbd>
              <span className="text-[10px] ml-0.5">navigate</span>
            </div>

            <a
              href={current.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
              title="Open full resolution image in new tab"
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">Full Image</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ml-1 cursor-pointer"
              aria-label="Close preview"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="flex-1 relative bg-[#070a12] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md border border-slate-700/80 hover:border-slate-600 transition-all duration-150 shadow-xl cursor-pointer group"
            title="Previous screenshot (Left arrow)"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Screenshot Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-1">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-slate-700 border-t-slate-200 rounded-full animate-spin" />
              </div>
            )}
            <img
              key={current.src}
              src={current.src}
              alt={current.title}
              onLoad={() => setImageLoaded(true)}
              className={`max-h-[58vh] w-auto max-w-full object-contain rounded-lg border border-slate-800/90 shadow-2xl transition-opacity duration-200 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md border border-slate-700/80 hover:border-slate-600 transition-all duration-150 shadow-xl cursor-pointer group"
            title="Next screenshot (Right arrow)"
            aria-label="Next screenshot"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Floating Badge on Mobile */}
          <div className="absolute top-3 left-3 sm:hidden z-10 px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-200 text-xs font-mono border border-slate-800">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </div>

        {/* Step Details & Description Banner */}
        <div className="px-4 sm:px-6 py-3 bg-white dark:bg-[#0c111d] border-t border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs">
                {current.step || `Step ${currentIndex + 1}`}
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {current.title}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal sm:text-right">
              {current.description}
            </p>
          </div>
        </div>

        {/* Thumbnails Strip */}
        <div className="px-3 sm:px-6 py-3 bg-slate-50 dark:bg-[#070b12] border-t border-slate-200 dark:border-slate-800 overflow-x-auto shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max pb-1">
            {screenshots.map((s, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={s.id || idx}
                  ref={(el) => (thumbnailRefs.current[idx] = el)}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative flex flex-col items-center rounded-lg overflow-hidden transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'ring-2 ring-slate-900 dark:ring-white shadow-md scale-105 opacity-100'
                      : 'opacity-55 hover:opacity-100 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700'
                  }`}
                  title={`${s.step}: ${s.title}`}
                >
                  <div className="w-16 sm:w-20 h-10 sm:h-12 bg-slate-950 overflow-hidden flex items-center justify-center">
                    <img
                      src={s.src}
                      alt={s.step}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className={`w-full py-1 text-center text-[10px] font-mono truncate px-1 transition-colors ${
                    isActive 
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold' 
                      : 'bg-slate-200 dark:bg-slate-850 text-slate-700 dark:text-slate-300'
                  }`}>
                    {s.step || `Step ${idx + 1}`}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectPreviewModal;
