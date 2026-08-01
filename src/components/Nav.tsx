import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { href, type Route } from '@/router';
import { Logo } from '@/components/Logo';

const LINKS: { label: string; path: string; route: Route['name'] }[] = [
  { label: 'About', path: '/about', route: 'about' },
  { label: 'Products', path: '/products', route: 'products' },
  { label: 'Contact', path: '/contact', route: 'contact' },
];

const WA_LINK = 'https://wa.me/message/ZLL3OBZMTZHSD1';

export function Nav({ current }: { current: Route['name'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.path}
              href={href(link.path)}
              className={`text-sm transition-colors duration-200 ${
                current === link.route
                  ? 'text-[var(--text)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4"
          >
            Enquiry
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="container-page flex flex-col gap-1 border-t border-[var(--border)] bg-[var(--bg)]/95 pb-6 pt-4 backdrop-blur-xl">
            {LINKS.map((link) => (
              <a
                key={link.path}
                href={href(link.path)}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base transition-colors ${
                  current === link.route
                    ? 'bg-[var(--bg-soft)] text-[var(--text)]'
                    : 'text-[var(--text-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--text)]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
