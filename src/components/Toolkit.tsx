import React from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { Database, BarChart, Layers, CheckCircle2 } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Data')) return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    if (category.includes('BI')) return <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
  };

  return (
    <section id="toolkit" className="py-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            02. Core Competencies
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Technical & Business Toolkit
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md font-mono">
              Structured matrix of technical tooling, analytical workflows, and computer science foundations without arbitrary percentages.
            </p>
          </div>
        </div>

        {/* 3-Column Structured Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.toolkit.map((col, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs"
            >
              <div>
                {/* Column header */}
                <div className="flex items-center gap-3 pb-3 mb-3 border-b border-neutral-200 dark:border-neutral-800">
                  {getCategoryIcon(col.category)}
                  <div>
                    <h3 className="font-bold text-base text-neutral-950 dark:text-white tracking-tight">
                      {col.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                  {col.description}
                </p>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {col.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/70 dark:bg-neutral-950/40 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            skill.highlight
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-neutral-400 dark:text-neutral-600'
                          }`}
                        />
                        <span className="font-medium text-neutral-800 dark:text-neutral-200">
                          {skill.name}
                        </span>
                      </div>

                      {skill.tags && skill.tags.length > 0 && (
                        <div className="flex gap-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column Footer Badge */}
              <div className="mt-6 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 flex items-center justify-between">
                <span>Production Verified</span>
                <span>Active 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
