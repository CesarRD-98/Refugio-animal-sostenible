// app/components/Animals/AnimalsSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "./layout/Section";
import { AnimalCard, Animal } from "./animalsCard";
import { X, Info, PawPrint } from "lucide-react";
import Image from "next/image";

const mockAnimals: Animal[] = [
    {
        id: 1,
        name: "Luna",
        age: "2 años",
        size: "Mediana",
        type: "Perro",
        status: "En adopción",
        description:
            "Luna es una perrita muy cariñosa, ideal para familias que disfruten de paseos y juegos al aire libre.",
        imageUrl: "/animals/luna.jpg",
    },
    {
        id: 2,
        name: "Milo",
        age: "1 año",
        size: "Pequeño",
        type: "Gato",
        status: "En adopción",
        description:
            "Milo es curioso y tranquilo. Le encanta dormir cerca de las ventanas y observar todo a su alrededor.",
        imageUrl: "/animals/milo.jpg",
    },
    {
        id: 3,
        name: "Canela",
        age: "3 años",
        size: "Grande",
        type: "Perro",
        status: "En recuperación",
        description:
            "Canela está en proceso de recuperación. Ha avanzado mucho y pronto estará lista para encontrar un hogar.",
        imageUrl: "/animals/canela.jpg",
    },
    {
        id: 4,
        name: "Nina",
        age: "8 meses",
        size: "Pequeña",
        type: "Gato",
        status: "En adopción",
        description:
            "Nina es juguetona y muy sociable. Se adapta fácilmente a espacios pequeños y familias tranquilas.",
        imageUrl: "/animals/nina.jpg",
    },
    {
        id: 5,
        name: "Rocky",
        age: "4 años",
        size: "Grande",
        type: "Perro",
        status: "En adopción",
        description:
            "Rocky es un perro leal y protector. Ideal para personas activas que disfruten de caminatas y ejercicio.",
        imageUrl: "/animals/rocky.jpg",
    },
    {
        id: 6,
        name: "Coco",
        age: "1 año y medio",
        size: "Mediana",
        type: "Gato",
        status: "En adopción",
        description:
            "Coco es tranquila y cariñosa. Le encanta descansar en lugares altos y recibir cariño.",
        imageUrl: "/animals/coco.jpg",
    },
];

export function AnimalsSection() {
    const [showAll, setShowAll] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

    const animalsToShow = showAll ? mockAnimals : mockAnimals.slice(0, 3);

    const handleDetailsClick = (animal: Animal) => {
        setSelectedAnimal(animal);
    };

    const handleCloseModal = () => {
        setSelectedAnimal(null);
    };

    return (
        <Section
            id="animales"
            eyebrow="Animales en adopción"
            title="Conoce algunos de nuestros peluditos"
            description="Esta sección muestra un ejemplo de cómo se podrían presentar los animales disponibles en el refugio, con un detalle rápido y una vista ampliada para quienes estén interesados en adoptar."
            className="bg-stone-100"
        >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {animalsToShow.map((animal) => (
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        onDetailsClick={handleDetailsClick}
                    />
                ))}
            </div>

            {/* Ver más / ver menos */}
            {mockAnimals.length > 3 && (
                <div className="mt-6 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setShowAll((prev) => !prev)}
                        className="text-xs sm:text-sm font-semibold text-orange-700 hover:text-orange-600"
                    >
                        {showAll ? "Mostrar menos animales" : "Ver más animales"}
                    </button>
                </div>
            )}

            {/* Modal de detalles del animal */}
            {selectedAnimal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 px-4">
                    <div className="w-full max-w-md rounded-3xl bg-white border border-stone-200 shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="flex items-start justify-between px-4 pt-3 pb-2 border-b border-stone-200">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                                    Detalles del animal
                                </p>
                                <h3 className="text-sm sm:text-base font-semibold text-stone-900 flex items-center gap-1.5">
                                    <PawPrint className="h-4 w-4 text-amber-600" />
                                    {selectedAnimal.name}
                                </h3>
                                <p className="text-[11px] text-stone-500">
                                    {selectedAnimal.type} · {selectedAnimal.age} ·{" "}
                                    {selectedAnimal.size}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className="rounded-full p-1 hover:bg-stone-100 transition"
                                aria-label="Cerrar"
                            >
                                <X className="h-4 w-4 text-stone-500" />
                            </button>
                        </div>

                        {/* Imagen grande */}
                        <div className="relative h-40 sm:h-48">
                            <Image
                                src={selectedAnimal.imageUrl}
                                alt={selectedAnimal.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="px-4 py-4 space-y-3">
                            <p className="text-xs sm:text-sm text-stone-600">
                                {selectedAnimal.description}
                            </p>

                            <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-stone-600">
                                <div className="rounded-xl bg-stone-50 border border-stone-200 px-2 py-2">
                                    <p className="font-semibold text-stone-900">Tamaño</p>
                                    <p className="mt-0.5">{selectedAnimal.size}</p>
                                </div>
                                <div className="rounded-xl bg-stone-50 border border-stone-200 px-2 py-2">
                                    <p className="font-semibold text-stone-900">Estado</p>
                                    <p className="mt-0.5">{selectedAnimal.status}</p>
                                </div>
                            </div>

                            <div className="rounded-xl bg-stone-50 border border-stone-200 px-3 py-2 flex items-start gap-2">
                                <Info className="h-4 w-4 mt-0.5 text-amber-600" />
                                <p className="text-[11px] sm:text-xs text-stone-600">
                                    Esta es una simulación de cómo se vería la ficha de un
                                    animal en adopción. En una plataforma real, aquí podrías
                                    encontrar más detalles sobre salud, comportamiento y
                                    requisitos para la adopción.
                                </p>
                            </div>

                            <div className="pt-1 flex flex-col gap-2">
                                <Link
                                    href="#contacto"
                                    onClick={handleCloseModal}
                                    className="inline-flex items-center justify-center rounded-full bg-orange-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-orange-600 transition"
                                >
                                    Estoy interesado en adoptar a {selectedAnimal.name}
                                </Link>
                                <p className="text-[10px] text-stone-500">
                                    Al hacer clic, serás dirigido al formulario de contacto para
                                    simular el siguiente paso del proceso de adopción.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}
