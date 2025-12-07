// app/components/Help.tsx
import { Section } from "./layout/Section";
import { HeartHandshake, CreditCard, Users } from "lucide-react";
import Link from "next/link";

const ways = [
    {
        icon: CreditCard,
        title: "Donar para su cuidado diario",
        description:
            "Tu aporte ayuda a cubrir alimento, vacunas básicas, desparasitación, insumos de limpieza y transporte en rescates y entregas.",
        cta: "Quiero donar",
        href: "/#contacto", // luego podemos cambiarlo a un form dedicado
        badge: "Desde L 50",
    },
    {
        icon: HeartHandshake,
        title: "Apadrinar a un peludito",
        description:
            "Si no puedes adoptar, puedes apoyar de forma recurrente a un peludito mientras encuentra hogar, ayudando a cubrir sus necesidades básicas.",
        cta: "Quiero apadrinar",
        href: "/#contacto",
        badge: "Apoyo mensual",
    },
    {
        icon: Users,
        title: "Ser voluntario",
        description:
            "Puedes apoyar en jornadas de limpieza, socialización, difusión de casos y eventos de adopción. ¡Tu tiempo también salva vidas!",
        cta: "Quiero ser voluntario",
        href: "/#contacto",
        badge: "2–3 horas al mes",
    },
];

export function Help() {
    return (
        <Section
            id="como-ayudar"
            eyebrow="Formas de apoyar"
            title="Hay muchas formas de cambiar una vida"
            description="Puedes sumarte a la labor del CRA adoptando, apadrinando, haciendo un aporte o dedicando un poco de tu tiempo. Cada gesto ayuda a que más peluditos estén a salvo."
            className="bg-stone-100"
        >
            <div className="grid gap-6 md:grid-cols-3">
                {ways.map(({ icon: Icon, title, description, cta, href, badge }) => (
                    <div
                        key={title}
                        className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                    >
                        {/* Icono */}
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100/60">
                            <Icon className="h-5 w-5 text-amber-700" />
                        </div>

                        {/* Badge */}
                        <span className="mt-3 inline-flex items-center rounded-full bg-stone-100 border border-stone-300 px-2.5 py-0.5 text-[11px] font-medium text-stone-700">
                            {badge}
                        </span>

                        {/* Title */}
                        <h3 className="mt-3 text-sm font-semibold text-stone-900">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-xs sm:text-sm text-stone-600 flex-1">
                            {description}
                        </p>

                        {/* CTA */}
                        <Link
                            href={href}
                            className="mt-4 inline-flex items-center justify-center rounded-full bg-orange-700 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-orange-600 transition"
                        >
                            {cta}
                        </Link>
                    </div>
                ))}
            </div>
        </Section>
    );
}
