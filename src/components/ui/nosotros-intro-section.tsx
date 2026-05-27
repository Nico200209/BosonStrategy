"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const features = [
  {
    number: "01",
    title: "Nuestra Misión",
    description:
      "Convertimos la estrategia en ejecución consistente, desarrollando e implementando sistemas estratégicos de negocio que permiten a las organizaciones operar mejor, crecer con estructura y escalar con consistencia.",
  },
  {
    number: "02",
    title: "Nuestra Visión",
    description:
      "Ser la firma líder en el Caribe en ingeniería estratégica de negocios, reconocida por convertir el crecimiento empresarial en sistemas sólidos, escalables y consistentes.",
  },
];

export function NosotrosIntroSection() {
  return (
    <section className="bg-boson-primary overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

          {/* ── Image panel ── */}
          <div className="relative hidden min-h-[340px] lg:block lg:min-h-0">
            <Image
              src="/fotografias/oficina-blanca-1.jpeg"
              alt="Bosón Ingeniería Estratégica de Negocios"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-boson-primary/30" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-boson-primary/90 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-boson-accent" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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

          {/* ── Content panel ── */}
          <div className="flex flex-col justify-center px-10 py-20 lg:px-16">

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-xs font-bold tracking-[0.25em] text-boson-accent uppercase"
            >
              Sobre Bosón
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 text-4xl font-light leading-tight text-white lg:text-5xl"
            >
              No somos consultores.{" "}
              <strong className="font-black">Somos socios de crecimiento.</strong>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="mb-3 text-base leading-relaxed text-white/70"
            >
              Las empresas crecen, pero sin rediseñar el sistema que las sostiene.
              Por eso, muchas estrategias no se ejecutan con consistencia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="mb-10 text-sm leading-relaxed text-white/50"
            >
              Bosón existe para convertir la estrategia en ejecución consistente, desarrollando e implementando sistemas que permiten a las organizaciones operar mejor, crecer con estructura y escalar.
              <br /><br />
              Más que consultoría tradicional, Bosón integra estrategia, operación, inteligencia y visión sistémica para construir sistemas que funcionan en la realidad del negocio y fortalecen la capacidad de crecimiento de las organizaciones.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mb-10 h-px w-full bg-white/10"
            />

            <div className="mb-10 grid grid-cols-1 gap-0 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.number}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.75 + i * 0.15 }}
                  className="flex gap-4 border-b border-white/8 py-5 pr-6 last:border-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-white/8 sm:[&:nth-child(even)]:pl-6"
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

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
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
