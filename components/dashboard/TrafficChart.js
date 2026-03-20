'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import ChartWrapper from '@/components/ui/ChartWrapper';
import { TRAFFIC_COLORS } from '@/data/mock-data';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-md dark:border-slate-600 dark:bg-slate-800">
      <p className="text-sm font-bold text-slate-900 dark:text-white">
        {payload[0].name}: {payload[0].value}%
      </p>
    </div>
  );
}

export default function TrafficChart({ data, loading }) {
  return (
    <ChartWrapper title="Traffic Sources" subtitle="Visitor acquisition channels">
      {loading ? (
        <div className="mx-auto h-52 w-52 animate-pulse rounded-full bg-slate-100 dark:bg-slate-800/50" />
      ) : (
        <>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={TRAFFIC_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-2 space-y-2">
            {data.map((entry, index) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: TRAFFIC_COLORS[index] }}
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{entry.name}</span>
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </ChartWrapper>
  );
}
