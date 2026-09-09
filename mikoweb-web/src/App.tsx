import {
  ArrowSquareOut,
  Buildings,
  Clock,
  Code,
  Globe,
  List,
  MagnifyingGlass,
  MapPin,
  PaintBrush,
  Phone,
  Wrench,
  X,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Reveal } from "./components/Reveal";
import {
  ADDRESS,
  IMG,
  PHONE_DISPLAY,
  PHONE_LINK,
  WA_LINK,
  layanan,
  projects,
  proses,
  testimonials,
  type Layanan,
} from "./data";

const NAV = [
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Proses", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
];

function LayananIcon({ icon, className = "" }: { icon: Layanan["icon"]; className?: string }) {
  const props = { size: 24, weight: "regular" as const, className };
  switch (icon) {
    case "buildings":
      return <Buildings {...props} />;
    case "brush":
      return <PaintBrush {...props} />;
    case "code":
      return <Code {...props} />;
    case "search":
      return <MagnifyingGlass {...props} />;
    case "wrench":
      return <Wrench {...props} />;
    default:
      return <Globe {...props} />;
  }
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-paper-white">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
        <a href="#top" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo Mikoweb" width={32} height={32} className="h-8 w-auto" />
          <span className="text-[18px] font-semibold tracking-tight text-deep-forest">Mikoweb</span>
        </a>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-2 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-0.5 text-[16px] font-medium text-deep-forest hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-fill">
            Pesan Website
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-11 w-11 items-center justify-center rounded border border-ink-black text-deep-forest lg:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Navigasi seluler" className="border-t border-ink-black/10 bg-paper-white px-6 py-4 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[16px] font-medium text-deep-forest"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn-fill mt-2 w-full"
          >
            Pesan Website
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-pale-sage">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl bg-pale-sage p-0">
            <img
              src={IMG.hero}
              alt="Tim kecil berdiskusi di depan laptop"
              className="h-[340px] w-full rounded-2xl object-cover lg:h-[440px]"
              fetchPriority="high"
            />
          </div>
        </Reveal>
        <div>
          <h1 className="display-96 text-deep-forest">
            Website cepat untuk bisnis sibuk
          </h1>
          <p className="mt-6 max-w-[44ch] text-[16px] font-normal leading-[1.3] text-charcoal">
            Desain dan development website untuk UMKM Indonesia. Tulisan promosi rapi, foto asli, booking via WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-fill">
              Pesan Website
            </a>
            <a href="#portofolio" className="btn-ghost-m">
              Lihat Portofolio
            </a>
          </div>
          <a href="#portofolio" className="mt-8 flex items-center justify-between gap-4 rounded-2xl bg-deep-forest p-6">
            <div>
              <p className="eyebrow text-chartreuse-lime">Contoh nyata</p>
              <p className="mt-2 text-[22px] font-normal leading-[1.2] text-paper-white">Lihat demo live website</p>
            </div>
            <ArrowSquareOut size={24} className="shrink-0 text-chartreuse-lime" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Layanan() {
  return (
    <section id="layanan" className="bg-paper-white">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-20">
        <Reveal>
          <p className="eyebrow text-deep-forest">Layanan</p>
          <h2 className="heading-56 mt-3 max-w-[18ch] text-deep-forest">
            Pilih sesuai kebutuhan usahamu
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {layanan.map((item) => (
            <Reveal key={item.name}>
              <article className="h-full rounded-2xl bg-pale-sage p-6">
                <div className="flex items-start justify-between gap-3">
                  <LayananIcon icon={item.icon} className="text-deep-forest" />
                  {item.tag && <span className="tag">{item.tag}</span>}
                </div>
                <h3 className="heading-36 mt-4 text-deep-forest" style={{ fontSize: 22, letterSpacing: 0 }}>
                  {item.name}
                </h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.3] text-charcoal">{item.desc}</p>
                <p className="mt-4"><span className="inline-flex rounded bg-chartreuse-lime px-3 py-1 text-[16px] font-medium text-ink-black">{item.price}</span></p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portofolio() {
  return (
    <section id="portofolio" className="bg-pale-sage">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-20">
        <Reveal>
          <p className="eyebrow text-deep-forest">Portofolio</p>
          <h2 className="heading-56 mt-3 max-w-[18ch] text-deep-forest">
            Contoh website yang sudah tayang
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <Reveal key={p.name}>
              <article className="flex h-full flex-col rounded-2xl bg-paper-white p-6">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="h-52 w-full rounded-2xl border border-ink-black/10 object-cover object-top"
                />
                <div className="mt-5 flex items-center gap-3">
                  <span className="tag">Live</span>
                  <p className="text-[14px] font-medium text-charcoal">{p.kind}</p>
                </div>
                <h3 className="heading-36 mt-3 text-deep-forest">{p.name}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.3] text-charcoal">{p.desc}</p>
                <p className="mt-3 text-[14px] font-normal text-charcoal">{p.tags.join(" - ")}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-[16px] font-medium text-deep-forest underline underline-offset-4 hover:opacity-70"
                >
                  Lihat Live <ArrowSquareOut size={18} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proses() {
  return (
    <section id="proses" className="bg-paper-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-2">
        <Reveal>
          <img
            src={IMG.team}
            alt="Tim meninjau desain di depan laptop"
            loading="lazy"
            className="h-[320px] w-full rounded-2xl object-cover lg:h-[440px]"
          />
        </Reveal>
        <div>
          <h2 className="heading-56 text-deep-forest">Dari chat sampai tayang</h2>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {proses.map((s) => (
              <li key={s.name} className="rounded-2xl bg-pale-sage p-6">
                <p className="text-[22px] font-normal leading-[1.2] text-deep-forest">{s.name}</p>
                <p className="mt-2 text-[16px] font-normal leading-[1.3] text-charcoal">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimoni() {
  return (
    <section id="testimoni" className="bg-pale-sage">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-20">
        <Reveal>
          <p className="eyebrow text-deep-forest">Testimoni</p>
          <h2 className="heading-56 mt-3 text-deep-forest">Kata pemilik bisnisnya</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl bg-paper-white p-6">
                <blockquote className="text-[16px] font-normal leading-[1.3] text-charcoal">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep-forest text-[14px] font-medium text-paper-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-deep-forest">{t.name}</p>
                    <p className="text-[12px] font-normal text-charcoal">{t.role}</p>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kontak() {
  return (
    <section id="kontak" className="bg-deep-forest">
      <div className="mx-auto max-w-[1200px] px-6 py-14 text-center md:py-20">
        <Reveal>
          <h2 className="heading-56 mx-auto max-w-[18ch] text-paper-white">
            Punya usaha? Waktunya punya website
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-[16px] font-normal leading-[1.3] text-paper-white">
            Ceritakan kebutuhanmu lewat WhatsApp. Balasan cepat di jam kerja.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-fill">
              Pesan Website
            </a>
            <a href={PHONE_LINK} className="btn-ghost-m btn-ghost-light-m">
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-paper-white">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo Mikoweb" width={36} height={36} className="h-9 w-auto" />
              <span className="text-[18px] font-semibold text-deep-forest">Mikoweb</span>
            </p>
            <p className="mt-3 max-w-[36ch] text-[14px] font-normal leading-[1.3] text-charcoal">
              Jasa website untuk UMKM Indonesia. Tulisan promosi rapi, foto asli, live cepat.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[14px] font-medium text-deep-forest">
            <a href="#layanan" className="w-fit hover:opacity-70">Layanan</a>
            <a href="#portofolio" className="w-fit hover:opacity-70">Portofolio</a>
            <a href="#proses" className="w-fit hover:opacity-70">Proses</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-fit hover:opacity-70">Pesan Website</a>
          </div>
          <div className="text-[14px] font-normal text-charcoal">
            <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {ADDRESS}</p>
            <p className="mt-2 flex items-center gap-2"><Clock size={16} className="shrink-0" /> Senin-Sabtu 09.00-17.00</p>
            <p className="mt-2 flex items-center gap-2"><Phone size={16} className="shrink-0" /> {PHONE_DISPLAY}</p>
          </div>
        </div>
        <p className="mt-10 text-[12px] font-normal text-charcoal">
          Hak Cipta 2026 Mikoweb
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-pale-sage">
      <Navbar />
      <main>
        <Hero />
        <Layanan />
        <Portofolio />
        <Proses />
        <Testimoni />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}
