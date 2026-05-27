import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { NavbarClient } from "@/components/ui/navbar-client";
import { FooterSection } from "@/components/ui/footer-section";
import { ServicePageContent } from "@/components/ui/service-page-content";
import { getServiceBySlug, services } from "@/lib/services-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const description = `${service.tagline} Bosón Ingeniería Estratégica de Negocios, República Dominicana.`;
  const ogTitle = `${service.name} | Bosón Ingeniería Estratégica de Negocios`;
  const url = `https://www.bosonstrategy.com/servicios/${service.slug}`;

  return {
    title: `${service.name} | ${service.subtitle}`,
    description,
    keywords: [
      ...service.keywords,
      "Bosón Ingeniería Estratégica de Negocios",
      "consultoría estratégica República Dominicana",
      "ingeniería de negocios Caribe",
    ],
    openGraph: {
      title: ogTitle,
      description,
      url,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `https://www.bosonstrategy.com/servicios/${service.slug}`;
  const description = `${service.tagline} Bosón Ingeniería Estratégica de Negocios, República Dominicana.`;

  const servicePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: `${service.name} | Bosón Ingeniería Estratégica de Negocios`,
    description,
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
          name: "Servicios",
          item: "https://www.bosonstrategy.com/servicios",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: url,
        },
      ],
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: service.name,
    url,
    description: service.solutionsIntro ?? description,
    provider: {
      "@id": "https://www.bosonstrategy.com/#organization",
    },
    areaServed: ["República Dominicana", "El Caribe", "Centroamérica"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Soluciones de ${service.name}`,
      itemListElement: service.solutions.map((solution, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: solution.title,
          description: solution.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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

        {/* ── Animated service content ── */}
        <ServicePageContent service={service} />

        {/* ── Footer ── */}
        <FooterSection />
      </main>
    </>
  );
}
