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
  return {
    title: service.name,
    description: service.tagline,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} — Bosón Ingeniería Estratégica de Negocios`,
      description: service.tagline,
      url: `https://www.bosonstrategy.com/servicios/${service.slug}`,
    },
    alternates: {
      canonical: `https://www.bosonstrategy.com/servicios/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

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

      {/* ── Animated service content ── */}
      <ServicePageContent service={service} />

      {/* ── Footer ── */}
      <FooterSection />
    </main>
  );
}
