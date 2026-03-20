'use client';

import Card from '@/components/ui/Card';
import { recentTransactions } from '@/data/mock-data';

const statusStyles = {
  completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  pending: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  failed: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
};

export default function RecentTransactions() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-slate-200/80 px-6 py-4 dark:border-slate-700/50">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
          Recent Transactions
        </h3>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          Latest customer purchases
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Status
              </th>
              <th className="hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400 sm:table-cell dark:text-slate-500">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {recentTransactions.map((tx) => (
              <tr
                key={tx.id}
                className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
              >
                <td className="whitespace-nowrap px-6 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {tx.customer}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{tx.email}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-3.5 text-sm font-semibold text-slate-900 dark:text-white">
                  {tx.amount}
                </td>
                <td className="whitespace-nowrap px-6 py-3.5">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[tx.status]}`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="hidden whitespace-nowrap px-6 py-3.5 text-sm text-slate-500 sm:table-cell dark:text-slate-400">
                  {tx.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
