"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const features = [
  {
    number: "01",
    title: "Ingeniería, no consultoría",
    description:
      "No entregamos recomendaciones. Diseñamos e implementamos sistemas operativos que funcionan en la realidad del negocio.",
  },
  {
    number: "02",
    title: "Pensamiento Sistémico",
    description:
      "Integramos estrategia, operación, finanzas y mercado en un solo sistema coherente. No intervenimos por partes ni por silos.",
  },
  {
    number: "03",
    title: "Inteligencia Aplicada",
    description:
      "Cada decisión tiene sustento en datos y contexto. La investigación no es un módulo adicional — es la base de todo lo que construimos.",
  },
  {
    number: "04",
    title: "Ejecución Real",
    description:
      "Cerramos la brecha entre estrategia y operación. El objetivo no es depender de Bosón — es que el sistema funcione sin nosotros.",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="bg-boson-primary overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

          {/* ── Left: image panel ── */}
          <div className="relative min-h-[340px] lg:min-h-0">
            <Image
              src="/fotografias/oficina-blanca-3.jpeg"
              alt="Bosón Ingeniería Estratégica de Negocios — equipo"
              fill
              className="object-cover"
            />
            {/* Dark tint */}
            <div className="absolute inset-0 bg-boson-primary/30" />
            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-boson-primary/90 to-transparent" />
            {/* Turquoise right border accent */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-boson-accent" />

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <p className="text-xs font-bold tracking-[0.22em] text-boson-accent uppercase mb-1">
                Bosón Ingeniería Estratégica de Negocios
              </p>
              <p className="text-white/80 text-xs leading-relaxed">
                La ingeniería invisible que sostiene a las organizaciones.
              </p>
            </motion.div>
          </div>

          {/* ── Right: content ── */}
          <div className="flex flex-col justify-center px-10 py-20 lg:px-16">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-light leading-tight text-white lg:text-5xl"
            >
              Ingeniería que convierte{" "}
              <strong className="font-black">estrategia en sistema</strong>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mb-3 text-base leading-relaxed text-white/70"
            >
              Bosón Ingeniería Estratégica de Negocios no es una firma que opina sobre el negocio. Es una firma que
              diseña el sistema que lo hace funcionar.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mb-10 text-sm leading-relaxed text-white/50"
            >
              Convertimos la estrategia en ejecución consistente, desarrollando e implementando
              sistemas estratégicos de negocio que permiten a las organizaciones operar mejor,
              crecer con estructura y escalar con consistencia.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 h-px w-full bg-white/10"
            />

            {/* Features */}
            <div className="mb-10 grid grid-cols-1 gap-0 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.number}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="group flex gap-4 border-b border-white/8 py-5 pr-6 last:border-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-white/8 sm:[&:nth-child(even)]:pl-6"
                >
                  <span className="mt-0.5 shrink-0 text-xs font-black tracking-widest text-boson-accent">
                    {f.number}
                  </span>
                  <div>
                    <p className="mb-1 text-xs font-black uppercase tracking-wider text-white">
                      {f.title}
                    </p>
                    <p className="text-xs leading-relaxed text-white/50">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <a
                href="/contacto"
                className="inline-flex items-center gap-3 rounded-sm bg-boson-accent px-6 py-3 text-xs font-black uppercase tracking-widest text-boson-primary-dark transition-colors hover:bg-boson-accent-hover"
              >
                Solicita una consulta estratégica
                <HiOutlineArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
