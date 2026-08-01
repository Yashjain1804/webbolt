import { href } from '@/router';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a
      href={href('/')}
      aria-label="Ecoglobe Ventures home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <img
        src="/logo.jpg"
        alt="Ecoglobe Ventures"
        className="h-8 w-8 rounded-md object-contain ring-1 ring-[var(--border)] transition-all duration-300 group-hover:ring-[var(--accent-soft)]"
      />
      <span className="text-[15px] font-semibold tracking-tight text-[var(--text)]">
        Ecoglobe Ventures
      </span>
    </a>
  );
}
