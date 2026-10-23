import React, { useState } from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { Copy, Check, Mail, Phone, ArrowUpRight, Globe } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="py-20 bg-neutral-100/60 dark:bg-[#070709] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Callout */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            04. Contact & Collaboration
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mb-3">
            Initiate Direct Collaboration
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
            Interested in discussing full-time opportunities, internships, or data engineering challenges? Reach out directly via email or professional networks without tedious form fields.
          </p>
        </div>

        {/* Primary Interactive Contact Panel */}
        <div className="p-6 sm:p-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs mb-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
            {/* Left: Email + Copy Button */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Direct Email Inquiries
              </div>
              <div className="text-base sm:text-xl font-mono font-bold text-neutral-950 dark:text-white break-all">
                {portfolioConfig.personal.email}
              </div>
            </div>

            {/* Actions: One-Click Copy + Direct Mailto */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="relative inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client</span>
              </a>
            </div>
          </div>

          {/* Secondary Details: Phone, LinkedIn, GitHub */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            {/* Phone */}
            <a
              href={`tel:${portfolioConfig.personal.phone.replace(/[^0-9+]/g, '')}`}
              className="p-3 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-neutral-800 dark:text-neutral-200">{portfolioConfig.personal.phone}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href={portfolioConfig.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-neutral-800 dark:text-neutral-200">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white" />
            </a>

            {/* GitHub */}
            <a
              href={portfolioConfig.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-neutral-800 dark:text-neutral-200">GitHub Repositories</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{portfolioConfig.footer.status}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              {portfolioConfig.personal.timezone}
            </span>
            <span>•</span>
            <span>© {CURRENT_YEAR} {portfolioConfig.personal.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
