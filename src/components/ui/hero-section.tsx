import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { HeroContent } from "@/components/ui/hero-content";

export function HeroSection() {
  return (
    <>
      {/* ── Slim contact strip ── */}
      <div className="bg-boson-primary-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-0 px-6 py-2 md:gap-0">
          <a href="mailto:contacto@bosonstrategy.com" className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] text-white/60 transition-colors hover:text-boson-accent-light">
            <MdOutlineEmail className="h-3.5 w-3.5" />
            contacto@bosonstrategy.com
          </a>
          <span className="flex items-center gap-1.5 pl-4 text-[11px] text-white/40">
            <IoLocationOutline className="h-3.5 w-3.5" />
            Santo Domingo, RD
          </span>
        </div>
      </div>

      {/* ── Navbar with logo (client — only interactive part) ── */}
      <nav className="sticky top-0 z-50 bg-boson-primary shadow-md" aria-label="Navegación principal">
        <NavbarClient />
      </nav>

      {/* ── Hero (background image server-rendered) ─────────── */}
      <section id="inicio" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <Image
          src="/fotografias/edificio-moderno.jpg"
          alt="Bosón Ingeniería Estratégica de Negocios — Santo Domingo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-boson-primary/70" />

        {/* Client: animated text + social icons */}
        <HeroContent />
      </section>
    </>
  );
}
