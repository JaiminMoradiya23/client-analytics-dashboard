'use client';

import { DollarSign, Users, TrendingUp, Percent, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Card from '@/components/ui/Card';

const iconMap = { DollarSign, Users, TrendingUp, Percent };

const iconStyles = {
  DollarSign: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  Users: 'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  TrendingUp: 'bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
  Percent: 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
};

function StatCardSkeleton() {
  return (
    <Card>
      <div className="animate-pulse">
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-9 w-9 rounded-lg bg-slate-200 dark:bg-slate-700" />
        </div>
        <div className="mt-3 h-8 w-28 rounded bg-slate-200 dark:bg-slate-700" />
        <div className="mt-2 h-4 w-32 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
    </Card>
  );
}

export default function StatsCards({ stats, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, i) => {
        const Icon = iconMap[stat.icon];
        const isPositive = stat.trend === 'up';
        return (
          <Card key={i} className="group">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.title}
              </span>
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${iconStyles[stat.icon]}`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </div>
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {stat.value}
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              {isPositive ? (
                <ArrowUpRight className="h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`text-sm font-semibold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}
              >
                {Math.abs(stat.change)}%
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">vs last period</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
