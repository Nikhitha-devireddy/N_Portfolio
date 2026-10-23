import React, { useState } from 'react';
import type { CaseStudy } from '../portfolioConfig';
import { X, Database, BarChart2, CheckCircle2, Layers } from 'lucide-react';

interface StaticDashboardModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const StaticDashboardModal: React.FC<StaticDashboardModalProps> = ({
  caseStudy,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'model' | 'kpis' | 'dax'>('kpis');

  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-neutral-900 dark:text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-medium">
                Static Architecture & BI Preview
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Zero-Latency Static Representation
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {caseStudy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subtabs */}
        <div className="flex items-center gap-2 my-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">
          <button
            onClick={() => setActiveTab('kpis')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === 'kpis'
                ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Executive Visual Report
          </button>
          <button
            onClick={() => setActiveTab('model')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === 'model'
                ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Star Schema & Data Architecture
          </button>
          <button
            onClick={() => setActiveTab('dax')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === 'dax'
                ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Calculated DAX & Logic
          </button>
        </div>

        {/* TAB 1: EXECUTIVE DASHBOARD REPORT MOCKUP */}
        {activeTab === 'kpis' && (
          <div className="space-y-4">
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
              <span>View: Executive Workforce & Salary Slicer Snapshot</span>
              <span>Filter: Global / Normalized FY24-FY26</span>
            </div>

            {/* Simulated Slicer Bar */}
            <div className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-neutral-500">Active Slicers:</span>
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium">
                Region: North America & APAC
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium">
                Seniority: Mid - Lead
              </span>
              <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                Work Model: Hybrid / Remote
              </span>
            </div>

            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">Median Yearly Salary</div>
                <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1">$128,450</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">+6.2% vs baseline</div>
              </div>
              <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">Total Analyzed Roles</div>
                <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1">24,850</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-0.5">100% deduplicated</div>
              </div>
              <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">Remote Ratio</div>
                <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1">42.8%</div>
                <div className="text-[10px] text-blue-600 dark:text-blue-400 font-mono mt-0.5">Up 14% YoY</div>
              </div>
              <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">Query Response</div>
                <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white mt-1">&lt; 150 ms</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">Star Schema indexed</div>
              </div>
            </div>

            {/* Static Visual Breakdown: Salary by Experience & Role */}
            <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="flex items-center justify-between mb-3 text-xs font-mono font-medium">
                <span className="flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
                  Salary Distribution by Role Tier (Normalized USD)
                </span>
                <span className="text-neutral-400 text-[11px]">Static DAX Aggregation</span>
              </div>
              
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>Machine Learning Engineer</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">$156,000 / yr</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-xs h-2.5 overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-xs" style={{ width: '88%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>Data Architect / Engineer</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">$148,500 / yr</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-xs h-2.5 overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-xs" style={{ width: '82%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>BI & Analytics Specialist</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">$124,000 / yr</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-xs h-2.5 overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-xs" style={{ width: '68%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>Data Analyst</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">$98,000 / yr</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-xs h-2.5 overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-xs" style={{ width: '52%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STAR SCHEMA DIAGRAM */}
        {activeTab === 'model' && (
          <div className="space-y-4">
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              Star Schema Relationship Matrix: 1-to-Many single-directional filtering for minimal memory footprint and query latency.
            </div>

            <div className="p-4 sm:p-6 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 font-mono text-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Dimension 1 */}
                <div className="p-3 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                  <div className="font-semibold text-blue-600 dark:text-blue-400 pb-1.5 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    Dim_Geography (1)
                  </div>
                  <ul className="mt-2 space-y-1 text-neutral-600 dark:text-neutral-300 text-[11px]">
                    <li className="font-bold text-neutral-900 dark:text-white">• Geo_ID [PK]</li>
                    <li>• Country</li>
                    <li>• Region (Americas/EMEA/APAC)</li>
                    <li>• CostOfLivingIndex</li>
                  </ul>
                </div>

                {/* Central Fact Table */}
                <div className="p-4 rounded border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30">
                  <div className="font-bold text-blue-700 dark:text-blue-300 pb-1.5 border-b border-blue-300 dark:border-blue-800 flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    Fact_Compensation (∞)
                  </div>
                  <ul className="mt-2 space-y-1 text-neutral-800 dark:text-neutral-200 text-[11px]">
                    <li className="font-bold">• Compensation_ID [PK]</li>
                    <li className="text-blue-600 dark:text-blue-400">• Geo_ID [FK] → Dim_Geo</li>
                    <li className="text-blue-600 dark:text-blue-400">• Role_ID [FK] → Dim_Role</li>
                    <li className="text-blue-600 dark:text-blue-400">• Exp_ID [FK] → Dim_Exp</li>
                    <li>• BaseSalary_USD [Numeric]</li>
                    <li>• EquityCompensation [Numeric]</li>
                    <li>• BonusPercentage [Numeric]</li>
                  </ul>
                </div>

                {/* Dimension 2 */}
                <div className="p-3 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                  <div className="font-semibold text-blue-600 dark:text-blue-400 pb-1.5 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    Dim_JobRole (1)
                  </div>
                  <ul className="mt-2 space-y-1 text-neutral-600 dark:text-neutral-300 text-[11px]">
                    <li className="font-bold text-neutral-900 dark:text-white">• Role_ID [PK]</li>
                    <li>• Title_Cleaned</li>
                    <li>• Department</li>
                    <li>• CoreSkillset</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-300">
                <span className="font-semibold text-neutral-900 dark:text-white">Relational Integrity: </span>
                Engineered with strict snowflake elimination. Surrogate integer keys index each row for instantaneous aggregation in DAX engine storage (VertiPaq).
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DAX & SYSTEM LOGIC */}
        {activeTab === 'dax' && (
          <div className="space-y-4">
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              Core production DAX measures implemented for dynamic executive calculations:
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded bg-neutral-950 text-neutral-100 border border-neutral-800">
                <div className="text-neutral-400 text-[11px] mb-1">DAX Measure 01: Median Salary with Slicer Context Preservation</div>
                <div className="text-blue-400">Median_Salary_USD =</div>
                <div className="pl-4 text-neutral-300">
                  CALCULATE(
                  <br />
                  &nbsp;&nbsp;MEDIAN('Fact_Compensation'[BaseSalary_USD]),
                  <br />
                  &nbsp;&nbsp;KEEPFILTERS('Dim_JobRole'[Department])
                  <br />
                  )
                </div>
              </div>

              <div className="p-3.5 rounded bg-neutral-950 text-neutral-100 border border-neutral-800">
                <div className="text-neutral-400 text-[11px] mb-1">DAX Measure 02: Dynamic YoY Compensation Variance Ratio</div>
                <div className="text-blue-400">YoY_Salary_Variance =</div>
                <div className="pl-4 text-neutral-300">
                  VAR CurrentYear = [Median_Salary_USD]
                  <br />
                  VAR PriorYear = CALCULATE([Median_Salary_USD], SAMEPERIODLASTYEAR('Dim_Date'[Date]))
                  <br />
                  RETURN
                  <br />
                  &nbsp;&nbsp;DIVIDE(CurrentYear - PriorYear, PriorYear, 0)
                </div>
              </div>

              <div className="p-3.5 rounded bg-neutral-950 text-neutral-100 border border-neutral-800">
                <div className="text-neutral-400 text-[11px] mb-1">DAX Measure 03: Global Deduplicated Job Count</div>
                <div className="text-blue-400">Active_Role_Count =</div>
                <div className="pl-4 text-neutral-300">
                  DISTINCTCOUNTNOBLANK('Fact_Compensation'[Compensation_ID])
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Power Query ETL → Star Schema → DAX Engine Pipeline</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-medium rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
