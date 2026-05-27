import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/hero-section";
import { ValuesSection } from "@/components/ui/values-section";
import { ServicesSection } from "@/components/ui/services-section";
import { AboutSection } from "@/components/ui/about-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FooterSection } from "@/components/ui/footer-section";

export const metadata: Metadata = {
  title: {
    absolute:
      "Bosón Ingeniería Estratégica de Negocios | Consultoría Estratégica en República Dominicana",
  },
  description:
    "Bosón convierte la estrategia en ejecución consistente. Diseñamos e implementamos sistemas estratégicos de negocio en República Dominicana: estrategia, operaciones, finanzas, cultura organizacional e investigación aplicada.",
  keywords: [
    "ingeniería estratégica de negocios",
    "consultoría estratégica República Dominicana",
    "estrategia empresarial Santo Domingo",
    "excelencia operacional",
    "finanzas corporativas",
    "cultura organizacional",
    "investigación aplicada de mercado",
    "consultoría empresarial Caribe",
    "transformación organizacional",
    "sistemas estratégicos de negocio",
    "inteligencia de mercado",
    "crecimiento empresarial estructurado",
    "Bosón estrategia",
  ],
  alternates: {
    canonical: "https://www.bosonstrategy.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.bosonstrategy.com",
    title:
      "Bosón | Consultoría Estratégica en República Dominicana",
    description:
      "Convertimos la estrategia en ejecución consistente. Diseñamos sistemas estratégicos de negocio para organizaciones en República Dominicana y el Caribe.",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.bosonstrategy.com/#webpage",
  url: "https://www.bosonstrategy.com",
  name: "Bosón Ingeniería Estratégica de Negocios",
  description:
    "Firma líder en ingeniería estratégica de negocios en República Dominicana. Diseñamos e implementamos sistemas estratégicos que convierten la estrategia en ejecución consistente.",
  isPartOf: {
    "@id": "https://www.bosonstrategy.com/#website",
  },
  about: {
    "@id": "https://www.bosonstrategy.com/#organization",
  },
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
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.bosonstrategy.com/#service",
  name: "Bosón Ingeniería Estratégica de Negocios",
  url: "https://www.bosonstrategy.com",
  email: "bosoninfo@bosonstrategy.com",
  description:
    "Firma especializada en ingeniería estratégica de negocios. Ofrecemos estrategia de negocios, investigación aplicada, excelencia operacional, finanzas corporativas y cultura organizacional.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Sarasota N° 55, Ensanche Bella Vista",
    addressLocality: "Santo Domingo",
    addressRegion: "Distrito Nacional",
    addressCountry: "DO",
  },
  areaServed: ["República Dominicana", "El Caribe", "Centroamérica"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Ingeniería Estratégica",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estrategia de Negocios",
          url: "https://www.bosonstrategy.com/servicios/estrategia-de-negocios",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investigación Aplicada",
          url: "https://www.bosonstrategy.com/servicios/investigacion-aplicada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Excelencia Operacional",
          url: "https://www.bosonstrategy.com/servicios/excelencia-operacional",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Finanzas Corporativas",
          url: "https://www.bosonstrategy.com/servicios/finanzas-corporativas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cultura Organizacional",
          url: "https://www.bosonstrategy.com/servicios/cultura-organizacional",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/boson-estrategia-negocio",
    "https://www.instagram.com/bosonstrategy/",
    "https://web.facebook.com/profile.php?id=61588138097886",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <main>
        <HeroSection />
        <ValuesSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </>
  );
}
