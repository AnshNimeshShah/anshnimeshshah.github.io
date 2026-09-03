import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  FileText, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  Wrench, 
  Lightbulb, 
  FileCheck,
  TrendingUp
} from 'lucide-react';
import { ProjectDetail } from '../data/projectsData';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-white border border-stone-300 shadow-2xl z-10 my-8 overflow-hidden text-left"
          >
            {/* Top institutional header band */}
            <div className="bg-[#faf9f6] border-b border-stone-200 px-6 sm:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-50 border border-amber-200/80 text-amber-900 font-mono text-[9px] font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                {project.label && (
                  <span className="px-2 py-0.5 bg-stone-100 border border-stone-200 text-stone-600 font-mono text-[9px] font-bold uppercase tracking-wider">
                    {project.label}
                  </span>
                )}
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-200/60 rounded-none transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-7 max-h-[80vh] overflow-y-auto scrollbar-thin">
              
              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-xs sm:text-sm font-mono text-amber-800 font-semibold tracking-wide">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-stone-600 text-sm font-serif leading-relaxed pt-1">
                  {project.shortDescription}
                </p>

                {/* Tags Strip */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-mono font-bold tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Indicators Bar if available */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#faf9f6] border border-stone-200">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[8px] font-mono text-stone-400 uppercase tracking-widest block font-bold">
                        {m.label}
                      </span>
                      <span className="text-xs font-serif font-bold text-stone-900 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* 5-Step Project Detail Architecture */}
              <div className="space-y-5 border-t border-stone-200 pt-6">
                
                {/* 1. Problem / Objective */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                      <HelpCircle size={11} />
                    </div>
                    <h3 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                      1. Problem & Objective
                    </h3>
                  </div>
                  <div className="pl-7">
                    <p className="text-stone-700 text-sm font-serif leading-relaxed">
                      {project.problemObjective}
                    </p>
                  </div>
                </div>

                {/* 2. What I Analysed / Built */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 shrink-0">
                      <Layers size={11} />
                    </div>
                    <h3 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                      2. What I Analysed & Built
                    </h3>
                  </div>
                  <div className="pl-7">
                    <p className="text-stone-700 text-sm font-serif leading-relaxed">
                      {project.whatIAnalysedBuilt}
                    </p>
                  </div>
                </div>

                {/* 3. Methods / Tools */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 shrink-0">
                      <Wrench size={11} />
                    </div>
                    <h3 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                      3. Methods & Analytical Tools
                    </h3>
                  </div>
                  <div className="pl-7">
                    <p className="text-stone-700 text-sm font-serif leading-relaxed">
                      {project.methodsTools}
                    </p>
                  </div>
                </div>

                {/* 4. Key Takeaway */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
                      <Lightbulb size={11} />
                    </div>
                    <h3 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                      4. Key Takeaway & Strategic Insight
                    </h3>
                  </div>
                  <div className="pl-7">
                    <div className="bg-[#faf9f6] border-l-2 border-amber-800 p-3.5">
                      <p className="text-stone-800 text-sm font-serif leading-relaxed italic">
                        "{project.keyTakeaway}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Evidence / Files / Links */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 shrink-0">
                      <FileCheck size={11} />
                    </div>
                    <h3 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider">
                      5. Evidence, Files & Links
                    </h3>
                  </div>

                  <div className="pl-7 flex flex-wrap gap-2.5 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-white hover:bg-amber-800 text-xs font-mono font-bold tracking-wider transition-colors"
                      >
                        <ExternalLink size={13} />
                        OPEN LIVE DEMO
                      </a>
                    )}

                    {project.evidenceFilesLinks.map((ef, idx) => {
                      if (ef.type === 'live' && project.liveUrl) {
                        return null; // Already rendered primary live button
                      }
                      if (ef.url) {
                        return (
                          <a
                            key={idx}
                            href={ef.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-stone-900 text-xs font-mono font-semibold transition-colors"
                          >
                            <FileText size={13} className="text-amber-800" />
                            <span>{ef.label}</span>
                            <ExternalLink size={11} className="text-stone-400" />
                          </a>
                        );
                      }
                      return (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 px-3.5 py-2 bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-semibold"
                        >
                          <FileText size={13} className="text-stone-400" />
                          <span>{ef.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-[#faf9f6] border-t border-stone-200 px-6 sm:px-8 py-3.5 flex justify-between items-center text-[10px] font-mono text-stone-400">
              <span>FINANCE PORTFOLIO • CASE ARCHIVE</span>
              <button 
                onClick={onClose}
                className="text-stone-700 font-bold hover:text-stone-950 uppercase"
              >
                CLOSE [ESC]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
