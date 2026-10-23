import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { Toolkit } from './components/Toolkit';
import { Experience } from './components/Experience';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-150">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <CaseStudies />
        <Toolkit />
        <Experience />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
