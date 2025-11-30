// app/components/Hero.tsx
"use client";

import Link from "next/link";
import { Container } from "./layout/Container";
import { PawPrint, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="bg-stone-100">
            <Container className="flex flex-col lg:flex-row items-center gap-10 py-12 sm:py-16 lg:py-20">
                {/* Texto */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 mb-4">
                        <PawPrint className="h-4 w-4" />
                        <span>CRA – Centro de Refugio Animal</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                        Démosles una{" "}
                        <span className="text-orange-700">segunda oportunidad</span>{" "}
                        a los peluditos que más lo necesitan.
                    </h1>

                    <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-xl">
                        En CRA rescatamos, cuidamos y acompañamos a perros y gatos en
                        situación de abandono mientras encuentran un hogar lleno de amor.
                        Este prototipo muestra cómo podemos conectar a más personas con
                        la causa.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="#animales"
                            className="inline-flex items-center justify-center rounded-full bg-orange-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition"
                        >
                            Ver animales en adopción
                        </Link>

                        <Link
                            href="#como-ayudar"
                            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition"
                        >
                            <HeartHandshake className="h-4 w-4 mr-2 text-rose-500" />
                            Cómo puedes ayudar
                        </Link>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-stone-500">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-stone-200">
                            <span className="h-2 w-2 rounded-full bg-rose-400" />
                            Refugio sin fines de lucro
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                            Prototipo académico de Design Thinking
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
                                    +120 peluditos rescatados
                                </p>
                                <p className="mt-1 text-xs text-stone-600">
                                    Cifra demostrativa para el prototipo.
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                                    🐶 🐱 Lista de adopción
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-rose-400/10 px-3 py-1 text-xs font-medium text-rose-500">
                                    ❤ Cambia una vida hoy
                                </span>
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-3">
                            <div className="h-20 rounded-xl bg-stone-100" />
                            <div className="h-20 rounded-xl bg-stone-100" />
                            <div className="h-20 rounded-xl bg-stone-100" />
                        </div>

                        <p className="mt-4 text-[11px] text-stone-500">
                            *Las imágenes son representativas del refugio. En una versión
                            completa se mostrarían fotografías reales de los animales
                            disponibles para adopción.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
