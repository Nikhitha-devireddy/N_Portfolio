import React, { useState } from 'react';
import { portfolioConfig } from '../portfolioConfig';
import type { CaseStudy } from '../portfolioConfig';
import { CaseStudyModal } from './CaseStudyModal';
import { StaticDashboardModal } from './StaticDashboardModal';
import { ArrowUpRight, BarChart3 } from 'lucide-react';
import { GithubIcon } from './Icons';

type FilterCategory = 'All' | 'Data Analytics' | 'Business Strategy' | 'Dashboards & BI' | 'AI / ML Systems';

export const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [staticPreviewStudy, setStaticPreviewStudy] = useState<CaseStudy | null>(null);

  const categories: FilterCategory[] = [
    'All',
    'Data Analytics',
    'Business Strategy',
    'Dashboards & BI',
    'AI / ML Systems',
  ];

  const filteredStudies =
    activeCategory === 'All'
      ? portfolioConfig.caseStudies
      : portfolioConfig.caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              01. Featured Projects
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md font-mono">
            Evaluated via the STAR Framework (Situation, Task, Action, Result) with measurable business impact.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-neutral-200 dark:border-neutral-800">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? portfolioConfig.caseStudies.length
                : portfolioConfig.caseStudies.filter((c) => c.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                  activeCategory === category
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-medium'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1 rounded ${
                    activeCategory === category
                      ? 'bg-neutral-800 text-neutral-300 dark:bg-neutral-200 dark:text-neutral-800'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group flex flex-col justify-between p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                {/* Meta tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                    {study.category}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider truncate">
                    {study.industry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>

                {/* Problem Statement */}
                <div className="mb-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  <span className="font-mono text-neutral-400 text-xs uppercase mr-1">The Problem:</span>
                  {study.problem}
                </div>

                {/* Toolkit Pills */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {study.approach.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Box: Quantifiable Impact + Action Links */}
              <div>
                {/* Impact Box */}
                <div className="p-3.5 rounded bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-0.5">
                    Quantifiable Impact
                  </div>
                  <div className="text-sm font-bold font-mono text-blue-600 dark:text-blue-400">
                    {study.impactMetric}
                  </div>
                  <div className="text-[11px] text-neutral-600 dark:text-neutral-300 mt-0.5 leading-snug">
                    {study.impactContext}
                  </div>
                </div>

                {/* Links / Trigger buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedStudy(study)}
                      className="inline-flex items-center gap-1 font-medium text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-4 cursor-pointer"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {study.hasStaticPreview && (
                      <button
                        onClick={() => setStaticPreviewStudy(study)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium cursor-pointer transition-colors"
                      >
                        <BarChart3 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                        <span>Static Preview</span>
                      </button>
                    )}
                  </div>

                  {study.githubUrl && (
                    <a
                      href={study.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STAR Framework Modal */}
      <CaseStudyModal
        caseStudy={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenStaticPreview={(study) => setStaticPreviewStudy(study)}
      />

      {/* Static Dashboard & Schema Preview Modal */}
      <StaticDashboardModal
        caseStudy={staticPreviewStudy}
        onClose={() => setStaticPreviewStudy(null)}
      />
    </section>
  );
};
