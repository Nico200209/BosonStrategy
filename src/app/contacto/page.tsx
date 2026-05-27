import type { Metadata } from "next";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { ContactPageContent } from "@/components/ui/contact-page-content";

export const metadata: Metadata = {
  title: "Contacto | Agenda una Consulta Estratégica",
  description:
    "Contáctanos y agenda una conversación con nuestro equipo en Santo Domingo, República Dominicana. Cuéntanos el desafío estratégico de tu organización y definamos el punto de partida.",
  keywords: [
    "contacto Bosón Ingeniería Estratégica",
    "consulta estratégica República Dominicana",
    "consultoría empresarial Santo Domingo",
    "agenda consulta estrategia negocios",
    "contactar firma consultoría Caribe",
    "Av. Sarasota Santo Domingo consultoría",
  ],
  openGraph: {
    title: "Contacto | Bosón Ingeniería Estratégica de Negocios",
    description:
      "Agenda una conversación con nuestro equipo en Santo Domingo. Cuéntanos el desafío estratégico de tu organización y definamos el punto de partida.",
    url: "https://www.bosonstrategy.com/contacto",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contacto | Bosón Ingeniería Estratégica de Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Bosón Ingeniería Estratégica de Negocios",
    description:
      "Agenda una conversación con nuestro equipo. Cuéntanos el desafío estratégico de tu organización.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.bosonstrategy.com/contacto",
  },
};

const contactoJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.bosonstrategy.com/contacto/#webpage",
  url: "https://www.bosonstrategy.com/contacto",
  name: "Contacto | Bosón Ingeniería Estratégica de Negocios",
  description:
    "Agenda una conversación con el equipo de Bosón Ingeniería Estratégica de Negocios en Santo Domingo, República Dominicana.",
  isPartOf: { "@id": "https://www.bosonstrategy.com/#website" },
  about: { "@id": "https://www.bosonstrategy.com/#organization" },
  inLanguage: "es-DO",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.bosonstrategy.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contacto",
        item: "https://www.bosonstrategy.com/contacto",
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    "@id": "https://www.bosonstrategy.com/#organization",
    name: "Bosón Ingeniería Estratégica de Negocios",
    email: "bosoninfo@bosonstrategy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Sarasota N° 55, Ensanche Bella Vista",
      addressLocality: "Santo Domingo",
      addressRegion: "Distrito Nacional",
      addressCountry: "DO",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    contactPoint: {
      "@type": "ContactPoint",
      email: "bosoninfo@bosonstrategy.com",
      contactType: "customer service",
      availableLanguage: "Spanish",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactoJsonLd) }}
      />
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
      <section className="relative flex min-h-[320px] items-end overflow-hidden bg-boson-primary">
        <Image
          src="/fotografias/oficina-blanca-3.jpeg"
          alt="Oficinas de Bosón Ingeniería Estratégica de Negocios en Santo Domingo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-boson-primary/72" />
        {/* Turquoise bottom accent */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-boson-accent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-24">
          <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-boson-accent uppercase">
            Bosón Ingeniería Estratégica de Negocios
          </p>
          <h1 className="text-5xl font-light leading-tight text-white md:text-6xl">
            <strong className="font-black">Contacto</strong>
          </h1>
          {/* Breadcrumb */}
          <div className="mt-5 flex items-center gap-2 text-[11px] text-white/40">
            <a href="/" className="transition-colors hover:text-white/70">Inicio</a>
            <span>/</span>
            <span className="text-white/70">Contacto</span>
          </div>
        </div>
      </section>

      {/* ── Form + Info + Map ── */}
      <ContactPageContent />

      {/* ── Footer ── */}
      <FooterSection />
    </main>
    </>
  );
}
