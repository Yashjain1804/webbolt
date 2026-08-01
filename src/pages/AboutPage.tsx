import { ArrowRight, FileText, Recycle, ShieldCheck, BrainCircuit } from 'lucide-react';
import { Section } from '@/components/Section';
import { HowWeWork } from '@/components/HowWeWork';

const WA_LINK = 'https://wa.me/message/ZLL3OBZMTZHSD1';

const SPECIALTIES = [
  {
    icon: FileText,
    title: 'Waste paper and plastics',
    body: 'OCC, mixed paper, newsprint, PET, HDPE, LDPE, and mixed plastic scrap — sourced, baled, and supplied to recycling mills and reprocessing facilities worldwide. We handle grades from container loads to bulk shipments, with full documentation for international trade.',
  },
  {
    icon: ShieldCheck,
    title: 'Ferrous and non-ferrous metals',
    body: 'Steel, cast iron, copper, aluminium, brass, and stainless steel scrap — processed and graded to ISRI and international specifications. We source from industrial generators, demolition sites, and recycling yards, and supply to foundries, smelters, and metal mills globally.',
  },
  {
    icon: Recycle,
    title: 'Waste tyres',
    body: 'Used and scrap tyres supplied in bulk — passenger car, truck, and OTR — suitable for recycling, pyrolysis, crumb rubber production, and tyre-derived fuel applications. Sourced responsibly and supplied with the documentation required for international movement.',
  },
];

const FAQ = [
  {
    q: 'What materials do you trade?',
    a: 'We specialise in waste paper (OCC, mixed paper, newsprint), waste and scrap tyres, ferrous metals (steel and iron scrap), non-ferrous metals (copper, aluminium, brass, stainless steel), and plastic scrap (PET, HDPE, LDPE, and mixed grades).',
  },
  {
    q: 'Do you buy scrap as well as sell it?',
    a: 'Yes. We purchase scrap materials from generators, recyclers, and industrial facilities, and we supply processed materials to recycling mills and manufacturers. We work on both sides of the trade.',
  },
  {
    q: 'What quantities do you work with?',
    a: 'We typically work in container loads (20ft and 40ft) and bulk shipments. Minimum quantities vary by material — send us an enquiry and we will advise based on your requirements.',
  },
  {
    q: 'Which countries do you supply?',
    a: 'We supply buyers and source materials across Asia, Europe, the Middle East, Africa, and the Americas. Contact us to confirm we can service your region.',
  },
  {
    q: 'Can you handle shipping and logistics?',
    a: 'Yes. We arrange container loading, shipping documentation, and freight forwarding to your destination port. For sellers, we organise collection and transport from your facility.',
  },
  {
    q: 'How do you price your materials?',
    a: 'Pricing is based on current global market rates, material grade, quantity, and destination. We provide a written quote within one business day of your enquiry.',
  },
  {
    q: 'Why choose Ecoglobe Ventures?',
    a: 'We were founded to bring reliability and transparency to the scrap trade — honest grading, competitive pricing, dependable logistics, and long-term relationships built on doing what we say. Every tonne we trade is a tonne diverted from landfill and returned to the production cycle.',
  },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44">
        <div className="container-page">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow">About</p>
            <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[var(--text)] md:text-5xl">
              A global scrap and waste material trading company.
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              Ecoglobe Ventures LLC is a trading company specialising in the
              global supply of waste and scrap materials — including waste
              paper, waste tyres, ferrous and non-ferrous metals, and plastics.
              We connect generators of scrap with the recycling facilities and
              manufacturers that need them, across markets in Asia, Europe, the
              Middle East, Africa, and the Americas.
            </p>
            <p>
              We were founded to address a recurring problem in the scrap
              trade: inconsistent material quality, uncertain delivery, and
              opaque pricing. Our model exists to deliver engagements that meet
              a higher standard from the outset — honest grading, competitive
              pricing, and dependable logistics, every time.
            </p>
            <p>
              The operating model is straightforward: transparent pricing based
              on current market rates, materials graded to internationally
              recognised specifications, and a documented process from first
              enquiry to final delivery. No hidden fees and no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <Section
        eyebrow="Specialties"
        title="Three core practices."
        className="border-t border-[var(--border)] py-20 md:py-28"
      >
        <ul className="mt-12 space-y-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
          {SPECIALTIES.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="group flex flex-col gap-5 bg-[var(--bg-soft)] p-8 transition-colors duration-300 hover:bg-[var(--bg-elevated)] md:flex-row md:items-start md:gap-8 md:p-10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-elevated)] ring-1 ring-[var(--border)] transition-all duration-300 group-hover:ring-[var(--accent-soft)]">
                  <Icon size={22} className="text-[var(--accent)]" />
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-lg font-medium text-[var(--text)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {s.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      <div className="border-t border-[var(--border)]">
        <HowWeWork />
      </div>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title="Frequently asked questions."
        className="border-t border-[var(--border)] py-20 md:py-28"
      >
        <dl className="mt-12 max-w-3xl divide-y divide-[var(--border)]">
          {FAQ.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="text-base font-medium text-[var(--text)]">
                {item.q}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* CTA strip */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-soft)] py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-2xl font-medium tracking-tight text-[var(--text)]">
              Ready to trade?
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Whether you're buying or selling, we respond within one business day.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Enquiry
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
