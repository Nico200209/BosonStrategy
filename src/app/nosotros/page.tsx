import { NosotrosIntroSection } from "@/components/ui/nosotros-intro-section";
import { NosotrosFilosofiaSection } from "@/components/ui/nosotros-filosofia-section";
// import { NosotrosCEOSection } from "@/components/ui/nosotros-ceo-section"; // Hidden temporalmente
import { NosotrosTeamSection } from "@/components/ui/nosotros-team-section";
import { NosotrosCreenciasSection } from "@/components/ui/nosotros-creencias-section";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce quiénes somos, nuestra misión, visión y los pilares que guían cada intervención en Bosón Ingeniería Estratégica de Negocios.",
  openGraph: {
    title: "Nosotros — Bosón Ingeniería Estratégica de Negocios",
    description:
      "Bosón no es una firma que opina sobre el negocio. Es una firma que diseña el sistema que lo hace funcionar.",
    url: "https://www.bosonstrategy.com/nosotros",
  },
  alternates: {
    canonical: "https://www.bosonstrategy.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <main>
      {/* ── Top strip ── */}
      <div className="bg-boson-primary-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-0 px-6 py-2 md:gap-0">
          <a
            href="mailto:bosoninfo@bosonstrategy.com"
            className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] text-white/60 transition-colors hover:text-boson-accent-light"
          >
            <MdOutlineEmail className="h-3.5 w-3.5" />
            bosoninfo@bosonstrategy.com
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
      <section className="relative flex min-h-[340px] items-end overflow-hidden bg-boson-primary">
        <Image
          src="/fotografias/oficina-blanca-2.jpeg"
          alt="Bosón Ingeniería Estratégica de Negocios — equipo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-boson-primary/70" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-boson-accent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-24">
          <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-boson-accent uppercase">
            Bosón Ingeniería Estratégica de Negocios
          </p>
          <h1 className="text-5xl font-light leading-tight text-white md:text-6xl">
            Sobre <strong className="font-black">nosotros</strong>
          </h1>
          <div className="mt-5 flex items-center gap-2 text-[11px] text-white/40">
            <a href="/" className="hover:text-white/70 transition-colors">Inicio</a>
            <span>/</span>
            <span className="text-white/70">Nosotros</span>
          </div>
        </div>
      </section>

      <NosotrosIntroSection />
      <NosotrosFilosofiaSection />
      {/* NosotrosCEOSection — oculto temporalmente, descomentar cuando se necesite */}
      {/* <NosotrosCEOSection /> */}
      <NosotrosCreenciasSection />
      <NosotrosTeamSection />

      <FooterSection />
    </main>
  );
}
