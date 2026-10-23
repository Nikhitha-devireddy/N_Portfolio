import React from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { ArrowRight, MapPin, CheckCircle2, Database, BarChart3, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Status pill & location */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            {portfolioConfig.personal.roleBadge}
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{portfolioConfig.personal.location}</span>
          </div>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.12] mb-6 max-w-4xl">
          {portfolioConfig.hero.headline}
        </h1>

        {/* Bio paragraph */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mb-8">
          {portfolioConfig.hero.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 rounded hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
          >
            <span>Get in Touch</span>
          </a>
          <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 ml-4 pl-4 border-l border-neutral-200 dark:border-neutral-800">
            <span className="flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> SQL / Star Schema
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Power BI & DAX
            </span>
            <span className="flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Python ML Pipelines
            </span>
          </div>
        </div>

        {/* Impact Banner */}
        <div className="bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5 font-semibold text-neutral-800 dark:text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Verified Performance & Systems Metrics
            </span>
            <span>Static Telemetry // Production Validated</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {portfolioConfig.hero.impactStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-950 dark:text-white tracking-tight mb-1 text-blue-600 dark:text-blue-400">
                  {stat.metric}
                </div>
                <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] leading-tight text-neutral-500 dark:text-neutral-400">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
