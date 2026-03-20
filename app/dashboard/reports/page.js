'use client';

import Card from '@/components/ui/Card';
import { FileText, Download, Calendar, TrendingUp } from 'lucide-react';

const reports = [
  {
    title: 'Monthly Revenue Report',
    description: 'Detailed breakdown of revenue across all channels',
    date: 'Mar 1, 2026',
    type: 'Revenue',
    icon: TrendingUp,
    color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  },
  {
    title: 'User Acquisition Report',
    description: 'Analysis of user growth, sources, and retention rates',
    date: 'Feb 28, 2026',
    type: 'Users',
    icon: Calendar,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  },
  {
    title: 'Q1 2026 Summary',
    description: 'Quarterly performance overview and key highlights',
    date: 'Feb 15, 2026',
    type: 'Quarterly',
    icon: FileText,
    color: 'bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
  },
  {
    title: 'Conversion Funnel Analysis',
    description: 'Step-by-step funnel breakdown with drop-off rates',
    date: 'Feb 10, 2026',
    type: 'Conversion',
    icon: TrendingUp,
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  },
];

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Reports
          </h1>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            Download and review generated reports
          </p>
        </div>
        <button className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
          <FileText className="h-4 w-4" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <Card key={report.title} className="group flex items-start gap-4">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${report.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {report.title}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                  {report.description}
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <span className="text-xs text-slate-400 dark:text-slate-500">{report.date}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {report.type}
                  </span>
                </div>
              </div>
              <button className="shrink-0 rounded-lg p-2 text-slate-400 opacity-0 transition-all hover:bg-slate-100 hover:text-slate-600 group-hover:opacity-100 dark:hover:bg-slate-800 dark:hover:text-slate-300">
                <Download className="h-4 w-4" />
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
