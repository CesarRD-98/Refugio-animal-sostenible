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
        <article className="flex flex-col rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
            {/* Imagen */}
            <div className="relative h-32 sm:h-36">
                <Image
                    src={animal.imageUrl}
                    alt={animal.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex justify-between p-2 text-[10px]">
                    <span className="inline-flex items-center rounded-full bg-yellow-100/90 px-2 py-0.5 font-medium text-yellow-800">
                        {animal.type}
                    </span>
                    <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 font-medium ${isAvailable
                                ? "bg-orange-700 text-white"
                                : "bg-rose-400/90 text-white"
                            }`}
                    >
                        {isAvailable ? "En adopción" : "En recuperación"}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-1 flex-col p-4">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
                            {animal.name}
                        </h3>
                        <p className="mt-1 text-[11px] text-stone-500">
                            {animal.age} · {animal.size}
                        </p>
                    </div>
                    <PawPrint className="h-4 w-4 text-amber-600" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => onDetailsClick(animal)}
                        className="text-xs font-semibold text-orange-700 hover:text-orange-600 cursor-pointer"
                    >
                        Ver detalles
                    </button>
                </div>
            </div>
        </article>
    );
}
