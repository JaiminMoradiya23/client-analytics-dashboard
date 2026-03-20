'use client';

const ranges = [
  { key: '7d', label: '7 days' },
  { key: '30d', label: '30 days' },
  { key: '12m', label: '12 months' },
];

export default function DateFilter({ selected, onChange }) {
  return (
    <div className="flex rounded-lg border border-slate-200 bg-slate-50/50 p-1 dark:border-slate-700 dark:bg-slate-800/50">
      {ranges.map((range) => (
        <button
          key={range.key}
          onClick={() => onChange(range.key)}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            selected === range.key
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}
