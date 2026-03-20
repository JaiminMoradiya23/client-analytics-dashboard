import Card from './Card';

export default function ChartWrapper({ title, subtitle, children, className = '' }) {
  return (
    <Card className={className}>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
        {subtitle && (
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        )}
      </div>
      {children}
    </Card>
  );
}
