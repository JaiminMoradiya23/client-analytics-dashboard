'use client';

import { useState, useEffect } from 'react';
import { fetchDashboardData } from '@/data/mock-data';
import StatsCards from '@/components/dashboard/StatsCards';
import SalesChart from '@/components/dashboard/SalesChart';
import UsersChart from '@/components/dashboard/UsersChart';
import TrafficChart from '@/components/dashboard/TrafficChart';
import DateFilter from '@/components/dashboard/DateFilter';
import RecentTransactions from '@/components/dashboard/RecentTransactions';

export default function DashboardPage() {
  const [range, setRange] = useState('30d');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDashboardData(range).then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [range]);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            Track your key metrics and business performance
          </p>
        </div>
        <DateFilter selected={range} onChange={setRange} />
      </div>

      <StatsCards stats={data?.stats || []} loading={loading} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalesChart data={data?.sales || []} loading={loading} />
        <UsersChart data={data?.users || []} loading={loading} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <TrafficChart data={data?.traffic || []} loading={loading} />
      </div>
    </div>
  );
}
