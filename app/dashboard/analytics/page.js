'use client';

import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';
import { analyticsData, DEVICE_COLORS } from '@/data/mock-data';
import { useTheme } from '@/context/ThemeContext';
import Card from '@/components/ui/Card';
import ChartWrapper from '@/components/ui/ChartWrapper';
import { Globe, Monitor, Smartphone, Tablet } from 'lucide-react';

function ComparisonTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-md dark:border-slate-600 dark:bg-slate-800">
      <p className="mb-1 text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="text-sm" style={{ color: p.color }}>
          <span className="font-bold">${(p.value / 1000).toFixed(1)}k</span>{' '}
          <span className="text-xs text-slate-400">{p.dataKey === 'current' ? 'This period' : 'Previous'}</span>
        </p>
      ))}
    </div>
  );
}

const deviceIcons = { Desktop: Monitor, Mobile: Smartphone, Tablet };

export default function AnalyticsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Analytics
        </h1>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          Deep dive into your performance metrics
        </p>
      </div>

      <ChartWrapper title="Revenue Comparison" subtitle="Current period vs previous period">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={analyticsData.revenueComparison} margin={{ top: 4, right: 4, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="currentGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="prevGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#f1f5f9'} vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: isDark ? '#64748b' : '#94a3b8', fontSize: 12 }} dy={8} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: isDark ? '#64748b' : '#94a3b8', fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} dx={-4} />
            <Tooltip content={<ComparisonTooltip />} />
            <Area type="monotone" dataKey="previous" stroke="#10b981" strokeWidth={2} fill="url(#prevGrad)" dot={false} />
            <Area type="monotone" dataKey="current" stroke="#6366f1" strokeWidth={2} fill="url(#currentGrad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-4 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <span className="text-xs text-slate-500 dark:text-slate-400">Current period</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-500 dark:text-slate-400">Previous period</span>
          </div>
        </div>
      </ChartWrapper>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-hidden p-0">
          <div className="border-b border-slate-200/80 px-6 py-4 dark:border-slate-700/50">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-slate-400" />
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Top Pages</h3>
            </div>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">Most visited pages on your site</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Page</th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Views</th>
                  <th className="hidden px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400 sm:table-cell dark:text-slate-500">Unique</th>
                  <th className="hidden px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400 md:table-cell dark:text-slate-500">Bounce Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {analyticsData.topPages.map((row) => (
                  <tr key={row.page} className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="whitespace-nowrap px-6 py-3.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">{row.page}</td>
                    <td className="whitespace-nowrap px-6 py-3.5 text-right text-sm font-semibold text-slate-900 dark:text-white">{row.views.toLocaleString()}</td>
                    <td className="hidden whitespace-nowrap px-6 py-3.5 text-right text-sm text-slate-600 sm:table-cell dark:text-slate-400">{row.unique.toLocaleString()}</td>
                    <td className="hidden whitespace-nowrap px-6 py-3.5 text-right text-sm text-slate-600 md:table-cell dark:text-slate-400">{row.bounceRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <ChartWrapper title="Device Breakdown" subtitle="How visitors access your site">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={analyticsData.deviceBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={78}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {analyticsData.deviceBreakdown.map((_, index) => (
                  <Cell key={index} fill={DEVICE_COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-3">
            {analyticsData.deviceBreakdown.map((item, index) => {
              const Icon = deviceIcons[item.name] || Monitor;
              return (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: DEVICE_COLORS[index] + '18' }}>
                      <Icon className="h-4 w-4" style={{ color: DEVICE_COLORS[index] }} />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}%</span>
                </div>
              );
            })}
          </div>
        </ChartWrapper>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="border-b border-slate-200/80 px-6 py-4 dark:border-slate-700/50">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Sessions by Country</h3>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">Geographic distribution of your visitors</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Country</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Sessions</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Share</th>
                <th className="hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400 sm:table-cell dark:text-slate-500">Distribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {analyticsData.sessionsByCountry.map((row) => (
                <tr key={row.country} className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="whitespace-nowrap px-6 py-3.5 text-sm font-medium text-slate-900 dark:text-white">{row.country}</td>
                  <td className="whitespace-nowrap px-6 py-3.5 text-right text-sm text-slate-600 dark:text-slate-400">{row.sessions.toLocaleString()}</td>
                  <td className="whitespace-nowrap px-6 py-3.5 text-right text-sm font-semibold text-slate-900 dark:text-white">{row.percentage}%</td>
                  <td className="hidden whitespace-nowrap px-6 py-3.5 sm:table-cell">
                    <div className="h-2 w-full max-w-[120px] overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{ width: `${(row.percentage / 38) * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
