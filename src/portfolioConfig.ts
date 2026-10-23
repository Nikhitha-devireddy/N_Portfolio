export interface ImpactStat {
  metric: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Business Strategy' | 'Dashboards & BI' | 'AI / ML Systems';
  industry: string;
  problem: string;
  approach: string[];
  impactMetric: string;
  impactContext: string;
  githubUrl?: string;
  demoUrl?: string;
  hasStaticPreview?: boolean;
  starFramework: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'education' | 'leadership' | 'academic';
  score?: string;
  highlights: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    roleBadge: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    resumePath: string;
    timezone: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    impactStats: ImpactStat[];
  };
  caseStudies: CaseStudy[];
  toolkit: SkillCategory[];
  experience: ExperienceItem[];
  footer: {
    note: string;
    status: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Nikhitha Lakshmi Devireddy",
    title: "Software Engineer & Data/BI Analyst",
    roleBadge: "Open to Software Engineering & Data Roles",
    location: "Andhra Pradesh, India",
    phone: "+91-8179079671",
    email: "lakshmi.23bce20273@vitapstudent.ac.in",
    linkedin: "https://linkedin.com/in/nikhitha-lakshmi-devireddy",
    github: "https://github.com/Nikhitha-devireddy",
    resumePath: "/resume.pdf",
    timezone: "IST (UTC +5:30)",
  },

  hero: {
    badge: "ENGINEERING & ANALYST PORTFOLIO // 2026 EDITION",
    headline: "Translating complex datasets into actionable business intelligence & high-throughput systems.",
    subheadline: "Computer Science Engineering undergraduate (AI & ML) at VIT-AP (8.75 CGPA). Experienced in end-to-end software engineering, deterministic clinical platforms, Star Schema modeling, optimized SQL query pipelines, and low-latency machine learning architectures. Seeking Software Development, AI/ML, or Data Analytics roles.",
    impactStats: [
      {
        metric: "15x Latency Drop",
        label: "30-50s → 2-3s Retrieval",
        context: "Engineered TTL caching & multi-retailer failover for SafeBite AI"
      },
      {
        metric: "0.115 ms",
        label: "Median Inference Latency",
        context: "99.2% background rejection on ATLAS Higgs real-time trigger pipeline"
      },
      {
        metric: "100% Star Schema",
        label: "Low-Latency BI Models",
        context: "Custom DAX measures tracking global workforce KPIs & compensation"
      },
      {
        metric: "48 Safety Suites",
        label: "Zero Contamination Rate",
        context: "Validated across clinical rule engines & multimodal product matching"
      }
    ]
  },

  caseStudies: [
    {
      id: "bi-dashboard",
      title: "Enterprise Business Intelligence Dashboard",
      category: "Dashboards & BI",
      industry: "Workforce & Compensation Analytics",
      problem: "Enterprise stakeholders lacked a centralized, interactive mechanism to monitor global salary distributions, regional hiring density, and compensation equity across messy raw operational data.",
      approach: ["Power BI", "Power Query", "DAX", "Star Schema", "ETL Pipelines", "Data Modeling"],
      impactMetric: "Multi-Page Star Schema",
      impactContext: "Delivered unified dashboard with sub-second cross-filtering, automated Median Yearly Salary & global Job Count metrics.",
      githubUrl: "https://github.com/Nikhitha-devireddy/N_Portfolio",
      hasStaticPreview: true,
      starFramework: {
        situation: "Raw global job compensation and hiring datasets were siloed, unstructured, and filled with nulls, preventing executives from tracking talent acquisition costs accurately.",
        task: "Architect an end-to-end Business Intelligence solution with robust data ingestion, automated cleaning, optimized relational modeling, and intuitive executive navigation.",
        action: "Implemented Power Query ETL pipelines for cleaning and schema structural validation. Built an optimized Star Schema mapping dimension tables (Geography, Job Title, Experience) to fact tables. Wrote custom DAX measures for dynamic salary aggregations and configured interactive slicers, drill-throughs, and conditional bookmarks.",
        result: "Eliminated manual spreadsheet reconciliation; empowered business leaders to filter by region, role tier, and experience level with instant visual feedback across bar, line, map, and matrix cards."
      }
    },
    {
      id: "safebite-ai",
      title: "SafeBite AI – Clinical Food Intelligence Platform",
      category: "AI / ML Systems",
      industry: "Clinical HealthTech & Safety",
      problem: "Shoppers with chronic conditions (diabetes, celiac, hypertension, anaphylactic allergies) face severe health risks from hidden ingredient derivatives and slow product lookup APIs.",
      approach: ["Python", "LangGraph", "Pydantic", "Gemini Vision", "Groq", "Streamlit", "TTL Caching"],
      impactMetric: "30-50s → 2-3s Latency",
      impactContext: "15x retrieval acceleration via concurrent failover orchestration; verified by a 48-test deterministic safety suite.",
      githubUrl: "https://github.com/Nikhitha-devireddy/N_Portfolio",
      hasStaticPreview: true,
      starFramework: {
        situation: "Ingredient lists are heavily obscured by technical jargon and variant mismatches; existing consumer tools took over 30 seconds to fetch catalog data and regularly misclassified allergen derivatives.",
        task: "Develop a deterministic-first clinical safety engine with multimodal packaging OCR, strict identity matching, and resilient multi-retailer retrieval.",
        action: "Built clinical rule engines covering diabetes, hypertension, and celiac safety. Integrated multimodal OCR with Gemini Vision, structured Pydantic schemas, and Groq for high-speed inference. Engineered concurrent multi-retailer retrieval with 403/429 resilience, TTL caching, and failover orchestration.",
        result: "Cut product discovery latency to 2–3s, completely prevented cross-variant nutrition contamination, and passed 48 out of 48 safety-critical test cases."
      }
    },
    {
      id: "sql-analytics",
      title: "SQL-Based Business Data Analysis & Schema Optimization",
      category: "Data Analytics",
      industry: "Enterprise Operations & Relational Design",
      problem: "Disorganized relational schemas and unindexed tables led to severe query degradation, null-value propagation, and ambiguous operational insights.",
      approach: ["SQL", "PostgreSQL", "MySQL", "Relational Modeling", "Query Optimization", "3NF Normalization"],
      impactMetric: "Zero Data Anomalies",
      impactContext: "Enforced 3NF normalization constraints and optimized multi-table JOINs for complex enterprise analytics.",
      githubUrl: "https://github.com/Nikhitha-devireddy/N_Portfolio",
      hasStaticPreview: true,
      starFramework: {
        situation: "Enterprise business databases suffered from update anomalies, unindexed multi-table queries, and inconsistent formatting across operational transaction records.",
        task: "Audit, normalize, and extract decisive operational patterns from multi-relational enterprise schemas using high-performance SQL.",
        action: "Conducted rigorous data cleansing targeting null values, data-type mismatches, and structural flaws. Applied normalization principles up to 3NF. Authored optimized subqueries, window functions, and mathematical joins to synthesize raw transactional records into business metrics.",
        result: "Produced clean, low-latency relational views that allowed seamless tracking of customer lifetime spend, inventory turnover, and regional sales velocity."
      }
    },
    {
      id: "vyom-security",
      title: "VYOM – Intent-Governed Payment Security Platform",
      category: "Business Strategy",
      industry: "FinTech & Cryptographic Verification",
      problem: "Traditional transaction fraud filters create massive friction for legitimate users while failing to identify behavioral coercion and intent manipulation.",
      approach: ["AI / NLP", "Graph Analytics", "Distributed Ledger", "Cryptography", "State Machines"],
      impactMetric: "ALLOW / VERIFY / HOLD",
      impactContext: "Architected Intent-Governed Payment State (IGPS) triage with immutable audit logs.",
      githubUrl: "https://github.com/Nikhitha-devireddy/N_Portfolio",
      hasStaticPreview: false,
      starFramework: {
        situation: "Payment fraud detection systems rely on static threshold heuristics that yield excessive false positives and fail to capture user coercion or anomalous graph hops.",
        task: "Formulate an intent-aware payment security framework combining behavioral graph analysis, natural language context, and cryptographic confirmation.",
        action: "Designed the Intent-Governed Payment State (IGPS) architecture. Coupled behavioral anomaly detection with transaction-graph analytics to score user intent in real time, routing flows into deterministic ALLOW, VERIFY, or HOLD states backed by distributed-ledger settlement verification.",
        result: "Provided an auditable, tampering-resistant transaction workflow that balances fraud mitigation with frictionless legitimate checkout."
      }
    },
    {
      id: "lhc-triggermind",
      title: "LHC-TriggerMind – Resource-Aware Event Triggering",
      category: "AI / ML Systems",
      industry: "High-Energy Physics & Low-Latency ML",
      problem: "Particle accelerators generate gigabytes of sensor collisions per second, demanding real-time trigger decisions under microsecond latency constraints.",
      approach: ["XGBoost", "Compact MLP", "ATLAS Higgs Data", "Real-Time Benchmarking", "Model Pruning"],
      impactMetric: "99.2% Background Rejection",
      impactContext: "Achieved 0.115 ms median latency and 28.2% signal efficiency for ultra-high throughput trigger deployments.",
      githubUrl: "https://github.com/Nikhitha-devireddy/N_Portfolio",
      hasStaticPreview: false,
      starFramework: {
        situation: "ATLAS detector systems at CERN encounter immense background noise; selecting rare Higgs collision candidates requires sub-millisecond filtering before buffers overflow.",
        task: "Train, compress, and benchmark lightweight ML models capable of meeting strict throughput, signal fidelity, and compute footprints.",
        action: "Engineered feature extraction pipelines on ATLAS Higgs simulation data. Benchmarked XGBoost against compact Multi-Layer Perceptrons (MLPs), tuning architectural depth, quantization, and activation functions for edge hardware.",
        result: "Achieved 99.2% background rejection with 0.115 ms median latency, proving that ultra-light neural architectures can operate reliably in high-frequency event streaming."
      }
    },
    {
      id: "asd-detection",
      title: "Interpretable Deep Learning for Early ASD Detection",
      category: "Data Analytics",
      industry: "Pediatric Diagnostics & Explainable AI",
      problem: "Early behavioral screening for Autism Spectrum Disorder often lacks predictive confidence and clinical explainability, hindering early medical intervention.",
      approach: ["TabNet", "MLP Classifier", "SMOTE", "Explainable AI (XAI)", "Feature Engineering"],
      impactMetric: "97.15% Accuracy & 0.9971 AUC",
      impactContext: "Validated on Toddler Autism Screening Dataset with attention-based feature importance attribution.",
      githubUrl: "https://github.com/Nikhitha-devireddy/N_Portfolio",
      hasStaticPreview: false,
      starFramework: {
        situation: "Pediatric diagnostic datasets are typically small, imbalanced, and feature diverse categorical survey responses that standard classifiers overfit.",
        task: "Develop an explainable diagnostic pipeline that pairs high classification precision with transparent, clinician-verifiable decision factors.",
        action: "Employed SMOTE class balancing and Gaussian noise injection to prevent overfitting. Coupled Google's TabNet architecture (for attention-driven feature selection) with an MLP classifier. Extracted local and global feature attribution masks.",
        result: "Reached 97.15% accuracy and 0.9971 AUC on 1,054 toddler screening records while providing doctors with transparent rankings of critical behavioral markers."
      }
    }
  ],

  toolkit: [
    {
      category: "Data & Querying",
      description: "Extracting, transforming, and querying structured datasets with relational precision.",
      skills: [
        { name: "SQL (Complex JOINs, Subqueries, Normalization)", highlight: true, tags: ["Advanced", "Core"] },
        { name: "Relational DBs (PostgreSQL, MySQL)", highlight: true, tags: ["Database"] },
        { name: "Python (Pandas, NumPy, Automation)", highlight: true, tags: ["Scripting"] },
        { name: "ETL Pipelines & Power Query", highlight: false, tags: ["Data Prep"] },
        { name: "Star Schema Modeling & 3NF Design", highlight: true, tags: ["Architecture"] },
        { name: "Data Cleaning & Null-Value Imputation", highlight: false, tags: ["Quality"] },
        { name: "Exploratory Data Analysis (EDA)", highlight: false, tags: ["Analytics"] }
      ]
    },
    {
      category: "BI & Visualization",
      description: "Designing low-latency, intuitive visual storytelling platforms for business leaders.",
      skills: [
        { name: "Power BI Desktop & Cloud Service", highlight: true, tags: ["Primary BI"] },
        { name: "Advanced DAX Formulas & Measures", highlight: true, tags: ["Modeling"] },
        { name: "Interactive Slicers & Custom Buttons", highlight: false, tags: ["UI/UX"] },
        { name: "Conditional Bookmarks & Drill-Throughs", highlight: false, tags: ["Navigation"] },
        { name: "Executive KPI Cards & Matrix Reports", highlight: true, tags: ["Reporting"] },
        { name: "Trend & Distribution Visualizations", highlight: false, tags: ["Charts"] },
        { name: "Streamlit Interactive Web Dashboards", highlight: false, tags: ["Web BI"] }
      ]
    },
    {
      category: "Business, Systems & Core CS",
      description: "Bridging analytical findings with engineering rigor and agile execution.",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", highlight: true, tags: ["Foundations"] },
        { name: "Database Management Systems (DBMS)", highlight: true, tags: ["Systems"] },
        { name: "Object-Oriented Programming (Java)", highlight: false, tags: ["Software"] },
        { name: "Operating Systems & Computer Networks", highlight: false, tags: ["Core CS"] },
        { name: "Business Problem Scoping & Metrics", highlight: true, tags: ["Strategy"] },
        { name: "Agile / Scrum Sprint Coordination", highlight: false, tags: ["Leadership"] },
        { name: "Technical Presentation & Stakeholder Comms", highlight: false, tags: ["Soft Skills"] }
      ]
    }
  ],

  experience: [
    {
      role: "B.Tech in Computer Science Engineering (AI & ML)",
      organization: "Vellore Institute of Technology, Andhra Pradesh",
      location: "Amaravati, AP",
      period: "Sep 2023 – Jun 2027",
      type: "education",
      score: "CGPA: 8.75 / 10.0",
      highlights: [
        "Earned 139 of 139 registered credits with 8 S grades and 16 A grades across core CS & AI/ML courses.",
        "Mastered rigorous curriculum: DBMS, DSA, Operating Systems, Computer Networks, Software Engineering, Applied Statistics, Discrete Math.",
        "Completed specialized development coursework: AWS Solution Architecture, Advanced Competitive Coding I & II, Engineering Clinics (System Design)."
      ]
    },
    {
      role: "Project Lead & Technical Coordinator",
      organization: "Academic System Design & Engineering Clinics",
      location: "VIT-AP Campus",
      period: "2024 – Present",
      type: "leadership",
      highlights: [
        "Facilitated task delegation and sprint tracking in core academic engineering projects, delivering technical milestones 20% ahead of schedule.",
        "Led weekly technical standups to clarify project scopes, resolve overlapping logic dependencies, and align team deliverables.",
        "Selected to present final project architectures and trade-off analyses to university faculty evaluation boards."
      ]
    },
    {
      role: "Peer Technical Mentor & Discussion Facilitator",
      organization: "Student Engineering Community & Clubs",
      location: "VIT-AP Campus",
      period: "2024 – Present",
      type: "academic",
      highlights: [
        "Mentored peer engineering students in debugging relational query errors, refactoring logic, and mastering core Data Structures & Algorithms.",
        "Fostered inclusive development workflows by systematically matching project modules to individual developer strengths.",
        "Active member of Teach Your Machine Club, deepening foundations in practical machine learning architectures."
      ]
    },
    {
      role: "Intermediate (MPC) - Academic Excellence Awardee",
      organization: "Harshini Junior College",
      location: "Andhra Pradesh, India",
      period: "2021 – 2023",
      type: "education",
      score: "98.4% | 92.5 percentile JEE Main (Math)",
      highlights: [
        "Received the prestigious Academic Excellence Award in second year as the top student for outstanding performance.",
        "Demonstrated mathematical problem-solving aptitude with 92.5 percentile in JEE Main Mathematics."
      ]
    },
    {
      role: "Secondary School Certificate (SSC)",
      organization: "Montessori High School",
      location: "Andhra Pradesh, India",
      period: "Graduated 2021",
      type: "education",
      score: "99.33%",
      highlights: [
        "Graduated with top academic standing (99.33% aggregate).",
        "Elected Secretary of the Health Department (Class VIII), spearheading student health awareness programs."
      ]
    }
  ],

  footer: {
    note: "Crafted with Swiss editorial minimalism. 100% static, zero tracking, sub-millisecond load time.",
    status: "Open to Software Engineering, Data Analyst & AI/ML Roles."
  }
};
