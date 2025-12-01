// app/components/Help.tsx
import { Section } from "./layout/Section";
import { HeartHandshake, CreditCard, Users } from "lucide-react";

const ways = [
    {
        icon: HeartHandshake,
        title: "Adopta o apadrina",
        description:
            "Brinda un hogar permanente o apoyo mensual a uno de nuestros peluditos. La adopción responsable cambia dos vidas: la suya y la tuya.",
    },
    {
        icon: CreditCard,
        title: "Dona insumos o recursos",
        description:
            "Alimento, medicinas, cobijas o un aporte económico ayudan a cubrir los cuidados diarios del refugio.",
    },
    {
        icon: Users,
        title: "Súmate como voluntario",
        description:
            "Puedes apoyar en jornadas de limpieza, socialización, difusión de casos y eventos de adopción.",
    },
];

export function Help() {
    return (
        <Section
            id="como-ayudar"
            eyebrow="Cómo puedes ayudar"
            title="Pequeñas acciones que marcan una gran diferencia"
            description="El prototipo plantea diferentes formas en las que una persona puede involucrarse con el refugio: adopciones, donaciones y voluntariado."
            className="bg-stone-100"
        >
            <div className="grid gap-6 md:grid-cols-3">
                {ways.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="flex flex-col rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
                    >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-400/10">
                            <Icon className="h-5 w-5 text-rose-500" />
                        </div>
                        <h3 className="mt-3 text-sm font-semibold text-stone-900">
                            {title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-stone-600">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
