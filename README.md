# N_Portfolio | Nikhitha Lakshmi Devireddy
> Ultra-minimalist, high-performance Data & Business Intelligence Analyst portfolio built with Swiss editorial minimalism, React, TypeScript, and Tailwind CSS. Configured for 100% static delivery (SSG) with zero serverless function overhead.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel%20Static-black?style=flat&logo=vercel)](https://vercel.com)
[![Build Status](https://img.shields.io/badge/Build-Passing-emerald?style=flat&logo=vite)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat)](LICENSE)

---

## ⚡ Design & Performance Philosophy

- **Swiss Editorial Minimalism**: High contrast, generous whitespace, crisp typography combining `Inter` for body/headings with `JetBrains Mono` for data metrics and engineering tags.
- **Zero-Bloat Guarantee**: Strictly no heavy 3D WebGL runtimes, no slow external tracking scripts, and no lagging live iframes. Static, optimized layout structures that load instantaneously with near-perfect Lighthouse scores.
- **STAR Analyst Framework**: Project case studies are structured around **Situation, Task, Action, and Result**, emphasizing quantifiable business outcomes rather than just raw code snippets.
- **Instant Dark/Light Mode**: Lightweight theme switcher with persistence to `localStorage` and system preference detection.
- **Single Source of Truth**: All personal details, hero copy, impact telemetry, case studies, toolkit matrices, and experience items are decoupled into a single configuration file (`src/portfolioConfig.ts`).

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg             # Minimalist SVG favicon
│   └── resume.pdf              # Direct downloadable resume PDF
├── src/
│   ├── assets/                 # Lightweight static SVGs
│   ├── components/
│   │   ├── CaseStudies.tsx     # Filterable project grid (All / Data / BI / Strategy / AI)
│   │   ├── CaseStudyModal.tsx  # Deep-dive STAR breakdown modal
│   │   ├── ContactFooter.tsx   # Frictionless 1-click email copy & social links
│   │   ├── Experience.tsx      # Minimal vertical timeline with verified outcomes
│   │   ├── Hero.tsx            # Outcome-oriented headline & impact telemetry banner
│   │   ├── Icons.tsx           # Lightweight inline SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx          # Minimal text logo, anchor navigation, theme toggle
│   │   ├── StaticDashboardModal.tsx # Zero-bloat static Star Schema & KPI preview
│   │   └── Toolkit.tsx         # 3-column structured matrix without gimmick bars
│   ├── portfolioConfig.ts      # 🌟 Edit all portfolio content here!
│   ├── App.tsx                 # Main application root
│   ├── index.css               # Tailwind v4 configuration & theme tokens
│   └── main.tsx                # React DOM entry point
├── vercel.json                 # Vercel static routing rules (cleanUrls, no trailingSlash)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Quick Start (Local Development)

### 1. Prerequisites
- Node.js `v18+` or `v20+` or `v24+`
- npm `v9+` or `v11+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

### 4. Build for Production (SSG)
```bash
npm run build
```
This generates the optimized static bundle in the `dist/` directory.

---

## ✏️ Customizing Your Content

To update any text, project, metric, or contact detail, simply edit:
👉 **[`src/portfolioConfig.ts`](src/portfolioConfig.ts)**

```typescript
export const portfolioConfig = {
  personal: {
    name: "Nikhitha Lakshmi Devireddy",
    title: "Data & Business Intelligence Analyst",
    email: "lakshmi.23bce20273@vitapstudent.ac.in",
    phone: "+91-8179079671",
    linkedin: "https://linkedin.com/in/nikhitha-lakshmi-devireddy",
    github: "https://github.com/Nikhitha-devireddy",
    // ...
  },
  // ...
};
```

To update your downloadable resume, simply replace the file at:
👉 **`public/resume.pdf`**

---

## 🚀 Deployment Instructions

### Option A: Deploy to GitHub

Run the following commands in the project root:

```bash
# 1. Initialize Git repository (if not already initialized)
git init

# 2. Add all files and commit
git add .
git commit -m "feat: initial release of Swiss-minimalist analyst portfolio"

# 3. Rename branch to main
git branch -M main

# 4. Link to GitHub repository
git remote add origin https://github.com/Nikhitha-devireddy/N_Portfolio.git

# 5. Push to GitHub
git push -u origin main
```

*(If the remote already exists, run `git push -u origin main` or `git remote set-url origin https://github.com/Nikhitha-devireddy/N_Portfolio.git`)*

---

### Option B: Deploy Live to Vercel (CLI)

Deploy directly from your terminal using Vercel CLI:

```bash
# 1. Run production deployment
npx vercel --prod
```

Follow the prompts:
- **Set up and deploy?** `Y`
- **Which scope?** (Select your account)
- **Link to existing project?** `N`
- **What's your project's name?** `n-portfolio` (or press Enter)
- **In which directory is your code located?** `./` (press Enter)
- **Want to modify these settings?** `N` (Vercel automatically detects Vite)

---

### Option C: Connect GitHub to Vercel (Recommended for Auto-Deploy)

1. Push your repository to GitHub (Option A above).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import `Nikhitha-devireddy/N_Portfolio`.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**. Any future commits to `main` will automatically trigger instant production builds!

---

## 📄 License
MIT © [Nikhitha Lakshmi Devireddy](https://github.com/Nikhitha-devireddy)
