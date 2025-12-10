import { Section } from "./layout/Section";
import {
    Search,
    ClipboardCheck,
    PhoneCall,
    Home,
    HeartHandshake,
} from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            title: "Descubre un peludito",
            description:
                "Explora los perfiles de perros y gatos, conoce su historia y personalidad.",
            icon: Search,
        },
        {
            title: "Completa el formulario",
            description:
                "Cuéntanos sobre tu hogar, tu rutina y el tipo de compañero que buscas.",
            icon: ClipboardCheck,
        },
        {
            title: "Conversamos contigo",
            description:
                "Un miembro del CRA te contactará para aclarar dudas y asegurar un buen match.",
            icon: PhoneCall,
        },
        {
            title: "Entrega responsable",
            description:
                "Coordinamos la entrega, brindamos recomendaciones y firmamos el acuerdo de adopción.",
            icon: Home,
        },
        {
            title: "Acompañamiento",
            description:
                "Durante los primeros días te apoyamos en la adaptación del peludito a su nuevo hogar.",
            icon: HeartHandshake,
        },
    ];

    return (
        <Section
            id="como-funciona"
            eyebrow="¿Cómo funciona?"
            title="Un proceso claro para una adopción responsable."
            description="Queremos que te sientas acompañado en cada paso. Nuestro proceso es transparente, humano y centrado en el bienestar del animal."
            className=""
        >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={index}
                            className="rounded-lg bg-white border border-amber-200 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1 text-center"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 ring-2 ring-amber-300">
                                <Icon className="h-6 w-6 text-amber-700" />
                            </div>

                            <h3 className="text-base font-semibold text-amber-800">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-sm text-stone-600">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
