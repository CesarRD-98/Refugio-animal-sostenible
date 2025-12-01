// app/components/Animals/AnimalsSection.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Section } from "./layout/Section";
import { AnimalCard, Animal } from "./animalsCard";
import { X, Info, PawPrint, Syringe, ShieldCheck } from "lucide-react";
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
        sex: "Hembra",
        vaccines: "Vacunas básicas al día",
        sterilized: true,
        dewormed: true,
        temperament: "Juguetona y sociable",
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
        sex: "Macho",
        vaccines: "Pendiente refuerzo anual",
        sterilized: true,
        dewormed: true,
        temperament: "Tranquilo y observador",
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
        sex: "Hembra",
        vaccines: "En esquema de vacunación",
        sterilized: false,
        dewormed: true,
        temperament: "Cariñosa pero algo tímida",
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
        sex: "Hembra",
        vaccines: "Vacunas básicas al día",
        sterilized: false,
        dewormed: true,
        temperament: "Muy juguetona",
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
        sex: "Macho",
        vaccines: "Vacunas al día",
        sterilized: true,
        dewormed: true,
        temperament: "Activo y protector",
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
        sex: "Hembra",
        vaccines: "Vacunas básicas al día",
        sterilized: true,
        dewormed: true,
        temperament: "Dulce y tranquila",
    },
    {
        id: 7,
        name: "Bruno",
        age: "5 años",
        size: "Grande",
        type: "Perro",
        status: "En adopción",
        description:
            "Bruno es tranquilo, muy noble y se lleva bien con niños. Perfecto para un hogar familiar.",
        imageUrl: "/animals/bruno.jpg",
        sex: "Macho",
        vaccines: "Vacunas al día",
        sterilized: true,
        dewormed: true,
        temperament: "Tranquilo y protector",
    },
    {
        id: 8,
        name: "Mía",
        age: "6 meses",
        size: "Pequeña",
        type: "Perro",
        status: "En adopción",
        description:
            "Mía es una cachorrita juguetona, curiosa y llena de energía. Ideal para personas activas.",
        imageUrl: "/animals/mia.jpg",
        sex: "Hembra",
        vaccines: "Esquema inicial de vacunas",
        sterilized: false,
        dewormed: true,
        temperament: "Muy activa y juguetona",
    },
    {
        id: 9,
        name: "Simba",
        age: "2 años",
        size: "Mediano",
        type: "Gato",
        status: "En adopción",
        description:
            "Simba es independiente pero cariñoso. Disfruta de la calma y los rayos de sol por la mañana.",
        imageUrl: "/animals/simba.jpg",
        sex: "Macho",
        vaccines: "Vacunas básicas al día",
        sterilized: true,
        dewormed: true,
        temperament: "Independiente y calmado",
    },
    {
        id: 10,
        name: "Kira",
        age: "3 años",
        size: "Mediana",
        type: "Perro",
        status: "En recuperación",
        description:
            "Kira es muy dulce y agradecida. Está en recuperación tras una cirugía, pero pronto estará lista para adopción.",
        imageUrl: "/animals/kira.jpg",
        sex: "Hembra",
        vaccines: "Vacunas completas",
        sterilized: true,
        dewormed: true,
        temperament: "Dulce y tranquila",
    },

];

export function AnimalsSection() {
    const [showAll, setShowAll] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const animalsToShow = showAll ? mockAnimals : mockAnimals.slice(0, 3);

    const handleDetailsClick = (animal: Animal) => {
        setSelectedAnimal(animal);
        setIsClosing(false);
        setIsVisible(false);

        setTimeout(() => {
            setIsVisible(true);
        }, 10);
    };


    const handleCloseModal = () => {
        setIsClosing(true);
        setIsVisible(false);

        setTimeout(() => {
            setSelectedAnimal(null);
            setIsClosing(false);
        }, 200); // misma duración que transition
    };


    const getYesNo = (value?: boolean) =>
        value === undefined ? "No especificado" : value ? "Sí" : "No";

    useEffect(() => {
        if (selectedAnimal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [selectedAnimal])

    return (
        <Section
            id="animales"
            eyebrow="Animales en adopción"
            title="Conoce algunos de nuestros peluditos"
            description="Esta sección muestra un ejemplo de cómo se podrían presentar los animales disponibles en el refugio, con un vistazo rápido y una ficha más completa para quienes estén interesados en adoptar."
            className="bg-white"
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
                        className="text-xs sm:text-sm font-semibold text-orange-700 hover:text-orange-600 cursor-pointer"
                    >
                        {showAll ? "Mostrar menos animales" : "Ver más animales"}
                    </button>
                </div>
            )}

            {/* Modal de detalles del animal */}
            {selectedAnimal && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 px-4 transition-opacity duration-200 ${isClosing || !isVisible ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <div
                        className={`w-full max-w-2xl max-h-[90vh] rounded-3xl bg-white border border-stone-200 shadow-xl overflow-y-auto transform transition-all duration-200 ${isClosing || !isVisible
                            ? "opacity-0 scale-95 translate-y-2"
                            : "opacity-100 scale-100 translate-y-0"
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-stone-200">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                                    Ficha de adopción
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

                        {/* Contenido principal: imagen + ficha */}
                        <div className="grid md:grid-cols-[1.1fr,1fr] gap-0">
                            {/* Imagen grande */}
                            <div className="relative h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96">
                                <Image
                                    src={selectedAnimal.imageUrl}
                                    alt={selectedAnimal.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="px-5 py-4 space-y-4">
                                <p className="text-xs sm:text-sm text-stone-600">
                                    {selectedAnimal.description}
                                </p>

                                {/* Datos clave de adopción */}
                                <div className="rounded-xl bg-stone-50 border border-stone-200 px-3 py-3 space-y-2">
                                    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-stone-500 flex items-center gap-1.5">
                                        <Syringe className="h-3.5 w-3.5 text-amber-600" />
                                        Información de salud y cuidado
                                    </p>

                                    <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-stone-600">
                                        <div>
                                            <p className="font-semibold text-stone-900">Sexo</p>
                                            <p className="mt-0.5">
                                                {selectedAnimal.sex ?? "No especificado"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-stone-900">Vacunas</p>
                                            <p className="mt-0.5">
                                                {selectedAnimal.vaccines ?? "No especificado"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-stone-900">
                                                Esterilizado/a
                                            </p>
                                            <p className="mt-0.5">
                                                {getYesNo(selectedAnimal.sterilized)}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-stone-900">
                                                Desparasitado/a
                                            </p>
                                            <p className="mt-0.5">
                                                {getYesNo(selectedAnimal.dewormed)}
                                            </p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="font-semibold text-stone-900">
                                                Temperamento
                                            </p>
                                            <p className="mt-0.5">
                                                {selectedAnimal.temperament ?? "No especificado"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Estado y nota informativa */}
                                <div className="grid gap-2 text-[11px] sm:text-xs text-stone-600">
                                    <div className="rounded-xl bg-stone-50 border border-stone-200 px-3 py-2 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="h-4 w-4 text-amber-600" />
                                            <p className="font-semibold text-stone-900">Estado</p>
                                        </div>
                                        <span
                                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${selectedAnimal.status === "En adopción"
                                                ? "bg-orange-700 text-white"
                                                : "bg-rose-400/90 text-white"
                                                }`}
                                        >
                                            {selectedAnimal.status}
                                        </span>
                                    </div>

                                    <div className="rounded-xl bg-stone-50 border border-stone-200 px-3 py-2 flex items-start gap-2">
                                        <Info className="h-4 w-4 mt-0.5 text-amber-600" />
                                        <p>
                                            Esta es una simulación de cómo se vería la ficha de un
                                            animal en adopción. En una plataforma real, aquí podrías
                                            encontrar información validada por el refugio sobre salud,
                                            comportamiento y requisitos para la adopción.
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="pt-1 flex flex-col gap-2">
                                    <Link
                                        href="#contacto"
                                        onClick={handleCloseModal}
                                        className="inline-flex items-center justify-center rounded-full bg-orange-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-orange-600 transition"
                                    >
                                        Estoy interesado en adoptar a {selectedAnimal.name}
                                    </Link>
                                    <p className="text-[10px] text-stone-500">
                                        Al hacer clic, serás dirigido al formulario de contacto
                                        para simular el siguiente paso del proceso de adopción.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}
