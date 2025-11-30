// app/components/Animals/AnimalCard.tsx
import { PawPrint } from "lucide-react";

export interface Animal {
    id: number;
    name: string;
    age: string;
    size: string;
    description: string;
    status: "En adopción" | "En recuperación";
    type: "Perro" | "Gato";
}

interface AnimalCardProps {
    animal: Animal;
}

export function AnimalCard({ animal }: AnimalCardProps) {
    const isAvailable = animal.status === "En adopción";

    return (
        <article className="flex flex-col rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-base font-semibold text-stone-900 flex items-center gap-1.5">
                        {animal.name}
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-medium text-yellow-800">
                            {animal.type}
                        </span>
                    </h3>
                    <p className="mt-1 text-xs text-stone-500">
                        {animal.age} · {animal.size}
                    </p>
                </div>
                <PawPrint className="h-5 w-5 text-amber-600" />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-stone-600 line-clamp-3">
                {animal.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
                <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${isAvailable
                            ? "bg-orange-700 text-white"
                            : "bg-rose-400/10 text-rose-500"
                        }`}
                >
                    {isAvailable ? "Listo para adoptar" : "En recuperación"}
                </span>

                <button
                    type="button"
                    className="text-xs font-semibold text-orange-700 hover:text-orange-600"
                >
                    Ver detalles
                </button>
            </div>
        </article>
    );
}
