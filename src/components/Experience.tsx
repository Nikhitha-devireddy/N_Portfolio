import React from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { GraduationCap, Award, Users, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      default:
        return <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              // 03. Trajectory & Impact
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Experience & Education
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md font-mono">
            Quantifiable leadership, academic excellence, and systems delivery across engineering initiatives.
          </p>
        </div>

        {/* Minimal Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {portfolioConfig.experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors shadow-xs">
                {getItemIcon(item.type)}
              </div>

              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {item.organization}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Score pill if present */}
              {item.score && (
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60">
                    {item.score}
                  </span>
                </div>
              )}

              {/* Highlights / Quantifiable outcomes */}
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
                {item.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
