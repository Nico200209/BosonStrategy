"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const services = [
  { label: "Estrategia de Negocios", href: "/servicios/estrategia-de-negocios" },
  { label: "Investigación Aplicada", href: "/servicios/investigacion-aplicada" },
  { label: "Excelencia Operacional", href: "/servicios/excelencia-operacional" },
  { label: "Finanzas Corporativas", href: "/servicios/finanzas-corporativas" },
  { label: "Cultura Organizacional", href: "/servicios/cultura-organizacional" },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

const socials = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/bosonstrategy/",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61588138097886",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/boson-estrategia-negocios/",
  },
];

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setNewsletterStatus("loading");

    try {
      const formUrl = process.env.NEXT_PUBLIC_MAILERLITE_FORM_URL!;
      const body = new URLSearchParams();
      body.append("fields[email]", email);
      body.append("ml-submit", "1");
      body.append("anticsrf", "true");
      await fetch(formUrl, {
        method: "POST",
        body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      setNewsletterStatus("success");
      setEmail("");
    } catch {
      setNewsletterStatus("error");
    }
  }

  return (
    <footer className="bg-boson-primary-dark text-white">

      {/* ── Newsletter band ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-boson-accent mb-1">
              Insights estratégicos
            </p>
            <h3 className="text-xl font-light text-white">
              Recibe nuestros <strong className="font-black">análisis del mercado</strong>
            </h3>
          </div>
          {newsletterStatus === "success" ? (
            <p className="text-sm font-medium text-boson-accent">
              ¡Listo! Te has suscrito correctamente.
            </p>
          ) : (
            <form
              onSubmit={handleNewsletter}
              className="flex w-full max-w-sm flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  disabled={newsletterStatus === "loading"}
                  className="flex-1 rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-boson-accent focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading"}
                  className="flex items-center gap-2 rounded-sm bg-boson-accent px-5 py-2.5 text-xs font-black uppercase tracking-widest text-boson-primary-dark transition-colors hover:bg-boson-accent-hover whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {newsletterStatus === "loading" ? "..." : "Suscribir"}
                  {newsletterStatus !== "loading" && <HiOutlineArrowRight className="h-3.5 w-3.5" />}
                </button>
              </div>
              {newsletterStatus === "error" && (
                <p className="text-xs text-red-400">Error al suscribirse. Intenta de nuevo.</p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-16">

          {/* Col 1: Brand */}
          <div>
            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/Logos/Logos PNG/RGB - Digital/Blanco y Negro/Blanco-03.png"
                alt="Bosón Ingeniería Estratégica de Negocios"
                width={320}
                height={92}
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="mb-8 text-sm leading-relaxed text-white/55">
              Convertimos la estrategia en ejecución consistente. Desarrollando
              e implementando sistemas estratégicos de negocio que permiten a
              las organizaciones operar mejor, crecer con estructura y escalar
              con consistencia.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/50 transition-all hover:border-boson-accent hover:text-boson-accent"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-boson-accent">
              Servicios
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex gap-2 text-xs text-white/50 transition-colors hover:text-white"
                  >
                    <HiOutlineArrowRight className="mt-[3px] h-3 w-3 shrink-0 self-start text-boson-accent/50 transition-colors group-hover:text-boson-accent" />
                    <span className="leading-relaxed">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-boson-accent">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-boson-accent">
              Contacto
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0 text-boson-accent" />
                <span className="text-xs leading-relaxed text-white/55">
                  Av. Sarasota N° 55, Ensanche Bella Vista.<br />
                  Santo Domingo.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineEnvelope className="h-4 w-4 shrink-0 text-boson-accent" />
                <a
                  href="mailto:bosoninfo@bosonstrategy.com"
                  className="text-xs text-white/55 transition-colors hover:text-white"
                >
                  bosoninfo@bosonstrategy.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Bosón Ingeniería Estratégica de Negocios. Todos los derechos reservados.
          </p>
          <nav className="flex gap-5">
            {["Política de Privacidad", "Términos de Servicio"].map((t) => (
              <a key={t} href="#" className="text-[11px] text-white/30 transition-colors hover:text-white/60">
                {t}
              </a>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}
