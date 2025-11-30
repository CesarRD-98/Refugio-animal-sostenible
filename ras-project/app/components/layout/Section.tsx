'use client'
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
                    <header className="mb-8 text-center max-w-2xl mx-auto">
                        {eyebrow && (
                            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-stone-900">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="mt-3 text-sm sm:text-base text-stone-600">
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
