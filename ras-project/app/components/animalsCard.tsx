// app/components/Animals/AnimalCard.tsx
import Image from "next/image";
import { PawPrint } from "lucide-react";

export interface Animal {
    id: number;
    name: string;
    age: string;
    size: string;
    description: string;
    status: "En adopción" | "En recuperación";
    type: "Perro" | "Gato";
    imageUrl: string;

    // Datos extra para el modal
    sex?: "Macho" | "Hembra";
    vaccines?: string;
    sterilized?: boolean;
    dewormed?: boolean;
    temperament?: string;
}

interface AnimalCardProps {
    animal: Animal;
    onDetailsClick: (animal: Animal) => void;
}

export function AnimalCard({ animal, onDetailsClick }: AnimalCardProps) {
    const isAvailable = animal.status === "En adopción";

    return (
        <article
            className="
        group flex flex-col overflow-hidden rounded-xl 
        border border-stone-200 bg-white 
        shadow-sm hover:shadow-md hover:-translate-y-1 
        transition-all
      "
        >
            {/* Imagen */}
            <div className="relative h-40 sm:h-44 overflow-hidden">
                <Image
                    src={animal.imageUrl}
                    alt={animal.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badges “frosted” */}
                <div className="absolute inset-x-0 top-0 flex justify-between p-2 text-[10px]">
                    {/* Tipo */}
                    <span className="
            inline-flex items-center rounded-full 
            bg-white/60 backdrop-blur-sm 
            px-2 py-0.5 font-medium text-stone-700
            shadow-sm
          ">
                        {animal.type}
                    </span>

                    {/* Estado */}
                    <span className={`
            inline-flex items-center rounded-full px-2 py-0.5 
            font-medium shadow-sm backdrop-blur-sm
            ${isAvailable
                            ? "bg-orange-600/90 text-white"
                            : "bg-rose-500/90 text-white"
                        }
          `}>
                        {animal.status}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-1 flex-col p-4">

                {/* Nombre + Icono */}
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="text-base font-semibold text-stone-900">
                            {animal.name}
                        </h3>
                        <p className="mt-1 text-sm text-stone-500">
                            {animal.age} · {animal.size}
                        </p>
                    </div>

                    <PawPrint className="h-5 w-5 text-amber-600 opacity-80" />
                </div>

                {/* Botón */}
                <div className="mt-4 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => onDetailsClick(animal)}
                        className="
              text-xs bg-orange-700 py-1.5 px-4 
              rounded-full font-semibold text-white 
              hover:bg-orange-600 transition
            "
                    >
                        Ver detalles
                    </button>
                </div>
            </div>
        </article>
    );
}
