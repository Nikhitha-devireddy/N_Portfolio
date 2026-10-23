import React from 'react';
import type { CaseStudy } from '../portfolioConfig';
import { X, ExternalLink, AlertTriangle, Target, Lightbulb, Trophy } from 'lucide-react';
import { GithubIcon } from './Icons';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenStaticPreview: (study: CaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenStaticPreview,
}) => {
  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-neutral-900 dark:text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-medium">
                {caseStudy.category}
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {caseStudy.industry}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {caseStudy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlighted Metric Box */}
        <div className="my-6 p-4 rounded-md bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider font-mono text-blue-700 dark:text-blue-300 font-semibold mb-0.5">
              Verified Quantifiable Outcome
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-neutral-950 dark:text-white">
              {caseStudy.impactMetric}
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-300 mt-0.5">
              {caseStudy.impactContext}
            </div>
          </div>
          {caseStudy.hasStaticPreview && (
            <button
              onClick={() => {
                onClose();
                onOpenStaticPreview(caseStudy);
              }}
              className="px-3.5 py-1.5 text-xs font-mono font-medium rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              Static Architecture Preview →
            </button>
          )}
        </div>

        {/* Approach / Toolkit Tags */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Toolkit & Methodologies:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.approach.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* STAR Framework Breakdown */}
        <div className="space-y-5 text-sm leading-relaxed">
          <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/40">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mb-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              <span>Situation</span>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              {caseStudy.starFramework.situation}
            </p>
          </div>

          <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/40">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mb-1.5">
              <Target className="w-3.5 h-3.5 text-blue-500" />
              <span>Task</span>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              {caseStudy.starFramework.task}
            </p>
          </div>

          <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/40">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mb-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
              <span>Action & Engineering</span>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              {caseStudy.starFramework.action}
            </p>
          </div>

          <div className="p-3.5 rounded border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-1.5">
              <Trophy className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Business Result & Impact</span>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 font-medium">
              {caseStudy.starFramework.result}
            </p>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-medium rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
