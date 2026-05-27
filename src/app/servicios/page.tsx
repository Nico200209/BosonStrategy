import type { Metadata } from "next";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { ServiciosPageContent } from "@/components/ui/servicios-page-content";

export const metadata: Metadata = {
  title: "Servicios | Estrategia, Operaciones, Finanzas y Cultura",
  description:
    "Cinco ámbitos de intervención estratégica: Estrategia de Negocios, Investigación Aplicada, Excelencia Operacional, Finanzas Corporativas y Cultura Organizacional. Diseñamos sistemas que convierten la estrategia en ejecución real.",
  keywords: [
    "servicios consultoría estratégica",
    "estrategia de negocios República Dominicana",
    "investigación aplicada de mercado",
    "excelencia operacional empresas",
    "finanzas corporativas Santo Domingo",
    "cultura organizacional empresas",
    "sistemas estratégicos de negocio",
    "consultoría empresarial Caribe",
    "ingeniería estratégica servicios",
    "transformación organizacional",
  ],
  openGraph: {
    title: "Servicios | Bosón Ingeniería Estratégica de Negocios",
    description:
      "Cinco ámbitos de intervención estratégica: Estrategia de Negocios, Investigación Aplicada, Excelencia Operacional, Finanzas Corporativas y Cultura Organizacional.",
    url: "https://www.bosonstrategy.com/servicios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Servicios de Bosón Ingeniería Estratégica de Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | Bosón Ingeniería Estratégica de Negocios",
    description:
      "Cinco ámbitos de intervención estratégica para convertir la estrategia en ejecución real.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.bosonstrategy.com/servicios",
  },
};

const serviciosJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.bosonstrategy.com/servicios/#webpage",
    url: "https://www.bosonstrategy.com/servicios",
    name: "Servicios | Bosón Ingeniería Estratégica de Negocios",
    description:
      "Cinco ámbitos de intervención estratégica: Estrategia de Negocios, Investigación Aplicada, Excelencia Operacional, Finanzas Corporativas y Cultura Organizacional.",
    isPartOf: { "@id": "https://www.bosonstrategy.com/#website" },
    about: { "@id": "https://www.bosonstrategy.com/#organization" },
    inLanguage: "es-DO",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bosonstrategy.com" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bosonstrategy.com/servicios" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de Bosón Ingeniería Estratégica de Negocios",
    description: "Cinco ámbitos de intervención estratégica para organizaciones en República Dominicana y el Caribe.",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Estrategia de Negocios",
          url: "https://www.bosonstrategy.com/servicios/estrategia-de-negocios",
          description: "Diseño de modelos de negocio, estrategia competitiva, expansión de mercados y arquitectura comercial integrada.",
          provider: { "@id": "https://www.bosonstrategy.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Investigación Aplicada",
          url: "https://www.bosonstrategy.com/servicios/investigacion-aplicada",
          description: "Inteligencia de mercado, análisis competitivo y estudios de factibilidad que respaldan decisiones estratégicas.",
          provider: { "@id": "https://www.bosonstrategy.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Excelencia Operacional",
          url: "https://www.bosonstrategy.com/servicios/excelencia-operacional",
          description: "Arquitectura de procesos, modelos operativos escalables e indicadores de desempeño para organizaciones en crecimiento.",
          provider: { "@id": "https://www.bosonstrategy.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Finanzas Corporativas",
          url: "https://www.bosonstrategy.com/servicios/finanzas-corporativas",
          description: "Estructuras de capital, valoración de empresas y estrategia financiera para institucionalización y transición generacional.",
          provider: { "@id": "https://www.bosonstrategy.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Cultura Organizacional",
          url: "https://www.bosonstrategy.com/servicios/cultura-organizacional",
          description: "Diseño de arquitectura cultural de alto desempeño alineada a la estrategia y el modelo de negocio.",
          provider: { "@id": "https://www.bosonstrategy.com/#organization" },
        },
      },
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {serviciosJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
      <section className="relative flex min-h-[360px] items-end overflow-hidden bg-boson-primary">
        <Image
          src="/fotografias/edificio-moderno.jpg"
          alt="Servicios estratégicos de Bosón Ingeniería Estratégica de Negocios en República Dominicana"
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
    </>
  );
}
