// app/components/Contact.tsx
"use client";

import { Section } from "./layout/Section";
import { Mail, Phone } from "lucide-react";

export function Contact() {
    return (
        <Section
            id="contacto"
            eyebrow="Contacto"
            title="¿Te gustaría saber más o proponer una mejora?"
            description="Este formulario funciona como un espacio de contacto dentro del prototipo. Podría conectarse a un backend real para recibir solicitudes de adopción, donaciones o voluntariado."
            className="bg-stone-100"
        >
            <div className="grid gap-8 lg:grid-cols-2 items-start">
                <form className="space-y-4 bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm">
                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            placeholder="Ej. Ana López"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            placeholder="tucorreo@ejemplo.com"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            ¿En qué te gustaría apoyar?
                        </label>
                        <select
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Selecciona una opción
                            </option>
                            <option>Adopción</option>
                            <option>Donación</option>
                            <option>Voluntariado</option>
                            <option>Otra consulta</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Mensaje
                        </label>
                        <textarea
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            rows={4}
                            placeholder="Cuéntanos brevemente tu idea o consulta."
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-orange-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition"
                    >
                        Enviar mensaje
                    </button>

                    <p className="text-[11px] text-stone-500">
                        *En esta versión académica el formulario no envía información real.
                        En una implementación completa se podría conectar a un servicio de
                        correo o una API.
                    </p>
                </form>

                <div className="space-y-4 text-sm text-stone-600">
                    <div className="rounded-2xl border border-stone-200 bg-white p-4">
                        <h3 className="text-sm font-semibold text-stone-900">
                            Datos de contacto de ejemplo
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-stone-600">
                            Aquí se podrían mostrar los datos reales del refugio:
                            ubicación, horarios de visita y medios de comunicación.
                        </p>

                        <div className="mt-4 space-y-2 text-sm">
                            <p className="inline-flex items-center gap-2 text-stone-700">
                                <Mail className="h-4 w-4 text-rose-500" />
                                <span className="mr-2">crahn@refugio.org</span>
                            </p>
                            <p className="inline-flex items-center gap-2 text-stone-700">
                                <Phone className="h-4 w-4 text-amber-600" />
                                <span>+504 9999-8811</span>
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 p-4">
                        <p className="text-xs sm:text-sm text-stone-600">
                            Como parte del prototipo de Design Thinking, esta sección puede
                            usarse para validar qué información consideran más útil las
                            personas interesadas en adoptar, donar o ser voluntarias.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
