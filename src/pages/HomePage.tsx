import { ArrowRight, FileText, Recycle, Truck, ShieldCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { href } from '@/router';
import { Section } from '@/components/Section';
import { HowWeWork } from '@/components/HowWeWork';

const WA_LINK = 'https://wa.me/message/ZLL3OBZMTZHSD1';

const SLIDES = [
  { src: '/images/carousel/Ferrous_shreds.jpg', alt: 'Ferrous metal shreds' },
  { src: '/images/carousel/Metal_bales.jpg',    alt: 'Compressed metal bales' },
  { src: '/images/carousel/Paper_waste.jpg',    alt: 'Waste paper bales' },
  { src: '/images/carousel/Shreds.jpg',         alt: 'Shredded scrap material' },
];

const INTERVAL = 4500;

function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  return (
    <>
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[var(--bg)]/70" />
      {/* Subtle bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 bg-[var(--accent)]'
                : 'w-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </>
  );
}

const MATERIALS = [
  {
    icon: FileText,
    title: 'Waste Paper',
    body: 'OCC, mixed paper, newsprint, and magazine grades — sorted, baled, and ready for recycling mills worldwide.',
    image: 'https://images.pexels.com/photos/2967770/pexels-photo-2967770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Recycle,
    title: 'Waste Tyres',
    body: 'Used and scrap tyres in bulk quantities, suitable for recycling, pyrolysis, and energy recovery applications.',
    image: 'https://images.pexels.com/photos/3283430/pexels-photo-3283430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: ShieldCheck,
    title: 'Ferrous & Non-Ferrous Metals',
    body: 'Steel, iron, copper, aluminium, brass, and stainless steel scrap — processed and graded to industry specifications.',
    image: 'https://images.pexels.com/photos/9784001/pexels-photo-9784001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Truck,
    title: 'Plastics',
    body: 'PET, HDPE, LDPE, and mixed plastic scrap — baled and supplied to reprocessing facilities across global markets.',
    image: 'https://images.pexels.com/photos/3735205/pexels-photo-3735205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export function HomePage() {
  return (
    <>
      {/* Hero — full-bleed with background slideshow */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center">
        {/* Background slideshow */}
        <HeroBackground />

        {/* Foreground content */}
        <div className="relative z-10 w-full pb-24 pt-36 md:pt-48">
          <div className="container-page">
            <div className="max-w-3xl animate-fade-up">
              <p className="eyebrow text-white/60">Ecoglobe Ventures LLC</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-6xl">
                Global suppliers of waste paper, tyres, metals, and plastics.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                We source, process, and supply scrap and waste materials to
                recycling facilities and manufacturers worldwide — with reliable
                logistics, competitive pricing, and a commitment to the circular
                economy.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Enquiry
                  <ArrowRight size={16} className="ml-2" />
                </a>
                <a href={href('/products')} className="btn-ghost">
                  View our products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we supply */}
      <Section
        eyebrow="What we supply"
        title="Four core material categories, one reliable supplier."
        className="py-20 md:py-28"
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {MATERIALS.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="card card-hover group overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--bg-elevated)]">
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-soft)] via-[var(--bg-soft)]/40 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--bg)]/80 ring-1 ring-[var(--border)] backdrop-blur-sm transition-all duration-300 group-hover:ring-[var(--accent-soft)]">
                    <Icon size={20} className="text-[var(--accent)]" />
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-medium text-[var(--text)]">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {m.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <a href={href('/products')} className="link-underline">
            View all products
            <ArrowRight size={14} />
          </a>
        </div>
      </Section>

      <div className="border-t border-[var(--border)]">
        <HowWeWork />
      </div>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-soft)] py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--text)] md:text-4xl">
              Request an enquiry
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">
              Tell us about your material requirements or available scrap
              inventory. We'll respond within one business day with pricing
              and logistics details.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Enquiry
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
