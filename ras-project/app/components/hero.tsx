// app/components/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./layout/Container";
import { PawPrint, HeartHandshake, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative bg-stone-900 overflow-hidden">
            {/* Fondo como imagen optimizada con Next */}
            <Image
                src="/hero-banner.webp"
                alt="Refugio CRA - Centro de Rescate Animal"
                fill
                priority
                className="object-cover"
                aria-hidden="true"
            />

            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-stone-900/60" />

            <Container className="relative z-10 py-8 sm:py-12 lg:py-16">
                {/* Contenido principal: texto + mock */}
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Texto */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 mb-4">
                            <PawPrint className="h-4 w-4" />
                            <span>CRA – Centro de Rescate Animal</span>
                        </div>

                        {/* Propuesta de valor */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Adopciones{" "}
                            <span className="text-orange-400">responsables</span>{" "} y {" "}
                            <span className="text-orange-400">transparentes</span>{" "}
                            con el acompañamiento que necesitas.
                        </h1>

                        {/* Descripción corta del refugio */}
                        <p className="mt-4 text-sm md:text-base text-stone-200 max-w-xl">
                            En CRA rescatamos, cuidamos y acompañamos a perros y gatos en
                            situación de abandono, buscando que cada adopción sea
                            responsable, transparente y con el apoyo básico que necesitas
                            para dar el siguiente paso.
                        </p>

                        {/* CTAs principales */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="#mascotas"
                                className="inline-flex items-center justify-center rounded-full bg-orange-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition"
                            >
                                Quiero adoptar
                            </Link>

                            <Link   
                                href="#como-ayudar"
                                className="inline-flex items-center justify-center rounded-full border border-stone-200/60 bg-white px-6 py-2.5 text-sm font-semibold  hover:bg-white/90 transition"
                            >
                                <HeartHandshake className="h-4 w-4 mr-2 text-rose-400" />
                                Quiero ayudar
                            </Link>
                        </div>

                        {/* Sellito de confianza */}
                        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-stone-200">
                            <span className="inline-flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                                Compromiso con la adopción responsable y el bienestar animal.
                            </span>
                        </div>
                    </motion.div>

                    {/* Imagen / Mock */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <div className="relative rounded-3xl bg-white shadow-lg border border-stone-200 p-5 sm:p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                                        Refugio activo
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-stone-900">
                                        +100 peluditos rescatados
                                    </p>
                                    <p className="mt-1 text-xs text-stone-600 max-w-2xs lg:max-w-2xs ">
                                        Cuidando y buscando hogar para perros y gatos en
                                        situación de abandono.
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                                        🐶 🐱 Lista de adopción
                                    </span>
                                    <span className="text-center gap-2 rounded-full bg-rose-400/10 px-3 py-1 text-xs font-medium text-rose-500">
                                        ❤ Cambia una vida hoy
                                    </span>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-3">
                                <div className="relative h-20 overflow-hidden rounded-xl border border-stone-200">
                                    <Image
                                        src="/hero-animal-1.jpg"
                                        alt="Animal en adopción"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-20 overflow-hidden rounded-xl border border-stone-200">
                                    <Image
                                        src="/hero-animal-2.jpg"
                                        alt="Animal en adopción"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-20 overflow-hidden rounded-xl border border-stone-200">
                                    <Image
                                        src="/hero-animal-3.jpg"
                                        alt="Animal en adopción"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <p className="mt-4 text-[11px] text-stone-500">
                                *Las imágenes muestran algunos de los animales que representan
                                el trabajo del refugio y nuestro compromiso con la adopción
                                responsable.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Eslogan + ODS SOLO AQUÍ */}
                <motion.div
                    className="mt-8 rounded-2xl bg-amber-600 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white shadow-md"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div>
                            <p className="font-semibold">
                                “Por ellos, por nosotros, por la Tierra”
                            </p>
                            <p className="mt-1 text-[11px] sm:text-xs text-white/90 max-w-xl">
                                CRA integra bienestar animal, comunidad y sostenibilidad,
                                alineándose con los Objetivos de Desarrollo Sostenible para
                                construir una convivencia más consciente.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium">
                                <Leaf className="h-3.5 w-3.5" />
                                <span>ODS 3 · 11 · 12</span>
                            </div>
                            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium">
                                Compromiso con la vida y el entorno
                            </span>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
