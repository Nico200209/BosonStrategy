import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bosonstrategy.com"),
  title: {
    default: "Bosón Ingeniería Estratégica de Negocios",
    template: "%s — Bosón Ingeniería Estratégica de Negocios",
  },
  description:
    "Convertimos la estrategia en ejecución consistente. Firma líder en ingeniería estratégica de negocios en República Dominicana y el Caribe.",
  keywords: [
    "ingeniería estratégica de negocios",
    "consultoría estratégica",
    "estrategia empresarial",
    "excelencia operacional",
    "finanzas corporativas",
    "cultura organizacional",
    "investigación aplicada",
    "consultoría empresarial República Dominicana",
    "transformación organizacional",
    "estrategia operacional",
    "inteligencia de mercado",
    "crecimiento empresarial",
    "escalabilidad empresarial",
    "sistemas empresariales",
  ],
  authors: [{ name: "Bosón Ingeniería Estratégica de Negocios" }],
  creator: "Bosón Ingeniería Estratégica de Negocios",
  publisher: "Bosón Ingeniería Estratégica de Negocios",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://www.bosonstrategy.com",
    siteName: "Bosón Ingeniería Estratégica de Negocios",
    title: "Bosón — Convertimos la estrategia en ejecución consistente",
    description:
      "Firma líder en ingeniería estratégica de negocios en República Dominicana. Estrategia, Investigación Aplicada, Excelencia Operacional, Finanzas Corporativas y Cultura Organizacional.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bosón Ingeniería Estratégica de Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bosón — Ingeniería Estratégica de Negocios",
    description:
      "Convertimos la estrategia en ejecución consistente. República Dominicana.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.bosonstrategy.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bosón Ingeniería Estratégica de Negocios",
  url: "https://www.bosonstrategy.com",
  email: "bosoninfo@bosonstrategy.com",
  description:
    "Firma de ingeniería estratégica de negocios especializada en convertir estrategia en ejecución consistente mediante sistemas operativos para organizaciones en el Caribe y Centroamérica.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Sarasota N° 55, Ensanche Bella Vista",
    addressLocality: "Santo Domingo",
    addressCountry: "DO",
  },
  sameAs: [
    "https://www.linkedin.com/company/boson-estrategia-negocio",
    "https://www.instagram.com/bosonstrategy/",
    "https://web.facebook.com/profile.php?id=61588138097886",
  ],
  knowsAbout: [
    "Estrategia de Negocios",
    "Investigación Aplicada",
    "Excelencia Operacional",
    "Finanzas Corporativas",
    "Cultura Organizacional",
    "Consultoría Estratégica",
    "Ingeniería de Negocios",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
