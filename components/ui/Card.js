export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700/50 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  );
}
