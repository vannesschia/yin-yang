export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="
      inline-block px-2 py-0.5 rounded-sm text-xs font-base border bg-cyan-50 text-cyan-800 border-cyan-200 dark:bg-cyan-900 dark:text-cyan-200 dark:border-cyan-700
    ">
      {children}
    </span>
  );
}