import { href } from '@/router';
import { Logo } from '@/components/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const WA_LINK = 'https://wa.me/message/ZLL3OBZMTZHSD1';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              Global supplier of waste paper, waste tyres, ferrous and
              non-ferrous metals, and plastics. Reliable sourcing, competitive
              pricing, and sustainable scrap material trading.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-[var(--text-muted)]">
                <Mail size={15} className="text-[var(--accent)]" />
                <a
                  href="mailto:support@ecoglobeventures.com"
                  className="transition-colors hover:text-[var(--text)]"
                >
                  support@ecoglobeventures.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[var(--text-muted)]">
                <Phone size={15} className="text-[var(--accent)]" />
                <a
                  href="tel:+971522415276"
                  className="transition-colors hover:text-[var(--text)]"
                >
                  +971 522 415 276
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[var(--text-muted)]">
                <MapPin size={15} className="mt-0.5 text-[var(--accent)]" />
                <span>201, Hassan Jassim, Al Mankhool, Dubai, UAE</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <p className="eyebrow">Products</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={href('/products')}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    Waste Paper
                  </a>
                </li>
                <li>
                  <a
                    href={href('/products')}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    Waste Tyres
                  </a>
                </li>
                <li>
                  <a
                    href={href('/products')}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    Ferrous & Non-Ferrous Metals
                  </a>
                </li>
                <li>
                  <a
                    href={href('/products')}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    Plastics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Company</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={href('/about')}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href={href('/contact')}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                  >
                    Enquiry
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ecoglobe Ventures LLC. All rights reserved.</p>
          <p>Global scrap & waste material trading.</p>
        </div>
      </div>
    </footer>
  );
}
