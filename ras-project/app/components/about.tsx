// app/components/About.tsx
import { Section } from "./layout/Section";

export function About() {
    return (
        <Section
            id="sobre-nosotros"
            eyebrow="¿Quiénes somos?"
            title="Un refugio temporal, un hogar para siempre."
            description="CRA – Centro de Refugio Animal es una iniciativa dedicada al rescate, rehabilitación y adopción responsable de animales en situación de vulnerabilidad."
            className="bg-white"
        >
            <div className="grid gap-8 lg:grid-cols-2 items-start">
                <div className="space-y-4 text-sm sm:text-base text-stone-600">
                    <p>
                        Nuestro objetivo es brindar una segunda oportunidad a perros y gatos
                        que han sido abandonados, maltratados o que simplemente necesitan un
                        lugar seguro mientras encuentran una familia permanente.
                    </p>
                    <p>
                        Este sitio funciona como un prototipo académico dentro de un proceso
                        de Design Thinking, donde buscamos explorar cómo una plataforma
                        digital puede facilitar la conexión entre personas, refugios y
                        voluntariado.
                    </p>
                    <p>
                        Además de promover la adopción responsable, CRA impulsa la
                        sensibilización sobre el bienestar animal, la esterilización y el
                        respeto a todas las formas de vida.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="rounded-2xl border border-stone-200 bg-stone-100 p-4">
                        <h3 className="text-sm font-semibold text-stone-900">
                            ¿Qué hacemos?
                        </h3>
                        <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-stone-600">
                            <li>• Rescate y atención básica de animales en riesgo.</li>
                            <li>• Rehabilitación física y emocional.</li>
                            <li>• Difusión de casos para adopción responsable.</li>
                            <li>• Articulación con voluntarios y donantes.</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-white p-4">
                        <h3 className="text-sm font-semibold text-stone-900">
                            Visión del prototipo
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-stone-600">
                            Mostrar cómo una landing clara, visual y empática puede ayudar a
                            comunicar la misión del refugio, atraer aliados y centralizar la
                            información clave para adopciones, donaciones y voluntariado.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
