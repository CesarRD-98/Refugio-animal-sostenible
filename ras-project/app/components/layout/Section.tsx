"use client";
import { ReactNode } from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";

interface SectionProps {
    id?: string;
    title?: string;
    eyebrow?: string;
    description?: string;
    children: ReactNode;
    className?: string;
}

export function Section({
    id,
    title,
    eyebrow,
    description,
    children,
    className = "",
}: SectionProps) {
    return (
        <motion.section
            id={id}
            className={`py-12 sm:py-16 lg:py-20 ${className}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <Container>
                {(eyebrow || title || description) && (
                    <header className="mb-8 text-center max-w-4xl mx-auto">
                        {/* EYEBROW: botón con líneas laterales */}
                        {eyebrow && (
                            <div className="mb-2">
                                <span className="inline-flex items-center text-sm sm:text-sm font-semibold uppercase tracking-wide text-orange-700">
                                    {eyebrow}
                                </span>
                            </div>
                        )}

                        {/* TITLE: estilo botón suave */}
                        {title && (
                            <h2 className="mb-4 flex items-center justify-center gap-3">
                                <span className="hidden sm:block h-px flex-1 bg-stone-200" />
                                <span className="inline-flex items-center px-3 py-1 text-xl sm:text-3xl font-semibold  tracking-normal text-stone-700">
                                    {title}
                                </span>
                                <span className="hidden sm:block h-px flex-1 bg-stone-200" />
                            </h2>
                        )}

                        {description && (
                            <p className="mt-4 text-sm sm:text-base text-stone-500">
                                {description}
                            </p>
                        )}
                    </header>
                )}
                {children}
            </Container>
        </motion.section>
    );
}
