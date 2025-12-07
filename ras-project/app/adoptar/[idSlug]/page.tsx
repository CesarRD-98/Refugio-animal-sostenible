"use client";

import { useState, FormEvent } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    PawPrint,
    ShieldCheck,
    CheckCircle2,
    ArrowLeft,
    PawPrintIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/app/components/layout/Container";
import { mockAnimals as animals } from "@/app/components/animals";

type FormErrors = {
    nombreCompleto?: string;
    telefono?: string;
    correo?: string;
    ciudad?: string;
    vivienda?: string;
    tiempoFuera?: string;
    motivo?: string;
};

export default function AdoptarPage() {
    const params = useParams();
    const idSlug = params.idSlug as string;

    const animalId = parseInt(idSlug.split("-").shift() ?? "");
    const animal = animals.find((a) => a.id === animalId);

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    // Si no se encuentra, mostramos algo simple (notFound es solo para server components)
    if (!animal) {
        return (
            <main className="bg-stone-50 min-h-screen flex items-center justify-center">
                <div className="text-center space-y-3">
                    <p className="text-sm text-stone-500">
                        No encontramos a este peludito.
                    </p>
                    <Link
                        href="/#mascotas"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-600"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver a mascotas en adopción
                    </Link>
                </div>
            </main>
        );
    }

    const isAvailable = animal.status === "En adopción";



    const validate = (formData: FormData): FormErrors => {
        const nombreCompleto = (formData.get("nombreCompleto") || "").toString().trim();
        const telefono = (formData.get("telefono") || "").toString().trim();
        const correo = (formData.get("correo") || "").toString().trim();
        const ciudad = (formData.get("ciudad") || "").toString().trim();
        const vivienda = (formData.get("vivienda") || "").toString();
        const tiempoFuera = (formData.get("tiempoFuera") || "").toString();
        const motivo = (formData.get("motivo") || "").toString().trim();

        const newErrors: FormErrors = {};

        if (!nombreCompleto) {
            newErrors.nombreCompleto = "Por favor ingresa tu nombre completo.";
        }

        const phoneDigits = telefono.replace(/\D/g, "");
        if (!telefono || phoneDigits.length < 8) {
            newErrors.telefono = "Ingresa un número de teléfono válido.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correo || !emailRegex.test(correo)) {
            newErrors.correo = "Ingresa un correo electrónico válido.";
        }

        if (!ciudad) {
            newErrors.ciudad = "Cuéntanos en qué ciudad o zona vives.";
        }

        if (!vivienda) {
            newErrors.vivienda = "Selecciona el tipo de vivienda.";
        }

        if (!tiempoFuera) {
            newErrors.tiempoFuera = "Selecciona el tiempo que pasas fuera de casa.";
        }

        if (!motivo || motivo.length < 10) {
            newErrors.motivo =
                "Cuéntanos un poco más sobre por qué quieres adoptar (al menos 10 caracteres).";
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
            // Llevar el foco al primer error
            const firstErrorField = form.querySelector(
                "[data-error='true']"
            ) as HTMLElement | null;
            if (firstErrorField) {
                firstErrorField.focus();
            }
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        // Simulación de envío
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
                        href="/#animales"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-stone-500 hover:text-stone-800"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Volver a mascotas en adopción</span>
                    </Link>
                </div>

                {/* Header vistoso */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 mb-8">
                    {/* Datos del animal */}
                    <div className="w-full max-w-sm rounded-3xl bg-white border border-stone-200 shadow-sm overflow-hidden">
                        <div className="relative h-52 w-full">
                            <Image
                                src={animal.imageUrl}
                                alt={animal.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                                Solicitud de adopción
                            </p>
                            <div className="flex items-center justify-between gap-2">
                                <h1 className="text-lg font-semibold text-stone-900 flex items-center gap-1.5">
                                    <PawPrint className="h-4 w-4 text-amber-600" />
                                    {animal.name}
                                </h1>
                                <span
                                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${isAvailable
                                        ? "bg-orange-700 text-white"
                                        : "bg-rose-400/90 text-white"
                                        }`}
                                >
                                    {animal.status}
                                </span>
                            </div>
                            <p className="text-xs text-stone-600">
                                {animal.type} · {animal.age} · {animal.size}
                            </p>
                            {animal.temperament && (
                                <p className="text-xs text-stone-600">
                                    Temperamento:{" "}
                                    <span className="font-medium text-stone-900">
                                        {animal.temperament}
                                    </span>
                                </p>
                            )}
                            <p className="text-xs text-stone-600">{animal.description}</p>
                        </div>
                    </div>

                    {/* Intro + pasos del proceso */}
                    <div className="flex-1 space-y-4">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-medium text-amber-700 mb-2">
                                <PawPrintIcon className="h-3.5 w-3.5" />
                                <span>Paso 1 · Completa tu solicitud</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                                Queremos que la adopción sea un buen match
                            </h2>
                            <p className="mt-2 text-sm text-stone-700 max-w-xl">
                                Gracias por querer darle un hogar a {animal.name}. Este
                                formulario nos ayuda a conocer mejor tu situación y asegurarnos
                                de que la adopción sea positiva tanto para ti como para el
                                peludito. No es un examen, es una guía para acompañarte en el
                                proceso.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white border border-stone-200 p-4 space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 flex items-center gap-1.5">
                                <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                                ¿Cómo funciona la adopción?
                            </p>
                            <ol className="mt-1 space-y-1 text-xs sm:text-sm text-stone-700 list-decimal list-inside">
                                <li>Completas este formulario con información básica.</li>
                                <li>El equipo del refugio revisa tu solicitud y te contacta.</li>
                                <li>
                                    Se resuelven dudas y se coordina una visita o encuentro con el
                                    peludito.
                                </li>
                                <li>
                                    Si todo va bien, se acuerda la adopción y se realiza una
                                    entrega responsable.
                                </li>
                                <li>
                                    Durante los primeros días, el refugio está disponible para
                                    acompañarte en la adaptación.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Formulario de adopción */}
                <section className="rounded-3xl bg-white border border-stone-200 shadow-sm p-5 sm:p-6 lg:p-7">
                    <h3 className="text-lg font-semibold text-stone-900 mb-1">
                        Formulario de adopción
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mb-4 max-w-2xl">
                        Completa la siguiente información con la mayor sinceridad posible.
                        Nos ayuda a evaluar si las necesidades de {animal.name} encajan con
                        tu hogar y tu estilo de vida.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Datos personales */}
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
                                    <p className="text-[11px] text-rose-600">
                                        {errors.correo}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    Ciudad / zona
                                </label>
                                <input
                                    name="ciudad"
                                    type="text"
                                    data-error={!!errors.ciudad || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.ciudad
                                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                        : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                />
                                {errors.ciudad && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.ciudad}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Hogar */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    ¿Vives en casa o apartamento?
                                </label>
                                <select
                                    name="vivienda"
                                    data-error={!!errors.vivienda || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.vivienda
                                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                        : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="casa">Casa</option>
                                    <option value="apartamento">Apartamento</option>
                                    <option value="otro">Otro</option>
                                </select>
                                {errors.vivienda && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.vivienda}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    ¿Tienes otras mascotas?
                                </label>
                                <input
                                    name="otrasMascotas"
                                    type="text"
                                    placeholder="Ej. 1 perro, 1 gato, ninguna..."
                                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600"
                                />
                            </div>
                        </div>

                        {/* Tiempo y motivación */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    ¿Cuánto tiempo pasas fuera de casa al día?
                                </label>
                                <select
                                    name="tiempoFuera"
                                    data-error={!!errors.tiempoFuera || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.tiempoFuera
                                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                        : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="0-4">De 0 a 4 horas</option>
                                    <option value="4-8">De 4 a 8 horas</option>
                                    <option value="8-10">De 8 a 10 horas</option>
                                    <option value="10+">Más de 10 horas</option>
                                </select>
                                {errors.tiempoFuera && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.tiempoFuera}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-stone-800">
                                    ¿Por qué quieres adoptar?
                                </label>
                                <textarea
                                    name="motivo"
                                    rows={3}
                                    data-error={!!errors.motivo || undefined}
                                    className={`w-full rounded-xl border bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:bg-white focus:ring-1 ${errors.motivo
                                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                                        : "border-stone-300 focus:border-orange-600 focus:ring-orange-600"
                                        }`}
                                    placeholder="Cuéntanos brevemente tus motivos para adoptar."
                                />
                                {errors.motivo && (
                                    <p className="text-[11px] text-rose-600">
                                        {errors.motivo}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Peludito */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-semibold text-stone-800">
                                ¿A qué peludito te interesa adoptar?
                            </label>
                            <input
                                name="peludito"
                                type="text"
                                defaultValue={animal.name}
                                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-900 outline-none focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600"
                            />
                        </div>

                        {/* Botón */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center rounded-full bg-orange-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed transition"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border-[2px] border-white border-t-transparent" />
                                        Enviando solicitud...
                                    </>
                                ) : (
                                    "Enviar solicitud de adopción"
                                )}
                            </button>
                        </div>
                    </form>
                </section>
            </Container>

            {/* Modal de éxito */}
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
                                        ¡Solicitud enviada!
                                    </h4>
                                    <p className="text-[11px] text-stone-600">
                                        Hemos registrado tu interés en adoptar a {animal.name}. El
                                        refugio se pondrá en contacto contigo para seguir con el
                                        proceso.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowSuccess(false)}
                                    className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-stone-800 hover:bg-stone-50"
                                >
                                    Seguir en esta página
                                </button>
                                <Link
                                    href="/#mascotas"
                                    className="inline-flex items-center justify-center rounded-full bg-orange-700 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-orange-600"
                                >
                                    <PawPrint className="h-4 w-4 mr-1.5" />
                                    Volver a mascotas
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
