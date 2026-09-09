// dummy: angka berikut ilustratif, ganti data asli sebelum produksi
export const WA_LINK =
  "https://wa.me/62895411029846?text=Halo%20mikoweb%2C%20saya%20mau%20pesan%20website.";

export const PHONE_DISPLAY = "+62 895-4102-9846";
export const PHONE_LINK = "tel:+62895411029846";
export const ADDRESS = "Jl. Rimbo Kaluang No. 12, Padang";

const U = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  hero: U("photo-1758691737124-05c5bffe46f0", 1200),
  team: U("photo-1774600134168-b9ebd714e4e1", 1000),
};

export type Layanan = {
  name: string;
  desc: string;
  price: string;
  icon: "globe" | "buildings" | "brush" | "code" | "search" | "wrench";
  tag?: string;
};

export const layanan: Layanan[] = [
  {
    name: "Landing Page",
    desc: "Satu halaman fokus jualan, copy Indonesia, siap iklan.",
    price: "Mulai Rp1,5jt",
    icon: "globe",
  },
  {
    name: "Company Profile",
    desc: "Website perusahaan lengkap, paling dipesan UMKM.",
    price: "Mulai Rp3jt",
    icon: "buildings",
    tag: "Populer",
  },
  {
    name: "Redesign Website",
    desc: "Web lama disulap modern tanpa hilang peringkat.",
    price: "Mulai Rp2,5jt",
    icon: "brush",
  },
  {
    name: "Custom Web App",
    desc: "Sistem booking, katalog, dashboard sesuai alurmu.",
    price: "Hubungi dulu",
    icon: "code",
  },
  {
    name: "SEO dan Kecepatan",
    desc: "Audit teknis, skor PageSpeed hijau, struktur rapi.",
    price: "Mulai Rp1jt",
    icon: "search",
  },
  {
    name: "Maintenance",
    desc: "Update, backup, dan perbaikan kecil tiap bulan.",
    price: "Rp300rb/bln",
    icon: "wrench",
  },
];

export const projects = [
  {
    name: "Amrit Palace",
    kind: "Website Resto",
    desc: "Landing resto fine dining: menu, testimoni, reservasi WhatsApp.",
    tags: ["React", "Tailwind", "Indonesia"],
    url: "https://kokoyweb-restaurant.vercel.app/",
    img: "/shots/resto.jpg",
    alt: "Tampilan website Amrit Palace",
  },
  {
    name: "Senyum+",
    kind: "Website Klinik Gigi",
    desc: "Landing klinik: layanan, tarif transparan, booking konsultasi.",
    tags: ["React", "Tailwind", "Indonesia"],
    url: "https://kokoyweb-dental.vercel.app/",
    img: "/shots/dental.jpg",
    alt: "Tampilan website Senyum+",
  },
  {
    name: "GlowUp Studio",
    kind: "Website Salon",
    desc: "Landing salon: galeri layanan, harga, booking online.",
    tags: ["React", "Tailwind", "Indonesia"],
    url: "https://kokoyweb-salon.vercel.app/",
    img: "/shots/salon.jpg",
    alt: "Tampilan website GlowUp Studio",
  },
];

export const proses = [
  {
    name: "Diskusi",
    desc: "Ceritakan bisnismu via chat, gratis tanpa komitmen.",
  },
  {
    name: "Desain",
    desc: "Terima mockup halaman utama dalam 3 hari.",
  },
  {
    name: "Development",
    desc: "Web dibangun, bisa dipantau progresnya.",
  },
  {
    name: "Serah Terima",
    desc: "Live, panduan kelola, garansi revisi 14 hari.",
  },
];

export const testimonials = [
  {
    quote: "Web resto selesai seminggu. Reservasi WhatsApp langsung ramai.",
    name: "Pemilik Resto",
    role: "Klien Amrit Palace",
    initials: "AP",
  },
  {
    quote: "Tarif jelas di web bikin pasien datang sudah yakin.",
    name: "Pemilik Klinik",
    role: "Klien Senyum+",
    initials: "S+",
  },
  {
    quote: "Booking online jalan, antrean kasir berkurang banyak.",
    name: "Pemilik Salon",
    role: "Klien GlowUp Studio",
    initials: "GS",
  },
];
