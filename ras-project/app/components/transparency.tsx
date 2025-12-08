// app/components/Transparency.tsx
import { Section } from "./layout/Section";
import {
    ShieldCheck,
    ClipboardList,
    Heart,
} from "lucide-react";

export function Transparency() {
    const pillars = [
        {
            title: "Uso responsable de recursos",
            description:
                "Las donaciones se destinan exclusivamente a alimentación, atención veterinaria, insumos y rescates.",
            icon: ShieldCheck,
            bg: "bg-emerald-100",
            iconColor: "text-emerald-700",
        },
        {
            title: "Información clara de cada animal",
            description:
                "Mostramos historial, estado actual, personalidad y necesidades para que adoptes con confianza.",
            icon: ClipboardList,
            bg: "bg-amber-100",
            iconColor: "text-amber-700",
        },
        {
            title: "Seguimiento y acompañamiento",
            description:
                "Después de la adopción damos seguimiento y nos aseguramos de que la transición sea positiva.",
            icon: Heart,
            bg: "bg-rose-100",
            iconColor: "text-rose-700",
        },
    ];

    return (
        <Section
            id="transparencia"
            eyebrow="Transparencia"
            title="Comprometidos con la claridad y la confianza."
            description="Creemos que la transparencia es esencial para construir relaciones duraderas con adoptantes, donantes y voluntarios."
            className="bg-stone-50"
        >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
                        >
                            <div
                                className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
                            >
                                <Icon className={`h-6 w-6 ${item.iconColor}`} />
                            </div>

                            <h3 className="text-center text-base font-semibold text-stone-900">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-center text-sm text-stone-600">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
