// app/components/About.tsx
"use client";

import Link from "next/link";
import { Section } from "./layout/Section";
import { HeartHandshake, PawPrint, Users } from "lucide-react";

export function About() {
    return (
        <Section
            id="sobre-nosotros"
            eyebrow="¿Quiénes somos?"
            title="Un refugio temporal para nuevos comienzos."
            description="En el CRA rescatamos y cuidamos perros y gatos en situación de calle, y los conectamos con familias responsables dispuestas a darles un hogar."
            className="bg-white"
        >
            <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr] items-center">
                {/* Columna izquierda: mini cards de pilares */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-9 w-9 rounded-xl bg-rose-100 flex items-center justify-center">
                                <HeartHandshake className="h-4 w-4 text-rose-600" />
                            </div>
                            <h3 className="text-base font-semibold text-stone-900">
                                Bienestar primero
                            </h3>
                        </div>
                        <p className="text-sm text-stone-600">
                            Rescate, atención básica y cuidado responsable antes de cada
                            adopción.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-9 w-9 rounded-xl bg-orange-100 flex items-center justify-center">
                                <PawPrint className="h-4 w-4 text-orange-700" />
                            </div>
                            <h3 className="text-base font-semibold text-stone-900">
                                Adopciones responsables
                            </h3>
                        </div>
                        <p className="text-sm text-stone-600">
                            Buscamos el mejor match entre cada animal y la familia que lo va a
                            recibir.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4 shadow-sm sm:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                                <Users className="h-4 w-4 text-emerald-700" />
                            </div>
                            <h3 className="text-base font-semibold text-stone-900">
                                Comunidad y transparencia
                            </h3>
                        </div>
                        <p className="text-sm text-stone-600">
                            Queremos que la comunidad se involucre: voluntariado, donaciones y
                            comunicación clara sobre el impacto de cada ayuda.
                        </p>
                    </div>
                </div>

                {/* Columna izquierda: texto breve + CTA */}
                <div className="space-y-5">
                    <p className="text-sm sm:text-base text-stone-700">
                        Si quieres conocer mejor cómo pensamos, cómo trabajamos y qué nos
                        diferencia de otros refugios, puedes explorar nuestra historia,
                        misión, visión y valores en la página dedicada de{" "}
                        <strong>Sobre nosotros</strong>.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/sobre-nosotros"
                            className="inline-flex items-center gap-2 rounded-full bg-orange-700 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-orange-600 transition"
                        >
                            <HeartHandshake className="h-4 w-4" />
                            Conocer más sobre el CRA
                        </Link>

                        <p className="text-[11px] sm:text-xs text-stone-500">
                            Pensado para quienes desean profundizar en nuestro trabajo.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
