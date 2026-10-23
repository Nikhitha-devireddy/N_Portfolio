import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { Moon, Sun, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0a0a0c]/90 backdrop-blur-md border-neutral-200 dark:border-neutral-800 shadow-xs'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Minimal text logo */}
        <a
          href="#"
          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 group text-left"
          aria-label="Home"
        >
          <span className="font-semibold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {portfolioConfig.personal.name}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono hidden md:inline">
            / {portfolioConfig.personal.title}
          </span>
        </a>

        {/* Desktop Anchor Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          <a
            href="#case-studies"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#toolkit"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Toolkit
          </a>
          <a
            href="#experience"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right side: Resume + Dark Mode Toggle */}
        <div className="flex items-center space-x-3">
          <a
            href={portfolioConfig.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-all shadow-xs"
            aria-label="View Resume PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-1.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] px-4 py-4 space-y-3 font-mono text-xs uppercase">
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            Case Studies
          </a>
          <a
            href="#toolkit"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            Toolkit
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
