import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/message/ZLL3OBZMTZHSD1';

const TABS = ['All', 'Waste Paper', 'Waste Tyres', 'Ferrous Metals', 'Non-Ferrous Metals', 'Plastics'] as const;
type Tab = (typeof TABS)[number];

const PRODUCTS = [
  {
    name: 'Waste Paper',
    tab: 'Waste Paper' as Tab,
    image: 'https://images.pexels.com/photos/9508986/pexels-photo-9508986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'OCC (old corrugated containers), mixed paper, newsprint, and magazine grades — sorted, baled, and supplied to recycling paper mills worldwide.',
    grades: ['OCC / OCC-12', 'Mixed Paper', 'Newsprint (ONP)', 'Magazine (OMG)'],
  },
  {
    name: 'Cardboard Bales',
    tab: 'Waste Paper' as Tab,
    image: 'https://images.pexels.com/photos/2967770/pexels-photo-2967770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Compressed and baled corrugated cardboard ready for pulping — consistent bale weight and moisture content for mill-ready delivery.',
    grades: ['Double-sorted OCC', 'Baled cardboard', 'Sorted office paper'],
  },
  {
    name: 'Passenger Tyres',
    tab: 'Waste Tyres' as Tab,
    image: 'https://images.pexels.com/photos/38448742/pexels-photo-38448742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Used passenger car tyres in bulk — clean, sorted, and suitable for crumb rubber, pyrolysis oil, and retreading operations.',
    grades: ['Whole passenger tyres', 'Shredded tyre chips', 'Crumb rubber'],
  },
  {
    name: 'Truck & OTR Tyres',
    tab: 'Waste Tyres' as Tab,
    image: 'https://images.pexels.com/photos/29274555/pexels-photo-29274555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Heavy truck, bus, and off-the-road (OTR) tyres supplied in bulk, sourced from fleets and tyre dealers — ideal for tyre-derived fuel and pyrolysis.',
    grades: ['Truck tyres (whole)', 'OTR / mining tyres', 'Tyre-derived fuel'],
  },
  {
    name: 'Heavy Melting Steel',
    tab: 'Ferrous Metals' as Tab,
    image: 'https://images.pexels.com/photos/36397935/pexels-photo-36397935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'HMS 1 and HMS 2 steel scrap — sourced from demolition, fabrication, and industrial facilities, graded to ISRI specifications for electric arc furnaces.',
    grades: ['HMS 1', 'HMS 2', 'Shredded steel'],
  },
  {
    name: 'Cast Iron & Turnings',
    tab: 'Ferrous Metals' as Tab,
    image: 'https://images.pexels.com/photos/36397858/pexels-photo-36397858.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Cast iron scrap and steel turnings from machining operations — graded and supplied to foundries and steel mills.',
    grades: ['Cast iron', 'Steel turnings', 'Borings & busheling'],
  },
  {
    name: 'Copper Scrap',
    tab: 'Non-Ferrous Metals' as Tab,
    image: 'https://images.pexels.com/photos/5279317/pexels-photo-5279317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Copper wire, cable, and mixed copper scrap — graded to ISRI Berry, Candy, and Birch specifications for refineries and wire rod mills.',
    grades: ['Copper (Berry)', 'Copper (Candy)', 'Copper wire / cable'],
  },
  {
    name: 'Aluminium & Brass',
    tab: 'Non-Ferrous Metals' as Tab,
    image: 'https://images.pexels.com/photos/5279344/pexels-photo-5279344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Aluminium extrusions, castings, and UBC along with brass and stainless steel scrap — supplied to secondary smelters and rerolling mills.',
    grades: ['Aluminium (Tense/Tabor)', 'UBC', 'Brass', 'Stainless steel'],
  },
  {
    name: 'PET & HDPE Scrap',
    tab: 'Plastics' as Tab,
    image: 'https://images.pexels.com/photos/3735205/pexels-photo-3735205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'PET bottles and HDPE containers — baled or granulated — supplied to plastics reprocessors and packaging manufacturers worldwide.',
    grades: ['PET bottles (clear)', 'PET flakes', 'HDPE (natural)', 'HDPE (colour)'],
  },
  {
    name: 'Film & Mixed Plastics',
    tab: 'Plastics' as Tab,
    image: 'https://images.pexels.com/photos/2602537/pexels-photo-2602537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'LDPE film, stretch wrap, and mixed plastic scrap — baled for bulk shipment to reprocessing facilities and plastic product manufacturers.',
    grades: ['LDPE film', 'Stretch wrap', 'Mixed plastics', 'PP scrap'],
  },
];

export function ProductsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('All');

  const filtered = activeTab === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.tab === activeTab);

  return (
    <>
      <section className="pt-32 md:pt-44">
        <div className="container-page">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow">Products</p>
            <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[var(--text)] md:text-5xl">
              The scrap and waste materials we trade.
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
            We supply five primary material categories — waste paper, waste
            tyres, ferrous and non-ferrous metals, and plastics. All materials
            are graded to recognised specifications and quality-assured before
            shipment.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[var(--border)] pb-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative -mb-px rounded-t-lg border-x border-t px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'border-[var(--border)] bg-[var(--bg-soft)] text-[var(--text)]'
                    : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[var(--accent)]" />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => (
              <a
                key={m.name}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)]">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-soft)] via-[var(--bg-soft)]/30 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--bg)]/70 px-3 py-1 text-xs font-medium text-[var(--text-muted)] backdrop-blur-sm">
                      {m.tab}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg)]/70 text-[var(--text-muted)] backdrop-blur-sm transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-[#06120c]">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-medium text-[var(--text)]">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {m.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.grades.map((g) => (
                      <span
                        key={g}
                        className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs text-[var(--text-faint)]"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-soft)] py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-2xl font-medium tracking-tight text-[var(--text)]">
              Need a specific grade?
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Tell us your requirements. We source materials to order and
              respond within one business day.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Enquiry
          </a>
        </div>
      </section>
    </>
  );
}
