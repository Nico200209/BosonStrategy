import type { Metadata } from "next";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { ServiciosPageContent } from "@/components/ui/servicios-page-content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Cinco ámbitos de intervención estratégica: Estrategia de Negocios, Investigación Aplicada, Excelencia Operacional, Finanzas Corporativas y Cultura Organizacional.",
  openGraph: {
    title: "Servicios — Bosón Ingeniería Estratégica de Negocios",
    description:
      "Diseñamos sistemas estratégicos de negocio que permiten a las organizaciones operar mejor, crecer con estructura y escalar con consistencia.",
    url: "https://www.bosonstrategy.com/servicios",
  },
  alternates: {
    canonical: "https://www.bosonstrategy.com/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <main>
      {/* ── Top strip ── */}
      <div className="bg-boson-primary-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-0 px-6 py-2 md:gap-0">
          <a
            href="mailto:mpaetz@bosonstrategy.com"
            className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] text-white/60 transition-colors hover:text-boson-accent-light"
          >
            <MdOutlineEmail className="h-3.5 w-3.5" />
            mpaetz@bosonstrategy.com
          </a>
          <span className="flex items-center gap-1.5 pl-4 text-[11px] text-white/40">
            <IoLocationOutline className="h-3.5 w-3.5" />
            Santo Domingo, RD
          </span>
        </div>
      </div>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-boson-primary shadow-md" aria-label="Navegación principal">
        <NavbarClient />
      </nav>

      {/* ── Hero banner ── */}
      <section className="relative flex min-h-[360px] items-end overflow-hidden bg-boson-primary">
        <Image
          src="/fotografias/edificio-moderno.jpg"
          alt="Servicios estratégicos — Bosón Ingeniería Estratégica de Negocios"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-boson-primary/76" />
        {/* Turquoise bottom accent */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-boson-accent" />

        {/* Decorative ghost text */}
        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[160px] font-black leading-none text-white/[0.03] lg:text-[220px]">
          05
        </span>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-28">
          <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-boson-accent uppercase">
            Bosón Ingeniería Estratégica de Negocios
          </p>
          <h1 className="mb-5 text-5xl font-light leading-tight text-white md:text-6xl">
            Nuestros <strong className="font-black">Servicios</strong>
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/40">
            <a href="/" className="transition-colors hover:text-white/70">Inicio</a>
            <span>/</span>
            <span className="text-white/70">Nuestros Servicios</span>
          </div>
        </div>
      </section>

      {/* ── Page content ── */}
      <ServiciosPageContent />

      {/* ── Footer ── */}
      <FooterSection />
    </main>
  );
}
