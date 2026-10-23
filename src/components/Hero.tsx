import React from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { ArrowRight, MapPin, Database, BarChart3, Terminal } from 'lucide-react';
import { Particles, StrokeText, ShinyText } from './reactbits';

interface HeroProps {
  darkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode = false }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
      {/* Background Interactive Particles from React Bits */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45 dark:opacity-60 overflow-hidden">
        <Particles
          particleCount={140}
          particleSpread={9}
          speed={0.08}
          particleColors={
            darkMode
              ? ['#3b82f6', '#60a5fa', '#93c5fd', '#ffffff']
              : ['#2563eb', '#1d4ed8', '#0284c7', '#475569']
          }
          particleBaseSize={85}
          glow={darkMode ? 0.6 : 0.2}
          twinkle={0.35}
          connections={true}
          connectionDistance={115}
          moveParticlesOnHover={true}
          hoverEffect="parallax"
          lightMode={!darkMode}
          alphaParticles={true}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Status pill & location */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-blue-50/90 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <ShinyText
              text={portfolioConfig.personal.roleBadge}
              color={darkMode ? '#93c5fd' : '#1d4ed8'}
              shineColor="#ffffff"
              speed={2.2}
              glow={0.25}
            />
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-white/70 dark:bg-neutral-900/70 px-2.5 py-1 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>{portfolioConfig.personal.location}</span>
          </div>
        </div>

        {/* Dynamic StrokeText Editorial Wordmark */}
        <div className="mb-3 max-w-xs">
          <StrokeText
            text="NIKHITHA DEVIREDDY"
            strokeColor={darkMode ? '#60a5fa' : '#2563eb'}
            fillColor={darkMode ? '#f8fafc' : '#0f172a'}
            fontSize={24}
            fontWeight={800}
            letterSpacing={-0.5}
            strokeWidth={1.2}
            trigger="mount"
            fillMode="wipe"
            wipeFrom="left"
            drawDuration={1.4}
            hoverRedraw={true}
          />
        </div>

        {/* Primary Headline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold tracking-tight text-neutral-950 dark:text-white leading-snug md:leading-[1.25] mb-4 max-w-3xl">
          {portfolioConfig.hero.headline}
        </h1>

        {/* Bio paragraph */}
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mb-8">
          {portfolioConfig.hero.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 rounded hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-white/90 dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-700 rounded hover:border-neutral-400 dark:hover:border-neutral-500 backdrop-blur-xs transition-colors"
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
      </div>
    </section>
  );
};
