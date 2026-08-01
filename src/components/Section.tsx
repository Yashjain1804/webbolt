import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && (
        <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-[var(--text)] md:text-4xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
