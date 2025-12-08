// app/donar/page.tsx
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/app/components/layout/Container";
import { ArrowLeft, CheckCircle2, ShieldCheck, HandCoins } from "lucide-react";

type FormErrors = {
    nombreCompleto?: string;
    correo?: string;
    telefono?: string;
    monto?: string;
    frecuencia?: string;
};

export default function DonarPage() {
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = (formData: FormData): FormErrors => {
        const nombreCompleto = (formData.get("nombreCompleto") || "").toString().trim();
        const correo = (formData.get("correo") || "").toString().trim();
        const telefono = (formData.get("telefono") || "").toString().trim();
        const monto = (formData.get("monto") || "").toString().trim();
        const frecuencia = (formData.get("frecuencia") || "").toString();

        const newErrors: FormErrors = {};

        if (!nombreCompleto) {
            newErrors.nombreCompleto = "Por favor ingresa tu nombre completo.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correo || !emailRegex.test(correo)) {
            newErrors.correo = "Ingresa un correo electrónico válido.";
        }

        const phoneDigits = telefono.replace(/\D/g, "");
        if (!telefono || phoneDigits.length < 8) {
            newErrors.telefono = "Ingresa un número de teléfono válido.";
        }

        const montoNumber = parseFloat(monto.replace(",", "."));
        if (!monto || isNaN(montoNumber) || montoNumber <= 0) {
            newErrors.monto = "Ingresa un monto aproximado mayor a cero.";
        }

        if (!frecuencia) {
            newErrors.frecuencia = "Selecciona la frecuencia de tu aporte.";
        }

        return newErrors;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

            const firstErrorField = form.querySelector(
                "[data-error='true']"
            ) as HTMLElement | null;
            if (firstErrorField) firstErrorField.focus();
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            form.reset();
        }, 900);
    };

    return (
        <main className="bg-stone-50 min-h-screen">
            <Container className="py-10 lg:py-12">
                {/* Breadcrumb */}
                <div className="mb-4">
                    <Link
                        href="/#como-ayudar"
                        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Volver a formas de apoyar</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 mb-8">
                    {/* Intro / texto */}
                    <div className="flex-1 space-y-4">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-medium text-amber-700 mb-2">
                                <HandCoins className="h-3.5 w-3.5" />
                                <span>Paso 1 · Déjanos tus datos</span>
                            </div>
                            <h1 className="text-xl sm:text-2xl font-bold text-stone-900">
                                Tu aporte se convierte en alimento, vacunas y rescates
                            </h1>
                            <p className="mt-2 text-sm text-stone-700 max-w-xl">
                                Con tu donación ayudamos a cubrir alimentación, atención básica y
                                transporte en rescates. Déjanos tus datos para compartirte las
                                opciones disponibles y el detalle de cómo se usa tu aporte.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white border border-stone-200 p-4 space-y-2">
                            <p className="text-sm font-semibold uppercase tracking-normal text-stone-500 flex items-center gap-1.5">
                                <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                                Transparencia en el uso de recursos
                            </p>
                            <p className="text-sm text-stone-700">
                                CRA se compromete a destinar las donaciones a{" "}
                                <span className="font-medium">
                                    alimento, insumos básicos, atención veterinaria y transporte
                                </span>
                                . Podemos enviarte resúmenes periódicos del impacto de tu apoyo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Formulario */}
                <section className="rounded-3xl bg-white border border-stone-200 shadow-sm p-5 sm:p-6 lg:p-7">
                    <h2 className="text-lg font-semibold text-stone-900 mb-1">
                        Formulario para donaciones
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mb-4 max-w-2xl">
                        Este formulario nos permite contactarte con la información de cuentas,
                        métodos de pago y actualizaciones sobre el uso de tu aporte.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    Nombre completo
                                </label>
                                <input
                                    name="nombreCompleto"
                                    type="text"
                                    data-error={!!errors.nombreCompleto || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.nombreCompleto
                                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                            : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                />
                                {errors.nombreCompleto && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.nombreCompleto}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    Correo electrónico
                                </label>
                                <input
                                    name="correo"
                                    type="email"
                                    data-error={!!errors.correo || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.correo
                                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                            : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                />
                                {errors.correo && (
                                    <p className="text-[11px] text-rose-600">{errors.correo}</p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    Teléfono
                                </label>
                                <input
                                    name="telefono"
                                    type="tel"
                                    data-error={!!errors.telefono || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.telefono
                                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                            : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                />
                                {errors.telefono && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.telefono}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    Monto aproximado de tu aporte (L)
                                </label>
                                <input
                                    name="monto"
                                    type="text"
                                    placeholder="Ej. 100, 250..."
                                    data-error={!!errors.monto || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.monto
                                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                            : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                />
                                {errors.monto && (
                                    <p className="text-[11px] text-rose-600">{errors.monto}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    Frecuencia de tu aporte
                                </label>
                                <select
                                    name="frecuencia"
                                    data-error={!!errors.frecuencia || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.frecuencia
                                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                            : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="unica">Única vez</option>
                                    <option value="mensual">Mensual</option>
                                    <option value="trimestral">Trimestral</option>
                                </select>
                                {errors.frecuencia && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.frecuencia}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    Comentario (opcional)
                                </label>
                                <textarea
                                    name="comentario"
                                    rows={3}
                                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600"
                                    placeholder="Si quieres, cuéntanos algo sobre tu motivación para apoyar."
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center rounded-full bg-orange-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed transition"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border-[2px] border-white border-t-transparent" />
                                        Registrando tu interés...
                                    </>
                                ) : (
                                    "Quiero donar"
                                )}
                            </button>
                        </div>
                    </form>
                </section>
            </Container>

            {/* Modal éxito */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-full max-w-md rounded-3xl bg-white border border-stone-200 shadow-xl p-6 space-y-4"
                            initial={{ opacity: 0, scale: 0.9, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 16 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-stone-900">
                                        ¡Gracias por tu interés en apoyar!
                                    </h4>
                                    <p className="text-[11px] text-stone-600">
                                        Hemos recibido tus datos. El equipo del CRA te contactará
                                        pronto con las opciones de donación y un resumen de cómo se
                                        utiliza cada aporte.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowSuccess(false)}
                                    className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-stone-800 hover:bg-stone-50"
                                >
                                    Cerrar
                                </button>
                                <Link
                                    href="/#como-ayudar"
                                    className="inline-flex items-center justify-center rounded-full bg-orange-700 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-orange-600"
                                >
                                    Volver a formas de apoyar
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
