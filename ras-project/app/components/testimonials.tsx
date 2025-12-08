// app/components/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Section } from "./layout/Section";
import {
    Quote,
    ChevronLeft,
    ChevronRight,
    PawPrint,
} from "lucide-react";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    relation: string;
    message: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "María G.",
        role: "Adoptante",
        relation: "Adoptó a un perrito adulto",
        message:
            "Tenía miedo de que un perrito rescatado no se adaptara a mi rutina. En el CRA me explicaron su carácter, su historial y qué podía esperar los primeros días. Me sentí acompañada en todo momento.",
    },
    {
        id: 2,
        name: "Carlos R.",
        role: "Voluntario",
        relation: "Voluntario en fines de semana",
        message:
            "Aprendí sobre cuidado responsable y manejo de casos. El ambiente es humano, organizado y siempre con el bienestar de los peluditos como prioridad.",
    },
    {
        id: 3,
        name: "Daniela M.",
        role: "Padrina",
        relation: "Aporta mensualmente",
        message:
            "Lo que más valoro es la transparencia. Sé cómo se usa mi aporte y recibo actualizaciones del avance de los casos. Eso me da confianza para seguir ayudando.",
    },
    {
        id: 4,
        name: "José L.",
        role: "Adoptante",
        relation: "Adoptó a un gato adulto",
        message:
            "Me explicaron desde el principio el carácter del gato y sus necesidades. La adaptación fue más fácil gracias al acompañamiento que nos dieron.",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    // Cambiar dinámicamente entre 1 o 2 testimonios según el ancho
    useEffect(() => {
        const updateView = () => {
            setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
        };
        updateView();
        window.addEventListener("resize", updateView);
        return () => window.removeEventListener("resize", updateView);
    }, []);

    const totalGroups = Math.ceil(testimonials.length / itemsPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? totalGroups - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === totalGroups - 1 ? 0 : prev + 1
        );
    };

    const visibleTestimonials = testimonials.slice(
        currentIndex * itemsPerView,
        currentIndex * itemsPerView + itemsPerView
    );

    return (
        <Section
            id="testimonios"
            eyebrow="Historias reales"
            title="Experiencias que inspiran confianza."
            description="Cada adopción, cada voluntario y cada aporte construyen historias que demuestran que el cambio es posible."
            className="bg-stone-50"
        >
            <div className="max-w-5xl mx-auto">
                {/* Grid dinámico */}
                <div className={`grid gap-5 ${itemsPerView === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                    {visibleTestimonials.map((t) => (
                        <div
                            key={t.id}
                            className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center">
                                    <Quote className="h-4 w-4 text-orange-700" />
                                </div>
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
                                    Testimonio
                                </p>
                            </div>

                            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                                “{t.message}”
                            </p>

                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-stone-100 flex items-center justify-center font-semibold text-xs text-stone-700">
                                    {t.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-stone-900">
                                        {t.name}
                                    </p>
                                    <p className="text-[11px] uppercase tracking-wide text-stone-500">
                                        {t.role}
                                    </p>
                                    <p className="text-[11px] text-stone-500">{t.relation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles */}
                <div className="mt-6 flex items-center justify-between">
                    {/* Indicadores */}
                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalGroups }).map((_, i) => (
                            <span
                                key={i}
                                className={[
                                    "h-1.5 w-1.5 rounded-full transition",
                                    i === currentIndex ? "bg-orange-700" : "bg-stone-300",
                                ].join(" ")}
                            />
                        ))}
                    </div>

                    {/* Botones */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            className="h-8 w-8 flex items-center justify-center rounded-full border border-stone-200 bg-white hover:bg-stone-100 transition"
                        >
                            <ChevronLeft className="h-4 w-4 text-stone-700" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="h-8 w-8 flex items-center justify-center rounded-full border border-stone-200 bg-white hover:bg-stone-100 transition"
                        >
                            <ChevronRight className="h-4 w-4 text-stone-700" />
                        </button>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-stone-500">
                    <div className="flex items-center gap-2">
                        <PawPrint className="h-4 w-4 text-emerald-600" />
                        Cada historia refleja compromiso, acompañamiento y bienestar.
                    </div>
                </div>
            </div>
        </Section>
    );
}
