"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

/* Placeholder team — actualizar con datos reales del equipo Bosón */
const team = [
  {
    name: "Nombre Apellido",
    role: "Fundadora & CEO",
    bio: "Especialista en ingeniería estratégica de negocios. Diseña sistemas que convierten la estrategia en ejecución consistente.",
    image: "/fotos-perfil/foto-perfil-01.png",
    linkedin: "https://www.linkedin.com/company/boson-estrategia-negocios",
    accent: true,
  },
  {
    name: "Nombre Apellido",
    role: "Estrategia de Negocios",
    bio: "Especialista en modelos de negocio, estrategia competitiva y expansión de mercados en el Caribe y Centroamérica.",
    image: "/fotos-perfil/foto-perfil-02.png",
    linkedin: "#",
    accent: false,
  },
  {
    name: "Nombre Apellido",
    role: "Excelencia Operacional",
    bio: "Experto en arquitectura de procesos, rediseño de cadena de valor e indicadores de desempeño organizacional.",
    image: "/fotos-perfil/foto-perfil-03.png",
    linkedin: "#",
    accent: false,
  },
  {
    name: "Nombre Apellido",
    role: "Finanzas Corporativas",
    bio: "Especialista en estructuras de capital, valoración de empresas y finanzas para grupos empresariales y holdings.",
    image: "/fotos-perfil/foto-perfil-04.png",
    linkedin: "#",
    accent: false,
  },
];

function TeamCard({
  member,
  index,
  inView,
}: {
  member: (typeof team)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-default overflow-hidden shadow-md ring-1 ring-black/8"
    >
      {/* ── Photo ── */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </motion.div>

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-boson-primary via-boson-primary/40 to-transparent" />

        {/* Hover overlay */}
        <motion.div
          initial={{ y: "100%" }}
          whileHover={{ y: "0%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col justify-end bg-boson-primary/90 p-6"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-boson-accent" />

          <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-boson-accent uppercase">
            {member.role}
          </p>
          <p className="mb-5 text-sm leading-relaxed text-white/70">
            {member.bio}
          </p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 border border-white/20 px-4 py-2 text-[10px] font-bold tracking-widest text-white/70 transition-colors hover:border-boson-accent hover:text-boson-accent uppercase"
          >
            <FaLinkedinIn className="h-3 w-3" />
            LinkedIn
          </a>
        </motion.div>

        {/* Accent left border for lead card */}
        {member.accent && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-boson-accent" />
        )}
      </div>

      {/* ── Name block ── */}
      <div className="border-b border-white/10 bg-boson-primary px-5 py-4 transition-colors group-hover:border-boson-accent/40">
        <p className="text-sm font-black tracking-wide text-white">
          {member.name}
        </p>
        <p className="mt-0.5 text-[10px] font-medium tracking-[0.18em] text-boson-accent uppercase">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export function NosotrosTeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="bg-boson-bg-soft overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div ref={ref} className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xs font-bold tracking-[0.25em] text-boson-accent uppercase"
            >
              Las personas detrás de Bosón
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-light leading-tight text-boson-heading md:text-5xl"
            >
              Nuestro{" "}
              <strong className="font-black">equipo</strong>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="text-sm leading-relaxed text-boson-body">
              Un equipo con experiencia profunda en estrategia, operaciones, finanzas y
              cultura organizacional. Cada miembro aporta rigor técnico orientado a
              resultados reales, no a recomendaciones en papel.
            </p>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 h-px w-full bg-boson-heading/15"
            />
          </motion.div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-14 overflow-hidden bg-boson-primary"
        >
          <div className="flex flex-col items-start justify-between gap-6 px-10 py-10 sm:flex-row sm:items-center">
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-[0.22em] text-boson-accent uppercase">
                Únete al equipo
              </p>
              <p className="text-xl font-light text-white">
                ¿Quieres ser parte de{" "}
                <strong className="font-black">nuestro equipo?</strong>
              </p>
            </div>
            <a
              href="/contacto"
              className="inline-flex shrink-0 items-center gap-3 bg-boson-accent px-7 py-3.5 text-xs font-black uppercase tracking-widest text-boson-primary-dark transition-colors hover:bg-boson-accent-hover"
            >
              Contáctanos
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="h-1 w-full bg-boson-accent" />
        </motion.div>

      </div>
    </section>
  );
}
