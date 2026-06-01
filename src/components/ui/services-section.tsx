"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GlareCard } from "@/components/ui/glare-card";

const services = [
  {
    number: "01",
    slug: "estrategia-de-negocios",
    title: "Estrategia de Negocios",
    subtitle: "Modelos · Competitividad · Expansión",
    description:
      "El modelo de negocio que te trajo hasta aquí no es el que te llevará al siguiente nivel. Construimos el sistema estratégico completo: modelo, arquitectura comercial y estrategia de crecimiento integrados.",
    image: "/fotos-servicios/Servicio-1.jpg",
  },
  {
    number: "02",
    slug: "investigacion-aplicada",
    title: "Investigación Aplicada",
    subtitle: "Inteligencia · Mercado · Análisis",
    description:
      "Una decisión estratégica sin inteligencia de mercado es una apuesta. Construimos análisis diseñados para responder preguntas estratégicas concretas, no reportes que nadie usa.",
    image: "/fotos-servicios/Servicio-2.jpg",
  },
  {
    number: "03",
    slug: "excelencia-operacional",
    title: "Excelencia Operacional",
    subtitle: "Procesos · Eficiencia · Escalabilidad",
    description:
      "Las empresas no se estancan por falta de talento, sino porque su sistema operativo no fue diseñado para escalar. Construimos la arquitectura de procesos que hace posible el siguiente nivel.",
    image: "/fotos-servicios/Servicio-3.jpg",
  },
  {
    number: "04",
    slug: "finanzas-corporativas",
    title: "Finanzas Corporativas",
    subtitle: "Capital · Inversión · Sostenibilidad",
    description:
      "No basta con gestionar las finanzas. Diseñamos la arquitectura financiera que hace sostenible el tamaño proyectado: capital, valoración de negocio y estrategia para institucionalización y transiciones generacionales.",
    image: "/fotos-servicios/Servicio-4.jpg",
  },
  {
    number: "05",
    slug: "cultura-organizacional",
    title: "Cultura Organizacional",
    subtitle: "Arquitectura · Estrategia · Desempeño",
    description:
      "La diferencia entre una empresa que escala y una que se estanca no aparece en los estados financieros: está en la cultura. La tratamos como variable estratégica del modelo de negocio, no como iniciativa de bienestar.",
    image: "/fotos-servicios/Servicio-5.jpg",
  },
];

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[number];
  index: number;
  inView: boolean;
}) {
  const firstSentence = service.description.split('. ')[0] + '.';
  const shortSubtitle = service.subtitle.split(' · ').slice(0, 2).join(' · ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
      className="flex justify-center"
    >
      <a href={`/servicios/${service.slug}`} className="w-full block">
        <GlareCard
          containerClassName="w-full [aspect-ratio:4/3] min-h-[280px]"
          className="relative overflow-hidden"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 420px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
          <div className="absolute left-5 top-5 flex flex-col gap-0.5 z-10">
            <span className="text-[13px] font-black tracking-[0.22em] text-white drop-shadow-[0_0_6px_rgba(38,192,207,1)] [text-shadow:0_0_8px_rgba(38,192,207,0.9),0_1px_3px_rgba(0,0,0,0.8)]">
              {service.number}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="mb-1 text-[10px] font-medium tracking-wider text-boson-accent uppercase truncate sm:hidden lg:block">
              {service.subtitle}
            </p>
            <p className="mb-1 text-[10px] font-medium tracking-wider text-boson-accent uppercase truncate hidden sm:block lg:hidden">
              {shortSubtitle}
            </p>
            <h3 className="mb-2 text-sm font-black uppercase leading-tight tracking-wide text-white">
              {service.title}
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-white/60 sm:hidden lg:block">
              {service.description}
            </p>
            <p className="mb-4 text-xs leading-relaxed text-white/60 hidden sm:block lg:hidden">
              {firstSentence}
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-boson-accent uppercase">
              Ver servicio
              <HiOutlineArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </GlareCard>
      </a>
    </motion.div>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-boson-bg-soft py-24" id="servicios">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-black tracking-[0.25em] text-boson-accent uppercase"
          >
            5 sistemas estratégicos de negocio. No son áreas aisladas. Son partes de un mismo sistema.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl font-light leading-tight text-boson-heading md:text-5xl"
          >
            Ámbitos de{" "}
            <strong className="font-black block">intervención estratégica</strong>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-boson-body"
          >
            Bosón Ingeniería Estratégica de Negocios interviene las cinco dimensiones que determinan si una organización puede crecer
            con consistencia. No recomendamos estrategias. Construimos los sistemas que las hacen funcionar.
          </motion.p>
        </div>

        {/* ── Cards: row 1 (3) + row 2 (2 centered) ── */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.number} service={service} index={i} inView={inView} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mx-auto sm:w-2/3">
            {services.slice(3).map((service, i) => (
              <ServiceCard key={service.number} service={service} index={i + 3} inView={inView} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
