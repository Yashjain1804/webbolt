import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  Loader2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const WA_LINK = 'https://wa.me/message/ZLL3OBZMTZHSD1';

const MATERIAL_OPTIONS = [
  'Waste Paper',
  'Waste Tyres',
  'Ferrous Metals',
  'Non-Ferrous Metals',
  'Plastics',
  'Other / Multiple',
];

const ENQUIRY_TYPES = ['I want to buy', 'I want to sell', 'Both', 'Just exploring'];

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      organization: String(data.get('organization') || '').trim() || null,
      material: String(data.get('material') || '').trim() || null,
      enquiry_type: String(data.get('enquiry_type') || '').trim() || null,
      message: String(data.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and a brief message.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase
      .from('consultation_requests')
      .insert([payload]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again or contact us directly.');
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <>
      <section className="pt-32 md:pt-44">
        <div className="container-page">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[var(--text)] md:text-5xl">
              Get in touch.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              Whether you want to buy materials, sell scrap, or just learn
              more about how we work — send us a message or reach us directly
              on WhatsApp and we'll respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            {/* Contact details */}
            <aside className="space-y-8">
              <div>
                <p className="eyebrow">Contact details</p>
                <ul className="mt-5 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-elevated)] ring-1 ring-[var(--border)]">
                      <Mail size={16} className="text-[var(--accent)]" />
                    </span>
                    <div>
                      <p className="text-[var(--text-faint)]">Email</p>
                      <a
                        href="mailto:support@ecoglobeventures.com"
                        className="mt-1 block text-[var(--text)] transition-colors hover:text-[var(--accent-bright)]"
                      >
                        support@ecoglobeventures.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-elevated)] ring-1 ring-[var(--border)]">
                      <Phone size={16} className="text-[var(--accent)]" />
                    </span>
                    <div>
                      <p className="text-[var(--text-faint)]">Mobile</p>
                      <a
                        href="tel:+971522415276"
                        className="mt-1 block text-[var(--text)] transition-colors hover:text-[var(--accent-bright)]"
                      >
                        +971 522 415 276
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-elevated)] ring-1 ring-[var(--border)]">
                      <MapPin size={16} className="text-[var(--accent)]" />
                    </span>
                    <div>
                      <p className="text-[var(--text-faint)]">Address</p>
                      <p className="mt-1 text-[var(--text)]">
                        201, Hassan Jassim<br />
                        Al Mankhool, Dubai<br />
                        United Arab Emirates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-elevated)] ring-1 ring-[var(--border)]">
                      <Clock size={16} className="text-[var(--accent)]" />
                    </span>
                    <div>
                      <p className="text-[var(--text-faint)]">Response time</p>
                      <p className="mt-1 text-[var(--text)]">
                        Within one business day
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Enquiry on WhatsApp
                <ArrowRight size={16} className="ml-2" />
              </a>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
                <p className="eyebrow">Engagement model</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Transparent pricing based on current market rates. Container
                  and bulk shipments worldwide. Collection arranged from your
                  facility. No hidden fees.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="card p-8 md:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/15">
                    <Check size={28} className="text-[var(--accent)]" />
                  </span>
                  <h2 className="mt-6 font-serif text-2xl font-medium tracking-tight text-[var(--text)]">
                    Thank you.
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
                    Your message has been received. We'll review your enquiry
                    and respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-ghost mt-8"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" required placeholder="Jane Doe" />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                    />
                  </div>
                  <Field
                    label="Organization"
                    name="organization"
                    placeholder="Company (optional)"
                  />

                  <div>
                    <label className="text-sm font-medium text-[var(--text)]">
                      I'm enquiring to
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ENQUIRY_TYPES.map((type) => (
                        <label key={type} className="cursor-pointer">
                          <input
                            type="radio"
                            name="enquiry_type"
                            value={type}
                            className="peer sr-only"
                          />
                          <span className="inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--text-faint)] peer-checked:border-[var(--accent)] peer-checked:bg-[var(--accent)]/10 peer-checked:text-[var(--accent-bright)]">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[var(--text)]">
                      Material of interest
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {MATERIAL_OPTIONS.map((mat) => (
                        <label key={mat} className="cursor-pointer">
                          <input
                            type="radio"
                            name="material"
                            value={mat}
                            className="peer sr-only"
                          />
                          <span className="inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--text-faint)] peer-checked:border-[var(--accent)] peer-checked:bg-[var(--accent)]/10 peer-checked:text-[var(--accent-bright)]">
                            {mat}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-[var(--text)]"
                    >
                      Message{' '}
                      <span className="text-[var(--text-faint)]">(required)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your material requirements or available inventory — type, grade, quantity, and destination."
                      className="mt-2 w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] transition-colors duration-200 focus:border-[var(--accent-soft)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-soft)]"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <ArrowRight size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-[var(--text)]">
        {label}{' '}
        {required && <span className="text-[var(--text-faint)]">(required)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] transition-colors duration-200 focus:border-[var(--accent-soft)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-soft)]"
      />
    </div>
  );
}
