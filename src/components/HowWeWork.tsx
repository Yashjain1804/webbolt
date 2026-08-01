import { Phone, FileText, Truck, Repeat } from 'lucide-react';
import { Section } from '@/components/Section';

const WA_LINK = 'https://wa.me/message/ZLL3OBZMTZHSD1';

const STEPS = [
  {
    n: '01',
    icon: Phone,
    title: 'Enquiry',
    body: 'Tell us what you need — material type, grade, quantity, and destination. Or tell us what scrap you have available for sale. A short message on WhatsApp or our contact form is all it takes to start.',
  },
  {
    n: '02',
    icon: FileText,
    title: 'Quotation',
    body: 'Within one business day, you receive a written quote with pricing, material specifications, and delivery terms. For sellers, we provide a fair offer based on current market rates.',
  },
  {
    n: '03',
    icon: Truck,
    title: 'Logistics & delivery',
    body: 'We handle the logistics — container loading, shipping documentation, and freight forwarding to your destination port. For sellers, we arrange collection and transport from your facility.',
  },
  {
    n: '04',
    icon: Repeat,
    title: 'Ongoing supply',
    body: 'For regular buyers, we establish a reliable supply chain with scheduled deliveries and consistent quality. For regular sellers, we offer repeat collection and long-term offtake agreements.',
  },
];

export function HowWeWork() {
  return (
    <Section
      eyebrow="How we work"
      title="Enquiry, then delivery."
      className="py-20 md:py-28"
    >
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.n}
              className="group relative bg-[var(--bg-soft)] p-8 transition-colors duration-300 hover:bg-[var(--bg-elevated)] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--bg-elevated)] ring-1 ring-[var(--border)] transition-all duration-300 group-hover:ring-[var(--accent-soft)]">
                  <Icon size={20} className="text-[var(--accent)]" />
                </span>
                <span className="font-serif text-2xl text-[var(--text-faint)]">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-medium text-[var(--text)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {step.body}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          Start an enquiry
        </a>
      </div>
    </Section>
  );
}
