// app/components/Contact.tsx
"use client";

import { useState, FormEvent } from "react";
import { Section } from "./layout/Section";
import { Mail, Phone, CheckCircle2, X, Loader2 } from "lucide-react";

interface FormState {
    name: string;
    email: string;
    reason: string;
    animalName: string;
    message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

export function Contact() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        reason: "",
        animalName: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isClosingSuccess, setIsClosingSuccess] = useState(false);

    const handleChange = (field: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Por favor ingresa tu nombre.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Por favor ingresa tu correo electrónico.";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(form.email.trim())) {
                newErrors.email = "Ingresa un correo electrónico válido.";
            }
        }

        if (!form.reason) {
            newErrors.reason = "Selecciona un motivo de contacto.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Este campo es obligatorio.";
        } else if (form.message.trim().length < 10) {
            newErrors.message =
                "Por favor escribe al menos una breve descripción (10 caracteres o más).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!validate()) return;

        // Simulación de envío
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsClosingSuccess(false);
            setShowSuccess(true);

            // Limpiar formulario
            setForm({
                name: "",
                email: "",
                reason: "",
                animalName: "",
                message: "",
            });
        }, 900);
    };

    const handleCloseSuccessModal = () => {
        setIsClosingSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            setIsClosingSuccess(false);
        }, 200);
    };

    return (
        <Section
            id="contacto"
            eyebrow="Contacto"
            title="¿Tienes alguna consulta, propuesta o comentario?"
            description="Si tienes dudas sobre el proceso de adopción, quieres conocer mejor cómo funciona el refugio o deseas proponer una idea, puedes escribirnos por aquí. Para iniciar una adopción, donación, padrinazgo o voluntariado, utiliza los formularios específicos de cada sección."
            className="bg-stone-100"
        >
            <div className="grid gap-8 lg:grid-cols-2 items-start">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm"
                >
                    {/* Chip de contexto */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 mb-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                        <span className="text-[11px] font-medium uppercase tracking-wide text-stone-600">
                            Formulario de contacto general
                        </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-stone-600 mb-2">
                        Si tu consulta está relacionada con un peludito en particular, puedes
                        escribir su nombre en el campo correspondiente o mencionarlo en el mensaje.
                    </p>

                    {/* Nombre */}
                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            placeholder="Ej. Ana López"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                        {errors.name && (
                            <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>
                        )}
                    </div>

                    {/* Correo */}
                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            placeholder="tucorreo@ejemplo.com"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                        {errors.email && (
                            <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>
                        )}
                    </div>

                    {/* Motivo */}
                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Motivo de contacto
                        </label>
                        <select
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            value={form.reason}
                            onChange={(e) => handleChange("reason", e.target.value)}
                        >
                            <option value="" disabled>
                                Selecciona una opción
                            </option>
                            <option>Consulta sobre adopción</option>
                            <option>Consulta sobre donaciones o padrinazgo</option>
                            <option>Consulta sobre voluntariado</option>
                            <option>Otra consulta o comentario</option>
                        </select>
                        {errors.reason && (
                            <p className="mt-1 text-[11px] text-red-500">{errors.reason}</p>
                        )}
                    </div>

                    {/* Nombre del animal (opcional) */}
                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Nombre del animal (si aplica)
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            placeholder="Ej. Luna, Milo, Canela..."
                            value={form.animalName}
                            onChange={(e) => handleChange("animalName", e.target.value)}
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="block text-xs font-medium text-stone-700">
                            Mensaje
                        </label>
                        <textarea
                            className="mt-1 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-700/70"
                            rows={4}
                            placeholder="Cuéntanos brevemente tu consulta, comentario o propuesta."
                            value={form.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                        />
                        {errors.message && (
                            <p className="mt-1 text-[11px] text-red-500">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full items-center justify-center rounded-full bg-orange-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Enviando...
                            </>
                        ) : (
                            "Enviar mensaje"
                        )}
                    </button>

                    <p className="text-[11px] text-stone-500">
                        *En esta versión las solicitudes se manejan de forma demostrativa. En una
                        implementación completa se conectaría a un servicio de correo o a una API
                        de gestión de solicitudes.
                    </p>
                </form>

                {/* Columna derecha */}
                <div className="space-y-4 text-sm text-stone-600">
                    <div className="rounded-2xl border border-stone-200 bg-white p-4">
                        <h3 className="text-sm font-semibold text-stone-900">
                            Datos de contacto
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-stone-600">
                            Aquí se pueden mostrar los datos de contacto del refugio para
                            consultas rápidas.
                        </p>

                        <div className="flex gap-2 mt-4 text-sm">
                            <p className="inline-flex items-center gap-2 text-stone-700">
                                <Mail className="h-4 w-4 text-rose-500" />
                                <span>crahn@refugio.org</span>
                            </p>
                            <p className="inline-flex items-center gap-2 text-stone-700">
                                <Phone className="h-4 w-4 text-amber-600" />
                                <span>+504 9999-8811</span>
                            </p>
                        </div>

                        <p className="mt-3 text-[11px] text-stone-500">
                            Los datos mostrados son demostrativos. En una implementación real se
                            sustituirían por la información oficial del CRA.
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal de éxito */}
            {showSuccess && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 px-4 transition-opacity duration-200 ${isClosingSuccess ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <div
                        className={`w-full max-w-sm rounded-3xl bg-white border border-stone-200 shadow-xl p-5 sm:p-6 transform transition-all duration-200 ${isClosingSuccess
                                ? "opacity-0 scale-95 translate-y-2"
                                : "opacity-100 scale-100 translate-y-0"
                            }`}
                    >
                        <div className="flex justify-between items-start gap-3">
                            <div className="flex items-center gap-2">
                                <div className="h-9 w-9 rounded-2xl bg-emerald-100 flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                                        Mensaje enviado
                                    </h3>
                                    <p className="text-[11px] sm:text-xs text-stone-500">
                                        Tu mensaje se ha registrado correctamente.
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleCloseSuccessModal}
                                className="rounded-full p-1 hover:bg-stone-100 transition"
                                aria-label="Cerrar"
                            >
                                <X className="h-4 w-4 text-stone-500" />
                            </button>
                        </div>

                        <p className="mt-4 text-xs sm:text-sm text-stone-600">
                            En una versión conectada, el equipo del refugio revisaría tu mensaje y
                            se pondría en contacto contigo por correo o teléfono para dar
                            seguimiento.
                        </p>

                        <div className="mt-4 flex justify-end">
                            <button
                                type="button"
                                onClick={handleCloseSuccessModal}
                                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-orange-700 hover:bg-stone-100 transition"
                            >
                                Volver al sitio
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}
