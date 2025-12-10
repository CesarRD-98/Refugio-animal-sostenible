// app/apadrinar/page.tsx
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/app/components/layout/Container";
import { ArrowLeft, CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";

type FormErrors = {
    nombreCompleto?: string;
    correo?: string;
    telefono?: string;
    aporteMensual?: string;
    canalContacto?: string;
};

export default function ApadrinarPage() {
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = (formData: FormData): FormErrors => {
        const nombreCompleto = (formData.get("nombreCompleto") || "").toString().trim();
        const correo = (formData.get("correo") || "").toString().trim();
        const telefono = (formData.get("telefono") || "").toString().trim();
        const aporteMensual = (formData.get("aporteMensual") || "").toString().trim();
        const canalContacto = (formData.get("canalContacto") || "").toString();

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

        const montoNumber = parseFloat(aporteMensual.replace(",", "."));
        if (!aporteMensual || isNaN(montoNumber) || montoNumber <= 0) {
            newErrors.aporteMensual = "Indica un monto aproximado de apoyo mensual.";
        }

        if (!canalContacto) {
            newErrors.canalContacto = "Selecciona cómo prefieres que te contactemos.";
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
                    <div className="flex-1 space-y-4">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-medium text-amber-700 mb-2">
                                <HeartHandshake className="h-3.5 w-3.5" />
                                <span>Paso 1 · Cuéntanos cómo quieres apoyar</span>
                            </div>
                            <h1 className="text-xl sm:text-2xl font-bold text-stone-900">
                                Apadrina a un peludito mientras encuentra su hogar
                            </h1>
                            <p className="mt-2 text-sm text-stone-700 max-w-xl">
                                El padrinazgo ayuda a cubrir alimento, vacunas y cuidados
                                básicos de un peludito específico. Te enviamos noticias
                                periódicas sobre su avance y, cuando sea adoptado, también
                                celebramos contigo.
                            </p>
                        </div>

                        <div className="rounded-md bg-white border border-stone-200 p-4 space-y-2">
                            <p className="text-sm font-semibold uppercase tracking-normal text-stone-500 flex items-center gap-1.5">
                                <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                                ¿Cómo funciona el padrinazgo?
                            </p>
                            <ol className="mt-1 space-y-1 text-sm text-stone-700 list-decimal list-inside">
                                <li>Registras tus datos y el aporte mensual aproximado.</li>
                                <li>El equipo del CRA te contacta para asignarte un peludito.</li>
                                <li>Recibes información sobre su estado de salud y avance.</li>
                                <li>Te enviamos actualizaciones periódicas mientras esté en el refugio.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <section className="rounded-md bg-white border border-stone-200 shadow-sm p-5 sm:p-6 lg:p-7">
                    <h2 className="text-lg font-semibold text-stone-900 mb-1">
                        Formulario de padrinazgo
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mb-4 max-w-2xl">
                        Con esta información podemos contactarte, proponerte un peludito y
                        explicarte los medios de pago disponibles.
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
                                    className={`w-full rounded-md border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.nombreCompleto
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
                                    className={`w-full rounded-md border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.correo
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
                                    className={`w-full rounded-md border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.telefono
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
                                    Aporte mensual aproximado (L)
                                </label>
                                <input
                                    name="aporteMensual"
                                    type="text"
                                    placeholder="Ej. 150, 300..."
                                    data-error={!!errors.aporteMensual || undefined}
                                    className={`w-full rounded-md border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.aporteMensual
                                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                            : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                />
                                {errors.aporteMensual && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.aporteMensual}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    ¿Cómo prefieres que te contactemos?
                                </label>
                                <select
                                    name="canalContacto"
                                    data-error={!!errors.canalContacto || undefined}
                                    className={`w-full rounded-md border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.canalContacto
                                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                            : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="whatsapp">WhatsApp</option>
                                    <option value="correo">Correo electrónico</option>
                                    <option value="llamada">Llamada telefónica</option>
                                </select>
                                {errors.canalContacto && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.canalContacto}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    ¿Te gustaría apadrinar a algún tipo de peludito en especial?
                                </label>
                                <input
                                    name="preferencia"
                                    type="text"
                                    placeholder="Ej. perro pequeño, gato adulto, sin preferencia..."
                                    className="w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-xs font-semibold text-stone-800">
                                Comentario (opcional)
                            </label>
                            <textarea
                                name="comentario"
                                rows={3}
                                className="w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600"
                                placeholder="Si quieres, cuéntanos por qué decidiste apadrinar."
                            />
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
                                        Registrando tu padrinazgo...
                                    </>
                                ) : (
                                    "Quiero apadrinar"
                                )}
                            </button>
                        </div>
                    </form>
                </section>
            </Container>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-full max-w-md rounded-md bg-white border border-stone-200 shadow-xl p-6 space-y-4"
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
                                        ¡Gracias por querer apadrinar!
                                    </h4>
                                    <p className="text-[11px] text-stone-600">
                                        Hemos recibido tus datos. El equipo del CRA te contactará
                                        para asignarte un peludito y compartirte los pasos a seguir.
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
